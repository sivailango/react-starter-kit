import * as Yup from 'yup';

export default function createYupSchema(schema: any, config: any) {
  let { id, type, validations = [] } = config;
  // let validationType: any = type;

  const inputTypes = ['text', 'email'];

  if (inputTypes.includes(type)) {
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
