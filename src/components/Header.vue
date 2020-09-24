<template>
  <header>
    <h1 @click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
import { bus } from '../main';

export default {
  props: {
    title: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    changeTitle: function () {
      // this.$emit('changeTitle', 'Vue Wizards');
      this.title = 'Vue Wizards';
      bus.$emit('titleChanged', this.title);
    }
  }
}

</script>

<style scoped>
header{
  background: crimson;
  padding: 10px;
}
h1{
  color: #222;
  text-align: center;
}
</style>
