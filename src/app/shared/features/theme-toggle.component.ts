import {ChangeDetectionStrategy, Component, inject} from "@angular/core";
import {NgClass, DOCUMENT} from "@angular/common";

@Component({
  selector: "app-theme-toggle",
  standalone: true,
  imports: [NgClass],
  template: `
    <button type="button" (click)="toggleTheme()" class="theme-button">
      <i class="material-symbols-outlined">{{ isDark ? 'light_mode' : 'nightlight' }}</i>
    </button>
  `,
  styles: `
    .theme-button {
      width: 3.6rem;
      height: 3.6rem;
      border-radius: 6px;
      position: relative;
      -webkit-transition: all 200ms linear;
      -moz-transition: all 200ms linear;
      -o-transition: all 200ms linear;
      transition: all 200ms linear;
      display: flex;
      justify-content: center;
      align-items: center;
      color: hsl(var(--foreground));
      background-color: transparent;
      border: none;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeToggleComponent {
  private readonly document: Document = inject(DOCUMENT);

  public isDark: boolean = true;

  constructor() {
    this.initializeThemeFromPreferences();
  }

  public initializeThemeFromPreferences(): void {
    this.isDark = this.document.defaultView?.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;

    const htmlElement = this.document.querySelector('html') as HTMLHtmlElement | null;

    if (htmlElement && htmlElement.hasAttribute('data-theme')) {
      htmlElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
    }
  }

  public getThemeState(): string {
    return this.isDark ? 'dark' : 'light';
  }

  public toggleTheme(): void {
    this.isDark = !this.isDark;
    this.updateRenderedTheme();
  }

  private updateRenderedTheme(): void {
    // If we're calling this method, the user has explicitly interacted with the theme toggle.
    const htmlElement = this.document.querySelector('html') as HTMLHtmlElement | null;

    if (htmlElement && htmlElement.hasAttribute('data-theme')) {
      htmlElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
    }
  }
}
