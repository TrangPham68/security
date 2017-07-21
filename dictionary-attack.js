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
	console.log(userPassword);                    //take the input from user
	console.log(wordsList);
	//we have a lisy pf potential password
	//we want to see if the userPasswords is in that list
	// if in list, alert(); the user
	
	for(var i = 0 ; i < wordsList.length; i++){
		/*console.log(wordsList[i]);*/
		if (userPassword == wordsList[i]){
			document.getElementById("results").innerHTML = "Your password is not secured enough. We found it in our dictionary!";
			break;
		}
		else if (i == wordsList.length - 1){
			document.getElementById("results").innerHTML = "Your password is a piece of art! We cannot find it in the dictionary";
		}
		}
		
	}
	
	/*if (userPassword = wordsList)
		{
			alert("found it");
			return true;
		}
	else(){
		alert("dont see it");
		return false;
	}*/

	

