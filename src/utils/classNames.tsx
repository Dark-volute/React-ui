const prefix = 'x';

export function classNames(...names: (string | undefined | boolean)[]) {
  return names.filter(Boolean).join(' ');
}

export function createScopedClasses(
  componentName: string,
): (...rest) => string {
  return (...rest) => {
    if (rest.length) {
      return rest
        .map(modify =>
          modify
            ? [prefix, componentName, modify].join('-')
            : prefix + '-' + componentName,
        )
        .filter(Boolean)
        .join(' ');
    } else {
      return prefix + '-' + componentName;
    }
  };
}
