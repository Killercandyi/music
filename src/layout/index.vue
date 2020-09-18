<template>
  <div class="app-wrapper">
      <navbar/>
      <app-main/>
  </div>
</template>

<script>
import { Navbar, AppMain } from './components'
export default {
  data () {
    return {

    }
  },
  components: {
    Navbar,
    AppMain
  }
}
</script>

<style lang="less">

</style>
