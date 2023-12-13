<template>
  <h3 class="title">{{ institutionalItem.title }}-详情</h3>
  <p class="content">{{ institutionalItem.content }}</p>
</template>
<script setup>
  import { reactive, onMounted } from 'vue'
  import router from '@/router'
  const institutionalItem = reactive({
    title: '',
    content: '',
  })

  onMounted(() => {
    console.log(router.currentRoute.value.query, 'rt')
    const dataStr =
      router.currentRoute.value.query && router.currentRoute.value.query.data
    const data = dataStr && JSON.parse(dataStr)
    if (data) {
      institutionalItem.content = data.content
      institutionalItem.title = data.title
    }
  })
</script>
<style lang="less" scoped>
  .title {
    text-align: center;
  }

  .content {
    padding: 16px;
  }
</style>
