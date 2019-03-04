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
	var contadorImpar;
	var contadorMenor100;
	var contadorIgual100;
	var primerMayor100;
	var paisMayor100;
	var contadorKm;
	var acumuladorKm;
	var promedioKm;
	var paisMenor;
	var superficieMenor;

	respuesta=prompt("Ingrese 'si' para cargar datos");

	contadorImpar=0;
	contadorMenor100=0;
	contadorIgual100=0;
	primerMayor100=1;
	contadorKm=0;
	acumuladorKm=0;

	while (respuesta=="si")
		{
			pais=prompt("Ingrese el país");
			superficie=prompt("Ingrese la superficie");
			//valido superficie
			while (superficie<0||superficie>5000)
				{
					superficie=prompt("La superficie no debe superar los 5000km");
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
				if (superficie==100)
					{
						contadorIgual100++;
					}
				else
					{
						while (primerMayor100==1)
							{
								paisMayor100=pais;
								primerMayor100++;
							}
					}

			if (contadorKm==0)
				{
					paisMenor=pais;
					superficieMenor=superficie;					
				}
			else
				{
					if (superficie<superficieMenor)
						{
							superficieMenor=superficie;
							paisMenor=pais;
						}
				}

			
			contadorKm++;
			acumuladorKm=parseInt(acumuladorKm);
			acumuladorKm=acumuladorKm+superficie;			
			promedioKm=acumuladorKm/contadorKm;
			respuesta=prompt("Ingrese 'si' para continuar");	
		}

	document.write ("La cantidad de países con superficie impar es: "+contadorImpar+
		"<br>La cantidad de países con superficie menor a 100 es: "+contadorMenor100+
		"<br>La cantidad de países con superficie igual a 100 es: "+contadorIgual100+
		"<br>El primer país que superó los 100 de superficie es: "+paisMayor100+
		"<br>El promedio de kilómetros ingresados es: "+promedioKm+
		"<br>El país que menos territorio tiene es: "+paisMenor); 
	

}
