<template>
  <div class="wrapper">
    <h2 class="title">RECOMMEND</h2>
    <swiper :options="swiperOption">
      <swiper-slide class="aaa">
        <div class="img-wrapper">
          <img src="http://p1.music.126.net/KEBE7CU-y2lInkHBcgzpUA==/109951164173101961.jpg" />
        </div>
        <div class="description-wrapper">
          <div class="md-title nick-name">网易云音乐</div>
          <div class="md-caption creator-description">网易云音乐官网账号</div>
          <div class="description">全都是耐听的华语好歌，这里是你的专属华语日推，收藏订阅，歌荒，不存在的事</div>
        </div>
        <div class="love-comment iconfont">
          <div class="love-icon">
            <div class="icon" v-show="!likeIcon" @click="handleLike">&#xe8ab;</div>
            <div class="icon" v-show="likeIcon" @click="handleLike">&#xe8c3;</div>
            <div class="text">LIKE</div>
          </div>
          <div class="comment-icon">
            <div class="icon">&#xe8b4;</div>
            <div class="text">COMMENTS</div>
          </div>
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
  name: 'MusicSwiper',
  data () {
    return {
      likeIcon: false,
      swiperOption: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 0
      }
    }
  },
  methods: {
    handleLike () {
      this.likeIcon = !this.likeIcon
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    width: 100%
    margin-top: .5rem
    .aaa
      position: relative
      margin: .4rem
      height: 0
      overflow: hidden
      padding-bottom: 130%
      border-radius: .05rem
      box-shadow : 0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.2),0 1px 18px 0 rgba(0,0,0,.2)
      .img-wrapper
        overflow: hidden
        height: 0
        width: 100%
        padding-bottom: 100%
      .description-wrapper
        margin: .2rem
        .nick-name
          font-size: .4rem
        .creator-description
          margin-top: .1rem
        .description
          width: 100%
          margin-top: .3rem
          overflow : hidden
          display: -webkit-box
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
      .love-comment
        position: absolute
        display: flex
        bottom: 0
        width: 100%
        height: 15%
        .love-icon
          width: 50%
          text-align: center
          margin-right: .15rem
        .comment-icon
          width: 50%
          text-align: center
          margin-left: .15rem
        .icon
          font-size: .55rem
        .text
          margin-top: .2rem
          font-size: .2rem
    .title
      width: 100%
      height: .5rem
      line-height: .55rem
      margin-left: .3rem
      margin-bottom: -.2rem
      font-size: .4rem
    .swiper-slide
      width: 70%
</style>
