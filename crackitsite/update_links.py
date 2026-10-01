import re

files = [
    '/var/www/html/growimnuxt/crackitsite/app/components/common/AppHeader.vue',
    '/var/www/html/growimnuxt/crackitsite/app/components/common/AppFooter.vue'
]

# Map specific link texts to the exact route
text_routes_map = {
    'About': '/about',
    'Growim About': '/about',
    'Our Portfolio': '/portfolio',
    'Portfolio Details': '/portfolio-details',
    'Service Page': '/services',
    'Service Details': '/service-details',
    'Contact': '/contact',
    'Contact Us': '/contact'
}

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Pass 1: Replace based on exact text content
    for text, route in text_routes_map.items():
        pattern = r'<a\s+href="[^"]*"\s*>(\s*' + re.escape(text) + r'\s*)</a>'
        replacement = r'<NuxtLink to="' + route + r'">\1</NuxtLink>'
        content = re.sub(pattern, replacement, content, flags=re.IGNORECASE)

    # Pass 2: Replace any remaining href="#about", href="#services", etc. with href="/about"
    content = content.replace('href="#about"', 'href="/about"')
    content = content.replace('href="#portfolio"', 'href="/portfolio"')
    content = content.replace('href="#services"', 'href="/services"')
    content = content.replace('href="#contact"', 'href="/contact"')

    # Pass 3: Convert the remaining <a href="/something"> to <NuxtLink to="/something">
    content = re.sub(r'<a\s+href="(/about|/portfolio|/portfolio-details|/services|/service-details|/contact)"(.*?)>(.*?)</a>', 
                     r'<NuxtLink to="\1"\2>\3</NuxtLink>', content)
    
    # Check for cases where the <a> had other attributes
    # The regex above captures (.*?) for other attributes and (.*?) for content
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Links updated successfully.")
