const experience: (request: Request) => Promise<Response> = async (
  request: Request
) => {
  if (request.method === "GET") {
    return Response.redirect("/experience_0001", 301);
  }

  if (request.method === "POST") {
    const data = await request.formData();
    const username = data.get("username");
    return Response.json({ method: "POST", username });
  }

  if (request.method === "PATCH") {
    const data = await request.json();
    return Response.json({ method: "PATCH", data });
  }

  return new Response("Page not found", { status: 404 });
};

export default experience;
