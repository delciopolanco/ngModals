import { Component } from '@angular/core';
import { Modal } from '../../services/modals/modals';

@Component({
  selector: 'app-form3-component',
  templateUrl: './form3.component.html'
})
export class Form3Component extends Modal {
  name = 'hola';

  constructor() {
    super();
  }

}
