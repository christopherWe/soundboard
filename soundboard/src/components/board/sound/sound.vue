<template>
  <button class="sound" @click="request">
    <input type="checkbox" class="soundcheckbox"
           @mouseover="toggleSound"
           @mouseout="toggleSound"
           @click="queueSelection"/>
    {{sound.title}}
  </button>
</template>

<script>
  import {pick} from 'lodash';

  export default {
    props: ['sound'],
    computed: {},
    data() {
      return {
        soundEnabled: true,
        selected: false
      }
    },
    methods: {
      request() {
        if (this.$data.soundEnabled) {
          const request = new XMLHttpRequest();
          request.open('POST', 'http://10.1.95.31:8001/play', true);
          request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
       //   request.send(JSON.stringify(pick(this.sound, 'file')));
        }
      },
      queueSelection() {
        this.$data.selected = !this.$data.selected;
        if (this.$data.selected == true) {
          this.$emit('prepareQueue',
            {
              type: "add",
              file: this.sound.file
            }
          );
        }
        else {
          this.$emit('prepareQueue',
            {
              type: "remove",
              file: this.sound.file
            }
          )
        }
      },
      toggleSound() {
        if (event.type == "mouseover") {
          this.$data.soundEnabled = false;
        }
        else if (event.type == "mouseout") {
          this.$data.soundEnabled = true;
        }
      }
    }
  }
</script>
<style>
  .sound {
    position      : relative;
    height        : 3rem;
    width         : 12rem;
    margin        : 0.5rem;
    float         : left;
    overflow      : hidden;
    cursor        : pointer;
    border-radius : unset;
    padding       : 0px;
    font-size     : 1rem;
    line-height   : 1rem;
    border        : 1px solid #0098dd;
    color         : white;
    background    : #0098dd;
  }

  .soundcheckbox {
    margin   : 0;
    margin   : 0;
    top      : 0;
    right    : 0;
    position : absolute;
  }

</style>
