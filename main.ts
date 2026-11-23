import { writeFileSync, mkdirSync } from "node:fs";

// One dad joke for make.fun's Dad Joke Showdown bounty.
// Writes a single dad joke (<=200 chars) to /output/entry.txt, deterministically.
const joke =
  "My wife told me to stop making airport jokes. So I said, 'Fine — I'll let this one land.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
