<template>
  <van-popup v-bind="$attrs" position="bottom" :style="{ height: '78%' }">
    <van-nav-bar
      title="新建日程"
      left-text="取消"
      right-text="确认"
      @click-left="cancel"
      @click-right="submit"
    />
    <van-form>
      <van-cell-group inset>
        <van-field
          v-model="form.todoTitle"
          name="标题"
          label="标题"
          placeholder="标题"
          maxlength="40"
        />
        <van-field name="全天" label="全天" placeholder="全天">
          <template #input>
            <van-switch
              v-model="form.isAllDay"
              size="20px"
              @change="changeIsAll"
            />
          </template>
        </van-field>
        <DateWithTimeSelect
          v-if="!form.isAllDay"
          v-model="form.startAt"
          name="开始时间"
          label="开始时间"
          placeholder="开始时间"
          @confirm="confirmStarAt"
        />
        <DateWithTimeSelect
          v-if="!form.isAllDay"
          v-model="form.endAt"
          name="结束时间"
          label="结束时间"
          placeholder="结束时间"
          @confirm="confirmEndAt"
        />
      </van-cell-group>
      <van-divider />
      <van-cell-group inset>
        <van-field name="提醒" label="提醒">
          <template #input>
            <van-checkbox-group shape="square" v-model="form.remindTime">
              <van-checkbox :name="5">5分钟前</van-checkbox>
              <van-checkbox :name="10">10分钟前</van-checkbox>
              <van-checkbox :name="30">30分钟前</van-checkbox>
              <van-checkbox :name="60">1小时前</van-checkbox>
              <van-checkbox :name="120">2小时前</van-checkbox>
            </van-checkbox-group>
          </template>
        </van-field>
        <van-field name="提醒方式" label="提醒方式">
          <template #input>
            <van-checkbox-group shape="square" v-model="form.remindWay">
              <van-checkbox name="textMessage">短信提醒</van-checkbox>
            </van-checkbox-group>
          </template>
        </van-field>
      </van-cell-group>
      <van-cell-group inset>
        <van-field
          v-model="form.place"
          rows="2"
          autosize
          label="地点"
          type="textarea"
          maxlength="200"
          placeholder="地点"
          show-word-limit
        />
        <van-field
          v-model="form.notes"
          rows="2"
          autosize
          label="备注"
          type="textarea"
          maxlength="200"
          placeholder="请输入备注"
          show-word-limit
        />
      </van-cell-group>
    </van-form>
  </van-popup>
</template>
<script setup>
  import { reactive, onMounted, defineEmits } from 'vue'
  import { showFailToast } from 'vant'
  import DateWithTimeSelect from '../components/DateWithTimeSelect.vue'

  // 表单数据
  const form = reactive({
    todoTitle: '',
    isAllDay: false,
    startAt: '',
    endAt: '',
    remindTime: [], // 多久前提醒
    remindWay: [],
    place: '',
    notes: '',
  })

  /** 开始时间-结束时间选择 */
  function confirmStarAt(finalDateTime) {
    console.log(finalDateTime, 'finalDateTime')
    form.startAt = finalDateTime
  }

  function confirmEndAt(finalDateTime) {
    form.endAt = finalDateTime
  }

  function changeIsAll() {
    form.startAt = ''
    form.endAt = ''
  }

  /** 弹层事件 */

  // 验证开始时间和结束时间
  function validateStarAtGreaterThanEndAt() {
    console.log(form, 'formform')
    const startTime = new Date(form.startAt).getTime()
    const endTime = new Date(form.endAt).getTime()
    console.log(startTime, endTime)
    if (startTime > endTime) {
      showFailToast('开始时间不能大于结束时间~')
      return false
    }
    return true
  }

  const emit = defineEmits(['submit', 'close'])
  // 提交
  function submit() {
    if (!form.isAllDay && !validateStarAtGreaterThanEndAt()) return
    console.log(form, '提交')
    emit('submit')
  }

  function cancel() {
    emit('close')
  }
</script>
<style>
  .content {
    padding: 16px 16px 160px;
  }
  .van-checkbox {
    margin-bottom: 8px;
  }
</style>
