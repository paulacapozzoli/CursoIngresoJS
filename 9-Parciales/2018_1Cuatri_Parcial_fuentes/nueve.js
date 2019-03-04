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
	var contadorPares;
	var contador;
	var marcaBarato;
	var precioBarato;
	var litrosBarato;
	var contadorMenor50;
	var acumuladorPrecio;
	var promedioPrecio;
	var contadorTres;
	var precioMin;
	var precioMax;

	contadorPares=0;
	contador=0;
	contadorMenor50=0;
	acumuladorPrecio=0;
	contadorTres=0;

	respuesta=prompt("Ingrese 'si' para comenzar a cargar datos");

	while (respuesta=="si")
		{
			marca=prompt("Ingrese la marca");
			precio=prompt("Ingrese el precio");
			//valido precio
			while (precio<30||precio>100)
				{
					precio=prompt("Error, el precio debe ser entre $30 y $100");
				}
			precio=parseInt(precio);

			litros=prompt("Ingrese los litros");
			//valido litros
			while (litros<0||litros>3)
				{
					litros=prompt("Error, los litros deben ser entre 0 y 3");
				}
			litros=parseInt(litros);

			if (precio%2==0)
				{
					contadorPares++;
				}
			if (contador==0)
				{
					marcaBarato=marca;
					precioBarato=precio;
					litrosBarato=litros;				
				}
			else
				{
					if (precio<precioBarato)
						{
							precioBarato=precio;
							marcaBarato=marca;
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
							precioMax=precio;
							precioMin=precio;
						}
					else
						{
							if(precio<precioMin)
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


			acumuladorPrecio=acumuladorPrecio+precio;

			contador++;
			
			respuesta=prompt("Ingrese 'si' para continuar con la carga");
		}

	promedioPrecio=acumuladorPrecio/contador;

	document.write("La cantidad de precios pares es: "+contadorPares+
		"<br>De la gaseosa más barata, la marca es: "+marcaBarato+ " y los litros: "+litrosBarato+
		"<br>La cantidad de gaseosas de valor menor a $50 es: "+contadorMenor50+
		"<br>El promedio de todos los precios es: "+promedioPrecio+
		"<br>De las gaseosas de menos de 3lts, el precio mínimo es: "+precioMin+" y el precio máximo es: "+precioMax);


}
