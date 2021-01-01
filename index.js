const { JSDOM } = require("jsdom");

const jsdom = new JSDOM(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        .test {
          transition: opacity 500ms ease-in-out;
        }
      </style>
    </head>
    <body>
      <div class="test"></div>
    </body>
  </html>`);
const { window } = jsdom;
const el = window.document.querySelector(".test");
const styles = window.getComputedStyle(el);
console.log(
  styles.transitionProperty,
  styles.transitionDuration,
  styles.transitionDelay,
  styles.transitionTimingFunction
);
