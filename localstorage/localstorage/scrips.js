let npm = document.getElementById("npm");
let nama = document.getElementById("nama");

function simpan() {
  console.log(npm.value);
  console.log(nama.value);

  // localStorage.setItem("npm", npm.value);
  //ocalStorage.setItem("nama", nama.value);

  // jika lokal storage belum ada isi value
  if (localStorage.getItem("mahasiswa") === null)
    // simpan aray kocong []
    localStorage.setItem("mahasiswa", "[]");

  let data = JSON.parse(localStorage.getItem("mahasiswa"));
  console.log(data);

  // simpan value npm dan m=nama ke dalam object
  data.push({
    npm: npm.value,
    nama: nama.value,
  });
  console.log(data);

  // simpan data terbaru ke dalam local storage
  // konvrensi dari objek menjadi string
  localStorage.setItem("mahasiswa", JSON.stringify(data));
}

function tampil() {
  // panggul dulu local storage
  let hasil = JSON.parse(localStorage.getItem("mahasiswa"));

  // lakukan perulangan (forEach)
  hasil.forEach((element) => {
    //console.log(element);
    document.getElementById("list-mhs").innerHTML +=
      `<li>${element.npm} ${element.nama}</li>`;
  });
}

// jalankan function tampil()
tampil();
