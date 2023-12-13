<template>
  <van-floating-bubble axis="xy" icon="plus" magnetic="x" @click="setTodo" />
  <van-floating-bubble
    axis="xy"
    magnetic="x"
    v-model:offset="offset"
    @click="viewTodo"
  >
    <van-icon name="orders-o" :badge="todoList.length" />
  </van-floating-bubble>

  <!-- @offset-change="onOffsetChange" -->
  <Calendar
    :formatter="formatter"
    :show-confirm="false"
    @select="select"
    :show-title="false"
  />
  <SetTodo
    v-if="isShowSetTodo"
    v-model:show="isShowSetTodo"
    @close="close"
    @submit="submit"
  />
  <ViewTodo
    v-if="isShowViewTodo"
    v-model:show="isShowViewTodo"
    :actions="todoList"
  />
</template>
<script setup>
  import { ref, onMounted } from 'vue'
  import ViewTodo from './components/ViewTodo.vue'
  import SetTodo from './components/SetTodo.vue'
  import Calendar from './components/Calendar.vue'
  import { showToast } from 'vant'
  import dayjs from 'dayjs'
  import { getDate, getDayOrMonth } from '../../utils/index'

  const isShowSetTodo = ref(false)
  const isShowViewTodo = ref(false)
  const height = window.innerHeight
  const offset = ref({ y: height - 150 })

  const currentDateStr = dayjs().format('YYYY-MM-DD')

  const afterDay = dayjs().add(1, 'day').format('YYYY-MM-DD')
  const theDayAfterTomorrow = dayjs().add(2, 'day').format('YYYY-MM-DD')
  const afterThirdDay = dayjs().add(3, 'day').format('YYYY-MM-DD')
  const afterFourDay = dayjs().add(4, 'day').format('YYYY-MM-DD')

  const mockRegisteredSchedule = ref([
    {
      text: '审计会议',
      date: `${currentDateStr.value} 22:00`,
    },
    {
      text: '审计周会',
      date: `${afterDay} 22:00`,
    },
    {
      text: '出差',
      date: `${theDayAfterTomorrow}  22:00`,
    },
    {
      text: '出差',
      date: `${afterThirdDay} 08:00`,
    },
    {
      text: '出差',
      date: `${afterFourDay} 22:00`,
    },
    {
      text: '烟草管理登记',
      date: `${afterFourDay} 22:00`,
    },
    {
      text: '审计会议',
      date: `${afterFourDay} 23:00`,
    },
  ])

  /** 选中的当前天 */
  const selectDay = ref('')
  function select(day) {
    selectDay.value = day

    const month = new Date(day).getMonth() + 1
    const date = new Date(day).getDate()
    const list = mockRegisteredSchedule.value.filter((item) => {
      if (item.date) {
        const itemMonth = getDayOrMonth(item.date.substring(5, 7))
        const itemDay = getDayOrMonth(item.date.substring(8, 11))
        if (month === itemMonth) {
          if (date === itemDay) {
            return item
          }
        }
      }
    })
    todoList.value = list.map((item) => {
      return {
        name: item.text,
      }
    })
  }

  /** 选中日期处理 */
  const todoList = ref([])
  const selectDate = ref('')
  function setTodo() {
    selectDate.value = getDate(selectDay)
    isShowSetTodo.value = true
  }

  function getInitTodo() {
    mockRegisteredSchedule.value.forEach((item) => {
      if (item.date.substring(0, 10) === getDate(new Date()).substring(0, 10)) {
        todoList.value.push({
          name: item.text,
        })
      }
    })
    console.log(todoList.value, 'dsdsdsds')
  }
  onMounted(() => getInitTodo())
  /** 表单操作 */
  function submit(form) {
    isShowSetTodo.value = false
    showToast('保存成功！')
  }

  function close() {
    isShowSetTodo.value = false
  }

  function formatter(day) {
    const month = day.date.getMonth() + 1
    const date = day.date.getDate()
    for (let i = 0, len = mockRegisteredSchedule.value.length; i < len; i++) {
      if (mockRegisteredSchedule.value[i].date) {
        const itemMonth = getDayOrMonth(
          mockRegisteredSchedule.value[i].date.substring(5, 7)
        )
        const itemDay = getDayOrMonth(
          mockRegisteredSchedule.value[i].date.substring(8, 11)
        )
        if (month === itemMonth) {
          if (date === itemDay) {
            day.bottomInfo = mockRegisteredSchedule.value[i].text
          }
        }
      }
    }
    return day
  }

  function viewTodo() {
    isShowViewTodo.value = true
  }
</script>
<style>
  .custom-badge {
    background-color: #f43c32;
    color: #fff;
    font-size: 10px;
    padding: 2px 4px;
    border-radius: 8px;
  }
</style>
