# angular2-emojify

[![npm version](https://badge.fury.io/js/angular2-emojify.svg)](https://badge.fury.io/js/angular2-emojify)

Angular Pipe that replaces all :emoji: with the actual emoji

## Install

```
npm install angular2-emojify
```

## EmojifyModule

```ts
import { EmojifyModule } from 'angular2-emojify';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EmojifyModule
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
```

## EmojifyPipe

```ts
@Component({
  // ...
})
class AppComponent() {
  description: string = `It's a :rocket:`;
}
```

```html
<p> {{ description | emojify }} </p>
```

Outputs: It's a :rocket:


