import FieldConfig from 'models/InputFieldConfig';

export function validateJsonForm(fields: Array<FieldConfig>) {
  fields.forEach(function(f) {
    if (f.type === 'array') {
      f = validateArrayFields(f);
    }
  });

  return fields;
}

export function validateArrayFields(field: any) {
  let flds: any = [];
  field.arrayFields.fields.forEach(function(f: any, i: number) {
    const fld = f;
    //f.id = `${field.name}.${i}.${f.name}`;
    //f.name = `${field.name}.${i}.${f.name}`;
    fld.name = `${field.name}.${i}.` + fld.name;
    // f.id = `${field.name}.${i}.${f.name}`;
    flds.push(fld);
  });

  field.arrayFields.fields = flds;

  console.log(field);

  return field;
}
