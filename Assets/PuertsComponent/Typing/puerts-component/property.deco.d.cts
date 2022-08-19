import { System, UnityEngine } from "csharp";
export interface PropertyOptions {
    name?: string;
    [key: string]: any;
}
declare type PropertyType = typeof UnityEngine.Object | typeof UnityEngine.Color | typeof UnityEngine.Vector2 | typeof UnityEngine.Vector3 | typeof System.Int32 | typeof System.String | typeof System.Boolean | typeof System.Double | typeof System.Single | typeof System.Int64;
export declare function ListProperty(type: PropertyType | typeof System.Object, dimension?: number, options?: PropertyOptions): (target: any, propertyKey: string) => void;
export declare function Property(type: PropertyType | typeof System.Object, options?: PropertyOptions): (target: any, propertyKey: string) => void;
export {};
