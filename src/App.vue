<template>
  <div>
    <form-helper>
      <div slot='form-header'>
        <h3>This is the title of the form</h3>
        <p>Informations about the form</p>
      </div>
      <div slot='form-fields'>
        <input type="text" placeholder='name' require />
        <input type="password" placeholder='password' require />
      </div>
      <div slot='form-controls'>
        <button @click="handleSubmit">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import FormHelper from './components/FormHelper.vue';

export default {
  components: {
    'form-helper': FormHelper,
    
  },
  data() {
    return {
      title: 'I am a dynamic slot title'
    }
  }
}
</script>

<style>

</style>
