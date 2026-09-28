import json
import os
from fpdf import FPDF

class ATSResumePDF(FPDF):
    def __init__(self, use_system_fonts=True):
        super().__init__(orientation="P", unit="mm", format="A4")
        self.set_margins(12, 7.5, 12)  # 12mm left/right, 7.5mm top/bottom
        self.set_auto_page_break(auto=True, margin=6.5)
        
        # Load Arial system font if available for full Unicode support
        self.font_name = "Helvetica"
        if use_system_fonts:
            try:
                self.add_font("Arial", "", "C:/Windows/Fonts/arial.ttf")
                self.add_font("Arial", "B", "C:/Windows/Fonts/arialbd.ttf")
                self.add_font("Arial", "I", "C:/Windows/Fonts/ariali.ttf")
                self.font_name = "Arial"
            except Exception as e:
                print(f"System fonts load failed: {e}. Falling back to core Helvetica.")
                self.font_name = "Helvetica"

    def footer(self):
        self.set_y(-6.5)
        self.set_font(self.font_name, "I", 7.8)
        self.set_text_color(120, 120, 120)
        self.cell(0, 4.5, f"Page {self.page_no()} of {{nb}}", align="C")

    def draw_section_header(self, title):
        self.ln(2.8)
        self.set_font(self.font_name, "B", 10.5)
        self.set_text_color(15, 76, 129)  # Deep blue accent
        self.cell(0, 4.6, title.upper(), align="L")
        self.ln(4.6)
        # Draw horizontal divider
        y = self.get_y() - 0.4
        self.set_draw_color(180, 180, 180)
        self.set_line_width(0.35)
        self.line(12, y, 198, y)
        self.ln(2.0)

    def draw_header(self, info):
        self.set_y(8.0)
        self.set_font(self.font_name, "B", 18)
        self.set_text_color(33, 33, 33)
        self.cell(0, 7.5, info["name"].upper(), align="C")
        self.ln(7.5)
        
        self.set_font(self.font_name, "B", 10.2)
        self.set_text_color(15, 76, 129)
        self.cell(0, 4.8, info["title"].upper(), align="C")
        self.ln(5.0)
        
        items = [
            (info.get('email', ''), f"mailto:{info.get('email', '')}"),
            (info.get('phone', ''), f"tel:{info.get('phone', '').replace(' ', '')}"),
            (info.get('portfolio', ''), f"https://{info.get('portfolio', '')}"),
            (info.get('github', ''), f"https://{info.get('github', '')}"),
            (info.get('linkedin', ''), f"https://{info.get('linkedin', '')}")
        ]
        items = [(txt, url) for txt, url in items if txt]
        
        divider = "   |   "
        self.set_font(self.font_name, "", 8.2)
        
        total_w = sum(self.get_string_width(txt) for txt, _ in items) + self.get_string_width(divider) * (len(items) - 1)
        start_x = (self.w - total_w) / 2
        self.set_x(start_x)
        
        for idx, (txt, url) in enumerate(items):
            self.set_text_color(85, 85, 85)
            self.cell(self.get_string_width(txt), 3.9, txt, link=url)
            if idx < len(items) - 1:
                self.set_text_color(150, 150, 150)
                self.cell(self.get_string_width(divider), 3.9, divider)
        self.ln(4.5)

    def draw_summary(self, text):
        self.draw_section_header("Profile Summary")
        self.set_font(self.font_name, "", 9.0)
        self.set_text_color(51, 51, 51)
        self.multi_cell(0, 4.0, text)
        self.ln(1.2)

    def draw_experience(self, exp_list):
        self.draw_section_header("Work Experience")
        for item in exp_list:
            if self.get_y() > 262:
                self.add_page()
            
            # Role & Duration
            self.set_font(self.font_name, "B", 9.5)
            self.set_text_color(51, 51, 51)
            self.cell(135, 4.6, f"{item['role']} - {item['company']}")
            
            # Duration on right
            self.set_font(self.font_name, "B", 8.8)
            self.set_text_color(102, 102, 102)
            self.cell(0, 4.6, item["duration"], align="R")
            self.ln(4.6)
            
            # Bullets
            self.set_font(self.font_name, "", 8.8)
            self.set_text_color(68, 68, 68)
            for bullet in item["bullets"]:
                self.set_x(15)
                self.cell(3.2, 3.9, "-")
                self.multi_cell(0, 3.9, bullet)
            self.ln(1.6)

    def draw_education(self, edu_list):
        self.draw_section_header("Education")
        for item in edu_list:
            if self.get_y() > 262:
                self.add_page()
                
            self.set_font(self.font_name, "B", 9.4)
            self.set_text_color(51, 51, 51)
            degree_str = item["degree"]
            if "grade" in item:
                degree_str += f" ({item['grade']})"
            self.cell(135, 4.4, f"{degree_str}")
            
            self.set_font(self.font_name, "B", 8.8)
            self.set_text_color(102, 102, 102)
            self.cell(0, 4.4, item["duration"], align="R")
            self.ln(4.4)
            
            self.set_font(self.font_name, "I", 8.6)
            self.set_text_color(88, 88, 88)
            self.cell(0, 3.8, item["institution"])
            self.ln(4.0)

    def draw_projects(self, projects_dict):
        self.draw_section_header("Projects")
        
        categories = [
            ("Work Projects", projects_dict["work"]),
            ("Personal Projects", projects_dict["personal"])
        ]
        
        for cat_name, proj_list in categories:
            if not proj_list:
                continue
                
            if self.get_y() > 260:
                self.add_page()

            self.set_font(self.font_name, "B", 9.5)
            self.set_text_color(15, 76, 129)
            self.cell(0, 4.3, cat_name)
            self.ln(4.3)
            
            for proj in proj_list:
                # Check for page boundary
                if self.get_y() > 254:
                    self.add_page()
                    
                # Project Name
                self.set_font(self.font_name, "B", 9.1)
                self.set_text_color(51, 51, 51)
                self.cell(0, 4.0, proj["name"])
                self.ln(4.0)
                
                # Tech Stack (Italic, colored)
                self.set_font(self.font_name, "I", 8.0)
                self.set_text_color(102, 102, 102)
                self.cell(0, 3.5, proj['technologies'])
                self.ln(3.5)
                
                # Description
                self.set_font(self.font_name, "", 8.6)
                self.set_text_color(68, 68, 68)
                self.multi_cell(0, 3.8, proj["description"])
                self.ln(1.8)
            self.ln(0.5)

    def draw_skills(self, skills_dict):
        if self.get_y() > 260:
            self.add_page()
            
        self.draw_section_header("Skills")
        
        for category, skill_list in skills_dict.items():
            self.set_font(self.font_name, "B", 8.8)
            self.set_text_color(51, 51, 51)
            self.write(4.2, f"{category}: ")
            
            self.set_font(self.font_name, "", 8.8)
            self.set_text_color(68, 68, 68)
            self.write(4.2, skill_list)
            self.ln(4.5)
        self.ln(1.4)

    def draw_publications(self, pub_list):
        if self.get_y() > 260:
            self.add_page()
            
        self.draw_section_header("Publications & Contributions")
        for pub in pub_list:
            self.set_font(self.font_name, "B", 9.1)
            self.set_text_color(51, 51, 51)
            self.cell(0, 4.1, pub["title"])
            self.ln(4.1)
            self.set_font(self.font_name, "", 8.6)
            self.set_text_color(68, 68, 68)
            self.cell(0, 3.7, pub["detail"])
            self.ln(4.0)

    def draw_activities(self, act_list):
        if self.get_y() > 260:
            self.add_page()
            
        self.draw_section_header("Activities & Extracurriculars")
        self.set_font(self.font_name, "", 8.7)
        self.set_text_color(68, 68, 68)
        for act in act_list:
            self.set_x(15)
            self.cell(3.2, 3.9, "-")
            self.multi_cell(0, 3.9, act)
        self.ln(1.4)

    def draw_references(self, ref_list):
        if self.get_y() > 265:
            self.add_page()
            
        self.draw_section_header("References")
        
        start_y = self.get_y()
        col_width = 88
        
        for idx, ref in enumerate(ref_list):
            x_pos = 12 if idx == 0 else 105
            y_pos = start_y
            
            self.set_xy(x_pos, y_pos)
            self.set_font(self.font_name, "B", 9.2)
            self.set_text_color(51, 51, 51)
            self.cell(col_width, 4.1, ref["name"])
            
            y_pos += 4.4
            self.set_xy(x_pos, y_pos)
            self.set_font(self.font_name, "I", 8.5)
            self.set_text_color(88, 88, 88)
            self.cell(col_width, 3.7, ref["title"])
            
            y_pos += 3.8
            self.set_xy(x_pos, y_pos)
            self.set_font(self.font_name, "", 8.2)
            self.set_text_color(102, 102, 102)
            self.cell(col_width, 3.5, f"Phone: {ref['phone']}")
            
            y_pos += 3.5
            self.set_xy(x_pos, y_pos)
            self.cell(col_width, 3.5, f"Email: {ref['email']}")
            
        self.set_y(start_y + 17.0)

def generate_pdf_resume(data, filepath):
    pdf = ATSResumePDF()
    pdf.add_page()
    
    # Render all sections (Full portfolio)
    pdf.draw_header(data["personal_info"])
    pdf.draw_summary(data["summary"])
    pdf.draw_experience(data["experience"])
    pdf.draw_education(data["education"])
    pdf.draw_projects(data["projects"])
    pdf.draw_skills(data["skills"])
    pdf.draw_publications(data["publications"])
    pdf.draw_activities(data["activities"])
    pdf.draw_references(data["references"])
        
    pdf.output(filepath)
    print(f"Generated PDF Resume: {filepath} ({pdf.page_no()} pages, Page {pdf.page_no()} End Y={pdf.get_y():.1f}mm / ~280mm)")

def generate_html_resume(data, filepath):
    style = """
    <style>
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            color: #2d3748;
            line-height: 1.55;
            margin: 0;
            padding: 40px;
            background-color: #f7fafc;
        }
        .container {
            max-width: 820px;
            margin: 0 auto;
            background: #ffffff;
            padding: 40px 48px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            border-radius: 4px;
        }
        h1 {
            font-size: 28px;
            margin: 0 0 5px 0;
            color: #1a202c;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .subtitle {
            font-size: 14px;
            font-weight: 600;
            color: #0f4c81;
            text-align: center;
            text-transform: uppercase;
            margin-bottom: 14px;
            letter-spacing: 0.5px;
        }
        .contact-info {
            font-size: 12.5px;
            text-align: center;
            color: #718096;
            margin-bottom: 25px;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 15px;
        }
        .contact-info a {
            color: #718096;
            text-decoration: none;
        }
        .contact-info a:hover {
            text-decoration: underline;
        }
        h2.section-title {
            font-size: 16px;
            color: #0f4c81;
            text-transform: uppercase;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 4px;
            margin-top: 28px;
            margin-bottom: 14px;
            letter-spacing: 0.5px;
        }
        .summary {
            font-size: 13.5px;
            margin-bottom: 20px;
            line-height: 1.6;
        }
        .item-header {
            display: flex;
            justify-content: space-between;
            font-weight: 700;
            font-size: 14px;
            color: #2d3748;
            margin-top: 14px;
        }
        .item-sub {
            font-style: italic;
            font-size: 13px;
            color: #718096;
            margin-bottom: 6px;
        }
        ul {
            margin: 5px 0 12px 0;
            padding-left: 20px;
        }
        li {
            font-size: 13px;
            color: #4a5568;
            margin-bottom: 4px;
            line-height: 1.5;
        }
        .project-item {
            margin-bottom: 18px;
        }
        .project-name {
            font-weight: 700;
            font-size: 13.8px;
            color: #2d3748;
        }
        .project-tech {
            font-style: italic;
            font-size: 12px;
            color: #718096;
            margin-top: 1px;
            margin-bottom: 4px;
        }
        .project-desc {
            font-size: 13px;
            color: #4a5568;
            line-height: 1.55;
        }
        .skills-grid {
            display: table;
            width: 100%;
            margin-bottom: 12px;
        }
        .skills-row {
            display: table-row;
        }
        .skills-cat {
            display: table-cell;
            font-weight: 700;
            font-size: 13px;
            width: 140px;
            padding: 5px 0;
            color: #2d3748;
        }
        .skills-val {
            display: table-cell;
            font-size: 13px;
            padding: 5px 0;
            color: #4a5568;
            line-height: 1.5;
        }
        .ref-grid {
            display: flex;
            justify-content: space-between;
            margin-top: 12px;
        }
        .ref-col {
            width: 48%;
            font-size: 13px;
        }
        .ref-name {
            font-weight: 700;
            color: #2d3748;
        }
        .ref-title {
            font-style: italic;
            color: #718096;
            margin-bottom: 2px;
        }
        .ref-contact {
            color: #718096;
            font-size: 12px;
        }
        
        @media print {
            body {
                background: #ffffff;
                padding: 0;
                color: #000000;
            }
            .container {
                box-shadow: none;
                padding: 0;
                max-width: 100%;
            }
            h2.section-title {
                border-bottom: 1.5px solid #a0aec0;
            }
            .page-break {
                page-break-before: always;
            }
        }
    </style>
    """

    info = data["personal_info"]
    
    portfolio_link = f'<a href="https://{info["portfolio"]}" target="_blank">{info["portfolio"]}</a> &nbsp;|&nbsp;' if info.get("portfolio") else ''
    
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{info['name']} - ATS Resume</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    {style}
</head>
<body>
    <div class="container">
        <!-- Header -->
        <h1>{info['name']}</h1>
        <div class="subtitle">{info['title']}</div>
        <div class="contact-info">
            {info['email']} &nbsp;|&nbsp; 
            {info['phone']} &nbsp;|&nbsp; 
            {portfolio_link}
            <a href="https://{info['github']}" target="_blank">{info['github']}</a> &nbsp;|&nbsp; 
            <a href="https://{info['linkedin']}" target="_blank">{info['linkedin']}</a>
        </div>

        <!-- Summary -->
        <h2 class="section-title">Profile Summary</h2>
        <div class="summary">
            {data['summary']}
        </div>

        <!-- Work Experience -->
        <h2 class="section-title">Work Experience</h2>
    """

    for exp in data["experience"]:
        html += f"""
        <div class="item-header">
            <span>{exp['role']} &ndash; {exp['company']}</span>
            <span>{exp['duration']}</span>
        </div>
        <ul>
        """
        for bullet in exp["bullets"]:
            html += f"<li>{bullet}</li>"
        html += "</ul>"

    # Education
    html += """
        <!-- Education -->
        <h2 class="section-title">Education</h2>
    """
    for edu in data["education"]:
        grade_str = f" ({edu['grade']})" if "grade" in edu else ""
        html += f"""
        <div class="item-header">
            <span>{edu['degree']}{grade_str}</span>
            <span>{edu['duration']}</span>
        </div>
        <div class="item-sub">{edu['institution']}</div>
        """

    # Projects
    html += """
        <!-- Projects -->
        <h2 class="section-title">Projects</h2>
    """

    # Work Projects
    html += '<div class="item-sub" style="font-weight: 700; font-size: 14px; margin-top: 14px; margin-bottom: 8px;">Work Projects</div>'
    for proj in data["projects"]["work"]:
        html += f"""
        <div class="project-item">
            <div class="project-name">{proj['name']}</div>
            <div class="project-tech">{proj['technologies']}</div>
            <div class="project-desc">{proj['description']}</div>
        </div>
        """

    # Personal Projects
    html += '<div class="item-sub" style="font-weight: 700; font-size: 14px; margin-top: 18px; margin-bottom: 8px;">Personal Projects</div>'
    for proj in data["projects"]["personal"]:
        html += f"""
        <div class="project-item">
            <div class="project-name">{proj['name']}</div>
            <div class="project-tech">{proj['technologies']}</div>
            <div class="project-desc">{proj['description']}</div>
        </div>
        """

    # Skills
    html += """
        <!-- Skills -->
        <h2 class="section-title">Skills</h2>
        <div class="skills-grid">
    """
    for cat, val in data["skills"].items():
        html += f"""
            <div class="skills-row">
                <div class="skills-cat">{cat}:</div>
                <div class="skills-val">{val}</div>
            </div>
        """
    html += "</div>"

    # Publications
    html += """
        <!-- Publications -->
        <h2 class="section-title">Publications & Contributions</h2>
    """
    for pub in data["publications"]:
        html += f"""
        <div style="margin-bottom: 10px;">
            <div style="font-weight: 700; font-size: 13.5px;">{pub['title']}</div>
            <div style="font-size: 13px; color: #4a5568;">{pub['detail']}</div>
        </div>
        """

    # Activities
    html += """
        <!-- Activities -->
        <h2 class="section-title">Activities & Extracurriculars</h2>
        <ul>
    """
    for act in data["activities"]:
        html += f"<li>{act}</li>"
    html += "</ul>"

    # References
    html += """
        <!-- References -->
        <h2 class="section-title">References</h2>
        <div class="ref-grid">
    """
    for ref in data["references"]:
        html += f"""
            <div class="ref-col">
                <div class="ref-name">{ref['name']}</div>
                <div class="ref-title">{ref['title']}</div>
                <div class="ref-contact">Phone: {ref['phone']}</div>
                <div class="ref-contact">Email: {ref['email']}</div>
            </div>
        """
    html += """
        </div>
    </div>
</body>
</html>
    """

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Generated HTML Resume: {filepath}")

def main():
    # Load JSON data
    with open("resume_data.json", "r", encoding="utf-8") as f:
        data = json.load(f)
        
    # Generate CV PDF directly
    generate_pdf_resume(data, "CV_ValentenoLenora.pdf")

if __name__ == "__main__":
    main()
