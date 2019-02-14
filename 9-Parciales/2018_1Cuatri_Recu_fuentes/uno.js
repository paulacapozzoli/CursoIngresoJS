
function mostrar()
{
	var nombreUno;
	var nombreDos;
	var pesoUno;
	var pesoDos;
	var suma;

	var nombreUno=prompt("Ingrese el nombre de la primer mascota");
	var nombreDos=prompt("Ingrese el nombre de la segunda mascota");
	var pesoUno=prompt("Ingrese el peso de la primer mascota");
	var pesoDos=prompt("Ingrese el peso de la primer mascota");

	pesoUno=parseInt(pesoUno);
	pesoDos=parseInt(pesoDos);

	suma=pesoUno+pesoDos;

	alert ("tenes dos mascotas "+nombreUno+" y "+nombreDos+" que pesan "+pesoUno+" y "+pesoDos+" kilos, la suma de los kilos es: "+suma);
}
