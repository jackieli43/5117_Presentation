import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebaseConfig";

Vue.config.productionTip = false
let app

onAuthStateChanged(auth, ()=>{
  if (!app) {
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }  
});

