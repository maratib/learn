# Spring Boot Annotations

## Core Annotations

### `@SpringBootApplication`

This annotation marks the main class of a Spring Boot application, combining the functionality of other key annotations like `@Configuration`, `@EnableAutoConfiguration`, and `@ComponentScan`.

### `@Configuration`

Use this annotation to indicate that a class contains bean definitions and configuration logic. It turns the class into a `source of bean definition`s, and methods annotated with `@Bean` define beans.

### `@ComponentScan`

This annotation specifies the `packages to be scanned` for Spring components such as controllers, services, and repositories.

### `@EnableAutoConfiguration`

Enable automatic configuration of the Spring Boot application based on the classpath and properties in the application.properties or application.yml file.

## Controller Annotations

### `@RestController`

This annotation marks a class as a controller that handles incoming HTTP requests and returns responses in various formats, such as JSON, XML, etc.

### `@Controller`

Similar to `@RestController`, this annotation marks a class as a controller but returns responses in the form of views.

## Service and Repository Annotations

### `@Service`

Use `@Service` to mark a class as a service providing business logic to the application.

### `@Repository`

This annotation marks a class as a repository providing data access to the application.

## Dependency Injection Annotations

### `@Autowired`

`@Autowired` injects dependencies into a class, whether it’s constructors, fields, or setter methods.

## Request Mapping Annotations

### `@RequestMapping`

This annotation maps specific methods in a controller to provided endpoints, supporting various HTTP methods (GET, POST, PUT, DELETE, etc.). It’s the foundation for specialized annotations like @GetMapping and @PostMapping.

## Data Handling Annotations

### `@RequestBody`

@RequestBody extracts the request body from an HTTP request and binds it to a method parameter in a controller, allowing you to receive data in JSON or XML format and convert it into a Java object.

### `@ResponseBody`

@ResponseBody indicates that the return value of a method should be directly written to the HTTP response body, converting it into the appropriate format, such as JSON or XML.

## Path Variable and Request Parameter Annotations

### `@PathVariable`

@PathVariable extracts values from the URI path of a URL and binds them to method parameters in a controller, capturing dynamic parts of the URL for use as inputs.

### `@RequestParam`

@RequestParam extracts query parameters from the URL of a request and binds them to method parameters in a controller, capturing key-value pairs from the URL’s query string for processing.

## Exception Handling Annotations

### `@ExceptionHandler`

@ExceptionHandler handles exceptions in a controlled and centralized manner, allowing you to define methods that handle specific exceptions and return custom responses when those exceptions occur.

### `@RestControllerAdvice`

@RestControllerAdvice creates a global exception handler that can manage exceptions across multiple controllers, centralizing exception-handling logic for the entire application.

## Other Useful Annotations

### `@Qualifier`

@Qualifier is used to specify which bean should be auto-wired when multiple beans of the same type are available.

### `@Value`

@Value injects values from properties files, environment variables, or other Spring components into your Spring beans.

### `@Profile`

@Profile defines profiles for different environments or scenarios in your application, allowing you to configure different sets of beans, properties, or components for different runtime environments.

### `@PostConstruct and @PreDestroy`

@PostConstruct and @PreDestroy specify methods that should be executed after a bean has been constructed and before it’s destroyed, respectively.

### `@Async and @EnableAsync`

@Async marks a method as asynchronous, allowing it to run in a separate thread. @EnableAsync enables support for asynchronous processing.
