import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {NgClass} from "@angular/common";

@Component({
    selector: 'app-icon-box',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="box" [ngClass]="'box--' + variant">
            <i class="material-symbols-outlined">{{ name }}</i>
        </div>
    `,
    imports: [
        NgClass
    ],
    styles: `
        :host {
            display: inline-block;    
        }
        
        .box {
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 12px;

            &--default {
                background-color: hsl(var(--background));
            }

            &--foreground {
                background-color: hsl(var(--foreground-secondary));
            }
        }
    `
})
export default class IconBoxComponent {
    @Input({ required: true }) name!: string;
    @Input() variant: 'default' | 'foreground' = 'default';
}