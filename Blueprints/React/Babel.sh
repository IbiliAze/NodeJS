echo step 1
yarn global add babel-cli@6.24.1
#OR
npm install -g babel-cli@6.24.1

echo step 2
babel --version

echo step 3
yarn init

echo step 4
yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
#OR
npm install babel-preset-react@6.24.1 babel-preset-env@1.5.2

echo step 5
babel src/app.js  --out-file=public/scripts/app.js --presets="env,react"
# OR
babel src/app.js  --out-file=public/scripts/app.js --presets="env,react" --watch