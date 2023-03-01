function operaciones(){
    var notas = [];
    var suma = 0;
    var promedio = 0;
    var nota = 0;
    for (var i = 0; i < 5; i++) {
      nota = prompt("Ingrese nota " + (i + 1));
      notas.push(nota);
      suma += parseInt(nota);
    }
    promedio = suma / 5;
    if (promedio < 3) {
      alert("Su promedio es " + promedio + " y su calificacion es bajo");
    } else if (promedio >= 3 && promedio < 4) {
      alert("Su promedio es " + promedio + " y su calificacion es basico");
    } else if (promedio >= 4 && promedio < 5) {
      alert("Su promedio es " + promedio + " y su calificacion es alto");
    } else {
      alert("Su promedio es " + promedio + " y su calificacion es superior");
    }
}
