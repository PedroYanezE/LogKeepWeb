export interface StructureList {
    id: string;
    name: string;
}

export interface StructureDetail {
    id: string;
    name: string;
    fields: Field[]
}

interface Field {
    name: string;
    dataType: string;
}
