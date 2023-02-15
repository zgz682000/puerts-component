export interface HookOptions {
    name: string;
}

export function Hook(options?: HookOptions){
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor)=>{
        let name = options && options.name ? options.name : propertyKey;
        if (!target.hasOwnProperty("__hooks")) {
            target.__hooks = Object.assign({}, target.__hooks);
        }
        target.__hooks[name] = {
            key: propertyKey
        };
    }
}