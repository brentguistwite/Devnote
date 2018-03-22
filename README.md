[![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/brentguistwite/Devnote-back-end) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/brentguistwite/Devnote/pull/new/master) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/brentguistwite/Devnote/blob/master/LICENSE)


# Devnote v1
A note-taking app for programmers with syntax highlighting and markdown support. 
View it live [here](https://devnote-demo.netlify.com/).

## Remarkable
Markdown parser [demo](https://jonschlinkert.github.io/remarkable/demo/)
You can read the[License](https://github.com/jonschlinkert/remarkable/blob/master/LICENSE) here.

## Highlight.js
Javascript syntax highlighter [demo](https://highlightjs.org/)
You can read the [License](https://github.com/isagalaev/highlight.js/blob/master/LICENSE) here.

## Getting Started 

### Set Up The Project
- Create a directory for your app `mkdir devnote-app`
- Move into your new directory `cd devnote-app`


### Set Up The Server 
- Clone the server repository `git clone https://github.com/brentguistwite/Devnote-back-end.git`
- Move into new directory(notice the uppercase "D") `cd Devnote-back-end`
- Install the dependencies `npm install` 
- Create a [new](https://github.com/new) repository on GitHub for your server.
  - Make sure the "Initialize this repository with a README" option is left **un**checked.
- Update the remote to point to your new GitHub repository `git remote set-url origin "replacethiswithyourrepo"`
- Stage new files `git add .`
- Commit them `git commit -m 'Initial commit'`
- Push files to GitHub `git push -u origin master`


### Deploy Your Server
- *You can use whatever website you like to host your project. I'm using Heroku for this example.*
- Create a Heroku app for your server(call it whatever you like) `heroku create my-devnote-server`
- Push your code to Heroku `git push heroku master`


### Set Up The Client
- Move back to the app directory `cd ..`
- Clone client rep `git clone https://github.com/brentguistwite/Devnote.git`
- Move into our new folder(notice the uppercase "D") `cd Devnote`
- Install dependencies `npm install`
- Create a [new](https://github.com/new) repository on GitHub for your client.
  - Make sure the "Initialize this repository with a README" option is left **un**checked.
- Update the remote to point to your new GitHub repository `git remote set-url origin "replacethiswithyourrepo"`
- Stage new files `git add .`
- Commit them `git commit -m 'Initial commit'`
- Push files to GitHub `git push -u origin master`


### Deploy Your Client 
- Create a production build of the client `REACT_APP_API_BASE_URL=https://my-devnote-server.herokuapp.com npm run build`
  - replace the url with the url for your Heroku app that your created.
  - Make sure to run as **one command**.
- *You can use whatever website you like to host your project. I'm using Netlify for this example.*
- Install Netlify `npm install -g netlify-cli`
- Create a Netlify app: `netlify create my-devnote-client`
  - If you are new to Netlify this should open a web browser and allow you to sign up.
  - Be sure to add `.netlify` to `.gitignore`
- Deploy your app `netlify deploy -p ./build`
  - Youre browser will open & prompt you to authenticate.
  - You shouldn't need to authenticate for subsequent deployments.


### Configure The Server To Accept Requests From The Client
- Move back into your server folder
- Add a `CLIENT_ORIGIN` environment variable to your Heroku app pointing to your deployed client: `heroku config:set CLIENT_ORIGIN=https://YOUR_NETLIFY_PROJECT_NAME.netlify.com`
  - Make sure there is *no* trailing slash!
- Run `heroku restart` to refresh heroku with your new environment variable.


### Configure Database
- This app is currently set up to only be compatible with MongoDB.
- If you don't already have an account on mLab, you can create one for free [here](https://mlab.com/signup/).
- Once logged in, navigate to "MongoDB Deployments" and click "Create new".
- Under "Plan type" select the free one "Sandbox".
- Select your region.
- Name your database.
- Submit order(total price should read "FREE").
- Click to open your new database.
- Navigate to the "Users" tab and click "Add database user".
- Once created, find the section at the top that reads `To connect using a driver via the standard MongoDB URI (what's this?):`
- The line you want to copy should look something like this `mongodb://<dbuser>:<dbpassword>@ds123456.mlab.com:12345/database-name`.
  - Replace <dbuser> and <dbpassword>
  - It should now look something like this `mongodb://username:password@ds123456.mlab.com:12345/database-name`.
- Back in your server directory you'll want to run the command `heroku config:set DATABASE_URL=mongodb://username:password@ds123456.mlab.com:12345/database-name`
  
# Congratulations, you now have a brand new note taking app all to yourself.

## Technologies Used
- Mocha & Chai for testing
- Travis CI
- MongoDB
- Mongoose
- React
- Redux
- mLab
- Netlify
- Heroku
- Node
- Express
- Git
- Highlight.js
- Remarkable.js

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
