import { System, UnityEngine } from "csharp";
import { $generic, $typeof } from "puerts";


export interface PropertyOptions {
    name?: string;
    toTsValue?: (csValue: any)=>any;
    [key: string]: any;
}

type PropertyType = typeof UnityEngine.Object 
    | typeof UnityEngine.Color 
    | typeof UnityEngine.Vector2 
    | typeof UnityEngine.Vector3 
    | typeof System.Int32 
    | typeof System.String 
    | typeof System.Boolean 
    | typeof System.Double 
    | typeof System.Single 
    | typeof System.Int64 

export function ListProperty(type: PropertyType | typeof System.Object, dimension: number = 1, options?: PropertyOptions){
    return !UnityEngine.Application.isEditor ? 
    (target: any, propertyKey: string)=>{
        let name = options && options.name ? options.name : propertyKey;
        if (!target["__properties"]){
            target["__properties"] = {};
        }
        target["__properties"][name] = {
            key: propertyKey
        };
        if (options && options.toTsValue){
            target["__properties"][name].toTsValue = options.toTsValue;
            delete options.toTsValue;
        }
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
        if (options && options.toTsValue){
            target["__properties"][name].toTsValue = options.toTsValue;
            delete options.toTsValue;
        }
    }
}

export function Property(type: PropertyType | typeof System.Object, options?: PropertyOptions){
    return !UnityEngine.Application.isEditor ? 
    (target: any, propertyKey: string)=>{
        let name = options && options.name ? options.name : propertyKey;
        if (!target["__properties"]){
            target["__properties"] = {};
        }
        target["__properties"][name] = {
            key: propertyKey
        };
        if (options && options.toTsValue){
            target["__properties"][name].toTsValue = options.toTsValue;
            delete options.toTsValue;
        }
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
        if (options && options.toTsValue){
            target["__properties"][name].toTsValue = options.toTsValue;
            delete options.toTsValue;
        }
    }
}

