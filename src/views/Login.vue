<template>
  <div>
    <Navbar />
    <section id="login" class="sb">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mx-auto screen-box position-relative">
            <div class="w-full items-center pt-3">
              <div class="p-1 w-24 bg-opacity-50 bg-secondary mt-4 mx-auto rounded-full"></div>
            </div>
            <div class="row col-12 text-center">
              <h2>Digital Arsip Kota Makassar</h2>
            </div>
            <div class="row col-6 mx-auto form-login">
              <form ref="form" @submit.stop.prevent="submitLogin">
                <b-form-group>
                  <b-form-input
                    data-cy="modal-add-name-input"
                    v-model="email"
                    id="email-input"
                    type="email"
                    placeholder="Masukkan email"
                    class="my-2"
                    size="lg"
                  ></b-form-input>
                  <span class="hint-text">* Wajib diisi</span>
                </b-form-group>
                <b-form-group>
                  <b-form-input
                    data-cy="modal-add-name-input"
                    v-model="pass"
                    id="pass-input"
                    type="password"
                    class="my-2"
                    size="lg"
                    placeholder="Masukkan password"
                  ></b-form-input>
                  <span class="hint-text">* Wajib diisi</span>
                </b-form-group>
              </form>
              <div>
                <b-button :disabled="email.length && pass.length ? false : true" class="mt-4 mx-2" variant="primary" block @click="btnSimpan">
                  <b-spinner small v-if="isLoadingBtn"></b-spinner>
                  Login
                </b-button>
              </div>
            </div>
            <img :src="require(`../assets/images/image 2.png`)" alt="..." class="image-login position-absolute start-40"/>
          </div>
        </div>
      </div>
      <!-- Modal Toast  -->
      <div data-cy="modal-information" class="container">
        <div>
          <b-modal v-model="modalInfoShow" size="sm" centered hide-header hide-footer title="Delete">
            <div class="d-flex">
              <div class="mb-0" style="margin-right: 1em;">
                <b-icon icon="exclamation-circle" variant="success"></b-icon>
              </div>
              <div class="text-center">
                <span>Email atau Password salah. Silahkan coba kembali</span>
              </div>
            </div>
          </b-modal>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import axios from 'axios'
export default {
  name: 'Login',
  components: {
    Navbar
  },
  computed: {
    state () {
      return this.email.length > 0
    },
    invalidFeedback () {
      // if (this.name.length > 0) {
      //   return 'Enter at least 4 characters.'
      // }
      return 'Wajib diisi terlebih dahulu'
    }
  },
  data () {
    return {
      email: '',
      pass: '',
      url: 'https://api.arsip.makassarkota.go.id/api/v1',
      modalInfoShow: false,
      isLoadingBtn: false,
      formRequired: [(v) => !!v || 'Wajib diisi']
    }
  },
  methods: {
    btnSimpan () {
      this.submitLogin()
    },
    submitLogin () {
      this.isLoadingBtn = true
      const payload = {
        'email': this.email,
        'password': this.pass
      }
      console.log('see payload :', payload)
      axios.post(`${this.url}/login`, payload)
        .then((res) => {
          // this.getListItemGroup()
          // console.log('ini res : ', res)
          this.$router.push({ path: `/jenis-arsip` })
          this.isLoadingBtn = false
        })
        .catch((err) => {
          console.log('ini err : ', err)
          // this.isLoadingBtn = false
          this.modalInfoShow = true
          this.email = ''
          this.pass = ''
          this.isLoadingBtn = false
        })
    }
  }
}
</script>

<style scoped>
  .input-center {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15vh;
  }
  .inpt-grup {
    margin-top: 10%;
  }
</style>
