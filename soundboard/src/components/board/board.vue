<template>
  <div class="body">
    <section class="soundboard">
      <vsound v-for="sound in sounds" :sound="sound"/>
    </section>
  </div>
</template>

<script>
  import vsound from './sound/sound'

  export default {
    props: ['sounds'],
    components: {
      vsound
    },
    computed: {}
  }
</script>
<style>
  .body {
    width         : 100%;
    height        : 87.6%;
    overflow-y    : scroll;
    border-top    : 0.15em solid #efefef;
    border-bottom : 0.15em solid #efefef;
  }
</style>
