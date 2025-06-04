// Inisialisasi default data jika belum ada
if (!localStorage.getItem("lastRunDate")) {
  localStorage.setItem("lastRunDate", new Date().toDateString());
  localStorage.setItem("visitorCount", "200050"); // 200.050
}

// Fungsi untuk menambah visitor
function tambahVisitor() {
  let currentCount = parseInt(localStorage.getItem("visitorCount"), 10);
  let penambahan = 60; // jumlah yang ditambahkan tiap hari
  let newCount = currentCount + penambahan;

  localStorage.setItem("visitorCount", newCount.toString());
  console.log(`Visitor baru: ${newCount}`);
}

// Cek apakah hari sudah berganti
function cekHariBaru() {
  const lastRun = localStorage.getItem("lastRunDate");
  const today = new Date().toDateString();

  if (today !== lastRun) {
    tambahVisitor(); // jalankan jika hari sudah berubah
    localStorage.setItem("lastRunDate", today); // update tanggal terakhir
  }
}

// Jalankan pengecekan setiap kali halaman dibuka (atau bisa pakai interval)
cekHariBaru();
