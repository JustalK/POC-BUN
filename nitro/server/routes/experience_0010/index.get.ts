export default eventHandler(async () => {
  const memory = await useStorage().getItem<{ counter: number }>("counter");
  const file = await useStorage().getItem<{ counter: number }>("data:counter");
  return { memory, file };
});
