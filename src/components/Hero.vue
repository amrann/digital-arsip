<template>
  <div class="hero">
    <!-- Dekstop Mode -->
    <!-- <div class="d-none d-md-block"> -->
    <div>
      <div class="row">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h1 class="display-2">
                <strong>Digital Arsip</strong>
                <br /><strong>Kota Makassar</strong>
                <!-- <br />in Your Gadget -->
              </h1>
              <h4>Web Arsip Digital untuk mempermudah dalam</h4>
              <h4>melakukan pengarsipan berkas dan surat</h4>
              <h4>Kota Makassar</h4><br />
              <!-- <span class="display-4">Web Arsip Digital untuk mempermudah dalam</span><br />
              <span class="display-4">melakukan pengarsipan berkas dan surat</span><br />
              <span class="display-4">Kota Makassar</span><br /> <br /> -->
              <router-link class="btn btn-lg btn-success" to="/foods">
                Mulai Sekarang
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/images/asdas1.png"/>
        </div>
      </div>
      <!-- <div class="row">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0099ff" fill-opacity="1" d="M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,96C672,107,768,117,864,128C960,139,1056,149,1152,144C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div> -->
    </div>
    <!-- Mobile -->
    <!-- <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6 mb-3">
          <img src="../assets/images/hero.png" width="100%" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Delicious Food Menu,</strong>
                <br />in Your Gadget
              </h2>
              <p>Ayo segera pilih dan pesan makanan favorit Anda</p>
              <button class="btn btn-lg btn-success">
                <b-icon-arrow-right></b-icon-arrow-right>Pesan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped>
  img {
    max-height: 500px;
    width: 100%;
  }
</style>
