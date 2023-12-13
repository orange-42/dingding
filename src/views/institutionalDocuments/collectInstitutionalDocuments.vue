<template>
  <div class="header-module">
    <h3 class="title">已收藏制度文件查阅</h3>
  </div>

  <van-search v-model="searchText" placeholder="请输入搜索关键词"> </van-search>
  <van-cell
    is-link
    v-for="(item, index) in institutionalDocList"
    :key="index"
    :title="item.title"
    @click="toDetail(item)"
  >
    <template #title>
      <van-icon name="star" class="collect-icon" />

      <span class="custom-title">{{ item.title }}</span>
    </template>
  </van-cell>
</template>
<script setup>
  import { ref, onMounted, watch } from 'vue'
  import { useRouter } from 'vue-router'

  const searchText = ref('')

  const institutionalDocList = ref([])
  onMounted(() => {
    getInstitutionalDocList()
  })
  function getInstitutionalDocList() {
    // mock 数据
    for (let i = 0, len = 100; i < len; i++) {
      institutionalDocList.value.push({
        id: i + 1,
        isCollect: false,
        title: `制度文件${i + 1}`,
        content: '213123123213',
      })
    }
  }

  function changeCollect(item) {
    item.isCollect = !item.isCollect
  }

  const router = useRouter()
  function toDetail(item) {
    router.push({
      name: 'InstitutionalDocDetail',
      query: { data: JSON.stringify(item) },
    })
  }

  watch(
    () => searchText.value,
    (val) => {
      institutionalDocList.value = []
      getInstitutionalDocList()
      if (!val) return
      const list = JSON.parse(JSON.stringify(institutionalDocList.value))

      institutionalDocList.value = list.filter((item) =>
        item.title.includes(searchText.value)
      )
    }
  )
</script>
<style lang="less" scoped>
  .title {
    text-align: center;
  }

  .collect-icon {
    margin-right: 6px;
  }

  .header-module {
    position: relative;
    .to-collect {
      position: absolute;
      right: 14px;
      top: 6px;
    }
  }
</style>
