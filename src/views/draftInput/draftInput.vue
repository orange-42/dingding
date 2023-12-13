<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <Auditee
        v-model="auditDraftInputForm.auditeeText"
        name="审计人员"
        label="审计人员"
        placeholder="审计人员"
        @change-auidt="changeAuditee"
      />

      <van-field
        v-model="auditDraftInputForm.auditProject"
        name="审计项目"
        :disabled="true"
        label="审计项目"
        placeholder="审计项目"
      />

      <van-field
        v-model="auditDraftInputForm.auditResponsibleBy"
        name="责任人"
        :disabled="true"
        label="责任人"
        placeholder="责任人"
      />

      <van-field
        v-model="auditDraftInputForm.auditResponsibleUnity"
        name="责任单位"
        :disabled="true"
        label="责任单位"
        placeholder="责任单位"
      />

      <SelectDate
        v-model="auditDraftInputForm.auditPeriod"
        name="审计日期"
        :disabled="true"
        label="审计日期"
        placeholder="审计日期"
        @changeDate="changeDate"
      />

      <van-field
        v-model="auditDraftInputForm.auditMatterText"
        name="审计事项类别"
        :disabled="true"
        label="审计事项类别"
        placeholder="审计事项类别"
      />
      <!-- <AuditMatters
        v-if="auditDraftInputForm.auditee === 'tobaccoShantouCompany'"
        v-model="auditDraftInputForm.auditMatterText"
        name="审计事项"
        label="审计事项"
        placeholder="审计事项"
        :columns="tobaccoShantouCompany"
        @changeAuditMatter="changeAuditMatter"
      />
      <AuditMatters
        v-else
        v-model="auditDraftInputForm.auditMatterText"
        name="审计事项"
        label="审计事项 "
        placeholder="审计事项"
        :columns="twelveBranchesCompanyAuditMattersList"
        @changeAuditMatter="changeAuditMatter"
      /> -->
      <van-field
        v-model="auditDraftInputForm.auditVerifyFacts"
        name="审计查证事实"
        label="审计查证事实"
        placeholder="审计查证事实"
        maxlength="200"
        show-word-limit
        rows="2"
        autosize
      />
      <van-cell-group title="审计意见（问题列表）">
        <van-field
          v-for="(item, index) in auditDraftInputForm.questionList"
          :key="index"
          right-icon="cross"
          placeholder="查阅  记账凭证，报销   元，"
          type="textarea"
          maxlength="200"
          show-word-limit
          autosize
          v-model="item.text"
          rows="2"
          @click-right-icon="removeItem(index)"
        ></van-field>
        <van-button type="primary" block plain @click="addItem"
          >添加项</van-button
        >
      </van-cell-group>
      <!-- <van-uploader v-model="fileList" :after-read="afterRead" /> -->

      <van-field name="uploader" label="附件">
        <template #input>
          <van-uploader
            v-model="auditDraftInputForm.files"
            accept="application/pdf"
            :after-read="afterRead"
            :max-files="1"
            :max-size="10 * 1024 * 1024"
          >
            <van-button icon="plus" type="primary">上传文件</van-button>
          </van-uploader>
        </template>
      </van-field>
    </van-cell-group>
  </van-form>
  <SelectTemp v-model:show="isShowTemp" @addTemp="addTemp" />
</template>
<script setup>
  import { reactive, watch, ref } from 'vue'
  import { showToast } from 'vant'
  import Auditee from './components/Auditee.vue'
  import AuditMatters from './components/AuditMatters.vue'
  import SelectTemp from './components/SelectTemp.vue'
  import SelectDate from './components/SelectDate.vue'

  const onSubmit = (values) => {
    console.log('submit', values)
  }

  const isShowTemp = ref(false)

  // 新增一项
  function addItem() {
    isShowTemp.value = true
  }
  // 新增一项内容插入
  function addTemp(text) {
    auditDraftInputForm.questionList.push({ text })
    isShowTemp.value = false
  }

  function removeItem(index) {
    auditDraftInputForm.questionList.splice(index, 1)
  }
  const twelveBranchesCompanyAuditMattersList = ref([
    {
      text: '会计基础及核算',
      value: '1',
    },
    {
      text: '物资性采购',
      value: '2',
    },
    {
      text: '服务性采购',
      value: '3',
    },
    {
      text: '工程采购',
      value: '4',
    },
    {
      text: '重点费用',
      value: '5',
    },
    {
      text: '资金资产管理',
      value: '6',
    },
    {
      text: '商品购、销、调、存管理',
      value: '7',
    },
    {
      text: '合作点、直营店、加盟店管理',
      value: '8',
    },
  ])
  const tobaccoShantouCompany = ref([
    {
      text: '会计基础及核算',
      value: '1',
    },
    {
      text: '物资性采购',
      value: '2',
    },
    {
      text: '服务性采购',
      value: '3',
    },
    {
      text: '工程采购',
      value: '4',
    },
    {
      text: '重点费用',
      value: '5',
    },
    {
      text: '资金资产管理',
      value: '6',
    },
    {
      text: '内部控制',
      value: '7',
    },
    {
      text: '其他',
      value: '8',
    },
  ])

  // 底稿表单
  const auditDraftInputForm = reactive({
    auditee: '', // 审计部门
    auditeeTxt: '', // 审计部门中文
    auditResponsibleBy: '', // 审计责任人
    auditResponsibleUnity: '', // 审计责任单位
    auditProject: '', // 审计项目
    auditPeriod: [], // 审计日期
    auditMatter: '', // 审计事项
    auditMatterText: '', // 审计事项中文
    auditVerifyFacts: '', // 审计查证事实
    questionList: [], // 问题列表
    files: [], // 附件文件
  })

  const afterRead = (file) => {
    console.log(file, 'dsdsds')
    // auditDraftInputForm.files = file.content
  }
  watch(
    () => auditDraftInputForm,
    (val) => {
      console.log(val, JSON.stringify(val), 'vals')
      const hasValue = Object.values(val).some((item) => item.length)
      if (hasValue) {
        showToast('保存成功')
      }
    },
    {
      deep: true,
    }
  )

  function changeAuditee(label, value) {
    auditDraftInputForm.auditeeText = label
    auditDraftInputForm.auditee = value
    auditDraftInputForm.auditMatterText = ''
    auditDraftInputForm.auditMatter = ''
  }
  function changeDate(date) {
    auditDraftInputForm.auditPeriod = date
  }
  function changeAuditMatter(label, value) {
    auditDraftInputForm.auditMatterText = label

    auditDraftInputForm.auditMatter = value
  }
</script>
<style lang="less" scoped></style>
