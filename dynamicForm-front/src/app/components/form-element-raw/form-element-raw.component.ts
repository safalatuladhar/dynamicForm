import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { formElementInfo, FormElementType } from 'src/app/enums/FormElementType.enum';
import { FormElement } from 'src/app/interfaces/FormElement.interface';
import { FormBuilderService } from 'src/app/services/form-builder.service';

@Component({
  selector: 'app-form-element-raw',
  templateUrl: './form-element-raw.component.html',
  styleUrls: ['./form-element-raw.component.scss'],
})
export class FormElementRawComponent {
  @Input() index:number;
  @Input() formElement: FormElement;
  constructor(private modalService: NgbModal, private readonly formService:FormBuilderService){}
  elementInfoList: { class: string; title: string }[] = [...formElementInfo];

  open(content,formType:FormElementType){
    
    this.modalService.open( content,{ ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				 `Closed with: ${result}`;
			},
			(reason) => {
				// this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
  }
  delete(index:number){
    this.formService.deleteElementFromForm(index);
  }
}
