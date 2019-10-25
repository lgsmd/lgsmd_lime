<template>
  <div class="creator">
    <div class="wrapper">
      <div class="img-wrapper">
        <img class="list-img" src="http://p1.music.126.net/KEBE7CU-y2lInkHBcgzpUA==/109951164173101961.jpg" />
      </div>
      <div class="list-description">
        <div class="name">[华语私人订制] 你爱的华语好歌都在这儿</div>
        <div class="creator-avatar">
          <md-avatar class="avatar md-small">
            <img src="http://p1.music.126.net/QWMV-Ru_6149AKe0mCBXKg==/1420569024374784.jpg" alt="Avatar" class="avatar-img">
          </md-avatar>
          <div class="avatar-name">网易云音乐</div>
        </div>
        <div class="description-wrapper">
          <div class="md-caption description">全都是耐听的华语好歌，这里是你的专属华语日推，收藏订阅，歌荒，不存在的事</div>
          <div class="details iconfont">&#xe62d;</div>
        </div>
      </div>
    </div>
    <div class="icons-wrapper iconfont">
      <div class="icons">
        <div class="icon" v-show="!likeIcon" @click="handleLike">&#xe8ab;</div>
        <div class="icon" v-show="likeIcon" @click="handleLike">&#xe8c3;</div>
        <div class="text">收藏</div>
      </div>
      <div class="icons">
        <div class="icon">&#xe8b4;</div>
        <div class="text">评论</div>
      </div>
      <div class="icons">
        <div class="icon">&#xe8b8;</div>
        <div class="text">下载</div>
      </div>
      <div class="icons">
        <div class="icon">&#xe626;</div>
        <div class="text">分享</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicDescription',
  data () {
    return {
      likeIcon: false
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
  @import '~styles/mixins.styl'
  .creator
    display : flex
    position: absolute
    width: 100%
    overflow-x:hidden
    top: .96rem
    right: 0
    left: 0
    bottom: 0
    height: 4.5rem
    background: #fff
    border-radius: .5rem
    .wrapper
      height : 3rem
      .img-wrapper
        position: absolute
        width: 2.6rem
        height: 2.6rem
        left: .3rem
        top: .3rem
        .list-img
          border-radius: .1rem
      .list-description
        position: absolute
        left: 3.2rem
        top: .3rem
        height: 3rem
        .name
          height: .8rem
          width: 70%
          ellipsis-two()
        .creator-avatar
          display: flex
          position: relative
          margin-top: .4rem
          margin-bottom: .1rem
          height: .5rem
          line-height: .5rem
          .avatar
            position: absolute
          .avatar-name
            ellipsis-one()
            position: absolute
            left: .6rem
        .description-wrapper
          display: flex
          position: relative
          margin-top: .13rem
          .description
            ellipsis-two()
            width: 90%
          .details
            width: 10%
            position: absolute
            right: 0
            height: .7rem
            line-height: .7rem
    .icons-wrapper
      position: absolute
      display: flex
      bottom: 0
      width: 100%
      height: 1.2rem
      .icons
        width: 25%
        text-align: center
        .icon
          font-size: .45rem
          color: #888
        .text
          margin-top: .1rem
          font-size: .2rem
          color: #888
</style>
