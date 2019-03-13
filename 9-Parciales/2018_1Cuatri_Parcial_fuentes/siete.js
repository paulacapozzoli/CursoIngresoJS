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
	var contadorLiquido100;
	var velocidadAltaSolido;

	contador=0;
	contadorVelocidad=0;
	acumuladorVelocidad=0;
	contadorLiquido100=0;

	while(contador<5)
		{
			velocidad=prompt("Ingrese velocidad");
			//valido velocidad
			while(velocidad<0||velocidad>250)
				{
					velocidad=prompt("ERROR, ingresar velocidad entre 0 y 250km/h");
				}
			velocidad=parseInt(velocidad);

			tipoCombustible=prompt("Ingrese el tipo de combustible líquido o sólido");
			//valido tipo de combustible
			while(tipoCombustible!="l"&&tipoCombustible!="s")
				{
					tipoCombustible=prompt("ERROR, ingresar tipo 'l' o tipo 's'");
				}

			if(contador==0)
				{
					velocidadMenor=velocidad;
					combustibleMenor=tipoCombustible;
					velocidadAltaSolido=velocidad;
				}
			else
				{
					if (velocidad<velocidadMenor)
						{
							velocidad=velocidadMenor;
							tipoCombustible=combustibleMenor;
						}
				}
			if (velocidad>100&&tipoCombustible=="l")
				{
					contadorLiquido100++;
				}

			if (velocidad>velocidadAltaSolido&&tipoCombustible=="s")
				{
					velocidadAltaSolido=velocidad;
				}

			acumuladorVelocidad=acumuladorVelocidad+velocidad;
			contador++;
			contadorVelocidad++;
			
		}

	promedioVelocidad=acumuladorVelocidad/contadorVelocidad;

	alert("\nEl promedio de velocidades es "+promedioVelocidad+
			"\nLa velocidad más baja "+velocidadMenor+
			"\ncon el combustible "+combustibleMenor+
			"\nLa cantidad que con combustible 'l' se superaron los 100km/h "+contadorLiquido100+
			"\nLa velocidad más alta con combustible sólido es "+velocidadAltaSolido);

}
