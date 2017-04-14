import { NgModule } from '@angular/core';

import './__common';
import { EmojifyModule, EmojifyPipe } from '../src';

describe('EmojifyModule', () => {
  const annotations: NgModule = Reflect.getOwnMetadata('annotations', EmojifyModule)[0];
  
  it('should has EmojifyPipe in declarations', () => {
    expect(!!annotations.declarations.find(d => d === EmojifyPipe)).toBe(true);
  });

  it('should has EmojifyPipe in exports', () => {
    expect(!!annotations.exports.find(d => d === EmojifyPipe)).toBe(true);
  });
});
