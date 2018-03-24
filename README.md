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

## Submodules
This app contains a map app as a submodule.  FOr more information about using submodules, check out https://git-scm.com/book/en/v2/Git-Tools-Submodules

- Init: after cloning, you must init the submodule by running `git submodule init`
- To update the submodule with the current develop branch of the map project, you can run `git submodule update`
- You also must install the submodules dependencies to run the app `cd src/take-back-day-mapping && yarn`
- After running that, be aware that you are now in the submodule's directory

## Resources

- Design mocks: https://www.figma.com/file/UmuT8LF1RhJ7DCSYbLktw9BY/Take-Back-Day-Microsite?node-id=3%3A3
- Dev site: https://take-back-day.netlify.com/
- Trello board: https://trello.com/b/HpkKKE1l/take-back-microsite
