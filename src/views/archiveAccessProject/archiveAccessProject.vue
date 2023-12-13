<template>
  <h3 class="title">审计项目列表</h3>

  <van-search v-model="searchText" placeholder="请输入搜索关键词"> </van-search>
  <van-cell
    is-link
    v-for="(item, index) in institutionalDocList"
    :key="index"
    :title="item.title"
    @click="toDetail(item)"
  >
    <template #title>
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
        title: `项目${i + 1}`,
        content: '213123123213',
      })
    }
  }

  const router = useRouter()
  function toDetail(item) {
    router.push({
      name: 'ArchiveAccess',
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
  }
</style>
