import { Pipe } from '@angular/core';

import './__common';
import { EmojifyPipe } from '../src';

describe('EmojifyPipe', () => {
  const pipe: Pipe = Reflect.getOwnMetadata('annotations', EmojifyPipe)[0];
  let emojifyPipe: EmojifyPipe;
  
  beforeEach(() => {
    emojifyPipe = new EmojifyPipe();
  });
  
  it('should has transform method', () => {
    expect(emojifyPipe.transform).toBeDefined();
  });

  it('should transform', () => {
    const text = `It's a :rocket:!`;
    const mocked = `mocked: ${text}`;
    
    expect(emojifyPipe.transform(text)).toBe(mocked);
  });

  it('should be named emojify', () => {
    expect(pipe.name).toBe('emojify');
  });

  it('should be pure', () => {
    expect(pipe.pure).toBe(true);
  });
});
