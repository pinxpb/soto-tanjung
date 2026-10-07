# Website Soto Ayam Tanjung Semarang

Ini adalah kode sumber untuk website satu halaman (one-page) bergaya tradisional untuk **Soto Ayam Tanjung Semarang**. Website ini dibuat khusus dengan pendekatan *mobile-first*, artinya akan terlihat sangat rapi dan mudah dibaca saat dibuka melalui smartphone.

## Struktur File
- `index.html`: Kerangka utama website dan tempat semua teks (menu, alamat, dll) berada.
- `style.css`: File untuk mengatur warna, ukuran huruf, tata letak, dan ornamen dekoratif (Wayang & Batik).
- `images/`: Folder untuk menyimpan foto-foto warung Anda.

---

## Cara Mengubah Teks Menu & Informasi

Website ini dirancang menggunakan HTML sederhana sehingga Anda bisa dengan mudah merubah teksnya.

1. Buka file `index.html` menggunakan teks editor bawaan (seperti **Notepad** di Windows) atau editor kode seperti **VS Code**.
2. Cari bagian teks yang ingin Anda ubah. Misalnya, jika ingin menambah menu gorengan baru:
   Cari bagian:
   ```html
   <div class="menu-group">
       <h3>Gorengan</h3>
       <ul>
           <li>Tempe Goreng</li>
           <li>Tempe Mendoan</li>
           <li>Perkedel</li>
           <!-- Tambahkan menu baru di bawah ini -->
           <li>Tahu Isi</li>
       </ul>
   </div>
   ```
3. Simpan file (`Ctrl + S`), lalu buka ulang file `index.html` di browser (Chrome/Safari) untuk melihat perubahannya.

---

## Cara Mengganti Foto (Gambar)

Saat ini, website menggunakan gambar sementara (placeholder) jika file gambar asli belum ada. Untuk menggantinya dengan foto asli warung Anda:

1. Buat sebuah folder baru bernama `images` di dalam folder yang sama dengan `index.html` (jika belum ada).
2. Pindahkan foto Anda ke dalam folder `images`.
3. Ganti nama (rename) foto Anda agar sesuai dengan nama file di `index.html`, atau ubah nama file di dalam kodenya.
   Contoh di dalam `index.html`:
   ```html
   <!-- Ubah "hero-soto.jpg" menjadi nama file foto Anda -->
   <img src="images/hero-soto.jpg" class="hero-img" alt="Semangkuk Soto Ayam">
   ```

---

## Cara Publikasi Website (Gratis!)

Anda dapat membuat website ini online secara gratis tanpa harus membeli hosting bulanan. Berikut adalah dua cara termudah:

### Opsi 1: Menggunakan Netlify (Paling Mudah, Tanpa Akun GitHub)
1. Buka [Netlify Drop](https://app.netlify.com/drop).
2. Buat akun Netlify gratis (bisa menggunakan akun Google Anda).
3. Anda akan melihat kotak bertuliskan "Drag and drop your site output folder here".
4. Seret dan jatuhkan (**drag and drop**) folder utama Anda (folder `SOTO` yang berisi `index.html`, `style.css`, dan folder `images`) ke dalam lingkaran/kotak tersebut.
5. Selesai! Netlify akan langsung memberikan link URL untuk website Anda (misalnya: `https://soto-ayam-tanjung.netlify.app`). Anda bisa merubah nama linknya di menu *Site Settings -> Change site name*.

### Opsi 2: Menggunakan GitHub Pages
1. Buat akun di [GitHub](https://github.com).
2. Buat repository baru, misalnya dengan nama `soto-ayam-tanjung`.
3. Upload file `index.html`, `style.css`, dan folder `images` ke dalam repository tersebut.
4. Buka menu **Settings** pada repository Anda.
5. Pilih menu **Pages** di sebelah kiri.
6. Pada bagian *Source* (atau *Build and deployment*), pilih *Deploy from a branch*, lalu pilih branch `main` atau `master`, dan klik **Save**.
7. Tunggu beberapa menit, dan website Anda akan bisa diakses melalui link `https://[username-github-anda].github.io/soto-ayam-tanjung`.

Selamat mengelola website Soto Ayam Anda!
