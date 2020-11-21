import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  posts: {text: string, comments: string[]}[] = [
    {text: 'First post', comments: []},
    {text: 'Second post', comments: ['A comment']}
  ]
}

