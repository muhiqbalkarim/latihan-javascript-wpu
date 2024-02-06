var jmlhAngkot = 10;
var angkotBeroperasi = 6;

for (var noAngkot = 1; noAngkot <= jmlhAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
    console.log("Angkot No." + noAngkot + " Sedang beroperasi dengan baik.");
  } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
    console.log("Angkot No." + noAngkot + " Sedang Lembur.");

    // Syntax diatas bisa juga menggunakan syntax || atau operator OR

    //} else if (noAngkot === 8 || noAngkot === 10) {
    //console.log("Angkot No." + noAngkot + " Sedang Lembur.");
  } else {
    console.log("Angkot No." + noAngkot + " Tidak Beroperasi.");
  }
}
