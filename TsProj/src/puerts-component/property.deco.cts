import { System, UnityEngine } from "csharp";
import { $generic, $typeof } from "puerts";


export interface PropertyOptions {
    name?: string;
    [key: string]: any;
}

export function ListProperty(type: typeof System.Object, dimension: number = 1, options?: PropertyOptions){
    return !UnityEngine.Application.isEditor ? 
    (target: any, propertyKey: string)=>{
        let name = options && options.name ? options.name : propertyKey;
        if (!target["__properties"]){
            target["__properties"] = {};
        }
        target["__properties"][name] = {
            key: propertyKey
        };
    }
    :(target: any, propertyKey: string)=>{
        let name = options && options.name ? options.name : propertyKey;
        if (!target["__properties"]){
            target["__properties"] = {};
        }
        for(var i = 0; i < dimension; i++){
            type = $generic(System.Collections.Generic.List$1, type);
        }
        target["__properties"][name] = {
            type: $typeof(type),
            options: options,
            key: propertyKey
        }
    }
}

export function Property(type: typeof System.Object, options?: PropertyOptions){
    return !UnityEngine.Application.isEditor ? 
    (target: any, propertyKey: string)=>{
        let name = options && options.name ? options.name : propertyKey;
        if (!target["__properties"]){
            target["__properties"] = {};
        }
        target["__properties"][name] = {
            propertyKey
        };
    }
    :(target: any, propertyKey: string)=>{
        let name = options && options.name ? options.name : propertyKey;
        if (!target["__properties"]){
            target["__properties"] = {};
        }
        target["__properties"][name] = {
            type: $typeof(type),
            options: options,
            key: propertyKey
        }
    }
}

