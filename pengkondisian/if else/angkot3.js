var jmlhAngkot = 10;
var angkotBeroperasi = 6;

for (var noAngkot = 1; noAngkot <= jmlhAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log("Angkot No. " + noAngkot + " sedang beroperasi dengan baik");
  } else {
    console.log("Angkot No. " + noAngkot + " tidak beroperasi");
  }
}
