const prefix = 'x';

export function classNames(...names: (string | undefined | boolean)[]) {
  return names.filter(Boolean).join(' ');
}

export function createScopedClasses(
  componentName: string,
): (...rest: any) => string {
  return (...rest) => {
    if (rest.length) {
      return rest
        .map((modify: any) =>
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
