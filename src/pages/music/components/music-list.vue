<template>
  <div class="wrapper">
    <div class="border-wrapper" v-show="borderShow">
      <div class="border-box"></div>
    </div>
    <div class="music-title">全部歌曲</div>
    <div class="music-wrapper">
      <ul class="music-list">
        <li class="musics" v-for="music of musicList" :key="music.id">
          <div class="music-name border-bottom">
            <div class="name">{{music.name}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Music',
  props: {
    musicList: Array
  },
  data () {
    return {
      borderShow: false
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top >= 275) {
        this.borderShow = true
      } else {
        this.borderShow = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .wrapper
    position: relative
    top: 5.46rem
    width: 100%
    overflow-x:hidden
    right: 0
    left: 0
    bottom: 0
    .border-wrapper
      z-index: 99
      position: fixed
      top: .86rem
      background:#f5f5f5
      width: 100%
      height: .44rem
      .border-box
        background: #fff
        width: 100%
        height: .44rem
        border-radius: .55rem .55rem 0 0
    .music-title
      width: 100%
      height: .86rem
      line-height: .86rem
      margin-left: .2rem
      font-size: .35rem
    .music-wrapper
      position : relative
      top: 0
      bottom: 0
      left: 0
      right: 0
      border-radius: .5rem
      background: #fff
      .music-list
        width: 100%
        padding-top: .2rem
        background-color: transparent
        .music-name
          height: .85rem
          line-height: .85rem
          margin-left: .2rem
          width: 100%
          .name
            max-width: 5rem
            ellipsis-one()
</style>
