<template>
  <div>
    <div class="head">
      <el-input class="head-input" v-model="input" placeholder="请输入搜索内容"></el-input>
      <el-button class="head-btn" type="primary">搜索</el-button>
    </div>

    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="正在热映" name="first">{{topStart}}</el-tab-pane>
      <el-tab-pane label="即将上映" name="second">
        <ul class="upmoving">
          <li class="upmoving-li" v-for="(item, index) in movingList" :key="index">
            <div style="overflow: hidden;">
              <img class="upmoving-img" :src="item.images.large" alt="">
            </div>
            <p class="upmoving-title">{{item.title}}</p>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="Top250" name="third">
        <ul class="upmoving">
          <li class="upmoving-li" v-for="(item, index) in topList" :key="index">
             <div style="overflow: hidden;">
              <img class="upmoving-img" :src="item.images.large" alt="">
            </div>
            <p class="upmoving-title">{{item.title}}</p>
          </li>
        </ul>
        <el-button class="upmoving-more" type="primary" @click="loadMore">加载更多</el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: '',
      activeName: 'second'
    }
  },
  mounted () {
    this.$store.dispatch('getMoving')
    this.$store.dispatch('setTop', 0)
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event)
    },
    loadMore () {
      this.$store.dispatch('setStart', this.topStart + 1)
      this.$store.dispatch('setTop', this.topStart)
    }
  },
  computed: {
    movingList () {
      return this.$store.getters.movingList
    },
    topList () {
      return this.$store.getters.topList
    },
    topStart () {
      return this.$store.getters.topStart
    }
  }
}
</script>
<style lang="less" scoped>

.head {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.head-input {
  margin-right: 10px;
  width: 300px;
}

.upmoving-li {
  list-style: none;
  box-sizing: border-box;
  padding: 10px 5px;
  float: left;
}

.upmoving-img {
  width: 150px;
  height: 200px;
  transition: 1s all;
  transform: scale(1);
}

.upmoving-img:hover {

  transform: scale(1.2);
}
.upmoving:after {
  content: '.';
  height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}
.upmoving {
  width: 644px;
  margin: 0 auto;
  &-title {
    width: 150px;
    text-overflow: ellipsis;
    color: #222;
    white-space:nowrap; text-overflow:ellipsis; overflow:hidden;
  }
}
.upmoving-more {
  display: block;
  width: 644px;
  margin: 0 auto 30px;
}
</style>
