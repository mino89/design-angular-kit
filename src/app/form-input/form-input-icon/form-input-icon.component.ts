import { Component } from '@angular/core';
import { IconName } from '../../../../projects/design-angular-kit/src/lib/interfaces/icon';

@Component({
  selector: 'it-form-input-icon-example',
  templateUrl: './form-input-icon.component.html',
  styleUrls: ['./form-input-icon.component.scss']
})
export class FormInputIconExampleComponent {
  i = 0;
  type = 'text';
  icon: IconName = 'pencil';
  value = '';
  label = "Etichetta di esempio";
}
