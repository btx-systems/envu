#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import argsParser from 'args-parser';
import child_process from 'child_process';

console.log(process.argv);

const args = argsParser(process.argv);

let envPath = path.resolve(process.cwd(), '.env');

if (args.p || args.path) {
    envPath = path.resolve(process.cwd(), args.p || args.path);
}

if (!fs.existsSync(envPath)) {
    throw new Error(`File not found: ${envPath}`);
}

const env = fs.readFileSync(envPath, 'utf8');

env.split('\n').forEach((line) => {
    const [key, value] = line.split('=');

    if (!key) {
        return;
    }

    if (value === undefined) {
        process.env[key] = '';
    }

    // if value has quotes, remove them but only if they are the same and at the beginning and end of the string
    process.env[key] = value.replace(/^['"]|['"]$/g, '');
});

// // every arg that is after -p or --path should be set to a variable command so it can be executed
// const command = process.argv.slice(3).join(' ');

let command = '';

if (process.argv.length >= 5) {
    command = process.argv.slice(3).join(' ');
} else if (process.argv.length = 4) {
    command = process.argv.slice(2).join(' ');
}

console.log(command);

if (command) {
    child_process.execSync(command, { stdio: 'inherit' });
}