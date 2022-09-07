<template>
  <div>
    <Navbar />
    <div class="arsip container">
      <div class="row mx-4 text-center">
        <div class="col">
          <h2>
            ARSIP DIGITAL SKPD
          </h2>
        </div>
      </div>
      <div class="row mb-4">
        <!-- <div class="col-md-4 mt-4" v-for="prd in itemProducts" :key="prd.id">
          <CardProduct :product="prd" />
        </div> -->
        <!-- Line #1 -->
        <div class="col-lg-2 col-md-3 col-sm-6 mt-4">
          <div class="card border-0 bg-transparent text-center">
            <td>
              <img :src="require(`../assets/images/arsip/black.png`)" class="card-img-top" alt="..." />
            </td>
            <div class="card-body">
              <h5 class="card-title">Dinas Arsip</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 mt-4">
          <div class="card border-0 bg-transparent text-center">
            <td>
              <img :src="require(`../assets/images/arsip/orange.png`)" class="card-img-top" alt="..." />
            </td>
            <div class="card-body">
              <h5 class="card-title">Dinas Perpustakaan</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 mt-4">
          <div class="card border-0 bg-transparent text-center">
            <td>
              <img :src="require(`../assets/images/arsip/white.png`)" class="card-img-top" alt="..." />
            </td>
            <div class="card-body">
              <h5 class="card-title">Dinas Pertanahan</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 mt-4">
          <div class="card border-0 bg-transparent text-center">
            <td>
              <img :src="require(`../assets/images/arsip/yellow.png`)" class="card-img-top" alt="..." />
            </td>
            <div class="card-body">
              <h5 class="card-title">Dinas Ketahanan Pangan</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 mt-4">
          <div class="card border-0 bg-transparent text-center">
            <td>
              <img :src="require(`../assets/images/arsip/pink.png`)" class="card-img-top" alt="..." />
            </td>
            <div class="card-body">
              <h5 class="card-title">Dinas Pariwisata</h5>
            </div>
          </div>
        </div>
        <!-- Line #2 -->
        <div class="col-lg-2 col-md-3 col-sm-6 mt-4">
          <div class="card border-0 bg-transparent text-center">
            <td>
              <img :src="require(`../assets/images/arsip/blue.png`)" class="card-img-top" alt="..." />
            </td>
            <div class="card-body">
              <h5 class="card-title ">Dukcapil</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 mt-4">
          <div class="card border-0 bg-transparent text-center">
            <td>
              <img :src="require(`../assets/images/arsip/yellow.png`)" class="card-img-top" alt="..." />
            </td>
            <div class="card-body">
              <h5 class="card-title ">Dinas Pendapatan Daerah</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 mt-4">
          <div class="card border-0 bg-transparent text-center">
            <td>
              <img :src="require(`../assets/images/arsip/red.png`)" class="card-img-top" alt="..." />
            </td>
            <div class="card-body">
              <h5 class="card-title ">Dinas Pemadam Kebakaran</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 mt-4">
          <div class="card border-0 bg-transparent text-center">
            <td>
              <img :src="require(`../assets/images/arsip/tosca.png`)" class="card-img-top" alt="..." />
            </td>
            <div class="card-body">
              <h5 class="card-title">Dinas Lingkungan Hidup</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 mt-4">
          <div class="card border-0 bg-transparent text-center">
            <td>
              <img :src="require(`../assets/images/arsip/white.png`)" class="card-img-top" alt="..." />
            </td>
            <div class="card-body">
              <h5 class="card-title">Dinas Kesehatan</h5>
            </div>
          </div>
        </div>
        <!-- Line #3 -->
        <div class="col-lg-2 col-md-3 col-sm-6 mt-4">
          <div class="card border-0 bg-transparent text-center">
            <td>
              <img :src="require(`../assets/images/arsip/green.png`)" class="card-img-top" alt="..." />
            </td>
            <div class="card-body">
              <h5 class="card-title ">Inspektorat</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 mt-4">
          <div class="card border-0 bg-transparent text-center">
            <td>
              <img :src="require(`../assets/images/arsip/white.png`)" class="card-img-top" alt="..." />
            </td>
            <div class="card-body">
              <h5 class="card-title ">Bappeda</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 mt-4">
          <div class="card border-0 bg-transparent text-center">
            <td>
              <img :src="require(`../assets/images/arsip/orange.png`)" class="card-img-top" alt="..." />
            </td>
            <div class="card-body">
              <h5 class="card-title ">DPMPTSP</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 mt-4">
          <div class="card border-0 bg-transparent text-center">
            <td>
              <img :src="require(`../assets/images/arsip/pink.png`)" class="card-img-top" alt="..." />
            </td>
            <div class="card-body">
              <h5 class="card-title">Dinas Sosial</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 mt-4">
          <div class="card border-0 bg-transparent text-center">
            <td>
              <img :src="require(`../assets/images/arsip/yellow.png`)" class="card-img-top" alt="..." />
            </td>
            <div class="card-body">
              <h5 class="card-title">Dinas Perhubungan</h5>
            </div>
          </div>
        </div>
        <!-- Line #4 -->
        <div class="col-lg-2 col-md-3 col-sm-6 mt-4">
          <div class="card border-0 bg-transparent text-center">
            <td>
              <img :src="require(`../assets/images/arsip/black.png`)" class="card-img-top" alt="..." />
            </td>
            <div class="card-body">
              <h5 class="card-title ">Surat Keputusan</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 mt-4">
          <div class="card border-0 bg-transparent text-center">
            <td>
              <img :src="require(`../assets/images/arsip/orange.png`)" class="card-img-top" alt="..." />
            </td>
            <div class="card-body">
              <h5 class="card-title ">Perjanjian Kerja Sama</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 mt-4">
          <div class="card border-0 bg-transparent text-center">
            <td>
              <img :src="require(`../assets/images/arsip/white.png`)" class="card-img-top" alt="..." />
            </td>
            <div class="card-body">
              <h5 class="card-title ">Bukti Kepemilikan Aset</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 mt-4">
          <div class="card border-0 bg-transparent text-center">
            <td>
              <img :src="require(`../assets/images/arsip/green.png`)" class="card-img-top" alt="..." />
            </td>
            <div class="card-body">
              <h5 class="card-title">Kegiatan Penting</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Arsip',
  components: {
    Navbar
  }
}
</script>

<style scoped>
.text-arsip {
  color: black;
}
.card-img-top {
  width: 70%;
  height: 70%;
  object-fit: cover;
}
/* .container {
  min-height: 110vh;
} */

.arsip
 {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

</style>
