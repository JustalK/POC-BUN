# poc-server

This project is a poc of Bun and Elysia. I have been working a lot with many different technologies and I wanted to try this one I heard about. And, I am really impressed. In my past experience, I work with `Express.js` and I found it good but unfortunately, nobody tried to take over the project and improve it. Then I move to Restify and Fastify, they are good project but once again, those project did not really improved over time. They ended up to be a copy of Express. Over the time, I discovered Hapi, Koa and finally Nest.js. I really love Nest.js, it's really well structured kind of what you will find with an Angular project. But this is also, it's weakness. When I want to create a small project, it feel like I am taking a jackhammer to kill a fly.

And recently, I discovered Bun. I started to play with it and I ended up on something I was looking for a while. An efficient HTTP server but at the same time easy to use and composed of many tool or helper. I found `ElysiaJs`.

#### BUN

###### Command

Initialize a bun server:

```bash
bun init
```

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
bun --hot run index.ts
```

###### Experiences

- **Experience_0001**: Separating by method
- **Experience_0002**: Redirect and get data from request
- **Experience_0003**: Get a token jwt token from header and read it
- **Experience_0004**: Fetch a post endpoint
- **Experience_0005**: Read a file and write to a file
- **Experience_0006**: Upload a photo
- **Experience_0007**: Environment variable without dotenv

#### ELYSIA

###### Experiences

- **Experience_0001**: Separating by method
- **Experience_0002**: Redirect and get data from request
- **Experience_0003**: Get a token jwt token from header and read it
- **Experience_0004**: Fetch a post endpoint
- **Experience_0005**: Read a file and write to a file
- **Experience_0006**: ???
- **Experience_0007**: Environment variable without dotenv
- **Experience_0008**: Dynamic path
- **Experience_0009**: Error Handling and response control (status)
- **Experience_0010**: Global Store
- **Experience_0011**: Adding information to context
- **Experience_0012**: Hook & Middleware (that's AWESOME!)
- **Experience_0013**: Trace for checking bottleneck
- **Experience_0014**: Handle cookie
- **Experience_0015**: Documentation with Swagger
- **Experience_0016**: Writting test from bun:test
- **Experience_0017**: Macro
- **Experience_0018**: Playing with cron
- **Experience_0018**: JSX for web

#### H3

I did not push to far on this one, this is mostly like a node/express server.

- **Experience_0001**: Separating by method
- **Experience_0002**: Redirect and get data from request
- **Experience_0003**: Get a token jwt token from header and read it
- **Experience_0004**: Fetch a post endpoint
- **Experience_0005**: Read a file and write to a file
- **Experience_0006**: Run h3 in a bun server (See bun.ts at the root of the project)
- **Experience_0007**: **Environment variable (dotenv needed)**
- **Experience_0008**: Dynamic path
- **Experience_0009**: Error Handling and response control (status)
- **Experience_0010**: **No Store (such as Elysia)**
- **Experience_0011**: Adding information to context (using onRequest global hook)
- **Experience_0012**: Hook & Middleware (see the root of the project)
- **Experience_0013**: **No trace helper (such as Elysia)**
- **Experience_0014**: Handle cookie
- **Experience_0015**: **No easy integration with Swagger (such as Elysia)**
- **Experience_0016**: Writting test using adapter Web
- **Experience_0017**: **No macro (such as Elysia)**
- **Experience_0018**: **No cron (such as Elysia)**

