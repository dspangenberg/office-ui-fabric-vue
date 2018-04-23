function getDefault(types) {
  let defaultValue = '';
  const newValues = [];

  Array.from(types).forEach((element) => {
    if (element.startsWith('*')) {
      element = element.substr(1);
      defaultValue = element;
    }
    newValues.push(element);
  });
  return { values: newValues, defaultVal: defaultValue };
}

export default function (...types) {
  types.push('');
  const { values, defaultVal } = getDefault(types);

  return {
    props: {
      type: {
        type: String,
        default: defaultVal,
        validator(value) {
          return values.includes(value);
        }
      }
    }
  };
}
