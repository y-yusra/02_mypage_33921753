// MyPage WebApp — plain Node.js http server (no Express)

// 1) Built-in http module
const http = require("http");

// 2) Choose a port for local server
const PORT = 8000;

// 3) My HTML page (structure: doctype, html, head, body)
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>MyPage - Yusra Yusuf</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; max-width: 720px; margin: 40px auto; line-height: 1.6; }
    header { border-bottom: 1px solid #ddd; margin-bottom: 1rem; padding-bottom: 0.5rem; }
    h1 { margin: 0 0 0.25rem 0; }
    small { color: #666; }
  </style>
</head>
<body>
  <header>
    <h1>Hi, I'm Yusra</h1>
    <small>Student ID: 33921753</small>
  </header>

  <h2>About Me</h2>
  <p>
    I’m a final-year Computer Science student who has just moved from online study to on-campus learning.
    I like having a clear, step-by-step routines. I enjoy practical, hands-on web development and want to 
    become confident with Node.js, Express and SQL so I can build useful, real-world applications. I’m 
    detail-oriented, determined, and I’m building systems that make studying easy.
  </p>

  <h2>What I'll learn in this module</h2>
  <p>
    I’ll be learning about client–server web apps, HTTP, Node.js, Express, EJS, SQL/MySQL, and APIs.
    I’ll build and deploy real, data-driven web applications and practice secure coding.
  </p>

  <h2>Contact</h2>
  <p>(I’ll add links here later.)</p>
</body>
</html>`;

// 4) Create a basic HTTP server that always returns the HTML
const server = http.createServer((req, res) => {
  // Log each request while developing
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);

  // Respond with HTML
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(html);
});

// 5) Start listening
server.listen(PORT, () => {
  console.log(`MyPage server running at http://localhost:${PORT}`);
});

// Tip: stop the server with Ctrl + C in the terminal
