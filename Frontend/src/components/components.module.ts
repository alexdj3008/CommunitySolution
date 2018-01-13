import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { Timer } from './countdown-timer/timer';
import { TimerProgress } from './timer-progress/timer-progress';
import { ExpandableHeader } from './expandable-header/expandable-header';
import { TimelineComponent, TimelineItemComponent, TimelineTimeComponent } from './timeline/timeline';

export const components = [
  Timer,
  TimerProgress,
  ExpandableHeader,
  TimelineComponent,
  TimelineItemComponent,
  TimelineTimeComponent,
];

@NgModule({
  declarations: [components],
  imports: [IonicModule],
  exports: [components]
})
export class ComponentsModule {}
