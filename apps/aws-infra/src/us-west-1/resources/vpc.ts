import * as ec2 from '@aws-cdk/aws-ec2';
import { SubnetType } from '@aws-cdk/aws-ec2';
import { Construct } from '@aws-cdk/core';

export const vpc = (scope: Construct) => {
  return new ec2.Vpc(scope, 'backendVpc', {
    cidr: '10.0.0.0/16',
    subnetConfiguration: [
      {
        name: 'backend-public-subnet-1',
        subnetType: SubnetType.PUBLIC,
        cidrMask: 24,
      },
      {
        name: 'backend-public-subnet-2',
        subnetType: SubnetType.PUBLIC,
        cidrMask: 24,
      },
      {
        name: 'backend-private-subnet-1',
        subnetType: SubnetType.PRIVATE_ISOLATED,
        cidrMask: 24,
      },
      {
        name: 'backend-private-subnet-2',
        subnetType: SubnetType.PRIVATE_ISOLATED,
        cidrMask: 24,
      },
    ],
  });
};
