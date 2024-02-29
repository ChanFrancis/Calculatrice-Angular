import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <router-outlet></router-outlet>
    </div>
    `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculatrice';
}
