const experience: (request: Request) => Response = (request: Request) => {
  if (request.method === "GET") {
    return Response.json({ method: "GET", env: process.env.TEST });
  }

  return new Response("Page not found", { status: 404 });
};

export default experience;
