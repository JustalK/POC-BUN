export default eventHandler(async (event) => {
  const data = await readBody(event);
  const previousText = await useStorage().getItem("upload:file.txt");
  useStorage("upload").setItem("file.txt", previousText + "\n" + data.sentance);
  return true;
});
