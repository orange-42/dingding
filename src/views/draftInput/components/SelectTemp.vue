<template>
  <van-popup v-bind="$attrs" position="bottom">
    <van-picker
      title="请选择预设模板"
      @confirm="onConfirm"
      @cancel="showPicker = false"
      :columns="columns"
    />
  </van-popup>
</template>
<script setup>
  import { ref } from 'vue'
  const showPicker = ref(false)
  const props = defineProps({
    columns: {
      type: Array,
      default: () => [
        {
          text: '查阅 总部 记账凭证，登记 30元',
          value: '66',
        },
        {
          text: '查阅 分公司 记账凭证，登记 100元',
          value: '88',
        },
      ],
    },
  })

  const emit = defineEmits(['addTemp'])
  function onConfirm({ selectedOptions }) {
    const tempText = selectedOptions[0].text
    console.log(tempText, ' selectedOptions[0].value')
    emit('addTemp', tempText)
  }
</script>
