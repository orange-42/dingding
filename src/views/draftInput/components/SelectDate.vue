<template>
  <!-- @click="showPicker = true" -->
  <van-field v-bind="$attrs" />
  <van-popup v-model:show="showPicker" round position="bottom">
    <van-picker-group
      title="预约日期"
      :tabs="['开始日期', '结束日期']"
      @confirm="onConfirm"
      @cancel="onCancel"
    >
      <van-date-picker
        v-model="startDate"
        :min-date="minDate"
        :max-date="maxDate"
      />
      <van-date-picker
        v-model="endDate"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </van-picker-group>
  </van-popup>
</template>
<script setup>
  import { ref } from 'vue'
  import dayjs from 'dayjs'
  const showPicker = ref(false)
  const startDate = ref(dayjs().format('YYYY-MM-DD').split('-'))
  const endDate = ref(dayjs().format('YYYY-MM-DD').split('-'))

  const emit = defineEmits(['changeDate'])
  const onConfirm = () => {
    console.log(startDate.value, endDate.value)
    showPicker.value = false
    const start = startDate.value.join('-')
    const end = endDate.value.join('-')
    const finalDate = [start, end]
    console.log(finalDate, 'dsds')
    emit('changeDate', finalDate)
  }

  const onCancel = () => {
    // showToast('cancel')
  }
  const minDate = new Date(2020, 0, 1)
  const maxDate = new Date(2025, 5, 1)
</script>
