import jwt from "jsonwebtoken";
const secret = "SeCrEt";

export default eventHandler(async (event) => {
  const token = jwt.sign(
    {
      data: "kevin",
    },
    secret,
    { expiresIn: "1h" }
  );
  return {
    token,
  };
});
