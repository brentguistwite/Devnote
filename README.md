# Devnote v1
A note-taking app for programmers with syntax highlighting and markdown support. 
View it live [here](https://devnote-demo.netlify.com/).

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
- Create a production build of the client `REACT_APP_API_BASE_URL="https://my-devnote-server.herokuapp.com" npm run build`
  - replace the url with the url for your Heroku app that your created
  - Make sure to run as **one command**.


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
