<template>
  <div>
    <div class="loginBox">
      <el-form ref="loginForm" :model="loginForm" label-width="80px" :rules="loginRule">
        <el-form-item label="用户名" prop="userName">
          <el-input :maxlength="20" size="small" placeholder="请输入用户名" v-model="loginForm.userName" auto-complete="off">
          </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
          <el-input type="password" :maxlength="20" size="small" placeholder="请输入密码" v-model="loginForm.passWord" auto-complete="off">
          </el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmpPassWord" v-if="!isLogin">
          <el-input type="password" :maxlength="20" size="small" placeholder="请输入密码" v-model="loginForm.confirmpPassWord" auto-complete="off">
          </el-input>
        </el-form-item>
        <el-form-item label="博客名称" prop="blogName" v-if="!isLogin">
          <el-input :maxlength="20" size="small" placeholder="请输入密码" v-model="loginForm.blogName">
          </el-input>
        </el-form-item>
        <el-form-item>
        	<el-button size="small" type="primary" @click="login()">{{isLogin?'登录':'注册'}}</el-button>
          <span class="registryBtn" v-if="isLogin" @click="switchLogin">没有账号?<span>立即注册……</span></span>
          <span class="registryBtn" v-else @click="switchLogin">已有账号?<span>立即登录……</span></span>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import('./login.scss')
import localInfo from '@/components/userInfo'

export default {
  name: 'login',
  data () {
    var confirmpPassWord = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.loginForm.passWord) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      isLogin:true,
      loginForm:{
        userName:null,
        passWord:null,
        confirmpPassWord:null,
        blogName:null,
      },
      loginRule:{
        userName:[{ required:true,message:'用户名不能为空!',trigger: 'change'}],
        passWord:[{ required: true, message: '密码不能为空!',trigger: 'change'}],
        confirmpPassWord:[{ validator: confirmpPassWord, trigger: 'change'}],
        blogName:[{ required: true, message: '名称不能为空!',trigger: 'change'}]
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
            if(response.body.data){
              this.$router.push('home')
              localInfo.setObj(response.body.data);
            }else{
              this.$message.error(response.data);
            }
          }).catch((error)=>{

          })
        }
      })
    },
    switchLogin(){
      this.isLogin=!this.isLogin;
    }
  }
}
</script>

