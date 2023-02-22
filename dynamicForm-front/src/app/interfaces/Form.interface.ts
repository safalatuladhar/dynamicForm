import { FormElement } from './FormElement.interface';

export interface Form {
  id: number | null;
  name: string;
  userId: number;
  formComponents: FormElement[] | null;  

}
