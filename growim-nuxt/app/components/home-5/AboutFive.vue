<template>
  <section class="about-five py-5 position-relative">
    <div class="container">
      <div class="row align-items-center gutter-y-40">
        <div class="col-xl-6">
          <div class="about-five__image position-relative">
            <img src="/assets/images/resources/about-5-1.png" alt="Growim Success" class="img-fluid" />
            <div class="position-absolute bottom-0 end-0 p-3 bg-white rounded shadow d-flex align-items-center gap-3">
              <i class="flaticon-client text-primary fa-2x"></i>
              <div>
                <h4 class="font-weight-bold mb-0">25+</h4>
                <small class="text-muted">Years of Experience</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-6">
          <div class="about-five__content">
            <div class="sec-title text-left mb-3">
              <h6 class="sec-title__tagline">ABOUT US</h6>
              <h3 class="sec-title__title">We Are Increasing<br /> Business Success</h3>
            </div>
            <p class="text-muted mb-4">
              We empower growth-stage and Fortune 500 companies with predictable client acquisition systems, high-performing websites, and data-driven marketing.
            </p>
            <div class="row gutter-y-20 mb-4">
              <div class="col-md-6">
                <div class="p-3 bg-light rounded">
                  <h6 class="font-weight-bold mb-1"><i class="flaticon-bonding text-primary me-2"></i>Problem Solving</h6>
                  <p class="small text-muted mb-0">Agile sprints and rapid technical debugging.</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="p-3 bg-light rounded">
                  <h6 class="font-weight-bold mb-1"><i class="flaticon-mission text-primary me-2"></i>Mission & Vision</h6>
                  <p class="small text-muted mb-0">Sustainable customer acquisition for long term growth.</p>
                </div>
              </div>
            </div>
            <div class="d-flex align-items-center gap-4">
              <NuxtLink class="growim-btn" to="/about">
                <span class="growim-btn__text">Explore More</span>
                <span class="growim-btn__icon"><i class="flaticon-up-right-arrow"></i></span>
              </NuxtLink>
              <div class="d-flex align-items-center gap-2">
                <img src="/assets/images/resources/about-five-author.jpg" alt="Ronald Richards" class="rounded-circle" width="45" height="45" />
                <div>
                  <h6 class="mb-0 font-weight-bold">Ronald Richards</h6>
                  <small class="text-muted">Co-Founder & CEO</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
