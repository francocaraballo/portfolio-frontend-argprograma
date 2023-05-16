import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-habilities',
  templateUrl: './habilities.component.html',
  styleUrls: ['./habilities.component.scss','../works-done/works-done.component.scss']
})
export class HabilitiesComponent {
  @Input() title!: string;

}
