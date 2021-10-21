import {
  expect as expectCDK,
  matchTemplate,
  MatchStyle,
} from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import { Vpc } from './us-west-1/stacks/vpc';

test('Empty Stack', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new Vpc(app, 'aws-infraTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        Resources: {},
      },
      MatchStyle.EXACT
    )
  );
});
