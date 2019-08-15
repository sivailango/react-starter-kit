import * as Yup from 'yup';

interface Yup {
  [key: string]: any;
}

export default function createYupSchema(schema: any, config: any) {
  let { id, type, validations = [] } = config;
  // let validationType: any = type;

  if (type === 'text') {
    type = 'string';
  }

  if (!Yup[type]) {
    return schema;
  }

  let validator = Yup[type]();

  validations.forEach((validation: any) => {
    const { params, type } = validation;
    if (!validator[type]) {
      return;
    }
    validator = validator[type](...params);
  });

  schema[id] = validator;

  return schema;
}
