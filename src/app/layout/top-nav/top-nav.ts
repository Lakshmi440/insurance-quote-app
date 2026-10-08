import { Component } from '@angular/core';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatButtonModule} from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon';

@Component({
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  selector: 'app-top-nav',
  styleUrl: './top-nav.css',
  templateUrl: './top-nav.html',
})
export class TopNav {}
