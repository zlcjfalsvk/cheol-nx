import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { config } from 'dotenv';

import { Vpc } from './us-west-1/stacks/vpc';
import { Rds } from './us-west-1/stacks/rds';

config();
const app = new cdk.App();

new Vpc(app, '', {
  env: {
    account: process.env.ACCOUNT,
    region: process.env.REGION,
  },
});

new Rds(app, '', {
  env: {
    account: process.env.ACCOUNT,
    region: process.env.REGION,
  },
});
