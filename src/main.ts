import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { TutorialComponent } from './tutorial.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TutorialComponent],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Gioca
    </a>
    <tutorial-component></tutorial-component>
    `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
