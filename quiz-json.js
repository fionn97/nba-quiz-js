var pos = 0, test, test_status, question, choice, choices, choiceA, choiceB, choiceC, choiceD, correct=0, name = 0; 
//setting variables

//Set array to hold answers
var quizAnswers = [];

var questions=[
    {
	    question: "Oaklahoma City ",//question
	    correctAnswer: "Thunder",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Storm",
	    answer1: "Thunder",
	    answer2: "Warriors",
        answer3: "Bobcats"
	},
	{
	    question: "New Orleans ",//question
	    correctAnswer: "Pelicans",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Express",
	    answer1: "Pelicans",
	    answer2: "Pioneers",
        answer3: "Panthers"
	},
	{
	    question: "Houston",//question
	    correctAnswer: "Rockets",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Rockets",
	    answer1: "Knights",
	    answer2: "Chargers",
        answer3: "Blazers"
	},
	{
	    question: "Memphis",//question
	    correctAnswer: "Grizzlies",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Ravens",
	    answer1: "Mountaineers",
	    answer2: "Razerbacks",
        answer3: "Grizzlies"
	},
	{
	    question: "Washington",//question
	    correctAnswer: "Wizards",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Wizards",
	    answer1: "Saints",
	    answer2: "Vikings",
        answer3: "Bruins"
	},
	{
	    question: "Detroit",//question
	    correctAnswer: "Pistons",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Panthers",
	    answer1: "Thunder",
	    answer2: "Pistons",
        answer3: "Bears"
	},
	{
	    question: "Atlanta",//question
	    correctAnswer: "Hawks",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Wolves",
	    answer1: "Hawks",
	    answer2: "Cardinals",
        answer3: "Spartans"
	},
	{
	    question: "Utah",//question
	    correctAnswer: "Jazz",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Jam",
	    answer1: "Reds",
	    answer2: "Tigers",
        answer3: "Jazz"
	},
	{
	    question: "San Antonio",//question
	    correctAnswer: "Spurs",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Huskies",
	    answer1: "Spurs",
	    answer2: "Nets",
        answer3: "Saxons"
	},
    {
	    question: "Boston",//question
	    correctAnswer: "Celtics",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Raptors",
	    answer1: "Eagles",
	    answer2: "Celtics",
        answer3: "Rangers"
	},
    {
	    question: "Brooklyn",//question
	    correctAnswer: "Nets",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Bulls",
	    answer1: "Suns",
	    answer2: "Kings",
        answer3: "Nets"
	},
	{
	    question: "Denver",//question
	    correctAnswer: "Nuggets",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Nuggets",
	    answer1: "Magic",
	    answer2: "Saxons",
        answer3: "Jam"
	},
	{
	    question: "Phoenix",//question
	    correctAnswer: "Suns",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Pistons",
	    answer1: "Lions",
	    answer2: "Suns",
        answer3: "Tigers"
	},
	{
	    question: "Sacremento",//question
	    correctAnswer: "Kings",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Rangers",
	    answer1: "Kings",
	    answer2: "Saints",
        answer3: "Bills"
	},
	{
	    question: "Miami",//question
	    correctAnswer: "Heat",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Sharks",
	    answer1: "Mountaineers",
	    answer2: "Heat",
        answer3: "Dolphins"
	},
	{
	    question: "Toronto",//question
	    correctAnswer: "Raptors",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Trojans",
	    answer1: "Lions",
	    answer2: "Tanks",
        answer3: "Raptors"
	},
	{
	    question: "New York",//question
	    correctAnswer: "Knicks",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Knicks",
	    answer1: "Nuggets",
	    answer2: "Giants",
        answer3: "Bruins"
	},
	{
	    question: "Golden State",//question
	    correctAnswer: "Warriors",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Saints",
	    answer1: "Grizzlies",
	    answer2: "Warriors",
        answer3: "Vikings"
	},
	{
	    question: "Chicago",//question
	    correctAnswer: "Bulls",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Bulls",
	    answer1: "Lions",
	    answer2: "Storm",
        answer3: "Cats"
	},
    {
	    question: "Clevland",//question
	    correctAnswer: "Cavaliers",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Cougars",
	    answer1: "Rebels",
	    answer2: "Pirates",
        answer3: "Cavaliers"
	}
];

//function which takes an array and shuffles its contents
//used to get different order of multiple choice answers every time quiz is taken
function shuffleArray(array) 
{
	for (var i = array.length - 1; i > 0; i--) 
	{
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
	}
	return array;
}

//Above I have set my questions, 3 multi-choice answers and the answers in an multi-dimensional array, zero indexed
function _(x)
{ 
    return document.getElementById(x);
} 
//Setting underscore equal to document.getElementById
		
function percent()
{
    var perc = Math.round((correct/questions.length)*100);
    return perc;//gets percentage and returns to form
}

function renderQuestion()
{ 
    test = _("test"); 
    if(pos >= questions.length)//If position is greater or equal to the length of question, ie 20
    { 
        test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct (" +percent() + "%)</h2>";//Print # correct out of 20
        _("test_status").innerHTML += "  Thank you for completing the quiz";//Print "thank you .... "
        pos = 0;
        correct = 0; 
        return false; 
    }

    _("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    //Print questions and increment by one each iteration

    var bar=document.getElementById("progressBar");//Progress bar value
    bar.value = (pos+1);//Progress bar increments as we go through questions, starts at 1

    //console.log("Pos value is " + pos);//write this to console

    //push all potential answers to the quizAnswers array
    quizAnswers[0] = questions[pos].answer0;
    quizAnswers[1] = questions[pos].answer1;
    quizAnswers[2] = questions[pos].answer2;
    quizAnswers[3] = questions[pos].answer3;
    
    console.log("Unshuffled answers" + quizAnswers);
    
    //Shuffle the answers
    var shuffledAnswers = shuffleArray(quizAnswers);
    
    console.log("Shuffled answers" + shuffledAnswers);
    
    question = questions[pos].question;//question is in position 0 in the array(zero indexed)
    choiceA = shuffledAnswers[0]; //choice A is in position 1 in the array
    choiceB = shuffledAnswers[1]; //choice B is in position 2 in the array
    choiceC = shuffledAnswers[2]; //choice C is in position 3 in the array
    choiceD = shuffledAnswers[3]; //choice D is in position 4 in the array
    
    test.innerHTML = "<h3>"+question+"</h3>"; //questions are written in h3 size
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceA+"' checked> "+choiceA+"<br>"; //Radio button
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceB+"'> "+choiceB+"<br>"; //Radio button
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceC+"'> "+choiceC+"<br>"; //Radio button
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceD+"'> "+choiceD+"<br><br>"; //Radio button
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";//on clicking submit button, it checks your answers
}
		
		
function checkAnswer()
{ 
    choices = document.getElementsByName("choices"); //Creates an array
    for(var i=0; i<choices.length; i++)//variable i=0, when i is less than the length of the choices, increment it by one
    { 
        if(choices[i].checked) //if a choice is checked
        { 
            choice = choices[i].value; //Take the value of that choice and put it into choice
        }
    } 
    console.log("Chosen answer is " + choice);
    if(choice == questions[pos].correctAnswer)//If the value of choices is equal to the answer
    { 
        alert('Correct!');//Alert correct
        correct++;//Increment your correct answers by one
    }
    else//or else
    {
        alert('Sorry wrong answer. The correct answer is ' + questions[pos].correctAnswer);
    } 
    pos++; //Increment position by one ie go on to the next question
    
    renderQuestion(); //go to render question again
}

//Call the question with an event handler
window.addEventListener("load", renderQuestion, false);