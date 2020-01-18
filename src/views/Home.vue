<template>
  <div class="home">
    <BackgroundDecoration />
    <Navbar/>
    <div class="m__t--20 container">
        <Carousel />
        <br>
        <Search />
        <br>
        <Feature />
        <br>
        <Program />
        <br>
    </div>
     <Branding />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Carousel from './Carousel'
import BackgroundDecoration from './BackgroundDecoration'
import Search from './Search'
import Feature from './Feature'
import Program from './Program'
import Branding from './Branding'

export default {
    name: 'home',
    components: {
        Navbar,
        BackgroundDecoration,
        Carousel,
        Search,
        Feature,
        Program,
        Branding
    },
    data() {
        return {
            name: null
        }
    }
}
</script>

<style lang="scss">

  .search-section {
    .is-2 {
      padding-left:0px;
    }
    .is-10 {
      padding-right: 0px;
    }
    input {
      min-height: 100px;
      background-color: #fff;
      border-color: #ddd;
      border-width: 1px;
      border-radius: 200px;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      padding: 0px 20px;
      font-size: 24px;
      color: grey;
    }
    button {
      height: 100px;
      width: 100%;
      border-top-right-radius: 200px;
      border-bottom-right-radius: 200px;
      padding: 0px 20px;
    }

  }
</style>
