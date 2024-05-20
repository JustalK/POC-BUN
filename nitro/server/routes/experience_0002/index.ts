export default eventHandler((event) => {
  console.log(event.context.user);
  if (event.method === "GET") {
    return { method: "GET" };
  }
  if (event.method === "POST") {
    return { method: "POST" };
  }
  return { method: "UNKNWON" };
});
