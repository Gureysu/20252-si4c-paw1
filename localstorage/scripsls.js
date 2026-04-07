let npm = document.getElementById("npm");
let nama = document.getElementById("nama");
let image = document.getElementById("image")

function simpan() {
  console.log(npm.value);
  console.log(nama.value);
  console.log(image.value);

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
    image: image.value,
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
      `<div class = 'col-lg-4 col-md-6 container'><img class="img-fluid"src=${element.image} /><h4 class="text-primary">${element.nama}</h4> <h6 class="text-danger">${element.npm}</h6> </div>`;
  });
}

// jalankan function tampil()
tampil();
