import { Component, Input } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormElementType } from 'src/app/enums/FormElementType.enum';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-form-element-sidebar',
  templateUrl: './form-element-sidebar.component.html',
  styleUrls: ['./form-element-sidebar.component.scss']
})
export class FormElementSidebarComponent {
  formType:FormElementType
  type:FormElementType
  // formType=FormElementType.CHECKBOX

  // @Input() formType: FormElementType;
  closeResult =''
  constructor(private modalService: NgbModal){}
  open(content,formType:FormElementType){
    this.formType = formType
    console.log("this",this.formType)
    console.log('content',content)
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
