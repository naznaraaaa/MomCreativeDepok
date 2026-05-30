// ================= DATA PRODUK =================

const produkData = [

{
nama: "Gantungan Kunci Rajut Daur Ulang",
deskripsi: "Gantungan kunci handmade dari benang rajut berbahan daur ulang.",
gambar: "img/img60_.jpg"
},

{
nama: "Tas Belanja Plastik Minyak Bekas",
deskripsi: "Tas ramah lingkungan hasil daur ulang kemasan plastik minyak goreng.",
gambar: "img/img60.jpg"
},

{
nama: "Tas Rajut Handmade",
deskripsi: "Tas rajut handmade unik untuk penggunaan sehari-hari.",
gambar: "img/img66.jpg"
},

{
nama: "Tempat Tisu Kain Perca",
deskripsi: "Tempat tisu cantik dari kain perca dan bahan bekas.",
gambar: "img/img50.jpg"
},

{
nama: "Tas Daur Ulang Plastik Kemasan",
deskripsi: "Tas multifungsi dari plastik bekas yang disetrika.",
gambar: "img/img55.jpg"
},

{
nama: "Sarung Tangan Oven",
deskripsi: "Sarung tangan oven dari kain bekas yang aman digunakan saat memasak.",
gambar: "img/img59.jpg"
},

{
nama: "Tas Selempang Rajut Handmade",
deskripsi: "Tas Selempang rajut unik terbuat dari benang pakaian bekas.",
gambar: "img/img73.jpg"
},

{
nama: "Bros Handmade Daur Ulang",
deskripsi: "Bros cantik dari kombinasi kain dan bahan daur ulang.",
gambar: "img/img40.jpg"
},

{
nama: "Pouch Serut Handmade",
deskripsi: "Pouch serut multifungsi untuk menyimpan barang kecil.",
gambar: "img/img46.jpg"
},

{
nama: "Tempat Tumbler Rajut",
deskripsi: "Tempat tumbler rajut handmade dengan desain unik.",
gambar: "img/img25.jpg"
},

{
nama: "Eco Enzyme",
deskripsi: "Cairan serbaguna ramah lingkungan hasil fermentasi bahan organik.",
gambar: "img/img34.jpg"
},

{
nama: "Sabun Eco Enzyme",
deskripsi: "Sabun ramah lingkungan berbahan eco enzyme.",
gambar: "img/img13.jpg"
},

{
nama: "Pouch Plastik Daur Ulang",
deskripsi: "Pouch dari plastik bekas yang diolah kembali menjadi produk baru.",
gambar: "img/img23.jpg"
},

{
nama: "Penanda Buku Rajut",
deskripsi: "Penanda buku atau Al-Qur'an handmade berbahan rajut.",
gambar: "img/img4.jpg"
}

];


// ================= NOMOR WHATSAPP =================

// GANTI NOMOR INI
const nomorWhatsApp = "6281234567890";


// ================= AMBIL CONTAINER =================

const produkGrid =
document.getElementById("produkGrid");


// ================= LOOP PRODUK =================

produkData.forEach((produk) => {

  // bikin card
  const card =
  document.createElement("div");

  card.classList.add("produk-card");


  // isi HTML card
  card.innerHTML = `

    <div class="shape">

      <img
        src="${produk.gambar}"
        alt="${produk.nama}"
      >

    </div>

    <h3>
      ${produk.nama}
    </h3>

    <p>
      ${produk.deskripsi}
    </p>

    <a
      href="https://wa.me/${628131878148}?text=Halo%20Mom%20Creative%20Depok,%20saya%20tertarik%20dengan%20produk%20${produk.nama}.%20Apakah%20produk%20ini%20masih%20tersedia?"
      target="_blank"
      class="order-btn"
    >
      Order
    </a>

  `;


  // masukin card ke grid
  produkGrid.appendChild(card);

});
