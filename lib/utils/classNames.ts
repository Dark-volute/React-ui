const prefix = 'x'

export function classNames(...names: (string | undefined | boolean)[]){
    return names.filter(Boolean).join(' ')
}


export function createScopedClasses(componentName: string): (...rest ) => string {
    return (...rest) => {
        if(rest.length) {
            return rest.map( modify => modify ? [prefix, componentName, modify].join('-') : prefix + '-' + componentName).filter(Boolean).join(' ')
        } else {
            return prefix + '-' + componentName
        }
    };
}


// function classArray(this: void, ...args: any): string[] {
//     return unique(flatten(args.map((c: any) => {
//         if (!c) { return ''; }
//         if (typeof c === 'string') {
//             return c;
//         } else if (Array.isArray(c)) {
//             return c;
//         } else {
//             return Object.keys(c).filter(k => c[k]);
//         }
//     })));
// }
//
// export function createScopedClasses(componentName: string): (...args: any) => string {
//     return (...args) => {
//         return classArray.apply(null, args.length === 0 ? [''] : args).map((c: string) => {
//             return [prefix, componentName, c].filter(v => v).join('-');
//         }).join(' ');
//     };
// }
//
//
// function unique(array: any[]): any[] {
//     return Array.from(new Set(array));
// }
//
// function flatten(input: any[]) { // from MDN
//     const stack = [...input];
//     const res:any = [];
//     while (stack.length) {
//         const next = stack.pop();
//         if (Array.isArray(next)) {
//             stack.push(...next);
//         } else {
//             res.push(next);
//         }
//     }
//     return res.reverse();
// }