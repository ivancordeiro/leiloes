baseUrl = 'https://sistemaparaleiloes.com.br/modelo/';
getPG = "?app=and&sid=" + Math.random();
tokenLogado = '';
idLogado = '';
nomeLogado = '';

document.addEventListener("deviceready", onDeviceReady, false); 



function onDeviceReady() {//1

/*
atualizar();
onInit();

$("#bt_iniciar").click(function(){
atualizar();
});

$("#bt_logar").click(function(){
logar();
});

$("#bt_logando").click(function(){
logando();
});

$("#bt_fechar").click(function(){
navigator.app.exitApp();
});
*/

}//1

























function atualizar(){//2

//alert('atualizando');


//var conn = conexao();
//if( conn == 'none' || conn == 'NONE' ){ //conn

//alert('O aplicativo nao detectou conexao com internet.');

//} else {


/*
var altTela = parseInt( screen.height ) ;
if( altTela != '' && altTela != 'undefined'  && altTela != 0 ){
//alert(altTela);
document.getElementById("ifrBrowser").style.height = altTela - 40 +"px";
}
*/

//var urlBrow = baseUrl + 'index.php?app=and';
/////////////var urlBrow = baseUrl + 'index.php' + getPG ;
var urlBrow = baseUrl + 'pregao.php' + getPG + '&idleilao=478';
///////////////alert( 'urlBrow: ' + urlBrow );
ifrBrowser.location.href =  urlBrow;
/////////////top.ifrBrowser.document.location.href =  'http://www.fazerja.com.br/site';

/////alert('fim');

//}

document.getElementById('div_logar').style.display = 'none';

}
//2	   






function logar(){
alert('logar');
document.getElementById('div_logar').style.display = 'block';
}










//3
function logando(){


var conn = conexao();
if( conn == 'none' || conn == 'NONE' ){ //conn

alert('O aplicativo nao detectou conexao com internet.');

} else {//conn



var logValidou = 's';
var logMSG = '';

//alert('logando');

var logLogin = $("#login").val();
var logSenha = $("#senha").val();


var dadosLog = "login=" + logLogin + "&senha=" + logSenha ;
//alert('dados: ' + dadosLog);


if( logLogin == '' ){
logValidou = 'n';
logMSG += 'Preencha o Login \n';
}

if( logSenha == '' ){
logValidou = 'n';
logMSG += 'Preencha a Senha \n';
}




if( logValidou == 'n' ){//vali

alert( logMSG );

} else {//vali

	
$.ajax({
//
dataType: "json",
type: "POST",
url: baseUrl + baseCliente + "app_logando.php" + getPG,
data: dadosLog ,
crossDomain: true,
cache: false,

success: function(retorno){ 
//alert(retorno);

//
alert(  "Testando retorno logar : logou: " + retorno.logou + ", msg: " + retorno.msg  + ", token: " + retorno.token   + ", nome: " + retorno.nome  + ", tipo: " + logTipo );


if( retorno.logou == 's' ){

//onCreateDB( retorno.token, retorno.nome, logTipo );

} else {
alert( 'Falha ao logar: ' + retorno.msg );
}

}
,beforeSend: function(){
},
complete: function(){
}

});




}//vali



}//conn


}
//3











//4
function deslogar(){

//alert('deslogando');

tokenLogado = '';
idLogado = '';
nomeLogado = '';
tipoLogado = '';
onDeleteGeralDB();
////telaLogin();

	
$.ajax({
url: baseUrl + baseCliente + 'app_logando.php' + + getPG + '&acao=deslogar' ,
crossDomain: true,
cache: false,

success: function(retorno){ 

}

});



}
//4






function conexao(){
var networkState = navigator.connection.type;
return networkState;
}

