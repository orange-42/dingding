<template>
  <div class="audit-box">
    <div class="tab">
      <p class="welcome">欢迎来到审计督办整改管理系统</p>
      {{ code }}
      <van-grid clickable :column-num="3" :gutter="10">
        <van-grid-item
          icon="todo-list-o"
          text="日程管理"
          to="/"
          @click="toCalendar"
        />
        <van-grid-item
          icon="comment-o"
          text="财务咨询"
          @click="toFinancialAdvisory"
        />
        <van-grid-item
          icon="records"
          text="审计底稿录入"
          @click="toArchiveAccessProject"
        />
        <van-grid-item
          icon="orders-o"
          text="法规查阅"
          @click="toInstitutionalDocuments"
        />
        <!-- <van-grid-item
          icon="newspaper-o"
          text="档案查阅"
          @click="toArchiveAccess"
        /> -->
      </van-grid>
    </div>
  </div>
</template>
<script setup>
  import { useRouter } from 'vue-router'
  import { ref, onMounted } from 'vue'
  // import * as dd from 'dingtalk-jsapi'
  const router = useRouter()
  function toCalendar() {
    router.push('Calendar')
  }

  function toInstitutionalDocuments() {
    router.push({ name: 'InstitutionalDocuments' })
  }

  function toArchiveAccessProject() {
    router.push({ name: 'ArchiveAccessProject' })
  }

  function toFinancialAdvisory() {
    router.push({ name: 'FinancialAdvisory' })
  }

  function toDraftInput() {
    router.push({ name: 'DraftInput' })
  }

  const code = ref()
  function login() {
    // dd.ready(function () {
    //   dd.runtime.permission.requestAuthCode({
    //     corpId: 'ding84fba831185aa762bc961a6cb783455b', // 企业id
    //     onSuccess: function (info) {
    // code.value = JSON.stringify(info.code) // 通过该免登授权码可以获取用户身份
    // },
    // })
    // })
  }
  onMounted(() => {
    login()
  })
</script>
<style lang="less" scoped>
  .audit-box {
    padding-top: 30px;
    .title {
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .tab {
      margin-top: 200px;
    }
    .welcome {
      margin-top: 24px;
      text-align: center;
      color: #188fff;
    }
  }
</style>
