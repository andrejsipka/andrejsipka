import {ChangeDetectionStrategy, Component} from "@angular/core";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="block footer">
      <div class="block__container">
        <div class="footer__layout">
          <ul>
            <li><a routerLink="/">Home</a></li>
            <li><a routerLink="/about">About</a></li>
<!--            <li><a routerLink="/articles">Articles</a></li>-->
          </ul>
          
          <p>© 2024 Andrej Sipka. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  imports: [
    RouterLink
  ],
  styles: `
    .footer {
      border-top: 1px solid hsl(var(--border));
      min-height: 60px;

      @media screen and (max-width: 768px) {
        padding: 3.6rem 0;
      }
      
      &__layout {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 2.4rem;
        
        @media screen and (max-width: 768px) {
          flex-direction: column;
          text-align: center;
        }
      }
    }
    
    ul {
      display: flex;
      gap: 2.4rem;
      
      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
    }
    
    li {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 2.4rem;
    }
  `
})
export default class FooterComponent {

}