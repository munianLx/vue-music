<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
  import MHeader from './components/m-header/m-header'
  import Tab from './components/tab/tab'
  import Player from './components/player/player'

export default {
    components: {
      MHeader,
      Tab,
      Player
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body,h1{
    margin: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
