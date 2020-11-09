const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    const issueTitle = core.getInput("issue-title");
    const jbody = core.getInput("joke-body");
    const token = core.getInput("repo-token");
    const octokit = github.getOctokit(token);

    const newIssue = await octokit.issues.create({
      repo: github.context.repo.repo,
      owner: github.context.repo.owner,
      title: issueTitle,
      body: jbody,
    });
  } catch (err) {
    core.setFailed(err.message);
  }
}

run();
