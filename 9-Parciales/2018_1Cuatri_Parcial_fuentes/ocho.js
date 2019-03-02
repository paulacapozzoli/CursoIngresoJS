/* ingresar pais y km de superficie (validar 50000) hasta que el usuario quiera 
e informar al terminar el ingreso por document.write:
1-La cantidad de países con superficie impar
2-La cantidad de países con superficie menor a 100
3-La cantidad de países con superficie igual a 100
4-El nombre del primer país que superó los 100 de superficie
5-El promedio de kilómetros ingresados 
6-El nombre del que menos territorio tiene*/


function mostrar()
{
	var pais;
	var superficie;
	var respuesta;
	var contadorPaises;
	var 

	//respuesta="si";

	respuesta=prompt("Ingrese 'si' para cargar datos");

	while (respuesta=="si")
		{
			pais=prompt("Ingrese el país");
			superficie=prompt("Ingrese la superficie");
			//valido superficie
			while (superficie<0||superficie>5000)
				{
					superficie=prompt("La superficie no debe superar los 5000km");
				}

			respuesta=prompt("Ingrese 'si' para continuar");	
		}
	

}
