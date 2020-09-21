//var nombre;
//var edad;
//edad = prompt("INGRESE SU EDAD");
//nombre = prompt("INGRESE SU NOMBRE");

//alert("Bienvenido" + " " + nombre);

//if ( edad>=18 ) {
	//alert("Eres Bienvenido");
//} else 	{
	//alert("no podes permanecer aqui");
//}














// tipo de datos js
 
// Numerico //con decimales es Float         

// String - Cadena de texto

// Array - Arreglo
//var "amigos" = ["Santi","Emi","Seba"];
//document.write(amigos[aca elegimos el numero q queremos usar desde el 0]);
//el nombre de la var+.length te dice la longitud de un arreglo
//nombrevar[nombrevar.length] ="agregamos mas unidades";
//tmb se puede usar el nombrevar.push("pedor,carlos,pepito"); los agrego al final!
//nombrevar.pop(); elimina el ultimo.
//Si queremos unir arreglos de usaria el var amigos3= amigos.concat(amigos2); seria amigos 3 = amigos+amigos2;
//var.join( se usa para cuando se muestra en pantalla para dividir con signos)
//var ordenados= amigos.sort(); ordena las unidades; y .reverse para acomodarlos al reves;



// Object - Objeto
//var Objecto = {
	//color: "black",
	//size: 12	
//};//


// Boolean - Boleano
//var boleano = true false;


// Undefined
//var undefinido;



// Null
//var numero2 = 10;
//var numero2 = null;
//es para querer anular el valor

// NaN
//var texto2 = "hola como estas?";
//document.write(texto2 *2)
//es para mostrar q es algo no logico es invalido!



//alt+91 es igual a = []



//condicional

// if(la condicion){
	// intrucciones
//}	else {
	// instrucciones
//}	

//ciclos

//ciclo for

for(i = 0; i <=9; i++){
 	document.write("oh yeah baby" + "<br>");
}

//ciclo while

//var i=0;
//while(i <=10){
	//document.write( i + "<br>" );
//  i++; tener cuidado con las variantes para q no se tilde la compu x sobrecarga
//}


//funciones

var Saludo = function(nombre){
	document.write("hola " + nombre);
}

Saludo(nombre);

document.write("<br>");

 var  multiplicarySumar = function(numero1,numero2,numero3){
	var numero1 = numero1;
	var numero2 = numero2;
	var numero3 = numero3;
	return numero1 * numero2 + numero3;
}

document.write( multiplicarySumar(10,5,12) );

document.write("<br>");

document.write( multiplicarySumar(100,0,999) );

document.write("<br>");

var numeroMinimo = function(numero1,numero2){
	if (numero1<numero2){
		return numero1;
	}
		return numero2;
}

document.write("El numero mas bajo es:" + numeroMinimo(1,7) );


document.write("<br>");



//Formularios 

var resta = function(numero1,numero2){
	var numero1 = parseFloat(document.getElementById("numero1").value);	
	var numero2 = parseFloat(document.getElementById("numero2").value);	

	var resultado = numero1 - numero2;
	return resultado;
}



//scope
//global - podemos acceder a ellas desde cualquier parte del codigo.
//local - variables creadas dentro de una funcion, solo pueden ser accedidas desde su funcion o anidada

//metodos y propiedades cadenas de texto

//.subtring para cortar la cadena de texto
//.length para saber su longitud, .substr para cortar desde cierta posicion hasta donde queremos
//indexOf nos dice en que poisicion esta lo que queremos en la 
//cadena de texto e indicar la posicion q querramos ej texto.indexOf("a" 5)
//.lastIndexOf("a") para buscar una letra desde el final.
//.replace para cambiar el texto!
//toUpperCase para cambiar letras a mayusculas y toLowerCase para minusculas.

var texto = "Matias Mendez"
var nuevoTexto = texto.substring(3);
document.write(nuevoTexto);

var elementosP  = document.getElementsByTagName("p");

//document.getElementsById es el mas usado!


//crear nodo

// 1.-crear el elemento
	var elemento = document.createElement("h4");
// 2.-crear un nodo de texto
	var contenido = document.createTextNode("este es nuestro titular");
// 3.-anadir el nodo de texto al elemento
	elemento.appendChild(contenido);
// 4.-agregar atributos al elemento
	elemento.setAttribute("align","center");
// 5.-agregar el elemento al documento
	document.getElementById("subtitulo").appendChild(elemento);


	var elemento = document.createElement("li");
	var contenido = document.createTextNode("Nuevo Texto");
		elemento.appendChild(contenido);
	
//	var padre = document.getElementsByTagName("li")[4].parentNode;
//	var hijodPy = document.getElementsByTagName("li")[2];
 //		padre.appendChild(elemento, hijodPy);


	var padre = document.getElementsByTagName("li")[4].parentNode;
	var hijodPy = document.getElementsByTagName("li")[5];
	var sacarPoner = document.getElementsByTagName("li")[6];
 	padre.insertBefore(elemento, hijodPy);
 //	padre.replaceChild(elemento, sacarPoner);
 	padre.removeChild(sacarPoner);




 	var primerElemento = document.getElementById("primero");
	primerElemento.innerHTML = "tambien lastra <i>pancito</i>"; 	

	//.innerHTML puede ejecutar codigo html
	//.textContent no lo hace, muestra etiquetas en texto plano

	//thumb.setAttribute("class", "thumb grande")

	var zoom = function(){
		var thumb = document.getElementById("thumb");
	
		if(thumb.className == "thumb"){
			thumb.className = "thumb grande";

		} else  {
			thumb.className = "thumb";
		}
};

	(function(){
		var Saludos = function(){
			alert('Saludos');
}	

		var Saludos2 = function(){
			alert('Saludos2');
}	


	var botonql = document.getElementById('botonql');
	botonql.addEventListener("click", Saludos);
	botonql.addEventListener("click", Saludos2);
	botonql.removeEventListener("click", Saludos);
}());

	// parametro var Saludos = function(e) se usa para e.type para saber q tipo de evento es.


	(function(){
		var formulario = document.getElementsByName('formulario')[0],
		elementos = formulario.elements,
		boton = document.getElementById('btn');

		var validarNombre = function(e){
			if (formulario.nombre.value == 0)
			alert("completa el campo nombre!");
			e.preventDefault();
		}

		var validarCheckbox = function(e){
			if(formulario.terminos.checked == false) {
			alert("Acepta los terminos");
			e.preventDefault();
		}
	}

		var validarRadio = function(e){
			if(formulario.sexo[0].checked == true || formulario.sexo[1].checked == true){
		}	else { 
			alert("complete el campo sexo");
			e.preventDefault();
		}
	}

		var validar = function(e){
		validarNombre(e);
		validarRadio(e);
		validarCheckbox(e);

		}

		formulario.addEventListener("submit", validar);

		}());	


//timeout

		(function(){

			var contador = 0;
			var bienvenida = function(){
					contador++;
					alert('Felicidades! Eres el visitante 1.000.000 has ganado un Iphone 8');
			

				if (contador === 3){
					clearInterval(intervalo)
				}
			};
		//		setTimeout(bienvenida, 1500);

	//		}());


//interval

		
	var intervalo =	setInterval(bienvenida, 1500);

			}());