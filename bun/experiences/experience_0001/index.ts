const experience: (request: Request) => Response = (request: Request) => {
  if (request.method === "GET") {
    return Response.json({ method: "GET" });
  }

  if (request.method === "POST") {
    return Response.json({ method: "POST" });
  }

  return new Response("Page not found", { status: 404 });
};

export default experience;
