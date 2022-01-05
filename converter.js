let nilai = prompt("Input niilai: ")

if (nilai >= 80 && nilai <= 100) {
    alert("Nilai anda A")
} else if (nilai >= 60 && nilai < 80) {
    alert("Nilai anda B")
}else if (nilai >= 40 && nilai < 60) {
    alert("Nilai anda C")
}else if (nilai >= 20 && nilai < 40) {
    alert("Nilai anda D")
}else if (nilai >= 0 && nilai < 20) {
    alert("Nilai anda E")
}else {
    alert("Nilai yang anda masukan tidak sesuai")
}