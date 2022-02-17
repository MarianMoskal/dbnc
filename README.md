There are 5 questions in this quiz, please answer all of them.
Organize your github repo into folders so that it is clear which code is for which question.

(1/5)
Write a function in Typescript, which receives an integer number and has the next logic:
a) it prints "candy" if number is divisible by 2;
b) it prints "bar" if number is divisible by 11;
c) it prints "candybar" if number is divisible by 22;
d) it prints the value of number for all other cases;
note: number is a positive integer number;

(2/5)
Using your favorite front end stack please create this design as close to pixel perfect as possible. The text in the fields is there as an example, the fields should be blank when the page loads, with the exception of the date picker icon, and the helper text in the text area. Because we have not provided you with this specific date picker icon, you can select any free SVG date picker icon you can find. The font is here: https://fonts.google.com/specimen/Lato
li

(3/5)
Refactor the code below. By refactor we mean that you should reorganize the code to reduce the unnecessary complexity, and improve readability. In this process you should not modify the way the code functions. Do not create functions or new constants, simply refactor the code.

if (recipe == 'SPANISH') {
fudge = SPANISH*FUDGE;
amt = base * SPANISH*FUDGE;
sugar = 2 * bottom(amt) + top(amt) _ 1.17;
} else if ((recipe == 'FRENCH') || (recipe == 'ENGLISH')) {
fudge = (recipe == 'FRENCH') ? FRENCH_FUDGE : ENGLISH_FUDGE;
amt = base _ fudge;
sugar = 2 _ bottom(amt) + top(amt) _ 1.17;
if (recipe == 'FRENCH') {
chocolate = 7;
}
} else {
fudge = 1;
amt = base;
sugar = 2 _ bottom(amt) + top(amt) _ 1.17;
}

(4/5)
What is wrong with the following code?

var server*echo;
var json = {
json: JSON.stringify({
a: 1,
b: 2
}),
delay: 3
};
fetch('/echo/', {
method: 'post',
headers: {
'Accept': 'application/json, text/plain, */\_',
'Content-Type': 'application/json'
},
body: 'json=' + encodeURIComponent(JSON.stringify(json.json)) + '&delay=' + json.delay
})
.then(function (response) {
server_echo = response.json().echo
return response.json();
})
.then(function (result) {
alert(result);
})
.catch (function (error) {
console.log('Request failed', error);
});
server_echo.forEach(
element => console.log(element)
)

(5/5)
Write a small React JS web application that prompts the user to enter a word, and in response provides a list of words that rhyme with that word. To find which words rhyme you may use an API, for example https://www.datamuse.com/api/ or any API of your choice.

Note: If you run into CORS issues you can launch chrome without CORS, and assume that we will do the same when we evaluate your submission.
