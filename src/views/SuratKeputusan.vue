<template>
  <div>
    <Navbar />
    <div class="container h-screen">
      <div class="box mx-auto position-relative">
        <div class="w-full items-center pt-3">
         <div class="p-1 w-24 bg-opacity-50 bg-secondary mt-4 mx-auto rounded-full"></div>
        </div>
        <div class="w-full text-center mt-5">
          <h2 class="text-secondary">Surat Keputusan</h2>
        </div>
        <div class="row">
          <div class="col text-center" style="margin-top: 15vh;">
            <button type="button" class="btn btn-primary btn-lg py-3">Pilih Tanggal Surat</button>
          </div>
        </div>
        <div class="row">
          <div class="col text-center mt-4">
            <button
              type="button"
              class="btn btn-primary btn-lg py-3"
              style="width: 15vw;"
            >Tambahkan Info Surat Keputusan</button>
          </div>
        </div>
        <div class="row">
          <div class="col text-center">
            <button
              type="button"
              class="btn btn-success btn-lg py-3"
              style="margin-top: 15vh;"
              @click="uploadFile"
            >Selanjutnya</button>
          </div>
        </div>
      </div>
    </div>
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
    uploadFile () {
      this.$router.push({ path: `/upload` })
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
