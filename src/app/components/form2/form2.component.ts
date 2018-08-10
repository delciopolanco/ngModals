import { Component } from '@angular/core';
import { Form3Component } from '../form3/form3.component';
import { Modal, ModalService } from '../../services/modals/modals';

@Component({
  selector: 'app-form2-component',
  templateUrl: './form2.component.html',
  providers: [ModalService]
})
export class Form2Component extends Modal {
  name = 'hola';

  constructor(private modalService: ModalService) {
    super();
  }

  openModal3() {
    this.modalService.show({
      component: Form3Component
    });
  }

}
