import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { config } from 'dotenv';

import { Vpc } from './us-west-1/stacks/vpc';
import { Rds } from './us-west-1/stacks/rds';

config();
const app = new cdk.App();

new Vpc(app, 'us-west-1-vpc', {
  env: {
    account: process.env.ACCOUNT,
    region: 'us-west-1',
  },
});

new Rds(app, 'us-west-1-rds', {
  env: {
    account: process.env.ACCOUNT,
    region: 'us-west-1',
  },
});
