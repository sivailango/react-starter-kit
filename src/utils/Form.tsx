import FieldConfig from 'models/InputFieldConfig';

export function validateJsonForm(fields: Array<FieldConfig>) {
  fields.forEach(function(f1, i) {
    if (f1.type === 'array_fields') {
      f1.arrayFields.fields.forEach(function(f2: any, i: number) {
        f2['name'] = `${f1.name}.0.${f2.name}`;
        f2['id'] = f2['name'];
      });
    }
  });

  console.log(fields);

  return fields;
}

/*
export function validateArrayFields(field: any, fields: any) {
  fields.map(function (f: any, i: number) {
    f['name'] = `${field.name}.${i}.${f.name}`;
    f['id'] = f['name'];
    return f;
  });

  console.log(fields);

  return fields;
}
*/
