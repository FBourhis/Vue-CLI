<template>
  <div>
    <app-header></app-header>
    <app-ninjas></app-ninjas>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Ninjas from './components/Ninjas.vue';

export default {
  components: {
    'app-header': Header, // app-header and not just header cause this is a html tag
    'app-footer': Footer,
    'app-ninjas': Ninjas,
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>

</style>
