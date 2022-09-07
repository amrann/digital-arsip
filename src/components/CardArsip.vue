<template>
  <div class="card shadow card-product">
    <img :src="require(`../assets/images/arsip/group42.png`)" class="card-img-top" alt="..." />
    <!-- <img :src="require(`../assets/images/${product.gambar}`)" class="card-img-top" alt="..." /> -->
    <div class="card-body">
      <h5 class="card-title">Nama Arsip</h5>
      <!-- <p
        class="card-text"
      >Harga : Rp. {{product.harga}}</p>
      <router-link class="btn btn-success" :to="'/foods/'+product.id"><b-icon-cart></b-icon-cart> Pesan</router-link> -->
    </div>
  </div>
</template>
