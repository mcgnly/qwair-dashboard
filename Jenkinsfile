node {
  env.NVM_DIR=""

  stage 'Checkout'
  checkout scm

  stage 'Clean'
  sh """#!/bin/bash -e
    rm -rf build node_modules
  """

  stage 'Fetch install'
  sh """#!/bin/bash -e
    NVM_DIR=
    source ~/.nvm/nvm.sh
    nvm use 4.4.4
    npm install
"""

stage 'Build'
sh """#!/bin/bash -e
    NVM_DIR=
    source ~/.nvm/nvm.sh
    nvm use 4.4.4
    npm install
        case ${env.BRANCH_NAME} in
        "master")
            npm run build:master
            ;;
        "dev")
            npm run build:dev
            ;;
    esac
"""

stage 'Test'
sh """#!/bin/bash -e
  NVM_DIR=
  source ~/.nvm/nvm.sh
  nvm use 4.4.4
  npm install
  npm run test
"""

stage 'Coverage'
sh """#!/bin/bash -e
  NVM_DIR=
  source ~/.nvm/nvm.sh
  nvm use 4.4.4
  npm install
  npm run coverage
"""

stage 'Upload'
sh """#!/bin/bash -e
    export LD_LIBRARY_PATH=""
    case ${env.BRANCH_NAME} in
        "master")
            /usr/local/bin/aws s3 cp --recursive --region "eu-west-1" "dist" "s3://notifications-analytics.relayr.io/"
            ;;
        "dev")
            /usr/local/bin/aws s3 cp --recursive --region "eu-west-1" "dist" "s3://dev-notifications-analytics.relayr.io/"
            ;;
    esac
"""
}

