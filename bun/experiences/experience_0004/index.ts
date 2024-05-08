const experience: (request: Request) => Promise<Response> = async (
  request: Request
) => {
  if (request.method === "POST") {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });

    const data = await response.json();
    return Response.json({ method: "POST", ...data });
  }

  return new Response("Page not found", { status: 404 });
};

export default experience;
