node {
  env.NVM_DIR=""

  stage 'Checkout'
  checkout scm

  stage 'Clean'
  sh """#!/bin/bash -e
  """

  stage 'Fetch install'
  sh """#!/bin/bash -e
    NVM_DIR=
    source ~/.nvm/nvm.sh
    nvm use 4.4.4
"""

stage 'Build'
sh """#!/bin/bash -e
    NVM_DIR=
    source ~/.nvm/nvm.sh
    nvm use 4.4.4
"""

stage 'Test'
sh """#!/bin/bash -e
  NVM_DIR=
  source ~/.nvm/nvm.sh
  nvm use 4.4.4
"""

stage 'Coverage'
sh """#!/bin/bash -e
  NVM_DIR=
  source ~/.nvm/nvm.sh
  nvm use 4.4.4
"""

stage 'Upload'
sh """#!/bin/bash -e
    export LD_LIBRARY_PATH=""
    case ${env.BRANCH_NAME} in
        "master")
            /usr/local/bin/aws s3 cp --recursive --region "eu-west-1" "dist" "s3://qwair-dashboard.relayr.io/"
            ;;
    esac
"""
}

