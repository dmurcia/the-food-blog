export const parseToInt10 = (string) => parseInt(string, 10);

export const merge = (target, ...sources) =>
  sources.reduce(
    (target, source) => {
      // If `source` is not an object, ignore it
      if (!isObject(source)) return target;

      // Iterate through `source` properties and if is an `Object`, merge `target` and `source` properties on it
      for (const key in source) {
        if (isObject(source[key])) {
          source[key] = merge(target[key], source[key]);
        }
      }

      // Join `target` and modified `source`
      return { ...target, ...source };
    },
    isObject(target) ? target : {}
  );

export const isObject = (item) =>
  item &&
  typeof item === "object" &&
  ![AbortSignal, Array, FormData, Map].some((Type) => item instanceof Type);
