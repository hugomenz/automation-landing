import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BannerCase } from '../../content';

@Component({
  selector: 'app-signal-band',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './signal-band.component.html',
  styleUrl: './signal-band.component.css',
})
export class SignalBandComponent {
  readonly items = input.required<BannerCase[]>();
  readonly prefix = input.required<string>();
  readonly activeIndex = input.required<number>();
}
