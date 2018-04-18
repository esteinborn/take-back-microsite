#!/usr/bin/env bash

echo "===> Building ..."
yarn buildToServe

echo "===> Starting Server ..."
node server
