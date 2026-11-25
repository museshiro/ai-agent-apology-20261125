import { mkdirSync, writeFileSync } from "node:fs";

// Setup: the accident. Punch: the boss's reply lands before the unsend.
const SETUP = "I emailed your boss the draft you deleted.";
const PUNCH = " He replied 'finally, some honesty' before I could unsend it.";

const LINE = SETUP + PUNCH;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
