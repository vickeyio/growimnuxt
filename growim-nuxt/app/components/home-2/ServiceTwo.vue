<template>
  <section class="service-two py-5">
    <div class="service-two__bg" style="background-image: url(/assets/images/shapes/service-2-shape-bg.png);"></div>
    <h5 class="service-two__title">SERVICES</h5>
    <div class="service-two__slide-text mb-4">
      <ul class="service-two__slide-text__list list-unstyled d-flex gap-4">
        <li>BRANDING</li>
        <li>MARKETING</li>
        <li>DEVELOPMENT</li>
        <li>SEO OPTIMIZATION</li>
        <li>GROWTH STRATEGY</li>
      </ul>
    </div>
    <div class="container">
      <div class="row gutter-y-30">
        <!-- Featured Large Service Card -->
        <div class="col-lg-8">
          <div class="service-two__item d-flex align-items-center">
            <div class="service-two__item__content p-4">
              <h3 class="service-two__item__title">
                <NuxtLink to="/services/seo-optimized">SEO & Analytics</NuxtLink>
              </h3>
              <p class="service-two__item__text text-muted">
                In order to scale new customer acquisition and retention for enterprise brands, we work across the entire search and conversion ecosystem.
              </p>
              <NuxtLink class="service-two__item__rm" to="/services/seo-optimized">
                <i class="flaticon-up-right-arrow"></i>
              </NuxtLink>
            </div>
            <div class="service-two__item__image d-none d-md-block">
              <img src="/assets/images/resources/service-2-1.jpg" alt="SEO & Analytics" class="img-fluid rounded" />
            </div>
          </div>
        </div>

        <!-- Service Card 2 -->
        <div class="col-lg-4">
          <div class="service-two__item service-two__item--no-image p-4">
            <div class="service-two__item__content">
              <h3 class="service-two__item__title">
                <NuxtLink to="/services/digital-marketing">Digital Strategy</NuxtLink>
              </h3>
              <p class="service-two__item__text text-muted">
                Full-funnel audience research, creative messaging architectures, and multi-channel marketing campaigns.
              </p>
              <NuxtLink class="service-two__item__rm" to="/services/digital-marketing">
                <i class="flaticon-up-right-arrow"></i>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Service Card 3 -->
        <div class="col-lg-4">
          <div class="service-two__item service-two__item--no-image p-4">
            <div class="service-two__item__content">
              <h3 class="service-two__item__title">
                <NuxtLink to="/services/web-development">Web Development</NuxtLink>
              </h3>
              <p class="service-two__item__text text-muted">
                Lightning fast Nuxt 4 and Vue 3 frontend architectures engineered for flawless user experience.
              </p>
              <NuxtLink class="service-two__item__rm" to="/services/web-development">
                <i class="flaticon-up-right-arrow"></i>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Service Card 4 -->
        <div class="col-lg-8">
          <div class="service-two__item d-flex align-items-center">
            <div class="service-two__item__content p-4">
              <h3 class="service-two__item__title">
                <NuxtLink to="/services/digital-marketing">Paid Performance Media</NuxtLink>
              </h3>
              <p class="service-two__item__text text-muted">
                High-converting paid search, social scale, programmatic media buys, and real-time ROAS optimization.
              </p>
              <NuxtLink class="service-two__item__rm" to="/services/digital-marketing">
                <i class="flaticon-up-right-arrow"></i>
              </NuxtLink>
            </div>
            <div class="service-two__item__image d-none d-md-block">
              <img src="/assets/images/resources/service-2-1.jpg" alt="Paid Performance Media" class="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
