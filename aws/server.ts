#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import { NasMediaStack } from './stack';

const app = new App();
new NasMediaStack(app, 'NasMediaStack');
