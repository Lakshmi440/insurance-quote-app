import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNav } from './layout/top-nav/top-nav';

@Component({
  imports: [RouterOutlet, TopNav, ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('insurance-quote-app');
}
