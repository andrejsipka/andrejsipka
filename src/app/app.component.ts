import {Component, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {ActivatedRoute, Data, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {filter, map, mergeMap, tap} from "rxjs";

import {SEOService} from "./shared/services/seo.service";

import NavbarComponent from "./shared/ui/navbar.component";
import FooterComponent from "./shared/ui/footer.component";
import {DOCUMENT, isPlatformBrowser} from "@angular/common";


@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent
  ],
  selector: 'andrejsipka-root',
  template: `
    <app-navbar></app-navbar>
    <!-- Navigation Bar-->
    <router-outlet></router-outlet>
    <app-footer />
  `,
})
export class AppComponent implements OnInit {
  private platformId: Object = inject(PLATFORM_ID);
  private readonly document: Document = inject(DOCUMENT);

  private readonly router: Router = inject(Router);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private seoService: SEOService = inject(SEOService);



  ngOnInit(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.route),
      map((route) => {
        while (route.firstChild) {
          route = route.firstChild
        }

        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      tap(() => {

        /*
        * Returns whether a platform id represents a browser platform.
        * No need to be worried about component being mounted or not (AfterViewInit).
        */
        this.scrollTo()
      }),
      mergeMap((route) => route.data),
    ).subscribe({
      next: (event: Data) => {
        this.seoService.updateTitle(event['title']);
        this.seoService.updateDescription(event['description']);
        this.seoService.updateKeywords(event['keywords']);
        this.seoService.updateOgUrl(event['url']);
        this.seoService.updateOgTitle(event['ogTitle']);
        this.seoService.updateOgDescription(event['ogDesc']);
        this.seoService.updateOgImage(event['ogImage']);
      }
    });
  }

  scrollTo(): void {
    if(isPlatformBrowser(this.platformId)) {
      this.document.defaultView?.scrollTo({
        top: 0
      })
    }
  }
}
