// alert("Belajar Javascript");

//  ambil value nama
function kirim() {
  let nama = document.getElementById("nama").value;
  let saran = document.getElementById("saran").value;
  console.log("Nama : " + nama + " Saran : " + saran);

  // Tampilkan nama ke ul id=list-pesan
  document.getElementById("List-Pesan").innerHTML +=`<tr><td>${nama}</td><td>${saran}</td></tr>`;
}
