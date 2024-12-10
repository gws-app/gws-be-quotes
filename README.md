# Quotes API

Quotes API is a simple backend service that provides an endpoint to get random quotes from a collection.

## Technology Used

- **Bun**: JavaScript runtime.
- **Express.js**: Framework for creating servers.
- **Google Firestore**: NoSQL database for storing quote data.
- **TypeScript**: JavaScript superset for more structured development.

### Directory Explanation
- **`controllers`**: Place for application control logic (not used in this example yet).
- **`services`**: Contains the main logic of the application, such as fetching quote data.
- **`firestore`**: Configure Firestore for database connections.
- **`types`**: Contains data types for TypeScript.
- **`routes.ts`**: Defines all API routes.
- **`index.ts`**: Application entry point.

---

## Menjalankan Proyek

### Prasyarat
1. **Bun**
2. **Google Cloud Service Account** dengan akses ke Firestore (keyfile `svac.json` harus disediakan).
3. **Firestore** dengan koleksi `quotes`.

### Instalasi

### Endpoint API
1. Health Check
URL: /api/healthcheck
Method: GET
Deskripsi: Mengecek status API.
Response:
json
```
{
  "status": "success",
  "message": "API is healthy"
}
```
2. Random Quote
URL: /api/quotes
Method: GET
Deskripsi: Mengambil kutipan acak dari koleksi database.
Response:
Berhasil:
json
```
{
  "status": "success",
  "message": "Random quote fetched successfully",
  "data": {
    "quote": {
      "id": "quote_id",
      "author": "Author Name",
      "quote": "The actual quote text"
    }
  }
}
```
No Quotes:
```
{
  "status": "error",
  "message": "No quotes found",
  "data": {
    "quote": null
  }
}
```
```
{
  "status": "error",
  "message": "Failed to fetch random quote",
  "data": {
    "quote": null
  }
}
```
Penyesuaian Konfigurasi
File config.ts:

```
export const config = {
  port: 3000, // Ubah jika ingin menggunakan port lain
};
```

## Kontribusi

## Lisensi
Proyek ini dilisensikan di bawah lisensi MIT.

# q-feature

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.34. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
