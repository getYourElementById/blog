var localInfo = {
	setObj:setObjFuc,
	set:setFuc,
	get:getFuc
	// clear:clearFuc
}

function setObjFuc(obj){
	for (let key in obj){
		document.cookie = key + "=" + obj[key];
	}
}

function setFuc(key,value){
	document.cookie = key + "=" + value;
}

function getFuc(){
	let ck = document.cookie;
	let ckArry = ck.split('; ');
	let obj = {};
	for (let i = 0; i < ckArry.length; i++) {
		let arr = ckArry[i].split('=');
		obj[arr[0]] = arr[1];		
	}
	delete obj.password;
	return obj;
}
module.exports=localInfo;