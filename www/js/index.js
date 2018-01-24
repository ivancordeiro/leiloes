document.addEventListener("deviceready", onDeviceReady, false); 


function onDeviceReady() {

//alert('teste');
/*
var conn = navigator.connection.type;
if( conn == 'none' || conn == 'NONE' ){ //conn

alert('O aplicativo nao detectou conexao com internet.');

} else {

document.getElementById('conectando').style.display = 'none';
//cordova.InAppBrowser.open(encodeURI('http://fazerja.com.br/site/index.php?app=s'), '_self', 'location=no,hidden=no');
}


document.getElementById('fechar').style.display = 'block';
*/

atualizar();

}



function fechar(){
navigator.app.exitApp();
}







function atualizar(){


var conn = navigator.connection.type;
if( conn == 'none' || conn == 'NONE' ){ //conn

alert('O aplicativo nao detectou conexao com internet.');

} else {
//cordova.InAppBrowser.open(encodeURI('http://fazerja.com.br/site/index.php?app=s'), '_self', 'location=no,hidden=no');

var altTela = parseInt( screen.height ) ;
if( altTela != '' && altTela != 'undefined'  && altTela != 0 ){
//alert(altTela);
document.getElementById("ifrBrowser").style.height = altTela - 40 +"px";
}

//var urlBrow = 'http://sistemaparaleiloes.com.br/modelo/index.php?app=s&papp=and';
var urlBrow = 'https://sistemaparaleiloes.com.br/modelo/pregao.php?idleilao=478&app=s&papp=and';
//alert( 'urlBrow: ' + urlBrow );
ifrBrowser.location.href =  urlBrow;

}



}
	   

