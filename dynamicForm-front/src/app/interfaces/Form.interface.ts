import { FormElement } from './FormElement.interface';

export interface Form {
  id: number | null;
  name: string;
  user_id: number;
  formComponents: FormElement[] | null;
  
}
