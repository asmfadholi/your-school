<template>
  <div class="background-decoration">
      <div class="circle">

      </div>
      <div class="triangle">

      </div>
    </div>
</template>

<script>
// import Navbar from '@/components/Navbar'

export default {
    name: 'carousel',
    components: {
    },
    data() {
        return {
        }
    }
}
</script>

<style lang="scss">
  .background-decoration {
    position: absolute;
    height: 100%;
    top: 0px;
    width: 100%;
    z-index: 0;
    .circle {
      height: 150px;
      width: 100%;
      background: #C5E3E9;
    }
    .triangle {
      width: 100%;
      height: 0;
      border-top: 50vw solid #C5E3E9;
      border-right: 50vw solid transparent;
    }
  }
</style>
