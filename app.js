alert("html sees app.js file. great success!!!")

/*var userTextGlobalVariable = document.getElementById("userInput").value;
userTextGlobalVariable = "";
*/

function alertOnButtonClick () {
	var userText = document.getElementById("userInput").value;
	alert(userText);
	document.getElementById("userInput").value = "";
	
}