<template>
  <div class="navbar-section-page">
    <b-navbar :transparent="true" :fixed-top="false">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    :src="require('@/assets/sekolahmu-logo.png')"
                    alt="Sekolahmu"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                <span class="bg--yellow">
                  <i class="fas fa-home c--white"></i>
                </span>
                Beranda
            </b-navbar-item>
            <b-navbar-item href="#">
                <span class="bg--orange">
                  <i class="fas fa-school c--white"></i>
                </span>
                Tentang
            </b-navbar-item>
            <b-navbar-item href="#">
                <span class="bg--green">
                  <i class="fas fa-user-graduate c--white"></i>
                </span>
                Ikut Program
            </b-navbar-item>
            <b-navbar-item href="#">
                <span class="bg--red">
                  <i class="fas fa-people-carry c--white"></i>
                </span>
                Kolaborasi
            </b-navbar-item>
            <b-navbar-item href="#">
              <span class="bg--blue">
                <i class="fab fa-readme c--white"></i>
              </span>
              Blog
            </b-navbar-item>

        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <i class="fas fa-shopping-bag m__r--15"></i>
                <i class="far fa-heart m__r--15"></i>
                <i class="fas fa-search m__r--15"></i>
                <i class="far fa-user-circle m__r--15"></i>
            </b-navbar-item>
        </template>
    </b-navbar>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>
