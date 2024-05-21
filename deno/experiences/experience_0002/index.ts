export interface Test {
  name: string
}

const test = {
  name: "Kevin"
}

export function sayHello(p: Test): string {
  return `Hello, ${p.name}!`;
}

console.log(sayHello(test));

(async () => {
  const site = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });

  console.log(await site.text());
})()

