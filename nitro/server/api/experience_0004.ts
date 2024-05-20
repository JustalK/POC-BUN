type Post = {
  title: string;
  body: string;
  userId: number;
  id: number;
};

export default defineEventHandler(async (event) => {
  const response = await $fetch<Post>(
    "https://jsonplaceholder.typicode.com/posts",
    {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }
  );

  return { method: "POST", ...response };
});
