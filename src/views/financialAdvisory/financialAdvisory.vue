<template>
  <div class="financial-module">
    <h3 class="title">财务咨询</h3>
    <!-- 问答模块 -->
    <div class="question-answer">
      <div class="answer-content">
        <div v-for="(item, index) in msgList" :key="index">
          <div
            v-if="item.type === 'question'"
            style="display: flex; margin: 30px"
          >
            <div
              style="
                border: 1px solid;
                width: 75%;
                height: fit-content;
                margin-right: 20px;
                text-align: justify;
                border-radius: 6px;
                padding: 10px;
              "
            >
              {{ item.text }}
            </div>
            <div>
              <van-image
                round
                width="60px"
                height="60px"
                src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
              />
            </div>
          </div>
          <div v-else style="display: flex; margin: 20px">
            <div>
              <van-image
                round
                width="60px"
                height="60px"
                src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
              />
            </div>
            <div
              style="
                border: 1px solid;
                width: 75%;
                margin-left: 20px;
                height: fit-content;
                border-radius: 6px;
                text-align: justify;
                padding: 10px;
              "
            >
              {{ item.text }}
            </div>
          </div>
        </div>
      </div>
      <div class="question-send">
        <van-field
          v-model="question"
          size="large"
          placeholder="请输入需要咨询的问题"
        >
          <template #button>
            <van-button
              :disabled="!question.length"
              size="small"
              type="primary"
              @click="send"
              >发送</van-button
            >
          </template>
        </van-field>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const question = ref('')

  const msgList = ref([
    {
      text: '请问财务相关的法规是什么?',
      link: '',
      type: 'question',
    },
    {
      text: '根据国家《中华人民共和国企业所得税法》，企业应按照规定的税率和税法进行申报和缴纳企业所得税。企业所得税是针对企业的营业利润征收的一种税收，纳税义务人应按照规定的方式、时间和地点进行申报，并按规定缴纳相应的税款。企业应按照法定会计准则和税收法规要求，提供准确、完整的财务报表和相关税务信息。违反财务法规可能会面临罚款、滞纳金或其他法律责任。建议企业严格遵守财务法规，保持合规经营，避免产生不必要的风险和处罚。为确保准确性和最新性，请在实际操作中咨询相关财务专业人士或向当地税务机关核实最新的法律法规信息。',
      link: '',
      type: 'answer',
    },
  ])

  function send() {
    msgList.value.push({
      text: question.value,
      link: '',
      type: 'question',
    })
    question.value = ''
    msgList.value.push({
      text: '静态演示回答，待接口数据接入 查询',
      link: '',
      type: 'answer',
    })
  }
</script>
<style lang="less" scoped>
  .financial-module {
    .title {
      text-align: center;
    }
    .question-answer {
      //   border: 1px solid;
      height: calc(100vh - 64px);
      .answer-content {
        border: 1px solid #dcdee0;
        height: calc(100% - 70px);
      }
      .question-send {
        margin-top: 6.5px;
        :deep(.van-field__control) {
          border: 1px solid #dcdee0;
          padding: 4px;
        }
      }
    }
  }
</style>
