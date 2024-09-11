# Domain Driven Design

## Domain Model, `Ubiquitous Language`, Bounded Context, `Context Map`, Core Domain, `Domain Events`

## What is `Domain-Driven Design`?

`Domain Driven Design is a software development methodology` that focuses on `creating a model` of the problem domain before writing code.

it's a way of capturing, communicating and implementing the business logic when building a software and primarily empowering the domain to control its own destiny and logic when doing so

It isolate domain with `Layered Architecture`

## Building Blocks of `Domain Model`?

`Entities, services, repositories and value objects` are the main building blocks of a `Domain Model`.

- `Entities` are objects with `unique identity`
- `Services` are objects that provide a service or action that can be performed
- `Repositories` Mediates between the domain and data storage, hiding the complexities of storage operations
- `Value Objects` represent a value but don't have unique identity.

## What is `Bounded Context`?

`Bounded Context` is a logical boundary within which a domain model applies.

## What is `Ubiquitous Language`?

It is `important to build an ubiquitous language when using DDD` because it helps to ensure that `everyone involved in the development process is using the same terminology` when discussing the domain.

## `Context Map`

Context map is a tool used to identify the relationships between different bounded contexts. It's essential for aligning different parts of the system, especially when those parts have different models and semantics.

## `Core Domain`

Core domain is the part of the system where the most significant business value is derived.

## `Domain Events`

Domain events are key moments within a domain or system that represent a change of state. They can be used to maintain consistency between different parts of the system and can contribute to the overall understanding of the system as a whole.
