import { Application } from "https://deno.land/x/abc@v1.0.0-rc10/mod.ts";

const app = new Application();

app
  .get("/api", (c) => {
    return {
      hello: "world",
    };
  })
  .static("/", "build")
  .file("/", "build/index.html")
  .start({ port: 3080 });
