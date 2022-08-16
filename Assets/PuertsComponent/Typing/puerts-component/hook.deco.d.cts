export interface HookOptions {
    name: string;
}
export declare function Hook(options?: HookOptions): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
