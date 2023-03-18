<template>
  <div class="login">
    <section class="login-box">
      <div class="login-box-left">
        <img src="@/assets/images/login-img.svg" alt="">
      </div>
      <div class="login-box-right">
        <div class="title">MY-Admin</div>
        <el-form
          ref="formRef"
          :model="state.form"
          :rules="state.rules"
          hide-required-asterisk>
          <el-form-item prop="username">
            <el-input v-model="state.form.username" placeholder="admin" clearable autocomplete="off" >
              <template #prefix>
                <i-ep-user/>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="state.form.password" placeholder="123456" type="password" clearable show-password >
              <template #prefix>
                <i-ep-lock/>
              </template>     
            </el-input>
          </el-form-item>
          <el-form-item prop="remember">
            <el-row class="row-bg" justify="space-between" style="width: 100%">
              <el-checkbox v-model="state.form.remember" label="记住密码" />
              <el-link :underline="false">忘记密码</el-link>
            </el-row>
          </el-form-item>
          <el-form-item prop="">
            <el-space direction="vertical" fill style="width: 100%">
              <el-button type="primary" :loading="state.form.loading" @click="onSubmit">登录</el-button>
              <el-button text>注册账号</el-button>
            </el-space>
          </el-form-item>
        </el-form>
      </div>
    </section>
  </div>
</template>

<script lang='ts' setup name="Login">
import { useUserStore } from '@/store'
import { ElMessage } from 'element-plus';
const userStore = useUserStore()
const router = useRouter()
const route = useRoute();
const state = reactive({
  form: {
    username: 'admin',
    password: '123456',
    remember: true,
    loading:false
  },
  rules: {
    username: [{ required: true, message: '请输入账户名称', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
  }
});

const onSubmit=async ()=>{
  if(!state.form.username){
     ElMessage.error('账号不能为空！')
  }
  if(!state.form.password){
    ElMessage.error('密码不能为空！')
  }
  await userStore.login(state.form)
  router.replace((route.query.redirect as string) || '/');
}
</script>

<style lang='scss' scoped>
.login {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url('@/assets/images/login-bg.svg');
  position: relative;
  .login-box {
    position: absolute;
    display: flex;
    width: 750px;
    height: 380px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 2px 4px 2px #00000014;
    .login-box-left {
      height: 100%;
      width: 100%;
      background: linear-gradient(90deg, #332428, #8d6b73);
      img {
        width: 100%;
        height: 100%;
      }
    }
    .login-box-right {
      width: 370px;
      justify-content: center;
      padding: 60px 20px 20px;
      .title {
        font-weight: 500;
        font-size: 22px;
        line-height: 32px;
        margin-bottom: 10px;
        text-align: center;
        &::before {
          content: '';
          display: inline-block;
          width: 25px;
          height: 25px;
          vertical-align: sub;
          background: url('/public/favicon.ico') no-repeat;
          background-size: contain;
          margin-right: 6px;
        }
      }
    }
  }
}
</style>