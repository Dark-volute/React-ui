export function classNames(...names: (string | undefined | boolean)[]){
    return names.filter(Boolean).join(' ')
}


export function createScopedClasses(componentName: string): (modify?: string ) => string {
    return (modify?: string) => {
        return modify ? [componentName, modify].join('-') : componentName
    };
}