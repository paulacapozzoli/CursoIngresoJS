function mostrar()
{
	var nota;
	var mensaje;

	nota=Math.floor((Math.random ()*10) +1);
	//Genero el número RANDOM entre 1 y 10 
	
	if (nota>8)
	{
		mensaje="Excelente su no es "+nota;
	}

	else
	{
		if (nota>3)
		{
			mensaje="APROBO su nota es "+nota;
		}

		else
		{
			mensaje="Vamos, la proxima se puede su nota es "+nota;

			}
	}

	alert(mensaje);
	console.log(nota);

}//FIN DE LA FUNCIÓN