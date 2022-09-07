<template>
  <div id="navbar">
    <b-navbar toggleable="lg" type="light">
      <div class="container mt-4">
        <!-- <b-navbar-brand href="#" :style="{ color: 'white' }"><strong> MAKASSAR </strong></b-navbar-brand> -->
        <b-navbar-brand class="nav-link" to="/" :style="{ color: 'white' }"><strong> MAKASSAR </strong></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ms-auto">
            <li class="nav-item mx-3">
              <router-link class="nav-link" to="/" :style="{ color: 'white' }">Home</router-link>
            </li>
            <li class="nav-item mx-3">
              <router-link class="nav-link" to="/kontak" :style="{ color: 'white' }">Contact</router-link>
            </li>
            <li class="nav-item mx-3">
              <router-link class="nav-link" to="/login" :style="{ color: 'white' }">Login</router-link>
            </li>
          </b-navbar-nav>

        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<style scoped>
.nav-link {
  color: bisque;
}
</style>
