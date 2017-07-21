var wordsList = [];

function init() {
  // Load the words from the dictionary text file to wordsList
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  $.get(wordsFile, function(data) {
    document.getElementById("btnSubmit").disabled = true;
    wordsList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false;
  });
}

window.onload = init;

/* ADD YOUR CODE BELOW */

function checkPassword() {
  var userPassword = document.getElementById("pw").value;
	var password = [userPassword.split("")];
	
	var equal = 0;
	console.log(userPassword);                    //take the input from user

	
	console.log(password);
	console.log(percentage);
	
	var percentage = equal/userPassword.length;
	//we have a lisy pf potential password
	//we want to see if the userPasswords is in that list
	// if in list, alert(); the user
	
	for(var i = 0 ; i < wordsList.length; i++){
		var list = [wordsList[i].split("")];
		for(var j = 0; j < list.length; j++){
			for (a = 0; a < password.length; a ++){
				if (a = userPassword.length-1){
					break
				}
			if (list[j] == password[a]){
				equal++;
				
			}
			}
		}
		
		if (userPassword == wordsList[i]){
			document.getElementById("results").innerHTML = "Your password is not secured enough. We found it in our dictionary!";
			break;
		}
		/*else if (i == wordsList.length - 1){
			document.getElementById("results").innerHTML = "Your password is a piece of art! We cannot find it in the dictionary";
		}*/
		}
		
	}