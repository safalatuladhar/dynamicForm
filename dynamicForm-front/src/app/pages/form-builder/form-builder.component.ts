import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilderService } from 'src/app/services/form-builder.service';
import {DragDropModule} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
  providers: [FormBuilderService],
})
export class FormBuilderComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private formService: FormBuilderService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      let id: string = params['id'];
      if (!id) {
        return;
      }
      this.formService.getFormById(id);
    });
  }
}
