const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
  console.log('Hello, world!');
  core.notice('Hello from Javascript Action');
}

run();