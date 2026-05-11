const { execSync } = require('child_process');

try {
  const out = execSync('npm run build', { encoding: 'utf8', stdio: 'pipe' });
  process.stdout.write('SUCCESS\nSTDOUT: ' + out + '\n');
} catch (e) {
  process.stdout.write('FAILED\n');
  process.stdout.write('STDERR: ' + (e.stderr || '') + '\n');
  process.stdout.write('STDOUT: ' + (e.stdout || '') + '\n');
  process.stdout.write('MSG: ' + e.message + '\n');
}
