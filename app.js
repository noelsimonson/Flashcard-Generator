
var basic  = require('./basicCard.js');
var cloze  = require('./clozeCard.js');
var inquirer = require('inquirer');
var FS = require('fs');

function start()
{
	inquirer.prompt([

	{
		type:"list",
		message: "Select from the options below please"
		choices: ["Create a new flashcard", "Play Flashcard game"],
		name: "choice"
	}

	]).then(function(prompt1){

		inquirer.prompt([

			
			])

	}


		])

}
