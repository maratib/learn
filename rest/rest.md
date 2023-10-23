# REST API 

### Resources
[RESTful API Design](https://dev.to/colinmcdermott/restful-api-design-cheatsheet-2ji6)

### What is REST?
- `Representational State Transfer` (REST)
- Architectural style (technically not a standard)
- Uses existing standards e.g. HTTP
- REST is stateless
- REST is all about the client server communication.
- REST is about how to manipulate resources
- Client sends HTTP  request
- Server responds it by sending HTTP response.
- Server does not have information about any client (Stateless). 

## HTTP Request
Verb, URI, HTTP Version, Request Headers, Request Body

- Verb -> HTTP methods (GET, POST, DELETE, PUT, PATCH)
- URI -> Uniform Resource Identifier
- HTTP Version -> Indicate HTTP version
- Request Header -> Contains metadata for the HTTP Request message as kay-value pair
- Request Body -> Message content 

## HTTP Response
Response Code, HTTP Version, Response Headers, Response Body

-Status/Response Code -> Indicates Server Status
- HTTP Version -> Indicate HTTP version
- Response Header -> Contains metadata for the HTTP Response message as kay-value pair
- Response Body -> Message content 