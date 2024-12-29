import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'game-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-cell.component.html',
  styleUrls: ['./game-cell.component.scss'],
})
export class GameCellComponent {
  get scssClass(): string {}
}
