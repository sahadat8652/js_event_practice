function textChange() {
	document.getElementById('h1').innerHTML='This is my first Javascript programme';
}
function textChange1() {
	document.getElementById('h2').innerHTML=Date();
}

var d = new Date();
function textChange2() {
	document.getElementById('h3').innerHTML= d.getDate();
}
function textChange3() {
	document.getElementById('h4').innerHTML= d.getFullYear();
}

var s = 'sahadat ';
function textChange4() {
	document.getElementById('h5').innerHTML= s.repeat(5);
}

function textChange5() {
	document.getElementById('h6').style.color= 'green';
}
function textChange6() {
	document.getElementById('h7').style.border= '1px solid green';
}
function textChange7() {
	document.getElementById('h8').style.border= '1px solid green';
}
function textChange8() {
	document.getElementById('h9').style.border= '1px solid green';
}
var count = 0;
document.querySelector('textarea').addEventListener('keypress', function(event){
	var text = event.key;
	count++;
	document.getElementById('text_count').innerHTML = 'you have pressed ' + count + ' times';
});