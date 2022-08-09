import { UnityEngine } from "csharp";
import { $typeof } from "puerts";

if (UnityEngine.Application.isEditor){
    try {
        require("./debug/source-map-init");
    } catch (error) {
        console.warn("source-map is not working");
    }
}

console.log("index running");

let testPrefab = UnityEngine.Resources.Load("Test", $typeof(UnityEngine.GameObject));
UnityEngine.Object.Instantiate(testPrefab);