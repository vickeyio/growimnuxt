import re

file_path = '/var/www/html/growimnuxt/crackitsite/app/pages/about.vue'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Testimonials Carousel
testi_owl = r'''<div class="testimonials-four__carousel growim-owl__carousel growim-owl__carousel--with-shadow owl-carousel" data-owl-options='[^']+'>'''
testi_swiper = '''<Swiper
                                  class="testimonials-four__carousel growim-owl__carousel growim-owl__carousel--with-shadow"
                                  :modules="[SwiperAutoplay]"
                                  :loop="true"
                                  :speed="700"
                                  :autoplay="{ delay: 5000 }"
                                  :space-between="30"
                                  :breakpoints="{
                                    0: { slidesPerView: 1 },
                                    575: { slidesPerView: 1.9 },
                                    992: { slidesPerView: 1.3 },
                                    1200: { slidesPerView: 1.8 },
                                    1600: { slidesPerView: 2.49 }
                                  }"
                                >'''
content = re.sub(testi_owl, testi_swiper, content)

# Replace Team Carousel
team_owl = r'''<div class="team-four__carousel growim-owl__carousel growim-owl__carousel--with-shadow growim-owl__carousel--basic-nav owl-carousel owl-theme" data-owl-options='[^']+'>'''
team_swiper = '''<Swiper
                  class="team-four__carousel growim-owl__carousel growim-owl__carousel--with-shadow growim-owl__carousel--basic-nav"
                  :modules="[SwiperNavigation]"
                  :loop="false"
                  :speed="700"
                  :navigation="true"
                  :space-between="30"
                  :breakpoints="{
                    0: { slidesPerView: 1 },
                    500: { slidesPerView: 2 },
                    992: { slidesPerView: 3 }
                  }"
                >'''
content = re.sub(team_owl, team_swiper, content)

# Replace <div class="item"> with <SwiperSlide>
# We'll just replace all <div class="item"> with <SwiperSlide> inside the carousels.
# To be safe, we can just replace all <div class="item"> and its closing </div>
# Actually, an easier way is to just do a global replace for <div class="item"> and </div><!-- item -->
content = content.replace('<div class="item">', '<SwiperSlide>')
content = content.replace('</div><!-- item -->', '</SwiperSlide>')

# Add Swiper imports to script setup
script_setup = r'<script setup lang="ts">'
script_imports = '''<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay as SwiperAutoplay, Navigation as SwiperNavigation } from 'swiper/modules'
'''
content = content.replace(script_setup, script_imports)

# One carousel ends with </div><!-- /.growim-stretch-element-inside-column -->
# We need to make sure we replace the closing </div> of the owl-carousel with </Swiper>
# It's tricky to find the exact closing div. We know they are followed by <!-- /.growim-stretch-element-inside-column --> and <!-- /.container -->
# Let's fix this manually with replace_file_content afterwards or carefully here.
content = re.sub(r'(\s*)</div>(\s*<!-- /.growim-stretch-element-inside-column -->)', r'\1</Swiper>\2', content)
content = re.sub(r'(\s*)</div>(\s*</div><!-- /.container -->)', r'\1</Swiper>\2', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
