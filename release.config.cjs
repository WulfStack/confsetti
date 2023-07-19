const childProcess = require('child_process');

// Get all branch names
const branches = childProcess.execSync('git branch --format="%(refname:short)"').toString().split('\n');

// Filter out branch names that match the pattern "x.x"
const maintenanceBranches = branches.filter(branch => /^\d+\.x$/.test(branch));

module.exports = {
  branches: [
    'main',
    { name: 'develop', channel: 'dev', prerelease: true },
    ...maintenanceBranches.map(branch => ({ name: branch, range: branch, channel: branch })),
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/exec', {
      'prepareCmd': 'npm run create-maintenance-branch',
    }],
    '@semantic-release/npm',
    ['@semantic-release/git'],
    ['@semantic-release/github', {
      'assets': [
        'dist/cjs/index.min.js',
        'dist/es2022/index.min.js',
        'dist/umd/index.min.js',
      ],
    }],
  ],
};
