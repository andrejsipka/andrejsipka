import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";
import {ThemeToggleComponent} from "../features/theme-toggle.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [
    RouterLink,
    ThemeToggleComponent,
    NgOptimizedImage
  ],
  template: `
    <header class="navigation">
      <div class="navigation__container">
        <div class="navigation__layout">
          <div class="navigation__links">
            <a routerLink="/">
              <img ngSrc="/assets/logo.png" width="30" height="30" alt="Me" class="drawing">
            </a>

            <nav>
              <ul class="nav__list">
                <li class="nav__list-item"><a routerLink="/">Home</a></li>
                <li class="nav__list-item"><a routerLink="/about">About</a></li>
<!--                <li class="nav__list-item"><a routerLink="/articles">Articles</a></li>-->
              </ul>
            </nav>
          </div>

          <app-theme-toggle/>
        </div>
      </div>
    </header>
  `,
  styles: `
    .navigation {
      display: flex;
      justify-content: center;
      background-color: hsl(var(--background));
      color: hsl(var(--primary));
      height: 60px;

      &__container {
        max-width: 1030px;
        width: 100%;
        display: flex;
        align-items: center;

        @media screen and (max-width: 1068px) {
          margin: 0 1rem;
        }
      }

      &__layout {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &__links {
        display: flex;
        align-items: center;
        gap: 2.4rem;

        & nav ul {
          display: flex;
          gap: 2.4rem;
        }
      }
    }
  `
})
export default class NavbarComponent {}