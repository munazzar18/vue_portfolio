<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Facts from './components/Facts.vue';
import Skills from './components/Skills.vue';
import Resume from './components/Resume.vue'
import Portfolio from './components/Portfolio.vue'
import Services from './components/Services.vue'
import Testimonials from './components/Testimonials.vue'
import Contacts from './components/Contacts.vue'
</script>

<template>

<Navbar/>
<Home/>
<main id="main">
<About/>
<Facts/>
<Skills/>
<Resume/>
<Portfolio/>
<Services/>
<Testimonials/>
<Contacts/>
</main>
<Footer/>

</template>

<style scoped>

</style>
