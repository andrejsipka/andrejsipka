import {ChangeDetectionStrategy, Component, Input, Pipe, PipeTransform} from "@angular/core";
import {Experience} from "../../shared/types/types";

const monthAbbreviations:string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

@Pipe({
  name: 'toReadableDate',
  standalone: true,
  pure: true
})
class ToReadableDatePipe implements PipeTransform {
  transform(value: string): string {
    const monthIndex: number = new Date(value).getMonth()
    const month: string = monthAbbreviations[monthIndex];
    const year: number = new Date(value).getFullYear();

    return `${month} ${year}`
  }
}

@Component({
  selector: 'app-experience-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ToReadableDatePipe
  ],
  template: `
    <div class="experience-card">
      <div class="experience-card__description">
        <h3 class="heading heading__regular">{{item.description}}</h3>
        <p class="text text__regular">{{item.city}}, {{item.country}}</p>
      </div>

      <p class="text text__regular">{{item.from | toReadableDate }} - {{item.to | toReadableDate}}</p>
    </div>
  `,
  styles: `
    .experience-card {
      border: 1px solid hsl(var(--input));
      border-radius: var(--radius);
      padding: 2.4rem;

      &__description {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        & p.text {
          margin-top: 0;
        }
      }
    }
  `
})
export default class ExperienceCardComponent {
  @Input({ required: true }) item!: Experience;
}