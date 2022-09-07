import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../views/Home'
import Arsip from '../views/Arsips'
import Login from '../views/Login'
import JenisArsip from '../views/JenisArsip'
import SuratKeputusan from '../views/SuratKeputusan'
import UploadFile from '../views/UploadFile'
import UploadFileSuccess from '../views/UploadFileSuccess'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/jenis-arsip',
      name: 'JenisArsip',
      component: JenisArsip
    },
    {
      path: '/surat-keputusan',
      name: 'SuratKeputusan',
      component: SuratKeputusan
    },
    {
      path: '/arsip',
      name: 'Arsip',
      component: Arsip
    },
    {
      path: '/upload',
      name: 'UploadFile',
      component: UploadFile
    },
    {
      path: '/uploadsuccess',
      name: 'UploadFileSuccess',
      component: UploadFileSuccess
    }
  ]
})
