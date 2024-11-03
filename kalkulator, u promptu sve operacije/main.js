let input = prompt("Unesite brojeve i operaciju");

let parts = input.split("");

if (parts.length !== 3) {
  alert("Niste ispravno uneli izraz.");
} else {
  let broj1 = parseFloat(parts[0]);
  let operacija = parts[1]; 
  let broj2 = parseFloat(parts[2]);

  var rezultat;

  switch (operacija) {
    case "+":
      rezultat = broj1 + broj2;
      break;
    case "-":
      rezultat = broj1 - broj2;
      break;
    case "*":
      rezultat = broj1 * broj2;
      break;
    case "/":
      if (broj2 !== 0) {
        rezultat = broj1 / broj2;
      } else {
        alert("Nedefinisan rezultat (deljenje nulom).");
      }
      break;
    default:
      alert("Nepoznata operacija.");
      break;
  }

  if (typeof rezultat !== 'undefined') {
    alert("Rezultat: " + rezultat);
  }
}
