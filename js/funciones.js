
function operar(){
	var num1 = parseFloat(document.getElementById('num1').value);
	var num2 = parseFloat(document.getElementById('num2').value);
	var resultado=0;
	if(num1==num2){
		var resultado=num1*num2;
		document.formulario.resultado.value=resultado;
	}else if(num1<num2){
		var resultado=num1+num2;
		document.formulario.resultado.value=resultado;
	}else if(num1>num2){
		var resultado=num1-num2;
		document.formulario.resultado.value=resultado;
	}
}

function mayor(){
	var a =parseFloat(document.getElementById('a').value);
	var b =parseFloat(document.getElementById('b').value);
	var c =parseFloat(document.getElementById('c').value);

	if(a>b && c<a){
		document.formulario.result.value=a;
	}else if(b>a && c<b){
		document.formulario.result.value=b;
	}else if(c>a && c>b){
		document.formulario.result.value=c;
	}else{
		document.formulario.result.value=c;
	}
}