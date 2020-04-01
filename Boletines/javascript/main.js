//DOM
//querySelector / querySelectorAll
/*
let links = document.querySelectorAll("a");

links.forEach(function(link){
	console.log(link);
});
*/

/*let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
	td.addEventListener('click',function(){
		console.log(this);
	});
});*/

//Obtener elementos de la clase .close
let links = document.querySelectorAll(".close");
//recorrelos
	links.forEach(function(link){
//Agregar un evento click a cada uno de ellos
		link.addEventListener("click",function(e){
			e.preventDefault();
			let content = document.querySelector(".content");
			
			//Quitarle clases de animación 
			content.classList.remove("heartBeat");
			content.classList.remove("animated");

			//Agregar clases de animación de salida
			content.classList.add("fadeOutUp");
			content.classList.add("animated");

			//setTimeout despues de cierto tiempo una vez
			//setInterval despues de cierto tiempo constantemente
			setTimeout(function(){
			location.href = "/Boletines";
			},600);
		


			return false;
	});
});

let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
	icono.classList.remove("fa-star");
});		