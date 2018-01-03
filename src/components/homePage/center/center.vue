<template>
	<div>
		<div class="wrap">
			<p class="before">来，说说你在做什么，想什么……</p>
			<el-input class="textarea" :maxlength="200" type="textarea" :rows="3" placeholder="我想说……" v-model="textarea">
			</el-input>
			<el-button type="danger" size="small" :disabled='textarea?false:true' class="send_talking" @click="send_talking">发表</el-button>
			<div class="talkList">
				<h6 class="noTalking" v-if="talkList&&talkList.length==0">
					你还未发表过任何说说或文章……
				</h6>
				<div class="talkingItem" v-for="item in talkList" :key="item.id">
					<p class="title">{{item.title}}</p>
					<p class="text">{{item.content}}</p>
					<p class="creatTime">{{new Date(item.createDate).toLocaleDateString()}} {{new Date(item.createDate).toLocaleTimeString()}} <span class="delete" @click="deleteTalking(item.sqlId)">删除</span></p>
				</div>
				<h6 class="noTalking" v-if="talkList&&talkList.length>=10">
					当前显示最近十条，查看更多……
				</h6>
			</div>
		</div>
	</div>



</template>	
<script>
import('./center.scss')
import localInfo from '@/components/userInfo'

export default {
	name:"center",
	created(){
		this.getData();
	},
	data(){
		return{
			userName:localInfo.get().name,
			textarea:null,
			talkList:null
		}
	},
	methods:{
		send_talking(){
			let params = {
				name:this.userName,
				theme:'1',
				title:'',
				content:this.textarea
			}
			console.log(params)
			return this.$http.post('/blog/article/save',params,{
            headers:{
              'Content-Type':'application/x-www-form-urlencoded;'
            },
            emulateJSON:true
          }).then((response)=>{
				this.getData();
				this.textarea = null;
			}).catch((error)=>{
				console.log(error)
			})
		},
		getData(){
			let params = {
				name:this.userName
			}
			return this.$http.get('/blog/article/save',{
				params:params
			}).then((response)=>{
				this.talkList = response.body.data;
			}).catch((error)=>{
				console.log(error)
			})
		},
		deleteTalking(id) {
	        this.$confirm('是否删除该条文章, 是否继续?', '提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          type: 'warning'
	        }).then(() => {
	        	let params = {
					sqlId:id
				}
	        	this.$http.get('/blog/article/delete',{
	        		params:params
	        	}).then((response)=>{
	        		if(response.body.data){
	        			this.$message({
				            type: 'success',
				            message: '删除成功!'
			          	});
			          	this.getData();
	        		}
	        	}).catch(err=>{

	        	})
	        }).catch(() => {
	          this.$message({
	            type: 'info',
	            message: '已取消删除'
	          });          
	        });
	    }

	}
}

</script>

(response)=>{
	        		