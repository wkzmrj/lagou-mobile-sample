<template>
    <div class="course-content-list">
      <!-- 下拉刷新 -->
      <van-pull-refresh
      v-model="isRefreshing"
      @refresh="onRefresh"
    >
        <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
      <van-cell
          v-for="item in list"
          :key="item"
          @click="$router.push({
            name: 'course-info',
            params: {
              courseId: item.id
            }
          })">
          <!-- 课程左侧 -->
          <!-- 所有课程与已购课程 -->
          <div><img :src="item.courseImgURL || item.image" alt=""></div>
          <!-- 课程右侧 -->
          <div class="course-info">
            <h3 v-text="item.courseName"></h3>
            <p class="course-preview" v-html="item.previewFirstField"></p>
            <!-- 购买课程不用展示 -->
            <p v-if="item.price" class="price-container">
              <span class="course-discounts">¥{{ item.discounts }}</span>
              <s class="course-price">¥{{ item.price }}</s>
            </p>
          </div>
          </van-cell>
        </van-list>
        </van-pull-refresh>
    </div>
</template>
<script>
import { PullRefresh, List, Cell } from 'vant'
// import { getQueryCourses } from '@/services/course'

export default {
  name: 'CourseContentList',
  components: {
    VanPullRefresh: PullRefresh,
    VanList: List,
    VanCell: Cell
  },
  props: {
    fetchData: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      currentPage: 1,
      isRefreshing: false
    }
  },
  methods: {
    async onRefresh () {
      this.currentPage = 1
      const { data } = await this.fetchData({
        currentPage: this.currentPage,
        pageSize: 10,
        status: 1
      })
      if (data.data && data.data.records && data.data.records.length !== 0) {
        this.list = data.data.records
      } else if (data.content && data.data.content.length !== 0) {
        this.list = data.content
      } else {
        this.finished = true
      }
      // 可能报错
      this.$toast('刷新成功')
      this.isRefreshing = false
    },
    async onLoad () {
      const { data } = await this.fetchData({
        currentPage: this.currentPage,
        pageSize: 10,
        status: 1
      })
      if (data.data && data.data.records && data.data.records.length !== 0) {
        this.list.push(...data.data.records)
      } else if (data.content && data.data.content.length !== 0) {
        this.list.push(...data.content)
      } else {
        this.finished = true
      }
      this.currentPage++
      this.loading = false

      if (this.list.length < 10) {
        this.finished = true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.course-content-list {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow-y: auto;
}
.van-cell__value {
  height: 100px;
  padding: 10px 0;
  display: flex;
}
.van-cell__value img {
  width: 75px;
  height: 100%;
  border-radius: 5px;
}
.course-info {
  flex: 1;
  height: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
}
.course-info h3 {
  margin: 0;
  line-height: 24px;
}

.course-info .course-preview {
  flex-grow: 1;
  font-size: 14px;
  line-height: 16px;
  margin: 0;
}

.course-info .price-container {
  margin: 0;
}

.course-info .course-discounts {
  color: #ff7452;
  font-size: 14px;
  margin: 0;
  margin-right: 5px;
}
</style>
