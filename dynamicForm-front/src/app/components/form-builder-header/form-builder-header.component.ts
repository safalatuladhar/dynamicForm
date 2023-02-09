import { Component, OnInit } from '@angular/core';
import { FormBuilderService } from 'src/app/services/form-builder.service';

@Component({
  selector: 'app-form-builder-header',
  templateUrl: './form-builder-header.component.html',
  styleUrls: ['./form-builder-header.component.scss'],
})
export class FormBuilderHeaderComponent implements OnInit {
  constructor(private readonly formService: FormBuilderService) {}

  title: string = '';

  onTitleSubmit(event: Event) {
    event.preventDefault();
  }

  ngOnInit(): void {
    this.title = this.formService.getTitle();
  }

  onTitleChange() {
    if (this.title.trim().length === 0) {
      this.formService.setTitle('Untitled');
      this.title = 'Untitled';
      return;
    }
    this.formService.setTitle(this.title);
  }

  cancel(): void {
    console.log('Form Cancelled');
  }
  save(): void {
    console.log('Form Saved');
  }
}
