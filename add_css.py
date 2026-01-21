css_to_add = """

/* ====== VERKTØY-SIDE DARK MODE OG READING MODE FIXES ====== */

/* Dark mode fixes for tools page */
body.dark-mode section[style*="background: #f8f9fa"] {
    background: var(--bg-color) !important;
}

body.dark-mode article[style*="background: white"] {
    background: var(--bg-secondary) !important;
}

body.dark-mode h2[style*="color: #2c3e50"],
body.dark-mode h3[style*="color: #2c3e50"],
body.dark-mode label[style*="color: #2c3e50"] {
    color: var(--text-color) !important;
}

body.dark-mode p[style*="color: #555"] {
    color: var(--text-light) !important;
}

body.dark-mode div[style*="background: #f8f9fa"] {
    background: var(--bg-color) !important;
}

body.dark-mode div[style*="background: linear-gradient(135deg, #ffeaa7"] {
    background: linear-gradient(135deg, #374151 0%, #1f2937 100%) !important;
}

body.dark-mode div[style*="background: linear-gradient(135deg, #ffeaa7"] h3,
body.dark-mode div[style*="background: linear-gradient(135deg, #ffeaa7"] p {
    color: var(--text-color) !important;
}

body.dark-mode footer[style*="background: #2c3e50"] {
    background: #0f172a !important;
}

body.dark-mode input[style*="border: 2px solid #ddd"] {
    border-color: var(--border-color) !important;
    background: var(--bg-color) !important;
    color: var(--text-color) !important;
}

body.dark-mode a[style*="color: #2c3e50"] {
    color: var(--text-color) !important;
}

body.dark-mode span[style*="background: #ecf0f1"],
body.dark-mode span[style*="background: #fee"],
body.dark-mode span[style*="background: #f4ecf7"],
body.dark-mode span[style*="background: #e8f8f5"],
body.dark-mode span[style*="background: #ebf5fb"],
body.dark-mode span[style*="background: #fef5e7"],
body.dark-mode span[style*="background: #fadbd8"],
body.dark-mode span[style*="background: #e8f6f3"] {
    background: var(--bg-color) !important;
    color: var(--text-color) !important;
    border: 1px solid var(--border-color);
}

/* Reading mode fixes for tools page */
body.reading-mode section[style*="background: #f8f9fa"] {
    background: var(--bg-color) !important;
}

body.reading-mode article[style*="background: white"] {
    background: var(--bg-secondary) !important;
    border: 2px solid var(--border-color) !important;
}

body.reading-mode h2[style*="color: #2c3e50"],
body.reading-mode h3[style*="color: #2c3e50"],
body.reading-mode label[style*="color: #2c3e50"] {
    color: #78350f !important;
}

body.reading-mode p[style*="color: #555"] {
    color: #92400e !important;
}

body.reading-mode div[style*="background: #f8f9fa"] {
    background: var(--bg-color) !important;
    border: 2px solid var(--border-color) !important;
}

body.reading-mode div[style*="background: linear-gradient(135deg, #ffeaa7"] {
    background: linear-gradient(135deg, #fcd34d 0%, #fbbf24 100%) !important;
    border: 2px solid #f59e0b !important;
}

body.reading-mode footer[style*="background: #2c3e50"] {
    background: var(--bg-secondary) !important;
    border-top: 2px solid var(--border-color) !important;
}

body.reading-mode footer[style*="background: #2c3e50"] * {
    color: #78350f !important;
}

body.reading-mode a[style*="color: #2c3e50"] {
    color: #78350f !important;
}

body.reading-mode span[style*="background: #ecf0f1"],
body.reading-mode span[style*="background: #fee"],
body.reading-mode span[style*="background: #f4ecf7"],
body.reading-mode span[style*="background: #e8f8f5"],
body.reading-mode span[style*="background: #ebf5fb"],
body.reading-mode span[style*="background: #fef5e7"],
body.reading-mode span[style*="background: #fadbd8"],
body.reading-mode span[style*="background: #e8f6f3"] {
    background: var(--bg-color) !important;
    color: #78350f !important;
    border: 2px solid var(--border-color) !important;
}
"""

with open('styles.css', 'a') as f:
    f.write(css_to_add)

print('CSS added successfully')
