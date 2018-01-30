<template>
    <div class="song-list">
      <ul>
        <li @click="selectItem(song, index)" v-for="(song, index) in songs" class="item">
          <div class="rank" v-show="rank">
            <span :class="getRankCls(index)">{{getRankText(index)}}</span>
          </div>
          <div class="content">
            <h2 class="name">
              {{song.name}}
            </h2>
            <p class="desc">{{getDesc(song)}}</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    props: {
      songs: {
        type: Array,
        default: []
      },
      rank: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      selectItem (item, index) {
        this.$emit('select', item, index)
      },
      getDesc (song) {
        return `${song.singer} 。${song.album}`
      },
      getRankCls (index) {
        return 'text'
      },
      getRankText (index) {
        return index + 1
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable"
  @import "../../common/stylus/mixin"
  .song-list
    ul
      margin: 0
      padding: 0
    .item
      display: flex
      align-items: center
      box-sizing: border-box
      height: 64px
      font-size: $font-size-medium
      position: relative
      .rank
        flex: 0 0 25px
        width: 25px
        margin-right: 30px
        text-align: center
        .icon
          display:inline-block
          width: 25px
          height: 24px
          background-size: 25px 24px
          .text
            color: $color-theme
            font-size: $font-size-large
      .hightLight
        color: $color-theme !important
      &:after
        position: absolute
        height: 1px
        content: ''
        background: $color-text-d
        transform: scaleY(0.2)
        width: 100%
        top: 100%
        left: 0
      .currentIcon
        position: absolute
        right: 2px
        font-size: $font-size-large
        color: $color-theme
      .content
        flex: 1
        line-height: 20px
        overflow: hidden
        .name
          no-wrap()
          color: $color-text-l
          width: 240px
        .desc
          no-wrap()
          margin-top: 4px
          color: $color-text-d
          width: 240px

</style>
