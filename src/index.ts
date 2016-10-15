import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { emojify } from 'node-emoji';

@Pipe({
  name: 'emojify'
})
export class EmojifyPipe implements PipeTransform {
  transform(text: string): string {
    return emojify(text || '');
  }
}

@NgModule({
  declarations: [EmojifyPipe],
  exports: [EmojifyPipe]
})
export class EmojifyModule { }
