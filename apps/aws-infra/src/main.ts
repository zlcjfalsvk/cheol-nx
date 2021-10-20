import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AppStack } from './stacks/app-stack';

const app = new cdk.App();
new AppStack(app, 'aws-infra');
