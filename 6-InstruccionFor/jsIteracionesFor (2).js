function mostrar()
{
	var numeroIngresado;
	var numeroAnterior;

	numeroIngresado=prompt("Ingrese un número");
	numeroIngresado=parseInt(numeroIngresado);

	for(numeroAnterior=numeroIngresado-1;numeroAnterior>0;numeroAnterior--) 
	{
		console.log(numeroAnterior);

		if (numeroIngresado%numeroAnterior==0)//quiere decir que es divisible 
		{
			break; //no hace falta armar un contador de divisores por eso break
		}

		console.log(numeroAnterior);
	}

	if(numeroAnterior==1) 
	{
		console.log("Es primo");	
	}

	else
	{
		console.log("No es primo");
	}
}

