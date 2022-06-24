module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/yuliankarapetkov/react-cicd",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md"]
      }
    ],
    "@semantic-release/github"
  ]
};
