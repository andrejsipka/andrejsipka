import {Injectable} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SEOService {
  constructor(private title: Title, private meta: Meta) {
  }

  // Promise handles a single event when an async operation completes or fails.
  async updateTitle(title: string): Promise<void> {
    this.title.setTitle(title);
  }

  async updateDescription(desc: string): Promise<void> {
    this.meta.updateTag({name: 'description', content: desc});
  }

  async updateKeywords(keywords: string): Promise<void> {
    this.meta.updateTag({name: 'keywords', content: keywords});
  }

  async updateOgUrl(url: string): Promise<void> {
    this.meta.updateTag({
      name: 'og:url',
      property: 'og:url',
      content: url
    });
  }

  async updateOgTitle(ogTitle: string): Promise<void> {
    this.meta.updateTag({
      name: 'og:title',
      property: 'og:title',
      content: ogTitle
    });
  }

  async updateOgDescription(ogDesc: string): Promise<void> {
    this.meta.updateTag({
      name: 'og:description',
      property: 'og:description',
      content: ogDesc
    });
  }

  async updateOgImage(ogImg: string): Promise<void> {
    this.meta.updateTag({
      name: 'og:image',
      property: 'og:image',
      content: ogImg
    });
  }

  async disableFollow(): Promise<void> {
    this.meta.addTag({
      name: 'robots',
      property: 'robots',
      content: 'noindex, nofollow'
    });
  }

  async enableFollow(): Promise<void> {
    this.meta.removeTag('robots');
  }
}