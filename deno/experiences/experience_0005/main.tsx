/** @jsxImportSource https://esm.sh/preact */

import { renderToString } from "https://esm.sh/preact-render-to-string@5.1.19?deps=preact@10.5.15";
const port = 8000;

function App() {
  return <h1>Hello!</h1>;
}

const handler = (request: Request): Response => {
  const headers = new Headers();

  const html = renderToString(<App />);
  return new Response(html, {
    status: 200,
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
};

console.log(`HTTP server running. Access it at: http://localhost:8080/`);
Deno.serve({ port }, handler);
