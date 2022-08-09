import { UnityEngine } from "csharp";


export abstract class Component {    

    public gameObject: UnityEngine.GameObject;
    public transform: UnityEngine.Transform;

    protected Awake(){

    }
    
    protected Start(){

    }

    protected OnDestroy(){

    }

    protected OnEnable(){

    }

    protected OnDisable(){
        
    }
}