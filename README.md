# G & G Outfitters Employee Record Challenge

Hello! I assume, if you are reading this, you must be the lead developer at G&G Outfitters. Hi... Andrew? (really hoping LinkedIn is accurate) This repo contains my implementation of the "G&G Outfitters IT Programming Exercise" I was given.

I want to start by addressing some concessions to time:

- I don't know Flask. If I have missed any of the finer points of the framework, it is because everything I know, I googled or gleaned from the docs in the past two days.
- I felt very dirty putting the backend in the same repo/directory as the frontend but the instructions implied a single ("the") repository and the method came recommended online. If this is wrong, that's what I get for trusting strangers on the internet.
- I put all of the server logic in a single file (api.py). I realize that's not great practice, but it seemed expedient and tolerable given how small the app is.
- Similarly, I kept most of my frontend logic in the main App.js file. Again, this was about time and size.
- I used SQLAlchemy to handle my database logic. I don't know whether this was a faux-pas (i.e., whether I should have written my own SQL). I have exposure to SQL but this method was a huge time saver. I thought about using flask-restful for the routes as well but that felt more like cheating.
- There's also no authentication... that's not ideal.

Here are some things I would have done with more time:

- Create some kind of polymorphic association so that Managers are also Employees and Employee records link to the appropriate Manager records.
- Build a hot-reloading search function and some filters for sifting through employee records.
- Add photos for employees.
- Add authentication, probably with JWT.

## Usage

This app uses Python 3.7
### To create your database...

1. In the terminal, navigate to the api directory.
2. Enter the python interpreter by typing python3 (or just python if you have pyenv).
3. Type the following:

```python
from api import db
db.create_all()
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn start-api`

Runs the server in development mode.\
Server runs on [http://localhost:5000](http://localhost:5000), but unrecognized requests to [http://localhost:3000](http://localhost:3000) are proxied to the server (hence the simple '/employees' URL in App.js)

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).