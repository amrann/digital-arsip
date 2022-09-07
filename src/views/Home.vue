<template>
  <div class="home">
    <Navbar :style="{ marginBottom: '6.5em'}"/>
    <div class="hero container">
      <!-- Cobaaa -->
      <Hero />
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240">
      <path fill="#0099ff" fill-opacity="1" d="M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,96C672,107,768,117,864,128C960,139,1056,149,1152,144C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import CardProduct from '@/components/CardProduct.vue'
import axios from 'axios'
export default {
  name: 'Foods',
  components: {
    Navbar, Hero, CardProduct
  },
  data () {
    return {
      itemProducts: []
    }
  },
  mounted () {
    this.getItem()
  },
  methods: {
    getItem () {
      axios.get('http://localhost:3000/best-products')
        .then((res) => {
          this.itemProducts = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .marjin {
    margin-bottom: 6.5rem !important;
  }
</style>
