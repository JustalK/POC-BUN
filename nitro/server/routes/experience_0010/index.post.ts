export default eventHandler(async (event) => {
  const query = getQuery(event);
  const counter = query.counter;
  console.log(counter);
  // In memory
  await useStorage().setItem<number>("counter", Number(counter));
  // In file
  await useStorage("data").setItem<number>("counter", Number(counter));
});
