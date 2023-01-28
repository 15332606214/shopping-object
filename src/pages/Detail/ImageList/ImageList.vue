<template>
  <div>
    <swiper :options="swiperOptions">
      <swiper-slide v-for="imgList, index in imageList" :key="imgList.id">
        <img :src="imgList.imgUrl" :class="{ active: index === defaultIndex }" @click="changeDefaultIndex(index)" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>

</template>

<script>
export default {
  name: "ImageList",
  props: ['imageList'],
  data() {
    return {
      defaultIndex: 0,
      swiperOptions: {
        //   sliderPerView: 5,
        //   sliderPerGroup: 5,
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      }
    }
  },
  methods: {
    changeDefaultIndex(index) {
      this.defaultIndex = index

      // 全局事件总线向兄弟传数据
      this.$bus.$emit('syncDefaultIndex', index)
    }
  }
}
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid rgb(45, 145, 227);
        padding: 1px;
      }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;

    &::after {
      font-size: 12px;
    }
  }
}
</style>