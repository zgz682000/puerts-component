import { System, UnityEngine } from "csharp";
import { $typeof } from "puerts";


export interface PropertyOptions {
    name: string;
}


export function Property(type: typeof System.Object, options?: PropertyOptions){
    return UnityEngine.Application.isPlaying ? 
    (target: any, propertyKey: string) => {}
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

