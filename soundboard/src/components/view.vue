<template>
  <div>
    <vheader :categorys="getCategorys" @addFilter="addFilter" @removeFilter="removeFilter" @search="search"/>
    <vboard :sounds="getSounds"/>
  </div>
</template>

<script>
  import vboard from './board/board';
  import vheader from './header/header';
  import sounds from '../config/sounds.json';
  import _ from 'lodash';

  export default {
    components: {
      vboard,
      vheader
    },
    computed: {
      getSounds(){
        const query = this.query;
        const categorys = this.filter;
        const filteredSounds =  sounds.sounds.filter(function (sound) {
          sound.title = sound.title.replace(/_/g,' ');
          if(sound.title.toLowerCase().indexOf(query) == -1){
            return false;
          };
          if(!_.isEmpty(categorys) && _.findIndex(categorys,{'category' : sound.category}) == -1){
            return false;
          }
          return true;
        });
        return filteredSounds;
      },
      getCategorys(){
        return _.intersectionBy(sounds.sounds, 'category').map((v) => {
          return {
            category: v.category
          };
        });
      }
    },
    methods: {
      search(e){
        this.query = e;
      },
      addFilter(e){
        this.filter.push(e);
      },
      removeFilter(e){
        this.filter = this.filter.filter((c) => {
          if(c.category != e.category){
            return c.category;
          };
        });
      }
    },
    data(){
      return{
        query: '',
        filter:[]
      }
    }
  }
</script>

<style>
  body {
    font-family : helvetica;
  }
</style>
