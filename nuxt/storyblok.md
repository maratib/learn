# HTTPs proxy setup

## Start a development server with https proxy
```bash
# Install mkcert for creating a valid certificate (Mac OS):
brew install mkcert
mkcert -install
npm install -g local-ssl-proxy

        
# Then install and run the proxy in your project folder using the following :-
mkcert localhost
```

```javascript 
// package.json
"dev": "nuxt dev --https --ssl-cert localhost.pem --ssl-key localhost-key.pem",
// nuxt.config.ts
// Region setup is mandatory if US or China
 modules: [
    ['@storyblok/nuxt',
      {
        accessToken: 'EFtLShAzb4W0xree3jRc0gtt',
        apiOptions: {
          region: "us",
        },
      }
    ]
  ],
```

[Nuxt3 HTTPs setup](https://www.storyblok.com/faq/setting-up-https-on-localhost-in-nuxt-3)