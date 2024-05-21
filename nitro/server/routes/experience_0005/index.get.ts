export default eventHandler(async (event) => {
  const data = await useStorage().getItem("upload:file.txt");
  return data;
});
