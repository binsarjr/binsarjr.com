# Personal Configuration System

## ✅ Setup Completed Successfully!

Sistem konfigurasi personal telah berhasil dibuat dan diintegrasikan ke website Anda. Berikut adalah ringkasan lengkap:

## 📁 File Structure

```
src/lib/config/
├── index.ts          # Export utama
├── personal.ts       # Konfigurasi personal Anda
├── types.ts          # TypeScript types
└── README.md         # Dokumentasi

scripts/
└── update-personal-config.js  # Script update otomatis
```

## 🎯 Konfigurasi Current

- **Nama**: Binsar Dwi Jasuma
- **Nickname**: Binsar
- **Email**: binsarjr121@gmail.com
- **Domisili**: D.I Yogyakarta, Indonesia
- **Phone**: Prefer Not to Say

## 🚀 Cara Menggunakan

### Method 1: Edit Manual

```bash
# Edit file konfigurasi langsung
code src/lib/config/personal.ts
```

### Method 2: Menggunakan Script Interactive

```bash
# Jalankan script update
bun run config:update
```

### Method 3: Quick Edit via Terminal

```bash
# Edit menggunakan editor favorit
nano src/lib/config/personal.ts
vim src/lib/config/personal.ts
```

## 🔧 Available Commands

```bash
# Update konfigurasi personal
bun run config:update

# Start development server
bun run dev

# Build untuk production
bun run build
```

## 🎨 Components yang Terpengaruh

Perubahan konfigurasi akan otomatis memengaruhi:

- ✅ Hero Section (nama, bio, social links)
- ✅ About Section (informasi personal)
- ✅ Contact Information
- ✅ Footer details
- ✅ Meta tags dan SEO
- ✅ Social media links

## 📝 Konfigurasi Tersedia

```typescript
export const PERSONAL_CONFIG = {
	// Informasi Dasar
	name: string, // Nama lengkap
	nickname: string, // Nama panggilan
	email: string, // Email
	phone: string, // Nomor telepon
	location: string, // Domisili

	// Informasi Profesional
	bio: string, // Bio singkat
	title: string, // Jabatan
	subtitle: string, // Tagline

	// Website & Avatar
	avatar: string, // Path foto profil
	website: {
		name: string, // Nama website
		description: string, // Deskripsi website
		url: string // URL website
	},

	// Social Media
	social: {
		github: string, // GitHub URL
		linkedin: string, // LinkedIn URL
		twitter: string, // Twitter URL
		instagram: string, // Instagram URL (optional)
		youtube: string, // YouTube URL (optional)
		portfolio: string // Portfolio URL (optional)
	}
};
```

## ⚡ Development Tips

1. **Hot Reload**: Perubahan akan otomatis terdeteksi saat development server berjalan
2. **Type Safety**: Semua konfigurasi menggunakan TypeScript untuk mencegah error
3. **Backup**: Selalu backup konfigurasi sebelum melakukan perubahan besar
4. **Testing**: Test di berbagai device setelah update konfigurasi

## 🔄 Update Workflow

1. Edit konfigurasi (manual atau script)
2. Save file
3. Check development server (auto-reload)
4. Verify changes di browser
5. Build untuk production jika satisfied

## 🛠️ Troubleshooting

### Development Server tidak reload?

```bash
# Restart development server
Ctrl+C
bun run dev
```

### Script error?

```bash
# Check file permissions
chmod +x scripts/update-personal-config.js

# Run with bun directly
bun scripts/update-personal-config.js
```

### TypeScript errors?

```bash
# Check types
bun run check
```

## 📞 Support

Jika ada masalah atau ingin menambah fitur:

1. Edit file konfigurasi sesuai kebutuhan
2. Tambahkan property baru di `types.ts` jika diperlukan
3. Update constants.ts untuk mapping data baru
4. Test semua perubahan sebelum deploy

---

**🎉 Setup Complete!** Website Anda sekarang menggunakan sistem konfigurasi yang flexible dan mudah diupdate.
