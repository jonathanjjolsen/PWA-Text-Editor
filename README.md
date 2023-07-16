# Noted (PWA)

## Description:
This application is a simple text editor that incorporates the use of webpacks and plugins for extra utility. Included is a full text editor that uses your internet's browser abilities to store the users data and refresh it to the screen when the application is relaunched. It even has the ability to be installed and used remotely without internet connectivity. Search futher through this README for usefull information on functionality.

## Table of Contents:
- [The Challenge](#The-Challenge)
- [Usage Information](#Usage-Information)
- [Utilized Programs](#Utilized-Programs)
- [What I Learned](#What-I-Learned)
- [Author](#Author)

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

### Screenshot:
![](./Assets/jate.png)

## Usage Information

### Operation
In order to make full use of this application:
- Navigate to [THIS](https://noted-pwa-2186a19d9056.herokuapp.com/) website.
- After loading, you'll notice that a default value has been auto populated to the text editor, this can either be saved or deleted.
- To use the text editor, simply click anywhere within the text field and start typing.
- In order to save the updated characters, click anywhere outside of the text entering space.
- You can now test that it has saved your work by refreshing the webpage.
- If you would like to install the application to your personal hard drive for offline use, click the "Install!" button located in the top left corner.

### [GitHub Repository](https://github.com/jonathanjjolsen/PWA-Text-Editor)

## Utilized Programs
- Node.js: [20.3.0](https://nodejs.org/en)
- Express: [4.17.1](https://expressjs.com/)
- Babel: [7.15.0](https://babeljs.io/)
- HTML Webpack Plugin: [5.3.2](https://www.npmjs.com/package/html-webpack-plugin)
- Style Loader: [3.2.1](https://www.npmjs.com/package/style-loader)
- Webpack: [4.8.0](https://www.npmjs.com/package/webpack)

## What I Learned
- How utilize webpack services
- How to store data in the IndexDB
- How to create an installable PWA
- How to pre-cache html pages and assets

## Author
Follow me on GitHub at [Jonathan Olsen](https://github.com/jonathanjjolsen)!