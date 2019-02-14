function mostrar()
{
  
  var importe;
  var importeDesc;
  var importeFinal;
  var descuento;
  var iva;

  importe=prompt("Ingrese el valor de la compra");

  importe=parseInt(importe);
  
  descuento=importe*10/100;

  importeDesc=importe-descuento;

  iva=importeDesc*21/100;

  importeFinal=importeDesc+iva;

  alert ("tu compra es de $"+importe+" tenes un descuento del 10% queda en $"+importeDesc+", mas el iva es $"+importeFinal);
}
