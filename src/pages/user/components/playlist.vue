<template>
  <div class="wrapper">
    <h2 class="title">Personal playlists</h2>
    <swiper :options="swiperOption">
      <swiper-slide class="aaa">
        <div class="img-wrapper" @click="handleSwiper">
          <img src="http://p1.music.126.net/KEBE7CU-y2lInkHBcgzpUA==/109951164173101961.jpg" />
        </div>
        <div class="description-wrapper" @click="handleSwiper">
          <div class="md-title nick-name">[华语私人订制] 你爱的华语好歌都在这儿</div>
        </div>
      </swiper-slide>
      <swiper-slide class="aaa">
      </swiper-slide>
      <swiper-slide class="aaa">
      </swiper-slide>
      <swiper-slide class="aaa">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>

export default {
  name: 'UserPlaylist',
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 0
      }
    }
  },
  methods: {
    handleSwiper () {
      this.$router.push('/list')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    margin-top: .35rem
    width: 100%
    overflow-x: hidden
    .aaa
      width: 3rem
      margin: .4rem
      height: 0
      overflow: hidden
      padding-bottom: 86%
      border-radius: .05rem
      box-shadow : 0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.2),0 1px 18px 0 rgba(0,0,0,.2)
      .img-wrapper
        height: 0
        width: 100%
        padding-bottom: 100%
      .description-wrapper
        margin: .2rem
        color: black
        .nick-name
          font-size: .4rem
        .creator-description
          margin-top: .1rem
        .description
          width: 100%
          margin-top: .3rem
          ellipsis-two()
    .title
      width: 100%
      height: .5rem
      line-height: .55rem
      margin-left: .5rem
      margin-bottom: -.2rem
      font-size: .4rem
    .swiper-slide
      width: 60%
</style>
