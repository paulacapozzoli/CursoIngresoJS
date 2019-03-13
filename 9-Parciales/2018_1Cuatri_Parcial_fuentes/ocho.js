/* ingresar pais y km de superficie (validar 5000) hasta que el usuario quiera 
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
	var contadorImpar;
	var contadorMenor100;
	var contadorIgual100;
	var primeroMayor100;
	var paisMayor100;
	var contadorKM;
	var acumuladorKm;
	var promedioKm;
	var superficieMenor;
	var paisMenor;

	contadorImpar=0;
	contadorMenor100=0;
	contadorIgual100=0;
	primeroMayor100=1;
	contadorKM=0;
	acumuladorKm=0;

	respuesta=prompt("Ingrese 'si' para comenzar la carga");

	while (respuesta=="si")
		{
			pais=prompt("Ingrese un país");
			superficie=prompt("Ingrese la superficie");
			//valido hasta 5000
			while(superficie<0||superficie>5000)
				{
					superficie=prompt("Error, la superficie debe ser entre 0 y 5000");
				}
			superficie=parseInt(superficie);

			if (superficie%2!=0)
				{
					contadorImpar++;					
				}
			if (superficie<100)
				{
					contadorMenor100++;
				}
			else
				{
					if (superficie==100)
						{
							contadorIgual100++;
						}
					else
						{
							while (primeroMayor100==1)
								{
									paisMayor100=pais;
									primeroMayor100++;
								}
						}
			
				}
			if (contadorKM==0)
				{
					superficieMenor=superficie;
					paisMenor=pais;
				}
			else
				{
					if (superficie<superficieMenor)
						{
							superficieMenor=superficie;
							paisMenor=pais;
						}
				}

			contadorKM++;
			acumuladorKm=acumuladorKm+superficie;

			respuesta=prompt("Para continuar la carga ingrese 'si'");
		}

	promedioKm=acumuladorKm/contadorKM;

	document.write("<br>La cantidad de países con sup impar es "+contadorImpar+
			"<br>La cantidad de países con sup menor a 100 es "+contadorMenor100+
			"<br>La cantidad de países con sup igual a 100 es "+contadorIgual100+
			"<br>El primer país que superó los 100 es "+paisMayor100+
			"<br>El promedio de km es "+promedioKm+
			"<br>El país con menor sup es "+paisMenor);


}
