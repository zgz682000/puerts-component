import { UnityEngine } from "csharp";
import { Hook } from "./hook.deco.cjs";
export abstract class Component {    

    private _gameObject: UnityEngine.GameObject;
    public get gameObject(): UnityEngine.GameObject {
        return this._gameObject;
    }

    private _transform: UnityEngine.Transform
    public get transform(): UnityEngine.Transform {
        return this._transform;
    }

    @Hook()
    protected Awake(){}
    @Hook()
    protected Start(){}
    @Hook()
    protected OnDestroy(){}
    @Hook()
    protected OnEnable(){}
    @Hook()
    protected OnDisable(){}
}