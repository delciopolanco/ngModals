import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector } from '@angular/core';

export class Modal {
  protected modal: any = null;

  close() {
    this.modal.close();
  }
}

@Injectable()
export class ModalService {
  private componentRef: any;
  private modalContainer: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) { }

  private createFormModal(component: any): Element {
    this.componentRef = this.componentFactoryResolver.resolveComponentFactory(component.component).create(this.injector);
    this.componentRef.instance.modal = this;

    this.appRef.attachView(this.componentRef.hostView);

    return (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
  }

  show(component: any): void {
    const alertElement = this.createFormModal(component);

    const content = document.createElement('div');
    content.classList.add('modal-content');
    content.appendChild(alertElement);

    this.modalContainer = document.createElement('div');
    this.modalContainer.classList.add('modal');
    this.modalContainer.appendChild(content);

    document.body.appendChild(this.modalContainer);
  }


  close(): void {
    this.appRef.detachView(this.componentRef.hostView);
    this.modalContainer.parentNode.removeChild(this.modalContainer);
    this.componentRef.destroy();
  }
}
