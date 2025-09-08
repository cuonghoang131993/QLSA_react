# Getting Started with QLSA

## Available Scripts

In the project directory, you can run:

### `npm start`
Initial, You must have OpenSSL install on PC.
Then open cmd or Git Bash, and type:
- openssl req -newkey rsa:2048 -new -nodes -x509 -days 365 -keyout key.pem -out cert.pem
- openssl rsa -in keytmp.pem -out key.pem

Change start command in package.json to:
- "start": "set HTTPS=true&set SSL_CRT_FILE=cert.pem&set SSL_KEY_FILE=key.pem&react-scripts start",

After create cert & key, you can run as normal with HTTPS.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
