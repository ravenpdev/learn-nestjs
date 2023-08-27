# Learn NestJS Fundamentals

#### Parts of Nest

- Controller handles incoming request
- Services handles data access and business logic
- Modules groups together code
- Pipes validates incoming request
- Filters handles error that occur during reuqest handling
- Guards handles authentication
- Interceptors add extra logic to incoming request or outgoing request
- Repositories handles data stored in database

#### Request Lifecycle

- **Pipe** validate data on incoming request
- **Guard** make sure that incoming request are from authenticated or authorized user
- **Controller** contains routing logics
- **Service** contains business logics
- **Repository** access a database

**Data Transfer Object (DTO)**
Carries data between two places

**Validation Pipe Process**

1. Use class-transformet to turn the body into an instance of the DTO class
2. Use class-validator to validate the instance
3. If there are validation errors, responde immediately, otherwise provide body to request handler

**How Type info is preserved?**

> emitDecoratorMetatData (tsconfig compiler options)
>
> > generate additional javascript code for type annotations

**Why Services exists and how they are different from Repositories?**

| Services                                            | Repositories                                                        |
| --------------------------------------------------- | ------------------------------------------------------------------- |
| Its a class                                         | Its a class                                                         |
| #1 Place to put any business logic                  | #1 Place to put storage-related logic                               |
| Uses one or more repositories to find or store data | Usually ends up being TypeORM entity, a Mongoose Schema, or similar |

**Inversion of Control Principle**

Classes should not create instance of its dependencies on its own

```typescript
// BAD
// not following the inversion of control principle
class Demo {
  demoService: DemoService;
  constructor(service: DemoService) {
    this.demoService = new DemoService();
  }
}
```

```typescript
// Better
// Demo recieves its dependency
class Demo {
  demoService: DemoService;
  constructor(service: DemoService) {
    this.demoService = service;
  }
}
```

```typescript
// Best
// Demo receives its dependency, and it doesn't specifically require 'DemoService'

interface Repositry {
  findOne(id: string);
  findAll();
  create(content: string);
}

class Demo {
  demoService: Repository;
  constructor(service: Repository) {
    this.demoService = service;
  }
}
```

**Dependency Injection Container Flow **

1. At startup, register all classes with the container
2. Container will figure out what each dependency each class has
3. We then ask the container to create an instance of class for us
4. Container creates all required dependencies and gives us the instance
5. Container will hold onto the created dependency instances and reuse them if need

> Injecting class to DI container using @Injectable() decorator
