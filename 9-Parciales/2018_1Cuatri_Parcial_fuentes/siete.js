function mostrar()
/*ingresar velocidad de un vehículo (validar hasta 250km/h)
y el tipo de combustible (validar solido "s" y líquido "l")
hasta 5 vehículos
mostrar por alert
1. promedio de todas las velocidades
2. velocidad más baja y el tipo de combustible del vehiculo
3. cantidad de veces que el combustible liquido supera los 100km/h de velocidad
4. la velocidad más alta del combustible sólido
*/
{
	var velocidad;
	var tipoCombustible;
	var contador;
	var contadorVelocidad;
	var acumuladorVelocidad;
	var promedioVelocidad;
	var velocidadMenor;
	var combustibleMenor;
	var velocidadMayor;
	var contadorL100;

	contador=0;
	contadorVelocidad=0;
	acumuladorVelocidad=0;
	contadorL100=0;

	while(contador<5)//limita el contador a 5 vueltas
		{
			velocidad=prompt("Ingrese velocidad");
			//valido velocidad
			while(velocidad<0||velocidad>250)
				{
					velocidad=prompt("ERROR, Ingrese velocidad entre 0 y 250km/h");
				}
			velocidad=parseInt(velocidad);

			tipoCombustible=prompt("Ingrese tipo de combustible");
			//valido tipo de combustible
			while(tipoCombustible!="s"&&tipoCombustible!="l")
				{
					tipoCombustible=prompt("ERROR, Ingrese tipo de combustible sólido 's' o líquido 'l'");
				}
			if(contador==0)//para la primer carga completa de datos y tener un valor inicial con qué comparar 
				{
					velocidadMenor=velocidad;
					combustibleMenor=tipoCombustible;
					velocidadMayor=velocidad;
				}
			else
				{
					if (velocidad<velocidadMenor)//para el resto de las cargas
						{
							velocidad=velocidadMenor;
							tipoCombustible=combustibleMenor;
						}
				}
			if (tipoCombustible=="l"&&velocidad>100) 
				{
					contadorL100++;//sólo necesito contar si es "l" es mayor a 100
				}
			if (velocidad>velocidadMayor&&tipoCombustible=="s")
				{
					velocidadMayor=velocidad;//no va combustibleMayor porque solo muestro la velocidad				
				}

			acumuladorVelocidad=parseInt(acumuladorVelocidad);
			acumuladorVelocidad=acumuladorVelocidad+velocidad;
			contador++; //suma 1 vuelta al contador para agotar la iteración hasta 5 veces
			contadorVelocidad++; //suma cantidad de cargas de velocidad para el promedio
		}

	promedioVelocidad=acumuladorVelocidad/contadorVelocidad;

	alert("\nEl promedio de velocidades es "+promedioVelocidad+"km/h"+
			"\nLa velocidad más baja es de "+velocidadMenor+"km/h"+
			"\ncon el tipo de combustible "+combustibleMenor+
			"\nCantidad de combustibles líquidos que superan los 100km/h "+contadorL100+
			"\nLa mayor velocidad de combustible sólido es "+velocidadMayor);

}
