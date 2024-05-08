import data from "./test.json";

const experience: (request: Request) => Response = (request: Request) => {
  if (request.method === "GET") {
    return Response.json({ method: "GET", data });
  }

  return new Response("Page not found", { status: 404 });
};

export default experience;
