// ================= DATA PRODUK =================

const produkData = [

  {
    nama: "Bouquet Wisuda",
    deskripsi: "Bouquet handmade aesthetic untuk hadiah wisuda.",
    gambar: "assets/produk1.jpg"
  },

  {
    nama: "Gift Box Premium",
    deskripsi: "Box custom elegan dan estetik.",
    gambar: "assets/produk2.jpg"
  },

  {
    nama: "Flower Decoration",
    deskripsi: "Dekorasi bunga cantik untuk event spesial.",
    gambar: "assets/produk3.jpg"
  },

  {
    nama: "Handmade Card",
    deskripsi: "Greeting card custom handmade.",
    gambar: "assets/produk4.jpg"
  },

  {
    nama: "Mini Hampers",
    deskripsi: "Hampers lucu untuk hadiah spesial.",
    gambar: "assets/produk5.jpg"
  },

  {
    nama: "Custom Frame",
    deskripsi: "Frame aesthetic custom sesuai request.",
    gambar: "assets/produk6.jpg"
  },

  {
    nama: "Wedding Gift",
    deskripsi: "Souvenir wedding premium handmade.",
    gambar: "assets/produk7.jpg"
  },

  {
    nama: "Acrylic Name",
    deskripsi: "Custom acrylic name modern aesthetic.",
    gambar: "assets/produk8.jpg"
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
      href="https://wa.me/${nomorWhatsApp}?text=Halo%20saya%20ingin%20order%20produk%20${produk.nama}"
      target="_blank"
      class="order-btn"
    >
      Order
    </a>

  `;


  // masukin card ke grid
  produkGrid.appendChild(card);

});