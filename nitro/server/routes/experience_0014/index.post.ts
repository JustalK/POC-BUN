export default eventHandler(async (event) => {
  const nextYear = new Date();
  nextYear.setFullYear(nextYear.getFullYear() + 1);
  setCookie(event, "test", "kevin", {
    domain: "localhost",
    httpOnly: true,
    expires: nextYear,
    path: "/",
  });
  return { method: "POST" };
});
