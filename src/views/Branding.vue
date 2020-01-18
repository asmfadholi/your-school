<template>
  <div class="w__100 h--280 bg--yellow p--35 branding-section">
    <div class="container">
      <div class="row">
      <div class="col-6 col-md-3" v-for="(brand, index) in branding" :key="index">
        <i :class="brand.icon" class="c--white f--50"></i>
        <span class="c--white f--58"> {{ brand.total }} </span>
        <span class="c--white plus">+</span>
        <br>
        <span class="c--white f--14 uppercase">{{ brand.title }}</span>
      </div>
    </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'carousel',
    components: {
    },
    data() {
        return {
            branding: [
                {
                    total: 150,
                    title: 'TEMPAT BELAJAR',
                    icon: 'fas fa-home'
                },
                {
                    total: 85,
                    title: 'PROGRAM',
                    icon: 'fas fa-play-circle'
                },
                {
                    total: 150,
                    title: 'SEKOLAH',
                    icon: 'fas fa-school'
                },
                {
                    total: 70,
                    title: 'KORPORASI',
                    icon: 'fas fa-building'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
  .branding-section {
    .plus {
      position: absolute;
      top: 10px;
    }
  }
</style>
