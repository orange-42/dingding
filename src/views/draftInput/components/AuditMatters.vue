<template>
  <!-- @click="showPicker = true" -->
  <van-field v-bind="$attrs" :disabled="true" />
  <van-popup v-model:show="showPicker" position="bottom">
    <van-picker
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
    columns: { type: Array, default: () => [] },
  })

  const emit = defineEmits(['changeAuditMatter'])
  const auditMatter = ref()
  function onConfirm({ selectedOptions }) {
    console.log(selectedOptions, 'selectedOptionsselectedOptions')
    auditMatter.value = selectedOptions[0].text
    console.log(auditMatter.value, selectedOptions, 'auditMatter')
    emit('changeAuditMatter', auditMatter.value, selectedOptions[0].value)
    showPicker.value = false
  }
</script>
