import jwt from "jsonwebtoken";
const secret = "SeCrEt";

export default eventHandler(async (event) => {
  const token = getRequestHeader(event, "authorization");
  const bearer = token ? token.split(" ")["1"] : "";
  const decoded = jwt.verify(bearer, secret);
  return { decoded };
});
