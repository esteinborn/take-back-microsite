This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of the create react app guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Setup

- Install brew
- Install yarn (run `brew install yarn`)
- Clone the repo
- Install dependencies (run `yarn`)

## Run the app locally

- Run `yarn start`

## Deploy the app

- The app is built to be easily deployed via cdn.
- If you push a branch to github, netlify will build you a branch preview (look for the netlify integration on a pull request)
- When you merge to master, netlify builds to the dev server (https://take-back-day.netlify.com/)
- For more info about deployment, look in the [deploy readme](https://github.com/cgalbiati/take-back-day-microsite/blob/master/Deploy.md).

## Updating the Map
- This app imports the map from another repo (https://github.com/ProgressiveHackNight/take-back-day-mapping) by installing directly from git (https://stackoverflow.com/questions/23210437/npm-install-private-github-repositories-by-dependency-in-package-json)
- To update the map, you must follow instructions in the map repo for updating, then grab the commit hash for your updated verion, and replace the hash in the package.json of this app that specifies which commit-ish to install (everything after the #)

## Resources

- Design mocks: https://www.figma.com/file/UmuT8LF1RhJ7DCSYbLktw9BY/Take-Back-Day-Microsite?node-id=3%3A3
- Dev site: https://take-back-day.netlify.com/
- Trello board: https://trello.com/b/HpkKKE1l/take-back-microsite
