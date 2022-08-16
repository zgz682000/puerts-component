import { DemoEntry, UnityEngine } from "csharp";
import { $typeof } from "puerts";

if (UnityEngine.Application.isEditor){
    try {
        require("./debug/source-map-init");
    } catch (error) {
        console.warn("source-map is not working");
    }
}

console.log("index running");

let demoEntryObj = UnityEngine.GameObject.Find("DemoEntry");
let demoEntry = demoEntryObj.GetComponent($typeof(DemoEntry)) as DemoEntry;
let testPrefab = demoEntry.testPrefab;
UnityEngine.Object.Instantiate(testPrefab);