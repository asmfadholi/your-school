<template>
  <div>
    <h2 class="has-text-centered f--32">
      FITUR UTAMA SEKOLAHMU
    </h2>
    <div class="float-to-center">
      <p class=" w--500 has-text-centered c--grey">
        Beragam kebutuhan belajar dalam satu tempat, terhubung melalui smartphone. Sekolahmu menghadirkan semuanya untuk murid, supaya murid bisa fokus dan berhasil meraih impian.
      </p>
    </div>

    <br>
    <div class="columns">
      <div v-for="(feature, index) in features" :key="index" class="column is-3 cursor-pointer">
        <div class="h--345 w__100 p--15" :class="'bg--'+feature.background">
          <div class="c--white has-text-centered f--60 m__t--30">
            <i :class="feature.icon"></i>
          </div>
          <br>
          <h3 class="c--white has-text-centered f--25 m__b--10">{{ feature.title }}</h3>
          <p class="has-text-centered c--white f--15">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Navbar from '@/components/Navbar'

export default {
    name: 'feature',
    components: {
    },
    data() {
        return {
            features: [
                {
                    icon: 'far fa-comments',
                    title: 'Tanyamu',
                    description: 'Tanyakan latihan soal atau tugas rumah yang sulit kepada guru dan temanmu dari berbagai daerah.',
                    background: 'blue'
                },
                {
                    icon: 'fas fa-tasks',
                    title: 'Ujianmu',
                    description: 'Pemahaman belajar yang lebih terstruktur untuk menghadapi berbagai ujian pendidikan.',
                    background: 'green'
                },
                {
                    icon: 'fas fa-school',
                    title: 'Kelasmu',
                    description: 'Jadi lebih kompeten melalui program blended learning yang menyenangkan bersama siswa sekolah lain.',
                    background: 'orange'
                },
                {
                    icon: 'far fa-building',
                    title: 'Kariermu',
                    description: 'Program magang bersertifikasi di perusahaan dan interaksi langsung dengan para pakar.',
                    background: 'red'
                }
            ]
        }
    }
}
</script>
