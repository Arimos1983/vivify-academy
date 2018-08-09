import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import AddContact from './pages/AddContacts.vue';
import Contacts from './pages/Contacts.vue';
console.log(VueRouter)

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  
  {path: '/contacts', component: Contacts},
  {path: '/contacts/:id', component: Contacts, name: 'contact-details'},
  {path: '/add-contact', component: AddContact},
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
