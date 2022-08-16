import { UnityEngine } from "csharp";
export declare abstract class Component {
    private _gameObject;
    get gameObject(): UnityEngine.GameObject;
    private _transform;
    get transform(): UnityEngine.Transform;
    protected Awake(): void;
    protected Start(): void;
    protected OnDestroy(): void;
    protected OnEnable(): void;
    protected OnDisable(): void;
}
