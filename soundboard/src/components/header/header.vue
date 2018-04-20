<template>
  <div class="head">
    <div class="linkrow"><a href="#">Board</a> | <a href="#">Upload</a></div>
    <div class="row">
      <div class="logo"><img
        src="data:image/png;base64,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"/>
      </div>
      <div class="searchcontainer">
        <input type="text" placeholder="Suchbegriff" class="searchbar"
               @keyup="search" v-model="query">
        <multiselect v-model="value"
                     @select="categoryAdd"
                     @remove="categoryRemove"
                     :options="categorys"
                     :multiple="true"
                     :close-on-select="true"
                     :clear-on-select="false"
                     :hide-selected="true"
                     :preserve-search="true"
                     placeholder="Categorie"
                     label="category"
                     track-by="category">
          <template slot="tag" slot-scope="props">
            <span class="custom__tag">
              <span>{{ props.option.category }}</span>
              <span class="custom__remove"
                    @click="props.remove(props.option)">❌</span>
            </span>
          </template>
        </multiselect>
      </div>
      <div>
        <button class="premiumsound">Sound des Monats</button>
        <button class="actionbutton">Random</button>
        <button class="actionbutton">Push2Queue</button>
      </div>
      <div class="volume"><input type="range"/></div>
      <div class="right">
        <div class="soundcontainer">
          <div>Aktueller Sound <b>X</b></div>
          <div class="dropdown">
            <div>Queue</div>
            <div class="dropdown-content">
              <div>sound <b>X</b></div>
              <div>sound <b>X</b></div>
              <div>sound <b>X</b></div>
              <div>sound <b>X</b></div>
              <div>sound <b>X</b></div>
              <div>sound <b>X</b></div>
              <div>sound <b>X</b></div>
              <div class="clearQueue">Clear Queue</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect'

  export default {
    components: {
      Multiselect
    },
    props: ['categorys'],
    computed: {},
    methods: {
      categoryAdd(actionName) {
        this.$emit('addFilter', actionName);
      },
      categoryRemove(actionName) {
        this.$emit('removeFilter', actionName);
      },
      search(e) {
        if (e.type != "keyup") {
          return false;
        }
        this.$emit('search', this.$data.query);
      }
    },
    data() {
      return {
        message: '',
        category: '',
        query: '',
        value: []
      }
    }
  }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
  .head {
    width  : 100%;
    height : 10%;
  }

  .volume {
  margin-top: 1%;
  }

  .row > div {
    float : left;
  }

  .linkrow {
    margin-bottom  : 0.25em;
    padding-bottom : 0.25em;
    border-bottom  : 0.15em solid #efefef;
  }

  .right {
    margin-top: 1%;
    margin-right: 1%;
    float : right !important;
  }

  .right div {
    width : 100%;
  }

  .premiumsound {
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
    background    : #0098dd;
    border        : 2px solid #ffe600;
    color         : #ffe600;
  }

  .actionbutton {
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
    background    : #0098dd;
    border        : 1px solid #ffe600;
    color         : black;
    background    : #ffe600;
  }

  .logo {
    padding-right : 2em;
    width         : 10%;
  }

  .logo img {
    width : 12em;
  }

  .searchcontainer {
    width : 30%;
  }

  .searchcontainer > input {
    border        : 0.25em solid #0098dd;
    margin-bottom : 0.5em;
    height        : 3.5em;
    padding-left  : 1em;
    width         : 100%;
  }

  .dropdown {
    position : relative;
    display  : inline-block;
  }

  .dropdown-content {
    padding          : 2em 1em;
    width            : max-content !important;
    display          : none;
    position         : absolute;
    background-color : #f9f9f9;
    min-width        : max-content;
    box-shadow       : 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index          : 1;
  }

  .soundcontainer {
    cursor : default;
    color  : #0098dd;
  }

  .soundcontainer b {
    color  : red;
    cursor : pointer;
  }

  .dropdown:hover .dropdown-content {
    display : grid;
  }

  .dropdown-content div {
    width : max-content;
  }

  .clearQueue {
    margin-top : 1em;
    cursor     : pointer;
  }

  ::-webkit-scrollbar-button {
    display          : block;
    height           : 0.25em;
    border-radius    : 0px;
    background-color : transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color : #0098dd;
  }

  ::-webkit-scrollbar-track {
    background-color : #efefef;
  }

  ::-webkit-scrollbar {
    width : 5px;
  }

  .multiselect {
    border       : 3px solid #0098dd;
    height       : 30px;
    font-size    : 17px;
    font-weight  : 700;
    margin       : 0;
    margin-right : 1em;
    margin       : 0;
    width        : calc(100% - 6px);
  }

  .multiselect__tags {
    border : none;
  }

  .multiselect__option--highlight, .multiselect__option--highlight:after {
    background : #0098dd;
  }

  .custom__tag {
    padding       : 3px 12px;
    background    : #ffe600;
    margin-right  : 8px;
    margin-bottom : 8px;
    border-radius : 10px;
    cursor        : pointer;
  }
</style>
