<template>
  <div>
    <vheader :categorys="getCategorys" @addFilter="addFilter"
             @removeFilter="removeFilter" @search="search"
             @pushToQueue="pushToQueue"/>
    <vboard :sounds="getSounds" @preperedQueue="preperedQueue"/>
  </div>
</template>

<script>
  import vboard from './board/board';
  import vheader from './header/header';
  import sounds from '../config/sounds.json';
  import {isEmpty, findIndex, intersectionBy} from 'lodash';

  export default {
    components: {
      vboard,
      vheader
    },
    computed: {
      getSounds() {
        const query = this.query;
        const categorys = this.filter;
        const filteredSounds = sounds.sounds.filter(function (sound) {
          sound.title = sound.title.replace(/_/g, ' ');
          if (sound.title.toLowerCase().indexOf(query) == -1) {
            return false;
          }
          if (!isEmpty(categorys) && findIndex(categorys, {'category': sound.category}) == -1) {
            return false;
          }
          return true;
        });
        return filteredSounds;
      },
      getCategorys() {
        return intersectionBy(sounds.sounds, 'category').map((v) => {
          return {
            category: v.category
          };
        });
      }
    },
    methods: {
      search(e) {
        this.query = e;
      },
      addFilter(e) {
        this.filter.push(e);
      },
      removeFilter(e) {
        this.filter = this.filter.filter((c) => {
          if (c.category != e.category) {
            return c.category;
          }
        });
      },
      preperedQueue(queue) {
        this.$data.queue = queue;
      },
      pushToQueue() {
        console.log(this.$data.queue);
        if (!isEmpty(this.$data.queue)) {
          //TODO:: make it possible that the backend can handle arrays
          //const request = new XMLHttpRequest();
          //request.open('POST', 'http://10.1.95.31:8001/play', true);
          // request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
          //   request.send(JSON.stringify(pick(this.sound, 'this.$data.queue')));
        }
      }
    },
    data() {
      return {
        query: '',
        filter: [],
        queue: []
      }
    }
  }
</script>

<style>
  body {
    font-family : helvetica;
  }
</style>
