function mostrar()
{
	var subTotal;
	var iva;
	var importeIva
	var propina;
	var importeFinal;
	var comensales;
	var importeComensales;

	subTotal=prompt("Ingrese el sub total en $");
	comensales=prompt("Ingrese la cantidad de comensales");

	subTotal=parseInt(subTotal);
	comensales=parseInt(comensales);

	iva=subTotal*21/100;
	importeIva=subTotal+iva;

	propina=importeIva*10/100;
	importeFinal=importeIva+propina;

	importeComensales=importeFinal/comensales;

	alert("El sub total es $"+subTotal+" mas iva es $"+importeIva+" mas la propina del 10% es $"+importeFinal+" Cada comensal abona $"+importeComensales);


}
