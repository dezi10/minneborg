import re
import os

sleipnir = '''<a href="index.html" class="logo-link" style="text-decoration: none; display: flex; align-items: center; gap: 10px;">
                    <svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" style="width: 45px; height: 36px;">
                        <path d="M15 35 Q20 25 35 25 Q50 25 60 30 Q70 35 73 40 Q75 45 70 48" fill="none" stroke="currentColor" stroke-width="3"/>
                        <path d="M70 48 Q77 45 83 48 Q85 52 80 55 Q75 57 70 53" fill="none" stroke="currentColor" stroke-width="3"/>
                        <circle cx="77" cy="48" r="2" fill="currentColor"/>
                        <line x1="23" y1="35" x2="20" y2="60" stroke="currentColor" stroke-width="2.5"/>
                        <line x1="27" y1="35" x2="25" y2="58" stroke="currentColor" stroke-width="2.5"/>
                        <line x1="37" y1="32" x2="35" y2="60" stroke="currentColor" stroke-width="2.5"/>
                        <line x1="43" y1="32" x2="42" y2="58" stroke="currentColor" stroke-width="2.5"/>
                        <line x1="50" y1="34" x2="50" y2="60" stroke="currentColor" stroke-width="2.5"/>
                        <line x1="55" y1="36" x2="57" y2="58" stroke="currentColor" stroke-width="2.5"/>
                        <line x1="61" y1="40" x2="65" y2="60" stroke="currentColor" stroke-width="2.5"/>
                        <line x1="65" y1="42" x2="70" y2="58" stroke="currentColor" stroke-width="2.5"/>
                        <path d="M15 35 Q7 40 10 50 Q13 45 15 48" fill="none" stroke="currentColor" stroke-width="2.5"/>
                    </svg>
                    <span style="font-size: 1.3em; font-weight: 700; letter-spacing: 2px; color: #2c3e50;">MINNEBORG</span>
                </a>'''

folder = "/Users/dejanzivanovic/Desktop/Prosjekter/cv-portfolio"
files = ["index.html", "om.html", "artikler.html", "artikkel-1.html", "artikkel-2.html", "artikkel-3.html", "arbeid.html", "verktoy.html", "kontakt.html"]

for f in files:
    filepath = os.path.join(folder, f)
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as file:
            content = file.read()
        pattern = r'<a href="index\.html" class="logo-link"[^>]*>.*?</a>'
        new_content = re.sub(pattern, sleipnir, content, flags=re.DOTALL, count=1)
        with open(filepath, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f"Updated {f}")

print("Done!")
