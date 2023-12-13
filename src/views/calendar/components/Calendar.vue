<template>
  <van-calendar :poppable="false">
    <div slot="bottom-info" slot-scope="day">
      <div>{{ day.bottomInfo }}</div>
      <div v-if="day.tip">{{ day.tip }}</div>
      <div v-else style="min-height: 14px"></div>
    </div>
  </van-calendar>
</template>
<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const checked = ref('1')
  const show = ref(true)
  const formatter = (day) => {
    const month = day.date.getMonth() + 1
    const date = day.date.getDate()
    console.log(month, date, 'd')
    if (month === 5) {
      if (date === 1) {
        day.topInfo = '劳动节'
      } else if (date === 4) {
        day.topInfo = '青年节'
      } else if (date === 11) {
        day.text = '今天'
      }
    }

    if (day.type === 'start') {
      day.bottomInfo = '入住'
    } else if (day.type === 'end') {
      day.bottomInfo = '离店'
    }

    return day
  }
</script>
