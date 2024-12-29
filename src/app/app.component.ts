import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameBoardComponent } from './nonogram/pages/game-board/game-board.component';
import { GameBoardControlsComponent } from './nonogram/pages/game-board-controls/game-board-controls.component';
import { HeaderComponent } from './core/app-header/app-header.component';
import { FooterComponent } from './core/app-footer/app-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    GameBoardComponent,
    GameBoardControlsComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
