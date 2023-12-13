<template>
  <!-- @click="showPicker = true" -->
  <van-field v-bind="$attrs" :disabled="true" />
  <van-popup v-model:show="showPicker" position="bottom">
    <van-picker
      :columns="columns"
      @confirm="onConfirm"
      @cancel="showPicker = false"
    />
  </van-popup>
</template>
<script setup>
  import { ref } from 'vue'
  const showPicker = ref(false)
  const columns = [
    {
      text: '汕头市十二支商业连锁有限公司',
      value: 'twelveBranchesCompany',
    },
    {
      text: '广东烟草汕头市有限公司',
      value: 'tobaccoShantouCompany',
    },
  ]

  const emit = defineEmits(['changeAuidt'])
  const auditee = ref()
  function onConfirm({ selectedOptions }) {
    console.log(selectedOptions, 'selectedOptionsselectedOptions')
    auditee.value = selectedOptions[0].text
    emit('changeAuidt', auditee.value, selectedOptions[0].value)
    showPicker.value = false
  }
</script>
