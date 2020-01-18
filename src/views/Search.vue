<template>
  <div class="search-section columns">

    <div class="column is-10">
      <b-field label="">
        <b-input v-model="name" placeholder="Mau belajar apa hari ini?"></b-input>
      </b-field>
    </div>
    <div class="column is-2">
      <b-button class="bg--blue c--white">Cari Program</b-button>
    </div>

  </div>
</template>

<script>
// import Navbar from '@/components/Navbar'

export default {
    name: 'Search',
    components: {
    },
    data() {
        return {
            name: null
        }
    }
}
</script>
