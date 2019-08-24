import FieldConfig from 'models/InputFieldConfig';
import * as Yup from 'yup';
import * as _ from 'lodash';

import createYupSchema from './YupSchemaGenerator';

export function validateJsonForm(fields: Array<FieldConfig>) {
  fields.forEach(function(f1, i) {
    if (f1.type === 'array_fields') {
      f1.arrayFields.fields.forEach(function(f2: any, i: number) {
        f2['id'] = f2['name'];
        f2['name'] = `${f1.name}.0.${f2.name}`;
        f2['isArrayField'] = true;
        f2['arrayFieldName'] = f2['name'];
      });
    }
  });

  console.log(fields);

  return fields;
}

export function generateYupSchema(fields: Array<FieldConfig>) {
  const yepSchema = fields.reduce(createYupSchema, {});

  const arrayFields = _.filter(fields, function(f) {
    return f.type === 'array_fields';
  });

  let mergedSchema: any;

  mergedSchema = yepSchema;

  arrayFields.forEach(function(af: any, i: number) {
    const arraySchema = af.arrayFields.fields.reduce(createYupSchema, {});

    const afSchema: any = {};
    afSchema[af.name] = Yup.array().of(Yup.object().shape(arraySchema));

    mergedSchema = _.merge(mergedSchema, afSchema);
  });

  const schema = Yup.object().shape(mergedSchema);
  return schema;
}
