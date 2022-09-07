<template>
  <div>
    <Navbar />
    <section id="jenis_arsip" class="sb">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mx-auto screen-box position-relative">
            <div class="w-full items-center pt-3">
              <div class="p-1 w-24 bg-opacity-50 bg-secondary mt-4 mx-auto rounded-full"></div>
            </div>
            <div class="row col-12 text-center">
              <h6>Pilih Jenis Arsip yang Ingin Disimpan</h6>
            </div>
            <div class="row mx-5 my-5">
              <div class="col-lg-6 my-2 col-md-12" @click="suratKeputusan">
                <div class="card border-2">
                  <div class="card-img-top">
                    <img :src="require(`../assets/images/img_48.png`)" alt="" style="width: 57%;">
                  </div>
                  <div class="card-body card-subtitle">
                    <p class="card-text">Surat Keputusan</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 my-2 col-md-12">
                <div class="card border-2">
                  <div class="card-img-top">
                    <img :src="require(`../assets/images/img_21.png`)" alt="" style="width: 85%;">
                  </div>
                  <div class="card-body card-subtitle">
                    <p class="card-text">Perjanjian Kerjasama</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 my-2 col-md-12">
                <div class="card border-2">
                  <div class="card-img-top">
                    <img :src="require(`../assets/images/img_30.png`)" alt="">
                  </div>
                  <div class="card-body card-subtitle">
                    <p class="card-text">Bukti Kepemilikan Aset</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 my-2 col-md-12">
                <div class="card border-2">
                  <div class="card-img-top">
                    <img :src="require(`../assets/images/img_23.png`)" alt="" style="width: 80%;">
                  </div>
                  <div class="card-body card-subtitle">
                    <p class="card-text">Kegiatan Penting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'SuratKeputusan',
  components: {
    Navbar
  },
  methods: {
    suratKeputusan () {
      this.$router.push({ path: `/surat-keputusan` })
    }
  }
}
</script>

<style>
  .h-screen {
    height: 100vh;
    /* border: 1px solid; */
    padding-top: 5%;
  }

  .w-full {
    width: 100%;
  }
  .items-center {
    align-items: center;
  }
  .rounded-full {
    border-radius: 9999px;
  }
  .w-24 {
    width: 6rem;
  }
  .cek {
    border: 1px solid;
    margin-left: 4em;
    margin-right: 4em;
  }
  .box {
    /* border: 3px solid red; */
    max-width: 800px;
    height: 100%;
    background-color: #F3F5F9;
    border-top-left-radius: 10%;
    border-top-right-radius: 10%;
    padding-bottom: 0;
  }
</style>
