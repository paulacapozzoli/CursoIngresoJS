function mostrar()
/*ingresar velocidad de un vehículo (validar hasta 250km/h)
y el tipo de combustible (validar solido "s" y líquido "l")
hasta 5 vehículos
mostrar por alert
1. promedio de todas las velocidades
2. velocidad más baja y el tipo de combustible del vehiculo
3. cantidad de combustible liquido si la velocidad supera los 100km/h
4. la velocidad más alta del combustible sólido
*/
{
	var velocidad;
	var tipoCombustible;
	var contador;
	var contadorVelocidad;
	var acumuladorVelocidad;
	var promedioVelocidad;

	contador=0;
	contadorVelocidad=0;
	acumuladorVelocidad=0;

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

			acumuladorVelocidad=parseInt(acumuladorVelocidad);
			acumuladorVelocidad=acumuladorVelocidad+velocidad;
			contador++; //suma 1 vuelta al contador para agotar la iteración hasta 5 veces
			contadorVelocidad++; //suma cantidad de cargas de velocidad para el promedio
		}

	promedioVelocidad=acumuladorVelocidad/contadorVelocidad;

	alert("\nEl promedio de velocidades es "+promedioVelocidad);

}
