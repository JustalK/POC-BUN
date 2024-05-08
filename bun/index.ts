import Experiences from "./experiences";

const server = Bun.serve({
  port: 3000,
  fetch(request) {
    const path = new URL(request.url).pathname;

    for (const key of Object.keys(Experiences)) {
      const pathExperience = key.toString().toLowerCase();
      if (path === `/${pathExperience}`) {
        const result = Experiences[key as keyof typeof Experiences](request);
        return result;
      }
    }

    return new Response("Page not found", { status: 404 });
  },
});

console.log(`Listening on localhost:${server.port}`);
