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
    // link.click();
    console.log(link)
    link.remove();
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
          <script>
            $("form").validate();
          </script>
          </body>
          </html>
        `;
    return html;
  }

  formBuilder(): string {
    let html = '';
    this.form.formComponents.forEach((item) => {
      if (item.type === FormElementType.TEXTFIELD) {
        html += this.textField(item);
      } else if (item.type === FormElementType.SELECT) {
        html += this.selectField(item);
      } else if (item.type === FormElementType.CHECKBOX) {
        html += this.checkboxField(item);
      } else if (item.type === FormElementType.TEXTAREA) {
        html += this.textareaField(item);
      } else if (item.type === FormElementType.FILE_UPLOAD) {
        html += this.fileuploadField(item);
      } else if (item.type === FormElementType.RADIO) {
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
    <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.0/jquery.validate.min.js"> </script>  
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
      .error{
        color: red;
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
    ${formComponent.ids && 'id=' + formComponent.ids.toString()}
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

  private generatePlaceholder(placeholder: string) {
    return `${placeholder && 'placeholder=' + placeholder}`;
  }

  private generateValue(value: string) {
    return `${value && 'value=' + value}`;
  }

  private generatePattern(pattern:string){
    return `${pattern && 'pattern='+pattern}`;
  }

  private textField(formComponent: FormElement) {
    const html = `<div class="form-group mb-2">
        <label class="form-label" for="${formComponent.id}">${
      formComponent.label
    }</label>
        <input type="text" 
        ${this.generateCommonAttributes(formComponent)}
        ${this.generateValue(formComponent.value)}
        ${this.generatePlaceholder(formComponent.placeholder)}
        ${this.generatePattern(formComponent.pattern)}
        />
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

  private selectField(formComponent: FormElement) {
    const option = this.option(formComponent.options);
    const html = `<div class="form-group mb-2">
        <label class="form-label" for="${formComponent.id}">${
      formComponent.label
    }</label>
        <select ${this.generateCommonAttributes(
          formComponent,
          'form-select'
        )} " "
        >
                ${option}         
        </select>
        </div>`;
    return html;
  }

  private checkboxField(formComponent: FormElement) {
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
          value="${item.value}">
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
          ${this.generateCommonAttributes(formComponent)}
          rows="${formComponent.rows}"
          ${this.generatePlaceholder(formComponent.placeholder)}
          cols="${formComponent.cols}">${formComponent.value}</textarea>
        </div>`;
    return html;
  }

  private fileuploadField(formComponent: FormElement) {
    const html = `<div class="form-group mb-2">
    <label class="form-label" for="${formComponent.id}">${
      formComponent.label
    }</label>
    <input
      ${this.generateCommonAttributes(formComponent)} 
      type="file" 
      ${formComponent.multiple ? 'multiple' : ''}
      accept="${formComponent.fileType}">
  </div>`;
    return html;
  }

  private radioField(formComponent: FormElement) {
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
          >
        </div>`;
    });
    html += `</div>`;
    return html;
  }
}
