# Personal Configuration

File ini berisi konfigurasi personal untuk website. Ubah file ini untuk memperbarui informasi pribadi di seluruh situs.

## File Location

`src/lib/config/personal.ts`

## Konfigurasi yang Tersedia

### Informasi Dasar

- **name**: Nama lengkap Anda
- **nickname**: Nama panggilan/display name
- **email**: Alamat email
- **phone**: Nomor telepon
- **location**: Domisili/lokasi

### Informasi Profesional

- **bio**: Bio singkat tentang Anda
- **title**: Jabatan/posisi
- **subtitle**: Tagline atau subtitle

### Avatar & Website

- **avatar**: Path ke file foto profil
- **website**: Konfigurasi website (nama, deskripsi, URL)

### Social Media

- **github**: Link GitHub
- **linkedin**: Link LinkedIn
- **twitter**: Link Twitter
- **instagram**: Link Instagram (opsional)
- **youtube**: Link YouTube (opsional)
- **portfolio**: Link portfolio terpisah (opsional)

## Cara Menggunakan

1. Buka file `src/lib/config/personal.ts`
2. Ubah nilai-nilai sesuai dengan informasi pribadi Anda
3. Simpan file
4. Restart development server jika diperlukan

## Contoh

```typescript
export const PERSONAL_CONFIG = {
	name: 'Binsar Dwi Jasuma',
	nickname: 'Binsar Jr',
	email: 'binsarjr121@gmail.com',
	location: 'D.I Yogyakarta, Indonesia'
	// ... konfigurasi lainnya
};
```

## File yang Terpengaruh

Perubahan pada file konfigurasi akan mempengaruhi:

- Hero section
- About section
- Contact information
- Footer
- Meta tags
- Dan semua bagian yang menggunakan data personal

## Notes

- Pastikan untuk memperbarui foto avatar di folder `static/`
- Periksa semua link social media untuk memastikan valid
- Gunakan format nomor telepon yang sesuai dengan negara Anda
