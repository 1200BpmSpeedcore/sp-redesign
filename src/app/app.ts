import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TranslatePipe
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('sp-redesign');

  private translate = inject(TranslateService);

  useLanguage(lang: string): void {
    this.translate.use(lang);
  }
}
