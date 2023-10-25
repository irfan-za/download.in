# Download.in
## Youtube Video and audio Dowloader

Download.in adalah layanan downloader video dan audio YouTube yang memungkinkan Anda mengunduh konten favorit Anda dengan mudah. Cukup masukkan tautan video atau judul, pilih resolusi atau unduh audio, dan nikmati akses cepat dan tanpa batas ke konten YouTube kesukaan Anda.

### Cara menggunakan :
1. Sesuaikan value API_URL pada `file /static/js/app.js` dengan server Flask anda.
2. pastikan sudah menginstall Flask. Apabila belum, caranya jalankan kode ini di terminal :
    - install .venv `py -3 -m venv .venv`
    - aktivasi environment-nya `.venv\Scripts\activate`
    - install Flask `pip install Flask`
3. Install requirements `pip install -r requirements.txt`
4. Jalankan server Flask dengan `py app.py`
5. Buka file HTML di browser dan masukkan URL youtube yang ingin di download, kemudian klik unduh.
