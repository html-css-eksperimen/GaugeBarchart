# Contoh Gauge Chart dengan SVG Element

Latihan membuat grafik atau chart atau progress yang berbentuk meteran atau gauge. Warna dan isi meteran progress bisa diubah-ubah sesuai keinginan. Contoh gauge chart ini dibuat dengan JavaScript ES2015 dan CSS murni, dan tidak membutuhkan library tambahan (misal tidak butuh jquery) untuk memakainya.

Penggunaannya cukup dengan import class ChartMeteran ke dalam komponen yang membutuhkan, inisialisasi dengan menambahkan id css containernya, warna chart gauge, nilai progress awal, dan nilai total progress satu lingkaran keseluruhan.

## Cara Menjalankan Demo

Gunakan NPM untuk memasang dependency http server untuk menjalankan demo sederhana ini.

```sh
npm install

npm run dev
```

## Contoh Kode Penggunaan

Silahkan cek file index.html dan file ChartMeteran.js . Di dalam file tersebut terdapat kelas yang bisa di salin dan diutak atik untuk penyesuaian penggunaan. Kemudian lihat juga file app.css dan app.js untuk referensi penggunaan tampilan CSS dan mengubah data di dalam data chart gauge ini. Jika ingin dipakai, silahkan kustomisasi lebih lanjut template chart gauge di file index.html dan sesuaikan CSS-nya agar sesuai dengan kebutuhan.

![Gambar Demo 1](https://raw.githubusercontent.com/html-css-eksperimen/GaugeBarchart/master/codegaugedemo1.png)

![Gambar Demo 2](https://raw.githubusercontent.com/html-css-eksperimen/GaugeBarchart/master/code_gauge1.png)

![Gambar Demo 3](https://raw.githubusercontent.com/html-css-eksperimen/GaugeBarchart/master/code_gauge.png)
