function mostrar()
{
	var numeroRandom;
	var mensaje;

	numeroRandom=Math.floor((Math.random ()*10) +1);
	console.log(numeroRandom);//Genero el número RANDOM entre 1 y 10 
	
	if (numeroRandom<11 && numeroRandom>8)
	{
		mensaje="EXCELENTE"
	}

	else
	{
		if (numeroRandom<9 && numeroRandom>3)
		{
			mensaje="APROBO"
		}

		if (numeroRandom<4)
		{
			mensaje="Vamos, la proxima se puede";

			}
	}

	alert("Su nota es: "+numeroRandom+" "+ mensaje);

}//FIN DE LA FUNCIÓN