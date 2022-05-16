import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faArrowRight, faUser, faEdit, faTrash, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { 
    faYoutube, 
    faTwitter, 
    faInstagram, 
    faLinkedin } from '@fortawesome/free-brands-svg-icons' 

library.add( faBars, faUser, faEnvelope, faLock, faArrowRight, faEdit, faTrash, faYoutube, faTwitter, faInstagram, faLinkedin );
createApp(App).component('fa', FontAwesomeIcon ).use(router).mount('#app')
