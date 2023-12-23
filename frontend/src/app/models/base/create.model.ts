export class CreateModel {
    id: string;
    name: string;
    type: string;
    label: string;
    data?: Array<Object>;
    option?: Array<Object>;
    class?: string;
    required?: boolean;
    obligatory?: boolean;
    defaultValue?: string;
    disable?: boolean;
}
