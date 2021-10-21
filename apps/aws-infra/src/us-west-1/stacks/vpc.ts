import * as cdk from '@aws-cdk/core';

import { vpc } from '../resources/vpc';

export class Vpc extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    vpc(this);
  }
}
