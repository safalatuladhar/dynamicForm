import { FormElementType } from '../enums/FormElementType.enum';
import { Form } from '../interfaces/Form.interface';
import { FormElement } from '../interfaces/FormElement.interface';
import { Option } from '../interfaces/Option.interface';

export class HtmlFormBuilderUtil {
  constructor(public form: Form) {}

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
      if (item.type === 0) {
        html += this.textField(item);
      } else if (item.type === 1) {
        html += this.selectField(item);
      } else if (item.type === 2) {
        html += this.checkboxField(item);
      } else if (item.type === 3) {
        html += this.textareaField(item);
      } else if (item.type === 4) {
        html += this.fileuploadField(item);
      }else if(item.type === 5){
        html += this.radioField(item);
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

  private textField(formComponent: FormElement) {
    const html = `<div class="form-group mb-2">
        <label class="form-label" for="${formComponent.id}">${
      formComponent.label
    }</label>
        <input type="text" id="${formComponent.id}" name="${
      formComponent.name
    }" value="${formComponent.value}"
                class="form-control ${formComponent.className}" placeholder="${
      formComponent.placeholder
    }" ${formComponent.disabled ? 'disabled' : ''}"/>
        </div>`;
    return html;
  }

  private option(data: Option[]) {
    let html = '';
    data.forEach((item) => {
      html += `<option value="${item.value}">${item.name}</option> `;
    });
    return html;
  }

  private selectField(data: FormElement) {
    const option = this.option(data.options);
    const html = `<div class="form-group mb-2">
        <label class="form-label" for="${data.id}">${data.label}</label>
        <select class="form-control ${data.className}" id="${data.id}" name="${
      data.name
    }" ${data.disabled ? 'disabled' : ''}>
                ${option}         
        </select>
        </div>`;
    return html;
  }

  private checkboxField(formComponent: FormElement) {
    let html = `<div>
    <label class="form-label" for="52">${formComponent.label}</label>`;
    formComponent.options.forEach((item) => {
      html += `<div class="form-check" >
        <label for="${formComponent.id}" class="form-check-label">${
        item.name
      }</label>
        <input 
          class="form-check-input ${formComponent.className}" 
          type="checkbox"  
          id="${formComponent.id}" 
          name="${formComponent.name}" 
          value="${formComponent.value}">
          ${formComponent.disabled ? 'disabled' : ''}
        </div>`;
    });
    html += `</div>`;
    return html;
  }

  private textareaField(formComponent: FormElement) {
    const html = `<div class="form-group mb-2">
        <label class="form-label" for="${formComponent.id}">${
      formComponent.label
    }</label>
        <textarea
          id="${formComponent.id}" 
          name="${formComponent.name}"
          class="form-control ${formComponent.className}" 
          rows="${formComponent.rows}"
          ${formComponent.disabled ? 'disabled' : ''}
          cols="${formComponent.cols}">${formComponent.value}</textarea>
        </div>`;
    return html;
  }

  private fileuploadField(formComponent: FormElement) {
    const html = `<div class="form-group mb-2">
    <label class="form-label" for="${formComponent.id}">${formComponent.label}</label>
    <input 
      type="file" 
      class="form-control ${formComponent.className}" 
      id="${formComponent.id}" 
      multiple="${formComponent.multiple}"
      name="${formComponent.name}"
      accept="${formComponent.fileType}">
  </div>`;
    return html;
  }

  private radioField(formComponent: FormElement) {
    let html = `<div>
    <label class="form-label" for="52">${formComponent.label}</label>`;
    formComponent.options.forEach((item) => {
      html += `<div class="form-check" >
        <label for="${formComponent.id}" class="form-check-label">${
        item.name
      }</label>
        <input 
          class="form-check-input ${formComponent.className}" 
          type="radio"  
          id="${formComponent.id}" 
          name="${formComponent.name}" 
          value="${formComponent.value}">
          ${formComponent.disabled ? 'disabled' : ''}
        </div>`;
    });
    html += `</div>`;
    return html;
  }
}
