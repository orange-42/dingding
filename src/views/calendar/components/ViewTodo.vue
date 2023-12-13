<template>
  <van-action-sheet
    cancel-text="取消"
    close-on-click-action
    description="日程待办事项"
    v-bind="$attrs"
    :actions="actions"
    @select="onSelect"
  />
</template>
<script setup>
  import { ref, defineProps } from 'vue'
  const props = defineProps({
    actions: { type: Array, default: () => [] },
  })
  const show = ref(false)
  //   const actions = [{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }]
  const onSelect = (item) => {}
</script>
