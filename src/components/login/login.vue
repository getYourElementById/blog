<template>
  <div>
    <div class="loginBox">
      <el-form ref="loginForm" :model="loginForm" label-width="80px" :rules="loginRule">
        <el-form-item label="用户名" prop="userName">
          <el-input :maxlength="20" size="small" placeholder="请输入用户名" v-model="loginForm.userName">
          </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
          <el-input :maxlength="20" size="small" placeholder="请输入密码" v-model="loginForm.passWord">
          </el-input>
        </el-form-item>
        <el-form-item>
        	<el-button size="small" type="primary" @click="login()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import('./login.scss')

export default {
  name: 'login',
  data () {
    return {
      loginForm:{
        userName:null,
        passWord:null,
      },
      loginRule:{
        userName:[{required:true,message:'用户名不能为空!',trigger: 'change'}],
        passWord:[{ required: true, message: '密码不能为空!',trigger: 'change'}]
      }
    }
  },
  methods:{
    login(){
      this.$refs.loginForm.validate((valid)=>{
        var pamrams = {
          userName : this.loginForm.userName,
          passWord : this.loginForm.passWord
        }
        if(valid){
          this.$http.post('/blog/login',pamrams,{
            headers:{
              'Content-Type':'application/x-www-form-urlencoded;'
            },
            emulateJSON:true
          }).then((response)=>{
            console.log(response);
            this.$router.push('home')
          }).catch((error)=>{

          })
        }
      })
      // this.$router.push('home')
    },
  }
}
</script>

