import { execSync } from 'child_process';
import { version as currentVersion } from '../package.json';
import semver from 'semver';

const nextVersion = process.env.NEXT_RELEASE_VERSION;

if (semver.diff(currentVersion, nextVersion) === 'major') {
  const currentMajorVersion = semver.major(currentVersion);
  execSync(`git checkout -b ${currentMajorVersion}.x v${currentVersion}`);
  execSync(`git push origin ${currentMajorVersion}.x`);
}
