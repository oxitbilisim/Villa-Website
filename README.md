This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

Install dependencies first with `npm ci --legacy-peer-deps`.
The default development port is 3001; set `PORT` to override it.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `bash build.sh [version] [options]`

Builds the production Docker image (`villa-fe`) and starts the `villa-fe`
service using Docker Compose. Docker and the Compose v2 plugin are required.
On Windows, run this command from Git Bash or WSL.

```bash
bash build.sh                  # Build and deploy version 1.0.0
bash build.sh 1.0.1 --no-logs   # Deploy without background log capture
bash build.sh --build-only     # Build the image only
bash build.sh --help           # All options
```

The deployed app is available at [http://localhost:3001](http://localhost:3001).
Stop it with `docker compose down`. Stop `npm start` before deploying on the
same port.

Configuration is loaded from `.env`, `.env.production`, then
`.env.production.local` (last wins). `REACT_APP_API_ENDPOINT` is embedded at
build time; rebuild the image after changing it. The default is
`https://ik-be.oxitik.com.tr` (the same backend as villa-admin-fe). Optional deployment settings include
`APP_PORT` (3001), `APP_BIND_ADDRESS` (127.0.0.1), `IMAGE_NAME` (villa-fe),
and `DEFAULT_VERSION` (1.0.0). CLI options override configuration files.
Background Compose logs are saved under `logs/` unless `--no-logs` is passed.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
