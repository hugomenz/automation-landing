import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Language } from '../../content';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css',
})
export class LanguageSwitcherComponent {
  private readonly languageService = inject(LanguageService);

  readonly language = this.languageService.language;

  setLanguage(language: Language): void {
    this.languageService.setLanguage(language);
  }
}
