# HTTPs proxy setup

## Start a development server with https proxy
```bash
# Install mkcert for creating a valid certificate (Mac OS):
brew install mkcert
mkcert -install
mkcert localhost
        
# Then install and run the proxy

npm install -g local-ssl-proxy
local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem
        
# https is now running on port 3010 and forwarding requests to http 3000
```