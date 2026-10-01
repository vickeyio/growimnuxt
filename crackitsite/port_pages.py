import os
import re

html_dir = '/var/www/html/growimnuxt'
nuxt_pages_dir = '/var/www/html/growimnuxt/crackitsite/app/pages'

pages = {
    'about.html': 'about.vue',
    'portfolio.html': 'portfolio/index.vue',
    'portfolio-details.html': 'portfolio-details.vue',
    'services.html': 'services.vue',
    'service-details.html': 'service-details.vue',
    'contact.html': 'contact.vue'
}

for html_file, vue_file in pages.items():
    html_path = os.path.join(html_dir, html_file)
    vue_path = os.path.join(nuxt_pages_dir, vue_file)
    
    if not os.path.exists(html_path):
        print(f"File not found: {html_path}")
        continue
        
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Extract body content between </header> and <footer
    match = re.search(r'</header>\s*<!-- [^\n]+-->\s*(.*?)\s*<footer', content, re.DOTALL)
    if not match:
        print(f"Could not extract body from {html_file}")
        continue
        
    body = match.group(1)
    
    # Replace assets/ with /assets/
    body = re.sub(r'([\'"])(assets/)', r'\1/\2', body)
    
    # Replace href="*.html" with href="..." (actually NuxtLink might be better but standard <a> with nuxt handles it well if we just remove .html or we can replace href with to for NuxtLink)
    # We will just remove .html from hrefs to internal pages
    body = re.sub(r'href=[\'"]([a-zA-Z0-9_-]+)\.html([#\?][^\'"]*)?[\'"]', r'href="/\1\2"', body)
    body = re.sub(r'href=[\'"]index(-[0-9]+)?\.html([#\?][^\'"]*)?[\'"]', r'href="/\2"', body)
    
    # A quick fix for href="/#"
    body = re.sub(r'href="/#"', r'href="#"', body)
    
    # Change class to class for Vue? Vue supports class.
    
    vue_content = f"""<template>
  <div>
{body}
  </div>
</template>

<script setup lang="ts">
// You can extract components later if needed.
</script>

<style scoped>
</style>
"""
    os.makedirs(os.path.dirname(vue_path), exist_ok=True)
    with open(vue_path, 'w', encoding='utf-8') as f:
        f.write(vue_content)
    
    print(f"Created {vue_file}")

