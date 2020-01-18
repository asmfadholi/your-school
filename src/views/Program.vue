<template>
  <div class="programs-section">
    <h2 class="has-text-centered f--32 m__t--30">
      PROGRAM UNGGULAN
    </h2>
    <br>
    <div class="row">
      <div v-for="(program, index) in programs" :key="index" class="col-md-4 col-12 cursor-pointer m__b--15">
        <div class="h--650 w__100 items-program">
          <div class="float-to-center">
            <img :src="program.avatar" :alt="program.name">
          </div>

          <div class="p--15">
            <h3 class="f--18">{{ program.name }}</h3>
            <p class="f--12">by <span class="bold">{{program.category_name}}</span></p>
            <p class="f--14 c--grey">
              {{ program.abstract }}
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Data from '@/services/data.json'

export default {
    name: 'feature',
    components: {
    },
    data() {
        return {
            programs: Data.data,
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

<style lang="scss">
  .programs-section {
    .items-program {
      border: 1px solid lighten(grey, 30%);
    }

  }
</style>
