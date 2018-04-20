<template>
  <div class="body">
    <section class="soundboard">
      <vsound v-for="sound in sounds" :sound="sound"
              @prepareQueue="prepareQueue"/>
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
    data() {
      return {
        queue: []
      }
    },
    computed: {},
    methods: {
      prepareQueue(event) {
        if (event.type == "add") {
          this.$data.queue.push(event.file);
        }
        if (event.type == "remove") {
          this.$data.queue = this.$data.queue.filter((sound) => {
            if (sound != event.file) {
              return sound;
            }
          });
        }
        this.$emit('preperedQueue', this.$data.queue);
      }
    }
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
