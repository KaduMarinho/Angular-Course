//localStorage.removeItem(key);
//localStorage.clear(); 

if(getStorage() == null){
	setStorage([]);
}

function setStorage(list){
	if (typeof(Storage) !== "undefined") {
  // Code for localStorage/sessionStorage.
  		localStorage.setItem("db", JSON.stringify(list));
    } else {
      // Sorry! No Web Storage support..
      alert("Desculpe, seu navegador não suporta Web Storage!");
    }
}

function getStorage(){
	
	return JSON.parse(localStorage.getItem('db'));
}

if(getNomeLista() == null){
	setNomeLista("Minha Lista de Compras");
}

function setNomeLista(nome){	
	if (typeof(Storage) !== "undefined") {
  // Code for localStorage/sessionStorage.
  		localStorage.setItem("nm", JSON.stringify(nome));
    } else {
      // Sorry! No Web Storage support..
      alert("Desculpe, seu navegador não suporta Web Storage!");
    }
}

function getNomeLista(){
	
	return JSON.parse(localStorage.getItem('nm'));
}

function showOpt(){
	var x = document.getElementById("opt");
	if(x.className.indexOf("w3-show") == -1){
		x.className += " w3-show";
	}else{
		x.className = x.className.replace(" w3-show", "");
	}
}

var renomear = document.getElementById('renomear');
var limpar = document.getElementById('limpar');
var opt = document.getElementById('opt');
var optBtn = document.getElementById('optBtn');

window.onclick = function(event) {
  if (event.target == renomear) {
    renomear.style.display = "none";
  }else if(event.target == limpar){
	limpar.style.display = "none";
  }else if(event.target !== optBtn ){
	//alert(opt.className);
	if(opt.className.indexOf("w3-show") !== -1){
		showOpt();
	}	
  }
}