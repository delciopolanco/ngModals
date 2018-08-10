import { Component } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { ModalService } from './services/modals/modals';

@Component({
  selector: 'app-root',
  providers: [ModalService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private modalService: ModalService) { }

  openModal() {
    this.modalService.show({
      component: FormComponent
    });
  }
}
