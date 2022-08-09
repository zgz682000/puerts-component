import { System, UnityEngine } from "csharp";
import { $generic, $typeof } from "puerts";


export interface PropertyOptions {
    name: string;
}

function runtimeEmpty (){}

export function ListProperty(type: typeof System.Object, options?: PropertyOptions, dimension: number = 1){
    return UnityEngine.Application.isPlaying ? 
    runtimeEmpty
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
            options: options
        }
    }
}

export function Property(type: typeof System.Object, options?: PropertyOptions){
    return UnityEngine.Application.isPlaying ? 
    runtimeEmpty
    :(target: any, propertyKey: string)=>{
        let name = options && options.name ? options.name : propertyKey;
        if (!target["__properties"]){
            target["__properties"] = {};
        }
        target["__properties"][name] = {
            type: $typeof(type),
            options: options
        }
    }
}

