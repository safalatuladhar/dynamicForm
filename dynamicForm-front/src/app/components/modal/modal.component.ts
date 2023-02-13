import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormElementType } from 'src/app/enums/FormElementType.enum';
import { FormElement } from 'src/app/interfaces/FormElement.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit{
  @Input() formType: FormElementType;
  @Input() modal:any;
  @Input() formElement:FormElement;
  @Input() index:number;
  content = '';
  
  closeResult = '';
  

	constructor(private modalService: NgbModal) {}
  ngOnInit(): void {
    console.log('formtype',this.formType);
    console.log('modal',this.modal);
  }
	open(contents) {
    console.log('contents',contents)
    console.log('this.content',this.content)
		this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
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
