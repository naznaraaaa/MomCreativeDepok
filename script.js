// ================= DATA PRODUK =================

const produkData = [

{
nama: "Gantungan Kunci Rajut Daur Ulang",
deskripsi: "Gantungan kunci handmade dari benang rajut berbahan daur ulang, dengan berbagai karakter lucu yang dibuat dengan detail dan kreativitas, cocok digunakan sebagai hiasan tas, kunci, maupun aksesoris sehari-hari.",
gambar: "img/Ganci.png"
},

{
nama: "Tas Belanja Plastik Minyak Bekas",
deskripsi: "Tas ramah lingkungan hasil daur ulang kemasan plastik minyak goreng.",
gambar: "img/TasMinyak.png"
},

{
nama: "Tas Jinjing Rajut Handmade",
deskripsi: "Tas rajut handmade yang dibuat dari benang pilihan dengan motif bunga yang unik, menghasilkan tampilan yang menarik dan nyaman digunakan sehari-hari.",
gambar: "img/Jinjing.png"
},

{
nama: "Tempat Tisu Kain Perca",
deskripsi: "Tempat tisu cantik dari kain perca dan bahan bekas, diolah menjadi produk yang unik, fungsional, dan cocok digunakan untuk kebutuhan sehari-hari.",
gambar: "img/Tissue.png"
},

{
nama: "Tas Daur Ulang Plastik Kemasan",
deskripsi: "Tas multifungsi dari plastik bekas yang disetrika kemudian dibuat menjadi tas unik,kuat dan pastinya ramah lingkungan.",
gambar: "img/TasDaurUlangPlastik.png"
},

{
nama: "Sarung Tangan Oven",
deskripsi: "Sarung tangan oven terbuat dari kain bekas yang aman digunakan saat memasak.",
gambar: "img/SarungTangan.png"
},

{
nama: "Tas Selempang Rajut Handmade",
deskripsi: "Tas Selempang rajut unik terbuat dari benang pakaian bekas.",
gambar: "img/SlingBag.png"
},

{
nama: "Bros Handmade Daur Ulang",
deskripsi: "Bros cantik dari kombinasi kain dan bahan daur ulang, cocok digunakan sebagai hiasan atau aksesoris tambahan.",
gambar: "img/Bros.png"
},

{
nama: "Pouch Serut Handmade",
deskripsi: "Pouch serut multifungsi untuk menyimpan barang kecil dibuat dari benang pilihan dengan desain unik, ringan, dan praktis.",
gambar: "img/Serut.png"
},

{
nama: "Tempat Tumbler Rajut",
deskripsi: "Tas botol rajut handmade yang dibuat dari benang pilihan, menghasilkan produk yang ringan, praktis, dan cocok digunakan untuk membawa botol minum sehari-hari.",
gambar: "img/TasTumbler.png"
},

{
nama: "Cairan Eco Enzyme",
deskripsi: "Cairan serbaguna ramah lingkungan terbuat dari bahan alami seperti sisa buah dan sayur yang difermentasi menjadi cairan serbaguna yang efektif, aman, dan bermanfaat untuk berbagai kebutuhan.",
gambar: "img/CairanEcoEnzym.png"
},

{
nama: "Sabun Eco Enzyme",
deskripsi: "Sabun ramah lingkungan berbahan eco enzyme yang dibuat dari bahan alami pilihan, membantu membersihkan kulit dengan lembut serta memberikan sensasi segar saat digunakan.",
gambar: "img/Sabun.png"
},

{
nama: "Pouch Plastik Daur Ulang",
deskripsi: "Pouch dari plastik bekas yang diolah kembali menjadi produk baru, serta cocok digunakan untuk menyimpan berbagai kebutuhan sehari-hari",
gambar: "img/Pouch.png"
},

{
nama: "Penanda Buku Rajut",
deskripsi: "Penanda buku atau Al-Qur'an dibuat dari benang rajut pilihan dengan desain sederhana dan menarik, membantu memudahkan menandai halaman bacaan.",
gambar: "img/Penanda.png"
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
