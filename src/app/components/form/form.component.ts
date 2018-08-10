import { Component, Input } from '@angular/core';
import { Form2Component } from '../form2/form2.component';
import { Modal, ModalService } from '../../services/modals/modals';

@Component({
  selector: 'app-form-component',
  templateUrl: './form.component.html',
  providers: [ModalService],
  styles: [`
    input {
      border: 1px solid black;
    }
  `]
})
export class FormComponent extends Modal {
  name = 'hola';

  constructor(private modalService: ModalService) {
    super();
  }

  openModal2() {
    this.modalService.show({
      component: Form2Component
    });
  }

}
