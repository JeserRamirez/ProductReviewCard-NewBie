import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import ButtonComponent from '../button/button.component';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {}
