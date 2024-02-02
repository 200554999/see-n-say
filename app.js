// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables

-------------------------------------------------- */
// Create a new speechSynthesis object


const Nouns=["The turkey","Mom","Dad","The Dog","My teacher","The Elephant","The cat"];
const Verbs=["sat on","ate","danced with","saw","doesn't like","kissed"];
const Adjectives=["a funny","a scary","a goofy","a slimy","a barking","a fat"];
const Nouns_2=["goat","monkey","fish","cow","frog","bug","worm"];
const Places=["on the moon","one he chair","in my spaghetti","in my soup","on the grass","in my shoes"];
const stories = [
	"In a distant galaxy, where stars whispered secrets to each other, a brave explorer embarked on a quest to discover the legendary Crystal of Time. Little did they know, this crystal held the power to reshape reality itself.",
	"Deep within the enchanted forest, a mischievous fairy named Luna found an ancient book of spells. Curiosity got the better of her, and with a flick of her wand, she accidentally unleashed a magical storm that changed the course of nature.",
	"On the bustling streets of a futuristic city, a brilliant scientist invented a device that could read minds. As the device gained popularity, people grappled with the consequences of knowing each other's deepest thoughts.",
	"In the golden age of piracy, Captain Blackbeard's ghost ship, the Shadow Serpent, was said to roam the seas. Legends spoke of a hidden treasure, and a group of daring adventurers set sail to uncover the truth behind the myth.",
	"Amidst the snow-covered peaks of the Himalayas, a group of mountaineers stumbled upon a hidden cave. Inside, they discovered a portal to a parallel world where mythical creatures coexisted with humans. Their journey to understand this new realm unfolded with every step."
];
var randomStory="";
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = '';
var speakButton = document.querySelector('#Speak');
var NounElement = document.querySelector('#Nouns');
var VerbsElement =document.querySelector("#Verbs")
var AdjectivesElement = document.querySelector('#Adjectives');
var Nouns_2Element =document.querySelector("#Nouns_2")
var PlacesElement=document.querySelector("#Places");
/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	console.log(utterThis);
	synth.speak(utterThis);
}

function randomNum(length){
	const randomIndex = Math.floor(Math.random() * length);
	return randomIndex
}

function randomNoun(){
    textToSpeak=Nouns[randomNum(Nouns.length)];
}

function randomVerb(){
	textToSpeak+=" "+Verbs[randomNum(Verbs.length)];
}

function randomAdjective(){
   textToSpeak+=" "+Adjectives[randomNum(Adjectives.length)];
}

function randomNouns_2(){
	textToSpeak+=" "+Nouns_2[randomNum(Nouns_2.length)];
}


function randomPlaces(){
	textToSpeak+=" "+Places[randomNum(Places.length)];
}
function generateRandomStory() {
	
	 randomStory= stories[randomNum(stories.length)];


	document.getElementById('story-output').innerText = randomStory;
 

}

function speakStory(){
	speakNow(randomStory)
}


function resetGenerator() {
	document.getElementById('story-output').innerText = '';
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
}
NounElement.onclick = function(){
	randomNoun();
}
VerbsElement.onclick = function(){
	randomVerb();
}
AdjectivesElement.onclick = function(){
	randomAdjective();
}
Nouns_2Element.onclick = function(){
	randomNouns_2();
}
PlacesElement.onclick = function(){
	randomPlaces();
}




