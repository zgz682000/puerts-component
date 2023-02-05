import { UnityEngine } from "csharp";
export abstract class Component {    

    private _gameObject: UnityEngine.GameObject;
    public get gameObject(): UnityEngine.GameObject {
        return this._gameObject;
    }

    private _transform: UnityEngine.Transform
    public get transform(): UnityEngine.Transform {
        return this._transform;
    }

    protected Awake(){}
    protected Start(){}
    protected OnDestroy(){}
    protected OnEnable(){}
    protected OnDisable(){}
}