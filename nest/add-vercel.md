# Add Vercel support
[NestVercel Source](https://github.com/maratib/nest-vercel)

# vercel.json
```json
// Add ~/vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "src/main.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "src/main.ts",
      "methods": [
        "GET",
        "POST",
        "PUT",
        "DELETE"
      ]
    }
  ]
}
```