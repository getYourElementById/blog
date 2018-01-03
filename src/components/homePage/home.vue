<template>
	<div class="homeWrap">
		<div class="header">
			<div class="headerContent">
				<div class="userImg">
				<div class="shadow"></div>
				</div>
				<span class="userName">{{blogName}}</span>
				<div class="signOut" @click="loginOut">退出</div>
				<ul class="navBar">
					<li><span v-for="item in navList" :class="localUrl==item.urlName?'actived':''" @click="selected(item)">{{item.label}}</span></li>
				</ul>
			</div>
		</div>
		<div class="wrapContent">
			<router-view/>
		</div>
	</div>
</template>


<script>
import('./home.scss')
import localInfo from '@/components/userInfo'


export default {
	name:'home',
	created(){
		console.log(this.$router.path)
	},
	data(){
		return{
			localUrl:this.$route.name,
			navList:[
				{
					label:'首页',
					urlName:"center",
					url:'/home'
				},
				{
					label:'博客',
					urlName:"blog",
					url:'/blog'
				},
				{
					label:'用户中心',
					urlName:"userCenter",
					url:'/userCenter'
				},
				{
					label:'设置',
					urlName:"setting",
					url:'/setting'
				}
			],
			blogName:localInfo.get().blogname,
			activeIndex: '1',
        	activeIndex2: '1'
		}
	},
	methods:{
		handleSelect(key, keyPath) {
	        console.log(key, keyPath);
	    },
	    selected(item){
	    	this.$router.push(item.url);
	    	this.localUrl = this.$route.name
	    	console.log(this.$route.name)
	    	
	    },
	    loginOut(){
	    	localInfo.clear();
	    	this.$router.push('/');
	    }
	}
}
</script>