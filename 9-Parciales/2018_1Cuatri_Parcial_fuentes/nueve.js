/* Pedir al usuario que ingrese: marca de una gaseosa,
el precio (validar entre $30 y $100)y los litros(validar entre 1 y 3 Lts.),
la cantidad de veces que lo desee y mostrar por document.write:
a)La cantidad de precios pares- ok
b)La marca y litros del más barato- ok
c)La cantidad de gaseosas que valen menos de 50- ok
d)El promedio del precio de todas las gaseosas- ok
f)El precio máximo y el mínimo de todas las gaseosas menores a 3 litros- ok
*/

function mostrar()
{
	var marca;
	var precio;
	var litros;
	var respuesta;
	var contador;
	var contadorPreciosPares;
	var precioBarato;
	var marcaBarata;
	var litrosBarato;
	var contadorMenor50
	var contadorPrecios;
	var acumuladorPrecios;
	var promedioPrecios;
	var contadorTres;
	var precioMax;
	var precioMin;

	contador=0;
	contadorPreciosPares=0;
	contadorMenor50=0;
	contadorPrecios=0;
	acumuladorPrecios=0;
	contadorTres=0;

	respuesta=prompt("Ingrese 'si' para comenzar carga");

	while (respuesta=="si")
		{
			marca=prompt("Ingrese la marca");
			precio=prompt("Ingrese precio");
			//valido
			while (precio<30||precio>100)
				{
					precio=prompt("ERROR, ingrese precio entre 30 y 100");
				}
			precio=parseInt(precio);

			litros=prompt("Ingrese litros");
			//valido
			while(litros<1||litros>3)
				{
					litros=prompt("ERROR, ingrese litros entre 1 y 3");
				}
			litros=parseInt(litros);


			if (precio%2==0)
				{
					contadorPreciosPares++;
				}
			if (contador==0)
				{
					precioBarato=precio;
					marcaBarata=marca;
					litrosBarato=litros;
				}
			else
				{
					if (precio<precioBarato)
						{
							precioBarato=precio;
							marcaBarata=marca;
							litrosBarato=litros;
						}
				}
			
			if (precio<50)
				{
					contadorMenor50++;
				}

			if (litros<3)
				
				{
					if (contadorTres==0)
						{
							precioMin=precio;
							precioMax=precio;
						}
					else
						{
							if (precio<precioMin)
								{
									precioMin=precio;									
								}
							else
								{
									if (precio>precioMax)
										{
											precioMax=precio;
										}
								}		
						}
					contadorTres++;					
				}

			acumuladorPrecios=acumuladorPrecios+precio;
			contadorPrecios++;
			contador++;
			respuesta=prompt("Ingrese 'si' para continuar la carga");
		}

	promedioPrecios=acumuladorPrecios/contadorPrecios;

	document.write("<br>La cantidad de precios pares es "+contadorPreciosPares+
			"<br>La marca del más barato es "+marcaBarata+
			"<br>cantidad de litros "+litrosBarato+
			"<br>La cantidad de gaseosas que valen menos de 50 es "+contadorMenor50+
			"<br>El promedio del precio de todas las gaseosas es "+promedioPrecios+
			"<br>de todas las gaseosas menores a 3 litros el precio max es "+precioMax+
			"<br>y el precio min es "+precioMin);

}
