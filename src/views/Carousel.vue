<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <!-- <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> -->
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active h--300">
      <div class="float-to-center h__100 c--grey">
        Slide 1
      </div>
    </div>
    <!-- <div class="carousel-item h--300">
      <div class="float-to-center">
        Slide 2
      </div>
    </div>
    <div class="carousel-item h--300">
      <div class="float-to-center">
        Slide 3
      </div>
    </div> -->
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</template>

<script>

export default {
    name: 'carousel',
    components: {
    },
    data() {
        return {
            carousel: 0,
            animated: 'fade',
            drag: false,
            autoPlay: false,
            pauseHover: false,
            pauseInfo: false,
            pauseType: 'is-primary',
            interval: 3000,
            carousels: [
                { title: 'Slide 1', color: '' },
                { title: 'Slide 2', color: '' },
                { title: 'Slide 3', color: '' },
                { title: 'Slide 4', color: '' },
                { title: 'Slide 5', color: '' },
                { title: 'Slide 6', color: '' }
            ]
        }
    }
}
</script>
