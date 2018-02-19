window.onload = function(){
	let elements = document.getElementsByClassName('block');
	let i;
	for(i = 0;i< elements.length; i++){
		elements[i].onclick = function(event){
		location.href="http://localhost:8080/move?x="+this.getAttribute('x')+"&y="+this.getAttribute('y');
	}; 
	}   
};

