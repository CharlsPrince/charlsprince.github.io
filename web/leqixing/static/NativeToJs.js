
function javacalljswith(arg){
  var obj = JSON.parse(arg);
  sessionStorage.userId = obj.userId;
  sessionStorage.token = obj.token;
  document.getElementById("my-card-token").value = (sessionStorage.token);
}