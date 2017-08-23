
/******* 原生 调 js *********/

function transmitUserInfo(data) {

	var object = JSON.parse(data);
	console.log(object);
	var userID = object.userID;
	var token = object.token;
	var nickName = object.nickName;
	var iconPath = object.iconPath;
	console.log(userID + '+' + token + '+' + nickName + '+' + iconPath);

	sessionStorage.userID = userID;
	sessionStorage.token = token;
	sessionStorage.nickName = nickName;
	sessionStorage.iconPath = iconPath;

	console.log(sessionStorage.nickName);

	// localStorage.setItem("kUserID", userID);
	// localStorage.setItem("kToken", token);
	// if (nickName) {
	// 	document.getElementById("mall_userName").innerText = nickName;
	// 	localStorage.setItem("userNickName", nickName);
	// } else {
	// 	document.getElementById("mall_userName").innerText = "未登录";
	// }
	// if (iconPath) {
	// 	document.getElementById("mall_icon").src = iconPath;
	// 	localStorage.setItem("userIconPath", iconPath);
	// } else {}
	
}





/******* js 调 原生 *********/

function toMyCardList() {
	// console.log('ccdd');
	window.webkit.messageHandlers.pushToMyCardList.postMessage(null);
}