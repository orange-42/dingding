<template>
  <van-field v-bind="$attrs" @click="showPicker = true" is-link />
  <van-popup v-model:show="showPicker" round position="bottom">
    <van-picker-group
      title="预约日期"
      :tabs="['选择日期', '选择时间']"
      next-step-text="下一步"
      @confirm="onConfirm"
    >
      <van-date-picker
        v-model="currentDate"
        :min-date="minDate"
        :max-date="maxDate"
      />
      <van-time-picker v-model="currentTime" />
    </van-picker-group>
  </van-popup>
</template>
<script setup>
  import { ref, defineEmits } from 'vue'

  const showPicker = ref(false)
  const minDate = new Date(2000, 0, 1)
  const maxDate = new Date(2025, 5, 1)
  const currentDate = ref(['2022', '08', '12'])
  const currentTime = ref(['12', '00'])

  const emit = defineEmits(['confirm'])
  function onConfirm() {
    const curDate = currentDate.value ? currentDate.value.join('-') : ''
    const curTime = currentTime.value ? currentTime.value.join(':') : ''
    let finalDateTime = '' // 最终的时间拼接
    if (curDate && curTime) {
      finalDateTime = `${curDate} ${curTime}`
    }
    emit('confirm', finalDateTime)
    showPicker.value = false
    console.log(currentDate.value, currentTime.value, 'value')
  }
</script>
