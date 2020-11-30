#!/usr/bin / env node

const pckJSON = require("./package.json");
const welcome = require("cli-welcome");

welcome({
  title: pckJSON.name,
  description: pckJSON.description,
  version: pckJSON.version,
  bgColor: `#ff0044`,
  color: `#ffffff`,
  bold: true,
  clear: true,
});

console.log(`
Manuele Capacci

Designer and developer using machines to create beautiful and meaningful products, visuals, and experiences for humans.

Founder and director at OurFir.es, London based design studio.

You can find me on:
🌍 Website - https://manuelecapacci.com
🐦 Twitter - https://twitter.com/ManueleCapacci
📖 GitHub - https://github.com/fhuel
💼 Linkedin - https://www.linkedin.com/in/manuelecapacci/
🌁 Instagram - https://www.instagram.com/fhuel/

`);
