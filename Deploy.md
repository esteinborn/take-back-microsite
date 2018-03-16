# Deploying

#### Architecture
- The app is designed to be deployed as a serverless app via cdn
- There is a dev site deployed via Netlify at https://take-back-day.netlify.com/
- There is a staging site deployed via aws at TBD
- There is a production site deployed via aws at TBD

#### To Release to Production
- Find the previous release by looking in the releases tab in the github repo
- Create a release that is one number higher and includes 'release' by following these instructions: https://help.github.com/articles/creating-releases/
- The release tag including 'release' will kick off the deploy job in CircleCi
- After deploy to staging has completed, check the staging url to make sure you want to release it
- Click the approve button in CircleCi to deploy to production

## Pipeline
#### On remote push
- CircleCi runs tests and builds app
- Netlify watches the repo and builds a preview of the branch

#### On merge to master
- Netlify builds the current version of the site to https://take-back-day.netlify.com/

#### On release
- CircleCi builds and deploys to staging s3
- Holds job for approval
- Deploys to prod s3 on approval

