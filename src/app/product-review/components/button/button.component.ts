import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'product-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [style.background-color]="isHovering ? hover : 'inherit'"
      (mouseover)="isHovering = true"
      (mouseout)="isHovering = false"
      class="flex justify-center items-center w-full pt-4 pb-4 space-x-2 rounded-xl"
    >
      <img [src]="imgPath()" alt="Icon" />
      <p class="text-white font-semibold">{{ title() }}</p>
    </button>
  `,
  styleUrl: './button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ButtonComponent implements OnInit {
  public title = input.required<string>();

  public imgPath = input.required<string>();

  @Input()
  public hover!: string;

  isHovering = false;

  ngOnInit(): void {
    console.log(this.hover);
  }
}
