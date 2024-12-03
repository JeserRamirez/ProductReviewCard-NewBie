import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-product-review',
  standalone: true,
  imports: [CardComponent],
  template: `
    <section
      class="w-screen h-screen flex justify-center items-center bg-current"
    >
      <product-card class="justify-items-center" />
    </section>
  `,
  styles: [
    `
      .bg-current {
        background-color: hsl(26.25, 40%, 92.16%);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductReviewComponent {}
