# Shot.nearby

![screen capture](https://raw.githubusercontent.com/JayBee007/shot.nearby/master/client/public/capture.jpg)

## How to get started

clone the repo `https://github.com/JayBee007/shot.nearby.git`

cd `client`

install the dependencies `npm install`

launch the app `npm start`

build the app `npm run build`

some simple tests are located in `src/__tests__`

which can be run by using `npm test`

## FAQ

### _Q. What is this repo about?_

#### Ans. Its for a take home code challenge.

### _Q. What was the challenge about?_

#### Ans. To use open data set of movie locations shot in San Francisco to build an interesting, interactive experience around the data.

### _Q. What did you build than?_

#### Ans. Since it was a dataset, I could see two outcomes, either data visualization or implementing one of the many location-based ideas. I went with the idea of showing the user nearby locations where movies have been shot in the past, while a third outcome would have been to use the data set for some machine learning.

### _Q. What stack did you use?_

#### Ans. Since it was a location-based idea, the initial reaction was to go with React Native so that in the end both iOS and Android mobile apps would be ready, but keeping in mind the time constraints and job commitments, familiar setup of Reactjs was chosen. The initial inclination was on using Leaflet.js with React.js which got dropped after going through Google Maps API documentation since it was capable of fulfilling the initial use cases.

Alongside Reactjs following were used.

* Redux `state management`
* React Router `client side routing`
* Redux Thunk `async store changes`
* Google Maps React `google maps api wrapper`
* Axios `http client`

### _Q. Was the code linted?_

#### Ans. Yes, since the project was bootstrapped using create-react-app CLI, it used `react-app` eslint config, and then `prettified`.

### _Q. Why are there two package.json files?_

#### Ans. So that the project can be deployed to Heroku without any buildpacks. The first package.json is for the simple express server which serves the build and the second is for the project itself.

## TODO

* Proper error handling, especially for ajax requests
* Test components
* Test on various browsers and operating systems
* UI/UX overhaul
* Optimize re-renders
