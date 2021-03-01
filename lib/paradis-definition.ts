export interface Schema{
    name: string,
    fields: Array<Field>
}

export interface Field{
    name: string,
    type: "integer" | "bigInteger" | "float" | "boolean" | "text" | "datetime" | "date" | "time" | "JSON"
}

