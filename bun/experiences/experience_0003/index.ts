import jwt from "jsonwebtoken";

const secret = "SeCrEt";

const experience: (request: Request) => Promise<Response> = async (
  request: Request
) => {
  if (request.method === "GET") {
    const token = jwt.sign(
      {
        data: "kevin",
      },
      secret,
      { expiresIn: "1h" }
    );
    return Response.json({ method: "POST", token });
  }

  if (request.method === "POST") {
    const token = request.headers.get("authorization");
    const bearer = token ? token.split(" ")["1"] : "";
    const decoded = jwt.verify(bearer, secret);
    return Response.json({ method: "POST", decoded });
  }

  return new Response("Page not found", { status: 404 });
};

export default experience;
