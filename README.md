# Vue, Express, MongoDB full-stack JS Bulma

[![Known Vulnerabilities](https://snyk.io/test/github/icebob/vue-express-mongo-boilerplate/badge.svg)](https://snyk.io/test/github/icebob/vue-express-mongo-boilerplate)
![Node 6](https://img.shields.io/badge/node-6.x.x-green.svg)
![VueJS 2](https://img.shields.io/badge/vuejs-2.3.x-green.svg)
![Webpack 2](https://img.shields.io/badge/webpack-2.6.x-green.svg)
[![Trace](https://resources.risingstack.com/Monitored+with+Trace+by+RisingStack.svg)](https://trace.risingstack.com/?utm_source=opensource&utm_medium=Icebob)


Este es un proyecto full stack con bulma VueJS + ExpressJS + MongoDB.

Este es un fork tomado del proyecto https://github.com/icebob/vue-express-mongo-boilerplate

El objetivo es crear un repo de arranque actualizado que contenga todas las funciones importantes (registro de usuario, inicio de sesión, perfil etc.), excepto la lógica de negocios, al igual que el proyecto original, pero usando bulma en vez de boilerplate.

Voy a dejar mis experiencias en el siguiente blog https://yungol.tumblr.com/

Así que esto les puede servir para crear una nueva webapp y sólo necesitarán dedicarse a la lógica de negocio.

Paciencia no soy un programador profesional, lo que hago es copiar y pegar cosas que encuentro en google. 

## Características

**Lado del Servidor**
* [x] **[Node.JS](https://nodejs.org)** v6.x.x
* [x] **[Express](https://github.com/expressjs/express)**
* [x] [MongoDB](https://www.mongodb.com/) with [Mongoose](https://github.com/Automattic/mongoose)
* [x] [NodeMailer](https://github.com/nodemailer/nodemailer) with SMTP, MailGun or SendGrid
* [x] [Helmet](https://github.com/helmetjs/helmet)
* [x] [Express-validator](https://github.com/ctavan/express-validator)
* [x] [winston](https://github.com/winstonjs/winston) + 6 transports
* [x] **[GraphQL](http://graphql.org/)** with [Apollo stack](http://www.apollostack.com/)
* [x] [i18next](http://i18next.com/) as the internationalization ecosystem
* [x] **[HTTP/2 Server Push](https://en.wikipedia.org/wiki/HTTP/2_Server_Push)** with [netjet](https://github.com/cloudflare/netjet)
* [x] Bundled server-side code with [Webpack 2](https://webpack.github.io/)

**Lado del Cliente**
* [x] **[VueJS 2.x](https://github.com/vuejs/vue)**
* [x] [Vuex](https://github.com/vuejs/vuex)
* [x] [Vue-router](https://github.com/vuejs/vue-router)
* [x] [axios](https://github.com/mzabriskie/axios)
* [x] **[socket.io](https://github.com/socketio/socket.io) connection with namespaces & authorization**
* [x] [vue-websocket](https://github.com/icebob/vue-websocket)
* [x] [Jade](https://github.com/pugjs/pug)
* [x] **[Webpack 2](https://github.com/webpack/webpack)**
* [x] [SCSS](http://sass-lang.com/)
* [x] [PostCSS](https://github.com/postcss/postcss) with precss and autoprefixer
* [x] [Babel](https://babeljs.io/)
* [x] [Passwordless](https://www.sitepoint.com/passwordless-authentication-works/) mode
* [x] [Passport.JS](http://passportjs.org/)
	* Social signup/login with Facebook, Google, Twitter and Github
	* API key authentication for REST API calls
* [x] [Toastr](https://github.com/CodeSeven/toastr)
* [x] [vue-form-generator](https://github.com/icebob/vue-form-generator)

**Servicios de logging soportados**
* [x] [Papertrail](https://papertrailapp.com/)
* [x] [Graylog](https://www.graylog.org/)
* [x] [LogEntries](https://logentries.com/)
* [x] [Loggly](https://www.loggly.com/)
* [x] [Logsene](https://sematext.com/logsene/)
* [x] [Logz.io](http://logz.io/)

## Antes de Instalar

Antes de instalar debe tener node.js y mongo.js

Un editor de Código. 

Para tirar código he pasado por varios ide de desarrollo, desde Dreamweaver, sublime, atom y webstorm pero actualmente el que más me gusta es Visual Studio Code https://code.visualstudio.com/ es de Microsoft, es gratis y se puede instalar en todos los sistemas operativos.

Programo en Ubuntu y Mac, no me gusta en Windows.



## Uso

Clonar el Repositorio
```
$ git clone https://github.com/yungol/vue-express-mongo-bulma.git
```

Instalar las dependencias.
```
$ npm install
```

Para hacer development
```bash
$ npm run dev
```

Para construir la app los scripts y los estilos:
```bash
$ npm run build
```

Para producción
```bash
$ npm start
```

## Screenshots

.... Mas adelante pongo los Sreenshots


## Estructura del Proyecto
```txt
+---build
+---client
|   +---app
|   |   +---core
|   |   +---modules
|   |       +---demo
|   |       +---devices
|   |       +---home
|   |       +---posts
|   |       +---session
|   |                   
|   +---frontend
|   +---images
|   +---scss
|                   
+---data
+---logs
+---server
|   |   bundle.js
|   |   dev.js
|   |   index.js
|   +---applogic
|   |   +---libs
|   |   +---modules
|   |       +---counter
|   |       +---devices
|   |       +---posts
|   |       +---session
|   +---config
|   |       default.js
|   |       index.js
|   |       prod.js
|   |       test.js
|   |       
|   +---core
|   +---libs
|   +---locales
|   |   +---en
|   |   +---hu
|   +---models
|   |       user.js
|   +---public
|   +---routes
|   +---schema
|   +---services
|   +---views
+---tests
|
|   package.json
|   secrets.json

```

## Construir server-side

Si desea construir el código del lado del servidor NodeJS, corra webpack en el servidor con el siguiente comando `npm run build && npm run build:server`. Si fue exitoso, corra la aplicación así: `npm run start:bundle`

Si quiere exportar la versión construida copie y pegue los siguientes directorios en un nuevo lugar:

```txt
- server
	- locales
	- public
	- views
	- bundle.js
- package.json
- config.js (optional)
```
Antes de empezar, debe instalar las dependencias de producción con npm: `npm install --production`

## Obtener las API keys para el social signup/login

![Google Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/128px-Google_2015_logo.svg.png)

Estas son las instrucciones para Google:

- Visit [Google Cloud Console](https://cloud.google.com/console/project)
- Click on the **Create Project** button
- Enter *Project Name*, then click on **Create** button
- Then click on *APIs & auth* in the sidebar and select *API* tab
- Click on **Google+ API** under *Social APIs*, then click **Enable API**
- Next, under *APIs & auth* in the sidebar click on *Credentials* tab
- Click on **Create new Client ID** button
- Select *Web Application* and click on **Configure Consent Screen**
- Fill out the required fields then click on **Save**
- In the *Create Client ID* modal dialog:
 - **Application Type**: Web Application
 - **Authorized Javascript origins**: http://localhost:3000
 - **Authorized redirect URI**: http://localhost:3000/auth/google/callback
- Click on **Create Client ID** button
- Copy and paste *Client ID* and *Client secret* keys into `config.js` file

![Facebook Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/128px-Facebook_New_Logo_%282015%29.svg.png)

Estas son las instrucciones para Facebook:

- Visit [Facebook Developers](https://developers.facebook.com/)
- Click **My Apps**, then select **Add a New App* from the dropdown menu
- Select **Website** platform and enter a new name for your app
- Click on the **Create New Facebook App ID** button
- Choose a **Category** that best describes your app
- Click on **Create App ID** button
- In the upper right corner click on **Skip Quick Star**
- Copy and paste *App ID* and *App Secret* keys into `config.js` file
 - **Note:** *App ID* is **clientID**, *App Secret* is **clientSecret**
- Click on the *Settings* tab in the left nav, then click on **+ Add Platform**
- Select **Website**
- Enter `http://localhost:3000` under *Site URL*

**Note:** After a successful sign in with Facebook, a user will be redirected back to home page with appended hash `#_=_` in the URL. It is *not* a bug. See this [Stack Overflow](https://stackoverflow.com/questions/7131909/facebook-callback-appends-to-return-url) discussion for ways to handle it.

![GitHub Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/GitHub_logo_2013_padded.svg/128px-GitHub_logo_2013_padded.svg.png)

Estas son las instrucciones para GitHub:

- Go to [Account Settings](https://github.com/settings/profile)
- Select **Applications** from the sidebar
- Then inside **Developer applications** click on **Register new application**
- Enter *Application Name* and *Homepage URL*
- For *Authorization Callback URL*: http://localhost:3000/auth/github/callback
- Click **Register application**
- Now copy and paste *Client ID* and *Client Secret* keys into `config.js` file

![Twitter Logo](https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Twitter_bird_logo_2012.svg/64px-Twitter_bird_logo_2012.svg.png)

Estas son las instrucciones para Twitter:

- Sign in at [https://apps.twitter.com/](https://apps.twitter.com/)
- Click **Create a new application**
- Enter your application name, website and description
- For **Callback URL**: http://127.0.0.1:3000/auth/twitter/callback
- Go to **Settings** tab
- Under *Application Type* select **Read and Write** access
- Check the box **Allow this application to be used to Sign in with Twitter**
- Click **Update this Twitter's applications settings**
- Copy and paste *Consumer Key* and *Consumer Secret* keys into `config.js` file

## Licencia

vue-express-mongo-bulma esta disponible bajo [MIT license](https://tldrlegal.com/license/mit-license).

## Contacto

Copyright (C) 2017 yungol

[![@yungol](https://img.shields.io/badge/github-yungol-green.svg)](https://github.com/yungol) [![@yungol](https://img.shields.io/badge/twitter-yungol-blue.svg)](https://twitter.com/yungol) [![@yungol](https://img.shields.io/badge/tumblr-yungol-36465d.svg)](https://yungol.tumblr.com)

