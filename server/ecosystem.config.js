module.exports = {
    apps: [
      {
        name: "ProjectManagementApp",
        script: "npm",
        args: "run dev",
        env: {
          NODE_ENV: "development",
        },
      },
    ],
  };
  