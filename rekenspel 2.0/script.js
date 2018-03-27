const myAssignment = document.getElementById('myAssignment');
const myInput = document.getElementById('myInput');
const feedback = document.getElementById('feedback');

let assignments = [];
let counter = 0;
init();

function init(){
  for(i=0; i<10; i++){
    assignments.push(makeSum());
  }
    console.log(assignments);
}

function keyPressed(event){
	if (event.keyCode == 13){
	assignments[counter].myInput = myInput.value;
	myInput.value = ''
	counter++;
	if(counter >= assignments.length){
		evaluate();
	}
	else{
		myAssignment.innerHTML = assignments[counter].numA + " X " + assignments[counter].numB;
	}
	}
}

function makeSum(){
  let mySum = {};
  mySum.numA = getNumber();
  mySum.numB = getNumber();
  mySum.ans = mySum.numA * mySum.numB;
  return mySum;
}

feedback.style.display = "none";
myInput.focus();
myAssignment.innerHTML = assignments[0].numA + " X " + assignments[0].numB;

function evaluate(){
	feedback.style.display = "block";
	myAssignment.style.display = "none";
	myInput.style.display = "none";
	
	let tabel = document.createElement('table');
	tabel.setAttribute('border','1');
	for(let i=0; i < assignments.length; i++){
	let row = tabel.insertRow();
	if(assignments[i].ans == assignments[i].myInput){
		row.className = "goed";
	}
	else{
		row.className = "fout";
	}
	let cell1 = row.insertCell();
	cell1.innerHTML = assignments[i].numA + " x " + assignments[i].numB + " = " + assignments[i].ans;
	let cell2 = row.insertCell();
	cell2.innerHTML = assignments[i].myInput;
	}
	feedback.appendChild(tabel);
}

function getNumber(){
  let number = Math.floor(Math.random()*9)+1;
  return number;
}

myInput.addEventListener('keydown',keyPressed, false);

