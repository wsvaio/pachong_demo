<script setup lang="ts">

const elFormRef =  useTemplateRef('elFormRef')
const load = reactive({ cookie: "", id: "" });

const { data, execute: submit, status } = useAsyncData(
  async () => {
    await elFormRef?.value?.validate()
    return await $fetch("/api/taobao/detail", {
      body: load,
      method: 'post'
    });
  },
  {
    immediate: false,

    
  }
);

</script>

<template>
  <el-card>
    <template #header>
      <span>获取淘宝商品详情接口</span>

      
    </template>

    <el-form ref="elFormRef" v-loading="status == 'pending'" :model="load" label-position="top">
      <el-form-item
        label="cookie"
        prop="cookie"
        :rules="{ required: true, message: '请输入' }"
      >
        <el-input v-model="load.cookie" />
      </el-form-item>

      <el-form-item
        label="id"
        prop="id"
        :rules="{ required: true, message: '请输入' }"
      >
        <el-input v-model="load.id" />
      </el-form-item>


    </el-form>


    <el-button type="primary" @click="submit()">发送请求</el-button>

    

    

    <template #footer>

      请求结果：{{ data }}
      
    </template>
  </el-card>
</template>

<style scoped></style>
