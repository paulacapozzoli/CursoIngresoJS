function mostrar()
{
	var numeroUno;
	var numeroDos;
	var mensaje;
	var resta;
	var suma;

	numeroUno=prompt("Ingrese un número");
	numeroDos=prompt("Ingrese otro número");
	//numeroUno=parseInt(numeroUno);
	//numeroDos=parseInt(numeroDos);

	if (numeroUno==numeroDos)
		{
			mensaje=numeroUno+numeroDos;	
		}
	if (numeroDos<numeroUno)
		{
			resta=numeroUno-numeroDos;
			mensaje="Resultado: "+resta;
		}
	else
		{
			numeroUno=parseInt(numeroUno);
			numeroDos=parseInt(numeroDos);	
			suma=numeroUno+numeroDos;
			mensaje="Resultado: "+suma;
				if (suma>10)
					{
						mensaje="la suma es "+suma+" y supero el 10";
					}
		}
	alert(mensaje);

}
