document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form default

    // Tampilkan pesan sukses setelah form dikirim
    alert("Pesan Anda telah terkirim. Terima kasih!");

    // Reset form setelah dikirim
    this.reset();
  });
