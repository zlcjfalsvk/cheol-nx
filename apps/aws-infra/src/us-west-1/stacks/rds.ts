import * as ec2 from '@aws-cdk/aws-ec2';
import { SubnetType } from '@aws-cdk/aws-ec2';
import * as cdk from '@aws-cdk/core';
import { Duration } from '@aws-cdk/core';
import * as rds from '@aws-cdk/aws-rds';

import { iVpc } from '../resources/vpc';

// TODO 현재는 rds의 timezone & charterSet 까지 세팅할 수 없다. 직접 수정하자
export class Rds extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const v = iVpc(this);

    new rds.SubnetGroup(this, 'backendRdsSubNetGroup', {
      description: 'rds subnet group',
      vpc: v,
      vpcSubnets: {
        subnets: v.selectSubnets().subnets,
      },
    });

    new rds.DatabaseInstance(this, 'backendRds', {
      engine: rds.DatabaseInstanceEngine.mariaDb({
        version: rds.MariaDbEngineVersion.VER_10_5_12,
      }),
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.T3,
        ec2.InstanceSize.MICRO
      ),
      vpc: v,
      vpcSubnets: {
        subnetType: SubnetType.PUBLIC,
      },
      multiAz: false,
      publiclyAccessible: true,
      allowMajorVersionUpgrade: false,
      autoMinorVersionUpgrade: false,
      copyTagsToSnapshot: false,
      allocatedStorage: 30,
      backupRetention: Duration.days(0),
    });
  }
}
