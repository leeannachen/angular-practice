import { Component } from '@angular/core';

@Component({
  // three  main sections

  // location to component
  selector: 'app-root',
  // template file
  templateUrl: './app.component.html',
  // styles url
  styleUrls: ['./app.component.scss']
})

// logic section
export class AppComponent {
  title = 'my-app';
}
