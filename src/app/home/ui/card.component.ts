import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import IconBoxComponent from "../../shared/ui/icon-box.component";
import {Knowledge} from "../../shared/types/types";

@Component({
    selector: 'app-card',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        IconBoxComponent
    ],
    template: `
        <section class="card">
            <header class="card__header">
                <app-icon-box [name]="data.icon" variant="foreground"/>
                <h1 class="heading heading__tertiary">{{data.title}}</h1>
            </header>

            <div>
                <p class="text text__regular">{{data.description}}</p>
            </div>
        </section>
    `,
    styles: `
        .card {
            border: 1px solid hsl(var(--input));
            padding: 2.4rem;
            border-radius: .5em;
            height: 100%;
            
            & :is(header, div) > * {
                max-width: 240px;
            }
        }
        
        header > *:not(:last-child) {
            margin-bottom: 1.6rem;
        }
    `
})
export default class CardComponent {
    @Input({ required: true }) data!: Knowledge;
}