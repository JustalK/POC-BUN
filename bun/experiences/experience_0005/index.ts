const path = `${import.meta.dir}/file.txt`;

const experience: (request: Request) => Promise<Response> = async (
  request: Request
) => {
  if (request.method === "GET") {
    const file = Bun.file(path);
    return new Response(file);
  }

  if (request.method === "POST") {
    const data = await request.json();
    const file = Bun.file(path);
    const previousSentance = await file.text();
    const writer = file.writer();
    writer.write(previousSentance + "\n");
    writer.write(data.sentance);
    writer.flush();
    writer.end();
    return new Response(file);
  }

  return new Response("Page not found", { status: 404 });
};

export default experience;
