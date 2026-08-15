<template>
  <section class="main-banner-three py-5 position-relative overflow-hidden">
    <div class="main-banner-three__bg" style="background-image: url(/assets/images/shapes/main-banner-bg-3.png);"></div>
    <div class="container-fluid px-lg-5">
      <div class="row align-items-center mb-4">
        <div class="col-lg-8">
          <h1 class="main-banner-three__title display-4 font-weight-bold text-uppercase mb-0">
            Top Digital Marketing <br />& Tech Agency
          </h1>
        </div>
        <div class="col-lg-4 mt-4 mt-lg-0">
          <p class="main-banner-three__text lead text-muted mb-3">
            We develop immersive, high-converting digital experiences that drive enterprise market leadership.
          </p>
          <NuxtLink class="growim-btn" to="/services">
            <span class="growim-btn__text">Our Services</span>
            <span class="growim-btn__icon"><i class="flaticon-up-right-arrow"></i></span>
          </NuxtLink>
        </div>
      </div>

      <div class="main-banner-three__image position-relative rounded overflow-hidden shadow mt-4">
        <img src="/assets/images/backgrounds/banner-three.jpg" alt="Growim Presentation" class="img-fluid w-100" />
        <div class="main-banner-three__image__clients position-absolute bottom-0 start-0 m-4 p-3 bg-white rounded shadow-sm d-flex align-items-center gap-2">
          <img src="/assets/images/resources/client-1-1.png" alt="Client" class="rounded-circle" width="32" />
          <img src="/assets/images/resources/client-1-2.png" alt="Client" class="rounded-circle" width="32" />
          <img src="/assets/images/resources/client-1-3.png" alt="Client" class="rounded-circle" width="32" />
          <span class="small font-weight-bold text-dark">1.5k Happy Clients</span>
        </div>
      </div>
    </div>
  </section>
</template>
