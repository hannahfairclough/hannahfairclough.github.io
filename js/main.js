function askQuestions()	{

	var firstName = prompt('What is your first name?'),
		lastName = prompt('What is your last name?'),
		fullName = firstName + ' ' + lastName;
	console.log(fullName);
	if (firstName.toLowerCase() === 'general') {

		if (lastName.toLowerCase() !== 'assembly') {
			console.log('Greetings General');

		}

	} 

	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age>= 18) {

		console.log('User is an adult');

	} else if (age >= 13) {
		console.log('User is a teenager');


	} else {

		console.log('User is a child');

	}

}



//When the page has loaded
$ (function () {


	//When the user clicks an h3 element
	$('H3').on ('click', function(){


		//Hide the next element
		$ (this).next().slideToggle();
	
	});
		


});