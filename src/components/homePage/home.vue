<template>
	<div class="homeWrap">
		<div class="header">
			<div class="headerContent">
				<div class="userImg">
				<div class="shadow"></div>
				</div>
				<span class="userName">myBlog</span>
				<div class="signOut">sign out</div>
				<ul class="navBar">
					<li><span>home</span></li>
					<li><span>about me</span> </li>
					<li><span>contact</span></li>
					<li><span>blog</span></li>
				</ul>
			</div>
		</div>
		<div>
			<router-view/>
		</div>
	</div>
</template>


<script>
import('./home.scss')


export default {
	name:'home',
	data(){
		return{
			activeIndex: '1',
        	activeIndex2: '1'
		}
	},
	methods:{
		handleSelect(key, keyPath) {
	        console.log(key, keyPath);
	    }
	}
}
</script>