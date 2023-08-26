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
