<template>
  <div>
    <Navbar />
    <div class="container">
      <!-- <h2>Daftar Makanan</h2> -->
      <div class="row mt-4">
        <div class="col">
          <h2>
            Arsip Digital SKPD
            <!-- <strong>Makanan</strong> -->
          </h2>
        </div>
      </div>
      <div class="row mb-4">
        <!-- <div class="col-md-4 mt-4" v-for="prd in itemProducts" :key="prd.id">
          <CardProduct :product="prd" />
        </div> -->
        <!-- Line #1 -->
        <div class="col-md-2 mt-4 mx-4">
          <div class="card shadow card-product bg-transparent text-center">
            <td align="center">
              <b-icon icon="folder2" font-scale="7.5"></b-icon>
            </td>
            <div class="card-body">
              <h5 class="card-title">Dinas Arsip</h5>
            </div>
          </div>
        </div>
        <div class="col-md-2 mt-4 mx-4">
          <div class="card shadow card-product file-orange crd-rounded text-center">
            <td align="center">
              <b-icon icon="folder2" font-scale="7.5"></b-icon>
            </td>
            <div class="card-body">
              <h5 class="card-title">Dinas Perpustakaan</h5>
            </div>
          </div>
        </div>
        <div class="col-md-2 mt-4 mx-4">
          <div class="card shadow card-product file-white crd-rounded text-center">
            <td align="center">
              <b-icon icon="folder2" font-scale="7.5"></b-icon>
            </td>
            <div class="card-body">
              <h5 class="card-title">Dinas Pertanahan</h5>
            </div>
          </div>
        </div>
        <div class="col-md-2 mt-4 mx-4">
          <div class="card file-yellow crd-rounded text-center">
            <td align="center">
              <b-icon icon="folder2" font-scale="7.5"></b-icon>
            </td>
            <div class="card-body">
              <h5 class="card-title">Dinas Ketahanan Pangan</h5>
            </div>
          </div>
        </div>
        <div class="col-md-2 mt-4 ml-6">
          <div class="card file-pink crd-rounded text-center" :style="{backgroundColor: 'merah'}">
            <td align="center">
              <b-icon icon="folder2" font-scale="7.5"></b-icon>
            </td>
            <div class="card-body">
              <h5 class="card-title">Dinas Pariwisata</h5>
            </div>
          </div>
        </div>
        <!-- Line #2 -->
        <div class="col-md-2 mt-4 mx-4">
          <div class="card file-blue crd-rounded text-center">
            <td align="center">
              <b-icon icon="folder2" font-scale="7.5"></b-icon>
            </td>
            <div class="card-body">
              <h5 class="card-title">Dukcapil</h5>
            </div>
          </div>
        </div>
        <div class="col-md-2 mt-4 mx-4">
          <div class="card file-yellow crd-rounded text-center">
            <td align="center">
              <b-icon icon="folder2" font-scale="7.5"></b-icon>
            </td>
            <div class="card-body">
              <h5 class="card-title">Dinas Pendapatan Daerah</h5>
            </div>
          </div>
        </div>
        <div class="col-md-2 mt-4 mx-4">
          <div class="card file-red crd-rounded text-center">
            <td align="center">
              <b-icon icon="folder2" font-scale="7.5"></b-icon>
            </td>
            <div class="card-body">
              <h5 class="card-title">Dinas Pemadam Kebakaran</h5>
            </div>
          </div>
        </div>
        <div class="col-md-2 mt-4 mx-4">
          <div class="card file-tosca crd-rounded text-center">
            <td align="center">
              <b-icon icon="folder2" font-scale="7.5"></b-icon>
            </td>
            <div class="card-body">
              <h5 class="card-title">Dinas Lingkungan Hidup</h5>
            </div>
          </div>
        </div>
        <div class="col-md-2 mt-4 ml-6">
          <div class="card file-white crd-rounded text-center">
            <td align="center">
              <b-icon icon="folder2" font-scale="7.5"></b-icon>
            </td>
            <div class="card-body">
              <h5 class="card-title">Dinas Kesehatan</h5>
            </div>
          </div>
        </div>
        <!-- Line #3 -->
        <div class="col-md-2 mt-4 mx-4">
          <div class="card card-product bg-transparent">
            <img :src="require(`../assets/images/arsip/green.png`)" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title ">Inspektorat</h5>
            </div>
          </div>
        </div>
        <div class="col-md-2 mt-4 mx-4">
          <div class="card card-product bg-transparent">
            <img :src="require(`../assets/images/arsip/white.png`)" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title ">Bappeda</h5>
            </div>
          </div>
        </div>
        <div class="col-md-2 mt-4 mx-4">
          <div class="card card-product bg-transparent">
            <img :src="require(`../assets/images/arsip/orange.png`)" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title ">DPMPTSP</h5>
            </div>
          </div>
        </div>
        <div class="col-md-2 mt-4 mx-4">
          <div class="card card-product bg-transparent">
            <img :src="require(`../assets/images/arsip/pink.png`)" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Dinas Sosial</h5>
            </div>
          </div>
        </div>
        <div class="col-md-2 mt-4 ml-6">
          <div class="card card-product bg-transparent">
            <img :src="require(`../assets/images/arsip/yellow.png`)" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Dinas Perhubungan</h5>
            </div>
          </div>
        </div>
        <!-- Line #4 -->
        <div class="col-md-2 mt-4 mx-4">
          <div class="card bg-transparent">
            <img :src="require(`../assets/images/arsip/black.png`)" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title ">Surat Keputusan</h5>
            </div>
          </div>
        </div>
        <div class="col-md-2 mt-4 mx-4">
          <div class="card bg-transparent text-center">
            <td>
              <img :src="require(`../assets/images/arsip/orange.png`)" class="card-img-top" alt="..." />
            </td>
            <div class="card-body">
              <h5 class="card-title ">Perjanjian Kerja Sama</h5>
            </div>
          </div>
        </div>
        <div class="col-md-2 mt-4 mx-4">
          <div class="card bg-transparent text-center">
            <td>
              <img :src="require(`../assets/images/arsip/white.png`)" class="card-img-top" alt="..." />
            </td>
            <div class="card-body">
              <h5 class="card-title ">Bukti Kepemilikan Aset</h5>
            </div>
          </div>
        </div>
        <div class="col-md-2 mt-4 mx-4">
          <div class="card bg-transparent text-center">
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
  },
  data () {
    return {
      merah: '#e2cd0b'
    }
  }
}
</script>

<style scoped>
.text-arsip {
  color: black;
}
.required:after {
    content:" *";
    color: red;
}
*.file-orange{
  background-color: #FFA212!important;
}
.file-yellow {
  background-color: #e2cd0b!important;
}
.file-pink {
  background-color: #FFAC99!important;
}
.file-blue {
  background-color: #40c6ef!important;
}
.file-red {
  background-color: #de3838!important;
}
.file-tosca {
  background-color: #0FC096!important;
}
.file-green {
  background-color: #639E17!important;
}
.file-white {
  background-color: #298eaf!important;
}
.crd-rounded{
    border-radius: 10%;
}
.card-img-top {
    width: 50%;
    height: 50%;
    object-fit: cover;
}

</style>
