# PodReserve - PIPD SiberStudio

PodReserve adalah aplikasi web berbasis Progressive Web App (PWA) untuk manajemen reservasi fasilitas digital dan Studio Podcast di Pusat Laboratorium Siber. Aplikasi ini dibangun dengan desain antarmuka premium, responsif, dan terintegrasi langsung dengan ekosistem Google Workspace.

## Fitur Utama

- **PWA Ready:** Dapat diinstal di perangkat *mobile* (Android/iOS) maupun *desktop* layaknya aplikasi *native*.
- **Desain Premium:** Antarmuka responsif dengan skema warna *Siber Green*, didukung transisi yang mulus dan *micro-animations*.
- **Admin Dashboard:** Fitur khusus admin (diakses dengan *Secret Knock*) untuk menyetujui, menolak, mengelola ketersediaan tanggal kalender *(Whitelist)*, serta menghapus data studio.
- **WhatsApp Auto-Direct:** Mengarahkan pemohon langsung ke nomor WhatsApp Kepala Pusat Lab Siber beserta pesan otomatis yang sudah diformat rapi dan lampiran tautan Google Drive dokumen mereka.
- **Google Apps Script Backend:** Menggunakan Spreadsheet sebagai *database* dan Google Drive sebagai penyimpanan otomatis *file* PDF/Gambar tanpa memerlukan *hosting* server (Serverless).

## Instalasi & Cara Penggunaan

Karena aplikasi ini *Serverless* (berjalan di sisi klien murni dengan `index.html`), Anda tidak memerlukan `npm`, `Node.js`, atau *build tools* apapun!

1. **Host Frontend:**
   - Cukup *upload* seluruh *file* (`index.html`, `sw.js`, `manifest.json`, `icon.svg`) ke penyedia *hosting* statis seperti [GitHub Pages](https://pages.github.com/), Vercel, Netlify, atau web server standar Anda.
2. **Deploy Backend (Google Apps Script):**
   - Salin isi dari `GOOGLE_APPS_SCRIPT.gs`.
   - Buka Google Sheets baru, klik **Ekstensi > Apps Script**.
   - Tempel (*paste*) kode tersebut, lalu sesuaikan ID Folder Google Drive Anda di baris konfigurasi atas.
   - Deploy sebagai **Web App** (akses: *Anyone*).
   - Salin URL Web App yang didapat dan masukkan ke dalam *variable* `GAS_URL` di `index.html`.

## Teknologi
- **Frontend:** HTML5, Vanilla JavaScript, CSS3
- **Ikon:** Lucide Icons
- **Backend & Database:** Google Apps Script (GAS) + Google Sheets
- **Storage:** Google Drive
