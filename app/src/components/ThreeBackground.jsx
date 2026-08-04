import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 80;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // --- Circular Particle Texture Generator ---
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Gradient for glow
        const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
        grad.addColorStop(0.2, 'rgba(0, 255, 255, 0.8)');
        grad.addColorStop(0.5, 'rgba(138, 43, 226, 0.4)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 32, 32);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const particleTexture = createParticleTexture();

    // --- Particle Network Logic ---
    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];
    const origPositions = [];

    const minDistance = 25; // Connection line threshold
    const areaSize = 100; // Particle bounding box

    for (let i = 0; i < particleCount; i++) {
      // Position
      const x = (Math.random() - 0.5) * areaSize;
      const y = (Math.random() - 0.5) * areaSize;
      const z = (Math.random() - 0.5) * areaSize;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      origPositions.push({ x, y, z });

      // Velocity
      velocities.push({
        x: (Math.random() - 0.5) * 0.05,
        y: (Math.random() - 0.5) * 0.05,
        z: (Math.random() - 0.5) * 0.05,
      });
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 3.5,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // --- Connections System ---
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
    });

    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(particleCount * particleCount * 6);
    lineGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(linePositions, 3)
    );

    const connectionLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(connectionLines);

    // --- Interaction States ---
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollY = 0;

    const handleMouseMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 40;
      mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 40;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // --- Animation Loop ---
    const clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const posAttr = particles.geometry.attributes.position;
      const posArray = posAttr.array;

      // Inertia for mouse
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Update Camera / Scene Rotations based on mouse and scroll
      particles.rotation.y = mouse.x * 0.005 + scrollY * 0.0005;
      particles.rotation.x = mouse.y * 0.005;
      connectionLines.rotation.copy(particles.rotation);

      // Line rendering indices
      let lineIndex = 0;
      const linePosArray = connectionLines.geometry.attributes.position.array;

      // Update Particle Physics
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;

        // Apply constant floaty velocity
        posArray[i3] += velocities[i].x;
        posArray[i3 + 1] += velocities[i].y;
        posArray[i3 + 2] += velocities[i].z;

        // Boundary checks (bounce back)
        const halfSize = areaSize / 2;
        if (Math.abs(posArray[i3]) > halfSize) velocities[i].x *= -1;
        if (Math.abs(posArray[i3 + 1]) > halfSize) velocities[i].y *= -1;
        if (Math.abs(posArray[i3 + 2]) > halfSize) velocities[i].z *= -1;

        // Mouse attraction / push effect in 3D
        // Map 2D mouse coordinates back to depth
        const particleX = posArray[i3];
        const particleY = posArray[i3 + 1];
        const dx = mouse.x - particleX;
        const dy = mouse.y - particleY;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        if (distToMouse < 20) {
          // Push particles slightly away from cursor
          const force = (20 - distToMouse) * 0.01;
          posArray[i3] -= dx * force;
          posArray[i3 + 1] -= dy * force;
        }

        // Check distance to other particles for connections
        for (let j = i + 1; j < particleCount; j++) {
          const j3 = j * 3;
          const dx2 = posArray[i3] - posArray[j3];
          const dy2 = posArray[i3 + 1] - posArray[j3 + 1];
          const dz2 = posArray[i3 + 2] - posArray[j3 + 2];
          const dist = Math.sqrt(dx2 * dx2 + dy2 * dy2 + dz2 * dz2);

          if (dist < minDistance) {
            // Particle 1
            linePosArray[lineIndex++] = posArray[i3];
            linePosArray[lineIndex++] = posArray[i3 + 1];
            linePosArray[lineIndex++] = posArray[i3 + 2];

            // Particle 2
            linePosArray[lineIndex++] = posArray[j3];
            linePosArray[lineIndex++] = posArray[j3 + 1];
            linePosArray[lineIndex++] = posArray[j3 + 2];
          }
        }
      }

      // Notify Three.js that position buffer values changed
      posAttr.needsUpdate = true;
      
      // Update line segments drawing count
      connectionLines.geometry.setDrawRange(0, lineIndex);
      connectionLines.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // --- Resize Event ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
      particleGeometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    />
  );
}
