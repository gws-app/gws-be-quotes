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

## Running Projects

### Prerequisites
1. **Bun**
2. **Google Cloud Service Account** with access to Firestore (keyfile `svac.json` must be provided).
3. **Firestore** with `quotes` collection.

### Installation

### API Endpoints
1. Health Check
URL: /api/healthcheck
Method: GET
Description: Checks API status.
Response:
text
```
API is OK
```
2. Random Quote
URL: /api/quotes
Method: GET
Description: Retrieves random quotes from a database collection.
Response:
Succeed:
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
Configuration
config.ts file:

```
export const config = {
  port: 3000, // Change if you want to use another port
};
```

## License
This project is licensed under the MIT license.

# Development

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```
