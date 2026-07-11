import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactDialogComponent } from './components/contact-dialog/contact-dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { SnackbarContainerComponent } from './components/snackbar-container/snackbar-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SiteFooterComponent,
    ContactDialogComponent,
    SnackbarContainerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
