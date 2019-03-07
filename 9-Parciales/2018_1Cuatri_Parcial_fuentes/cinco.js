function mostrar()
{
	var planeta;
	var mensaje;

	planeta=prompt("Ingrese el planeta en minúsculas");

	switch (planeta)
		{
			case "mercurio":
			case "venus":
				mensaje="Acá hace más calor";
				break;
			case "tierra":
				mensaje="Acá vivimos";
				break;
			case "marte":
			case "jupiter":
			case "saturno":
			case "urano":
			case "neptuno":
				mensaje="Acá hace más frío";
				break;
			default:
				mensaje="No es un planeta válido";
				break;
		}

	alert(mensaje);
}
