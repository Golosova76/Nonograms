import { Component } from '@angular/core';
import { GameCellComponent } from '../../components/game-cell/game-cell.component';

@Component({
  selector: 'game-board',
  standalone: true,
  imports: [GameCellComponent],
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent {}
