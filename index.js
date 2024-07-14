#!/usr/bin/env node
const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
  }
};

const repoName = process.argv[2];

if (!repoName || repoName === "") {
  console.error("Must be add project folder name");
  process.exit(-1);
}
const gitCheckoutCommand = `git clone --depth 1 https://github.com/Ajnash-ibn-umer/vegamjs-starter ${repoName}`;
const installCommand = `cd ${repoName} && npm i`;

console.log(`Cloning repository ${repoName}`);
const checkout = runCommand(gitCheckoutCommand);
if (!checkout) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installDep = runCommand(installCommand);
if (!installDep) process.exit(-1);

console.log("Congratulation you are ready");
