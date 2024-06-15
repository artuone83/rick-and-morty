export const getNestedValue = <T extends Record<string, any>>(
  obj: T,
  path: string
): any => {
  const keys = path.split(".");
  const isNestedPath = keys.length > 1;
  const isEmptyObject = Object.keys(obj).length === 0;
  let value: any = { ...obj };

  if (!isEmptyObject && isNestedPath) {
    for (const key of keys) {
      value = value[key];
    }

    return value;
  }

  return value[path];
};
