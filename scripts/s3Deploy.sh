#!/bin/bash

if [[ $BUCKET_NAME == "" ]]; then
  echo ERROR: Failed to supply S3 bucket name
  exit 1
fi

if [[ $CACHE_TTL == "" ]]; then
  CACHE_TTL="31536000"
fi

aws s3 sync $BUILD_DIRECTORY s3://$BUCKET_NAME --delete --cache-control max-age=${CACHE_TTL},public --include "*.html" --include "service-worker.js"

aws s3 cp s3://$BUCKET_NAME/index.html s3://$BUCKET_NAME/index.html --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type text/html --acl public-read

if [[ -f $BUILD_DIRECTORY/service-worker.js ]]; then
  aws s3 cp s3://$BUCKET_NAME/service-worker.js s3://$BUCKET_NAME/service-worker.js --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type application/javascript --acl public-read
fi
