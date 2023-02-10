import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-form-element-sidebar',
  templateUrl: './form-element-sidebar.component.html',
  styleUrls: ['./form-element-sidebar.component.scss']
})
export class FormElementSidebarComponent {
  closeResult =''
  constructor(private modalService: NgbModal){}
  open(content){
    let html = ` <ng-template #content let-modal>
    <p>
    First focusable element within the modal window will receive focus upon opening. This could be configured to focus any
    other element by adding an <code>ngbAutofocus</code> attribute on it.
  </p> </ng-template>`
    console.log('content',content)
    // this.modalService.open(ModalComponent)
    this.modalService.open( content,{ ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				 `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
  }
  private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

}
