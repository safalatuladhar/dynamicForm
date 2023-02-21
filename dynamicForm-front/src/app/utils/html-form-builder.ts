import { FormElementType } from '../enums/FormElementType.enum';
import { Form } from '../interfaces/Form.interface';
import { FormElement } from '../interfaces/FormElement.interface';
import { Option } from '../interfaces/Option.interface';

export class HtmlFormBuilder {
  constructor(public form: Form, public flag: boolean) {}

  download() {
    let htmlFormat = this.generateCompleteHtml();
    const data = new Blob([htmlFormat], { type: 'text/html' });
    const url = URL.createObjectURL(data);
    const link = document.createElement('a');
    link.download = `${this.form.name}.html`;
    link.href = url;
    link.click();
  }

  private generateCompleteHtml(): string {
    let containsFile = this.form.formComponents.find(
      (formComponent) => formComponent.type === FormElementType.FILE_UPLOAD
    );
    let html = `
          <html>
          ${this.generateHead()}
          <body>
          <div class="container">
          <div class="d-flex justify-content-center pb-3 mb-4 border-bottom">
          <h3>${this.form.name}</h3>
          </div>  
          <form method="post" ${
            containsFile ? 'enctype="multipart/form-data"' : ''
          }>
            ${this.formBuilder()}
            <div class="d-flex justify-content-end p-2">
            <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
          </div>
          </body>
          </html>
        `;
    return html;
  }

  formBuilder(): string {
    let html = '';
    this.form.formComponents.forEach((item) => {
      let fromControl = `formControlName="${item.name}"`;
      let arrayFormControl = `[formControlName]="${item.name}"`;
      if (item.type === FormElementType.TEXTFIELD) {
        html += this.textField(item, fromControl);
      } else if (item.type === FormElementType.SELECT) {
        html += this.selectField(item, arrayFormControl);
      } else if (item.type === FormElementType.CHECKBOX) {
        html += this.checkboxField(item, arrayFormControl);
      } else if (item.type === FormElementType.TEXTAREA) {
        html += this.textareaField(item, fromControl);
      } else if (item.type === FormElementType.FILE_UPLOAD) {
        html += this.fileuploadField(item, fromControl);
      } else if (item.type === FormElementType.RADIO) {
        html += this.radioField(item, arrayFormControl);
      }
    });
    return html;
  }

  private generateHead(): string {
    let head = `
    <head>
    <meta charset="utf-8"/>
    <title>${this.form.name}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"/>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <style>
      body {
        padding: 1em;
      }
      .container {
        width: 50vw;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
          rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
        border-radius: 4px;
        padding: 1em 2em;
      }
    </style>
    </head>`;
    return head;
  }

  private generateCommonAttributes(
    formComponent: FormElement,
    bstClass: string = 'form-control'
  ) {
    const html = `class="${bstClass} ${formComponent.className}"
    id="${formComponent.id.toString()}" 
    name="${formComponent.name}${
      formComponent.type == FormElementType.CHECKBOX ? '[]' : ''
    }"
    ${formComponent.disabled ? 'disabled' : ''}
    ${
      formComponent.required &&
      formComponent.type !== FormElementType.CHECKBOX &&
      formComponent.type !== FormElementType.RADIO
        ? 'required'
        : ''
    }`;
    return html;
  }

  private textField(formComponent: FormElement, text: string) {
    const html = `<div class="form-group mb-2">
        <label class="form-label" for="${formComponent.id}">${
      formComponent.label
    }</label>
        <input type="text" 
        ${this.generateCommonAttributes(formComponent)}
        value="${formComponent.value}"
        placeholder="${formComponent.placeholder}"
        ${this.flag ? text : ''}
        />
        </div>`;
    // console.log(text);

    return html;
  }

  private option(data: Option[]) {
    let html = '';
    data.forEach((item) => {
      html += `<option value="${item.value}">${item.name}</option> `;
    });
    return html;
  }

  private selectField(formComponent: FormElement, text: string) {
    const option = this.option(formComponent.options);
    const html = `<div class="form-group mb-2">
        <label class="form-label" for="${formComponent.id}">${
      formComponent.label
    }</label>
        <select ${this.flag ? text : ''} ${this.generateCommonAttributes(
      formComponent,
      'form-select'
    )} " "
        >
                ${option}         
        </select>
        </div>`;
    return html;
  }

  private checkboxField(formComponent: FormElement, fromControl: string) {
    let html = `<div class="form-group mb-2">
    <label class="form-label" for="52">${formComponent.label}</label>`;
    formComponent.options.forEach((item) => {
      html += `<div class="form-check" >
        <label for="${item.id}" class="form-check-label">${item.name}</label>
        <input 
          ${this.generateCommonAttributes(
            { ...formComponent, id: item.id },
            'form-check-input'
          )}[]
          type="checkbox"
          ${this.flag ? fromControl : ''}
          value="${item.value}">
        </div>`;
    });
    html += `</div>`;
    return html;
  }

  private textareaField(formComponent: FormElement, fromControl: string) {
    const html = `<div class="form-group mb-2">
        <label class="form-label" for="${formComponent.id}">${
      formComponent.label
    }</label>
        <textarea
          ${this.generateCommonAttributes(formComponent)}
          rows="${formComponent.rows}"
          placeholder="${formComponent.placeholder}"
          cols="${formComponent.cols}">${formComponent.value}</textarea>
          ${this.flag ? fromControl : ''}
        </div>`;
    return html;
  }

  private fileuploadField(formComponent: FormElement, fromControl: string) {
    const html = `<div class="form-group mb-2">
    <label class="form-label" for="${formComponent.id}">${
      formComponent.label
    }</label>
    <input
      ${this.generateCommonAttributes(formComponent)} 
      type="file" 
      multiple="${formComponent.multiple}"
      accept="${formComponent.fileType}">
      ${this.flag ? fromControl : ''}
  </div>`;
    return html;
  }

  private radioField(formComponent: FormElement, fromControl: string) {
    let html = `<div>
    <label class="form-label" for="52">${formComponent.label}</label>`;
    formComponent.options.forEach((item) => {
      html += `<div class="form-check" >
        <label for="${item.id}" class="form-check-label">${item.name}</label>
        <input 
        ${this.generateCommonAttributes(
          { ...formComponent, id: item.id },
          'form-check-input'
        )} 
          type="radio"  
          value="${item.value}"
          ${this.flag ? fromControl : ''}
          >
        </div>`;
    });
    html += `</div>`;
    return html;
  }
}
