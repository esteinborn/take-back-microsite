#!/usr/bin/env bash

echo "===> Building ..."
yarn build

echo "===> Starting Server ..."
node server
