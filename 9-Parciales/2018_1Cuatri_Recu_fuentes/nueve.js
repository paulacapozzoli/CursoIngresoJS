function mostrar()

//serie de celulares: pedimos marca, tamaño (numérico), precio (numérico) 
//1. Necesito saber el mayor precio y marca
//2. promedio precio
//3. cantidad de celus q valen>2000
//4. marca, tamaño y precio del mas caro
//5. marca, tamaño y precio de mas barato
//6. El primer celular que sale 1000
//7. El precio del ultimo celular LG

{
	var cargaCelu;
	var marcaCelu;
	var precioCelu;
	var tamañoCelu;
	var	mayorPrecio;
	var mayorPrecioMarca;
	var contador;
	var otroCelu;

	cargaCelu=prompt("Ingrese 'si' para cargar un celular")

	contador=0;

	while (cargaCelu=="si")
		{
			marcaCelu=prompt("Ingrese marca del celular");
			precioCelu=prompt("Ingrese precio del celular");
			tamañoCelu=prompt("Ingrese tamaño del celular");

			precioCelu=parseInt(precioCelu);
			tamañoCelu=parseInt(tamañoCelu);

			if (contador==0) 
				{
					mayorPrecio=precioCelu;
					mayorPrecioMarca=marcaCelu;
				}
			else
				{
					if (precioCelu>mayorPrecio)
						{
							mayorPrecio=precioCelu;
							mayorPrecioMarca=marcaCelu;
						}
				}
			contador=contador+1;
			otroCelu=prompt("Ingresa otro celular?");

		}
	alert("el mayor precio es "+mayorPrecio+" y la marca es "+mayorPrecioMarca);
}
