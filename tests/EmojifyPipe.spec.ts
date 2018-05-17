import { Pipe } from '@angular/core';

import { EmojifyPipe } from '../src';

describe('EmojifyPipe', () => {
  let emojifyPipe: EmojifyPipe;

  beforeEach(() => {
    emojifyPipe = new EmojifyPipe();
  });

  it('should has transform method', () => {
    expect(emojifyPipe.transform).toBeDefined();
  });

  it('should transform', () => {
    const text = `It's a :rocket:!`;

    expect(emojifyPipe.transform(text)).toMatchSnapshot();
  });
});
