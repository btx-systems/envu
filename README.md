# Envu

Super simple script to load environment variables from a .env file.

## Installation

#### Per project

```sh
npm install envu
yarn add envu
pnpm add envu
bun add envu
```

#### Global

```sh
npm install -g envu
yarn global add envu
pnpm add -g envu
bun add -g envu
```

## Usage

```sh
envu -p=./path/to/.env [command]
# or (In this case, the path is CWD + .env)
envu [command]
```

#### Or

```sh
npx envu -p=./path/to/.env [command]
# or (In this case, the path is CWD + .env)
npx envu [command]
```
