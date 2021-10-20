import * as ec2 from '@aws-cdk/aws-ec2';
import { Construct } from '@aws-cdk/core';

export const iVpc = (scope: Construct) => {
  return ec2.Vpc.fromLookup(scope, 'us-west-1-init/backendVpc', {
    vpcName: 'us-west-1-init/backendVpc',
  });
};
