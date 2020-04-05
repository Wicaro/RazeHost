var div01;
var div02;


window.onload = function() {
	div01 = document.getElementById('div01');

	

	div02 = document.getElementById('div02');


	
	var bt1 = document.getElementById('bt1');
	bt1.onclick = mostrarDiv1;

	var bt2= document.getElementById('bt2');
	bt2.onclick = mostrarDiv2;



	div02.classList.add("off");


}

function mostrarDiv1(){
	div01.classList.remove("off");
	div02.classList.add("off");
}

function mostrarDiv2(){
	div01.classList.add("off");
	div02.classList.remove("off");
}


