const experience: (request: Request) => Promise<Response> = async (
  request: Request
) => {
  if (request.method === "POST") {
    const formdata = await request.formData();
    const profilePicture = formdata.get("picture");
    console.log(profilePicture);
    if (!profilePicture) throw new Error("Must upload a profile picture.");
    await Bun.write(`${import.meta.dir}/upload/photo.png`, profilePicture);
    return new Response("Success");
  }

  return new Response("Page not found", { status: 404 });
};

export default experience;
