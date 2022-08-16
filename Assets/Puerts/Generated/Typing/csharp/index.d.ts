
declare module 'csharp' {
    //keep type incompatibility / 此属性保持类型不兼容
    const __keep_incompatibility: unique symbol;
    namespace CSharp {
        interface $Ref<T> {
            value: T
        }
        namespace System {
            interface Array$1<T> extends System.Array {
                get_Item(index: number):T;
                set_Item(index: number, value: T):void;
            }
        }
        type $Task<T> = System.Threading.Tasks.Task$1<T>
            class DemoEntry extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
                public testPrefab : UnityEngine.GameObject
                public constructor ()
            }
            namespace UnityEngine {
            /** MonoBehaviour is the base class from which every Unity script derives. */
            class MonoBehaviour extends UnityEngine.Behaviour
            {
                protected [__keep_incompatibility]: never;
                /** Disabling this lets you skip the GUI layout phase. */
                public get useGUILayout(): boolean;
                public set useGUILayout(value: boolean);
                /** Allow a specific instance of a MonoBehaviour to run in edit mode (only available in the editor). */
                public get runInEditMode(): boolean;
                public set runInEditMode(value: boolean);
                public IsInvoking () : boolean
                public CancelInvoke () : void
                /** Invokes the method methodName in time seconds. */
                public Invoke ($methodName: string, $time: number) : void
                /** Invokes the method methodName in time seconds, then repeatedly every repeatRate seconds. */
                public InvokeRepeating ($methodName: string, $time: number, $repeatRate: number) : void
                /** Cancels all Invoke calls with name methodName on this behaviour. */
                public CancelInvoke ($methodName: string) : void
                /** Is any invoke on methodName pending? */
                public IsInvoking ($methodName: string) : boolean
                /** Starts a coroutine named methodName. */
                public StartCoroutine ($methodName: string) : UnityEngine.Coroutine
                /** Starts a coroutine named methodName. */
                public StartCoroutine ($methodName: string, $value: any) : UnityEngine.Coroutine
                /** Starts a Coroutine. */
                public StartCoroutine ($routine: System.Collections.IEnumerator) : UnityEngine.Coroutine
                /** Stops the first coroutine named methodName, or the coroutine stored in routine running on this behaviour. * @param methodName Name of coroutine.
                * @param routine Name of the function in code, including coroutines.
                */
                public StopCoroutine ($routine: System.Collections.IEnumerator) : void
                /** Stops the first coroutine named methodName, or the coroutine stored in routine running on this behaviour. * @param methodName Name of coroutine.
                * @param routine Name of the function in code, including coroutines.
                */
                public StopCoroutine ($routine: UnityEngine.Coroutine) : void
                /** Stops the first coroutine named methodName, or the coroutine stored in routine running on this behaviour. * @param methodName Name of coroutine.
                * @param routine Name of the function in code, including coroutines.
                */
                public StopCoroutine ($methodName: string) : void
                public StopAllCoroutines () : void
                /** Logs message to the Unity Console (identical to Debug.Log). */
                public static print ($message: any) : void
                public constructor ()
            }
            /** Behaviours are Components that can be enabled or disabled. */
            class Behaviour extends UnityEngine.Component
            {
                protected [__keep_incompatibility]: never;
                /** Enabled Behaviours are Updated, disabled Behaviours are not. */
                public get enabled(): boolean;
                public set enabled(value: boolean);
                /** Reports whether a GameObject and its associated Behaviour is active and enabled. */
                public get isActiveAndEnabled(): boolean;
                public constructor ()
            }
            /** Base class for everything attached to GameObjects. */
            class Component extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
                /** The Transform attached to this GameObject. */
                public get transform(): UnityEngine.Transform;
                /** The game object this component is attached to. A component is always attached to a game object. */
                public get gameObject(): UnityEngine.GameObject;
                /** The tag of this game object. */
                public get tag(): string;
                public set tag(value: string);
                /** Returns the component of type if the GameObject has one attached.
                * @param type The type of Component to retrieve.
                * @returns A Component of the matching type, otherwise null if no Component is found. 
                */
                public GetComponent ($type: System.Type) : UnityEngine.Component
                /** Gets the component of the specified type, if it exists.
                * @param type The type of the component to retrieve.
                * @param component The output argument that will contain the component or null.
                * @returns Returns true if the component is found, false otherwise. 
                */
                public TryGetComponent ($type: System.Type, $component: $Ref<UnityEngine.Component>) : boolean
                /** To improve the performance of your code, consider using GetComponent with a type instead of a string.
                * @param type The name of the type of Component to get.
                * @returns A Component of the matching type, otherwise null if no Component is found. 
                */
                public GetComponent ($type: string) : UnityEngine.Component
                /** Returns the Component of type in the GameObject or any of its children using depth first search.
                * @param t The type of Component to retrieve.
                * @param includeInactive Should Components on inactive GameObjects be included in the found set?
                * @returns A Component of the matching type, otherwise null if no Component is found. 
                */
                public GetComponentInChildren ($t: System.Type, $includeInactive: boolean) : UnityEngine.Component
                /** Returns the Component of type in the GameObject or any of its children using depth first search.
                * @param t The type of Component to retrieve.
                * @param includeInactive Should Components on inactive GameObjects be included in the found set?
                * @returns A Component of the matching type, otherwise null if no Component is found. 
                */
                public GetComponentInChildren ($t: System.Type) : UnityEngine.Component
                /** Returns all components of Type type in the GameObject or any of its children using depth first search. Works recursively. * @param t The type of Component to retrieve.
                * @param includeInactive Should Components on inactive GameObjects be included in the found set. includeInactive decides which children of the GameObject will be searched.  The GameObject that you call GetComponentsInChildren on is always searched regardless. Default is false.
                */
                public GetComponentsInChildren ($t: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
                public GetComponentsInChildren ($t: System.Type) : System.Array$1<UnityEngine.Component>
                /** Returns the Component of type in the GameObject or any of its parents.
                * @param t The type of Component to retrieve.
                * @param includeInactive Should Components on inactive GameObjects be included in the found set?
                * @returns A Component of the matching type, otherwise null if no Component is found. 
                */
                public GetComponentInParent ($t: System.Type, $includeInactive: boolean) : UnityEngine.Component
                /** Returns the Component of type in the GameObject or any of its parents.
                * @param t The type of Component to retrieve.
                * @param includeInactive Should Components on inactive GameObjects be included in the found set?
                * @returns A Component of the matching type, otherwise null if no Component is found. 
                */
                public GetComponentInParent ($t: System.Type) : UnityEngine.Component
                /** Returns all components of Type type in the GameObject or any of its parents. * @param t The type of Component to retrieve.
                * @param includeInactive Should inactive Components be included in the found set?
                */
                public GetComponentsInParent ($t: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
                public GetComponentsInParent ($t: System.Type) : System.Array$1<UnityEngine.Component>
                /** Returns all components of Type type in the GameObject. * @param type The type of Component to retrieve.
                */
                public GetComponents ($type: System.Type) : System.Array$1<UnityEngine.Component>
                public GetComponents ($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>) : void
                /** Checks the GameObject's tag against the defined tag.
                * @param tag The tag to compare.
                * @returns Returns true if GameObject has same tag. Returns false otherwise. 
                */
                public CompareTag ($tag: string) : boolean
                /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
                * @param value Optional parameter value for the method.
                * @param options Should an error be raised if the method does not exist on the target object?
                */
                public SendMessageUpwards ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
                * @param value Optional parameter value for the method.
                * @param options Should an error be raised if the method does not exist on the target object?
                */
                public SendMessageUpwards ($methodName: string, $value: any) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
                * @param value Optional parameter value for the method.
                * @param options Should an error be raised if the method does not exist on the target object?
                */
                public SendMessageUpwards ($methodName: string) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
                * @param value Optional parameter value for the method.
                * @param options Should an error be raised if the method does not exist on the target object?
                */
                public SendMessageUpwards ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
                * @param value Optional parameter for the method.
                * @param options Should an error be raised if the target object doesn't implement the method for the message?
                */
                public SendMessage ($methodName: string, $value: any) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
                * @param value Optional parameter for the method.
                * @param options Should an error be raised if the target object doesn't implement the method for the message?
                */
                public SendMessage ($methodName: string) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
                * @param value Optional parameter for the method.
                * @param options Should an error be raised if the target object doesn't implement the method for the message?
                */
                public SendMessage ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
                * @param value Optional parameter for the method.
                * @param options Should an error be raised if the target object doesn't implement the method for the message?
                */
                public SendMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
                * @param parameter Optional parameter to pass to the method (can be any value).
                * @param options Should an error be raised if the method does not exist for a given target object?
                */
                public BroadcastMessage ($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
                * @param parameter Optional parameter to pass to the method (can be any value).
                * @param options Should an error be raised if the method does not exist for a given target object?
                */
                public BroadcastMessage ($methodName: string, $parameter: any) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
                * @param parameter Optional parameter to pass to the method (can be any value).
                * @param options Should an error be raised if the method does not exist for a given target object?
                */
                public BroadcastMessage ($methodName: string) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
                * @param parameter Optional parameter to pass to the method (can be any value).
                * @param options Should an error be raised if the method does not exist for a given target object?
                */
                public BroadcastMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
                public constructor ()
            }
            /** Base class for all objects Unity can reference. */
            class Object extends System.Object
            {
                protected [__keep_incompatibility]: never;
                /** The name of the object. */
                public get name(): string;
                public set name(value: string);
                /** Should the object be hidden, saved with the Scene or modifiable by the user? */
                public get hideFlags(): UnityEngine.HideFlags;
                public set hideFlags(value: UnityEngine.HideFlags);
                public GetInstanceID () : number
                public static op_Implicit ($exists: UnityEngine.Object) : boolean
                /** Clones the object original and returns the clone.
                * @param original An existing object that you want to make a copy of.
                * @param position Position for the new object.
                * @param rotation Orientation of the new object.
                * @param parent Parent that will be assigned to the new object.
                * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
                * @returns The instantiated clone. 
                */
                public static Instantiate ($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : UnityEngine.Object
                /** Clones the object original and returns the clone.
                * @param original An existing object that you want to make a copy of.
                * @param position Position for the new object.
                * @param rotation Orientation of the new object.
                * @param parent Parent that will be assigned to the new object.
                * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
                * @returns The instantiated clone. 
                */
                public static Instantiate ($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $parent: UnityEngine.Transform) : UnityEngine.Object
                /** Clones the object original and returns the clone.
                * @param original An existing object that you want to make a copy of.
                * @param position Position for the new object.
                * @param rotation Orientation of the new object.
                * @param parent Parent that will be assigned to the new object.
                * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
                * @returns The instantiated clone. 
                */
                public static Instantiate ($original: UnityEngine.Object) : UnityEngine.Object
                /** Clones the object original and returns the clone.
                * @param original An existing object that you want to make a copy of.
                * @param position Position for the new object.
                * @param rotation Orientation of the new object.
                * @param parent Parent that will be assigned to the new object.
                * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
                * @returns The instantiated clone. 
                */
                public static Instantiate ($original: UnityEngine.Object, $parent: UnityEngine.Transform) : UnityEngine.Object
                /** Clones the object original and returns the clone.
                * @param original An existing object that you want to make a copy of.
                * @param position Position for the new object.
                * @param rotation Orientation of the new object.
                * @param parent Parent that will be assigned to the new object.
                * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
                * @returns The instantiated clone. 
                */
                public static Instantiate ($original: UnityEngine.Object, $parent: UnityEngine.Transform, $instantiateInWorldSpace: boolean) : UnityEngine.Object
                public static Instantiate ($original: UnityEngine.Object, $parent: UnityEngine.Transform, $worldPositionStays: boolean) : UnityEngine.Object
                /** Removes a GameObject, component or asset. * @param obj The object to destroy.
                * @param t The optional amount of time to delay before destroying the object.
                */
                public static Destroy ($obj: UnityEngine.Object, $t: number) : void
                /** Removes a GameObject, component or asset. * @param obj The object to destroy.
                * @param t The optional amount of time to delay before destroying the object.
                */
                public static Destroy ($obj: UnityEngine.Object) : void
                /** Destroys the object obj immediately. You are strongly recommended to use Destroy instead. * @param obj Object to be destroyed.
                * @param allowDestroyingAssets Set to true to allow assets to be destroyed.
                */
                public static DestroyImmediate ($obj: UnityEngine.Object, $allowDestroyingAssets: boolean) : void
                /** Destroys the object obj immediately. You are strongly recommended to use Destroy instead. * @param obj Object to be destroyed.
                * @param allowDestroyingAssets Set to true to allow assets to be destroyed.
                */
                public static DestroyImmediate ($obj: UnityEngine.Object) : void
                /** Gets a list of all loaded objects of Type type.
                * @param type The type of object to find.
                * @param includeInactive If true, components attached to inactive GameObjects are also included.
                * @returns The array of objects found matching the type specified. 
                */
                public static FindObjectsOfType ($type: System.Type) : System.Array$1<UnityEngine.Object>
                /** Gets a list of all loaded objects of Type type.
                * @param type The type of object to find.
                * @param includeInactive If true, components attached to inactive GameObjects are also included.
                * @returns The array of objects found matching the type specified. 
                */
                public static FindObjectsOfType ($type: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Object>
                /** Do not destroy the target Object when loading a new Scene. * @param target An Object not destroyed on Scene change.
                */
                public static DontDestroyOnLoad ($target: UnityEngine.Object) : void
                /** Returns the first active loaded object of Type type.
                * @param type The type of object to find.
                * @returns Object The first active loaded object that matches the specified type. It returns null if no Object matches the type. 
                */
                public static FindObjectOfType ($type: System.Type) : UnityEngine.Object
                /** Returns the first active loaded object of Type type.
                * @param type The type of object to find.
                * @returns Object The first active loaded object that matches the specified type. It returns null if no Object matches the type. 
                */
                public static FindObjectOfType ($type: System.Type, $includeInactive: boolean) : UnityEngine.Object
                public static op_Equality ($x: UnityEngine.Object, $y: UnityEngine.Object) : boolean
                public static op_Inequality ($x: UnityEngine.Object, $y: UnityEngine.Object) : boolean
                public constructor ()
            }
            /** Base class for all entities in Unity Scenes. */
            class GameObject extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
                /** The Transform attached to this GameObject. */
                public get transform(): UnityEngine.Transform;
                /** The layer the GameObject is in. */
                public get layer(): number;
                public set layer(value: number);
                /** The local active state of this GameObject. (Read Only) */
                public get activeSelf(): boolean;
                /** Defines whether the GameObject is active in the Scene. */
                public get activeInHierarchy(): boolean;
                /** Gets and sets the GameObject's StaticEditorFlags. */
                public get isStatic(): boolean;
                public set isStatic(value: boolean);
                /** The tag of this game object. */
                public get tag(): string;
                public set tag(value: string);
                /** Scene that the GameObject is part of. */
                public get scene(): UnityEngine.SceneManagement.Scene;
                /** Scene culling mask Unity uses to determine which scene to render the GameObject in. */
                public get sceneCullingMask(): bigint;
                public get gameObject(): UnityEngine.GameObject;
                /** Creates a game object with a primitive mesh renderer and appropriate collider. * @param type The type of primitive object to create.
                */
                public static CreatePrimitive ($type: UnityEngine.PrimitiveType) : UnityEngine.GameObject
                /** Returns the component of Type type if the game object has one attached, null if it doesn't. * @param type The type of Component to retrieve.
                */
                public GetComponent ($type: System.Type) : UnityEngine.Component
                /** Returns the component with name type if the GameObject has one attached, null if it doesn't. * @param type The type of Component to retrieve.
                */
                public GetComponent ($type: string) : UnityEngine.Component
                /** Returns the component of Type type in the GameObject or any of its children using depth first search.
                * @param type The type of Component to retrieve.
                * @returns A component of the matching type, if found. 
                */
                public GetComponentInChildren ($type: System.Type, $includeInactive: boolean) : UnityEngine.Component
                /** Returns the component of Type type in the GameObject or any of its children using depth first search.
                * @param type The type of Component to retrieve.
                * @returns A component of the matching type, if found. 
                */
                public GetComponentInChildren ($type: System.Type) : UnityEngine.Component
                /** Retrieves the component of Type type in the GameObject or any of its parents.
                * @param type Type of component to find.
                * @returns Returns a component if a component matching the type is found. Returns null otherwise. 
                */
                public GetComponentInParent ($type: System.Type, $includeInactive: boolean) : UnityEngine.Component
                /** Retrieves the component of Type type in the GameObject or any of its parents.
                * @param type Type of component to find.
                * @returns Returns a component if a component matching the type is found. Returns null otherwise. 
                */
                public GetComponentInParent ($type: System.Type) : UnityEngine.Component
                /** Returns all components of Type type in the GameObject. * @param type The type of component to retrieve.
                */
                public GetComponents ($type: System.Type) : System.Array$1<UnityEngine.Component>
                public GetComponents ($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>) : void
                /** Returns all components of Type type in the GameObject or any of its children children using depth first search. Works recursively. * @param type The type of Component to retrieve.
                * @param includeInactive Should Components on inactive GameObjects be included in the found set?
                */
                public GetComponentsInChildren ($type: System.Type) : System.Array$1<UnityEngine.Component>
                /** Returns all components of Type type in the GameObject or any of its children children using depth first search. Works recursively. * @param type The type of Component to retrieve.
                * @param includeInactive Should Components on inactive GameObjects be included in the found set?
                */
                public GetComponentsInChildren ($type: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
                public GetComponentsInParent ($type: System.Type) : System.Array$1<UnityEngine.Component>
                /** Returns all components of Type type in the GameObject or any of its parents. * @param type The type of Component to retrieve.
                * @param includeInactive Should inactive Components be included in the found set?
                */
                public GetComponentsInParent ($type: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
                /** Gets the component of the specified type, if it exists.
                * @param type The type of component to retrieve.
                * @param component The output argument that will contain the component or null.
                * @returns Returns true if the component is found, false otherwise. 
                */
                public TryGetComponent ($type: System.Type, $component: $Ref<UnityEngine.Component>) : boolean
                /** Returns one active GameObject tagged tag. Returns null if no GameObject was found. * @param tag The tag to search for.
                */
                public static FindWithTag ($tag: string) : UnityEngine.GameObject
                public SendMessageUpwards ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
                public SendMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
                public BroadcastMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
                /** Adds a component class of type componentType to the game object. C# Users can use a generic version. */
                public AddComponent ($componentType: System.Type) : UnityEngine.Component
                /** ActivatesDeactivates the GameObject, depending on the given true or false/ value. * @param value Activate or deactivate the object, where true activates the GameObject and false deactivates the GameObject.
                */
                public SetActive ($value: boolean) : void
                /** Is this game object tagged with tag ? * @param tag The tag to compare.
                */
                public CompareTag ($tag: string) : boolean
                public static FindGameObjectWithTag ($tag: string) : UnityEngine.GameObject
                /** Returns an array of active GameObjects tagged tag. Returns empty array if no GameObject was found. * @param tag The name of the tag to search GameObjects for.
                */
                public static FindGameObjectsWithTag ($tag: string) : System.Array$1<UnityEngine.GameObject>
                /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName The name of the method to call.
                * @param value An optional parameter value to pass to the called method.
                * @param options Should an error be raised if the method doesn't exist on the target object?
                */
                public SendMessageUpwards ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName The name of the method to call.
                * @param value An optional parameter value to pass to the called method.
                * @param options Should an error be raised if the method doesn't exist on the target object?
                */
                public SendMessageUpwards ($methodName: string, $value: any) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName The name of the method to call.
                * @param value An optional parameter value to pass to the called method.
                * @param options Should an error be raised if the method doesn't exist on the target object?
                */
                public SendMessageUpwards ($methodName: string) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName The name of the method to call.
                * @param value An optional parameter value to pass to the called method.
                * @param options Should an error be raised if the method doesn't exist on the target object?
                */
                public SendMessage ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName The name of the method to call.
                * @param value An optional parameter value to pass to the called method.
                * @param options Should an error be raised if the method doesn't exist on the target object?
                */
                public SendMessage ($methodName: string, $value: any) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName The name of the method to call.
                * @param value An optional parameter value to pass to the called method.
                * @param options Should an error be raised if the method doesn't exist on the target object?
                */
                public SendMessage ($methodName: string) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. */
                public BroadcastMessage ($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. */
                public BroadcastMessage ($methodName: string, $parameter: any) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. */
                public BroadcastMessage ($methodName: string) : void
                /** Finds a GameObject by name and returns it. */
                public static Find ($name: string) : UnityEngine.GameObject
                public constructor ($name: string)
                public constructor ()
                public constructor ($name: string, ...components: System.Type[])
            }
            /** Representation of RGBA colors. */
            class Color extends System.ValueType implements System.IEquatable$1<UnityEngine.Color>, System.IFormattable
            {
                protected [__keep_incompatibility]: never;
                /** Red component of the color. */
                public r : number/** Green component of the color. */
                public g : number/** Blue component of the color. */
                public b : number/** Alpha component of the color (0 is transparent, 1 is opaque). */
                public a : number/** Solid red. RGBA is (1, 0, 0, 1). */
                public static get red(): UnityEngine.Color;
                /** Solid green. RGBA is (0, 1, 0, 1). */
                public static get green(): UnityEngine.Color;
                /** Solid blue. RGBA is (0, 0, 1, 1). */
                public static get blue(): UnityEngine.Color;
                /** Solid white. RGBA is (1, 1, 1, 1). */
                public static get white(): UnityEngine.Color;
                /** Solid black. RGBA is (0, 0, 0, 1). */
                public static get black(): UnityEngine.Color;
                /** Yellow. RGBA is (1, 0.92, 0.016, 1), but the color is nice to look at! */
                public static get yellow(): UnityEngine.Color;
                /** Cyan. RGBA is (0, 1, 1, 1). */
                public static get cyan(): UnityEngine.Color;
                /** Magenta. RGBA is (1, 0, 1, 1). */
                public static get magenta(): UnityEngine.Color;
                /** Gray. RGBA is (0.5, 0.5, 0.5, 1). */
                public static get gray(): UnityEngine.Color;
                /** English spelling for gray. RGBA is the same (0.5, 0.5, 0.5, 1). */
                public static get grey(): UnityEngine.Color;
                /** Completely transparent. RGBA is (0, 0, 0, 0). */
                public static get clear(): UnityEngine.Color;
                /** The grayscale value of the color. (Read Only) */
                public get grayscale(): number;
                /** A linear value of an sRGB color. */
                public get linear(): UnityEngine.Color;
                /** A version of the color that has had the gamma curve applied. */
                public get gamma(): UnityEngine.Color;
                /** Returns the maximum color component value: Max(r,g,b). */
                public get maxColorComponent(): number;
                public ToString () : string
                /** Returns a formatted string of this color. * @param format A numeric format string.
                * @param formatProvider An object that specifies culture-specific formatting.
                */
                public ToString ($format: string) : string
                /** Returns a formatted string of this color. * @param format A numeric format string.
                * @param formatProvider An object that specifies culture-specific formatting.
                */
                public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
                public Equals ($other: any) : boolean
                public Equals ($other: UnityEngine.Color) : boolean
                public static op_Addition ($a: UnityEngine.Color, $b: UnityEngine.Color) : UnityEngine.Color
                public static op_Subtraction ($a: UnityEngine.Color, $b: UnityEngine.Color) : UnityEngine.Color
                public static op_Multiply ($a: UnityEngine.Color, $b: UnityEngine.Color) : UnityEngine.Color
                public static op_Multiply ($a: UnityEngine.Color, $b: number) : UnityEngine.Color
                public static op_Multiply ($b: number, $a: UnityEngine.Color) : UnityEngine.Color
                public static op_Division ($a: UnityEngine.Color, $b: number) : UnityEngine.Color
                public static op_Equality ($lhs: UnityEngine.Color, $rhs: UnityEngine.Color) : boolean
                public static op_Inequality ($lhs: UnityEngine.Color, $rhs: UnityEngine.Color) : boolean
                /** Linearly interpolates between colors a and b by t. * @param a Color a.
                * @param b Color b.
                * @param t Float for combining a and b.
                */
                public static Lerp ($a: UnityEngine.Color, $b: UnityEngine.Color, $t: number) : UnityEngine.Color
                /** Linearly interpolates between colors a and b by t. */
                public static LerpUnclamped ($a: UnityEngine.Color, $b: UnityEngine.Color, $t: number) : UnityEngine.Color
                public static op_Implicit ($c: UnityEngine.Color) : UnityEngine.Vector4
                public static op_Implicit ($v: UnityEngine.Vector4) : UnityEngine.Color
                public get_Item ($index: number) : number
                public set_Item ($index: number, $value: number) : void
                /** Calculates the hue, saturation and value of an RGB input color. * @param rgbColor An input color.
                * @param H Output variable for hue.
                * @param S Output variable for saturation.
                * @param V Output variable for value.
                */
                public static RGBToHSV ($rgbColor: UnityEngine.Color, $H: $Ref<number>, $S: $Ref<number>, $V: $Ref<number>) : void
                /** Creates an RGB colour from HSV input.
                * @param H Hue [0..1].
                * @param S Saturation [0..1].
                * @param V Brightness value [0..1].
                * @param hdr Output HDR colours. If true, the returned colour will not be clamped to [0..1].
                * @returns An opaque colour with HSV matching the input. 
                */
                public static HSVToRGB ($H: number, $S: number, $V: number) : UnityEngine.Color
                /** Creates an RGB colour from HSV input.
                * @param H Hue [0..1].
                * @param S Saturation [0..1].
                * @param V Brightness value [0..1].
                * @param hdr Output HDR colours. If true, the returned colour will not be clamped to [0..1].
                * @returns An opaque colour with HSV matching the input. 
                */
                public static HSVToRGB ($H: number, $S: number, $V: number, $hdr: boolean) : UnityEngine.Color
                public constructor ($r: number, $g: number, $b: number, $a: number)
                public constructor ($r: number, $g: number, $b: number)
                public Equals ($obj: any) : boolean
                public static Equals ($objA: any, $objB: any) : boolean
                public constructor ()
            }
            /** Representation of 2D vectors and points. */
            class Vector2 extends System.ValueType implements System.IEquatable$1<UnityEngine.Vector2>, System.IFormattable
            {
                protected [__keep_incompatibility]: never;
                /** X component of the vector. */
                public x : number/** Y component of the vector. */
                public y : number
                public static kEpsilon : number
                public static kEpsilonNormalSqrt : number/** Returns this vector with a magnitude of 1 (Read Only). */
                public get normalized(): UnityEngine.Vector2;
                /** Returns the length of this vector (Read Only). */
                public get magnitude(): number;
                /** Returns the squared length of this vector (Read Only). */
                public get sqrMagnitude(): number;
                /** Shorthand for writing Vector2(0, 0). */
                public static get zero(): UnityEngine.Vector2;
                /** Shorthand for writing Vector2(1, 1). */
                public static get one(): UnityEngine.Vector2;
                /** Shorthand for writing Vector2(0, 1). */
                public static get up(): UnityEngine.Vector2;
                /** Shorthand for writing Vector2(0, -1). */
                public static get down(): UnityEngine.Vector2;
                /** Shorthand for writing Vector2(-1, 0). */
                public static get left(): UnityEngine.Vector2;
                /** Shorthand for writing Vector2(1, 0). */
                public static get right(): UnityEngine.Vector2;
                /** Shorthand for writing Vector2(float.PositiveInfinity, float.PositiveInfinity). */
                public static get positiveInfinity(): UnityEngine.Vector2;
                /** Shorthand for writing Vector2(float.NegativeInfinity, float.NegativeInfinity). */
                public static get negativeInfinity(): UnityEngine.Vector2;
                public get_Item ($index: number) : number
                public set_Item ($index: number, $value: number) : void
                /** Set x and y components of an existing Vector2. */
                public Set ($newX: number, $newY: number) : void
                /** Linearly interpolates between vectors a and b by t. */
                public static Lerp ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2, $t: number) : UnityEngine.Vector2
                /** Linearly interpolates between vectors a and b by t. */
                public static LerpUnclamped ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2, $t: number) : UnityEngine.Vector2
                /** Moves a point current towards target. */
                public static MoveTowards ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $maxDistanceDelta: number) : UnityEngine.Vector2
                /** Multiplies two vectors component-wise. */
                public static Scale ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
                /** Multiplies every component of this vector by the same component of scale. */
                public Scale ($scale: UnityEngine.Vector2) : void
                public Normalize () : void
                public ToString () : string
                /** Returns a formatted string for this vector. * @param format A numeric format string.
                * @param formatProvider An object that specifies culture-specific formatting.
                */
                public ToString ($format: string) : string
                /** Returns a formatted string for this vector. * @param format A numeric format string.
                * @param formatProvider An object that specifies culture-specific formatting.
                */
                public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
                /** Returns true if the given vector is exactly equal to this vector. */
                public Equals ($other: any) : boolean
                public Equals ($other: UnityEngine.Vector2) : boolean
                /** Reflects a vector off the vector defined by a normal. */
                public static Reflect ($inDirection: UnityEngine.Vector2, $inNormal: UnityEngine.Vector2) : UnityEngine.Vector2
                /** Returns the 2D vector perpendicular to this 2D vector. The result is always rotated 90-degrees in a counter-clockwise direction for a 2D coordinate system where the positive Y axis goes up.
                * @param inDirection The input direction.
                * @returns The perpendicular direction. 
                */
                public static Perpendicular ($inDirection: UnityEngine.Vector2) : UnityEngine.Vector2
                /** Dot Product of two vectors. */
                public static Dot ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : number
                /** Gets the unsigned angle in degrees between from and to.
                * @param from The vector from which the angular difference is measured.
                * @param to The vector to which the angular difference is measured.
                * @returns The unsigned angle in degrees between the two vectors. 
                */
                public static Angle ($from: UnityEngine.Vector2, $to: UnityEngine.Vector2) : number
                /** Gets the signed angle in degrees between from and to.
                * @param from The vector from which the angular difference is measured.
                * @param to The vector to which the angular difference is measured.
                * @returns The signed angle in degrees between the two vectors. 
                */
                public static SignedAngle ($from: UnityEngine.Vector2, $to: UnityEngine.Vector2) : number
                /** Returns the distance between a and b. */
                public static Distance ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : number
                /** Returns a copy of vector with its magnitude clamped to maxLength. */
                public static ClampMagnitude ($vector: UnityEngine.Vector2, $maxLength: number) : UnityEngine.Vector2
                public static SqrMagnitude ($a: UnityEngine.Vector2) : number
                public SqrMagnitude () : number
                /** Returns a vector that is made from the smallest components of two vectors. */
                public static Min ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : UnityEngine.Vector2
                /** Returns a vector that is made from the largest components of two vectors. */
                public static Max ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : UnityEngine.Vector2
                /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
                * @param target The position we are trying to reach.
                * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
                * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
                * @param maxSpeed Optionally allows you to clamp the maximum speed.
                * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
                */
                public static SmoothDamp ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number, $maxSpeed: number) : UnityEngine.Vector2
                /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
                * @param target The position we are trying to reach.
                * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
                * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
                * @param maxSpeed Optionally allows you to clamp the maximum speed.
                * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
                */
                public static SmoothDamp ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number) : UnityEngine.Vector2
                /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
                * @param target The position we are trying to reach.
                * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
                * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
                * @param maxSpeed Optionally allows you to clamp the maximum speed.
                * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
                */
                public static SmoothDamp ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number, $maxSpeed: number, $deltaTime: number) : UnityEngine.Vector2
                public static op_Addition ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
                public static op_Subtraction ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
                public static op_Multiply ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
                public static op_Division ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
                public static op_UnaryNegation ($a: UnityEngine.Vector2) : UnityEngine.Vector2
                public static op_Multiply ($a: UnityEngine.Vector2, $d: number) : UnityEngine.Vector2
                public static op_Multiply ($d: number, $a: UnityEngine.Vector2) : UnityEngine.Vector2
                public static op_Division ($a: UnityEngine.Vector2, $d: number) : UnityEngine.Vector2
                public static op_Equality ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : boolean
                public static op_Inequality ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : boolean
                public static op_Implicit ($v: UnityEngine.Vector3) : UnityEngine.Vector2
                public static op_Implicit ($v: UnityEngine.Vector2) : UnityEngine.Vector3
                public constructor ($x: number, $y: number)
                public Equals ($obj: any) : boolean
                public static Equals ($objA: any, $objB: any) : boolean
                public constructor ()
            }
            /** Representation of 3D vectors and points. */
            class Vector3 extends System.ValueType implements System.IEquatable$1<UnityEngine.Vector3>, System.IFormattable
            {
                protected [__keep_incompatibility]: never;
                public static kEpsilon : number
                public static kEpsilonNormalSqrt : number/** X component of the vector. */
                public x : number/** Y component of the vector. */
                public y : number/** Z component of the vector. */
                public z : number/** Returns this vector with a magnitude of 1 (Read Only). */
                public get normalized(): UnityEngine.Vector3;
                /** Returns the length of this vector (Read Only). */
                public get magnitude(): number;
                /** Returns the squared length of this vector (Read Only). */
                public get sqrMagnitude(): number;
                /** Shorthand for writing Vector3(0, 0, 0). */
                public static get zero(): UnityEngine.Vector3;
                /** Shorthand for writing Vector3(1, 1, 1). */
                public static get one(): UnityEngine.Vector3;
                /** Shorthand for writing Vector3(0, 0, 1). */
                public static get forward(): UnityEngine.Vector3;
                /** Shorthand for writing Vector3(0, 0, -1). */
                public static get back(): UnityEngine.Vector3;
                /** Shorthand for writing Vector3(0, 1, 0). */
                public static get up(): UnityEngine.Vector3;
                /** Shorthand for writing Vector3(0, -1, 0). */
                public static get down(): UnityEngine.Vector3;
                /** Shorthand for writing Vector3(-1, 0, 0). */
                public static get left(): UnityEngine.Vector3;
                /** Shorthand for writing Vector3(1, 0, 0). */
                public static get right(): UnityEngine.Vector3;
                /** Shorthand for writing Vector3(float.PositiveInfinity, float.PositiveInfinity, float.PositiveInfinity). */
                public static get positiveInfinity(): UnityEngine.Vector3;
                /** Shorthand for writing Vector3(float.NegativeInfinity, float.NegativeInfinity, float.NegativeInfinity). */
                public static get negativeInfinity(): UnityEngine.Vector3;
                /** Linearly interpolates between two points.
                * @param a Start value, returned when t = 0.
                * @param b End value, returned when t = 1.
                * @param t Value used to interpolate between a and b.
                * @returns Interpolated value, equals to a + (b - a) * t. 
                */
                public static Lerp ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
                /** Linearly interpolates between two vectors. */
                public static LerpUnclamped ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
                /** Calculate a position between the points specified by current and target, moving no farther than the distance specified by maxDistanceDelta.
                * @param current The position to move from.
                * @param target The position to move towards.
                * @param maxDistanceDelta Distance to move current per call.
                * @returns The new position. 
                */
                public static MoveTowards ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $maxDistanceDelta: number) : UnityEngine.Vector3
                /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
                * @param target The position we are trying to reach.
                * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
                * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
                * @param maxSpeed Optionally allows you to clamp the maximum speed.
                * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
                */
                public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number, $maxSpeed: number) : UnityEngine.Vector3
                /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
                * @param target The position we are trying to reach.
                * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
                * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
                * @param maxSpeed Optionally allows you to clamp the maximum speed.
                * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
                */
                public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number) : UnityEngine.Vector3
                /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
                * @param target The position we are trying to reach.
                * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
                * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
                * @param maxSpeed Optionally allows you to clamp the maximum speed.
                * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
                */
                public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number, $maxSpeed: number, $deltaTime: number) : UnityEngine.Vector3
                public get_Item ($index: number) : number
                public set_Item ($index: number, $value: number) : void
                /** Set x, y and z components of an existing Vector3. */
                public Set ($newX: number, $newY: number, $newZ: number) : void
                /** Multiplies two vectors component-wise. */
                public static Scale ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Multiplies every component of this vector by the same component of scale. */
                public Scale ($scale: UnityEngine.Vector3) : void
                /** Cross Product of two vectors. */
                public static Cross ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Returns true if the given vector is exactly equal to this vector. */
                public Equals ($other: any) : boolean
                public Equals ($other: UnityEngine.Vector3) : boolean
                /** Reflects a vector off the plane defined by a normal. */
                public static Reflect ($inDirection: UnityEngine.Vector3, $inNormal: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Makes this vector have a magnitude of 1. */
                public static Normalize ($value: UnityEngine.Vector3) : UnityEngine.Vector3
                public Normalize () : void
                /** Dot Product of two vectors. */
                public static Dot ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : number
                /** Projects a vector onto another vector. */
                public static Project ($vector: UnityEngine.Vector3, $onNormal: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Projects a vector onto a plane defined by a normal orthogonal to the plane.
                * @param planeNormal The direction from the vector towards the plane.
                * @param vector The location of the vector above the plane.
                * @returns The location of the vector on the plane. 
                */
                public static ProjectOnPlane ($vector: UnityEngine.Vector3, $planeNormal: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Calculates the angle between vectors from and.
                * @param from The vector from which the angular difference is measured.
                * @param to The vector to which the angular difference is measured.
                * @returns The angle in degrees between the two vectors. 
                */
                public static Angle ($from: UnityEngine.Vector3, $to: UnityEngine.Vector3) : number
                /** Calculates the signed angle between vectors from and to in relation to axis.
                * @param from The vector from which the angular difference is measured.
                * @param to The vector to which the angular difference is measured.
                * @param axis A vector around which the other vectors are rotated.
                * @returns Returns the signed angle between from and to in degrees. 
                */
                public static SignedAngle ($from: UnityEngine.Vector3, $to: UnityEngine.Vector3, $axis: UnityEngine.Vector3) : number
                /** Returns the distance between a and b. */
                public static Distance ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : number
                /** Returns a copy of vector with its magnitude clamped to maxLength. */
                public static ClampMagnitude ($vector: UnityEngine.Vector3, $maxLength: number) : UnityEngine.Vector3
                public static Magnitude ($vector: UnityEngine.Vector3) : number
                public static SqrMagnitude ($vector: UnityEngine.Vector3) : number
                /** Returns a vector that is made from the smallest components of two vectors. */
                public static Min ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Returns a vector that is made from the largest components of two vectors. */
                public static Max ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
                public static op_Addition ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
                public static op_Subtraction ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
                public static op_UnaryNegation ($a: UnityEngine.Vector3) : UnityEngine.Vector3
                public static op_Multiply ($a: UnityEngine.Vector3, $d: number) : UnityEngine.Vector3
                public static op_Multiply ($d: number, $a: UnityEngine.Vector3) : UnityEngine.Vector3
                public static op_Division ($a: UnityEngine.Vector3, $d: number) : UnityEngine.Vector3
                public static op_Equality ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : boolean
                public static op_Inequality ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : boolean
                public ToString () : string
                /** Returns a formatted string for this vector. * @param format A numeric format string.
                * @param formatProvider An object that specifies culture-specific formatting.
                */
                public ToString ($format: string) : string
                /** Returns a formatted string for this vector. * @param format A numeric format string.
                * @param formatProvider An object that specifies culture-specific formatting.
                */
                public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
                /** Spherically interpolates between two vectors. */
                public static Slerp ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
                /** Spherically interpolates between two vectors. */
                public static SlerpUnclamped ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
                /** Makes vectors normalized and orthogonal to each other. */
                public static OrthoNormalize ($normal: $Ref<UnityEngine.Vector3>, $tangent: $Ref<UnityEngine.Vector3>) : void
                /** Makes vectors normalized and orthogonal to each other. */
                public static OrthoNormalize ($normal: $Ref<UnityEngine.Vector3>, $tangent: $Ref<UnityEngine.Vector3>, $binormal: $Ref<UnityEngine.Vector3>) : void
                /** Rotates a vector current towards target.
                * @param current The vector being managed.
                * @param target The vector.
                * @param maxRadiansDelta The maximum angle in radians allowed for this rotation.
                * @param maxMagnitudeDelta The maximum allowed change in vector magnitude for this rotation.
                * @returns The location that RotateTowards generates. 
                */
                public static RotateTowards ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $maxRadiansDelta: number, $maxMagnitudeDelta: number) : UnityEngine.Vector3
                public constructor ($x: number, $y: number, $z: number)
                public constructor ($x: number, $y: number)
                public Equals ($obj: any) : boolean
                public static Equals ($objA: any, $objB: any) : boolean
                public constructor ()
            }
            /** A class you can derive from if you want to create objects that don't need to be attached to game objects. */
            class ScriptableObject extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** A Camera is a device through which the player views the world. */
            class Camera extends UnityEngine.Behaviour
            {
                protected [__keep_incompatibility]: never;
                /** Delegate that you can use to execute custom code before a Camera culls the scene. */
                public static onPreCull : UnityEngine.Camera.CameraCallback/** Delegate that you can use to execute custom code before a Camera renders the scene. */
                public static onPreRender : UnityEngine.Camera.CameraCallback/** Delegate that you can use to execute custom code after a Camera renders the scene. */
                public static onPostRender : UnityEngine.Camera.CameraCallback/** The distance of the near clipping plane from the the Camera, in world units. */
                public get nearClipPlane(): number;
                public set nearClipPlane(value: number);
                /** The distance of the far clipping plane from the Camera, in world units. */
                public get farClipPlane(): number;
                public set farClipPlane(value: number);
                /** The vertical field of view of the Camera, in degrees. */
                public get fieldOfView(): number;
                public set fieldOfView(value: number);
                /** The rendering path that should be used, if possible. */
                public get renderingPath(): UnityEngine.RenderingPath;
                public set renderingPath(value: UnityEngine.RenderingPath);
                /** The rendering path that is currently being used (Read Only). */
                public get actualRenderingPath(): UnityEngine.RenderingPath;
                /** High dynamic range rendering. */
                public get allowHDR(): boolean;
                public set allowHDR(value: boolean);
                /** MSAA rendering. */
                public get allowMSAA(): boolean;
                public set allowMSAA(value: boolean);
                /** Dynamic Resolution Scaling. */
                public get allowDynamicResolution(): boolean;
                public set allowDynamicResolution(value: boolean);
                /** Should camera rendering be forced into a RenderTexture. */
                public get forceIntoRenderTexture(): boolean;
                public set forceIntoRenderTexture(value: boolean);
                /** Camera's half-size when in orthographic mode. */
                public get orthographicSize(): number;
                public set orthographicSize(value: number);
                /** Is the camera orthographic (true) or perspective (false)? */
                public get orthographic(): boolean;
                public set orthographic(value: boolean);
                /** Opaque object sorting mode. */
                public get opaqueSortMode(): UnityEngine.Rendering.OpaqueSortMode;
                public set opaqueSortMode(value: UnityEngine.Rendering.OpaqueSortMode);
                /** Transparent object sorting mode. */
                public get transparencySortMode(): UnityEngine.TransparencySortMode;
                public set transparencySortMode(value: UnityEngine.TransparencySortMode);
                /** An axis that describes the direction along which the distances of objects are measured for the purpose of sorting. */
                public get transparencySortAxis(): UnityEngine.Vector3;
                public set transparencySortAxis(value: UnityEngine.Vector3);
                /** Camera's depth in the camera rendering order. */
                public get depth(): number;
                public set depth(value: number);
                /** The aspect ratio (width divided by height). */
                public get aspect(): number;
                public set aspect(value: number);
                /** Get the world-space speed of the camera (Read Only). */
                public get velocity(): UnityEngine.Vector3;
                /** This is used to render parts of the Scene selectively. */
                public get cullingMask(): number;
                public set cullingMask(value: number);
                /** Mask to select which layers can trigger events on the camera. */
                public get eventMask(): number;
                public set eventMask(value: number);
                /** How to perform per-layer culling for a Camera. */
                public get layerCullSpherical(): boolean;
                public set layerCullSpherical(value: boolean);
                /** Identifies what kind of camera this is, using the CameraType enum. */
                public get cameraType(): UnityEngine.CameraType;
                public set cameraType(value: UnityEngine.CameraType);
                /** Sets the culling maks used to determine which objects from which Scenes to draw.
                See EditorSceneManager.SetSceneCullingMask. */
                public get overrideSceneCullingMask(): bigint;
                public set overrideSceneCullingMask(value: bigint);
                /** Per-layer culling distances. */
                public get layerCullDistances(): System.Array$1<number>;
                public set layerCullDistances(value: System.Array$1<number>);
                /** Whether or not the Camera will use occlusion culling during rendering. */
                public get useOcclusionCulling(): boolean;
                public set useOcclusionCulling(value: boolean);
                /** Sets a custom matrix for the camera to use for all culling queries. */
                public get cullingMatrix(): UnityEngine.Matrix4x4;
                public set cullingMatrix(value: UnityEngine.Matrix4x4);
                /** The color with which the screen will be cleared. */
                public get backgroundColor(): UnityEngine.Color;
                public set backgroundColor(value: UnityEngine.Color);
                /** How the camera clears the background. */
                public get clearFlags(): UnityEngine.CameraClearFlags;
                public set clearFlags(value: UnityEngine.CameraClearFlags);
                /** How and if camera generates a depth texture. */
                public get depthTextureMode(): UnityEngine.DepthTextureMode;
                public set depthTextureMode(value: UnityEngine.DepthTextureMode);
                /** Should the camera clear the stencil buffer after the deferred light pass? */
                public get clearStencilAfterLightingPass(): boolean;
                public set clearStencilAfterLightingPass(value: boolean);
                /** Enable [UsePhysicalProperties] to use physical camera properties to compute the field of view and the frustum. */
                public get usePhysicalProperties(): boolean;
                public set usePhysicalProperties(value: boolean);
                /** The size of the camera sensor, expressed in millimeters. */
                public get sensorSize(): UnityEngine.Vector2;
                public set sensorSize(value: UnityEngine.Vector2);
                /** The lens offset of the camera. The lens shift is relative to the sensor size. For example, a lens shift of 0.5 offsets the sensor by half its horizontal size. */
                public get lensShift(): UnityEngine.Vector2;
                public set lensShift(value: UnityEngine.Vector2);
                /** The camera focal length, expressed in millimeters. To use this property, enable UsePhysicalProperties. */
                public get focalLength(): number;
                public set focalLength(value: number);
                /** There are two gates for a camera, the sensor gate and the resolution gate. The physical camera sensor gate is defined by the sensorSize property, the resolution gate is defined by the render target area. */
                public get gateFit(): UnityEngine.Camera.GateFitMode;
                public set gateFit(value: UnityEngine.Camera.GateFitMode);
                /** Where on the screen is the camera rendered in normalized coordinates. */
                public get rect(): UnityEngine.Rect;
                public set rect(value: UnityEngine.Rect);
                /** Where on the screen is the camera rendered in pixel coordinates. */
                public get pixelRect(): UnityEngine.Rect;
                public set pixelRect(value: UnityEngine.Rect);
                /** How wide is the camera in pixels (not accounting for dynamic resolution scaling) (Read Only). */
                public get pixelWidth(): number;
                /** How tall is the camera in pixels (not accounting for dynamic resolution scaling) (Read Only). */
                public get pixelHeight(): number;
                /** How wide is the camera in pixels (accounting for dynamic resolution scaling) (Read Only). */
                public get scaledPixelWidth(): number;
                /** How tall is the camera in pixels (accounting for dynamic resolution scaling) (Read Only). */
                public get scaledPixelHeight(): number;
                /** Destination render texture. */
                public get targetTexture(): UnityEngine.RenderTexture;
                public set targetTexture(value: UnityEngine.RenderTexture);
                /** Gets the temporary RenderTexture target for this Camera. */
                public get activeTexture(): UnityEngine.RenderTexture;
                /** Set the target display for this Camera. */
                public get targetDisplay(): number;
                public set targetDisplay(value: number);
                /** Matrix that transforms from camera space to world space (Read Only). */
                public get cameraToWorldMatrix(): UnityEngine.Matrix4x4;
                /** Matrix that transforms from world to camera space. */
                public get worldToCameraMatrix(): UnityEngine.Matrix4x4;
                public set worldToCameraMatrix(value: UnityEngine.Matrix4x4);
                /** Set a custom projection matrix. */
                public get projectionMatrix(): UnityEngine.Matrix4x4;
                public set projectionMatrix(value: UnityEngine.Matrix4x4);
                /** Get or set the raw projection matrix with no camera offset (no jittering). */
                public get nonJitteredProjectionMatrix(): UnityEngine.Matrix4x4;
                public set nonJitteredProjectionMatrix(value: UnityEngine.Matrix4x4);
                /** Should the jittered matrix be used for transparency rendering? */
                public get useJitteredProjectionMatrixForTransparentRendering(): boolean;
                public set useJitteredProjectionMatrixForTransparentRendering(value: boolean);
                /** Get the view projection matrix used on the last frame. */
                public get previousViewProjectionMatrix(): UnityEngine.Matrix4x4;
                /** The first enabled Camera component that is tagged "MainCamera" (Read Only). */
                public static get main(): UnityEngine.Camera;
                /** The camera we are currently rendering with, for low-level render control only (Read Only). */
                public static get current(): UnityEngine.Camera;
                /** If not null, the camera will only render the contents of the specified Scene. */
                public get scene(): UnityEngine.SceneManagement.Scene;
                public set scene(value: UnityEngine.SceneManagement.Scene);
                /** Stereoscopic rendering. */
                public get stereoEnabled(): boolean;
                /** The distance between the virtual eyes. Use this to query or set the current eye separation. Note that most VR devices provide this value, in which case setting the value will have no effect. */
                public get stereoSeparation(): number;
                public set stereoSeparation(value: number);
                /** Distance to a point where virtual eyes converge. */
                public get stereoConvergence(): number;
                public set stereoConvergence(value: number);
                /** Determines whether the stereo view matrices are suitable to allow for a single pass cull. */
                public get areVRStereoViewMatricesWithinSingleCullTolerance(): boolean;
                /** Defines which eye of a VR display the Camera renders into. */
                public get stereoTargetEye(): UnityEngine.StereoTargetEyeMask;
                public set stereoTargetEye(value: UnityEngine.StereoTargetEyeMask);
                /** Returns the eye that is currently rendering.
                If called when stereo is not enabled it will return Camera.MonoOrStereoscopicEye.Mono.
                If called during a camera rendering callback such as OnRenderImage it will return the currently rendering eye.
                If called outside of a rendering callback and stereo is enabled, it will return the default eye which is Camera.MonoOrStereoscopicEye.Left. */
                public get stereoActiveEye(): UnityEngine.Camera.MonoOrStereoscopicEye;
                /** The number of cameras in the current Scene. */
                public static get allCamerasCount(): number;
                /** Returns all enabled cameras in the Scene. */
                public static get allCameras(): System.Array$1<UnityEngine.Camera>;
                public get sceneViewFilterMode(): UnityEngine.Camera.SceneViewFilterMode;
                /** Number of command buffers set up on this camera (Read Only). */
                public get commandBufferCount(): number;
                public Reset () : void
                public ResetTransparencySortSettings () : void
                public ResetAspect () : void
                public ResetCullingMatrix () : void
                /** Make the camera render with shader replacement. */
                public SetReplacementShader ($shader: UnityEngine.Shader, $replacementTag: string) : void
                public ResetReplacementShader () : void
                public GetGateFittedFieldOfView () : number
                public GetGateFittedLensShift () : UnityEngine.Vector2
                /** Sets the Camera to render to the chosen buffers of one or more RenderTextures. * @param colorBuffer The RenderBuffer(s) to which color information will be rendered.
                * @param depthBuffer The RenderBuffer to which depth information will be rendered.
                */
                public SetTargetBuffers ($colorBuffer: UnityEngine.RenderBuffer, $depthBuffer: UnityEngine.RenderBuffer) : void
                /** Sets the Camera to render to the chosen buffers of one or more RenderTextures. * @param colorBuffer The RenderBuffer(s) to which color information will be rendered.
                * @param depthBuffer The RenderBuffer to which depth information will be rendered.
                */
                public SetTargetBuffers ($colorBuffer: System.Array$1<UnityEngine.RenderBuffer>, $depthBuffer: UnityEngine.RenderBuffer) : void
                public ResetWorldToCameraMatrix () : void
                public ResetProjectionMatrix () : void
                /** Calculates and returns oblique near-plane projection matrix.
                * @param clipPlane Vector4 that describes a clip plane.
                * @returns Oblique near-plane projection matrix. 
                */
                public CalculateObliqueMatrix ($clipPlane: UnityEngine.Vector4) : UnityEngine.Matrix4x4
                public WorldToScreenPoint ($position: UnityEngine.Vector3, $eye: UnityEngine.Camera.MonoOrStereoscopicEye) : UnityEngine.Vector3
                public WorldToViewportPoint ($position: UnityEngine.Vector3, $eye: UnityEngine.Camera.MonoOrStereoscopicEye) : UnityEngine.Vector3
                public ViewportToWorldPoint ($position: UnityEngine.Vector3, $eye: UnityEngine.Camera.MonoOrStereoscopicEye) : UnityEngine.Vector3
                public ScreenToWorldPoint ($position: UnityEngine.Vector3, $eye: UnityEngine.Camera.MonoOrStereoscopicEye) : UnityEngine.Vector3
                /** Transforms position from world space into screen space. * @param eye Optional argument that can be used to specify which eye transform to use. Default is Mono.
                */
                public WorldToScreenPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Transforms position from world space into viewport space. * @param eye Optional argument that can be used to specify which eye transform to use. Default is Mono.
                */
                public WorldToViewportPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Transforms position from viewport space into world space.
                * @param position The 3d vector in Viewport space.
                * @returns The 3d vector in World space. 
                */
                public ViewportToWorldPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Transforms a point from screen space into world space, where world space is defined as the coordinate system at the very top of your game's hierarchy.
                * @param position A screen space position (often mouse x, y), plus a z position for depth (for example, a camera clipping plane).
                * @param eye By default, Camera.MonoOrStereoscopicEye.Mono. Can be set to Camera.MonoOrStereoscopicEye.Left or Camera.MonoOrStereoscopicEye.Right for use in stereoscopic rendering (e.g., for VR).
                * @returns The worldspace point created by converting the screen space point at the provided distance z from the camera plane. 
                */
                public ScreenToWorldPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Transforms position from screen space into viewport space. */
                public ScreenToViewportPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Transforms position from viewport space into screen space. */
                public ViewportToScreenPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
                public ViewportPointToRay ($pos: UnityEngine.Vector3, $eye: UnityEngine.Camera.MonoOrStereoscopicEye) : UnityEngine.Ray
                /** Returns a ray going from camera through a viewport point. * @param eye Optional argument that can be used to specify which eye transform to use. Default is Mono.
                */
                public ViewportPointToRay ($pos: UnityEngine.Vector3) : UnityEngine.Ray
                public ScreenPointToRay ($pos: UnityEngine.Vector3, $eye: UnityEngine.Camera.MonoOrStereoscopicEye) : UnityEngine.Ray
                /** Returns a ray going from camera through a screen point. * @param eye Optional argument that can be used to specify which eye transform to use. Default is Mono.
                */
                public ScreenPointToRay ($pos: UnityEngine.Vector3) : UnityEngine.Ray
                public CalculateFrustumCorners ($viewport: UnityEngine.Rect, $z: number, $eye: UnityEngine.Camera.MonoOrStereoscopicEye, $outCorners: System.Array$1<UnityEngine.Vector3>) : void
                public static CalculateProjectionMatrixFromPhysicalProperties ($output: $Ref<UnityEngine.Matrix4x4>, $focalLength: number, $sensorSize: UnityEngine.Vector2, $lensShift: UnityEngine.Vector2, $nearClip: number, $farClip: number, $gateFitParameters?: UnityEngine.Camera.GateFitParameters) : void
                /** Converts focal length to field of view.
                * @param focalLength Focal length in millimeters.
                * @param sensorSize Sensor size in millimeters. Use the sensor height to get the vertical field of view. Use the sensor width to get the horizontal field of view.
                * @returns field of view in degrees. 
                */
                public static FocalLengthToFieldOfView ($focalLength: number, $sensorSize: number) : number
                /** Converts field of view to focal length. Use either sensor height and vertical field of view or sensor width and horizontal field of view.
                * @param fieldOfView field of view in degrees.
                * @param sensorSize Sensor size in millimeters.
                * @returns Focal length in millimeters. 
                */
                public static FieldOfViewToFocalLength ($fieldOfView: number, $sensorSize: number) : number
                /** Converts the horizontal field of view (FOV) to the vertical FOV, based on the value of the aspect ratio parameter. * @param horizontalFOV The horizontal FOV value in degrees.
                * @param aspectRatio The aspect ratio value used for the conversion
                */
                public static HorizontalToVerticalFieldOfView ($horizontalFieldOfView: number, $aspectRatio: number) : number
                /** Converts the vertical field of view (FOV) to the horizontal FOV, based on the value of the aspect ratio parameter. * @param verticalFieldOfView The vertical FOV value in degrees.
                * @param aspectRatio The aspect ratio value used for the conversion
                */
                public static VerticalToHorizontalFieldOfView ($verticalFieldOfView: number, $aspectRatio: number) : number
                public GetStereoNonJitteredProjectionMatrix ($eye: UnityEngine.Camera.StereoscopicEye) : UnityEngine.Matrix4x4
                public GetStereoViewMatrix ($eye: UnityEngine.Camera.StereoscopicEye) : UnityEngine.Matrix4x4
                public CopyStereoDeviceProjectionMatrixToNonJittered ($eye: UnityEngine.Camera.StereoscopicEye) : void
                public GetStereoProjectionMatrix ($eye: UnityEngine.Camera.StereoscopicEye) : UnityEngine.Matrix4x4
                public SetStereoProjectionMatrix ($eye: UnityEngine.Camera.StereoscopicEye, $matrix: UnityEngine.Matrix4x4) : void
                public ResetStereoProjectionMatrices () : void
                public SetStereoViewMatrix ($eye: UnityEngine.Camera.StereoscopicEye, $matrix: UnityEngine.Matrix4x4) : void
                public ResetStereoViewMatrices () : void
                /** Fills an array of Camera with the current cameras in the Scene, without allocating a new array. * @param cameras An array to be filled up with cameras currently in the Scene.
                */
                public static GetAllCameras ($cameras: System.Array$1<UnityEngine.Camera>) : number
                /** Render into a static cubemap from this camera.
                * @param cubemap The cube map to render to.
                * @param faceMask A bitmask which determines which of the six faces are rendered to.
                * @returns False if rendering fails, else true. 
                */
                public RenderToCubemap ($cubemap: UnityEngine.Cubemap, $faceMask: number) : boolean
                public RenderToCubemap ($cubemap: UnityEngine.Cubemap) : boolean
                /** Render into a cubemap from this camera.
                * @param faceMask A bitfield indicating which cubemap faces should be rendered into.
                * @param cubemap The texture to render to.
                * @returns False if rendering fails, else true. 
                */
                public RenderToCubemap ($cubemap: UnityEngine.RenderTexture, $faceMask: number) : boolean
                public RenderToCubemap ($cubemap: UnityEngine.RenderTexture) : boolean
                public RenderToCubemap ($cubemap: UnityEngine.RenderTexture, $faceMask: number, $stereoEye: UnityEngine.Camera.MonoOrStereoscopicEye) : boolean
                public Render () : void
                /** Render the camera with shader replacement. */
                public RenderWithShader ($shader: UnityEngine.Shader, $replacementTag: string) : void
                public RenderDontRestore () : void
                public SubmitRenderRequests ($renderRequests: System.Collections.Generic.List$1<UnityEngine.Camera.RenderRequest>) : void
                public static SetupCurrent ($cur: UnityEngine.Camera) : void
                /** Makes this camera's settings match other camera. * @param other Copy camera settings to the other camera.
                */
                public CopyFrom ($other: UnityEngine.Camera) : void
                /** Remove command buffers from execution at a specified place. * @param evt When to execute the command buffer during rendering.
                */
                public RemoveCommandBuffers ($evt: UnityEngine.Rendering.CameraEvent) : void
                public RemoveAllCommandBuffers () : void
                /** Add a command buffer to be executed at a specified place. * @param evt When to execute the command buffer during rendering.
                * @param buffer The buffer to execute.
                */
                public AddCommandBuffer ($evt: UnityEngine.Rendering.CameraEvent, $buffer: UnityEngine.Rendering.CommandBuffer) : void
                /** Adds a command buffer to the GPU's async compute queues and executes that command buffer when graphics processing reaches a given point. * @param evt The point during the graphics processing at which this command buffer should commence on the GPU.
                * @param buffer The buffer to execute.
                * @param queueType The desired async compute queue type to execute the buffer on.
                */
                public AddCommandBufferAsync ($evt: UnityEngine.Rendering.CameraEvent, $buffer: UnityEngine.Rendering.CommandBuffer, $queueType: UnityEngine.Rendering.ComputeQueueType) : void
                /** Remove command buffer from execution at a specified place. * @param evt When to execute the command buffer during rendering.
                * @param buffer The buffer to execute.
                */
                public RemoveCommandBuffer ($evt: UnityEngine.Rendering.CameraEvent, $buffer: UnityEngine.Rendering.CommandBuffer) : void
                /** Get command buffers to be executed at a specified place.
                * @param evt When to execute the command buffer during rendering.
                * @returns Array of command buffers. 
                */
                public GetCommandBuffers ($evt: UnityEngine.Rendering.CameraEvent) : System.Array$1<UnityEngine.Rendering.CommandBuffer>
                /** Get culling parameters for a camera.
                * @param cullingParameters Resultant culling parameters.
                * @param stereoAware Generate single-pass stereo aware culling parameters.
                * @returns Flag indicating whether culling parameters are valid. 
                */
                public TryGetCullingParameters ($cullingParameters: $Ref<UnityEngine.Rendering.ScriptableCullingParameters>) : boolean
                /** Get culling parameters for a camera.
                * @param cullingParameters Resultant culling parameters.
                * @param stereoAware Generate single-pass stereo aware culling parameters.
                * @returns Flag indicating whether culling parameters are valid. 
                */
                public TryGetCullingParameters ($stereoAware: boolean, $cullingParameters: $Ref<UnityEngine.Rendering.ScriptableCullingParameters>) : boolean
                public constructor ()
            }
            /** Rendering path of a Camera. */
            enum RenderingPath
            { UsePlayerSettings = -1, VertexLit = 0, Forward = 1, DeferredLighting = 2, DeferredShading = 3 }
            /** Transparent object sorting mode of a Camera. */
            enum TransparencySortMode
            { Default = 0, Perspective = 1, Orthographic = 2, CustomAxis = 3 }
            /** Describes different types of camera. */
            enum CameraType
            { Game = 1, SceneView = 2, Preview = 4, VR = 8, Reflection = 16 }
            /** A standard 4x4 transformation matrix. */
            class Matrix4x4 extends System.ValueType implements System.IEquatable$1<UnityEngine.Matrix4x4>, System.IFormattable
            {
                protected [__keep_incompatibility]: never;
            }
            /** Values for Camera.clearFlags, determining what to clear when rendering a Camera. */
            enum CameraClearFlags
            { Skybox = 1, Color = 2, SolidColor = 2, Depth = 3, Nothing = 4 }
            /** Depth texture generation mode for Camera. */
            enum DepthTextureMode
            { None = 0, Depth = 1, DepthNormals = 2, MotionVectors = 4 }
            /** Shader scripts used for all rendering. */
            class Shader extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
                /** Shader LOD level for this shader. */
                public get maximumLOD(): number;
                public set maximumLOD(value: number);
                /** Shader LOD level for all shaders. */
                public static get globalMaximumLOD(): number;
                public static set globalMaximumLOD(value: number);
                /** Can this shader run on the end-users graphics card? (Read Only) */
                public get isSupported(): boolean;
                /** Render pipeline currently in use. */
                public static get globalRenderPipeline(): string;
                public static set globalRenderPipeline(value: string);
                /** An array containing the global shader keywords that are currently enabled. */
                public static get enabledGlobalKeywords(): System.Array$1<UnityEngine.Rendering.GlobalKeyword>;
                /** An array containing the global shader keywords that currently exist. This includes enabled and disabled global shader keywords. */
                public static get globalKeywords(): System.Array$1<UnityEngine.Rendering.GlobalKeyword>;
                /** The local keyword space of this shader. */
                public get keywordSpace(): UnityEngine.Rendering.LocalKeywordSpace;
                /** Render queue of this shader. (Read Only) */
                public get renderQueue(): number;
                /** Returns the number of shader passes on the active SubShader. */
                public get passCount(): number;
                /** Returns the number of SubShaders in this shader. */
                public get subshaderCount(): number;
                /** Finds a shader with the given name. */
                public static Find ($name: string) : UnityEngine.Shader
                /** Enables a global shader keyword. * @param keyword The name of the Rendering.GlobalKeyword to enable.
                */
                public static EnableKeyword ($keyword: string) : void
                /** Disables a global shader keyword. * @param keyword The name of the Rendering.GlobalKeyword to disable.
                */
                public static DisableKeyword ($keyword: string) : void
                /** Checks whether a global shader keyword is enabled.
                * @param keyword The name of the Rendering.GlobalKeyword to check.
                * @returns Returns true if a global shader keyword with the given name exists, and is enabled. Otherwise, returns false. 
                */
                public static IsKeywordEnabled ($keyword: string) : boolean
                /** Enables a global shader keyword. * @param keyword The name of the Rendering.GlobalKeyword to enable.
                */
                public static EnableKeyword ($keyword: $Ref<UnityEngine.Rendering.GlobalKeyword>) : void
                /** Disables a global shader keyword. * @param keyword The name of the Rendering.GlobalKeyword to disable.
                */
                public static DisableKeyword ($keyword: $Ref<UnityEngine.Rendering.GlobalKeyword>) : void
                /** Sets the state of a global shader keyword. * @param keyword The Rendering.GlobalKeyword to enable or disable.
                * @param value The desired keyword state.
                */
                public static SetKeyword ($keyword: $Ref<UnityEngine.Rendering.GlobalKeyword>, $value: boolean) : void
                /** Checks whether a global shader keyword is enabled.
                * @param keyword The Rendering.GlobalKeyword to check.
                * @returns Returns true if the given global shader keyword is enabled. Otherwise, returns false. 
                */
                public static IsKeywordEnabled ($keyword: $Ref<UnityEngine.Rendering.GlobalKeyword>) : boolean
                public static WarmupAllShaders () : void
                /** Gets unique identifier for a shader property name.
                * @param name Shader property name.
                * @returns Unique integer for the name. 
                */
                public static PropertyToID ($name: string) : number
                /** Returns the dependency shader. * @param name The name of the dependency to query.
                */
                public GetDependency ($name: string) : UnityEngine.Shader
                /** Returns the number of passes in the given SubShader. * @param subshaderIndex The index of the SubShader.
                */
                public GetPassCountInSubshader ($subshaderIndex: number) : number
                /** Searches for the tag specified by tagName on the shader's active SubShader and returns the value of the tag. * @param passIndex The index of the pass.
                * @param tagName The name of the tag.
                */
                public FindPassTagValue ($passIndex: number, $tagName: UnityEngine.Rendering.ShaderTagId) : UnityEngine.Rendering.ShaderTagId
                /** Searches for the tag specified by tagName on the SubShader specified by subshaderIndex and returns the value of the tag. * @param subshaderIndex The index of the SubShader.
                * @param passIndex The index of the pass.
                * @param tagName The name of the tag.
                */
                public FindPassTagValue ($subshaderIndex: number, $passIndex: number, $tagName: UnityEngine.Rendering.ShaderTagId) : UnityEngine.Rendering.ShaderTagId
                /** Searches for the tag specified by tagName on the SubShader specified by subshaderIndex and returns the value of the tag. * @param subshaderIndex The index of the SubShader.
                * @param tagName The name of the tag.
                */
                public FindSubshaderTagValue ($subshaderIndex: number, $tagName: UnityEngine.Rendering.ShaderTagId) : UnityEngine.Rendering.ShaderTagId
                /** This method is deprecated. Use SetGlobalFloat or SetGlobalInteger instead. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static SetGlobalInt ($name: string, $value: number) : void
                /** This method is deprecated. Use SetGlobalFloat or SetGlobalInteger instead. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static SetGlobalInt ($nameID: number, $value: number) : void
                /** Sets a global float property for all shaders. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static SetGlobalFloat ($name: string, $value: number) : void
                /** Sets a global float property for all shaders. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static SetGlobalFloat ($nameID: number, $value: number) : void
                /** Sets a global integer property for all shaders. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static SetGlobalInteger ($name: string, $value: number) : void
                /** Sets a global integer property for all shaders. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static SetGlobalInteger ($nameID: number, $value: number) : void
                /** Sets a global vector property for all shaders. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static SetGlobalVector ($name: string, $value: UnityEngine.Vector4) : void
                /** Sets a global vector property for all shaders. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static SetGlobalVector ($nameID: number, $value: UnityEngine.Vector4) : void
                /** Sets a global color property for all shaders. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static SetGlobalColor ($name: string, $value: UnityEngine.Color) : void
                /** Sets a global color property for all shaders. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static SetGlobalColor ($nameID: number, $value: UnityEngine.Color) : void
                /** Sets a global matrix property for all shaders. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static SetGlobalMatrix ($name: string, $value: UnityEngine.Matrix4x4) : void
                /** Sets a global matrix property for all shaders. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static SetGlobalMatrix ($nameID: number, $value: UnityEngine.Matrix4x4) : void
                /** Sets a global texture property for all shaders. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                * @param value The texture to set.
                * @param element Optional parameter that specifies the type of data to set from the RenderTexture.
                */
                public static SetGlobalTexture ($name: string, $value: UnityEngine.Texture) : void
                /** Sets a global texture property for all shaders. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                * @param value The texture to set.
                * @param element Optional parameter that specifies the type of data to set from the RenderTexture.
                */
                public static SetGlobalTexture ($nameID: number, $value: UnityEngine.Texture) : void
                /** Sets a global texture property for all shaders. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                * @param value The texture to set.
                * @param element Optional parameter that specifies the type of data to set from the RenderTexture.
                */
                public static SetGlobalTexture ($name: string, $value: UnityEngine.RenderTexture, $element: UnityEngine.Rendering.RenderTextureSubElement) : void
                /** Sets a global texture property for all shaders. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                * @param value The texture to set.
                * @param element Optional parameter that specifies the type of data to set from the RenderTexture.
                */
                public static SetGlobalTexture ($nameID: number, $value: UnityEngine.RenderTexture, $element: UnityEngine.Rendering.RenderTextureSubElement) : void
                /** Sets a global buffer property for all shaders. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                * @param value The buffer to set.
                */
                public static SetGlobalBuffer ($name: string, $value: UnityEngine.ComputeBuffer) : void
                /** Sets a global buffer property for all shaders. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                * @param value The buffer to set.
                */
                public static SetGlobalBuffer ($nameID: number, $value: UnityEngine.ComputeBuffer) : void
                /** Sets a global buffer property for all shaders. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                * @param value The buffer to set.
                */
                public static SetGlobalBuffer ($name: string, $value: UnityEngine.GraphicsBuffer) : void
                /** Sets a global buffer property for all shaders. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                * @param value The buffer to set.
                */
                public static SetGlobalBuffer ($nameID: number, $value: UnityEngine.GraphicsBuffer) : void
                /** Sets a ComputeBuffer or GraphicsBuffer as a named constant buffer for all shader types. * @param nameID The name ID of the constant buffer retrieved by Shader.PropertyToID.
                * @param name The name of the constant buffer to override.
                * @param value The buffer to override the constant buffer values with, or null to remove binding.
                * @param offset Offset in bytes from the beginning of the buffer to bind. Must be a multiple of SystemInfo.constantBufferOffsetAlignment, or 0 if that value is 0.
                * @param size The number of bytes to bind.
                */
                public static SetGlobalConstantBuffer ($name: string, $value: UnityEngine.ComputeBuffer, $offset: number, $size: number) : void
                /** Sets a ComputeBuffer or GraphicsBuffer as a named constant buffer for all shader types. * @param nameID The name ID of the constant buffer retrieved by Shader.PropertyToID.
                * @param name The name of the constant buffer to override.
                * @param value The buffer to override the constant buffer values with, or null to remove binding.
                * @param offset Offset in bytes from the beginning of the buffer to bind. Must be a multiple of SystemInfo.constantBufferOffsetAlignment, or 0 if that value is 0.
                * @param size The number of bytes to bind.
                */
                public static SetGlobalConstantBuffer ($nameID: number, $value: UnityEngine.ComputeBuffer, $offset: number, $size: number) : void
                /** Sets a ComputeBuffer or GraphicsBuffer as a named constant buffer for all shader types. * @param nameID The name ID of the constant buffer retrieved by Shader.PropertyToID.
                * @param name The name of the constant buffer to override.
                * @param value The buffer to override the constant buffer values with, or null to remove binding.
                * @param offset Offset in bytes from the beginning of the buffer to bind. Must be a multiple of SystemInfo.constantBufferOffsetAlignment, or 0 if that value is 0.
                * @param size The number of bytes to bind.
                */
                public static SetGlobalConstantBuffer ($name: string, $value: UnityEngine.GraphicsBuffer, $offset: number, $size: number) : void
                /** Sets a ComputeBuffer or GraphicsBuffer as a named constant buffer for all shader types. * @param nameID The name ID of the constant buffer retrieved by Shader.PropertyToID.
                * @param name The name of the constant buffer to override.
                * @param value The buffer to override the constant buffer values with, or null to remove binding.
                * @param offset Offset in bytes from the beginning of the buffer to bind. Must be a multiple of SystemInfo.constantBufferOffsetAlignment, or 0 if that value is 0.
                * @param size The number of bytes to bind.
                */
                public static SetGlobalConstantBuffer ($nameID: number, $value: UnityEngine.GraphicsBuffer, $offset: number, $size: number) : void
                public static SetGlobalFloatArray ($name: string, $values: System.Collections.Generic.List$1<number>) : void
                public static SetGlobalFloatArray ($nameID: number, $values: System.Collections.Generic.List$1<number>) : void
                /** Sets a global float array property for all shaders. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static SetGlobalFloatArray ($name: string, $values: System.Array$1<number>) : void
                /** Sets a global float array property for all shaders. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static SetGlobalFloatArray ($nameID: number, $values: System.Array$1<number>) : void
                public static SetGlobalVectorArray ($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Vector4>) : void
                public static SetGlobalVectorArray ($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Vector4>) : void
                /** Sets a global vector array property for all shaders. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static SetGlobalVectorArray ($name: string, $values: System.Array$1<UnityEngine.Vector4>) : void
                /** Sets a global vector array property for all shaders. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static SetGlobalVectorArray ($nameID: number, $values: System.Array$1<UnityEngine.Vector4>) : void
                public static SetGlobalMatrixArray ($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>) : void
                public static SetGlobalMatrixArray ($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>) : void
                /** Sets a global matrix array property for all shaders. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static SetGlobalMatrixArray ($name: string, $values: System.Array$1<UnityEngine.Matrix4x4>) : void
                /** Sets a global matrix array property for all shaders. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static SetGlobalMatrixArray ($nameID: number, $values: System.Array$1<UnityEngine.Matrix4x4>) : void
                /** This method is deprecated. Use GetGlobalFloat or GetGlobalInteger instead. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static GetGlobalInt ($name: string) : number
                /** This method is deprecated. Use GetGlobalFloat or GetGlobalInteger instead. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static GetGlobalInt ($nameID: number) : number
                /** Gets a global float property for all shaders previously set using SetGlobalFloat. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static GetGlobalFloat ($name: string) : number
                /** Gets a global float property for all shaders previously set using SetGlobalFloat. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static GetGlobalFloat ($nameID: number) : number
                /** Gets a global integer property for all shaders previously set using SetGlobalInteger. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static GetGlobalInteger ($name: string) : number
                /** Gets a global integer property for all shaders previously set using SetGlobalInteger. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static GetGlobalInteger ($nameID: number) : number
                /** Gets a global vector property for all shaders previously set using SetGlobalVector. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static GetGlobalVector ($name: string) : UnityEngine.Vector4
                /** Gets a global vector property for all shaders previously set using SetGlobalVector. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static GetGlobalVector ($nameID: number) : UnityEngine.Vector4
                /** Gets a global color property for all shaders previously set using SetGlobalColor. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static GetGlobalColor ($name: string) : UnityEngine.Color
                /** Gets a global color property for all shaders previously set using SetGlobalColor. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static GetGlobalColor ($nameID: number) : UnityEngine.Color
                /** Gets a global matrix property for all shaders previously set using SetGlobalMatrix. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static GetGlobalMatrix ($name: string) : UnityEngine.Matrix4x4
                /** Gets a global matrix property for all shaders previously set using SetGlobalMatrix. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static GetGlobalMatrix ($nameID: number) : UnityEngine.Matrix4x4
                /** Gets a global texture property for all shaders previously set using SetGlobalTexture. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static GetGlobalTexture ($name: string) : UnityEngine.Texture
                /** Gets a global texture property for all shaders previously set using SetGlobalTexture. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static GetGlobalTexture ($nameID: number) : UnityEngine.Texture
                /** Gets a global float array for all shaders previously set using SetGlobalFloatArray. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static GetGlobalFloatArray ($name: string) : System.Array$1<number>
                /** Gets a global float array for all shaders previously set using SetGlobalFloatArray. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static GetGlobalFloatArray ($nameID: number) : System.Array$1<number>
                /** Gets a global vector array for all shaders previously set using SetGlobalVectorArray. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static GetGlobalVectorArray ($name: string) : System.Array$1<UnityEngine.Vector4>
                /** Gets a global vector array for all shaders previously set using SetGlobalVectorArray. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static GetGlobalVectorArray ($nameID: number) : System.Array$1<UnityEngine.Vector4>
                /** Gets a global matrix array for all shaders previously set using SetGlobalMatrixArray. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static GetGlobalMatrixArray ($name: string) : System.Array$1<UnityEngine.Matrix4x4>
                /** Gets a global matrix array for all shaders previously set using SetGlobalMatrixArray. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public static GetGlobalMatrixArray ($nameID: number) : System.Array$1<UnityEngine.Matrix4x4>
                public static GetGlobalFloatArray ($name: string, $values: System.Collections.Generic.List$1<number>) : void
                public static GetGlobalFloatArray ($nameID: number, $values: System.Collections.Generic.List$1<number>) : void
                public static GetGlobalVectorArray ($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Vector4>) : void
                public static GetGlobalVectorArray ($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Vector4>) : void
                public static GetGlobalMatrixArray ($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>) : void
                public static GetGlobalMatrixArray ($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>) : void
                public GetPropertyCount () : number
                /** Finds the index of a shader property by its name. * @param propertyName The name of the shader property.
                */
                public FindPropertyIndex ($propertyName: string) : number
                /** Returns the name of the shader property at the specified index. * @param propertyIndex The index of the shader property.
                */
                public GetPropertyName ($propertyIndex: number) : string
                /** Returns the nameId of the shader property at the specified index. * @param propertyIndex The index of the shader property.
                */
                public GetPropertyNameId ($propertyIndex: number) : number
                /** Returns the ShaderPropertyType of the property at the specified index. * @param propertyIndex The index of the shader property.
                */
                public GetPropertyType ($propertyIndex: number) : UnityEngine.Rendering.ShaderPropertyType
                /** Returns the description string of the shader property at the specified index. * @param propertyIndex The index of the shader property.
                */
                public GetPropertyDescription ($propertyIndex: number) : string
                /** Returns the ShaderPropertyFlags of the shader property at the specified index. * @param propertyIndex The index of the shader property.
                */
                public GetPropertyFlags ($propertyIndex: number) : UnityEngine.Rendering.ShaderPropertyFlags
                /** Returns an array of strings containing attributes of the shader property at the specified index. * @param propertyIndex The index of the shader property.
                */
                public GetPropertyAttributes ($propertyIndex: number) : System.Array$1<string>
                /** Returns the default float value of the shader property at the specified index. * @param propertyIndex The index of the shader property.
                */
                public GetPropertyDefaultFloatValue ($propertyIndex: number) : number
                /** Returns the default Vector4 value of the shader property at the specified index. * @param propertyIndex The index of the shader property.
                */
                public GetPropertyDefaultVectorValue ($propertyIndex: number) : UnityEngine.Vector4
                /** Returns the min and max limits for a <a href="Rendering.ShaderPropertyType.Range.html">Range</a> property at the specified index. * @param propertyIndex The index of the shader property.
                */
                public GetPropertyRangeLimits ($propertyIndex: number) : UnityEngine.Vector2
                /** Returns the TextureDimension of a <a href="Rendering.ShaderPropertyType.Texture.html">Texture</a> shader property at the specified index. * @param propertyIndex The index of the shader property.
                */
                public GetPropertyTextureDimension ($propertyIndex: number) : UnityEngine.Rendering.TextureDimension
                /** Returns the default Texture name of a <a href="Rendering.ShaderPropertyType.Texture.html">Texture</a> shader property at the specified index. * @param propertyIndex The index of the shader property.
                */
                public GetPropertyTextureDefaultName ($propertyIndex: number) : string
                /** Find the name of a texture stack a texture belongs too.
                * @param propertyIndex Index of the property.
                * @param stackName On exit, contanis the name of the stack if one was found.
                * @param layerIndex On exit, contains the stack layer index of the texture property.
                * @returns True, if a stack was found for the given texture property, false if not. 
                */
                public FindTextureStack ($propertyIndex: number, $stackName: $Ref<string>, $layerIndex: $Ref<number>) : boolean
            }
            /** A 2D Rectangle defined by X and Y position, width and height. */
            class Rect extends System.ValueType implements System.IEquatable$1<UnityEngine.Rect>, System.IFormattable
            {
                protected [__keep_incompatibility]: never;
                /** Shorthand for writing new Rect(0,0,0,0). */
                public static get zero(): UnityEngine.Rect;
                /** The X coordinate of the rectangle. */
                public get x(): number;
                public set x(value: number);
                /** The Y coordinate of the rectangle. */
                public get y(): number;
                public set y(value: number);
                /** The X and Y position of the rectangle. */
                public get position(): UnityEngine.Vector2;
                public set position(value: UnityEngine.Vector2);
                /** The position of the center of the rectangle. */
                public get center(): UnityEngine.Vector2;
                public set center(value: UnityEngine.Vector2);
                /** The position of the minimum corner of the rectangle. */
                public get min(): UnityEngine.Vector2;
                public set min(value: UnityEngine.Vector2);
                /** The position of the maximum corner of the rectangle. */
                public get max(): UnityEngine.Vector2;
                public set max(value: UnityEngine.Vector2);
                /** The width of the rectangle, measured from the X position. */
                public get width(): number;
                public set width(value: number);
                /** The height of the rectangle, measured from the Y position. */
                public get height(): number;
                public set height(value: number);
                /** The width and height of the rectangle. */
                public get size(): UnityEngine.Vector2;
                public set size(value: UnityEngine.Vector2);
                /** The minimum X coordinate of the rectangle. */
                public get xMin(): number;
                public set xMin(value: number);
                /** The minimum Y coordinate of the rectangle. */
                public get yMin(): number;
                public set yMin(value: number);
                /** The maximum X coordinate of the rectangle. */
                public get xMax(): number;
                public set xMax(value: number);
                /** The maximum Y coordinate of the rectangle. */
                public get yMax(): number;
                public set yMax(value: number);
                /** Creates a rectangle from min/max coordinate values.
                * @param xmin The minimum X coordinate.
                * @param ymin The minimum Y coordinate.
                * @param xmax The maximum X coordinate.
                * @param ymax The maximum Y coordinate.
                * @returns A rectangle matching the specified coordinates. 
                */
                public static MinMaxRect ($xmin: number, $ymin: number, $xmax: number, $ymax: number) : UnityEngine.Rect
                /** Set components of an existing Rect. */
                public Set ($x: number, $y: number, $width: number, $height: number) : void
                /** Returns true if the x and y components of point is a point inside this rectangle. If allowInverse is present and true, the width and height of the Rect are allowed to take negative values (ie, the min value is greater than the max), and the test will still work.
                * @param point Point to test.
                * @param allowInverse Does the test allow the Rect's width and height to be negative?
                * @returns True if the point lies within the specified rectangle. 
                */
                public Contains ($point: UnityEngine.Vector2) : boolean
                /** Returns true if the x and y components of point is a point inside this rectangle. If allowInverse is present and true, the width and height of the Rect are allowed to take negative values (ie, the min value is greater than the max), and the test will still work.
                * @param point Point to test.
                * @param allowInverse Does the test allow the Rect's width and height to be negative?
                * @returns True if the point lies within the specified rectangle. 
                */
                public Contains ($point: UnityEngine.Vector3) : boolean
                /** Returns true if the x and y components of point is a point inside this rectangle. If allowInverse is present and true, the width and height of the Rect are allowed to take negative values (ie, the min value is greater than the max), and the test will still work.
                * @param point Point to test.
                * @param allowInverse Does the test allow the Rect's width and height to be negative?
                * @returns True if the point lies within the specified rectangle. 
                */
                public Contains ($point: UnityEngine.Vector3, $allowInverse: boolean) : boolean
                /** Returns true if the other rectangle overlaps this one. If allowInverse is present and true, the widths and heights of the Rects are allowed to take negative values (ie, the min value is greater than the max), and the test will still work. * @param other Other rectangle to test overlapping with.
                * @param allowInverse Does the test allow the widths and heights of the Rects to be negative?
                */
                public Overlaps ($other: UnityEngine.Rect) : boolean
                /** Returns true if the other rectangle overlaps this one. If allowInverse is present and true, the widths and heights of the Rects are allowed to take negative values (ie, the min value is greater than the max), and the test will still work. * @param other Other rectangle to test overlapping with.
                * @param allowInverse Does the test allow the widths and heights of the Rects to be negative?
                */
                public Overlaps ($other: UnityEngine.Rect, $allowInverse: boolean) : boolean
                /** Returns a point inside a rectangle, given normalized coordinates. * @param rectangle Rectangle to get a point inside.
                * @param normalizedRectCoordinates Normalized coordinates to get a point for.
                */
                public static NormalizedToPoint ($rectangle: UnityEngine.Rect, $normalizedRectCoordinates: UnityEngine.Vector2) : UnityEngine.Vector2
                /** Returns the normalized coordinates cooresponding the the point. * @param rectangle Rectangle to get normalized coordinates inside.
                * @param point A point inside the rectangle to get normalized coordinates for.
                */
                public static PointToNormalized ($rectangle: UnityEngine.Rect, $point: UnityEngine.Vector2) : UnityEngine.Vector2
                public static op_Inequality ($lhs: UnityEngine.Rect, $rhs: UnityEngine.Rect) : boolean
                public static op_Equality ($lhs: UnityEngine.Rect, $rhs: UnityEngine.Rect) : boolean
                public Equals ($other: any) : boolean
                public Equals ($other: UnityEngine.Rect) : boolean
                public ToString () : string
                /** Returns a formatted string for this Rect. * @param format A numeric format string.
                * @param formatProvider An object that specifies culture-specific formatting.
                */
                public ToString ($format: string) : string
                /** Returns a formatted string for this Rect. * @param format A numeric format string.
                * @param formatProvider An object that specifies culture-specific formatting.
                */
                public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
                public constructor ($x: number, $y: number, $width: number, $height: number)
                public constructor ($position: UnityEngine.Vector2, $size: UnityEngine.Vector2)
                public constructor ($source: UnityEngine.Rect)
                public Equals ($obj: any) : boolean
                public static Equals ($objA: any, $objB: any) : boolean
                public constructor ()
            }
            /** Render textures are textures that can be rendered to. */
            class RenderTexture extends UnityEngine.Texture
            {
                protected [__keep_incompatibility]: never;
            }
            /** Base class for Texture handling. */
            class Texture extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
                /** Can be used with Texture constructors that take a mip count to indicate that all mips should be generated.  The value of this field is -1. */
                public static GenerateAllMips : number
                public static get masterTextureLimit(): number;
                public static set masterTextureLimit(value: number);
                /** How many mipmap levels are in this Texture (Read Only). */
                public get mipmapCount(): number;
                public static get anisotropicFiltering(): UnityEngine.AnisotropicFiltering;
                public static set anisotropicFiltering(value: UnityEngine.AnisotropicFiltering);
                /** Returns the GraphicsFormat format or color format of a Texture object. */
                public get graphicsFormat(): UnityEngine.Experimental.Rendering.GraphicsFormat;
                /** Width of the Texture in pixels. (Read Only) */
                public get width(): number;
                public set width(value: number);
                /** Height of the Texture in pixels. (Read Only) */
                public get height(): number;
                public set height(value: number);
                /** Dimensionality (type) of the Texture (Read Only). */
                public get dimension(): UnityEngine.Rendering.TextureDimension;
                public set dimension(value: UnityEngine.Rendering.TextureDimension);
                /** Whether Unity stores an additional copy of this texture's pixel data in CPU-addressable memory. */
                public get isReadable(): boolean;
                /** Texture coordinate wrapping mode. */
                public get wrapMode(): UnityEngine.TextureWrapMode;
                public set wrapMode(value: UnityEngine.TextureWrapMode);
                /** Texture U coordinate wrapping mode. */
                public get wrapModeU(): UnityEngine.TextureWrapMode;
                public set wrapModeU(value: UnityEngine.TextureWrapMode);
                /** Texture V coordinate wrapping mode. */
                public get wrapModeV(): UnityEngine.TextureWrapMode;
                public set wrapModeV(value: UnityEngine.TextureWrapMode);
                /** Texture W coordinate wrapping mode for Texture3D. */
                public get wrapModeW(): UnityEngine.TextureWrapMode;
                public set wrapModeW(value: UnityEngine.TextureWrapMode);
                /** Filtering mode of the Texture. */
                public get filterMode(): UnityEngine.FilterMode;
                public set filterMode(value: UnityEngine.FilterMode);
                /** Defines the anisotropic filtering level of the Texture. */
                public get anisoLevel(): number;
                public set anisoLevel(value: number);
                /** The mipmap bias of the Texture. */
                public get mipMapBias(): number;
                public set mipMapBias(value: number);
                public get texelSize(): UnityEngine.Vector2;
                /** This counter is incremented when the Texture is updated. */
                public get updateCount(): number;
                /** The hash value of the Texture. */
                public get imageContentsHash(): UnityEngine.Hash128;
                public set imageContentsHash(value: UnityEngine.Hash128);
                /** The total amount of Texture memory that Unity would use if it loads all Textures at mipmap level 0.
                This is a theoretical value that does not take into account any input from the streaming system or any other input, for example when you set the`Texture2D.requestedMipmapLevel` manually.
                To see a Texture memory value that takes inputs into account, use `desiredTextureMemory`.
                `totalTextureMemory` only includes instances of Texture2D and CubeMap Textures. It does not include any other Texture types, or 2D and CubeMap Textures that Unity creates internally. */
                public static get totalTextureMemory(): bigint;
                /** The total size of the Textures, in bytes, that Unity loads if there were no other constraints. Before Unity loads any Textures, it applies the which reduces the loaded Texture resolution if the Texture sizes exceed its value. The `desiredTextureMemory` value takes into account the mipmap levels that Unity has requested or that you have set manually.
                For example, if Unity does not load a Texture at full resolution because it is far away or its requested mipmap level is greater than 0,  Unity reduces the `desiredTextureMemory` value to match the total memory needed.
                The `desiredTextureMemory` value can be greater than the `targetTextureMemory` value.
                */
                public static get desiredTextureMemory(): bigint;
                /** The total amount of Texture memory that Unity allocates to the Textures in the scene after it applies the and finishes loading Textures. `targetTextureMemory`also takes mipmap streaming settings into account. This value only includes instances of Texture2D and CubeMap Textures. It does not include any other Texture types, or 2D and CubeMap Textures that Unity creates internally. */
                public static get targetTextureMemory(): bigint;
                /** The amount of memory that all Textures in the scene use. */
                public static get currentTextureMemory(): bigint;
                /** The amount of memory Unity allocates for non-streaming Textures in the scene. This only includes instances of Texture2D and CubeMap Textures. This does not include any other Texture types, or 2D and CubeMap Textures that Unity creates internally. */
                public static get nonStreamingTextureMemory(): bigint;
                /** How many times has a Texture been uploaded due to Texture mipmap streaming. */
                public static get streamingMipmapUploadCount(): bigint;
                /** Number of renderers registered with the Texture streaming system. */
                public static get streamingRendererCount(): bigint;
                /** Number of streaming Textures. */
                public static get streamingTextureCount(): bigint;
                /** The number of non-streaming Textures in the scene. This includes instances of Texture2D and CubeMap Textures. This does not include any other Texture types, or 2D and CubeMap Textures that Unity creates internally. */
                public static get nonStreamingTextureCount(): bigint;
                /** Number of streaming Textures with outstanding mipmaps to be loaded. */
                public static get streamingTexturePendingLoadCount(): bigint;
                /** Number of streaming Textures with mipmaps currently loading. */
                public static get streamingTextureLoadingCount(): bigint;
                /** Force streaming Textures to load all mipmap levels. */
                public static get streamingTextureForceLoadAll(): boolean;
                public static set streamingTextureForceLoadAll(value: boolean);
                /** This property forces the streaming Texture system to discard all unused mipmaps instead of caching them until the Texture is exceeded. This is useful when you profile or write tests to keep a predictable set of Textures in memory. */
                public static get streamingTextureDiscardUnusedMips(): boolean;
                public static set streamingTextureDiscardUnusedMips(value: boolean);
                /** Allow Unity internals to perform Texture creation on any thread (rather than the dedicated render thread). */
                public static get allowThreadedTextureCreation(): boolean;
                public static set allowThreadedTextureCreation(value: boolean);
                /** Sets Anisotropic limits. */
                public static SetGlobalAnisotropicFilteringLimits ($forcedMin: number, $globalMax: number) : void
                public GetNativeTexturePtr () : System.IntPtr
                public IncrementUpdateCount () : void
                public static SetStreamingTextureMaterialDebugProperties () : void
            }
            /** Color or depth buffer part of a RenderTexture. */
            class RenderBuffer extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            /** Representation of four-dimensional vectors. */
            class Vector4 extends System.ValueType implements System.IEquatable$1<UnityEngine.Vector4>, System.IFormattable
            {
                protected [__keep_incompatibility]: never;
            }
            /** Representation of rays. */
            class Ray extends System.ValueType implements System.IFormattable
            {
                protected [__keep_incompatibility]: never;
            }
            /** Enum values for the Camera's targetEye property. */
            enum StereoTargetEyeMask
            { None = 0, Left = 1, Right = 2, Both = 3 }
            /** Class for handling cube maps, Use this to create or modify existing. */
            class Cubemap extends UnityEngine.Texture
            {
                protected [__keep_incompatibility]: never;
            }
            /** Structure describing the status of a finger touching the screen. */
            class Touch extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
                /** The unique index for the touch. */
                public get fingerId(): number;
                public set fingerId(value: number);
                /** The position of the touch in screen space pixel coordinates. */
                public get position(): UnityEngine.Vector2;
                public set position(value: UnityEngine.Vector2);
                /** The first position of the touch contact in screen space pixel coordinates. */
                public get rawPosition(): UnityEngine.Vector2;
                public set rawPosition(value: UnityEngine.Vector2);
                /** The position delta since last change in pixel coordinates. */
                public get deltaPosition(): UnityEngine.Vector2;
                public set deltaPosition(value: UnityEngine.Vector2);
                /** Amount of time that has passed since the last recorded change in Touch values. */
                public get deltaTime(): number;
                public set deltaTime(value: number);
                /** Number of taps. */
                public get tapCount(): number;
                public set tapCount(value: number);
                /** Describes the phase of the touch. */
                public get phase(): UnityEngine.TouchPhase;
                public set phase(value: UnityEngine.TouchPhase);
                /** The current amount of pressure being applied to a touch.  1.0f is considered to be the pressure of an average touch.  If Input.touchPressureSupported returns false, the value of this property will always be 1.0f. */
                public get pressure(): number;
                public set pressure(value: number);
                /** The maximum possible pressure value for a platform.  If Input.touchPressureSupported returns false, the value of this property will always be 1.0f. */
                public get maximumPossiblePressure(): number;
                public set maximumPossiblePressure(value: number);
                /** A value that indicates whether a touch was of Direct, Indirect (or remote), or Stylus type. */
                public get type(): UnityEngine.TouchType;
                public set type(value: UnityEngine.TouchType);
                /** Value of 0 radians indicates that the stylus is parallel to the surface, pi/2 indicates that it is perpendicular. */
                public get altitudeAngle(): number;
                public set altitudeAngle(value: number);
                /** Value of 0 radians indicates that the stylus is pointed along the x-axis of the device. */
                public get azimuthAngle(): number;
                public set azimuthAngle(value: number);
                /** An estimated value of the radius of a touch.  Add radiusVariance to get the maximum touch size, subtract it to get the minimum touch size. */
                public get radius(): number;
                public set radius(value: number);
                /** This value determines the accuracy of the touch radius. Add this value to the radius to get the maximum touch size, subtract it to get the minimum touch size. */
                public get radiusVariance(): number;
                public set radiusVariance(value: number);
            }
            /** Describes phase of a finger touch. */
            enum TouchPhase
            { Began = 0, Moved = 1, Stationary = 2, Ended = 3, Canceled = 4 }
            /** Describes whether a touch is direct, indirect (or remote), or from a stylus. */
            enum TouchType
            { Direct = 0, Indirect = 1, Stylus = 2 }
            /** The material class. */
            class Material extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
                /** The shader used by the material. */
                public get shader(): UnityEngine.Shader;
                public set shader(value: UnityEngine.Shader);
                /** The main color of the Material. */
                public get color(): UnityEngine.Color;
                public set color(value: UnityEngine.Color);
                /** The main texture. */
                public get mainTexture(): UnityEngine.Texture;
                public set mainTexture(value: UnityEngine.Texture);
                /** The offset of the main texture. */
                public get mainTextureOffset(): UnityEngine.Vector2;
                public set mainTextureOffset(value: UnityEngine.Vector2);
                /** The scale of the main texture. */
                public get mainTextureScale(): UnityEngine.Vector2;
                public set mainTextureScale(value: UnityEngine.Vector2);
                /** Render queue of this material. */
                public get renderQueue(): number;
                public set renderQueue(value: number);
                /** An array containing the local shader keywords that are currently enabled for this material. */
                public get enabledKeywords(): System.Array$1<UnityEngine.Rendering.LocalKeyword>;
                public set enabledKeywords(value: System.Array$1<UnityEngine.Rendering.LocalKeyword>);
                /** Defines how the material should interact with lightmaps and lightprobes. */
                public get globalIlluminationFlags(): UnityEngine.MaterialGlobalIlluminationFlags;
                public set globalIlluminationFlags(value: UnityEngine.MaterialGlobalIlluminationFlags);
                /** Gets and sets whether the Double Sided Global Illumination setting is enabled for this material. */
                public get doubleSidedGI(): boolean;
                public set doubleSidedGI(value: boolean);
                /** Gets and sets whether GPU instancing is enabled for this material. */
                public get enableInstancing(): boolean;
                public set enableInstancing(value: boolean);
                /** How many passes are in this material (Read Only). */
                public get passCount(): number;
                /** An array containing names of the local shader keywords that are currently enabled for this material. */
                public get shaderKeywords(): System.Array$1<string>;
                public set shaderKeywords(value: System.Array$1<string>);
                /** This method is deprecated. Use SetFloat or SetInteger instead. * @param nameID Property name ID, use Shader.PropertyToID to get it.
                * @param value Integer value to set.
                * @param name Property name, e.g. "_SrcBlend".
                */
                public SetInt ($name: string, $value: number) : void
                /** This method is deprecated. Use SetFloat or SetInteger instead. * @param nameID Property name ID, use Shader.PropertyToID to get it.
                * @param value Integer value to set.
                * @param name Property name, e.g. "_SrcBlend".
                */
                public SetInt ($nameID: number, $value: number) : void
                /** Sets a named float value. * @param nameID Property name ID, use Shader.PropertyToID to get it.
                * @param value Float value to set.
                * @param name Property name, e.g. "_Glossiness".
                */
                public SetFloat ($name: string, $value: number) : void
                /** Sets a named float value. * @param nameID Property name ID, use Shader.PropertyToID to get it.
                * @param value Float value to set.
                * @param name Property name, e.g. "_Glossiness".
                */
                public SetFloat ($nameID: number, $value: number) : void
                /** Sets a named integer value. * @param nameID Property name ID, use Shader.PropertyToID to get it.
                * @param value Integer value to set.
                * @param name Property name, e.g. "_SrcBlend".
                */
                public SetInteger ($name: string, $value: number) : void
                /** Sets a named integer value. * @param nameID Property name ID, use Shader.PropertyToID to get it.
                * @param value Integer value to set.
                * @param name Property name, e.g. "_SrcBlend".
                */
                public SetInteger ($nameID: number, $value: number) : void
                /** Sets a named color value. * @param nameID Property name ID, use Shader.PropertyToID to get it.
                * @param name Property name, e.g. "_Color".
                * @param value Color value to set.
                */
                public SetColor ($name: string, $value: UnityEngine.Color) : void
                /** Sets a named color value. * @param nameID Property name ID, use Shader.PropertyToID to get it.
                * @param name Property name, e.g. "_Color".
                * @param value Color value to set.
                */
                public SetColor ($nameID: number, $value: UnityEngine.Color) : void
                /** Sets a named vector value. * @param nameID Property name ID, use Shader.PropertyToID to get it.
                * @param name Property name, e.g. "_WaveAndDistance".
                * @param value Vector value to set.
                */
                public SetVector ($name: string, $value: UnityEngine.Vector4) : void
                /** Sets a named vector value. * @param nameID Property name ID, use Shader.PropertyToID to get it.
                * @param name Property name, e.g. "_WaveAndDistance".
                * @param value Vector value to set.
                */
                public SetVector ($nameID: number, $value: UnityEngine.Vector4) : void
                /** Sets a named matrix for the shader. * @param nameID Property name ID, use Shader.PropertyToID to get it.
                * @param name Property name, e.g. "_CubemapRotation".
                * @param value Matrix value to set.
                */
                public SetMatrix ($name: string, $value: UnityEngine.Matrix4x4) : void
                /** Sets a named matrix for the shader. * @param nameID Property name ID, use Shader.PropertyToID to get it.
                * @param name Property name, e.g. "_CubemapRotation".
                * @param value Matrix value to set.
                */
                public SetMatrix ($nameID: number, $value: UnityEngine.Matrix4x4) : void
                /** Sets a named texture. * @param nameID Property name ID, use Shader.PropertyToID to get it.
                * @param name Property name, e.g. "_MainTex".
                * @param value Texture to set.
                * @param element Optional parameter that specifies the type of data to set from the RenderTexture.
                */
                public SetTexture ($name: string, $value: UnityEngine.Texture) : void
                /** Sets a named texture. * @param nameID Property name ID, use Shader.PropertyToID to get it.
                * @param name Property name, e.g. "_MainTex".
                * @param value Texture to set.
                * @param element Optional parameter that specifies the type of data to set from the RenderTexture.
                */
                public SetTexture ($nameID: number, $value: UnityEngine.Texture) : void
                /** Sets a named texture. * @param nameID Property name ID, use Shader.PropertyToID to get it.
                * @param name Property name, e.g. "_MainTex".
                * @param value Texture to set.
                * @param element Optional parameter that specifies the type of data to set from the RenderTexture.
                */
                public SetTexture ($name: string, $value: UnityEngine.RenderTexture, $element: UnityEngine.Rendering.RenderTextureSubElement) : void
                /** Sets a named texture. * @param nameID Property name ID, use Shader.PropertyToID to get it.
                * @param name Property name, e.g. "_MainTex".
                * @param value Texture to set.
                * @param element Optional parameter that specifies the type of data to set from the RenderTexture.
                */
                public SetTexture ($nameID: number, $value: UnityEngine.RenderTexture, $element: UnityEngine.Rendering.RenderTextureSubElement) : void
                /** Sets a named buffer value. * @param nameID Property name ID, use Shader.PropertyToID to get it.
                * @param name Property name.
                * @param value The ComputeBuffer or GraphicsBuffer value to set.
                */
                public SetBuffer ($name: string, $value: UnityEngine.ComputeBuffer) : void
                /** Sets a named buffer value. * @param nameID Property name ID, use Shader.PropertyToID to get it.
                * @param name Property name.
                * @param value The ComputeBuffer or GraphicsBuffer value to set.
                */
                public SetBuffer ($nameID: number, $value: UnityEngine.ComputeBuffer) : void
                /** Sets a named buffer value. * @param nameID Property name ID, use Shader.PropertyToID to get it.
                * @param name Property name.
                * @param value The ComputeBuffer or GraphicsBuffer value to set.
                */
                public SetBuffer ($name: string, $value: UnityEngine.GraphicsBuffer) : void
                /** Sets a named buffer value. * @param nameID Property name ID, use Shader.PropertyToID to get it.
                * @param name Property name.
                * @param value The ComputeBuffer or GraphicsBuffer value to set.
                */
                public SetBuffer ($nameID: number, $value: UnityEngine.GraphicsBuffer) : void
                /** Sets a ComputeBuffer or GraphicsBuffer as a named constant buffer for the material. * @param name The name of the constant buffer to override.
                * @param value The ComputeBuffer to override the constant buffer values with, or null to remove binding.
                * @param offset Offset in bytes from the beginning of the buffer to bind. Must be a multiple of SystemInfo.constantBufferOffsetAlignment, or 0 if that value is 0.
                * @param size The number of bytes to bind.
                * @param nameID The shader property ID of the constant buffer to override.
                */
                public SetConstantBuffer ($name: string, $value: UnityEngine.ComputeBuffer, $offset: number, $size: number) : void
                /** Sets a ComputeBuffer or GraphicsBuffer as a named constant buffer for the material. * @param name The name of the constant buffer to override.
                * @param value The ComputeBuffer to override the constant buffer values with, or null to remove binding.
                * @param offset Offset in bytes from the beginning of the buffer to bind. Must be a multiple of SystemInfo.constantBufferOffsetAlignment, or 0 if that value is 0.
                * @param size The number of bytes to bind.
                * @param nameID The shader property ID of the constant buffer to override.
                */
                public SetConstantBuffer ($nameID: number, $value: UnityEngine.ComputeBuffer, $offset: number, $size: number) : void
                /** Sets a ComputeBuffer or GraphicsBuffer as a named constant buffer for the material. * @param name The name of the constant buffer to override.
                * @param value The ComputeBuffer to override the constant buffer values with, or null to remove binding.
                * @param offset Offset in bytes from the beginning of the buffer to bind. Must be a multiple of SystemInfo.constantBufferOffsetAlignment, or 0 if that value is 0.
                * @param size The number of bytes to bind.
                * @param nameID The shader property ID of the constant buffer to override.
                */
                public SetConstantBuffer ($name: string, $value: UnityEngine.GraphicsBuffer, $offset: number, $size: number) : void
                /** Sets a ComputeBuffer or GraphicsBuffer as a named constant buffer for the material. * @param name The name of the constant buffer to override.
                * @param value The ComputeBuffer to override the constant buffer values with, or null to remove binding.
                * @param offset Offset in bytes from the beginning of the buffer to bind. Must be a multiple of SystemInfo.constantBufferOffsetAlignment, or 0 if that value is 0.
                * @param size The number of bytes to bind.
                * @param nameID The shader property ID of the constant buffer to override.
                */
                public SetConstantBuffer ($nameID: number, $value: UnityEngine.GraphicsBuffer, $offset: number, $size: number) : void
                public SetFloatArray ($name: string, $values: System.Collections.Generic.List$1<number>) : void
                public SetFloatArray ($nameID: number, $values: System.Collections.Generic.List$1<number>) : void
                /** Sets a float array property. * @param name Property name.
                * @param nameID Property name ID. Use Shader.PropertyToID to get this ID.
                * @param values Array of values to set.
                */
                public SetFloatArray ($name: string, $values: System.Array$1<number>) : void
                /** Sets a float array property. * @param name Property name.
                * @param nameID Property name ID. Use Shader.PropertyToID to get this ID.
                * @param values Array of values to set.
                */
                public SetFloatArray ($nameID: number, $values: System.Array$1<number>) : void
                public SetColorArray ($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Color>) : void
                public SetColorArray ($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Color>) : void
                /** Sets a color array property. * @param name Property name.
                * @param nameID Property name ID, use Shader.PropertyToID to get it.
                * @param values Array of values to set.
                */
                public SetColorArray ($name: string, $values: System.Array$1<UnityEngine.Color>) : void
                /** Sets a color array property. * @param name Property name.
                * @param nameID Property name ID, use Shader.PropertyToID to get it.
                * @param values Array of values to set.
                */
                public SetColorArray ($nameID: number, $values: System.Array$1<UnityEngine.Color>) : void
                public SetVectorArray ($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Vector4>) : void
                public SetVectorArray ($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Vector4>) : void
                /** Sets a vector array property. * @param name Property name.
                * @param values Array of values to set.
                * @param nameID Property name ID, use Shader.PropertyToID to get it.
                */
                public SetVectorArray ($name: string, $values: System.Array$1<UnityEngine.Vector4>) : void
                /** Sets a vector array property. * @param name Property name.
                * @param values Array of values to set.
                * @param nameID Property name ID, use Shader.PropertyToID to get it.
                */
                public SetVectorArray ($nameID: number, $values: System.Array$1<UnityEngine.Vector4>) : void
                public SetMatrixArray ($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>) : void
                public SetMatrixArray ($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>) : void
                /** Sets a matrix array property. * @param name Property name.
                * @param values Array of values to set.
                * @param nameID Property name ID, use Shader.PropertyToID to get it.
                */
                public SetMatrixArray ($name: string, $values: System.Array$1<UnityEngine.Matrix4x4>) : void
                /** Sets a matrix array property. * @param name Property name.
                * @param values Array of values to set.
                * @param nameID Property name ID, use Shader.PropertyToID to get it.
                */
                public SetMatrixArray ($nameID: number, $values: System.Array$1<UnityEngine.Matrix4x4>) : void
                /** This method is deprecated. Use GetFloat or GetInteger instead. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public GetInt ($name: string) : number
                /** This method is deprecated. Use GetFloat or GetInteger instead. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public GetInt ($nameID: number) : number
                /** Get a named float value. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public GetFloat ($name: string) : number
                /** Get a named float value. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public GetFloat ($nameID: number) : number
                /** Get a named integer value. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public GetInteger ($name: string) : number
                /** Get a named integer value. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public GetInteger ($nameID: number) : number
                /** Get a named color value. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public GetColor ($name: string) : UnityEngine.Color
                /** Get a named color value. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public GetColor ($nameID: number) : UnityEngine.Color
                /** Get a named vector value. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public GetVector ($name: string) : UnityEngine.Vector4
                /** Get a named vector value. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public GetVector ($nameID: number) : UnityEngine.Vector4
                /** Get a named matrix value from the shader. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public GetMatrix ($name: string) : UnityEngine.Matrix4x4
                /** Get a named matrix value from the shader. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public GetMatrix ($nameID: number) : UnityEngine.Matrix4x4
                /** Get a named texture. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public GetTexture ($name: string) : UnityEngine.Texture
                /** Get a named texture. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public GetTexture ($nameID: number) : UnityEngine.Texture
                /** Get a named float array. * @param name The name of the property.
                * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                */
                public GetFloatArray ($name: string) : System.Array$1<number>
                /** Get a named float array. * @param name The name of the property.
                * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                */
                public GetFloatArray ($nameID: number) : System.Array$1<number>
                /** Get a named color array. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public GetColorArray ($name: string) : System.Array$1<UnityEngine.Color>
                /** Get a named color array. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public GetColorArray ($nameID: number) : System.Array$1<UnityEngine.Color>
                /** Get a named vector array. * @param name The name of the property.
                * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                */
                public GetVectorArray ($name: string) : System.Array$1<UnityEngine.Vector4>
                /** Get a named vector array. * @param name The name of the property.
                * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                */
                public GetVectorArray ($nameID: number) : System.Array$1<UnityEngine.Vector4>
                /** Get a named matrix array. * @param name The name of the property.
                * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                */
                public GetMatrixArray ($name: string) : System.Array$1<UnityEngine.Matrix4x4>
                /** Get a named matrix array. * @param name The name of the property.
                * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                */
                public GetMatrixArray ($nameID: number) : System.Array$1<UnityEngine.Matrix4x4>
                public GetFloatArray ($name: string, $values: System.Collections.Generic.List$1<number>) : void
                public GetFloatArray ($nameID: number, $values: System.Collections.Generic.List$1<number>) : void
                public GetColorArray ($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Color>) : void
                public GetColorArray ($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Color>) : void
                public GetVectorArray ($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Vector4>) : void
                public GetVectorArray ($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Vector4>) : void
                public GetMatrixArray ($name: string, $values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>) : void
                public GetMatrixArray ($nameID: number, $values: System.Collections.Generic.List$1<UnityEngine.Matrix4x4>) : void
                /** Sets the placement offset of texture propertyName. * @param nameID Property name ID, use Shader.PropertyToID to get it.
                * @param name Property name, for example: "_MainTex".
                * @param value Texture placement offset.
                */
                public SetTextureOffset ($name: string, $value: UnityEngine.Vector2) : void
                /** Sets the placement offset of texture propertyName. * @param nameID Property name ID, use Shader.PropertyToID to get it.
                * @param name Property name, for example: "_MainTex".
                * @param value Texture placement offset.
                */
                public SetTextureOffset ($nameID: number, $value: UnityEngine.Vector2) : void
                /** Sets the placement scale of texture propertyName. * @param nameID Property name ID, use Shader.PropertyToID to get it.
                * @param name Property name, e.g. "_MainTex".
                * @param value Texture placement scale.
                */
                public SetTextureScale ($name: string, $value: UnityEngine.Vector2) : void
                /** Sets the placement scale of texture propertyName. * @param nameID Property name ID, use Shader.PropertyToID to get it.
                * @param name Property name, e.g. "_MainTex".
                * @param value Texture placement scale.
                */
                public SetTextureScale ($nameID: number, $value: UnityEngine.Vector2) : void
                /** Gets the placement offset of texture propertyName. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public GetTextureOffset ($name: string) : UnityEngine.Vector2
                /** Gets the placement offset of texture propertyName. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public GetTextureOffset ($nameID: number) : UnityEngine.Vector2
                /** Gets the placement scale of texture propertyName. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public GetTextureScale ($name: string) : UnityEngine.Vector2
                /** Gets the placement scale of texture propertyName. * @param nameID The name ID of the property retrieved by Shader.PropertyToID.
                * @param name The name of the property.
                */
                public GetTextureScale ($nameID: number) : UnityEngine.Vector2
                /** Checks if the ShaderLab file assigned to the Material has a property with the given name.
                * @param nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
                * @param name The name of the property.
                * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
                */
                public HasProperty ($nameID: number) : boolean
                /** Checks if the ShaderLab file assigned to the Material has a property with the given name.
                * @param nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
                * @param name The name of the property.
                * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
                */
                public HasProperty ($name: string) : boolean
                /** Checks if the ShaderLab file assigned to the Material has a Float property with the given name. This also works with the Float Array property.
                * @param nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
                * @param name The name of the property.
                * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
                */
                public HasFloat ($name: string) : boolean
                /** Checks if the ShaderLab file assigned to the Material has a Float property with the given name. This also works with the Float Array property.
                * @param nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
                * @param name The name of the property.
                * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
                */
                public HasFloat ($nameID: number) : boolean
                /** This method is deprecated. Use HasFloat or HasInteger instead.
                * @param nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
                * @param name The name of the property.
                * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
                */
                public HasInt ($name: string) : boolean
                /** This method is deprecated. Use HasFloat or HasInteger instead.
                * @param nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
                * @param name The name of the property.
                * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
                */
                public HasInt ($nameID: number) : boolean
                /** Checks if the ShaderLab file assigned to the Material has an Integer property with the given name.
                * @param nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
                * @param name The name of the property.
                * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
                */
                public HasInteger ($name: string) : boolean
                /** Checks if the ShaderLab file assigned to the Material has an Integer property with the given name.
                * @param nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
                * @param name The name of the property.
                * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
                */
                public HasInteger ($nameID: number) : boolean
                /** Checks if the ShaderLab file assigned to the Material has a Texture property with the given name.
                * @param nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
                * @param name The name of the property.
                * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
                */
                public HasTexture ($name: string) : boolean
                /** Checks if the ShaderLab file assigned to the Material has a Texture property with the given name.
                * @param nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
                * @param name The name of the property.
                * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
                */
                public HasTexture ($nameID: number) : boolean
                /** Checks if the ShaderLab file assigned to the Material has a Matrix property with the given name. This also works with the Matrix Array property.
                * @param nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
                * @param name The name of the property.
                * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
                */
                public HasMatrix ($name: string) : boolean
                /** Checks if the ShaderLab file assigned to the Material has a Matrix property with the given name. This also works with the Matrix Array property.
                * @param nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
                * @param name The name of the property.
                * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
                */
                public HasMatrix ($nameID: number) : boolean
                /** Checks if the ShaderLab file assigned to the Material has a Vector property with the given name. This also works with the Vector Array property.
                * @param name The name of the property.
                * @param nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
                * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
                */
                public HasVector ($name: string) : boolean
                /** Checks if the ShaderLab file assigned to the Material has a Vector property with the given name. This also works with the Vector Array property.
                * @param name The name of the property.
                * @param nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
                * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
                */
                public HasVector ($nameID: number) : boolean
                /** Checks if the ShaderLab file assigned to the Material has a Color property with the given name.
                * @param nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
                * @param name The name of the property.
                * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
                */
                public HasColor ($name: string) : boolean
                /** Checks if the ShaderLab file assigned to the Material has a Color property with the given name.
                * @param nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
                * @param name The name of the property.
                * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
                */
                public HasColor ($nameID: number) : boolean
                /** Checks if the ShaderLab file assigned to the Material has a ComputeBuffer property with the given name.
                * @param name The name of the property.
                * @param nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
                * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
                */
                public HasBuffer ($name: string) : boolean
                /** Checks if the ShaderLab file assigned to the Material has a ComputeBuffer property with the given name.
                * @param name The name of the property.
                * @param nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
                * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
                */
                public HasBuffer ($nameID: number) : boolean
                /** Checks if the ShaderLab file assigned to the Material has a ConstantBuffer property with the given name.
                * @param nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
                * @param name The name of the property.
                * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
                */
                public HasConstantBuffer ($name: string) : boolean
                /** Checks if the ShaderLab file assigned to the Material has a ConstantBuffer property with the given name.
                * @param nameID The name ID of the property. Use Shader.PropertyToID to get this ID.
                * @param name The name of the property.
                * @returns Returns true if the ShaderLab file assigned to the Material has this property. 
                */
                public HasConstantBuffer ($nameID: number) : boolean
                /** Enables a local shader keyword for this material. * @param keyword The name of the Rendering.LocalKeyword to enable.
                */
                public EnableKeyword ($keyword: string) : void
                /** Disables a local shader keyword for this material. * @param keyword The name of the Rendering.LocalKeyword to disable.
                */
                public DisableKeyword ($keyword: string) : void
                /** Checks whether a local shader keyword is enabled for this material.
                * @param keyword The name of the Rendering.LocalKeyword to check.
                * @returns Returns true if a Rendering.LocalKeyword with the given name is enabled  for this material. 
                */
                public IsKeywordEnabled ($keyword: string) : boolean
                /** Enables a local shader keyword for this material. * @param keyword The name of the Rendering.LocalKeyword to enable.
                */
                public EnableKeyword ($keyword: $Ref<UnityEngine.Rendering.LocalKeyword>) : void
                /** Disables a local shader keyword for this material. * @param keyword The name of the Rendering.LocalKeyword to disable.
                */
                public DisableKeyword ($keyword: $Ref<UnityEngine.Rendering.LocalKeyword>) : void
                /** Sets the state of a local shader keyword for this material. * @param keyword The Rendering.LocalKeyword to enable or disable.
                * @param value The desired keyword state.
                */
                public SetKeyword ($keyword: $Ref<UnityEngine.Rendering.LocalKeyword>, $value: boolean) : void
                /** Checks whether a local shader keyword is enabled for this material.
                * @param keyword The name of the Rendering.LocalKeyword to check.
                * @returns Returns true if a Rendering.LocalKeyword with the given name is enabled  for this material. 
                */
                public IsKeywordEnabled ($keyword: $Ref<UnityEngine.Rendering.LocalKeyword>) : boolean
                /** Enables or disables a Shader pass on a per-Material level. * @param passName Shader pass name (case insensitive).
                * @param enabled Flag indicating whether this Shader pass should be enabled.
                */
                public SetShaderPassEnabled ($passName: string, $enabled: boolean) : void
                /** Checks whether a given Shader pass is enabled on this Material.
                * @param passName Shader pass name (case insensitive).
                * @returns True if the Shader pass is enabled. 
                */
                public GetShaderPassEnabled ($passName: string) : boolean
                /** Returns the name of the shader pass at index pass. */
                public GetPassName ($pass: number) : string
                /** Returns the index of the pass passName. */
                public FindPass ($passName: string) : number
                /** Sets an override tag/value on the material. * @param tag Name of the tag to set.
                * @param val Name of the value to set. Empty string to clear the override flag.
                */
                public SetOverrideTag ($tag: string, $val: string) : void
                /** Get the value of material's shader tag. */
                public GetTag ($tag: string, $searchFallbacks: boolean, $defaultValue: string) : string
                /** Get the value of material's shader tag. */
                public GetTag ($tag: string, $searchFallbacks: boolean) : string
                /** Interpolate properties between two materials. */
                public Lerp ($start: UnityEngine.Material, $end: UnityEngine.Material, $t: number) : void
                /** Activate the given pass for rendering.
                * @param pass Shader pass number to setup.
                * @returns If false is returned, no rendering should be done. 
                */
                public SetPass ($pass: number) : boolean
                /** Copy properties from other material into this material. */
                public CopyPropertiesFromMaterial ($mat: UnityEngine.Material) : void
                public ComputeCRC () : number
                public GetTexturePropertyNames () : System.Array$1<string>
                public GetTexturePropertyNameIDs () : System.Array$1<number>
                public GetTexturePropertyNames ($outNames: System.Collections.Generic.List$1<string>) : void
                public GetTexturePropertyNameIDs ($outNames: System.Collections.Generic.List$1<number>) : void
                public constructor ($shader: UnityEngine.Shader)
                public constructor ($source: UnityEngine.Material)
                public constructor ()
            }
            /** Position, size, anchor and pivot information for a rectangle. */
            class RectTransform extends UnityEngine.Transform implements System.Collections.IEnumerable
            {
                protected [__keep_incompatibility]: never;
                /** The calculated rectangle in the local space of the Transform. */
                public get rect(): UnityEngine.Rect;
                /** The normalized position in the parent RectTransform that the lower left corner is anchored to. */
                public get anchorMin(): UnityEngine.Vector2;
                public set anchorMin(value: UnityEngine.Vector2);
                /** The normalized position in the parent RectTransform that the upper right corner is anchored to. */
                public get anchorMax(): UnityEngine.Vector2;
                public set anchorMax(value: UnityEngine.Vector2);
                /** The position of the pivot of this RectTransform relative to the anchor reference point. */
                public get anchoredPosition(): UnityEngine.Vector2;
                public set anchoredPosition(value: UnityEngine.Vector2);
                /** The size of this RectTransform relative to the distances between the anchors. */
                public get sizeDelta(): UnityEngine.Vector2;
                public set sizeDelta(value: UnityEngine.Vector2);
                /** The normalized position in this RectTransform that it rotates around. */
                public get pivot(): UnityEngine.Vector2;
                public set pivot(value: UnityEngine.Vector2);
                /** The 3D position of the pivot of this RectTransform relative to the anchor reference point. */
                public get anchoredPosition3D(): UnityEngine.Vector3;
                public set anchoredPosition3D(value: UnityEngine.Vector3);
                /** The offset of the lower left corner of the rectangle relative to the lower left anchor. */
                public get offsetMin(): UnityEngine.Vector2;
                public set offsetMin(value: UnityEngine.Vector2);
                /** The offset of the upper right corner of the rectangle relative to the upper right anchor. */
                public get offsetMax(): UnityEngine.Vector2;
                public set offsetMax(value: UnityEngine.Vector2);
                /** The object that is driving the values of this RectTransform. Value is null if not driven. */
                public get drivenByObject(): UnityEngine.Object;
                public static add_reapplyDrivenProperties ($value: UnityEngine.RectTransform.ReapplyDrivenProperties) : void
                public static remove_reapplyDrivenProperties ($value: UnityEngine.RectTransform.ReapplyDrivenProperties) : void
                public ForceUpdateRectTransforms () : void
                /** Get the corners of the calculated rectangle in the local space of its Transform. * @param fourCornersArray The array that corners are filled into.
                */
                public GetLocalCorners ($fourCornersArray: System.Array$1<UnityEngine.Vector3>) : void
                /** Get the corners of the calculated rectangle in world space. * @param fourCornersArray The array that corners are filled into.
                */
                public GetWorldCorners ($fourCornersArray: System.Array$1<UnityEngine.Vector3>) : void
                public SetInsetAndSizeFromParentEdge ($edge: UnityEngine.RectTransform.Edge, $inset: number, $size: number) : void
                public SetSizeWithCurrentAnchors ($axis: UnityEngine.RectTransform.Axis, $size: number) : void
                public constructor ()
            }
            /** Position, rotation and scale of an object. */
            class Transform extends UnityEngine.Component implements System.Collections.IEnumerable
            {
                protected [__keep_incompatibility]: never;
                /** The world space position of the Transform. */
                public get position(): UnityEngine.Vector3;
                public set position(value: UnityEngine.Vector3);
                /** Position of the transform relative to the parent transform. */
                public get localPosition(): UnityEngine.Vector3;
                public set localPosition(value: UnityEngine.Vector3);
                /** The rotation as Euler angles in degrees. */
                public get eulerAngles(): UnityEngine.Vector3;
                public set eulerAngles(value: UnityEngine.Vector3);
                /** The rotation as Euler angles in degrees relative to the parent transform's rotation. */
                public get localEulerAngles(): UnityEngine.Vector3;
                public set localEulerAngles(value: UnityEngine.Vector3);
                /** The red axis of the transform in world space. */
                public get right(): UnityEngine.Vector3;
                public set right(value: UnityEngine.Vector3);
                /** The green axis of the transform in world space. */
                public get up(): UnityEngine.Vector3;
                public set up(value: UnityEngine.Vector3);
                /** Returns a normalized vector representing the blue axis of the transform in world space. */
                public get forward(): UnityEngine.Vector3;
                public set forward(value: UnityEngine.Vector3);
                /** A Quaternion that stores the rotation of the Transform in world space. */
                public get rotation(): UnityEngine.Quaternion;
                public set rotation(value: UnityEngine.Quaternion);
                /** The rotation of the transform relative to the transform rotation of the parent. */
                public get localRotation(): UnityEngine.Quaternion;
                public set localRotation(value: UnityEngine.Quaternion);
                /** The scale of the transform relative to the GameObjects parent. */
                public get localScale(): UnityEngine.Vector3;
                public set localScale(value: UnityEngine.Vector3);
                /** The parent of the transform. */
                public get parent(): UnityEngine.Transform;
                public set parent(value: UnityEngine.Transform);
                /** Matrix that transforms a point from world space into local space (Read Only). */
                public get worldToLocalMatrix(): UnityEngine.Matrix4x4;
                /** Matrix that transforms a point from local space into world space (Read Only). */
                public get localToWorldMatrix(): UnityEngine.Matrix4x4;
                /** Returns the topmost transform in the hierarchy. */
                public get root(): UnityEngine.Transform;
                /** The number of children the parent Transform has. */
                public get childCount(): number;
                /** The global scale of the object (Read Only). */
                public get lossyScale(): UnityEngine.Vector3;
                /** Has the transform changed since the last time the flag was set to 'false'? */
                public get hasChanged(): boolean;
                public set hasChanged(value: boolean);
                /** The transform capacity of the transform's hierarchy data structure. */
                public get hierarchyCapacity(): number;
                public set hierarchyCapacity(value: number);
                /** The number of transforms in the transform's hierarchy data structure. */
                public get hierarchyCount(): number;
                /** Set the parent of the transform. * @param parent The parent Transform to use.
                * @param worldPositionStays If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before.
                */
                public SetParent ($p: UnityEngine.Transform) : void
                /** Set the parent of the transform. * @param parent The parent Transform to use.
                * @param worldPositionStays If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before.
                */
                public SetParent ($parent: UnityEngine.Transform, $worldPositionStays: boolean) : void
                /** Sets the world space position and rotation of the Transform component. */
                public SetPositionAndRotation ($position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : void
                /** Moves the transform in the direction and distance of translation. */
                public Translate ($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Space) : void
                /** Moves the transform in the direction and distance of translation. */
                public Translate ($translation: UnityEngine.Vector3) : void
                /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis. */
                public Translate ($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Space) : void
                /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis. */
                public Translate ($x: number, $y: number, $z: number) : void
                /** Moves the transform in the direction and distance of translation. */
                public Translate ($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Transform) : void
                /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis. */
                public Translate ($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Transform) : void
                /** Applies a rotation of eulerAngles.z degrees around the z-axis, eulerAngles.x degrees around the x-axis, and eulerAngles.y degrees around the y-axis (in that order). * @param eulers The rotation to apply in euler angles.
                * @param relativeTo Determines whether to rotate the GameObject either locally to  the GameObject or relative to the Scene in world space.
                */
                public Rotate ($eulers: UnityEngine.Vector3, $relativeTo: UnityEngine.Space) : void
                /** Applies a rotation of eulerAngles.z degrees around the z-axis, eulerAngles.x degrees around the x-axis, and eulerAngles.y degrees around the y-axis (in that order). * @param eulers The rotation to apply in euler angles.
                */
                public Rotate ($eulers: UnityEngine.Vector3) : void
                /** The implementation of this method applies a rotation of zAngle degrees around the z axis, xAngle degrees around the x axis, and yAngle degrees around the y axis (in that order). * @param relativeTo Determines whether to rotate the GameObject either locally to the GameObject or relative to the Scene in world space.
                * @param xAngle Degrees to rotate the GameObject around the X axis.
                * @param yAngle Degrees to rotate the GameObject around the Y axis.
                * @param zAngle Degrees to rotate the GameObject around the Z axis.
                */
                public Rotate ($xAngle: number, $yAngle: number, $zAngle: number, $relativeTo: UnityEngine.Space) : void
                /** The implementation of this method applies a rotation of zAngle degrees around the z axis, xAngle degrees around the x axis, and yAngle degrees around the y axis (in that order). * @param xAngle Degrees to rotate the GameObject around the X axis.
                * @param yAngle Degrees to rotate the GameObject around the Y axis.
                * @param zAngle Degrees to rotate the GameObject around the Z axis.
                */
                public Rotate ($xAngle: number, $yAngle: number, $zAngle: number) : void
                /** Rotates the object around the given axis by the number of degrees defined by the given angle. * @param angle The degrees of rotation to apply.
                * @param axis The axis to apply rotation to.
                * @param relativeTo Determines whether to rotate the GameObject either locally to the GameObject or relative to the Scene in world space.
                */
                public Rotate ($axis: UnityEngine.Vector3, $angle: number, $relativeTo: UnityEngine.Space) : void
                /** Rotates the object around the given axis by the number of degrees defined by the given angle. * @param axis The axis to apply rotation to.
                * @param angle The degrees of rotation to apply.
                */
                public Rotate ($axis: UnityEngine.Vector3, $angle: number) : void
                /** Rotates the transform about axis passing through point in world coordinates by angle degrees. */
                public RotateAround ($point: UnityEngine.Vector3, $axis: UnityEngine.Vector3, $angle: number) : void
                /** Rotates the transform so the forward vector points at target's current position. * @param target Object to point towards.
                * @param worldUp Vector specifying the upward direction.
                */
                public LookAt ($target: UnityEngine.Transform, $worldUp: UnityEngine.Vector3) : void
                /** Rotates the transform so the forward vector points at target's current position. * @param target Object to point towards.
                * @param worldUp Vector specifying the upward direction.
                */
                public LookAt ($target: UnityEngine.Transform) : void
                /** Rotates the transform so the forward vector points at worldPosition. * @param worldPosition Point to look at.
                * @param worldUp Vector specifying the upward direction.
                */
                public LookAt ($worldPosition: UnityEngine.Vector3, $worldUp: UnityEngine.Vector3) : void
                /** Rotates the transform so the forward vector points at worldPosition. * @param worldPosition Point to look at.
                * @param worldUp Vector specifying the upward direction.
                */
                public LookAt ($worldPosition: UnityEngine.Vector3) : void
                /** Transforms direction from local space to world space. */
                public TransformDirection ($direction: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Transforms direction x, y, z from local space to world space. */
                public TransformDirection ($x: number, $y: number, $z: number) : UnityEngine.Vector3
                /** Transforms a direction from world space to local space. The opposite of Transform.TransformDirection. */
                public InverseTransformDirection ($direction: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Transforms the direction x, y, z from world space to local space. The opposite of Transform.TransformDirection. */
                public InverseTransformDirection ($x: number, $y: number, $z: number) : UnityEngine.Vector3
                /** Transforms vector from local space to world space. */
                public TransformVector ($vector: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Transforms vector x, y, z from local space to world space. */
                public TransformVector ($x: number, $y: number, $z: number) : UnityEngine.Vector3
                /** Transforms a vector from world space to local space. The opposite of Transform.TransformVector. */
                public InverseTransformVector ($vector: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Transforms the vector x, y, z from world space to local space. The opposite of Transform.TransformVector. */
                public InverseTransformVector ($x: number, $y: number, $z: number) : UnityEngine.Vector3
                /** Transforms position from local space to world space. */
                public TransformPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Transforms the position x, y, z from local space to world space. */
                public TransformPoint ($x: number, $y: number, $z: number) : UnityEngine.Vector3
                /** Transforms position from world space to local space. */
                public InverseTransformPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Transforms the position x, y, z from world space to local space. The opposite of Transform.TransformPoint. */
                public InverseTransformPoint ($x: number, $y: number, $z: number) : UnityEngine.Vector3
                public DetachChildren () : void
                public SetAsFirstSibling () : void
                public SetAsLastSibling () : void
                /** Sets the sibling index. * @param index Index to set.
                */
                public SetSiblingIndex ($index: number) : void
                public GetSiblingIndex () : number
                /** Finds a child by name n and returns it.
                * @param n Name of child to be found.
                * @returns The found child transform. Null if child with matching name isn't found. 
                */
                public Find ($n: string) : UnityEngine.Transform
                /** Is this transform a child of parent? */
                public IsChildOf ($parent: UnityEngine.Transform) : boolean
                public GetEnumerator () : System.Collections.IEnumerator
                /** Returns a transform child by index.
                * @param index Index of the child transform to return. Must be smaller than Transform.childCount.
                * @returns Transform child by index. 
                */
                public GetChild ($index: number) : UnityEngine.Transform
            }
            /** Element that can be used for screen rendering. */
            class Canvas extends UnityEngine.Behaviour
            {
                protected [__keep_incompatibility]: never;
                /** Is the Canvas in World or Overlay mode? */
                public get renderMode(): UnityEngine.RenderMode;
                public set renderMode(value: UnityEngine.RenderMode);
                /** Is this the root Canvas? */
                public get isRootCanvas(): boolean;
                /** Get the render rect for the Canvas. */
                public get pixelRect(): UnityEngine.Rect;
                /** Used to scale the entire canvas, while still making it fit the screen. Only applies with renderMode is Screen Space. */
                public get scaleFactor(): number;
                public set scaleFactor(value: number);
                /** The number of pixels per unit that is considered the default. */
                public get referencePixelsPerUnit(): number;
                public set referencePixelsPerUnit(value: number);
                /** Allows for nested canvases to override pixelPerfect settings inherited from parent canvases. */
                public get overridePixelPerfect(): boolean;
                public set overridePixelPerfect(value: boolean);
                /** Force elements in the canvas to be aligned with pixels. Only applies with renderMode is Screen Space. */
                public get pixelPerfect(): boolean;
                public set pixelPerfect(value: boolean);
                /** How far away from the camera is the Canvas generated. */
                public get planeDistance(): number;
                public set planeDistance(value: number);
                /** The render order in which the canvas is being emitted to the Scene. (Read Only) */
                public get renderOrder(): number;
                /** Override the sorting of canvas. */
                public get overrideSorting(): boolean;
                public set overrideSorting(value: boolean);
                /** Canvas' order within a sorting layer. */
                public get sortingOrder(): number;
                public set sortingOrder(value: number);
                /** For Overlay mode, display index on which the UI canvas will appear. */
                public get targetDisplay(): number;
                public set targetDisplay(value: number);
                /** Unique ID of the Canvas' sorting layer. */
                public get sortingLayerID(): number;
                public set sortingLayerID(value: number);
                /** Cached calculated value based upon SortingLayerID. */
                public get cachedSortingLayerValue(): number;
                /** Get or set the mask of additional shader channels to be used when creating the Canvas mesh. */
                public get additionalShaderChannels(): UnityEngine.AdditionalCanvasShaderChannels;
                public set additionalShaderChannels(value: UnityEngine.AdditionalCanvasShaderChannels);
                /** Name of the Canvas' sorting layer. */
                public get sortingLayerName(): string;
                public set sortingLayerName(value: string);
                /** Returns the Canvas closest to root, by checking through each parent and returning the last canvas found. If no other canvas is found then the canvas will return itself. */
                public get rootCanvas(): UnityEngine.Canvas;
                /** Returns the canvas display size based on the selected render mode and target display. */
                public get renderingDisplaySize(): UnityEngine.Vector2;
                /** Camera used for sizing the Canvas when in Screen Space - Camera. Also used as the Camera that events will be sent through for a World Space [[Canvas]. */
                public get worldCamera(): UnityEngine.Camera;
                public set worldCamera(value: UnityEngine.Camera);
                /** The normalized grid size that the canvas will split the renderable area into. */
                public get normalizedSortingGridSize(): number;
                public set normalizedSortingGridSize(value: number);
                public static add_preWillRenderCanvases ($value: UnityEngine.Canvas.WillRenderCanvases) : void
                public static remove_preWillRenderCanvases ($value: UnityEngine.Canvas.WillRenderCanvases) : void
                public static add_willRenderCanvases ($value: UnityEngine.Canvas.WillRenderCanvases) : void
                public static remove_willRenderCanvases ($value: UnityEngine.Canvas.WillRenderCanvases) : void
                public static GetDefaultCanvasMaterial () : UnityEngine.Material
                public static GetETC1SupportedCanvasMaterial () : UnityEngine.Material
                public static ForceUpdateCanvases () : void
                public constructor ()
            }
            /** A component that will render to the screen after all normal rendering has completed when attached to a Canvas. Designed for GUI application. */
            class CanvasRenderer extends UnityEngine.Component
            {
                protected [__keep_incompatibility]: never;
            }
            interface ISerializationCallbackReceiver
            {
            }
            interface ICanvasRaycastFilter
            {
            }
            /** Represents a Sprite object for use in 2D gameplay. */
            class Sprite extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
                /** Bounds of the Sprite, specified by its center and extents in world space units. */
                public get bounds(): UnityEngine.Bounds;
                /** Location of the Sprite on the original Texture, specified in pixels. */
                public get rect(): UnityEngine.Rect;
                /** Returns the border sizes of the sprite. */
                public get border(): UnityEngine.Vector4;
                /** Get the reference to the used texture. If packed this will point to the atlas, if not packed will point to the source sprite. */
                public get texture(): UnityEngine.Texture2D;
                /** The number of pixels in the sprite that correspond to one unit in world space. (Read Only) */
                public get pixelsPerUnit(): number;
                /** The Variant scale of texture used by the Sprite. This is useful to check when a Variant SpriteAtlas is being used by Sprites. */
                public get spriteAtlasTextureScale(): number;
                /** Returns the texture that contains the alpha channel from the source texture. Unity generates this texture under the hood for sprites that have alpha in the source, and need to be compressed using techniques like ETC1.
                Returns NULL if there is no associated alpha texture for the source sprite. This is the case if the sprite has not been setup to use ETC1 compression. */
                public get associatedAlphaSplitTexture(): UnityEngine.Texture2D;
                /** Location of the Sprite's center point in the Rect on the original Texture, specified in pixels. */
                public get pivot(): UnityEngine.Vector2;
                public get isUsingPlaceholder(): boolean;
                /** Returns true if this Sprite is packed in an atlas. */
                public get packed(): boolean;
                /** If Sprite is packed (see Sprite.packed), returns its SpritePackingMode. */
                public get packingMode(): UnityEngine.SpritePackingMode;
                /** If Sprite is packed (see Sprite.packed), returns its SpritePackingRotation. */
                public get packingRotation(): UnityEngine.SpritePackingRotation;
                /** Get the rectangle this sprite uses on its texture. Raises an exception if this sprite is tightly packed in an atlas. */
                public get textureRect(): UnityEngine.Rect;
                /** Gets the offset of the rectangle this sprite uses on its texture to the original sprite bounds. If sprite mesh type is FullRect, offset is zero. */
                public get textureRectOffset(): UnityEngine.Vector2;
                /** Returns a copy of the array containing sprite mesh vertex positions. */
                public get vertices(): System.Array$1<UnityEngine.Vector2>;
                /** Returns a copy of the array containing sprite mesh triangles. */
                public get triangles(): System.Array$1<number>;
                /** The base texture coordinates of the sprite mesh. */
                public get uv(): System.Array$1<UnityEngine.Vector2>;
                public GetPhysicsShapeCount () : number
                /** The number of points in the selected physics shape for the Sprite.
                * @param shapeIdx The index of the physics shape to retrieve the number of points from.
                * @returns The number of points in the selected physics shape for the Sprite. 
                */
                public GetPhysicsShapePointCount ($shapeIdx: number) : number
                public GetPhysicsShape ($shapeIdx: number, $physicsShape: System.Collections.Generic.List$1<UnityEngine.Vector2>) : number
                public OverridePhysicsShape ($physicsShapes: System.Collections.Generic.IList$1<System.Array$1<UnityEngine.Vector2>>) : void
                /** Sets up new Sprite geometry. * @param vertices Array of vertex positions in Sprite Rect space.
                * @param triangles Array of sprite mesh triangle indices.
                */
                public OverrideGeometry ($vertices: System.Array$1<UnityEngine.Vector2>, $triangles: System.Array$1<number>) : void
                /** Create a new Sprite object. * @param texture Texture from which to obtain the sprite graphic.
                * @param rect Rectangular section of the texture to use for the sprite.
                * @param pivot Sprite's pivot point relative to its graphic rectangle.
                * @param pixelsPerUnit The number of pixels in the sprite that correspond to one unit in world space.
                * @param extrude Amount by which the sprite mesh should be expanded outwards.
                * @param meshType Controls the type of mesh generated for the sprite.
                * @param border The border sizes of the sprite (X=left, Y=bottom, Z=right, W=top).
                * @param generateFallbackPhysicsShape Generates a default physics shape for the sprite.
                */
                public static Create ($texture: UnityEngine.Texture2D, $rect: UnityEngine.Rect, $pivot: UnityEngine.Vector2, $pixelsPerUnit: number, $extrude: number, $meshType: UnityEngine.SpriteMeshType, $border: UnityEngine.Vector4, $generateFallbackPhysicsShape: boolean) : UnityEngine.Sprite
                /** Create a new Sprite object. * @param texture Texture from which to obtain the sprite graphic.
                * @param rect Rectangular section of the texture to use for the sprite.
                * @param pivot Sprite's pivot point relative to its graphic rectangle.
                * @param pixelsPerUnit The number of pixels in the sprite that correspond to one unit in world space.
                * @param extrude Amount by which the sprite mesh should be expanded outwards.
                * @param meshType Controls the type of mesh generated for the sprite.
                * @param border The border sizes of the sprite (X=left, Y=bottom, Z=right, W=top).
                * @param generateFallbackPhysicsShape Generates a default physics shape for the sprite.
                */
                public static Create ($texture: UnityEngine.Texture2D, $rect: UnityEngine.Rect, $pivot: UnityEngine.Vector2, $pixelsPerUnit: number, $extrude: number, $meshType: UnityEngine.SpriteMeshType, $border: UnityEngine.Vector4) : UnityEngine.Sprite
                /** Create a new Sprite object. * @param texture Texture from which to obtain the sprite graphic.
                * @param rect Rectangular section of the texture to use for the sprite.
                * @param pivot Sprite's pivot point relative to its graphic rectangle.
                * @param pixelsPerUnit The number of pixels in the sprite that correspond to one unit in world space.
                * @param extrude Amount by which the sprite mesh should be expanded outwards.
                * @param meshType Controls the type of mesh generated for the sprite.
                * @param border The border sizes of the sprite (X=left, Y=bottom, Z=right, W=top).
                * @param generateFallbackPhysicsShape Generates a default physics shape for the sprite.
                */
                public static Create ($texture: UnityEngine.Texture2D, $rect: UnityEngine.Rect, $pivot: UnityEngine.Vector2, $pixelsPerUnit: number, $extrude: number, $meshType: UnityEngine.SpriteMeshType) : UnityEngine.Sprite
                /** Create a new Sprite object. * @param texture Texture from which to obtain the sprite graphic.
                * @param rect Rectangular section of the texture to use for the sprite.
                * @param pivot Sprite's pivot point relative to its graphic rectangle.
                * @param pixelsPerUnit The number of pixels in the sprite that correspond to one unit in world space.
                * @param extrude Amount by which the sprite mesh should be expanded outwards.
                * @param meshType Controls the type of mesh generated for the sprite.
                * @param border The border sizes of the sprite (X=left, Y=bottom, Z=right, W=top).
                * @param generateFallbackPhysicsShape Generates a default physics shape for the sprite.
                */
                public static Create ($texture: UnityEngine.Texture2D, $rect: UnityEngine.Rect, $pivot: UnityEngine.Vector2, $pixelsPerUnit: number, $extrude: number) : UnityEngine.Sprite
                /** Create a new Sprite object. * @param texture Texture from which to obtain the sprite graphic.
                * @param rect Rectangular section of the texture to use for the sprite.
                * @param pivot Sprite's pivot point relative to its graphic rectangle.
                * @param pixelsPerUnit The number of pixels in the sprite that correspond to one unit in world space.
                * @param extrude Amount by which the sprite mesh should be expanded outwards.
                * @param meshType Controls the type of mesh generated for the sprite.
                * @param border The border sizes of the sprite (X=left, Y=bottom, Z=right, W=top).
                * @param generateFallbackPhysicsShape Generates a default physics shape for the sprite.
                */
                public static Create ($texture: UnityEngine.Texture2D, $rect: UnityEngine.Rect, $pivot: UnityEngine.Vector2, $pixelsPerUnit: number) : UnityEngine.Sprite
                /** Create a new Sprite object. * @param texture Texture from which to obtain the sprite graphic.
                * @param rect Rectangular section of the texture to use for the sprite.
                * @param pivot Sprite's pivot point relative to its graphic rectangle.
                * @param pixelsPerUnit The number of pixels in the sprite that correspond to one unit in world space.
                * @param extrude Amount by which the sprite mesh should be expanded outwards.
                * @param meshType Controls the type of mesh generated for the sprite.
                * @param border The border sizes of the sprite (X=left, Y=bottom, Z=right, W=top).
                * @param generateFallbackPhysicsShape Generates a default physics shape for the sprite.
                */
                public static Create ($texture: UnityEngine.Texture2D, $rect: UnityEngine.Rect, $pivot: UnityEngine.Vector2) : UnityEngine.Sprite
            }
            /** A UnityGUI event. */
            class Event extends System.Object
            {
                protected [__keep_incompatibility]: never;
                /** Is Shift held down? (Read Only) */
                public get shift(): boolean;
                public set shift(value: boolean);
                /** Is Control key held down? (Read Only) */
                public get control(): boolean;
                public set control(value: boolean);
                /** Is Alt/Option key held down? (Read Only) */
                public get alt(): boolean;
                public set alt(value: boolean);
                /** Is Command/Windows key held down? (Read Only) */
                public get command(): boolean;
                public set command(value: boolean);
                /** Is Caps Lock on? (Read Only) */
                public get capsLock(): boolean;
                public set capsLock(value: boolean);
                /** Is the current keypress on the numeric keyboard? (Read Only) */
                public get numeric(): boolean;
                public set numeric(value: boolean);
                /** Is the current keypress a function key? (Read Only) */
                public get functionKey(): boolean;
                /** The current event that's being processed right now. */
                public static get current(): UnityEngine.Event;
                public static set current(value: UnityEngine.Event);
                /** Is this event a keyboard event? (Read Only) */
                public get isKey(): boolean;
                /** Is this event a mouse event? (Read Only) */
                public get isMouse(): boolean;
                public get isScrollWheel(): boolean;
                public get rawType(): UnityEngine.EventType;
                /** The mouse position. */
                public get mousePosition(): UnityEngine.Vector2;
                public set mousePosition(value: UnityEngine.Vector2);
                /** The relative movement of the mouse compared to last event. */
                public get delta(): UnityEngine.Vector2;
                public set delta(value: UnityEngine.Vector2);
                /** The type of pointer that created this event (for example, mouse, touch screen, pen). */
                public get pointerType(): UnityEngine.PointerType;
                public set pointerType(value: UnityEngine.PointerType);
                /** Which mouse button was pressed. */
                public get button(): number;
                public set button(value: number);
                /** Which modifier keys are held down. */
                public get modifiers(): UnityEngine.EventModifiers;
                public set modifiers(value: UnityEngine.EventModifiers);
                /** How hard stylus pressure is applied. */
                public get pressure(): number;
                public set pressure(value: number);
                /** How many consecutive mouse clicks have we received. */
                public get clickCount(): number;
                public set clickCount(value: number);
                /** The character typed. */
                public get character(): number;
                public set character(value: number);
                /** The raw key code for keyboard events. */
                public get keyCode(): UnityEngine.KeyCode;
                public set keyCode(value: UnityEngine.KeyCode);
                /** Index of display that the event belongs to. */
                public get displayIndex(): number;
                public set displayIndex(value: number);
                /** The type of event. */
                public get type(): UnityEngine.EventType;
                public set type(value: UnityEngine.EventType);
                /** The name of an ExecuteCommand or ValidateCommand Event. */
                public get commandName(): string;
                public set commandName(value: string);
                /** Create a keyboard event. */
                public static KeyboardEvent ($key: string) : UnityEngine.Event
                public Use () : void
                /** Get a filtered event type for a given control ID. * @param controlID The ID of the control you are querying from.
                */
                public GetTypeForControl ($controlID: number) : UnityEngine.EventType
                /** Get the next queued [Event] from the event system. * @param outEvent Next Event.
                */
                public static PopEvent ($outEvent: UnityEngine.Event) : boolean
                public static GetEventCount () : number
                public constructor ()
                public constructor ($displayIndex: number)
                public constructor ($other: UnityEngine.Event)
            }
            /** Types of UnityGUI input and processing events. */
            enum EventType
            { MouseDown = 0, MouseUp = 1, MouseMove = 2, MouseDrag = 3, KeyDown = 4, KeyUp = 5, ScrollWheel = 6, Repaint = 7, Layout = 8, DragUpdated = 9, DragPerform = 10, DragExited = 15, Ignore = 11, Used = 12, ValidateCommand = 13, ExecuteCommand = 14, ContextClick = 16, MouseEnterWindow = 20, MouseLeaveWindow = 21, TouchDown = 30, TouchUp = 31, TouchMove = 32, TouchEnter = 33, TouchLeave = 34, TouchStationary = 35, mouseDown = 0, mouseUp = 1, mouseMove = 2, mouseDrag = 3, keyDown = 4, keyUp = 5, scrollWheel = 6, repaint = 7, layout = 8, dragUpdated = 9, dragPerform = 10, ignore = 11, used = 12 }
            /** Pointer types. */
            enum PointerType
            { Mouse = 0, Touch = 1, Pen = 2 }
            /** Types of modifier key that can be active during a keystroke event. */
            enum EventModifiers
            { None = 0, Shift = 1, Control = 2, Alt = 4, Command = 8, Numeric = 16, CapsLock = 32, FunctionKey = 64 }
            /** Key codes returned by Event.keyCode. These map directly to a physical key on the keyboard. */
            enum KeyCode
            { None = 0, Backspace = 8, Delete = 127, Tab = 9, Clear = 12, Return = 13, Pause = 19, Escape = 27, Space = 32, Keypad0 = 256, Keypad1 = 257, Keypad2 = 258, Keypad3 = 259, Keypad4 = 260, Keypad5 = 261, Keypad6 = 262, Keypad7 = 263, Keypad8 = 264, Keypad9 = 265, KeypadPeriod = 266, KeypadDivide = 267, KeypadMultiply = 268, KeypadMinus = 269, KeypadPlus = 270, KeypadEnter = 271, KeypadEquals = 272, UpArrow = 273, DownArrow = 274, RightArrow = 275, LeftArrow = 276, Insert = 277, Home = 278, End = 279, PageUp = 280, PageDown = 281, F1 = 282, F2 = 283, F3 = 284, F4 = 285, F5 = 286, F6 = 287, F7 = 288, F8 = 289, F9 = 290, F10 = 291, F11 = 292, F12 = 293, F13 = 294, F14 = 295, F15 = 296, Alpha0 = 48, Alpha1 = 49, Alpha2 = 50, Alpha3 = 51, Alpha4 = 52, Alpha5 = 53, Alpha6 = 54, Alpha7 = 55, Alpha8 = 56, Alpha9 = 57, Exclaim = 33, DoubleQuote = 34, Hash = 35, Dollar = 36, Percent = 37, Ampersand = 38, Quote = 39, LeftParen = 40, RightParen = 41, Asterisk = 42, Plus = 43, Comma = 44, Minus = 45, Period = 46, Slash = 47, Colon = 58, Semicolon = 59, Less = 60, Equals = 61, Greater = 62, Question = 63, At = 64, LeftBracket = 91, Backslash = 92, RightBracket = 93, Caret = 94, Underscore = 95, BackQuote = 96, A = 97, B = 98, C = 99, D = 100, E = 101, F = 102, G = 103, H = 104, I = 105, J = 106, K = 107, L = 108, M = 109, N = 110, O = 111, P = 112, Q = 113, R = 114, S = 115, T = 116, U = 117, V = 118, W = 119, X = 120, Y = 121, Z = 122, LeftCurlyBracket = 123, Pipe = 124, RightCurlyBracket = 125, Tilde = 126, Numlock = 300, CapsLock = 301, ScrollLock = 302, RightShift = 303, LeftShift = 304, RightControl = 305, LeftControl = 306, RightAlt = 307, LeftAlt = 308, LeftMeta = 310, LeftCommand = 310, LeftApple = 310, LeftWindows = 311, RightMeta = 309, RightCommand = 309, RightApple = 309, RightWindows = 312, AltGr = 313, Help = 315, Print = 316, SysReq = 317, Break = 318, Menu = 319, Mouse0 = 323, Mouse1 = 324, Mouse2 = 325, Mouse3 = 326, Mouse4 = 327, Mouse5 = 328, Mouse6 = 329, JoystickButton0 = 330, JoystickButton1 = 331, JoystickButton2 = 332, JoystickButton3 = 333, JoystickButton4 = 334, JoystickButton5 = 335, JoystickButton6 = 336, JoystickButton7 = 337, JoystickButton8 = 338, JoystickButton9 = 339, JoystickButton10 = 340, JoystickButton11 = 341, JoystickButton12 = 342, JoystickButton13 = 343, JoystickButton14 = 344, JoystickButton15 = 345, JoystickButton16 = 346, JoystickButton17 = 347, JoystickButton18 = 348, JoystickButton19 = 349, Joystick1Button0 = 350, Joystick1Button1 = 351, Joystick1Button2 = 352, Joystick1Button3 = 353, Joystick1Button4 = 354, Joystick1Button5 = 355, Joystick1Button6 = 356, Joystick1Button7 = 357, Joystick1Button8 = 358, Joystick1Button9 = 359, Joystick1Button10 = 360, Joystick1Button11 = 361, Joystick1Button12 = 362, Joystick1Button13 = 363, Joystick1Button14 = 364, Joystick1Button15 = 365, Joystick1Button16 = 366, Joystick1Button17 = 367, Joystick1Button18 = 368, Joystick1Button19 = 369, Joystick2Button0 = 370, Joystick2Button1 = 371, Joystick2Button2 = 372, Joystick2Button3 = 373, Joystick2Button4 = 374, Joystick2Button5 = 375, Joystick2Button6 = 376, Joystick2Button7 = 377, Joystick2Button8 = 378, Joystick2Button9 = 379, Joystick2Button10 = 380, Joystick2Button11 = 381, Joystick2Button12 = 382, Joystick2Button13 = 383, Joystick2Button14 = 384, Joystick2Button15 = 385, Joystick2Button16 = 386, Joystick2Button17 = 387, Joystick2Button18 = 388, Joystick2Button19 = 389, Joystick3Button0 = 390, Joystick3Button1 = 391, Joystick3Button2 = 392, Joystick3Button3 = 393, Joystick3Button4 = 394, Joystick3Button5 = 395, Joystick3Button6 = 396, Joystick3Button7 = 397, Joystick3Button8 = 398, Joystick3Button9 = 399, Joystick3Button10 = 400, Joystick3Button11 = 401, Joystick3Button12 = 402, Joystick3Button13 = 403, Joystick3Button14 = 404, Joystick3Button15 = 405, Joystick3Button16 = 406, Joystick3Button17 = 407, Joystick3Button18 = 408, Joystick3Button19 = 409, Joystick4Button0 = 410, Joystick4Button1 = 411, Joystick4Button2 = 412, Joystick4Button3 = 413, Joystick4Button4 = 414, Joystick4Button5 = 415, Joystick4Button6 = 416, Joystick4Button7 = 417, Joystick4Button8 = 418, Joystick4Button9 = 419, Joystick4Button10 = 420, Joystick4Button11 = 421, Joystick4Button12 = 422, Joystick4Button13 = 423, Joystick4Button14 = 424, Joystick4Button15 = 425, Joystick4Button16 = 426, Joystick4Button17 = 427, Joystick4Button18 = 428, Joystick4Button19 = 429, Joystick5Button0 = 430, Joystick5Button1 = 431, Joystick5Button2 = 432, Joystick5Button3 = 433, Joystick5Button4 = 434, Joystick5Button5 = 435, Joystick5Button6 = 436, Joystick5Button7 = 437, Joystick5Button8 = 438, Joystick5Button9 = 439, Joystick5Button10 = 440, Joystick5Button11 = 441, Joystick5Button12 = 442, Joystick5Button13 = 443, Joystick5Button14 = 444, Joystick5Button15 = 445, Joystick5Button16 = 446, Joystick5Button17 = 447, Joystick5Button18 = 448, Joystick5Button19 = 449, Joystick6Button0 = 450, Joystick6Button1 = 451, Joystick6Button2 = 452, Joystick6Button3 = 453, Joystick6Button4 = 454, Joystick6Button5 = 455, Joystick6Button6 = 456, Joystick6Button7 = 457, Joystick6Button8 = 458, Joystick6Button9 = 459, Joystick6Button10 = 460, Joystick6Button11 = 461, Joystick6Button12 = 462, Joystick6Button13 = 463, Joystick6Button14 = 464, Joystick6Button15 = 465, Joystick6Button16 = 466, Joystick6Button17 = 467, Joystick6Button18 = 468, Joystick6Button19 = 469, Joystick7Button0 = 470, Joystick7Button1 = 471, Joystick7Button2 = 472, Joystick7Button3 = 473, Joystick7Button4 = 474, Joystick7Button5 = 475, Joystick7Button6 = 476, Joystick7Button7 = 477, Joystick7Button8 = 478, Joystick7Button9 = 479, Joystick7Button10 = 480, Joystick7Button11 = 481, Joystick7Button12 = 482, Joystick7Button13 = 483, Joystick7Button14 = 484, Joystick7Button15 = 485, Joystick7Button16 = 486, Joystick7Button17 = 487, Joystick7Button18 = 488, Joystick7Button19 = 489, Joystick8Button0 = 490, Joystick8Button1 = 491, Joystick8Button2 = 492, Joystick8Button3 = 493, Joystick8Button4 = 494, Joystick8Button5 = 495, Joystick8Button6 = 496, Joystick8Button7 = 497, Joystick8Button8 = 498, Joystick8Button9 = 499, Joystick8Button10 = 500, Joystick8Button11 = 501, Joystick8Button12 = 502, Joystick8Button13 = 503, Joystick8Button14 = 504, Joystick8Button15 = 505, Joystick8Button16 = 506, Joystick8Button17 = 507, Joystick8Button18 = 508, Joystick8Button19 = 509 }
            /** Interface into the Input system. */
            class Input extends System.Object
            {
                protected [__keep_incompatibility]: never;
                /** Enables/Disables mouse simulation with touches. By default this option is enabled. */
                public static get simulateMouseWithTouches(): boolean;
                public static set simulateMouseWithTouches(value: boolean);
                /** Is any key or mouse button currently held down? (Read Only) */
                public static get anyKey(): boolean;
                /** Returns true the first frame the user hits any key or mouse button. (Read Only) */
                public static get anyKeyDown(): boolean;
                /** Returns the keyboard input entered this frame. (Read Only) */
                public static get inputString(): string;
                /** The current mouse position in pixel coordinates. (Read Only). */
                public static get mousePosition(): UnityEngine.Vector3;
                /** The current mouse scroll delta. (Read Only) */
                public static get mouseScrollDelta(): UnityEngine.Vector2;
                /** Controls enabling and disabling of IME input composition. */
                public static get imeCompositionMode(): UnityEngine.IMECompositionMode;
                public static set imeCompositionMode(value: UnityEngine.IMECompositionMode);
                /** The current IME composition string being typed by the user. */
                public static get compositionString(): string;
                /** Does the user have an IME keyboard input source selected? */
                public static get imeIsSelected(): boolean;
                /** The current text input position used by IMEs to open windows. */
                public static get compositionCursorPos(): UnityEngine.Vector2;
                public static set compositionCursorPos(value: UnityEngine.Vector2);
                /** Indicates if a mouse device is detected. */
                public static get mousePresent(): boolean;
                /** Number of touches. Guaranteed not to change throughout the frame. (Read Only) */
                public static get touchCount(): number;
                /** Bool value which let's users check if touch pressure is supported. */
                public static get touchPressureSupported(): boolean;
                /** Returns true when Stylus Touch is supported by a device or platform. */
                public static get stylusTouchSupported(): boolean;
                /** Returns whether the device on which application is currently running supports touch input. */
                public static get touchSupported(): boolean;
                /** Property indicating whether the system handles multiple touches. */
                public static get multiTouchEnabled(): boolean;
                public static set multiTouchEnabled(value: boolean);
                /** Device physical orientation as reported by OS. (Read Only) */
                public static get deviceOrientation(): UnityEngine.DeviceOrientation;
                /** Last measured linear acceleration of a device in three-dimensional space. (Read Only) */
                public static get acceleration(): UnityEngine.Vector3;
                /** This property controls if input sensors should be compensated for screen orientation. */
                public static get compensateSensors(): boolean;
                public static set compensateSensors(value: boolean);
                /** Number of acceleration measurements which occurred during last frame. */
                public static get accelerationEventCount(): number;
                /** Should  Back button quit the application?
                Only usable on Android, Windows Phone or Windows Tablets. */
                public static get backButtonLeavesApp(): boolean;
                public static set backButtonLeavesApp(value: boolean);
                /** Property for accessing device location (handheld devices only). (Read Only) */
                public static get location(): UnityEngine.LocationService;
                /** Property for accessing compass (handheld devices only). (Read Only) */
                public static get compass(): UnityEngine.Compass;
                /** Returns default gyroscope. */
                public static get gyro(): UnityEngine.Gyroscope;
                /** Returns list of objects representing status of all touches during last frame. (Read Only) (Allocates temporary variables). */
                public static get touches(): System.Array$1<UnityEngine.Touch>;
                /** Returns list of acceleration measurements which occurred during the last frame. (Read Only) (Allocates temporary variables). */
                public static get accelerationEvents(): System.Array$1<UnityEngine.AccelerationEvent>;
                /** Returns the value of the virtual axis identified by axisName. */
                public static GetAxis ($axisName: string) : number
                /** Returns the value of the virtual axis identified by axisName with no smoothing filtering applied. */
                public static GetAxisRaw ($axisName: string) : number
                /** Returns true while the virtual button identified by buttonName is held down.
                * @param buttonName The name of the button such as Jump.
                * @returns True when an axis has been pressed and not released. 
                */
                public static GetButton ($buttonName: string) : boolean
                /** Returns true during the frame the user pressed down the virtual button identified by buttonName. */
                public static GetButtonDown ($buttonName: string) : boolean
                /** Returns true the first frame the user releases the virtual button identified by buttonName. */
                public static GetButtonUp ($buttonName: string) : boolean
                /** Returns whether the given mouse button is held down. */
                public static GetMouseButton ($button: number) : boolean
                /** Returns true during the frame the user pressed the given mouse button. */
                public static GetMouseButtonDown ($button: number) : boolean
                /** Returns true during the frame the user releases the given mouse button. */
                public static GetMouseButtonUp ($button: number) : boolean
                public static ResetInputAxes () : void
                /** Determine whether a particular joystick model has been preconfigured by Unity. (Linux-only).
                * @param joystickName The name of the joystick to check (returned by Input.GetJoystickNames).
                * @returns True if the joystick layout has been preconfigured; false otherwise. 
                */
                public static IsJoystickPreconfigured ($joystickName: string) : boolean
                public static GetJoystickNames () : System.Array$1<string>
                /** Call Input.GetTouch to obtain a Touch struct.
                * @param index The touch input on the device screen.
                * @returns Touch details in the struct. 
                */
                public static GetTouch ($index: number) : UnityEngine.Touch
                /** Returns specific acceleration measurement which occurred during last frame. (Does not allocate temporary variables). */
                public static GetAccelerationEvent ($index: number) : UnityEngine.AccelerationEvent
                /** Returns true while the user holds down the key identified by the key KeyCode enum parameter. */
                public static GetKey ($key: UnityEngine.KeyCode) : boolean
                /** Returns true while the user holds down the key identified by name. */
                public static GetKey ($name: string) : boolean
                /** Returns true during the frame the user releases the key identified by the key KeyCode enum parameter. */
                public static GetKeyUp ($key: UnityEngine.KeyCode) : boolean
                /** Returns true during the frame the user releases the key identified by name. */
                public static GetKeyUp ($name: string) : boolean
                /** Returns true during the frame the user starts pressing down the key identified by the key KeyCode enum parameter. */
                public static GetKeyDown ($key: UnityEngine.KeyCode) : boolean
                /** Returns true during the frame the user starts pressing down the key identified by name. */
                public static GetKeyDown ($name: string) : boolean
                public constructor ()
            }
            /** Structure describing acceleration status of the device. */
            class AccelerationEvent extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            /** Controls IME input. */
            enum IMECompositionMode
            { Auto = 0, On = 1, Off = 2 }
            /** Describes physical orientation of the device as determined by the OS. */
            enum DeviceOrientation
            { Unknown = 0, Portrait = 1, PortraitUpsideDown = 2, LandscapeLeft = 3, LandscapeRight = 4, FaceUp = 5, FaceDown = 6 }
            /** Provides methods that allow an application to access the device's location. */
            class LocationService extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** Interface into compass functionality. */
            class Compass extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** Interface into the Gyroscope. */
            class Gyroscope extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** Easily generate random data for games. */
            class Random extends System.Object
            {
                protected [__keep_incompatibility]: never;
                /** Gets or sets the full internal state of the random number generator. */
                public static get state(): UnityEngine.Random.State;
                public static set state(value: UnityEngine.Random.State);
                /** Returns a random float within [0.0..1.0] (range is inclusive) (Read Only). */
                public static get value(): number;
                /** Returns a random point inside or on a sphere with radius 1.0 (Read Only). */
                public static get insideUnitSphere(): UnityEngine.Vector3;
                /** Returns a random point inside or on a circle with radius 1.0 (Read Only). */
                public static get insideUnitCircle(): UnityEngine.Vector2;
                /** Returns a random point on the surface of a sphere with radius 1.0 (Read Only). */
                public static get onUnitSphere(): UnityEngine.Vector3;
                /** Returns a random rotation (Read Only). */
                public static get rotation(): UnityEngine.Quaternion;
                /** Returns a random rotation with uniform distribution (Read Only). */
                public static get rotationUniform(): UnityEngine.Quaternion;
                public static ColorHSV () : UnityEngine.Color
                /** Generates a random color from HSV and alpha ranges.
                * @param hueMin Minimum hue [0..1].
                * @param hueMax Maximum hue [0..1].
                * @param saturationMin Minimum saturation [0..1].
                * @param saturationMax Maximum saturation [0..1].
                * @param valueMin Minimum value [0..1].
                * @param valueMax Maximum value [0..1].
                * @param alphaMin Minimum alpha [0..1].
                * @param alphaMax Maximum alpha [0..1].
                * @returns A random color with HSV and alpha values in the (inclusive) input ranges. Values for each component are derived via linear interpolation of value. 
                */
                public static ColorHSV ($hueMin: number, $hueMax: number) : UnityEngine.Color
                /** Generates a random color from HSV and alpha ranges.
                * @param hueMin Minimum hue [0..1].
                * @param hueMax Maximum hue [0..1].
                * @param saturationMin Minimum saturation [0..1].
                * @param saturationMax Maximum saturation [0..1].
                * @param valueMin Minimum value [0..1].
                * @param valueMax Maximum value [0..1].
                * @param alphaMin Minimum alpha [0..1].
                * @param alphaMax Maximum alpha [0..1].
                * @returns A random color with HSV and alpha values in the (inclusive) input ranges. Values for each component are derived via linear interpolation of value. 
                */
                public static ColorHSV ($hueMin: number, $hueMax: number, $saturationMin: number, $saturationMax: number) : UnityEngine.Color
                /** Generates a random color from HSV and alpha ranges.
                * @param hueMin Minimum hue [0..1].
                * @param hueMax Maximum hue [0..1].
                * @param saturationMin Minimum saturation [0..1].
                * @param saturationMax Maximum saturation [0..1].
                * @param valueMin Minimum value [0..1].
                * @param valueMax Maximum value [0..1].
                * @param alphaMin Minimum alpha [0..1].
                * @param alphaMax Maximum alpha [0..1].
                * @returns A random color with HSV and alpha values in the (inclusive) input ranges. Values for each component are derived via linear interpolation of value. 
                */
                public static ColorHSV ($hueMin: number, $hueMax: number, $saturationMin: number, $saturationMax: number, $valueMin: number, $valueMax: number) : UnityEngine.Color
                /** Generates a random color from HSV and alpha ranges.
                * @param hueMin Minimum hue [0..1].
                * @param hueMax Maximum hue [0..1].
                * @param saturationMin Minimum saturation [0..1].
                * @param saturationMax Maximum saturation [0..1].
                * @param valueMin Minimum value [0..1].
                * @param valueMax Maximum value [0..1].
                * @param alphaMin Minimum alpha [0..1].
                * @param alphaMax Maximum alpha [0..1].
                * @returns A random color with HSV and alpha values in the (inclusive) input ranges. Values for each component are derived via linear interpolation of value. 
                */
                public static ColorHSV ($hueMin: number, $hueMax: number, $saturationMin: number, $saturationMax: number, $valueMin: number, $valueMax: number, $alphaMin: number, $alphaMax: number) : UnityEngine.Color
                /** Initializes the random number generator state with a seed. * @param seed Seed used to initialize the random number generator.
                */
                public static InitState ($seed: number) : void
                /** Returns a random float within [minInclusive..maxInclusive] (range is inclusive). */
                public static Range ($minInclusive: number, $maxInclusive: number) : number
                /** Return a random int within [minInclusive..maxExclusive) (Read Only). */
                public static Range ($minInclusive: number, $maxExclusive: number) : number
            }
            /** Quaternions are used to represent rotations. */
            class Quaternion extends System.ValueType implements System.IEquatable$1<UnityEngine.Quaternion>, System.IFormattable
            {
                protected [__keep_incompatibility]: never;
                /** X component of the Quaternion. Don't modify this directly unless you know quaternions inside out. */
                public x : number/** Y component of the Quaternion. Don't modify this directly unless you know quaternions inside out. */
                public y : number/** Z component of the Quaternion. Don't modify this directly unless you know quaternions inside out. */
                public z : number/** W component of the Quaternion. Do not directly modify quaternions. */
                public w : number
                public static kEpsilon : number/** The identity rotation (Read Only). */
                public static get identity(): UnityEngine.Quaternion;
                /** Returns or sets the euler angle representation of the rotation. */
                public get eulerAngles(): UnityEngine.Vector3;
                public set eulerAngles(value: UnityEngine.Vector3);
                /** Returns this quaternion with a magnitude of 1 (Read Only). */
                public get normalized(): UnityEngine.Quaternion;
                public get_Item ($index: number) : number
                public set_Item ($index: number, $value: number) : void
                /** Set x, y, z and w components of an existing Quaternion. */
                public Set ($newX: number, $newY: number, $newZ: number, $newW: number) : void
                public static op_Multiply ($lhs: UnityEngine.Quaternion, $rhs: UnityEngine.Quaternion) : UnityEngine.Quaternion
                public static op_Multiply ($rotation: UnityEngine.Quaternion, $point: UnityEngine.Vector3) : UnityEngine.Vector3
                public static op_Equality ($lhs: UnityEngine.Quaternion, $rhs: UnityEngine.Quaternion) : boolean
                public static op_Inequality ($lhs: UnityEngine.Quaternion, $rhs: UnityEngine.Quaternion) : boolean
                /** The dot product between two rotations. */
                public static Dot ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion) : number
                /** Creates a rotation with the specified forward and upwards directions. * @param view The direction to look in.
                * @param up The vector that defines in which direction up is.
                */
                public SetLookRotation ($view: UnityEngine.Vector3) : void
                /** Creates a rotation with the specified forward and upwards directions. * @param view The direction to look in.
                * @param up The vector that defines in which direction up is.
                */
                public SetLookRotation ($view: UnityEngine.Vector3, $up: UnityEngine.Vector3) : void
                /** Returns the angle in degrees between two rotations a and b. */
                public static Angle ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion) : number
                /** Returns a rotation that rotates z degrees around the z axis, x degrees around the x axis, and y degrees around the y axis; applied in that order. */
                public static Euler ($x: number, $y: number, $z: number) : UnityEngine.Quaternion
                /** Returns a rotation that rotates z degrees around the z axis, x degrees around the x axis, and y degrees around the y axis. */
                public static Euler ($euler: UnityEngine.Vector3) : UnityEngine.Quaternion
                /** Converts a rotation to angle-axis representation (angles in degrees). */
                public ToAngleAxis ($angle: $Ref<number>, $axis: $Ref<UnityEngine.Vector3>) : void
                /** Creates a rotation which rotates from fromDirection to toDirection. */
                public SetFromToRotation ($fromDirection: UnityEngine.Vector3, $toDirection: UnityEngine.Vector3) : void
                /** Rotates a rotation from towards to. */
                public static RotateTowards ($from: UnityEngine.Quaternion, $to: UnityEngine.Quaternion, $maxDegreesDelta: number) : UnityEngine.Quaternion
                /** Converts this quaternion to one with the same orientation but with a magnitude of 1. */
                public static Normalize ($q: UnityEngine.Quaternion) : UnityEngine.Quaternion
                public Normalize () : void
                public Equals ($other: any) : boolean
                public Equals ($other: UnityEngine.Quaternion) : boolean
                public ToString () : string
                /** Returns a formatted string for this quaternion. * @param format A numeric format string.
                * @param formatProvider An object that specifies culture-specific formatting.
                */
                public ToString ($format: string) : string
                /** Returns a formatted string for this quaternion. * @param format A numeric format string.
                * @param formatProvider An object that specifies culture-specific formatting.
                */
                public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
                /** Creates a rotation which rotates from fromDirection to toDirection. */
                public static FromToRotation ($fromDirection: UnityEngine.Vector3, $toDirection: UnityEngine.Vector3) : UnityEngine.Quaternion
                /** Returns the Inverse of rotation. */
                public static Inverse ($rotation: UnityEngine.Quaternion) : UnityEngine.Quaternion
                /** Spherically interpolates between quaternions a and b by ratio t. The parameter t is clamped to the range [0, 1].
                * @param a Start value, returned when t = 0.
                * @param b End value, returned when t = 1.
                * @param t Interpolation ratio.
                * @returns A quaternion spherically interpolated between quaternions a and b. 
                */
                public static Slerp ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion, $t: number) : UnityEngine.Quaternion
                /** Spherically interpolates between a and b by t. The parameter t is not clamped. */
                public static SlerpUnclamped ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion, $t: number) : UnityEngine.Quaternion
                /** Interpolates between a and b by t and normalizes the result afterwards. The parameter t is clamped to the range [0, 1].
                * @param a Start value, returned when t = 0.
                * @param b End value, returned when t = 1.
                * @param t Interpolation ratio.
                * @returns A quaternion interpolated between quaternions a and b. 
                */
                public static Lerp ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion, $t: number) : UnityEngine.Quaternion
                /** Interpolates between a and b by t and normalizes the result afterwards. The parameter t is not clamped. */
                public static LerpUnclamped ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion, $t: number) : UnityEngine.Quaternion
                /** Creates a rotation which rotates angle degrees around axis. */
                public static AngleAxis ($angle: number, $axis: UnityEngine.Vector3) : UnityEngine.Quaternion
                /** Creates a rotation with the specified forward and upwards directions. * @param forward The direction to look in.
                * @param upwards The vector that defines in which direction up is.
                */
                public static LookRotation ($forward: UnityEngine.Vector3, $upwards: UnityEngine.Vector3) : UnityEngine.Quaternion
                /** Creates a rotation with the specified forward and upwards directions. * @param forward The direction to look in.
                * @param upwards The vector that defines in which direction up is.
                */
                public static LookRotation ($forward: UnityEngine.Vector3) : UnityEngine.Quaternion
                public constructor ($x: number, $y: number, $z: number, $w: number)
                public Equals ($obj: any) : boolean
                public static Equals ($objA: any, $objB: any) : boolean
                public constructor ()
            }
            /** Represents a raw text or binary file asset. */
            class TextAsset extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
                /** The raw bytes of the text asset. (Read Only) */
                public get bytes(): System.Array$1<number>;
                /** The text contents of the file as a string. (Read Only) */
                public get text(): string;
                /** The size of the text asset data in bytes. (Read Only) */
                public get dataSize(): bigint;
                public constructor ()
                public constructor ($text: string)
            }
            /** General functionality for all renderers. */
            class Renderer extends UnityEngine.Component
            {
                protected [__keep_incompatibility]: never;
                /** The bounding box of the renderer in world space. */
                public get bounds(): UnityEngine.Bounds;
                public set bounds(value: UnityEngine.Bounds);
                /** The bounding box of the renderer in local space. */
                public get localBounds(): UnityEngine.Bounds;
                public set localBounds(value: UnityEngine.Bounds);
                /** Makes the rendered 3D object visible if enabled. */
                public get enabled(): boolean;
                public set enabled(value: boolean);
                /** Is this renderer visible in any camera? (Read Only) */
                public get isVisible(): boolean;
                /** Does this object cast shadows? */
                public get shadowCastingMode(): UnityEngine.Rendering.ShadowCastingMode;
                public set shadowCastingMode(value: UnityEngine.Rendering.ShadowCastingMode);
                /** Does this object receive shadows? */
                public get receiveShadows(): boolean;
                public set receiveShadows(value: boolean);
                /** Allows turning off rendering for a specific component. */
                public get forceRenderingOff(): boolean;
                public set forceRenderingOff(value: boolean);
                /** Is this renderer a static shadow caster? */
                public get staticShadowCaster(): boolean;
                public set staticShadowCaster(value: boolean);
                /** Specifies the mode for motion vector rendering. */
                public get motionVectorGenerationMode(): UnityEngine.MotionVectorGenerationMode;
                public set motionVectorGenerationMode(value: UnityEngine.MotionVectorGenerationMode);
                /** The light probe interpolation type. */
                public get lightProbeUsage(): UnityEngine.Rendering.LightProbeUsage;
                public set lightProbeUsage(value: UnityEngine.Rendering.LightProbeUsage);
                /** Should reflection probes be used for this Renderer? */
                public get reflectionProbeUsage(): UnityEngine.Rendering.ReflectionProbeUsage;
                public set reflectionProbeUsage(value: UnityEngine.Rendering.ReflectionProbeUsage);
                /** Determines which rendering layer this renderer lives on. */
                public get renderingLayerMask(): number;
                public set renderingLayerMask(value: number);
                /** This value sorts renderers by priority. Lower values are rendered first and higher values are rendered last. */
                public get rendererPriority(): number;
                public set rendererPriority(value: number);
                /** Describes how this renderer is updated for ray tracing. */
                public get rayTracingMode(): UnityEngine.Experimental.Rendering.RayTracingMode;
                public set rayTracingMode(value: UnityEngine.Experimental.Rendering.RayTracingMode);
                /** Name of the Renderer's sorting layer. */
                public get sortingLayerName(): string;
                public set sortingLayerName(value: string);
                /** Unique ID of the Renderer's sorting layer. */
                public get sortingLayerID(): number;
                public set sortingLayerID(value: number);
                /** Renderer's order within a sorting layer. */
                public get sortingOrder(): number;
                public set sortingOrder(value: number);
                /** Controls if dynamic occlusion culling should be performed for this renderer. */
                public get allowOcclusionWhenDynamic(): boolean;
                public set allowOcclusionWhenDynamic(value: boolean);
                /** Indicates whether the renderer is part of a with other renderers. */
                public get isPartOfStaticBatch(): boolean;
                /** Matrix that transforms a point from world space into local space (Read Only). */
                public get worldToLocalMatrix(): UnityEngine.Matrix4x4;
                /** Matrix that transforms a point from local space into world space (Read Only). */
                public get localToWorldMatrix(): UnityEngine.Matrix4x4;
                /** If set, the Renderer will use the Light Probe Proxy Volume component attached to the source GameObject. */
                public get lightProbeProxyVolumeOverride(): UnityEngine.GameObject;
                public set lightProbeProxyVolumeOverride(value: UnityEngine.GameObject);
                /** If set, Renderer will use this Transform's position to find the light or reflection probe. */
                public get probeAnchor(): UnityEngine.Transform;
                public set probeAnchor(value: UnityEngine.Transform);
                /** The index of the baked lightmap applied to this renderer. */
                public get lightmapIndex(): number;
                public set lightmapIndex(value: number);
                /** The index of the real-time lightmap applied to this renderer. */
                public get realtimeLightmapIndex(): number;
                public set realtimeLightmapIndex(value: number);
                /** The UV scale & offset used for a lightmap. */
                public get lightmapScaleOffset(): UnityEngine.Vector4;
                public set lightmapScaleOffset(value: UnityEngine.Vector4);
                /** The UV scale & offset used for a real-time lightmap. */
                public get realtimeLightmapScaleOffset(): UnityEngine.Vector4;
                public set realtimeLightmapScaleOffset(value: UnityEngine.Vector4);
                /** Returns all the instantiated materials of this object. */
                public get materials(): System.Array$1<UnityEngine.Material>;
                public set materials(value: System.Array$1<UnityEngine.Material>);
                /** Returns the first instantiated Material assigned to the renderer. */
                public get material(): UnityEngine.Material;
                public set material(value: UnityEngine.Material);
                /** The shared material of this object. */
                public get sharedMaterial(): UnityEngine.Material;
                public set sharedMaterial(value: UnityEngine.Material);
                /** All the shared materials of this object. */
                public get sharedMaterials(): System.Array$1<UnityEngine.Material>;
                public set sharedMaterials(value: System.Array$1<UnityEngine.Material>);
                public ResetBounds () : void
                public ResetLocalBounds () : void
                public HasPropertyBlock () : boolean
                /** Lets you set or clear per-renderer or per-material parameter overrides. * @param properties Property block with values you want to override.
                * @param materialIndex The index of the Material you want to override the parameters of. The index ranges from 0 to Renderer.sharedMaterial.Length-1.
                */
                public SetPropertyBlock ($properties: UnityEngine.MaterialPropertyBlock) : void
                /** Lets you set or clear per-renderer or per-material parameter overrides. * @param properties Property block with values you want to override.
                * @param materialIndex The index of the Material you want to override the parameters of. The index ranges from 0 to Renderer.sharedMaterial.Length-1.
                */
                public SetPropertyBlock ($properties: UnityEngine.MaterialPropertyBlock, $materialIndex: number) : void
                /** Get per-Renderer or per-Material property block. * @param properties Material parameters to retrieve.
                * @param materialIndex The index of the Material you want to get overridden parameters from. The index ranges from 0 to Renderer.sharedMaterials.Length-1.
                */
                public GetPropertyBlock ($properties: UnityEngine.MaterialPropertyBlock) : void
                /** Get per-Renderer or per-Material property block. * @param properties Material parameters to retrieve.
                * @param materialIndex The index of the Material you want to get overridden parameters from. The index ranges from 0 to Renderer.sharedMaterials.Length-1.
                */
                public GetPropertyBlock ($properties: UnityEngine.MaterialPropertyBlock, $materialIndex: number) : void
                public GetMaterials ($m: System.Collections.Generic.List$1<UnityEngine.Material>) : void
                public GetSharedMaterials ($m: System.Collections.Generic.List$1<UnityEngine.Material>) : void
                public GetClosestReflectionProbes ($result: System.Collections.Generic.List$1<UnityEngine.Rendering.ReflectionProbeBlendInfo>) : void
                public constructor ()
            }
            /** A class that allows you to create or modify meshes. */
            class Mesh extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** A class to access the Mesh of the. */
            class MeshFilter extends UnityEngine.Component
            {
                protected [__keep_incompatibility]: never;
            }
            /** Representation of RGBA colors in 32 bit format. */
            class Color32 extends System.ValueType implements System.IFormattable
            {
                protected [__keep_incompatibility]: never;
            }
            /** Represents an axis aligned bounding box. */
            class Bounds extends System.ValueType implements System.IEquatable$1<UnityEngine.Bounds>, System.IFormattable
            {
                protected [__keep_incompatibility]: never;
            }
            /** Class that represents textures in C# code. */
            class Texture2D extends UnityEngine.Texture
            {
                protected [__keep_incompatibility]: never;
                /** The format of the pixel data in the texture (Read Only). */
                public get format(): UnityEngine.TextureFormat;
                /** Gets a small Texture with all white pixels. */
                public static get whiteTexture(): UnityEngine.Texture2D;
                /** Gets a small Texture with all black pixels. */
                public static get blackTexture(): UnityEngine.Texture2D;
                /** Gets a small Texture with all red pixels. */
                public static get redTexture(): UnityEngine.Texture2D;
                /** Gets a small Texture with all gray pixels. */
                public static get grayTexture(): UnityEngine.Texture2D;
                /** Gets a small Texture with all gray pixels. */
                public static get linearGrayTexture(): UnityEngine.Texture2D;
                /** Gets a small Texture with pixels that represent surface normal vectors at a neutral position. */
                public static get normalTexture(): UnityEngine.Texture2D;
                public get isReadable(): boolean;
                /** Returns true if the VTOnly checkbox was checked when the texture was imported; otherwise returns false. For additional information, see TextureImporter.vtOnly. */
                public get vtOnly(): boolean;
                /** Determines whether mipmap streaming is enabled for this Texture. */
                public get streamingMipmaps(): boolean;
                /** Sets the relative priority for this Texture when reducing memory size to fit within the memory budget. */
                public get streamingMipmapsPriority(): number;
                /** The mipmap level to load. */
                public get requestedMipmapLevel(): number;
                public set requestedMipmapLevel(value: number);
                /** Restricts the mipmap streaming system to a minimum mip level for this Texture. */
                public get minimumMipmapLevel(): number;
                public set minimumMipmapLevel(value: number);
                /** The mipmap level calculated by the streaming system, which takes into account the streaming Cameras and the location of the objects containing this Texture. This is unaffected by requestedMipmapLevel or minimumMipmapLevel. */
                public get calculatedMipmapLevel(): number;
                /** The mipmap level that the streaming system would load before memory budgets are applied. */
                public get desiredMipmapLevel(): number;
                /** The mipmap level that the mipmap streaming system is in the process of loading. */
                public get loadingMipmapLevel(): number;
                /** The mipmap level that is currently loaded by the streaming system. */
                public get loadedMipmapLevel(): number;
                /** Indicates whether this texture was imported with TextureImporter.alphaIsTransparency enabled. This setting is available only in the Editor scripts. Note that changing this setting will have no effect; it must be enabled in TextureImporter instead. */
                public get alphaIsTransparency(): boolean;
                public set alphaIsTransparency(value: boolean);
                /** Creates a Unity Texture out of an externally created native texture object. * @param nativeTex Native 2D texture object.
                * @param width Width of texture in pixels.
                * @param height Height of texture in pixels.
                * @param format Format of underlying texture object.
                * @param mipmap Does the texture have mipmaps?
                * @param linear Is texture using linear color space?
                */
                public static CreateExternalTexture ($width: number, $height: number, $format: UnityEngine.TextureFormat, $mipChain: boolean, $linear: boolean, $nativeTex: System.IntPtr) : UnityEngine.Texture2D
                /** Sets pixel color at coordinates (x,y). * @param x X coordinate of the pixel to set.
                * @param y Y coordinate of the pixel to set.
                * @param color Color to set.
                * @param mipLevel Mip level to sample, must be in the range [0, mipCount[.
                */
                public SetPixel ($x: number, $y: number, $color: UnityEngine.Color) : void
                /** Sets pixel color at coordinates (x,y). * @param x X coordinate of the pixel to set.
                * @param y Y coordinate of the pixel to set.
                * @param color Color to set.
                * @param mipLevel Mip level to sample, must be in the range [0, mipCount[.
                */
                public SetPixel ($x: number, $y: number, $color: UnityEngine.Color, $mipLevel: number) : void
                /** Set a block of pixel colors. * @param miplevel The mip level of the texture to write to.
                */
                public SetPixels ($x: number, $y: number, $blockWidth: number, $blockHeight: number, $colors: System.Array$1<UnityEngine.Color>, $miplevel: number) : void
                public SetPixels ($x: number, $y: number, $blockWidth: number, $blockHeight: number, $colors: System.Array$1<UnityEngine.Color>) : void
                /** Set a block of pixel colors. * @param colors The array of pixel colours to assign (a 2D image flattened to a 1D array).
                * @param miplevel The mip level of the texture to write to.
                */
                public SetPixels ($colors: System.Array$1<UnityEngine.Color>, $miplevel: number) : void
                public SetPixels ($colors: System.Array$1<UnityEngine.Color>) : void
                /** Returns pixel color at coordinates (x, y).
                * @param x X coordinate of the pixel to set.
                * @param y Y coordinate of the pixel to set.
                * @param mipLevel Mip level to sample, must be in the range [0, mipCount[.
                * @returns Pixel color sampled. 
                */
                public GetPixel ($x: number, $y: number) : UnityEngine.Color
                /** Returns pixel color at coordinates (x, y).
                * @param x X coordinate of the pixel to set.
                * @param y Y coordinate of the pixel to set.
                * @param mipLevel Mip level to sample, must be in the range [0, mipCount[.
                * @returns Pixel color sampled. 
                */
                public GetPixel ($x: number, $y: number, $mipLevel: number) : UnityEngine.Color
                /** Returns filtered pixel color at normalized coordinates (u, v).
                * @param u U coordinate of the sample.
                * @param v V coordinate of the sample.
                * @param mipLevel Mip level to sample, must be in the range [0, mipCount[.
                * @returns Pixel color sampled. 
                */
                public GetPixelBilinear ($u: number, $v: number) : UnityEngine.Color
                /** Returns filtered pixel color at normalized coordinates (u, v).
                * @param u U coordinate of the sample.
                * @param v V coordinate of the sample.
                * @param mipLevel Mip level to sample, must be in the range [0, mipCount[.
                * @returns Pixel color sampled. 
                */
                public GetPixelBilinear ($u: number, $v: number, $mipLevel: number) : UnityEngine.Color
                /** Fills texture pixels with raw preformatted data. * @param data Raw data array to initialize texture pixels with.
                * @param size Size of data in bytes.
                */
                public LoadRawTextureData ($data: System.IntPtr, $size: number) : void
                /** Fills texture pixels with raw preformatted data. * @param data Raw data array to initialize texture pixels with.
                * @param size Size of data in bytes.
                */
                public LoadRawTextureData ($data: System.Array$1<number>) : void
                /** Actually apply all previous SetPixel and SetPixels changes. * @param updateMipmaps When set to true, mipmap levels are recalculated.
                * @param makeNoLongerReadable When set to true, Unity discards the copy of pixel data in CPU-addressable memory after this operation.
                */
                public Apply ($updateMipmaps: boolean, $makeNoLongerReadable: boolean) : void
                public Apply ($updateMipmaps: boolean) : void
                public Apply () : void
                /** Reinitializes a Texture2D, making it possible for you to replace width, height, textureformat, and graphicsformat data for that texture. This action also clears the pixel data associated with the texture from the CPU and GPU.
                This function is very similar to the Texture constructor, except it works on a Texture object that already exists rather than creating a new one.
                It is not possible to reinitialize Crunched textures, so if you pass a Crunched texture to this method, it returns false.  See for more information about compressed and crunched textures.
                Call Apply to  upload the changed pixels to the graphics card.
                Texture.isReadable must be true.
                * @param width New width of the Texture.
                * @param height New height of the Texture.
                * @param format New format of the Texture.
                * @param hasMipMap Indicates if the Texture should reserve memory for a full mip map chain.
                * @returns Returns true if the reinitialization was a success. 
                */
                public Reinitialize ($width: number, $height: number) : boolean
                /** Reinitializes a Texture2D, making it possible for you to replace width, height, textureformat, and graphicsformat data for that texture. This action also clears the pixel data associated with the texture from the CPU and GPU.
                This function is very similar to the Texture constructor, except it works on a Texture object that already exists rather than creating a new one.
                It is not possible to reinitialize Crunched textures, so if you pass a Crunched texture to this method, it returns false.  See for more information about compressed and crunched textures.
                Call Apply to  upload the changed pixels to the graphics card.
                Texture.isReadable must be true.
                * @param width New width of the Texture.
                * @param height New height of the Texture.
                * @param format New format of the Texture.
                * @param hasMipMap Indicates if the Texture should reserve memory for a full mip map chain.
                * @returns Returns true if the reinitialization was a success. 
                */
                public Reinitialize ($width: number, $height: number, $format: UnityEngine.TextureFormat, $hasMipMap: boolean) : boolean
                /** Reinitializes a Texture2D, making it possible for you to replace width, height, textureformat, and graphicsformat data for that texture. This action also clears the pixel data associated with the texture from the CPU and GPU.
                This function is very similar to the Texture constructor, except it works on a Texture object that already exists rather than creating a new one.
                It is not possible to reinitialize Crunched textures, so if you pass a Crunched texture to this method, it returns false.  See for more information about compressed and crunched textures.
                Call Apply to  upload the changed pixels to the graphics card.
                Texture.isReadable must be true.
                * @param width New width of the Texture.
                * @param height New height of the Texture.
                * @param format New format of the Texture.
                * @param hasMipMap Indicates if the Texture should reserve memory for a full mip map chain.
                * @returns Returns true if the reinitialization was a success. 
                */
                public Reinitialize ($width: number, $height: number, $format: UnityEngine.Experimental.Rendering.GraphicsFormat, $hasMipMap: boolean) : boolean
                /** Reads the pixels from the current render target (the screen, or a RenderTexture), and writes them to the texture. * @param source The region of the render target to read from.
                * @param destX The horizontal pixel position in the texture to write the pixels to.
                * @param destY The vertical pixel position in the texture to write the pixels to.
                * @param recalculateMipMaps If this parameter is true, Unity automatically recalculates the mipmaps for the texture after writing the pixel data. Otherwise, Unity does not do this automatically.
                */
                public ReadPixels ($source: UnityEngine.Rect, $destX: number, $destY: number, $recalculateMipMaps: boolean) : void
                public ReadPixels ($source: UnityEngine.Rect, $destX: number, $destY: number) : void
                public static GenerateAtlas ($sizes: System.Array$1<UnityEngine.Vector2>, $padding: number, $atlasSize: number, $results: System.Collections.Generic.List$1<UnityEngine.Rect>) : boolean
                /** Set a block of pixel colors. * @param colors Pixel values to assign to the Texture.
                * @param miplevel Mip level of the Texture passed in pixel values.
                */
                public SetPixels32 ($colors: System.Array$1<UnityEngine.Color32>, $miplevel: number) : void
                /** Set a block of pixel colors. * @param colors Pixel values to assign to the Texture.
                * @param miplevel Mip level of the Texture passed in pixel values.
                */
                public SetPixels32 ($colors: System.Array$1<UnityEngine.Color32>) : void
                /** Set a block of pixel colors. */
                public SetPixels32 ($x: number, $y: number, $blockWidth: number, $blockHeight: number, $colors: System.Array$1<UnityEngine.Color32>, $miplevel: number) : void
                /** Set a block of pixel colors. */
                public SetPixels32 ($x: number, $y: number, $blockWidth: number, $blockHeight: number, $colors: System.Array$1<UnityEngine.Color32>) : void
                /** Retrieves a copy of the the pixel color data for a given mip level. The colors are represented by Color structs.
                * @param miplevel The mip level to read pixel data from. The default is 0.
                * @returns An array that contains a copy of the requested pixel colors. 
                */
                public GetPixels ($miplevel: number) : System.Array$1<UnityEngine.Color>
                /** Retrieves a copy of the the pixel color data for a given mip level. The colors are represented by Color structs.
                * @param miplevel The mip level to read pixel data from. The default is 0.
                * @returns An array that contains a copy of the requested pixel colors. 
                */
                public GetPixels () : System.Array$1<UnityEngine.Color>
                /** Compress texture at runtime to DXT/BCn or ETC formats. */
                public Compress ($highQuality: boolean) : void
                public ClearRequestedMipmapLevel () : void
                public IsRequestedMipmapLevelLoaded () : boolean
                public ClearMinimumMipmapLevel () : void
                /** Updates Unity texture to use different native texture object. * @param nativeTex Native 2D texture object.
                */
                public UpdateExternalTexture ($nativeTex: System.IntPtr) : void
                public GetRawTextureData () : System.Array$1<number>
                /** Retrieves a copy of the the pixel color data for a given area of a given mip level. The colors are represented by Color structs.
                * @param x The x position of the pixel array to fetch.
                * @param y The y position of the pixel array to fetch.
                * @param blockWidth The width length of the pixel array to fetch.
                * @param blockHeight The height length of the pixel array to fetch.
                * @param miplevel The mip level to read pixel data from. The default is 0.
                * @returns An array that contains a copy of the requested pixel colors. 
                */
                public GetPixels ($x: number, $y: number, $blockWidth: number, $blockHeight: number, $miplevel: number) : System.Array$1<UnityEngine.Color>
                /** Retrieves a copy of the the pixel color data for a given area of a given mip level. The colors are represented by Color structs.
                * @param x The x position of the pixel array to fetch.
                * @param y The y position of the pixel array to fetch.
                * @param blockWidth The width length of the pixel array to fetch.
                * @param blockHeight The height length of the pixel array to fetch.
                * @param miplevel The mip level to read pixel data from. The default is 0.
                * @returns An array that contains a copy of the requested pixel colors. 
                */
                public GetPixels ($x: number, $y: number, $blockWidth: number, $blockHeight: number) : System.Array$1<UnityEngine.Color>
                /** Retrieves a copy of the pixel color data at a given mip level. The colors are represented by lower-precision Color32 structs.
                * @param miplevel The mip level to read pixel data from. The default is 0.
                * @returns An array that contains a copy of the requested pixel colors. 
                */
                public GetPixels32 ($miplevel: number) : System.Array$1<UnityEngine.Color32>
                /** Retrieves a copy of the pixel color data at a given mip level. The colors are represented by lower-precision Color32 structs.
                * @param miplevel The mip level to read pixel data from. The default is 0.
                * @returns An array that contains a copy of the requested pixel colors. 
                */
                public GetPixels32 () : System.Array$1<UnityEngine.Color32>
                /** Packs multiple Textures into a texture atlas.
                * @param textures Array of textures to pack into the atlas.
                * @param padding Padding in pixels between the packed textures.
                * @param maximumAtlasSize Maximum size of the resulting texture.
                * @param makeNoLongerReadable Should the texture be marked as no longer readable?
                * @returns An array of rectangles containing the UV coordinates in the atlas for each input texture, or null if packing fails. 
                */
                public PackTextures ($textures: System.Array$1<UnityEngine.Texture2D>, $padding: number, $maximumAtlasSize: number, $makeNoLongerReadable: boolean) : System.Array$1<UnityEngine.Rect>
                public PackTextures ($textures: System.Array$1<UnityEngine.Texture2D>, $padding: number, $maximumAtlasSize: number) : System.Array$1<UnityEngine.Rect>
                public PackTextures ($textures: System.Array$1<UnityEngine.Texture2D>, $padding: number) : System.Array$1<UnityEngine.Rect>
                public constructor ($width: number, $height: number, $format: UnityEngine.Experimental.Rendering.DefaultFormat, $flags: UnityEngine.Experimental.Rendering.TextureCreationFlags)
                public constructor ($width: number, $height: number, $format: UnityEngine.Experimental.Rendering.GraphicsFormat, $flags: UnityEngine.Experimental.Rendering.TextureCreationFlags)
                public constructor ($width: number, $height: number, $format: UnityEngine.Experimental.Rendering.GraphicsFormat, $mipCount: number, $flags: UnityEngine.Experimental.Rendering.TextureCreationFlags)
                public constructor ($width: number, $height: number, $textureFormat: UnityEngine.TextureFormat, $mipCount: number, $linear: boolean)
                public constructor ($width: number, $height: number, $textureFormat: UnityEngine.TextureFormat, $mipChain: boolean, $linear: boolean)
                public constructor ($width: number, $height: number, $textureFormat: UnityEngine.TextureFormat, $mipChain: boolean)
                public constructor ($width: number, $height: number)
                public constructor ()
            }
            /** Class that represents textures in C# code. */
            interface Texture2D {
                /** Encodes the specified texture in TGA format. * @param tex The texture to encode.
                */
                EncodeToTGA () : System.Array$1<number>;
                /** Encodes this texture into PNG format. * @param tex The texture to convert.
                */
                EncodeToPNG () : System.Array$1<number>;
                /** Encodes this texture into JPG format. * @param tex Text texture to convert.
                * @param quality JPG quality to encode with, 1..100 (default 75).
                */
                EncodeToJPG ($quality: number) : System.Array$1<number>;
                /** Encodes this texture into JPG format. * @param tex Text texture to convert.
                * @param quality JPG quality to encode with, 1..100 (default 75).
                */
                EncodeToJPG () : System.Array$1<number>;
                EncodeToEXR ($flags: UnityEngine.Texture2D.EXRFlags) : System.Array$1<number>;
                EncodeToEXR () : System.Array$1<number>;
                /** Loads PNG/JPG (or supported format) image byte array into a texture.
                * @param data The byte array containing the image data to load.
                * @param markNonReadable Set to false by default, pass true to optionally mark the texture as non-readable.
                * @param tex The texture to load the image into.
                * @returns Returns true if the data can be loaded, false otherwise. 
                */
                LoadImage ($data: System.Array$1<number>, $markNonReadable: boolean) : boolean;
                LoadImage ($data: System.Array$1<number>) : boolean;
            }
            /** Sprite packing modes for the Sprite Packer. */
            enum SpritePackingMode
            { Tight = 0, Rectangle = 1 }
            /** Sprite rotation modes for the Sprite Packer. */
            enum SpritePackingRotation
            { None = 0, FlipHorizontal = 1, FlipVertical = 2, Rotate180 = 3, Any = 15 }
            /** Defines the type of mesh generated for a sprite. */
            enum SpriteMeshType
            { FullRect = 0, Tight = 1 }
            /** Format used when creating textures from scripts. */
            enum TextureFormat
            { Alpha8 = 1, ARGB4444 = 2, RGB24 = 3, RGBA32 = 4, ARGB32 = 5, RGB565 = 7, R16 = 9, DXT1 = 10, DXT5 = 12, RGBA4444 = 13, BGRA32 = 14, RHalf = 15, RGHalf = 16, RGBAHalf = 17, RFloat = 18, RGFloat = 19, RGBAFloat = 20, YUY2 = 21, RGB9e5Float = 22, BC4 = 26, BC5 = 27, BC6H = 24, BC7 = 25, DXT1Crunched = 28, DXT5Crunched = 29, PVRTC_RGB2 = 30, PVRTC_RGBA2 = 31, PVRTC_RGB4 = 32, PVRTC_RGBA4 = 33, ETC_RGB4 = 34, ATC_RGB4 = -127, ATC_RGBA8 = -127, EAC_R = 41, EAC_R_SIGNED = 42, EAC_RG = 43, EAC_RG_SIGNED = 44, ETC2_RGB = 45, ETC2_RGBA1 = 46, ETC2_RGBA8 = 47, ASTC_4x4 = 48, ASTC_5x5 = 49, ASTC_6x6 = 50, ASTC_8x8 = 51, ASTC_10x10 = 52, ASTC_12x12 = 53, ETC_RGB4_3DS = 60, ETC_RGBA8_3DS = 61, RG16 = 62, R8 = 63, ETC_RGB4Crunched = 64, ETC2_RGBA8Crunched = 65, ASTC_HDR_4x4 = 66, ASTC_HDR_5x5 = 67, ASTC_HDR_6x6 = 68, ASTC_HDR_8x8 = 69, ASTC_HDR_10x10 = 70, ASTC_HDR_12x12 = 71, RG32 = 72, RGB48 = 73, RGBA64 = 74, ASTC_RGB_4x4 = 48, ASTC_RGB_5x5 = 49, ASTC_RGB_6x6 = 50, ASTC_RGB_8x8 = 51, ASTC_RGB_10x10 = 52, ASTC_RGB_12x12 = 53, ASTC_RGBA_4x4 = 54, ASTC_RGBA_5x5 = 55, ASTC_RGBA_6x6 = 56, ASTC_RGBA_8x8 = 57, ASTC_RGBA_10x10 = 58, ASTC_RGBA_12x12 = 59, PVRTC_2BPP_RGB = -127, PVRTC_2BPP_RGBA = -127, PVRTC_4BPP_RGB = -127, PVRTC_4BPP_RGBA = -127 }
            /** Anisotropic filtering mode. */
            enum AnisotropicFiltering
            { Disable = 0, Enable = 1, ForceEnable = 2 }
            /** Wrap mode for textures. */
            enum TextureWrapMode
            { Repeat = 0, Clamp = 1, Mirror = 2, MirrorOnce = 3 }
            /** Filtering mode for textures. Corresponds to the settings in a. */
            enum FilterMode
            { Point = 0, Bilinear = 1, Trilinear = 2 }
            /** Represents  a 128-bit hash value. */
            class Hash128 extends System.ValueType implements System.IEquatable$1<UnityEngine.Hash128>, System.IComparable, System.IComparable$1<UnityEngine.Hash128>
            {
                protected [__keep_incompatibility]: never;
            }
            /** Provides access to display information. */
            class Screen extends System.Object
            {
                protected [__keep_incompatibility]: never;
                /** The current width of the screen window in pixels (Read Only). */
                public static get width(): number;
                /** The current height of the screen window in pixels (Read Only). */
                public static get height(): number;
                /** The current DPI of the screen / device (Read Only). */
                public static get dpi(): number;
                /** The current screen resolution (Read Only). */
                public static get currentResolution(): UnityEngine.Resolution;
                /** Returns all full-screen resolutions that the monitor supports (Read Only). */
                public static get resolutions(): System.Array$1<UnityEngine.Resolution>;
                /** Enables full-screen mode for the application. */
                public static get fullScreen(): boolean;
                public static set fullScreen(value: boolean);
                /** Set this property to one of the values in FullScreenMode to change the display mode of your application. */
                public static get fullScreenMode(): UnityEngine.FullScreenMode;
                public static set fullScreenMode(value: UnityEngine.FullScreenMode);
                /** Returns the safe area of the screen in pixels (Read Only). */
                public static get safeArea(): UnityEngine.Rect;
                /** Returns a list of screen areas that are not functional for displaying content (Read Only). */
                public static get cutouts(): System.Array$1<UnityEngine.Rect>;
                /** Enables auto-rotation to portrait. */
                public static get autorotateToPortrait(): boolean;
                public static set autorotateToPortrait(value: boolean);
                /** Enables auto-rotation to portrait, upside down. */
                public static get autorotateToPortraitUpsideDown(): boolean;
                public static set autorotateToPortraitUpsideDown(value: boolean);
                /** Enables auto-rotation to landscape left */
                public static get autorotateToLandscapeLeft(): boolean;
                public static set autorotateToLandscapeLeft(value: boolean);
                /** Enables auto-rotation to landscape right. */
                public static get autorotateToLandscapeRight(): boolean;
                public static set autorotateToLandscapeRight(value: boolean);
                /** Specifies logical orientation of the screen. */
                public static get orientation(): UnityEngine.ScreenOrientation;
                public static set orientation(value: UnityEngine.ScreenOrientation);
                /** A power saving setting, allowing the screen to dim some time after the last active user interaction. */
                public static get sleepTimeout(): number;
                public static set sleepTimeout(value: number);
                /** The current brightness of the screen. */
                public static get brightness(): number;
                public static set brightness(value: number);
                /** The position of the top left corner of the main window relative to the top left corner of the display. */
                public static get mainWindowPosition(): UnityEngine.Vector2Int;
                /** The display information associated with the display that the main application window is on. */
                public static get mainWindowDisplayInfo(): UnityEngine.DisplayInfo;
                /** Switches the screen resolution. */
                public static SetResolution ($width: number, $height: number, $fullscreenMode: UnityEngine.FullScreenMode, $preferredRefreshRate: number) : void
                /** Switches the screen resolution. */
                public static SetResolution ($width: number, $height: number, $fullscreenMode: UnityEngine.FullScreenMode) : void
                /** Switches the screen resolution. */
                public static SetResolution ($width: number, $height: number, $fullscreen: boolean, $preferredRefreshRate: number) : void
                /** Switches the screen resolution. */
                public static SetResolution ($width: number, $height: number, $fullscreen: boolean) : void
                public static GetDisplayLayout ($displayLayout: System.Collections.Generic.List$1<UnityEngine.DisplayInfo>) : void
                /** Moves the main window to the specified position relative to the top left corner of the specified display. Position value is represented in pixels. Moving the window is an asynchronous operation, which can take multiple frames.
                * @param display The target display where the window should move to.
                * @param position The position the window moves to. Relative to the top left corner of the specified display in pixels.
                * @returns Returns AsyncOperation that represents moving the window. 
                */
                public static MoveMainWindowTo ($display: $Ref<UnityEngine.DisplayInfo>, $position: UnityEngine.Vector2Int) : UnityEngine.AsyncOperation
                public constructor ()
            }
            /** Represents a display resolution. */
            class Resolution extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            /** Platform agnostic full-screen mode. Not all platforms support all modes. */
            enum FullScreenMode
            { ExclusiveFullScreen = 0, FullScreenWindow = 1, MaximizedWindow = 2, Windowed = 3 }
            /** Describes screen orientation. */
            enum ScreenOrientation
            { Unknown = 0, Landscape = 3, Portrait = 1, PortraitUpsideDown = 2, LandscapeLeft = 3, LandscapeRight = 4, AutoRotation = 5 }
            /** Representation of 2D vectors and points using integers. */
            class Vector2Int extends System.ValueType implements System.IEquatable$1<UnityEngine.Vector2Int>, System.IFormattable
            {
                protected [__keep_incompatibility]: never;
            }
            /** Represents a connected display. */
            class DisplayInfo extends System.ValueType implements System.IEquatable$1<UnityEngine.DisplayInfo>
            {
                protected [__keep_incompatibility]: never;
            }
            /** Asynchronous operation coroutine. */
            class AsyncOperation extends UnityEngine.YieldInstruction
            {
                protected [__keep_incompatibility]: never;
            }
            /** Base class for all yield instructions. */
            class YieldInstruction extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** This class provides utility and extension methods to convert image data from or to PNG, EXR, TGA, and JPEG formats. */
            class ImageConversion extends System.Object
            {
                protected [__keep_incompatibility]: never;
                /** Enables legacy PNG runtime import behavior. */
                public static get EnableLegacyPngGammaRuntimeLoadBehavior(): boolean;
                public static set EnableLegacyPngGammaRuntimeLoadBehavior(value: boolean);
                /** Encodes the specified texture in TGA format. * @param tex The texture to encode.
                */
                public static EncodeToTGA ($tex: UnityEngine.Texture2D) : System.Array$1<number>
                /** Encodes this texture into PNG format. * @param tex The texture to convert.
                */
                public static EncodeToPNG ($tex: UnityEngine.Texture2D) : System.Array$1<number>
                /** Encodes this texture into JPG format. * @param tex Text texture to convert.
                * @param quality JPG quality to encode with, 1..100 (default 75).
                */
                public static EncodeToJPG ($tex: UnityEngine.Texture2D, $quality: number) : System.Array$1<number>
                /** Encodes this texture into JPG format. * @param tex Text texture to convert.
                * @param quality JPG quality to encode with, 1..100 (default 75).
                */
                public static EncodeToJPG ($tex: UnityEngine.Texture2D) : System.Array$1<number>
                public static EncodeToEXR ($tex: UnityEngine.Texture2D, $flags: UnityEngine.Texture2D.EXRFlags) : System.Array$1<number>
                public static EncodeToEXR ($tex: UnityEngine.Texture2D) : System.Array$1<number>
                /** Loads PNG/JPG (or supported format) image byte array into a texture.
                * @param data The byte array containing the image data to load.
                * @param markNonReadable Set to false by default, pass true to optionally mark the texture as non-readable.
                * @param tex The texture to load the image into.
                * @returns Returns true if the data can be loaded, false otherwise. 
                */
                public static LoadImage ($tex: UnityEngine.Texture2D, $data: System.Array$1<number>, $markNonReadable: boolean) : boolean
                public static LoadImage ($tex: UnityEngine.Texture2D, $data: System.Array$1<number>) : boolean
                /** Encodes this array into TGA format. * @param array The byte array to convert.
                * @param format The pixel format of the image data.
                * @param width The width of the image data in pixels.
                * @param height The height of the image data in pixels.
                * @param rowBytes The length of a single row in bytes.
                */
                public static EncodeArrayToTGA ($array: System.Array, $format: UnityEngine.Experimental.Rendering.GraphicsFormat, $width: number, $height: number, $rowBytes?: number) : System.Array$1<number>
                /** Encodes this array into PNG format. * @param array The byte array to convert.
                * @param format The pixel format of the image data.
                * @param width The width of the image data in pixels.
                * @param height The height of the image data in pixels.
                * @param rowBytes The length of a single row in bytes.
                */
                public static EncodeArrayToPNG ($array: System.Array, $format: UnityEngine.Experimental.Rendering.GraphicsFormat, $width: number, $height: number, $rowBytes?: number) : System.Array$1<number>
                /** Encodes this array into JPG format. * @param array The byte array to convert.
                * @param format The pixel format of the image data.
                * @param width The width of the image data in pixels.
                * @param height The height of the image data in pixels.
                * @param rowBytes The length of a single row in bytes.
                * @param quality JPG quality to encode with, 1..100 (default 75).
                */
                public static EncodeArrayToJPG ($array: System.Array, $format: UnityEngine.Experimental.Rendering.GraphicsFormat, $width: number, $height: number, $rowBytes?: number, $quality?: number) : System.Array$1<number>
                public static EncodeArrayToEXR ($array: System.Array, $format: UnityEngine.Experimental.Rendering.GraphicsFormat, $width: number, $height: number, $rowBytes?: number, $flags?: UnityEngine.Texture2D.EXRFlags) : System.Array$1<number>
            }
            /** Access system and hardware information. */
            class SystemInfo extends System.Object
            {
                protected [__keep_incompatibility]: never;
                /** Value returned by SystemInfo string properties which are not supported on the current platform. */
                public static unsupportedIdentifier : string/** The current battery level (Read Only). */
                public static get batteryLevel(): number;
                /** Returns the current status of the device's battery (Read Only). */
                public static get batteryStatus(): UnityEngine.BatteryStatus;
                /** Operating system name with version (Read Only). */
                public static get operatingSystem(): string;
                /** Returns the operating system family the game is running on (Read Only). */
                public static get operatingSystemFamily(): UnityEngine.OperatingSystemFamily;
                /** Processor name (Read Only). */
                public static get processorType(): string;
                /** Processor frequency in MHz (Read Only). */
                public static get processorFrequency(): number;
                /** Number of processors present (Read Only). */
                public static get processorCount(): number;
                /** Amount of system memory present (Read Only). */
                public static get systemMemorySize(): number;
                /** A unique device identifier. It is guaranteed to be unique for every device (Read Only). */
                public static get deviceUniqueIdentifier(): string;
                /** The user defined name of the device (Read Only). */
                public static get deviceName(): string;
                /** The model of the device (Read Only). */
                public static get deviceModel(): string;
                /** Is an accelerometer available on the device? */
                public static get supportsAccelerometer(): boolean;
                /** Is a gyroscope available on the device? */
                public static get supportsGyroscope(): boolean;
                /** Is the device capable of reporting its location? */
                public static get supportsLocationService(): boolean;
                /** Is the device capable of providing the user haptic feedback by vibration? */
                public static get supportsVibration(): boolean;
                /** Is there an Audio device available for playback? (Read Only) */
                public static get supportsAudio(): boolean;
                /** Returns the kind of device the application is running on (Read Only). */
                public static get deviceType(): UnityEngine.DeviceType;
                /** Amount of video memory present (Read Only). */
                public static get graphicsMemorySize(): number;
                /** The name of the graphics device (Read Only). */
                public static get graphicsDeviceName(): string;
                /** The vendor of the graphics device (Read Only). */
                public static get graphicsDeviceVendor(): string;
                /** The identifier code of the graphics device (Read Only). */
                public static get graphicsDeviceID(): number;
                /** The identifier code of the graphics device vendor (Read Only). */
                public static get graphicsDeviceVendorID(): number;
                /** The graphics API type used by the graphics device (Read Only). */
                public static get graphicsDeviceType(): UnityEngine.Rendering.GraphicsDeviceType;
                /** Returns true if the texture UV coordinate convention for this platform has Y starting at the top of the image. */
                public static get graphicsUVStartsAtTop(): boolean;
                /** The graphics API type and driver version used by the graphics device (Read Only). */
                public static get graphicsDeviceVersion(): string;
                /** Graphics device shader capability level (Read Only). */
                public static get graphicsShaderLevel(): number;
                /** Is graphics device using multi-threaded rendering (Read Only)? */
                public static get graphicsMultiThreaded(): boolean;
                /** Application's actual rendering threading mode (Read Only). */
                public static get renderingThreadingMode(): UnityEngine.Rendering.RenderingThreadingMode;
                /** True if the GPU supports hidden surface removal. */
                public static get hasHiddenSurfaceRemovalOnGPU(): boolean;
                /** Returns true when the GPU has native support for indexing uniform arrays in fragment shaders without restrictions. */
                public static get hasDynamicUniformArrayIndexingInFragmentShaders(): boolean;
                /** Are built-in shadows supported? (Read Only) */
                public static get supportsShadows(): boolean;
                /** Is sampling raw depth from shadowmaps supported? (Read Only) */
                public static get supportsRawShadowDepthSampling(): boolean;
                /** Whether motion vectors are supported on this platform. */
                public static get supportsMotionVectors(): boolean;
                /** Are 3D (volume) textures supported? (Read Only) */
                public static get supports3DTextures(): boolean;
                /** Are compressed formats for 3D (volume) textures supported? (Read Only). */
                public static get supportsCompressed3DTextures(): boolean;
                /** Are 2D Array textures supported? (Read Only) */
                public static get supports2DArrayTextures(): boolean;
                /** Are 3D (volume) RenderTextures supported? (Read Only) */
                public static get supports3DRenderTextures(): boolean;
                /** Are Cubemap Array textures supported? (Read Only) */
                public static get supportsCubemapArrayTextures(): boolean;
                /** Support for various Graphics.CopyTexture cases (Read Only). */
                public static get copyTextureSupport(): UnityEngine.Rendering.CopyTextureSupport;
                /** Are compute shaders supported? (Read Only) */
                public static get supportsComputeShaders(): boolean;
                /** Are geometry shaders supported? (Read Only) */
                public static get supportsGeometryShaders(): boolean;
                /** Are tessellation shaders supported? (Read Only) */
                public static get supportsTessellationShaders(): boolean;
                /** Boolean that indicates if SV_RenderTargetArrayIndex can be used in a vertex shader (true if it can be used, false if not). */
                public static get supportsRenderTargetArrayIndexFromVertexShader(): boolean;
                /** Is GPU draw call instancing supported? (Read Only) */
                public static get supportsInstancing(): boolean;
                /** Does the hardware support quad topology? (Read Only) */
                public static get supportsHardwareQuadTopology(): boolean;
                /** Are 32-bit index buffers supported? (Read Only) */
                public static get supports32bitsIndexBuffer(): boolean;
                /** Are sparse textures supported? (Read Only) */
                public static get supportsSparseTextures(): boolean;
                /** How many simultaneous render targets (MRTs) are supported? (Read Only) */
                public static get supportedRenderTargetCount(): number;
                /** Returns true when the platform supports different blend modes when rendering to multiple render targets, or false otherwise. */
                public static get supportsSeparatedRenderTargetsBlend(): boolean;
                /** The maximum number of random write targets (UAV) that Unity supports simultaneously. (Read Only) */
                public static get supportedRandomWriteTargetCount(): number;
                /** Are multisampled textures supported? (Read Only) */
                public static get supportsMultisampledTextures(): number;
                /** Boolean that indicates whether multisampled texture arrays are supported (true if supported, false if not supported). */
                public static get supportsMultisampled2DArrayTextures(): boolean;
                /** Returns true if multisampled textures are resolved automatically */
                public static get supportsMultisampleAutoResolve(): boolean;
                /** Returns true if the 'Mirror Once' texture wrap mode is supported. (Read Only) */
                public static get supportsTextureWrapMirrorOnce(): number;
                /** This property is true if the current platform uses a reversed depth buffer (where values range from 1 at the near plane and 0 at far plane), and false if the depth buffer is normal (0 is near, 1 is far). (Read Only) */
                public static get usesReversedZBuffer(): boolean;
                /** What NPOT (non-power of two size) texture support does the GPU provide? (Read Only) */
                public static get npotSupport(): UnityEngine.NPOTSupport;
                /** Maximum texture size (Read Only). */
                public static get maxTextureSize(): number;
                /** Maximum Cubemap texture size (Read Only). */
                public static get maxCubemapSize(): number;
                /** Determines how many compute buffers Unity supports simultaneously in a vertex shader for reading. (Read Only) */
                public static get maxComputeBufferInputsVertex(): number;
                /** Determines how many compute buffers Unity supports simultaneously in a fragment shader for reading. (Read Only) */
                public static get maxComputeBufferInputsFragment(): number;
                /** Determines how many compute buffers Unity supports simultaneously in a geometry shader for reading. (Read Only) */
                public static get maxComputeBufferInputsGeometry(): number;
                /** Determines how many compute buffers Unity supports simultaneously in a domain shader for reading. (Read Only) */
                public static get maxComputeBufferInputsDomain(): number;
                /** Determines how many compute buffers Unity supports simultaneously in a hull shader for reading. (Read Only) */
                public static get maxComputeBufferInputsHull(): number;
                /** Determines how many compute buffers Unity supports simultaneously in a compute shader for reading. (Read Only) */
                public static get maxComputeBufferInputsCompute(): number;
                /** The largest total number of invocations in a single local work group that can be dispatched to a compute shader (Read Only). */
                public static get maxComputeWorkGroupSize(): number;
                /** The maximum number of work groups that a compute shader can use in X dimension (Read Only). */
                public static get maxComputeWorkGroupSizeX(): number;
                /** The maximum number of work groups that a compute shader can use in Y dimension (Read Only). */
                public static get maxComputeWorkGroupSizeY(): number;
                /** The maximum number of work groups that a compute shader can use in Z dimension (Read Only). */
                public static get maxComputeWorkGroupSizeZ(): number;
                /** Returns true when the platform supports asynchronous compute queues and false if otherwise. */
                public static get supportsAsyncCompute(): boolean;
                /** Specifies whether the current platform supports the GPU Recorder or not. (Read Only). */
                public static get supportsGpuRecorder(): boolean;
                /** Returns true when the platform supports GraphicsFences, and false if otherwise. */
                public static get supportsGraphicsFence(): boolean;
                /** Returns true if asynchronous readback of GPU data is available for this device and false otherwise. */
                public static get supportsAsyncGPUReadback(): boolean;
                /** Checks if ray tracing is supported by the current configuration. */
                public static get supportsRayTracing(): boolean;
                /** Does the current renderer support binding constant buffers directly? (Read Only) */
                public static get supportsSetConstantBuffer(): boolean;
                /** Minimum buffer offset (in bytes) when binding a constant buffer using Shader.SetConstantBuffer or Material.SetConstantBuffer. */
                public static get constantBufferOffsetAlignment(): number;
                /** The maximum size of a graphics buffer (GraphicsBuffer, ComputeBuffer, vertex/index buffer, etc.) in bytes (Read Only). */
                public static get maxGraphicsBufferSize(): bigint;
                /** Returns true if the GPU supports partial mipmap chains (Read Only). */
                public static get hasMipMaxLevel(): boolean;
                /** Is streaming of texture mip maps supported? (Read Only) */
                public static get supportsMipStreaming(): boolean;
                /** True if the Graphics API takes RenderBufferLoadAction and RenderBufferStoreAction into account, false if otherwise. */
                public static get usesLoadStoreActions(): boolean;
                /** Returns a bitwise combination of HDRDisplaySupportFlags describing the support for HDR displays on the system. */
                public static get hdrDisplaySupportFlags(): UnityEngine.HDRDisplaySupportFlags;
                /** Is conservative rasterization supported? (Read Only) */
                public static get supportsConservativeRaster(): boolean;
                /** Boolean that indicates whether Multiview is supported (true if supported, false if not supported). (Read Only) */
                public static get supportsMultiview(): boolean;
                /** This property is true if the graphics API of the target build platform takes RenderBufferStoreAction.StoreAndResolve into account, false if otherwise. */
                public static get supportsStoreAndResolveAction(): boolean;
                /** Returns true if the platform supports multisample resolve of depth textures. */
                public static get supportsMultisampleResolveDepth(): boolean;
                /** Is render texture format supported?
                * @param format The format to look up.
                * @returns True if the format is supported. 
                */
                public static SupportsRenderTextureFormat ($format: UnityEngine.RenderTextureFormat) : boolean
                /** Is blending supported on render texture format?
                * @param format The format to look up.
                * @returns True if blending is supported on the given format. 
                */
                public static SupportsBlendingOnRenderTextureFormat ($format: UnityEngine.RenderTextureFormat) : boolean
                /** Tests if a RenderTextureFormat can be used with RenderTexture.enableRandomWrite.
                * @param format The format to look up.
                * @returns True if the format can be used for random access writes. 
                */
                public static SupportsRandomWriteOnRenderTextureFormat ($format: UnityEngine.RenderTextureFormat) : boolean
                /** Is texture format supported on this device?
                * @param format The TextureFormat format to look up.
                * @returns True if the format is supported. 
                */
                public static SupportsTextureFormat ($format: UnityEngine.TextureFormat) : boolean
                /** Indicates whether the given combination of a vertex attribute format and dimension is supported on this device.
                * @param format The VertexAttributeFormat format to look up.
                * @param dimension The dimension of vertex data to check for.
                * @returns True if the format with the given dimension is supported. 
                */
                public static SupportsVertexAttributeFormat ($format: UnityEngine.Rendering.VertexAttributeFormat, $dimension: number) : boolean
                public static IsFormatSupported ($format: UnityEngine.Experimental.Rendering.GraphicsFormat, $usage: UnityEngine.Experimental.Rendering.FormatUsage) : boolean
                public static GetCompatibleFormat ($format: UnityEngine.Experimental.Rendering.GraphicsFormat, $usage: UnityEngine.Experimental.Rendering.FormatUsage) : UnityEngine.Experimental.Rendering.GraphicsFormat
                /** Returns the platform-specific GraphicsFormat that is associated with the DefaultFormat. * @param format The DefaultFormat format to look up.
                */
                public static GetGraphicsFormat ($format: UnityEngine.Experimental.Rendering.DefaultFormat) : UnityEngine.Experimental.Rendering.GraphicsFormat
                /** Checks if the target platform supports the MSAA samples count in the RenderTextureDescriptor argument.
                * @param desc The RenderTextureDescriptor to check.
                * @returns If the target platform supports the given MSAA samples count of RenderTextureDescriptor, returns the given MSAA samples count. Otherwise returns a lower fallback MSAA samples count value that the target platform supports. 
                */
                public static GetRenderTextureSupportedMSAASampleCount ($desc: UnityEngine.RenderTextureDescriptor) : number
                public constructor ()
            }
            /** Enumeration for SystemInfo.batteryStatus which represents the current status of the device's battery. */
            enum BatteryStatus
            { Unknown = 0, Charging = 1, Discharging = 2, NotCharging = 3, Full = 4 }
            /** Enumeration for SystemInfo.operatingSystemFamily. */
            enum OperatingSystemFamily
            { Other = 0, MacOSX = 1, Windows = 2, Linux = 3 }
            /** Enumeration for SystemInfo.deviceType, denotes a coarse grouping of kinds of devices. */
            enum DeviceType
            { Unknown = 0, Handheld = 1, Console = 2, Desktop = 3 }
            /** Format of a RenderTexture. */
            enum RenderTextureFormat
            { ARGB32 = 0, Depth = 1, ARGBHalf = 2, Shadowmap = 3, RGB565 = 4, ARGB4444 = 5, ARGB1555 = 6, Default = 7, ARGB2101010 = 8, DefaultHDR = 9, ARGB64 = 10, ARGBFloat = 11, RGFloat = 12, RGHalf = 13, RFloat = 14, RHalf = 15, R8 = 16, ARGBInt = 17, RGInt = 18, RInt = 19, BGRA32 = 20, RGB111110Float = 22, RG32 = 23, RGBAUShort = 24, RG16 = 25, BGRA10101010_XR = 26, BGR101010_XR = 27, R16 = 28 }
            /** NPOT Texture2D|textures support. */
            enum NPOTSupport
            { None = 0, Restricted = 1, Full = 2 }
            /** A set of flags that describe the level of HDR display support available on the system. */
            enum HDRDisplaySupportFlags
            { None = 0, Supported = 1, RuntimeSwitchable = 2, AutomaticTonemapping = 4 }
            /** This struct contains all the information required to create a RenderTexture. It can be copied, cached, and reused to easily create RenderTextures that all share the same properties. Avoid using the default constructor as it does not initialize some flags with the recommended values. */
            class RenderTextureDescriptor extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            /** GPU data buffer, mostly for use with compute shaders. */
            class ComputeBuffer extends System.Object implements System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
            /** GPU graphics data buffer, for working with geometry or compute shader data. */
            class GraphicsBuffer extends System.Object implements System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
            enum TexGenMode
            { None = 0, SphereMap = 1, Object = 2, EyeLinear = 3, CubeReflect = 4, CubeNormal = 5 }
            /** How the material interacts with lightmaps and lightprobes. */
            enum MaterialGlobalIlluminationFlags
            { None = 0, RealtimeEmissive = 1, BakedEmissive = 2, EmissiveIsBlack = 4, AnyEmissive = 3 }
            /** Renders meshes inserted by the MeshFilter or TextMesh. */
            class MeshRenderer extends UnityEngine.Renderer
            {
                protected [__keep_incompatibility]: never;
                /** Vertex attributes in this mesh will override or add attributes of the primary mesh in the MeshRenderer. */
                public get additionalVertexStreams(): UnityEngine.Mesh;
                public set additionalVertexStreams(value: UnityEngine.Mesh);
                /** Vertex attributes that override the primary mesh when the MeshRenderer uses lightmaps in the Realtime Global Illumination system. */
                public get enlightenVertexStream(): UnityEngine.Mesh;
                public set enlightenVertexStream(value: UnityEngine.Mesh);
                /** Index of the first sub-mesh to use from the Mesh associated with this MeshRenderer (Read Only). */
                public get subMeshStartIndex(): number;
                /** Specifies the relative lightmap resolution of this object. (Editor only) */
                public get scaleInLightmap(): number;
                public set scaleInLightmap(value: number);
                /** Determines how the object will receive global illumination. (Editor only) */
                public get receiveGI(): UnityEngine.ReceiveGI;
                public set receiveGI(value: UnityEngine.ReceiveGI);
                /** When enabled, seams in baked lightmaps will get smoothed. (Editor only) */
                public get stitchLightmapSeams(): boolean;
                public set stitchLightmapSeams(value: boolean);
                public constructor ()
            }
            /** This property only takes effect if you enable a global illumination setting such as for the GameObject associated with the target Mesh Renderer. Otherwise this property defaults to the Light Probes setting. */
            enum ReceiveGI
            { Lightmaps = 1, LightProbes = 2 }
            /** A block of material values to apply. */
            class MaterialPropertyBlock extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** The type of motion vectors that should be generated. */
            enum MotionVectorGenerationMode
            { Camera = 0, Object = 1, ForceNoMotion = 2 }
            /** A representation of audio sources in 3D. */
            class AudioSource extends UnityEngine.AudioBehaviour
            {
                protected [__keep_incompatibility]: never;
                /** The volume of the audio source (0.0 to 1.0). */
                public get volume(): number;
                public set volume(value: number);
                /** The pitch of the audio source. */
                public get pitch(): number;
                public set pitch(value: number);
                /** Playback position in seconds. */
                public get time(): number;
                public set time(value: number);
                /** Playback position in PCM samples. */
                public get timeSamples(): number;
                public set timeSamples(value: number);
                /** The default AudioClip to play. */
                public get clip(): UnityEngine.AudioClip;
                public set clip(value: UnityEngine.AudioClip);
                /** The target group to which the AudioSource should route its signal. */
                public get outputAudioMixerGroup(): UnityEngine.Audio.AudioMixerGroup;
                public set outputAudioMixerGroup(value: UnityEngine.Audio.AudioMixerGroup);
                /** Gets or sets the gamepad audio output type for this audio source. */
                public get gamepadSpeakerOutputType(): UnityEngine.GamepadSpeakerOutputType;
                public set gamepadSpeakerOutputType(value: UnityEngine.GamepadSpeakerOutputType);
                /** Is the clip playing right now (Read Only)? */
                public get isPlaying(): boolean;
                /** True if all sounds played by the AudioSource (main sound started by Play() or playOnAwake as well as one-shots) are culled by the audio system. */
                public get isVirtual(): boolean;
                /** Is the audio clip looping? */
                public get loop(): boolean;
                public set loop(value: boolean);
                /** This makes the audio source not take into account the volume of the audio listener. */
                public get ignoreListenerVolume(): boolean;
                public set ignoreListenerVolume(value: boolean);
                /** If set to true, the audio source will automatically start playing on awake. */
                public get playOnAwake(): boolean;
                public set playOnAwake(value: boolean);
                /** Allows AudioSource to play even though AudioListener.pause is set to true. This is useful for the menu element sounds or background music in pause menus. */
                public get ignoreListenerPause(): boolean;
                public set ignoreListenerPause(value: boolean);
                /** Whether the Audio Source should be updated in the fixed or dynamic update. */
                public get velocityUpdateMode(): UnityEngine.AudioVelocityUpdateMode;
                public set velocityUpdateMode(value: UnityEngine.AudioVelocityUpdateMode);
                /** Pans a playing sound in a stereo way (left or right). This only applies to sounds that are Mono or Stereo. */
                public get panStereo(): number;
                public set panStereo(value: number);
                /** Sets how much this AudioSource is affected by 3D spatialisation calculations (attenuation, doppler etc). 0.0 makes the sound full 2D, 1.0 makes it full 3D. */
                public get spatialBlend(): number;
                public set spatialBlend(value: number);
                /** Enables or disables spatialization. */
                public get spatialize(): boolean;
                public set spatialize(value: boolean);
                /** Determines if the spatializer effect is inserted before or after the effect filters. */
                public get spatializePostEffects(): boolean;
                public set spatializePostEffects(value: boolean);
                /** The amount by which the signal from the AudioSource will be mixed into the global reverb associated with the Reverb Zones. */
                public get reverbZoneMix(): number;
                public set reverbZoneMix(value: number);
                /** Bypass effects (Applied from filter components or global listener filters). */
                public get bypassEffects(): boolean;
                public set bypassEffects(value: boolean);
                /** When set global effects on the AudioListener will not be applied to the audio signal generated by the AudioSource. Does not apply if the AudioSource is playing into a mixer group. */
                public get bypassListenerEffects(): boolean;
                public set bypassListenerEffects(value: boolean);
                /** When set doesn't route the signal from an AudioSource into the global reverb associated with reverb zones. */
                public get bypassReverbZones(): boolean;
                public set bypassReverbZones(value: boolean);
                /** Sets the Doppler scale for this AudioSource. */
                public get dopplerLevel(): number;
                public set dopplerLevel(value: number);
                /** Sets the spread angle (in degrees) of a 3d stereo or multichannel sound in speaker space. */
                public get spread(): number;
                public set spread(value: number);
                /** Sets the priority of the AudioSource. */
                public get priority(): number;
                public set priority(value: number);
                /** Un- / Mutes the AudioSource. Mute sets the volume=0, Un-Mute restore the original volume. */
                public get mute(): boolean;
                public set mute(value: boolean);
                /** Within the Min distance the AudioSource will cease to grow louder in volume. */
                public get minDistance(): number;
                public set minDistance(value: number);
                /** (Logarithmic rolloff) MaxDistance is the distance a sound stops attenuating at. */
                public get maxDistance(): number;
                public set maxDistance(value: number);
                /** Sets/Gets how the AudioSource attenuates over distance. */
                public get rolloffMode(): UnityEngine.AudioRolloffMode;
                public set rolloffMode(value: UnityEngine.AudioRolloffMode);
                /** Enable playing of audio source though a specfic gamepad.
                * @param slot Slot number of the gamepad (0-3).
                * @returns Returns TRUE if enabling audio output through this users controller was successful. 
                */
                public PlayOnGamepad ($slot: number) : boolean
                public DisableGamepadOutput () : boolean
                public SetGamepadSpeakerMixLevel ($slot: number, $mixLevel: number) : boolean
                public SetGamepadSpeakerMixLevelDefault ($slot: number) : boolean
                public SetGamepadSpeakerRestrictedAudio ($slot: number, $restricted: boolean) : boolean
                /** Check if the platform supports an audio output type  on gamepads.
                * @param outputType The desired output type.
                * @returns Returns true if the gamepad supports the specified audio output type. 
                */
                public static GamepadSpeakerSupportsOutputType ($outputType: UnityEngine.GamepadSpeakerOutputType) : boolean
                /** Plays the clip. * @param delay Deprecated. Delay in number of samples, assuming a 44100Hz sample rate (meaning that Play(44100) will delay the playing by exactly 1 sec).
                */
                public Play () : void
                /** Plays the clip. * @param delay Deprecated. Delay in number of samples, assuming a 44100Hz sample rate (meaning that Play(44100) will delay the playing by exactly 1 sec).
                */
                public Play ($delay: bigint) : void
                /** Plays the clip with a delay specified in seconds. Users are advised to use this function instead of the old Play(delay) function that took a delay specified in samples relative to a reference rate of 44.1 kHz as an argument. * @param delay Delay time specified in seconds.
                */
                public PlayDelayed ($delay: number) : void
                /** Plays the clip at a specific time on the absolute time-line that AudioSettings.dspTime reads from. * @param time Time in seconds on the absolute time-line that AudioSettings.dspTime refers to for when the sound should start playing.
                */
                public PlayScheduled ($time: number) : void
                /** Plays an AudioClip, and scales the AudioSource volume by volumeScale. * @param clip The clip being played.
                * @param volumeScale The scale of the volume (0-1).
                */
                public PlayOneShot ($clip: UnityEngine.AudioClip) : void
                /** Plays an AudioClip, and scales the AudioSource volume by volumeScale. * @param clip The clip being played.
                * @param volumeScale The scale of the volume (0-1).
                */
                public PlayOneShot ($clip: UnityEngine.AudioClip, $volumeScale: number) : void
                /** Changes the time at which a sound that has already been scheduled to play will start. * @param time Time in seconds.
                */
                public SetScheduledStartTime ($time: number) : void
                /** Changes the time at which a sound that has already been scheduled to play will end. Notice that depending on the timing not all rescheduling requests can be fulfilled. * @param time Time in seconds.
                */
                public SetScheduledEndTime ($time: number) : void
                public Stop () : void
                public Pause () : void
                public UnPause () : void
                /** Plays an AudioClip at a given position in world space. * @param clip Audio data to play.
                * @param position Position in world space from which sound originates.
                * @param volume Playback volume.
                */
                public static PlayClipAtPoint ($clip: UnityEngine.AudioClip, $position: UnityEngine.Vector3) : void
                /** Plays an AudioClip at a given position in world space. * @param clip Audio data to play.
                * @param position Position in world space from which sound originates.
                * @param volume Playback volume.
                */
                public static PlayClipAtPoint ($clip: UnityEngine.AudioClip, $position: UnityEngine.Vector3, $volume: number) : void
                /** Set the custom curve for the given AudioSourceCurveType. * @param type The curve type that should be set.
                * @param curve The curve that should be applied to the given curve type.
                */
                public SetCustomCurve ($type: UnityEngine.AudioSourceCurveType, $curve: UnityEngine.AnimationCurve) : void
                /** Get the current custom curve for the given AudioSourceCurveType.
                * @param type The curve type to get.
                * @returns The custom AnimationCurve corresponding to the given curve type. 
                */
                public GetCustomCurve ($type: UnityEngine.AudioSourceCurveType) : UnityEngine.AnimationCurve
                /** Provides a block of the currently playing source's output data. * @param samples The array to populate with audio samples. Its length must be a power of 2.
                * @param channel The channel to sample from.
                */
                public GetOutputData ($samples: System.Array$1<number>, $channel: number) : void
                /** Provides a block of the currently playing audio source's spectrum data. * @param samples The array to populate with audio samples. Its length must be a power of 2.
                * @param channel The channel to sample from.
                * @param window The FFTWindow type to use when sampling.
                */
                public GetSpectrumData ($samples: System.Array$1<number>, $channel: number, $window: UnityEngine.FFTWindow) : void
                /** Sets a user-defined parameter of a custom spatializer effect that is attached to an AudioSource.
                * @param index Zero-based index of user-defined parameter to be set.
                * @param value New value of the user-defined parameter.
                * @returns True, if the parameter could be set. 
                */
                public SetSpatializerFloat ($index: number, $value: number) : boolean
                /** Reads a user-defined parameter of a custom spatializer effect that is attached to an AudioSource.
                * @param index Zero-based index of user-defined parameter to be read.
                * @param value Return value of the user-defined parameter that is read.
                * @returns True, if the parameter could be read. 
                */
                public GetSpatializerFloat ($index: number, $value: $Ref<number>) : boolean
                /** Reads a user-defined parameter of a custom ambisonic decoder effect that is attached to an AudioSource.
                * @param index Zero-based index of user-defined parameter to be read.
                * @param value Return value of the user-defined parameter that is read.
                * @returns True, if the parameter could be read. 
                */
                public GetAmbisonicDecoderFloat ($index: number, $value: $Ref<number>) : boolean
                /** Sets a user-defined parameter of a custom ambisonic decoder effect that is attached to an AudioSource.
                * @param index Zero-based index of user-defined parameter to be set.
                * @param value New value of the user-defined parameter.
                * @returns True, if the parameter could be set. 
                */
                public SetAmbisonicDecoderFloat ($index: number, $value: number) : boolean
                public constructor ()
            }
            class AudioBehaviour extends UnityEngine.Behaviour
            {
                protected [__keep_incompatibility]: never;
            }
            /** A container for audio data. */
            class AudioClip extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** Gamepad audio output types. */
            enum GamepadSpeakerOutputType
            { Speaker = 0, Vibration = 1, SecondaryVibration = 2 }
            /** Describes when an AudioSource or AudioListener is updated. */
            enum AudioVelocityUpdateMode
            { Auto = 0, Fixed = 1, Dynamic = 2 }
            /** This defines the curve type of the different custom curves that can be queried and set within the AudioSource. */
            enum AudioSourceCurveType
            { CustomRolloff = 0, SpatialBlend = 1, ReverbZoneMix = 2, Spread = 3 }
            /** Store a collection of Keyframes that can be evaluated over time. */
            class AnimationCurve extends System.Object implements System.IEquatable$1<UnityEngine.AnimationCurve>
            {
                protected [__keep_incompatibility]: never;
            }
            /** Rolloff modes that a 3D sound can have in an audio source. */
            enum AudioRolloffMode
            { Logarithmic = 0, Linear = 1, Custom = 2 }
            /** Spectrum analysis windowing types. */
            enum FFTWindow
            { Rectangular = 0, Triangle = 1, Hamming = 2, Hanning = 3, Blackman = 4, BlackmanHarris = 5 }
            /** Representation of a listener in 3D space. */
            class AudioListener extends UnityEngine.AudioBehaviour
            {
                protected [__keep_incompatibility]: never;
                /** Controls the game sound volume (0.0 to 1.0). */
                public static get volume(): number;
                public static set volume(value: number);
                /** The paused state of the audio system. */
                public static get pause(): boolean;
                public static set pause(value: boolean);
                /** This lets you set whether the Audio Listener should be updated in the fixed or dynamic update. */
                public get velocityUpdateMode(): UnityEngine.AudioVelocityUpdateMode;
                public set velocityUpdateMode(value: UnityEngine.AudioVelocityUpdateMode);
                /** Provides a block of the listener (master)'s output data. * @param samples The array to populate with audio samples. Its length must be a power of 2.
                * @param channel The channel to sample from.
                */
                public static GetOutputData ($samples: System.Array$1<number>, $channel: number) : void
                /** Provides a block of the listener (master)'s spectrum data. * @param samples The array to populate with audio samples. Its length must be a power of 2.
                * @param channel The channel to sample from.
                * @param window The FFTWindow type to use when sampling.
                */
                public static GetSpectrumData ($samples: System.Array$1<number>, $channel: number, $window: UnityEngine.FFTWindow) : void
                public constructor ()
            }
            /** Class containing methods to ease debugging while developing a game. */
            class Debug extends System.Object
            {
                protected [__keep_incompatibility]: never;
                /** Get default debug logger. */
                public static get unityLogger(): UnityEngine.ILogger;
                /** Reports whether the development console is visible. The development console cannot be made to appear using: */
                public static get developerConsoleVisible(): boolean;
                public static set developerConsoleVisible(value: boolean);
                /** In the Build Settings dialog there is a check box called "Development Build". */
                public static get isDebugBuild(): boolean;
                /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
                * @param end Point in world space where the line should end.
                * @param color Color of the line.
                * @param duration How long the line should be visible for.
                * @param depthTest Should the line be obscured by objects closer to the camera?
                */
                public static DrawLine ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number) : void
                /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
                * @param end Point in world space where the line should end.
                * @param color Color of the line.
                * @param duration How long the line should be visible for.
                * @param depthTest Should the line be obscured by objects closer to the camera?
                */
                public static DrawLine ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color) : void
                /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
                * @param end Point in world space where the line should end.
                * @param color Color of the line.
                * @param duration How long the line should be visible for.
                * @param depthTest Should the line be obscured by objects closer to the camera?
                */
                public static DrawLine ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3) : void
                /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
                * @param end Point in world space where the line should end.
                * @param color Color of the line.
                * @param duration How long the line should be visible for.
                * @param depthTest Should the line be obscured by objects closer to the camera?
                */
                public static DrawLine ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number, $depthTest: boolean) : void
                /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
                * @param dir Direction and length of the ray.
                * @param color Color of the drawn line.
                * @param duration How long the line will be visible for (in seconds).
                * @param depthTest Should the line be obscured by other objects closer to the camera?
                */
                public static DrawRay ($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number) : void
                /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
                * @param dir Direction and length of the ray.
                * @param color Color of the drawn line.
                * @param duration How long the line will be visible for (in seconds).
                * @param depthTest Should the line be obscured by other objects closer to the camera?
                */
                public static DrawRay ($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color) : void
                /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
                * @param dir Direction and length of the ray.
                * @param color Color of the drawn line.
                * @param duration How long the line will be visible for (in seconds).
                * @param depthTest Should the line be obscured by other objects closer to the camera?
                */
                public static DrawRay ($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3) : void
                /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
                * @param dir Direction and length of the ray.
                * @param color Color of the drawn line.
                * @param duration How long the line will be visible for (in seconds).
                * @param depthTest Should the line be obscured by other objects closer to the camera?
                */
                public static DrawRay ($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number, $depthTest: boolean) : void
                public static Break () : void
                public static DebugBreak () : void
                /** Logs a message to the Unity Console. * @param message String or object to be converted to string representation for display.
                * @param context Object to which the message applies.
                */
                public static Log ($message: any) : void
                /** Logs a message to the Unity Console. * @param message String or object to be converted to string representation for display.
                * @param context Object to which the message applies.
                */
                public static Log ($message: any, $context: UnityEngine.Object) : void
                /** Logs a formatted message to the Unity Console. * @param format A composite format string.
                * @param args Format arguments.
                * @param context Object to which the message applies.
                * @param logType Type of message e.g. warn or error etc.
                * @param logOptions Option flags to treat the log message special.
                */
                public static LogFormat ($format: string, ...args: any[]) : void
                /** Logs a formatted message to the Unity Console. * @param format A composite format string.
                * @param args Format arguments.
                * @param context Object to which the message applies.
                * @param logType Type of message e.g. warn or error etc.
                * @param logOptions Option flags to treat the log message special.
                */
                public static LogFormat ($context: UnityEngine.Object, $format: string, ...args: any[]) : void
                /** Logs a formatted message to the Unity Console. * @param format A composite format string.
                * @param args Format arguments.
                * @param context Object to which the message applies.
                * @param logType Type of message e.g. warn or error etc.
                * @param logOptions Option flags to treat the log message special.
                */
                public static LogFormat ($logType: UnityEngine.LogType, $logOptions: UnityEngine.LogOption, $context: UnityEngine.Object, $format: string, ...args: any[]) : void
                /** A variant of Debug.Log that logs an error message to the console. * @param message String or object to be converted to string representation for display.
                * @param context Object to which the message applies.
                */
                public static LogError ($message: any) : void
                /** A variant of Debug.Log that logs an error message to the console. * @param message String or object to be converted to string representation for display.
                * @param context Object to which the message applies.
                */
                public static LogError ($message: any, $context: UnityEngine.Object) : void
                /** Logs a formatted error message to the Unity console. * @param format A composite format string.
                * @param args Format arguments.
                * @param context Object to which the message applies.
                */
                public static LogErrorFormat ($format: string, ...args: any[]) : void
                /** Logs a formatted error message to the Unity console. * @param format A composite format string.
                * @param args Format arguments.
                * @param context Object to which the message applies.
                */
                public static LogErrorFormat ($context: UnityEngine.Object, $format: string, ...args: any[]) : void
                public static ClearDeveloperConsole () : void
                /** A variant of Debug.Log that logs an error message to the console. * @param context Object to which the message applies.
                * @param exception Runtime Exception.
                */
                public static LogException ($exception: System.Exception) : void
                /** A variant of Debug.Log that logs an error message to the console. * @param context Object to which the message applies.
                * @param exception Runtime Exception.
                */
                public static LogException ($exception: System.Exception, $context: UnityEngine.Object) : void
                /** A variant of Debug.Log that logs a warning message to the console. * @param message String or object to be converted to string representation for display.
                * @param context Object to which the message applies.
                */
                public static LogWarning ($message: any) : void
                /** A variant of Debug.Log that logs a warning message to the console. * @param message String or object to be converted to string representation for display.
                * @param context Object to which the message applies.
                */
                public static LogWarning ($message: any, $context: UnityEngine.Object) : void
                /** Logs a formatted warning message to the Unity Console. * @param format A composite format string.
                * @param args Format arguments.
                * @param context Object to which the message applies.
                */
                public static LogWarningFormat ($format: string, ...args: any[]) : void
                /** Logs a formatted warning message to the Unity Console. * @param format A composite format string.
                * @param args Format arguments.
                * @param context Object to which the message applies.
                */
                public static LogWarningFormat ($context: UnityEngine.Object, $format: string, ...args: any[]) : void
                /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
                * @param context Object to which the message applies.
                * @param message String or object to be converted to string representation for display.
                */
                public static Assert ($condition: boolean) : void
                /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
                * @param context Object to which the message applies.
                * @param message String or object to be converted to string representation for display.
                */
                public static Assert ($condition: boolean, $context: UnityEngine.Object) : void
                /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
                * @param context Object to which the message applies.
                * @param message String or object to be converted to string representation for display.
                */
                public static Assert ($condition: boolean, $message: any) : void
                public static Assert ($condition: boolean, $message: string) : void
                /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
                * @param context Object to which the message applies.
                * @param message String or object to be converted to string representation for display.
                */
                public static Assert ($condition: boolean, $message: any, $context: UnityEngine.Object) : void
                public static Assert ($condition: boolean, $message: string, $context: UnityEngine.Object) : void
                /** Assert a condition and logs a formatted error message to the Unity console on failure. * @param condition Condition you expect to be true.
                * @param format A composite format string.
                * @param args Format arguments.
                * @param context Object to which the message applies.
                */
                public static AssertFormat ($condition: boolean, $format: string, ...args: any[]) : void
                /** Assert a condition and logs a formatted error message to the Unity console on failure. * @param condition Condition you expect to be true.
                * @param format A composite format string.
                * @param args Format arguments.
                * @param context Object to which the message applies.
                */
                public static AssertFormat ($condition: boolean, $context: UnityEngine.Object, $format: string, ...args: any[]) : void
                /** A variant of Debug.Log that logs an assertion message to the console. * @param message String or object to be converted to string representation for display.
                * @param context Object to which the message applies.
                */
                public static LogAssertion ($message: any) : void
                /** A variant of Debug.Log that logs an assertion message to the console. * @param message String or object to be converted to string representation for display.
                * @param context Object to which the message applies.
                */
                public static LogAssertion ($message: any, $context: UnityEngine.Object) : void
                /** Logs a formatted assertion message to the Unity console. * @param format A composite format string.
                * @param args Format arguments.
                * @param context Object to which the message applies.
                */
                public static LogAssertionFormat ($format: string, ...args: any[]) : void
                /** Logs a formatted assertion message to the Unity console. * @param format A composite format string.
                * @param args Format arguments.
                * @param context Object to which the message applies.
                */
                public static LogAssertionFormat ($context: UnityEngine.Object, $format: string, ...args: any[]) : void
                public constructor ()
            }
            interface ILogger extends UnityEngine.ILogHandler
            {
            }
            interface ILogHandler
            {
            }
            /** The type of the log message in Debug.unityLogger.Log or delegate registered with Application.RegisterLogCallback. */
            enum LogType
            { Error = 0, Assert = 1, Warning = 2, Log = 3, Exception = 4 }
            /** Option flags for specifying special treatment of a log message. */
            enum LogOption
            { None = 0, NoStacktrace = 1 }
            /** Provides an interface to get time information from Unity. */
            class Time extends System.Object
            {
                protected [__keep_incompatibility]: never;
                /** The time at the beginning of this frame (Read Only). */
                public static get time(): number;
                /** The double precision time at the beginning of this frame (Read Only). This is the time in seconds since the start of the game. */
                public static get timeAsDouble(): number;
                /** The time since this frame started (Read Only). This is the time in seconds since the last non-additive scene has finished loading. */
                public static get timeSinceLevelLoad(): number;
                /** The double precision time since this frame started (Read Only). This is the time in seconds since the last non-additive scene has finished loading. */
                public static get timeSinceLevelLoadAsDouble(): number;
                /** The interval in seconds from the last frame to the current one (Read Only). */
                public static get deltaTime(): number;
                /** The time since the last MonoBehaviour.FixedUpdate started (Read Only). This is the time in seconds since the start of the game. */
                public static get fixedTime(): number;
                /** The double precision time since the last MonoBehaviour.FixedUpdate started (Read Only). This is the time in seconds since the start of the game. */
                public static get fixedTimeAsDouble(): number;
                /** The timeScale-independent time for this frame (Read Only). This is the time in seconds since the start of the game. */
                public static get unscaledTime(): number;
                /** The double precision timeScale-independent time for this frame (Read Only). This is the time in seconds since the start of the game. */
                public static get unscaledTimeAsDouble(): number;
                /** The timeScale-independent time at the beginning of the last MonoBehaviour.FixedUpdate phase (Read Only). This is the time in seconds since the start of the game. */
                public static get fixedUnscaledTime(): number;
                /** The double precision timeScale-independent time at the beginning of the last MonoBehaviour.FixedUpdate (Read Only). This is the time in seconds since the start of the game. */
                public static get fixedUnscaledTimeAsDouble(): number;
                /** The timeScale-independent interval in seconds from the last frame to the current one (Read Only). */
                public static get unscaledDeltaTime(): number;
                /** The timeScale-independent interval in seconds from the last MonoBehaviour.FixedUpdate phase to the current one (Read Only). */
                public static get fixedUnscaledDeltaTime(): number;
                /** The interval in seconds at which physics and other fixed frame rate updates (like MonoBehaviour's MonoBehaviour.FixedUpdate) are performed. */
                public static get fixedDeltaTime(): number;
                public static set fixedDeltaTime(value: number);
                /** The maximum value of Time.deltaTime in any given frame. This is a time in seconds that limits the increase of Time.time between two frames. */
                public static get maximumDeltaTime(): number;
                public static set maximumDeltaTime(value: number);
                /** A smoothed out Time.deltaTime (Read Only). */
                public static get smoothDeltaTime(): number;
                /** The maximum time a frame can spend on particle updates. If the frame takes longer than this, then updates are split into multiple smaller updates. */
                public static get maximumParticleDeltaTime(): number;
                public static set maximumParticleDeltaTime(value: number);
                /** The scale at which time passes. */
                public static get timeScale(): number;
                public static set timeScale(value: number);
                /** The total number of frames since the start of the game (Read Only). */
                public static get frameCount(): number;
                public static get renderedFrameCount(): number;
                /** The real time in seconds since the game started (Read Only). */
                public static get realtimeSinceStartup(): number;
                /** The real time in seconds since the game started (Read Only). Double precision version of Time.realtimeSinceStartup.  */
                public static get realtimeSinceStartupAsDouble(): number;
                /** Slows your application’s playback time to allow Unity to save screenshots in between frames. */
                public static get captureDeltaTime(): number;
                public static set captureDeltaTime(value: number);
                /** The reciprocal of Time.captureDeltaTime. */
                public static get captureFramerate(): number;
                public static set captureFramerate(value: number);
                /** Returns true if called inside a fixed time step callback (like MonoBehaviour's MonoBehaviour.FixedUpdate), otherwise returns false. */
                public static get inFixedTimeStep(): boolean;
                public constructor ()
            }
            /** The coordinate space in which to operate. */
            enum Space
            { World = 0, Self = 1 }
            /** Options for how to send a message. */
            enum SendMessageOptions
            { RequireReceiver = 0, DontRequireReceiver = 1 }
            /** The various primitives that can be created using the GameObject.CreatePrimitive function. */
            enum PrimitiveType
            { Sphere = 0, Capsule = 1, Cylinder = 2, Cube = 3, Plane = 4, Quad = 5 }
            /** Bit mask that controls object destruction, saving and visibility in inspectors. */
            enum HideFlags
            { None = 0, HideInHierarchy = 1, HideInInspector = 2, DontSaveInEditor = 4, NotEditable = 8, DontSaveInBuild = 16, DontUnloadUnusedAsset = 32, DontSave = 52, HideAndDontSave = 61 }
            /** Script interface for ParticleSystem. Unity's powerful and versatile particle system implementation. */
            class ParticleSystem extends UnityEngine.Component
            {
                protected [__keep_incompatibility]: never;
                /** Determines whether the Particle System is playing. */
                public get isPlaying(): boolean;
                /** Determines whether the Particle System is emitting particles. A Particle System may stop emitting when its emission module has finished, it has been paused or if the system has been stopped using ParticleSystem.Stop|Stop with the ParticleSystemStopBehavior.StopEmitting|StopEmitting flag. Resume emitting by calling ParticleSystem.Play|Play. */
                public get isEmitting(): boolean;
                /** Determines whether the Particle System is in the stopped state. */
                public get isStopped(): boolean;
                /** Determines whether the Particle System is paused. */
                public get isPaused(): boolean;
                /** The current number of particles (Read Only). The number doesn't include particles of child Particle Systems */
                public get particleCount(): number;
                /** Playback position in seconds. */
                public get time(): number;
                public set time(value: number);
                /** Override the random seed used for the Particle System emission. */
                public get randomSeed(): number;
                public set randomSeed(value: number);
                /** Controls whether the Particle System uses an automatically-generated random number to seed the random number generator. */
                public get useAutoRandomSeed(): boolean;
                public set useAutoRandomSeed(value: boolean);
                /** Does this system support Procedural Simulation? */
                public get proceduralSimulationSupported(): boolean;
                /** Access the main Particle System settings. */
                public get main(): UnityEngine.ParticleSystem.MainModule;
                /** Script interface for the EmissionModule of a Particle System. */
                public get emission(): UnityEngine.ParticleSystem.EmissionModule;
                /** Script interface for the ShapeModule of a Particle System.  */
                public get shape(): UnityEngine.ParticleSystem.ShapeModule;
                /** Script interface for the VelocityOverLifetimeModule of a Particle System. */
                public get velocityOverLifetime(): UnityEngine.ParticleSystem.VelocityOverLifetimeModule;
                /** Script interface for the LimitVelocityOverLifetimeModule of a Particle System. . */
                public get limitVelocityOverLifetime(): UnityEngine.ParticleSystem.LimitVelocityOverLifetimeModule;
                /** Script interface for the InheritVelocityModule of a Particle System. */
                public get inheritVelocity(): UnityEngine.ParticleSystem.InheritVelocityModule;
                /** Script interface for the Particle System Lifetime By Emitter Speed module. */
                public get lifetimeByEmitterSpeed(): UnityEngine.ParticleSystem.LifetimeByEmitterSpeedModule;
                /** Script interface for the ForceOverLifetimeModule of a Particle System. */
                public get forceOverLifetime(): UnityEngine.ParticleSystem.ForceOverLifetimeModule;
                /** Script interface for the ColorOverLifetimeModule of a Particle System. */
                public get colorOverLifetime(): UnityEngine.ParticleSystem.ColorOverLifetimeModule;
                /** Script interface for the ColorByLifetimeModule of a Particle System. */
                public get colorBySpeed(): UnityEngine.ParticleSystem.ColorBySpeedModule;
                /** Script interface for the SizeOverLifetimeModule of a Particle System.  */
                public get sizeOverLifetime(): UnityEngine.ParticleSystem.SizeOverLifetimeModule;
                /** Script interface for the SizeBySpeedModule of a Particle System. */
                public get sizeBySpeed(): UnityEngine.ParticleSystem.SizeBySpeedModule;
                /** Script interface for the RotationOverLifetimeModule of a Particle System. */
                public get rotationOverLifetime(): UnityEngine.ParticleSystem.RotationOverLifetimeModule;
                /** Script interface for the RotationBySpeedModule of a Particle System. */
                public get rotationBySpeed(): UnityEngine.ParticleSystem.RotationBySpeedModule;
                /** Script interface for the ExternalForcesModule of a Particle System. */
                public get externalForces(): UnityEngine.ParticleSystem.ExternalForcesModule;
                /** Script interface for the NoiseModule of a Particle System. */
                public get noise(): UnityEngine.ParticleSystem.NoiseModule;
                /** Script interface for the CollisionModule of a Particle System. */
                public get collision(): UnityEngine.ParticleSystem.CollisionModule;
                /** Script interface for the TriggerModule of a Particle System. */
                public get trigger(): UnityEngine.ParticleSystem.TriggerModule;
                /** Script interface for the SubEmittersModule of a Particle System. */
                public get subEmitters(): UnityEngine.ParticleSystem.SubEmittersModule;
                /** Script interface for the TextureSheetAnimationModule of a Particle System. */
                public get textureSheetAnimation(): UnityEngine.ParticleSystem.TextureSheetAnimationModule;
                /** Script interface for the LightsModule of a Particle System. */
                public get lights(): UnityEngine.ParticleSystem.LightsModule;
                /** Script interface for the TrailsModule of a Particle System. */
                public get trails(): UnityEngine.ParticleSystem.TrailModule;
                /** Script interface for the CustomDataModule of a Particle System. */
                public get customData(): UnityEngine.ParticleSystem.CustomDataModule;
                public SetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number) : void
                public SetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number) : void
                public SetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>) : void
                public SetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number) : void
                public SetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number) : void
                public SetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>) : void
                public GetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number) : number
                public GetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number) : number
                public GetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>) : number
                public GetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number) : number
                public GetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number) : number
                public GetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>) : number
                public SetCustomParticleData ($customData: System.Collections.Generic.List$1<UnityEngine.Vector4>, $streamIndex: UnityEngine.ParticleSystemCustomData) : void
                public GetCustomParticleData ($customData: System.Collections.Generic.List$1<UnityEngine.Vector4>, $streamIndex: UnityEngine.ParticleSystemCustomData) : number
                public GetPlaybackState () : UnityEngine.ParticleSystem.PlaybackState
                public SetPlaybackState ($playbackState: UnityEngine.ParticleSystem.PlaybackState) : void
                public GetTrails () : UnityEngine.ParticleSystem.Trails
                public GetTrails ($trailData: $Ref<UnityEngine.ParticleSystem.Trails>) : number
                public SetTrails ($trailData: UnityEngine.ParticleSystem.Trails) : void
                /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it. * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
                * @param withChildren Fast-forward all child Particle Systems as well.
                * @param restart Restart and start from the beginning.
                * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
                */
                public Simulate ($t: number, $withChildren: boolean, $restart: boolean, $fixedTimeStep: boolean) : void
                /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it. * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
                * @param withChildren Fast-forward all child Particle Systems as well.
                * @param restart Restart and start from the beginning.
                * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
                */
                public Simulate ($t: number, $withChildren: boolean, $restart: boolean) : void
                /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it. * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
                * @param withChildren Fast-forward all child Particle Systems as well.
                * @param restart Restart and start from the beginning.
                * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
                */
                public Simulate ($t: number, $withChildren: boolean) : void
                /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it. * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
                * @param withChildren Fast-forward all child Particle Systems as well.
                * @param restart Restart and start from the beginning.
                * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
                */
                public Simulate ($t: number) : void
                /** Starts the Particle System. * @param withChildren Play all child Particle Systems as well.
                */
                public Play ($withChildren: boolean) : void
                public Play () : void
                /** Pauses the system so no new particles are emitted and the existing particles are not updated. * @param withChildren Pause all child Particle Systems as well.
                */
                public Pause ($withChildren: boolean) : void
                public Pause () : void
                /** Stops playing the Particle System using the supplied stop behaviour. * @param withChildren Stop all child Particle Systems as well.
                * @param stopBehavior Stop emitting or stop emitting and clear the system.
                */
                public Stop ($withChildren: boolean, $stopBehavior: UnityEngine.ParticleSystemStopBehavior) : void
                /** Stops playing the Particle System using the supplied stop behaviour. * @param withChildren Stop all child Particle Systems as well.
                * @param stopBehavior Stop emitting or stop emitting and clear the system.
                */
                public Stop ($withChildren: boolean) : void
                public Stop () : void
                /** Remove all particles in the Particle System. * @param withChildren Clear all child Particle Systems as well.
                */
                public Clear ($withChildren: boolean) : void
                public Clear () : void
                /** Does the Particle System contain any live particles, or will it produce more?
                * @param withChildren Check all child Particle Systems as well.
                * @returns True if the Particle System contains live particles or is still creating new particles. False if the Particle System has stopped emitting particles and all particles are dead. 
                */
                public IsAlive ($withChildren: boolean) : boolean
                public IsAlive () : boolean
                /** Emit count particles immediately. * @param count Number of particles to emit.
                */
                public Emit ($count: number) : void
                public Emit ($emitParams: UnityEngine.ParticleSystem.EmitParams, $count: number) : void
                /** Triggers the specified sub emitter on all particles of the Particle System. * @param subEmitterIndex Index of the sub emitter to trigger.
                */
                public TriggerSubEmitter ($subEmitterIndex: number) : void
                public TriggerSubEmitter ($subEmitterIndex: number, $particle: $Ref<UnityEngine.ParticleSystem.Particle>) : void
                public TriggerSubEmitter ($subEmitterIndex: number, $particles: System.Collections.Generic.List$1<UnityEngine.ParticleSystem.Particle>) : void
                public static ResetPreMappedBufferMemory () : void
                /** Limits the amount of graphics memory Unity reserves for efficient rendering of Particle Systems. * @param vertexBuffersCount The maximum number of cached vertex buffers.
                * @param indexBuffersCount The maximum number of cached index buffers.
                */
                public static SetMaximumPreMappedBufferCounts ($vertexBuffersCount: number, $indexBuffersCount: number) : void
                public AllocateAxisOfRotationAttribute () : void
                public AllocateMeshIndexAttribute () : void
                /** Ensures that the ParticleSystemJobs.ParticleSystemJobData.customData1|customData1 and ParticleSystemJobs.ParticleSystemJobData.customData1|customData2 particle attribute arrays are allocated. * @param stream The custom data stream to allocate.
                */
                public AllocateCustomDataAttribute ($stream: UnityEngine.ParticleSystemCustomData) : void
                public constructor ()
            }
            /** The space to simulate particles in. */
            enum ParticleSystemSimulationSpace
            { Local = 0, World = 1, Custom = 2 }
            /** Control how particle systems apply transform scale. */
            enum ParticleSystemScalingMode
            { Hierarchy = 0, Local = 1, Shape = 2 }
            /** Which stream of custom particle data to set. */
            enum ParticleSystemCustomData
            { Custom1 = 0, Custom2 = 1 }
            /** The behavior to apply when calling ParticleSystem.Stop|Stop. */
            enum ParticleSystemStopBehavior
            { StopEmittingAndClear = 0, StopEmitting = 1 }
            /** RenderMode for the Canvas. */
            enum RenderMode
            { ScreenSpaceOverlay = 0, ScreenSpaceCamera = 1, WorldSpace = 2 }
            /** Enum mask of possible shader channel properties that can also be included when the Canvas mesh is created. */
            enum AdditionalCanvasShaderChannels
            { None = 0, TexCoord1 = 1, TexCoord2 = 2, TexCoord3 = 4, Normal = 8, Tangent = 16 }
            /** MonoBehaviour.StartCoroutine returns a Coroutine. Instances of this class are only used to reference these coroutines, and do not hold any exposed properties or functions. */
            class Coroutine extends UnityEngine.YieldInstruction
            {
                protected [__keep_incompatibility]: never;
            }
            /** The Resources class allows you to find and access Objects including assets. */
            class Resources extends System.Object
            {
                protected [__keep_incompatibility]: never;
                /** Returns a list of all objects of Type type. */
                public static FindObjectsOfTypeAll ($type: System.Type) : System.Array$1<UnityEngine.Object>
                /** Loads an asset stored at path in a Resources folder using an optional systemTypeInstance filter.
                * @param path Path to the target resource to load.
                * @param systemTypeInstance Type filter for objects returned.
                * @returns The requested asset returned as an Object. 
                */
                public static Load ($path: string) : UnityEngine.Object
                /** Loads an asset stored at path in a Resources folder using an optional systemTypeInstance filter.
                * @param path Path to the target resource to load.
                * @param systemTypeInstance Type filter for objects returned.
                * @returns The requested asset returned as an Object. 
                */
                public static Load ($path: string, $systemTypeInstance: System.Type) : UnityEngine.Object
                /** Asynchronously loads an asset stored at path in a Resources folder. * @param path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
                */
                public static LoadAsync ($path: string) : UnityEngine.ResourceRequest
                /** Asynchronously loads an asset stored at path in a Resources folder. * @param path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
                * @param systemTypeInstance Type filter for objects returned.
                */
                public static LoadAsync ($path: string, $type: System.Type) : UnityEngine.ResourceRequest
                /** Loads all assets in a folder or file at path in a Resources folder. * @param path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
                * @param systemTypeInstance Type filter for objects returned.
                */
                public static LoadAll ($path: string, $systemTypeInstance: System.Type) : System.Array$1<UnityEngine.Object>
                /** Loads all assets in a folder or file at path in a Resources folder. * @param path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
                */
                public static LoadAll ($path: string) : System.Array$1<UnityEngine.Object>
                public static GetBuiltinResource ($type: System.Type, $path: string) : UnityEngine.Object
                /** Unloads assetToUnload from memory. */
                public static UnloadAsset ($assetToUnload: UnityEngine.Object) : void
                public static UnloadUnusedAssets () : UnityEngine.AsyncOperation
                /** Translates an instance ID to an object reference.
                * @param instanceID Instance ID of an Object.
                * @returns Resolved reference or null if the instance ID didn't match anything. 
                */
                public static InstanceIDToObject ($instanceID: number) : UnityEngine.Object
                public static InstanceIDToObjectList ($instanceIDs: Unity.Collections.NativeArray$1<number>, $objects: System.Collections.Generic.List$1<UnityEngine.Object>) : void
                public constructor ()
            }
            /** Asynchronous load request from the Resources bundle. */
            class ResourceRequest extends UnityEngine.AsyncOperation
            {
                protected [__keep_incompatibility]: never;
            }
            /** Access to application run-time data. */
            class Application extends System.Object
            {
                protected [__keep_incompatibility]: never;
                /** Returns true when called in any kind of built Player, or when called in the Editor in Play Mode (Read Only). */
                public static get isPlaying(): boolean;
                /** Whether the player currently has focus. Read-only. */
                public static get isFocused(): boolean;
                /** Returns a GUID for this build (Read Only). */
                public static get buildGUID(): string;
                /** Should the player be running when the application is in the background? */
                public static get runInBackground(): boolean;
                public static set runInBackground(value: boolean);
                /** Returns true when Unity is launched with the -batchmode flag from the command line (Read Only). */
                public static get isBatchMode(): boolean;
                /** Contains the path to the game data folder on the target device (Read Only). */
                public static get dataPath(): string;
                /** The path to the StreamingAssets folder (Read Only). */
                public static get streamingAssetsPath(): string;
                /** (Read Only) Contains the path to a persistent data directory. */
                public static get persistentDataPath(): string;
                /** Contains the path to a temporary data / cache directory (Read Only). */
                public static get temporaryCachePath(): string;
                /** The URL of the document. For WebGL, this a web URL. For Android, iOS, or Universal Windows Platform (UWP) this is a deep link URL. (Read Only) */
                public static get absoluteURL(): string;
                /** The version of the Unity runtime used to play the content. */
                public static get unityVersion(): string;
                /** Returns application version number  (Read Only). */
                public static get version(): string;
                /** Returns the name of the store or package that installed the application (Read Only). */
                public static get installerName(): string;
                /** Returns application identifier at runtime. On Apple platforms this is the 'bundleIdentifier' saved in the info.plist file, on Android it's the 'package' from the AndroidManifest.xml.  */
                public static get identifier(): string;
                /** Returns application install mode (Read Only). */
                public static get installMode(): UnityEngine.ApplicationInstallMode;
                /** Returns application running in sandbox (Read Only). */
                public static get sandboxType(): UnityEngine.ApplicationSandboxType;
                /** Returns application product name (Read Only). */
                public static get productName(): string;
                /** Return application company name (Read Only). */
                public static get companyName(): string;
                /** A unique cloud project identifier. It is unique for every project (Read Only). */
                public static get cloudProjectId(): string;
                /** Specifies the frame rate at which Unity tries to render your game. */
                public static get targetFrameRate(): number;
                public static set targetFrameRate(value: number);
                /** Returns the path to the console log file, or an empty string if the current platform does not support log files. */
                public static get consoleLogPath(): string;
                /** Priority of background loading thread. */
                public static get backgroundLoadingPriority(): UnityEngine.ThreadPriority;
                public static set backgroundLoadingPriority(value: UnityEngine.ThreadPriority);
                /** Returns false if application is altered in any way after it was built. */
                public static get genuine(): boolean;
                /** Returns true if application integrity can be confirmed. */
                public static get genuineCheckAvailable(): boolean;
                /** Returns the platform the game is running on (Read Only). */
                public static get platform(): UnityEngine.RuntimePlatform;
                /** Is the current Runtime platform a known mobile platform. */
                public static get isMobilePlatform(): boolean;
                /** Is the current Runtime platform a known console platform. */
                public static get isConsolePlatform(): boolean;
                /** The language the user's operating system is running in. */
                public static get systemLanguage(): UnityEngine.SystemLanguage;
                /** Returns the type of Internet reachability currently possible on the device. */
                public static get internetReachability(): UnityEngine.NetworkReachability;
                /** Are we running inside the Unity editor? (Read Only) */
                public static get isEditor(): boolean;
                public static Quit ($exitCode: number) : void
                public static Quit () : void
                public static Unload () : void
                /** Can the streamed level be loaded? */
                public static CanStreamedLevelBeLoaded ($levelIndex: number) : boolean
                /** Can the streamed level be loaded? */
                public static CanStreamedLevelBeLoaded ($levelName: string) : boolean
                /** Returns true if the given object is part of the playing world either in any kind of built Player or in Play Mode.
                * @param obj The object to test.
                * @returns True if the object is part of the playing world. 
                */
                public static IsPlaying ($obj: UnityEngine.Object) : boolean
                public static GetBuildTags () : System.Array$1<string>
                /** Set an array of feature tags for this build. */
                public static SetBuildTags ($buildTags: System.Array$1<string>) : void
                public static HasProLicense () : boolean
                public static RequestAdvertisingIdentifierAsync ($delegateMethod: UnityEngine.Application.AdvertisingIdentifierCallback) : boolean
                /** Opens the URL specified, subject to the permissions and limitations of your app’s current platform and environment. This is handled in different ways depending on the nature of the URL, and with different security restrictions, depending on the runtime platform. * @param url The URL to open.
                */
                public static OpenURL ($url: string) : void
                /** Get stack trace logging options. The default value is StackTraceLogType.ScriptOnly. */
                public static GetStackTraceLogType ($logType: UnityEngine.LogType) : UnityEngine.StackTraceLogType
                /** Set stack trace logging options. The default value is StackTraceLogType.ScriptOnly. */
                public static SetStackTraceLogType ($logType: UnityEngine.LogType, $stackTraceType: UnityEngine.StackTraceLogType) : void
                /** Request authorization to use the webcam or microphone on iOS and WebGL. */
                public static RequestUserAuthorization ($mode: UnityEngine.UserAuthorization) : UnityEngine.AsyncOperation
                /** Check if the user has authorized use of the webcam or microphone in the Web Player. */
                public static HasUserAuthorization ($mode: UnityEngine.UserAuthorization) : boolean
                public static add_lowMemory ($value: UnityEngine.Application.LowMemoryCallback) : void
                public static remove_lowMemory ($value: UnityEngine.Application.LowMemoryCallback) : void
                public static add_logMessageReceived ($value: UnityEngine.Application.LogCallback) : void
                public static remove_logMessageReceived ($value: UnityEngine.Application.LogCallback) : void
                public static add_logMessageReceivedThreaded ($value: UnityEngine.Application.LogCallback) : void
                public static remove_logMessageReceivedThreaded ($value: UnityEngine.Application.LogCallback) : void
                public static add_onBeforeRender ($value: UnityEngine.Events.UnityAction) : void
                public static remove_onBeforeRender ($value: UnityEngine.Events.UnityAction) : void
                public static add_focusChanged ($value: System.Action$1<boolean>) : void
                public static remove_focusChanged ($value: System.Action$1<boolean>) : void
                public static add_deepLinkActivated ($value: System.Action$1<string>) : void
                public static remove_deepLinkActivated ($value: System.Action$1<string>) : void
                public static add_wantsToQuit ($value: System.Func$1<boolean>) : void
                public static remove_wantsToQuit ($value: System.Func$1<boolean>) : void
                public static add_quitting ($value: System.Action) : void
                public static remove_quitting ($value: System.Action) : void
                public static add_unloading ($value: System.Action) : void
                public static remove_unloading ($value: System.Action) : void
                public constructor ()
            }
            /** Application installation mode (Read Only). */
            enum ApplicationInstallMode
            { Unknown = 0, Store = 1, DeveloperBuild = 2, Adhoc = 3, Enterprise = 4, Editor = 5 }
            /** Application sandbox type. */
            enum ApplicationSandboxType
            { Unknown = 0, NotSandboxed = 1, Sandboxed = 2, SandboxBroken = 3 }
            /** Stack trace logging options. */
            enum StackTraceLogType
            { None = 0, ScriptOnly = 1, Full = 2 }
            /** Priority of a thread. */
            enum ThreadPriority
            { Low = 0, BelowNormal = 1, Normal = 2, High = 4 }
            /** Constants to pass to Application.RequestUserAuthorization. */
            enum UserAuthorization
            { WebCam = 1, Microphone = 2 }
            /** The platform application is running. Returned by Application.platform. */
            enum RuntimePlatform
            { OSXEditor = 0, OSXPlayer = 1, WindowsPlayer = 2, OSXWebPlayer = 3, OSXDashboardPlayer = 4, WindowsWebPlayer = 5, WindowsEditor = 7, IPhonePlayer = 8, XBOX360 = 10, PS3 = 9, Android = 11, NaCl = 12, FlashPlayer = 15, LinuxPlayer = 13, LinuxEditor = 16, WebGLPlayer = 17, MetroPlayerX86 = 18, WSAPlayerX86 = 18, MetroPlayerX64 = 19, WSAPlayerX64 = 19, MetroPlayerARM = 20, WSAPlayerARM = 20, WP8Player = 21, BB10Player = 22, BlackBerryPlayer = 22, TizenPlayer = 23, PSP2 = 24, PS4 = 25, PSM = 26, XboxOne = 27, SamsungTVPlayer = 28, WiiU = 30, tvOS = 31, Switch = 32, Lumin = 33, Stadia = 34, CloudRendering = 35, GameCoreScarlett = -1, GameCoreXboxSeries = 36, GameCoreXboxOne = 37, PS5 = 38, EmbeddedLinuxArm64 = 39, EmbeddedLinuxArm32 = 40, EmbeddedLinuxX64 = 41, EmbeddedLinuxX86 = 42, LinuxServer = 43, WindowsServer = 44, OSXServer = 45 }
            /** The language the user's operating system is running in. Returned by Application.systemLanguage. */
            enum SystemLanguage
            { Afrikaans = 0, Arabic = 1, Basque = 2, Belarusian = 3, Bulgarian = 4, Catalan = 5, Chinese = 6, Czech = 7, Danish = 8, Dutch = 9, English = 10, Estonian = 11, Faroese = 12, Finnish = 13, French = 14, German = 15, Greek = 16, Hebrew = 17, Hugarian = 18, Icelandic = 19, Indonesian = 20, Italian = 21, Japanese = 22, Korean = 23, Latvian = 24, Lithuanian = 25, Norwegian = 26, Polish = 27, Portuguese = 28, Romanian = 29, Russian = 30, SerboCroatian = 31, Slovak = 32, Slovenian = 33, Spanish = 34, Swedish = 35, Thai = 36, Turkish = 37, Ukrainian = 38, Vietnamese = 39, ChineseSimplified = 40, ChineseTraditional = 41, Unknown = 42, Hungarian = 18 }
            /** Describes network reachability options. */
            enum NetworkReachability
            { NotReachable = 0, ReachableViaCarrierDataNetwork = 1, ReachableViaLocalAreaNetwork = 2 }
            /** Interface to control the Mecanim animation system. */
            class Animator extends UnityEngine.Behaviour
            {
                protected [__keep_incompatibility]: never;
                /** Returns true if the current rig is optimizable with AnimatorUtility.OptimizeTransformHierarchy. */
                public get isOptimizable(): boolean;
                /** Returns true if the current rig is humanoid, false if it is generic. */
                public get isHuman(): boolean;
                /** Returns true if the current rig has root motion. */
                public get hasRootMotion(): boolean;
                /** Returns the scale of the current Avatar for a humanoid rig, (1 by default if the rig is generic). */
                public get humanScale(): number;
                /** Returns whether the animator is initialized successfully. */
                public get isInitialized(): boolean;
                /** Gets the avatar delta position for the last evaluated frame. */
                public get deltaPosition(): UnityEngine.Vector3;
                /** Gets the avatar delta rotation for the last evaluated frame. */
                public get deltaRotation(): UnityEngine.Quaternion;
                /** Gets the avatar velocity  for the last evaluated frame. */
                public get velocity(): UnityEngine.Vector3;
                /** Gets the avatar angular velocity for the last evaluated frame. */
                public get angularVelocity(): UnityEngine.Vector3;
                /** The root position, the position of the game object. */
                public get rootPosition(): UnityEngine.Vector3;
                public set rootPosition(value: UnityEngine.Vector3);
                /** The root rotation, the rotation of the game object. */
                public get rootRotation(): UnityEngine.Quaternion;
                public set rootRotation(value: UnityEngine.Quaternion);
                /** Should root motion be applied? */
                public get applyRootMotion(): boolean;
                public set applyRootMotion(value: boolean);
                /** Specifies the update mode of the Animator. */
                public get updateMode(): UnityEngine.AnimatorUpdateMode;
                public set updateMode(value: UnityEngine.AnimatorUpdateMode);
                /** Returns true if the object has a transform hierarchy. */
                public get hasTransformHierarchy(): boolean;
                /** The current gravity weight based on current animations that are played. */
                public get gravityWeight(): number;
                /** The position of the body center of mass. */
                public get bodyPosition(): UnityEngine.Vector3;
                public set bodyPosition(value: UnityEngine.Vector3);
                /** The rotation of the body center of mass. */
                public get bodyRotation(): UnityEngine.Quaternion;
                public set bodyRotation(value: UnityEngine.Quaternion);
                /** Automatic stabilization of feet during transition and blending. */
                public get stabilizeFeet(): boolean;
                public set stabilizeFeet(value: boolean);
                /** Returns the number of layers in the controller. */
                public get layerCount(): number;
                /** The AnimatorControllerParameter list used by the animator. (Read Only) */
                public get parameters(): System.Array$1<UnityEngine.AnimatorControllerParameter>;
                /** Returns the number of parameters in the controller. */
                public get parameterCount(): number;
                /** Blends pivot point between body center of mass and feet pivot. */
                public get feetPivotActive(): number;
                public set feetPivotActive(value: number);
                /** Gets the pivot weight. */
                public get pivotWeight(): number;
                /** Get the current position of the pivot. */
                public get pivotPosition(): UnityEngine.Vector3;
                /** If automatic matching is active. */
                public get isMatchingTarget(): boolean;
                /** The playback speed of the Animator. 1 is normal playback speed. */
                public get speed(): number;
                public set speed(value: number);
                /** Returns the position of the target specified by SetTarget. */
                public get targetPosition(): UnityEngine.Vector3;
                /** Returns the rotation of the target specified by SetTarget. */
                public get targetRotation(): UnityEngine.Quaternion;
                /** Controls culling of this Animator component. */
                public get cullingMode(): UnityEngine.AnimatorCullingMode;
                public set cullingMode(value: UnityEngine.AnimatorCullingMode);
                /** Sets the playback position in the recording buffer. */
                public get playbackTime(): number;
                public set playbackTime(value: number);
                /** Start time of the first frame of the buffer relative to the frame at which StartRecording was called. */
                public get recorderStartTime(): number;
                public set recorderStartTime(value: number);
                /** End time of the recorded clip relative to when StartRecording was called. */
                public get recorderStopTime(): number;
                public set recorderStopTime(value: number);
                /** Gets the mode of the Animator recorder. */
                public get recorderMode(): UnityEngine.AnimatorRecorderMode;
                /** The runtime representation of AnimatorController that controls the Animator. */
                public get runtimeAnimatorController(): UnityEngine.RuntimeAnimatorController;
                public set runtimeAnimatorController(value: UnityEngine.RuntimeAnimatorController);
                /** Returns true if Animator has any playables assigned to it. */
                public get hasBoundPlayables(): boolean;
                /** Gets/Sets the current Avatar. */
                public get avatar(): UnityEngine.Avatar;
                public set avatar(value: UnityEngine.Avatar);
                /** The PlayableGraph created by the Animator. */
                public get playableGraph(): UnityEngine.Playables.PlayableGraph;
                /** Additional layers affects the center of mass. */
                public get layersAffectMassCenter(): boolean;
                public set layersAffectMassCenter(value: boolean);
                /** Get left foot bottom height. */
                public get leftFeetBottomHeight(): number;
                /** Get right foot bottom height. */
                public get rightFeetBottomHeight(): number;
                public get logWarnings(): boolean;
                public set logWarnings(value: boolean);
                /** Sets whether the Animator sends events of type AnimationEvent. */
                public get fireEvents(): boolean;
                public set fireEvents(value: boolean);
                /** Controls the behaviour of the Animator component when a GameObject is disabled. */
                public get keepAnimatorControllerStateOnDisable(): boolean;
                public set keepAnimatorControllerStateOnDisable(value: boolean);
                /** Returns the value of the given float parameter.
                * @param name The parameter name.
                * @param id The parameter ID.
                * @returns The value of the parameter. 
                */
                public GetFloat ($name: string) : number
                /** Returns the value of the given float parameter.
                * @param name The parameter name.
                * @param id The parameter ID.
                * @returns The value of the parameter. 
                */
                public GetFloat ($id: number) : number
                /** Send float values to the Animator to affect transitions. * @param name The parameter name.
                * @param id The parameter ID.
                * @param value The new parameter value.
                * @param dampTime The damper total time.
                * @param deltaTime The delta time to give to the damper.
                */
                public SetFloat ($name: string, $value: number) : void
                /** Send float values to the Animator to affect transitions. * @param name The parameter name.
                * @param id The parameter ID.
                * @param value The new parameter value.
                * @param dampTime The damper total time.
                * @param deltaTime The delta time to give to the damper.
                */
                public SetFloat ($name: string, $value: number, $dampTime: number, $deltaTime: number) : void
                /** Send float values to the Animator to affect transitions. * @param name The parameter name.
                * @param id The parameter ID.
                * @param value The new parameter value.
                * @param dampTime The damper total time.
                * @param deltaTime The delta time to give to the damper.
                */
                public SetFloat ($id: number, $value: number) : void
                /** Send float values to the Animator to affect transitions. * @param name The parameter name.
                * @param id The parameter ID.
                * @param value The new parameter value.
                * @param dampTime The damper total time.
                * @param deltaTime The delta time to give to the damper.
                */
                public SetFloat ($id: number, $value: number, $dampTime: number, $deltaTime: number) : void
                /** Returns the value of the given boolean parameter.
                * @param name The parameter name.
                * @param id The parameter ID.
                * @returns The value of the parameter. 
                */
                public GetBool ($name: string) : boolean
                /** Returns the value of the given boolean parameter.
                * @param name The parameter name.
                * @param id The parameter ID.
                * @returns The value of the parameter. 
                */
                public GetBool ($id: number) : boolean
                /** Sets the value of the given boolean parameter. * @param name The parameter name.
                * @param id The parameter ID.
                * @param value The new parameter value.
                */
                public SetBool ($name: string, $value: boolean) : void
                /** Sets the value of the given boolean parameter. * @param name The parameter name.
                * @param id The parameter ID.
                * @param value The new parameter value.
                */
                public SetBool ($id: number, $value: boolean) : void
                /** Returns the value of the given integer parameter.
                * @param name The parameter name.
                * @param id The parameter ID.
                * @returns The value of the parameter. 
                */
                public GetInteger ($name: string) : number
                /** Returns the value of the given integer parameter.
                * @param name The parameter name.
                * @param id The parameter ID.
                * @returns The value of the parameter. 
                */
                public GetInteger ($id: number) : number
                /** Sets the value of the given integer parameter. * @param name The parameter name.
                * @param id The parameter ID.
                * @param value The new parameter value.
                */
                public SetInteger ($name: string, $value: number) : void
                /** Sets the value of the given integer parameter. * @param name The parameter name.
                * @param id The parameter ID.
                * @param value The new parameter value.
                */
                public SetInteger ($id: number, $value: number) : void
                /** Sets the value of the given trigger parameter. * @param name The parameter name.
                * @param id The parameter ID.
                */
                public SetTrigger ($name: string) : void
                /** Sets the value of the given trigger parameter. * @param name The parameter name.
                * @param id The parameter ID.
                */
                public SetTrigger ($id: number) : void
                /** Resets the value of the given trigger parameter. * @param name The parameter name.
                * @param id The parameter ID.
                */
                public ResetTrigger ($name: string) : void
                /** Resets the value of the given trigger parameter. * @param name The parameter name.
                * @param id The parameter ID.
                */
                public ResetTrigger ($id: number) : void
                /** Returns true if the parameter is controlled by a curve, false otherwise.
                * @param name The parameter name.
                * @param id The parameter ID.
                * @returns True if the parameter is controlled by a curve, false otherwise. 
                */
                public IsParameterControlledByCurve ($name: string) : boolean
                /** Returns true if the parameter is controlled by a curve, false otherwise.
                * @param name The parameter name.
                * @param id The parameter ID.
                * @returns True if the parameter is controlled by a curve, false otherwise. 
                */
                public IsParameterControlledByCurve ($id: number) : boolean
                /** Gets the position of an IK goal.
                * @param goal The AvatarIKGoal that is queried.
                * @returns Return the current position of this IK goal in world space. 
                */
                public GetIKPosition ($goal: UnityEngine.AvatarIKGoal) : UnityEngine.Vector3
                /** Sets the position of an IK goal. * @param goal The AvatarIKGoal that is set.
                * @param goalPosition The position in world space.
                */
                public SetIKPosition ($goal: UnityEngine.AvatarIKGoal, $goalPosition: UnityEngine.Vector3) : void
                /** Gets the rotation of an IK goal. * @param goal The AvatarIKGoal that is is queried.
                */
                public GetIKRotation ($goal: UnityEngine.AvatarIKGoal) : UnityEngine.Quaternion
                /** Sets the rotation of an IK goal. * @param goal The AvatarIKGoal that is set.
                * @param goalRotation The rotation in world space.
                */
                public SetIKRotation ($goal: UnityEngine.AvatarIKGoal, $goalRotation: UnityEngine.Quaternion) : void
                /** Gets the translative weight of an IK goal (0 = at the original animation before IK, 1 = at the goal). * @param goal The AvatarIKGoal that is queried.
                */
                public GetIKPositionWeight ($goal: UnityEngine.AvatarIKGoal) : number
                /** Sets the translative weight of an IK goal (0 = at the original animation before IK, 1 = at the goal). * @param goal The AvatarIKGoal that is set.
                * @param value The translative weight.
                */
                public SetIKPositionWeight ($goal: UnityEngine.AvatarIKGoal, $value: number) : void
                /** Gets the rotational weight of an IK goal (0 = rotation before IK, 1 = rotation at the IK goal). * @param goal The AvatarIKGoal that is queried.
                */
                public GetIKRotationWeight ($goal: UnityEngine.AvatarIKGoal) : number
                /** Sets the rotational weight of an IK goal (0 = rotation before IK, 1 = rotation at the IK goal). * @param goal The AvatarIKGoal that is set.
                * @param value The rotational weight.
                */
                public SetIKRotationWeight ($goal: UnityEngine.AvatarIKGoal, $value: number) : void
                /** Gets the position of an IK hint.
                * @param hint The AvatarIKHint that is queried.
                * @returns Return the current position of this IK hint in world space. 
                */
                public GetIKHintPosition ($hint: UnityEngine.AvatarIKHint) : UnityEngine.Vector3
                /** Sets the position of an IK hint. * @param hint The AvatarIKHint that is set.
                * @param hintPosition The position in world space.
                */
                public SetIKHintPosition ($hint: UnityEngine.AvatarIKHint, $hintPosition: UnityEngine.Vector3) : void
                /** Gets the translative weight of an IK Hint (0 = at the original animation before IK, 1 = at the hint).
                * @param hint The AvatarIKHint that is queried.
                * @returns Return translative weight. 
                */
                public GetIKHintPositionWeight ($hint: UnityEngine.AvatarIKHint) : number
                /** Sets the translative weight of an IK hint (0 = at the original animation before IK, 1 = at the hint). * @param hint The AvatarIKHint that is set.
                * @param value The translative weight.
                */
                public SetIKHintPositionWeight ($hint: UnityEngine.AvatarIKHint, $value: number) : void
                /** Sets the look at position. * @param lookAtPosition The position to lookAt.
                */
                public SetLookAtPosition ($lookAtPosition: UnityEngine.Vector3) : void
                /** Set look at weights. * @param weight (0-1) the global weight of the LookAt, multiplier for other parameters.
                * @param bodyWeight (0-1) determines how much the body is involved in the LookAt.
                * @param headWeight (0-1) determines how much the head is involved in the LookAt.
                * @param eyesWeight (0-1) determines how much the eyes are involved in the LookAt.
                * @param clampWeight (0-1) 0.0 means the character is completely unrestrained in motion, 1.0 means he's completely clamped (look at becomes impossible), and 0.5 means he'll be able to move on half of the possible range (180 degrees).
                */
                public SetLookAtWeight ($weight: number) : void
                /** Set look at weights. * @param weight (0-1) the global weight of the LookAt, multiplier for other parameters.
                * @param bodyWeight (0-1) determines how much the body is involved in the LookAt.
                * @param headWeight (0-1) determines how much the head is involved in the LookAt.
                * @param eyesWeight (0-1) determines how much the eyes are involved in the LookAt.
                * @param clampWeight (0-1) 0.0 means the character is completely unrestrained in motion, 1.0 means he's completely clamped (look at becomes impossible), and 0.5 means he'll be able to move on half of the possible range (180 degrees).
                */
                public SetLookAtWeight ($weight: number, $bodyWeight: number) : void
                /** Set look at weights. * @param weight (0-1) the global weight of the LookAt, multiplier for other parameters.
                * @param bodyWeight (0-1) determines how much the body is involved in the LookAt.
                * @param headWeight (0-1) determines how much the head is involved in the LookAt.
                * @param eyesWeight (0-1) determines how much the eyes are involved in the LookAt.
                * @param clampWeight (0-1) 0.0 means the character is completely unrestrained in motion, 1.0 means he's completely clamped (look at becomes impossible), and 0.5 means he'll be able to move on half of the possible range (180 degrees).
                */
                public SetLookAtWeight ($weight: number, $bodyWeight: number, $headWeight: number) : void
                /** Set look at weights. * @param weight (0-1) the global weight of the LookAt, multiplier for other parameters.
                * @param bodyWeight (0-1) determines how much the body is involved in the LookAt.
                * @param headWeight (0-1) determines how much the head is involved in the LookAt.
                * @param eyesWeight (0-1) determines how much the eyes are involved in the LookAt.
                * @param clampWeight (0-1) 0.0 means the character is completely unrestrained in motion, 1.0 means he's completely clamped (look at becomes impossible), and 0.5 means he'll be able to move on half of the possible range (180 degrees).
                */
                public SetLookAtWeight ($weight: number, $bodyWeight: number, $headWeight: number, $eyesWeight: number) : void
                /** Set look at weights. * @param weight (0-1) the global weight of the LookAt, multiplier for other parameters.
                * @param bodyWeight (0-1) determines how much the body is involved in the LookAt.
                * @param headWeight (0-1) determines how much the head is involved in the LookAt.
                * @param eyesWeight (0-1) determines how much the eyes are involved in the LookAt.
                * @param clampWeight (0-1) 0.0 means the character is completely unrestrained in motion, 1.0 means he's completely clamped (look at becomes impossible), and 0.5 means he'll be able to move on half of the possible range (180 degrees).
                */
                public SetLookAtWeight ($weight: number, $bodyWeight: number, $headWeight: number, $eyesWeight: number, $clampWeight: number) : void
                /** Sets local rotation of a human bone during a IK pass. * @param humanBoneId The human bone Id.
                * @param rotation The local rotation.
                */
                public SetBoneLocalRotation ($humanBoneId: UnityEngine.HumanBodyBones, $rotation: UnityEngine.Quaternion) : void
                public GetBehaviours ($fullPathHash: number, $layerIndex: number) : System.Array$1<UnityEngine.StateMachineBehaviour>
                /** Returns the layer name.
                * @param layerIndex The layer index.
                * @returns The layer name. 
                */
                public GetLayerName ($layerIndex: number) : string
                /** Returns the index of the layer with the given name.
                * @param layerName The layer name.
                * @returns The layer index. 
                */
                public GetLayerIndex ($layerName: string) : number
                /** Returns the weight of the layer at the specified index.
                * @param layerIndex The layer index.
                * @returns The layer weight. 
                */
                public GetLayerWeight ($layerIndex: number) : number
                /** Sets the weight of the layer at the given index. * @param layerIndex The layer index.
                * @param weight The new layer weight.
                */
                public SetLayerWeight ($layerIndex: number, $weight: number) : void
                /** Returns an AnimatorStateInfo with the information on the current state.
                * @param layerIndex The layer index.
                * @returns An AnimatorStateInfo with the information on the current state. 
                */
                public GetCurrentAnimatorStateInfo ($layerIndex: number) : UnityEngine.AnimatorStateInfo
                /** Returns an AnimatorStateInfo with the information on the next state.
                * @param layerIndex The layer index.
                * @returns An AnimatorStateInfo with the information on the next state. 
                */
                public GetNextAnimatorStateInfo ($layerIndex: number) : UnityEngine.AnimatorStateInfo
                /** Returns an AnimatorTransitionInfo with the informations on the current transition.
                * @param layerIndex The layer's index.
                * @returns An AnimatorTransitionInfo with the informations on the current transition. 
                */
                public GetAnimatorTransitionInfo ($layerIndex: number) : UnityEngine.AnimatorTransitionInfo
                /** Returns the number of AnimatorClipInfo in the current state.
                * @param layerIndex The layer index.
                * @returns The number of AnimatorClipInfo in the current state. 
                */
                public GetCurrentAnimatorClipInfoCount ($layerIndex: number) : number
                /** Returns the number of AnimatorClipInfo in the next state.
                * @param layerIndex The layer index.
                * @returns The number of AnimatorClipInfo in the next state. 
                */
                public GetNextAnimatorClipInfoCount ($layerIndex: number) : number
                /** Returns an array of all the AnimatorClipInfo in the current state of the given layer.
                * @param layerIndex The layer index.
                * @returns An array of all the AnimatorClipInfo in the current state. 
                */
                public GetCurrentAnimatorClipInfo ($layerIndex: number) : System.Array$1<UnityEngine.AnimatorClipInfo>
                /** Returns an array of all the AnimatorClipInfo in the next state of the given layer.
                * @param layerIndex The layer index.
                * @returns An array of all the AnimatorClipInfo in the next state. 
                */
                public GetNextAnimatorClipInfo ($layerIndex: number) : System.Array$1<UnityEngine.AnimatorClipInfo>
                public GetCurrentAnimatorClipInfo ($layerIndex: number, $clips: System.Collections.Generic.List$1<UnityEngine.AnimatorClipInfo>) : void
                public GetNextAnimatorClipInfo ($layerIndex: number, $clips: System.Collections.Generic.List$1<UnityEngine.AnimatorClipInfo>) : void
                /** Returns true if there is a transition on the given layer, false otherwise.
                * @param layerIndex The layer index.
                * @returns True if there is a transition on the given layer, false otherwise. 
                */
                public IsInTransition ($layerIndex: number) : boolean
                /** See AnimatorController.parameters. */
                public GetParameter ($index: number) : UnityEngine.AnimatorControllerParameter
                public MatchTarget ($matchPosition: UnityEngine.Vector3, $matchRotation: UnityEngine.Quaternion, $targetBodyPart: UnityEngine.AvatarTarget, $weightMask: UnityEngine.MatchTargetWeightMask, $startNormalizedTime: number) : void
                /** Automatically adjust the GameObject position and rotation. * @param matchPosition The position we want the body part to reach.
                * @param matchRotation The rotation in which we want the body part to be.
                * @param targetBodyPart The body part that is involved in the match.
                * @param weightMask Structure that contains weights for matching position and rotation.
                * @param startNormalizedTime Start time within the animation clip (0 - beginning of clip, 1 - end of clip).
                * @param targetNormalizedTime End time within the animation clip (0 - beginning of clip, 1 - end of clip), values greater than 1 can be set to trigger a match after a certain number of loops. Ex: 2.3 means at 30% of 2nd loop.
                * @param completeMatch Allows you to specify what should happen if the MatchTarget function is interrupted. A value of true causes the GameObject to immediately move to the matchPosition if interrupted. A value of false causes the GameObject to stay at its current position if interrupted.
                */
                public MatchTarget ($matchPosition: UnityEngine.Vector3, $matchRotation: UnityEngine.Quaternion, $targetBodyPart: UnityEngine.AvatarTarget, $weightMask: UnityEngine.MatchTargetWeightMask, $startNormalizedTime: number, $targetNormalizedTime: number) : void
                public MatchTarget ($matchPosition: UnityEngine.Vector3, $matchRotation: UnityEngine.Quaternion, $targetBodyPart: UnityEngine.AvatarTarget, $weightMask: UnityEngine.MatchTargetWeightMask, $startNormalizedTime: number, $targetNormalizedTime: number, $completeMatch: boolean) : void
                public InterruptMatchTarget () : void
                /** Interrupts the automatic target matching. */
                public InterruptMatchTarget ($completeMatch: boolean) : void
                public CrossFadeInFixedTime ($stateName: string, $fixedTransitionDuration: number) : void
                public CrossFadeInFixedTime ($stateName: string, $fixedTransitionDuration: number, $layer: number) : void
                public CrossFadeInFixedTime ($stateName: string, $fixedTransitionDuration: number, $layer: number, $fixedTimeOffset: number) : void
                /** Creates a crossfade from the current state to any other state using times in seconds. * @param stateName The name of the state.
                * @param stateHashName The hash name of the state.
                * @param fixedTransitionDuration The duration of the transition (in seconds).
                * @param layer The layer where the crossfade occurs.
                * @param fixedTimeOffset The time of the state (in seconds).
                * @param normalizedTransitionTime The time of the transition (normalized).
                */
                public CrossFadeInFixedTime ($stateName: string, $fixedTransitionDuration: number, $layer: number, $fixedTimeOffset: number, $normalizedTransitionTime: number) : void
                public CrossFadeInFixedTime ($stateHashName: number, $fixedTransitionDuration: number, $layer: number, $fixedTimeOffset: number) : void
                public CrossFadeInFixedTime ($stateHashName: number, $fixedTransitionDuration: number, $layer: number) : void
                public CrossFadeInFixedTime ($stateHashName: number, $fixedTransitionDuration: number) : void
                /** Creates a crossfade from the current state to any other state using times in seconds. * @param stateName The name of the state.
                * @param stateHashName The hash name of the state.
                * @param fixedTransitionDuration The duration of the transition (in seconds).
                * @param layer The layer where the crossfade occurs.
                * @param fixedTimeOffset The time of the state (in seconds).
                * @param normalizedTransitionTime The time of the transition (normalized).
                */
                public CrossFadeInFixedTime ($stateHashName: number, $fixedTransitionDuration: number, $layer: number, $fixedTimeOffset: number, $normalizedTransitionTime: number) : void
                public WriteDefaultValues () : void
                public CrossFade ($stateName: string, $normalizedTransitionDuration: number, $layer: number, $normalizedTimeOffset: number) : void
                public CrossFade ($stateName: string, $normalizedTransitionDuration: number, $layer: number) : void
                public CrossFade ($stateName: string, $normalizedTransitionDuration: number) : void
                /** Creates a crossfade from the current state to any other state using normalized times. * @param stateName The name of the state.
                * @param stateHashName The hash name of the state.
                * @param normalizedTransitionDuration The duration of the transition (normalized).
                * @param layer The layer where the crossfade occurs.
                * @param normalizedTimeOffset The time of the state (normalized).
                * @param normalizedTransitionTime The time of the transition (normalized).
                */
                public CrossFade ($stateName: string, $normalizedTransitionDuration: number, $layer: number, $normalizedTimeOffset: number, $normalizedTransitionTime: number) : void
                /** Creates a crossfade from the current state to any other state using normalized times. * @param stateName The name of the state.
                * @param stateHashName The hash name of the state.
                * @param normalizedTransitionDuration The duration of the transition (normalized).
                * @param layer The layer where the crossfade occurs.
                * @param normalizedTimeOffset The time of the state (normalized).
                * @param normalizedTransitionTime The time of the transition (normalized).
                */
                public CrossFade ($stateHashName: number, $normalizedTransitionDuration: number, $layer: number, $normalizedTimeOffset: number, $normalizedTransitionTime: number) : void
                public CrossFade ($stateHashName: number, $normalizedTransitionDuration: number, $layer: number, $normalizedTimeOffset: number) : void
                public CrossFade ($stateHashName: number, $normalizedTransitionDuration: number, $layer: number) : void
                public CrossFade ($stateHashName: number, $normalizedTransitionDuration: number) : void
                public PlayInFixedTime ($stateName: string, $layer: number) : void
                public PlayInFixedTime ($stateName: string) : void
                /** Plays a state. * @param stateName The state name.
                * @param stateNameHash The state hash name. If stateNameHash is 0, it changes the current state time.
                * @param layer The layer index. If layer is -1, it plays the first state with the given state name or hash.
                * @param fixedTime The time offset (in seconds).
                */
                public PlayInFixedTime ($stateName: string, $layer: number, $fixedTime: number) : void
                /** Plays a state. * @param stateName The state name.
                * @param stateNameHash The state hash name. If stateNameHash is 0, it changes the current state time.
                * @param layer The layer index. If layer is -1, it plays the first state with the given state name or hash.
                * @param fixedTime The time offset (in seconds).
                */
                public PlayInFixedTime ($stateNameHash: number, $layer: number, $fixedTime: number) : void
                public PlayInFixedTime ($stateNameHash: number, $layer: number) : void
                public PlayInFixedTime ($stateNameHash: number) : void
                public Play ($stateName: string, $layer: number) : void
                public Play ($stateName: string) : void
                /** Plays a state. * @param stateName The state name.
                * @param stateNameHash The state hash name. If stateNameHash is 0, it changes the current state time.
                * @param layer The layer index. If layer is -1, it plays the first state with the given state name or hash.
                * @param normalizedTime The time offset between zero and one.
                */
                public Play ($stateName: string, $layer: number, $normalizedTime: number) : void
                /** Plays a state. * @param stateName The state name.
                * @param stateNameHash The state hash name. If stateNameHash is 0, it changes the current state time.
                * @param layer The layer index. If layer is -1, it plays the first state with the given state name or hash.
                * @param normalizedTime The time offset between zero and one.
                */
                public Play ($stateNameHash: number, $layer: number, $normalizedTime: number) : void
                public Play ($stateNameHash: number, $layer: number) : void
                public Play ($stateNameHash: number) : void
                /** Sets an AvatarTarget and a targetNormalizedTime for the current state. * @param targetIndex The avatar body part that is queried.
                * @param targetNormalizedTime The current state Time that is queried.
                */
                public SetTarget ($targetIndex: UnityEngine.AvatarTarget, $targetNormalizedTime: number) : void
                /** Returns Transform mapped to this human bone id. Returns null if the animator is disabled, if it does not have a human description, or if the bone id is invalid. * @param humanBoneId The human bone that is queried, see enum HumanBodyBones for a list of possible values.
                */
                public GetBoneTransform ($humanBoneId: UnityEngine.HumanBodyBones) : UnityEngine.Transform
                public StartPlayback () : void
                public StopPlayback () : void
                /** Sets the animator in recording mode, and allocates a circular buffer of size frameCount. * @param frameCount The number of frames (updates) that will be recorded. If frameCount is 0, the recording will continue until the user calls StopRecording. The maximum value for frameCount is 10000.
                */
                public StartRecording ($frameCount: number) : void
                public StopRecording () : void
                /** Returns true if the state exists in this layer, false otherwise.
                * @param layerIndex The layer index.
                * @param stateID The state ID.
                * @returns True if the state exists in this layer, false otherwise. 
                */
                public HasState ($layerIndex: number, $stateID: number) : boolean
                /** Generates an parameter id from a string. * @param name The string to convert to Id.
                */
                public static StringToHash ($name: string) : number
                /** Evaluates the animator based on deltaTime. * @param deltaTime The time delta.
                */
                public Update ($deltaTime: number) : void
                public Rebind () : void
                public ApplyBuiltinRootMotion () : void
                public constructor ()
            }
            /** Interface for on-screen keyboards. Only native iPhone, Android, and Windows Store Apps are supported. */
            class TouchScreenKeyboard extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** Enumeration of the different types of supported touchscreen keyboards. */
            enum TouchScreenKeyboardType
            { Default = 0, ASCIICapable = 1, NumbersAndPunctuation = 2, URL = 3, NumberPad = 4, PhonePad = 5, NamePhonePad = 6, EmailAddress = 7, NintendoNetworkAccount = 8, Social = 9, Search = 10, DecimalPad = 11, OneTimeCode = 12 }
            /** Class that can be used to generate text for rendering. */
            class TextGenerator extends System.Object implements System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
            /** Script interface for. */
            class Font extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** Where the anchor of the text is placed. */
            enum TextAnchor
            { UpperLeft = 0, UpperCenter = 1, UpperRight = 2, MiddleLeft = 3, MiddleCenter = 4, MiddleRight = 5, LowerLeft = 6, LowerCenter = 7, LowerRight = 8 }
            /** Wrapping modes for text that reaches the horizontal boundary. */
            enum HorizontalWrapMode
            { Wrap = 0, Overflow = 1 }
            /** Wrapping modes for text that reaches the vertical boundary. */
            enum VerticalWrapMode
            { Truncate = 0, Overflow = 1 }
            /** Font Style applied to GUI Texts, Text Meshes or GUIStyles. */
            enum FontStyle
            { Normal = 0, Bold = 1, Italic = 2, BoldAndItalic = 3 }
            /** A struct that stores the settings for TextGeneration. */
            class TextGenerationSettings extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            /** Renders a Sprite for 2D graphics. */
            class SpriteRenderer extends UnityEngine.Renderer
            {
                protected [__keep_incompatibility]: never;
                /** The Sprite to render. */
                public get sprite(): UnityEngine.Sprite;
                public set sprite(value: UnityEngine.Sprite);
                /** The current draw mode of the Sprite Renderer. */
                public get drawMode(): UnityEngine.SpriteDrawMode;
                public set drawMode(value: UnityEngine.SpriteDrawMode);
                /** Property to set/get the size to render when the SpriteRenderer.drawMode is set to SpriteDrawMode.Sliced. */
                public get size(): UnityEngine.Vector2;
                public set size(value: UnityEngine.Vector2);
                /** The current threshold for Sprite Renderer tiling. */
                public get adaptiveModeThreshold(): number;
                public set adaptiveModeThreshold(value: number);
                /** The current tile mode of the Sprite Renderer. */
                public get tileMode(): UnityEngine.SpriteTileMode;
                public set tileMode(value: UnityEngine.SpriteTileMode);
                /** Rendering color for the Sprite graphic. */
                public get color(): UnityEngine.Color;
                public set color(value: UnityEngine.Color);
                /** Specifies how the sprite interacts with the masks. */
                public get maskInteraction(): UnityEngine.SpriteMaskInteraction;
                public set maskInteraction(value: UnityEngine.SpriteMaskInteraction);
                /** Flips the sprite on the X axis. */
                public get flipX(): boolean;
                public set flipX(value: boolean);
                /** Flips the sprite on the Y axis. */
                public get flipY(): boolean;
                public set flipY(value: boolean);
                /** Determines the position of the Sprite used for sorting the SpriteRenderer. */
                public get spriteSortPoint(): UnityEngine.SpriteSortPoint;
                public set spriteSortPoint(value: UnityEngine.SpriteSortPoint);
                public RegisterSpriteChangeCallback ($callback: UnityEngine.Events.UnityAction$1<UnityEngine.SpriteRenderer>) : void
                public UnregisterSpriteChangeCallback ($callback: UnityEngine.Events.UnityAction$1<UnityEngine.SpriteRenderer>) : void
                public constructor ()
            }
            /** SpriteRenderer draw mode. */
            enum SpriteDrawMode
            { Simple = 0, Sliced = 1, Tiled = 2 }
            /** Tiling mode for SpriteRenderer.tileMode. */
            enum SpriteTileMode
            { Continuous = 0, Adaptive = 1 }
            /** This enum controls the mode under which the sprite will interact with the masking system. */
            enum SpriteMaskInteraction
            { None = 0, VisibleInsideMask = 1, VisibleOutsideMask = 2 }
            /** Determines the position of the Sprite used for sorting the Renderer. */
            enum SpriteSortPoint
            { Center = 0, Pivot = 1 }
            /** `PlayerPrefs` is a class that stores Player preferences between game sessions. It can store string, float and integer values into the user’s platform registry. */
            class PlayerPrefs extends System.Object
            {
                protected [__keep_incompatibility]: never;
                /** Sets a single integer value for the preference identified by the given key. You can use PlayerPrefs.GetInt to retrieve this value. */
                public static SetInt ($key: string, $value: number) : void
                /** Returns the value corresponding to key in the preference file if it exists. */
                public static GetInt ($key: string, $defaultValue: number) : number
                /** Returns the value corresponding to key in the preference file if it exists. */
                public static GetInt ($key: string) : number
                /** Sets the float value of the preference identified by the given key. You can use PlayerPrefs.GetFloat to retrieve this value. */
                public static SetFloat ($key: string, $value: number) : void
                /** Returns the value corresponding to key in the preference file if it exists. */
                public static GetFloat ($key: string, $defaultValue: number) : number
                /** Returns the value corresponding to key in the preference file if it exists. */
                public static GetFloat ($key: string) : number
                /** Sets a single string value for the preference identified by the given key. You can use PlayerPrefs.GetString to retrieve this value. */
                public static SetString ($key: string, $value: string) : void
                /** Returns the value corresponding to key in the preference file if it exists. */
                public static GetString ($key: string, $defaultValue: string) : string
                /** Returns the value corresponding to key in the preference file if it exists. */
                public static GetString ($key: string) : string
                /** Returns true if the given key exists in PlayerPrefs, otherwise returns false. */
                public static HasKey ($key: string) : boolean
                /** Removes the given key from the PlayerPrefs. If the key does not exist, DeleteKey has no impact. */
                public static DeleteKey ($key: string) : void
                public static DeleteAll () : void
                public static Save () : void
                public constructor ()
            }
            /** Type of the imported(native) data. */
            enum AudioType
            { UNKNOWN = 0, ACC = 1, AIFF = 2, IT = 10, MOD = 12, MPEG = 13, OGGVORBIS = 14, S3M = 17, WAV = 20, XM = 21, XMA = 22, VAG = 23, AUDIOQUEUE = 24 }
            /** Data structure for downloading AssetBundles to a customized cache path. See Also:UnityWebRequestAssetBundle.GetAssetBundle for more information. */
            class CachedAssetBundle extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            /** Helper class to generate form data to post to web servers using the UnityWebRequest or WWW classes. */
            class WWWForm extends System.Object
            {
                protected [__keep_incompatibility]: never;
                /** (Read Only) Returns the correct request headers for posting the form using the WWW class. */
                public get headers(): System.Collections.Generic.Dictionary$2<string, string>;
                /** (Read Only) The raw data to pass as the POST request body when sending the form. */
                public get data(): System.Array$1<number>;
                /** Add a simple field to the form. */
                public AddField ($fieldName: string, $value: string) : void
                /** Add a simple field to the form. */
                public AddField ($fieldName: string, $value: string, $e: System.Text.Encoding) : void
                /** Adds a simple field to the form. */
                public AddField ($fieldName: string, $i: number) : void
                /** Add binary data to the form. */
                public AddBinaryData ($fieldName: string, $contents: System.Array$1<number>) : void
                /** Add binary data to the form. */
                public AddBinaryData ($fieldName: string, $contents: System.Array$1<number>, $fileName: string) : void
                /** Add binary data to the form. */
                public AddBinaryData ($fieldName: string, $contents: System.Array$1<number>, $fileName: string, $mimeType: string) : void
                public constructor ()
            }
            /** Information about what animation clips is played and its weight. */
            class AnimationInfo extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            /** The update mode of the Animator. */
            enum AnimatorUpdateMode
            { Normal = 0, AnimatePhysics = 1, UnscaledTime = 2 }
            /** IK Goal. */
            enum AvatarIKGoal
            { LeftFoot = 0, RightFoot = 1, LeftHand = 2, RightHand = 3 }
            /** IK Hint. */
            enum AvatarIKHint
            { LeftKnee = 0, RightKnee = 1, LeftElbow = 2, RightElbow = 3 }
            /** Human Body Bones. */
            enum HumanBodyBones
            { Hips = 0, LeftUpperLeg = 1, RightUpperLeg = 2, LeftLowerLeg = 3, RightLowerLeg = 4, LeftFoot = 5, RightFoot = 6, Spine = 7, Chest = 8, UpperChest = 54, Neck = 9, Head = 10, LeftShoulder = 11, RightShoulder = 12, LeftUpperArm = 13, RightUpperArm = 14, LeftLowerArm = 15, RightLowerArm = 16, LeftHand = 17, RightHand = 18, LeftToes = 19, RightToes = 20, LeftEye = 21, RightEye = 22, Jaw = 23, LeftThumbProximal = 24, LeftThumbIntermediate = 25, LeftThumbDistal = 26, LeftIndexProximal = 27, LeftIndexIntermediate = 28, LeftIndexDistal = 29, LeftMiddleProximal = 30, LeftMiddleIntermediate = 31, LeftMiddleDistal = 32, LeftRingProximal = 33, LeftRingIntermediate = 34, LeftRingDistal = 35, LeftLittleProximal = 36, LeftLittleIntermediate = 37, LeftLittleDistal = 38, RightThumbProximal = 39, RightThumbIntermediate = 40, RightThumbDistal = 41, RightIndexProximal = 42, RightIndexIntermediate = 43, RightIndexDistal = 44, RightMiddleProximal = 45, RightMiddleIntermediate = 46, RightMiddleDistal = 47, RightRingProximal = 48, RightRingIntermediate = 49, RightRingDistal = 50, RightLittleProximal = 51, RightLittleIntermediate = 52, RightLittleDistal = 53, LastBone = 55 }
            /** StateMachineBehaviour is a component that can be added to a state machine state. It's the base class every script on a state derives from. */
            class StateMachineBehaviour extends UnityEngine.ScriptableObject
            {
                protected [__keep_incompatibility]: never;
            }
            /** Information about the current or next state. */
            class AnimatorStateInfo extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
                /** The full path hash for this state. */
                public get fullPathHash(): number;
                /** The hash is generated using Animator.StringToHash. The hash does not include the name of the parent layer. */
                public get shortNameHash(): number;
                /** Normalized time of the State. */
                public get normalizedTime(): number;
                /** Current duration of the state. */
                public get length(): number;
                /** The playback speed of the animation. 1 is the normal playback speed. */
                public get speed(): number;
                /** The speed multiplier for this state. */
                public get speedMultiplier(): number;
                /** The Tag of the State. */
                public get tagHash(): number;
                /** Is the state looping. */
                public get loop(): boolean;
                /** Does name match the name of the active state in the statemachine? */
                public IsName ($name: string) : boolean
                /** Does tag match the tag of the active state in the statemachine. */
                public IsTag ($tag: string) : boolean
            }
            /** Information about the current transition. */
            class AnimatorTransitionInfo extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            /** Information about clip being played and blended by the Animator. */
            class AnimatorClipInfo extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            /** Used to communicate between scripting and the controller. Some parameters can be set in scripting and used by the controller, while other parameters are based on Custom Curves in Animation Clips and can be sampled using the scripting API. */
            class AnimatorControllerParameter extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** Target. */
            enum AvatarTarget
            { Root = 0, Body = 1, LeftFoot = 2, RightFoot = 3, LeftHand = 4, RightHand = 5 }
            /** Use this struct to specify the position and rotation weight mask for Animator.MatchTarget. */
            class MatchTargetWeightMask extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            /** Culling mode for the Animator. */
            enum AnimatorCullingMode
            { AlwaysAnimate = 0, CullUpdateTransforms = 1, CullCompletely = 2, BasedOnRenderers = 1 }
            /** The mode of the Animator's recorder. */
            enum AnimatorRecorderMode
            { Offline = 0, Playback = 1, Record = 2 }
            /** The runtime representation of the AnimatorController. Use this representation to change the Animator Controller during runtime. */
            class RuntimeAnimatorController extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** Avatar definition. */
            class Avatar extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** A box-shaped primitive collider. */
            class BoxCollider extends UnityEngine.Collider
            {
                protected [__keep_incompatibility]: never;
                /** The center of the box, measured in the object's local space. */
                public get center(): UnityEngine.Vector3;
                public set center(value: UnityEngine.Vector3);
                /** The size of the box, measured in the object's local space. */
                public get size(): UnityEngine.Vector3;
                public set size(value: UnityEngine.Vector3);
                public constructor ()
            }
            /** A base class of all colliders. */
            class Collider extends UnityEngine.Component
            {
                protected [__keep_incompatibility]: never;
                /** Enabled Colliders will collide with other Colliders, disabled Colliders won't. */
                public get enabled(): boolean;
                public set enabled(value: boolean);
                /** The rigidbody the collider is attached to. */
                public get attachedRigidbody(): UnityEngine.Rigidbody;
                /** The articulation body the collider is attached to. */
                public get attachedArticulationBody(): UnityEngine.ArticulationBody;
                /** Is the collider a trigger? */
                public get isTrigger(): boolean;
                public set isTrigger(value: boolean);
                /** Contact offset value of this collider. */
                public get contactOffset(): number;
                public set contactOffset(value: number);
                /** The world space bounding volume of the collider (Read Only). */
                public get bounds(): UnityEngine.Bounds;
                /** Specify whether this Collider's contacts are modifiable or not. */
                public get hasModifiableContacts(): boolean;
                public set hasModifiableContacts(value: boolean);
                /** The shared physic material of this collider. */
                public get sharedMaterial(): UnityEngine.PhysicMaterial;
                public set sharedMaterial(value: UnityEngine.PhysicMaterial);
                /** The material used by the collider. */
                public get material(): UnityEngine.PhysicMaterial;
                public set material(value: UnityEngine.PhysicMaterial);
                /** Returns a point on the collider that is closest to a given location.
                * @param position Location you want to find the closest point to.
                * @returns The point on the collider that is closest to the specified location. 
                */
                public ClosestPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Casts a Ray that ignores all Colliders except this one.
                * @param ray The starting point and direction of the ray.
                * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit.
                * @param maxDistance The max length of the ray.
                * @returns True when the ray intersects the collider, otherwise false. 
                */
                public Raycast ($ray: UnityEngine.Ray, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number) : boolean
                /** The closest point to the bounding box of the attached collider. */
                public ClosestPointOnBounds ($position: UnityEngine.Vector3) : UnityEngine.Vector3
                public constructor ()
            }
            /** Control of an object's position through physics simulation. */
            class Rigidbody extends UnityEngine.Component
            {
                protected [__keep_incompatibility]: never;
            }
            /** A body that forms part of a Physics articulation. */
            class ArticulationBody extends UnityEngine.Behaviour
            {
                protected [__keep_incompatibility]: never;
            }
            /** Physics material describes how to handle colliding objects (friction, bounciness). */
            class PhysicMaterial extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** Structure used to get information back from a raycast. */
            class RaycastHit extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace System {
            class Object
            {
                protected [__keep_incompatibility]: never;
                public Equals ($obj: any) : boolean
                public static Equals ($objA: any, $objB: any) : boolean
                public GetHashCode () : number
                public GetType () : System.Type
                public ToString () : string
                public static ReferenceEquals ($objA: any, $objB: any) : boolean
                public constructor ()
            }
            class Int32 extends System.ValueType implements System.IEquatable$1<number>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible
            {
                protected [__keep_incompatibility]: never;
            }
            class ValueType extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            interface IEquatable$1<T>
            {
            }
            interface IFormattable
            {
            }
            interface ISpanFormattable
            {
            }
            interface IComparable
            {
            }
            interface IComparable$1<T>
            {
            }
            interface IConvertible
            {
            }
            class String extends System.Object implements System.IEquatable$1<string>, System.ICloneable, System.Collections.Generic.IEnumerable$1<number>, System.IComparable, System.IComparable$1<string>, System.Collections.IEnumerable, System.IConvertible
            {
                protected [__keep_incompatibility]: never;
            }
            interface ICloneable
            {
            }
            class Char extends System.ValueType implements System.IEquatable$1<number>, System.IComparable, System.IComparable$1<number>, System.IConvertible
            {
                protected [__keep_incompatibility]: never;
            }
            class Enum extends System.ValueType implements System.IFormattable, System.IComparable, System.IConvertible
            {
                protected [__keep_incompatibility]: never;
            }
            class Tuple$2<T1, T2> extends System.Object implements System.Collections.IStructuralComparable, System.ITupleInternal, System.Collections.IStructuralEquatable, System.IComparable, System.Runtime.CompilerServices.ITuple
            {
                protected [__keep_incompatibility]: never;
                public get Item1(): T1;
                public get Item2(): T2;
                public constructor ($item1: T1, $item2: T2)
                public constructor ()
            }
            interface ITupleInternal extends System.Runtime.CompilerServices.ITuple
            {
            }
            class Boolean extends System.ValueType implements System.IEquatable$1<boolean>, System.IComparable, System.IComparable$1<boolean>, System.IConvertible
            {
                protected [__keep_incompatibility]: never;
            }
            class Double extends System.ValueType implements System.IEquatable$1<number>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible
            {
                protected [__keep_incompatibility]: never;
            }
            class Single extends System.ValueType implements System.IEquatable$1<number>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible
            {
                protected [__keep_incompatibility]: never;
            }
            class Int64 extends System.ValueType implements System.IEquatable$1<bigint>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<bigint>, System.IConvertible
            {
                protected [__keep_incompatibility]: never;
            }
            class Type extends System.Reflection.MemberInfo implements System.Reflection.ICustomAttributeProvider, System.Reflection.IReflect, System.Runtime.InteropServices._MemberInfo, System.Runtime.InteropServices._Type
            {
                protected [__keep_incompatibility]: never;
            }
            class Void extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            interface MulticastDelegate
            { 
            (...args:any[]) : any; 
            Invoke?: (...args:any[]) => any;
            }
            var MulticastDelegate: { new (func: (...args:any[]) => any): MulticastDelegate; }
            class Delegate extends System.Object implements System.ICloneable, System.Runtime.Serialization.ISerializable
            {
                protected [__keep_incompatibility]: never;
                public get Method(): System.Reflection.MethodInfo;
                public get Target(): any;
                public static CreateDelegate ($type: System.Type, $firstArgument: any, $method: System.Reflection.MethodInfo, $throwOnBindFailure: boolean) : Function
                public static CreateDelegate ($type: System.Type, $firstArgument: any, $method: System.Reflection.MethodInfo) : Function
                public static CreateDelegate ($type: System.Type, $method: System.Reflection.MethodInfo, $throwOnBindFailure: boolean) : Function
                public static CreateDelegate ($type: System.Type, $method: System.Reflection.MethodInfo) : Function
                public static CreateDelegate ($type: System.Type, $target: any, $method: string) : Function
                public static CreateDelegate ($type: System.Type, $target: System.Type, $method: string, $ignoreCase: boolean, $throwOnBindFailure: boolean) : Function
                public static CreateDelegate ($type: System.Type, $target: System.Type, $method: string) : Function
                public static CreateDelegate ($type: System.Type, $target: System.Type, $method: string, $ignoreCase: boolean) : Function
                public static CreateDelegate ($type: System.Type, $target: any, $method: string, $ignoreCase: boolean, $throwOnBindFailure: boolean) : Function
                public static CreateDelegate ($type: System.Type, $target: any, $method: string, $ignoreCase: boolean) : Function
                public DynamicInvoke (...args: any[]) : any
                public Clone () : any
                public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
                public GetInvocationList () : System.Array$1<Function>
                public static Combine ($a: Function, $b: Function) : Function
                public static Combine (...delegates: Function[]) : Function
                public static Remove ($source: Function, $value: Function) : Function
                public static RemoveAll ($source: Function, $value: Function) : Function
                public static op_Equality ($d1: Function, $d2: Function) : boolean
                public static op_Inequality ($d1: Function, $d2: Function) : boolean
            }
            interface IDisposable
            {
            }
            class Exception extends System.Object implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
            {
                protected [__keep_incompatibility]: never;
            }
            interface IAsyncResult
            {
            }
            interface AsyncCallback
            { 
            (ar: System.IAsyncResult) : void; 
            Invoke?: (ar: System.IAsyncResult) => void;
            }
            var AsyncCallback: { new (func: (ar: System.IAsyncResult) => void): AsyncCallback; }
            class IntPtr extends System.ValueType implements System.IEquatable$1<System.IntPtr>, System.Runtime.Serialization.ISerializable
            {
                protected [__keep_incompatibility]: never;
            }
            class Array extends System.Object implements System.Collections.IStructuralComparable, System.Collections.IStructuralEquatable, System.Collections.ICollection, System.ICloneable, System.Collections.IEnumerable, System.Collections.IList
            {
                protected [__keep_incompatibility]: never;
                public get LongLength(): bigint;
                public get IsFixedSize(): boolean;
                public get IsReadOnly(): boolean;
                public get IsSynchronized(): boolean;
                public get SyncRoot(): any;
                public get Length(): number;
                public get Rank(): number;
                public static CreateInstance ($elementType: System.Type, ...lengths: bigint[]) : System.Array
                public CopyTo ($array: System.Array, $index: number) : void
                public Clone () : any
                public static BinarySearch ($array: System.Array, $value: any) : number
                public static Copy ($sourceArray: System.Array, $destinationArray: System.Array, $length: bigint) : void
                public static Copy ($sourceArray: System.Array, $sourceIndex: bigint, $destinationArray: System.Array, $destinationIndex: bigint, $length: bigint) : void
                public CopyTo ($array: System.Array, $index: bigint) : void
                public GetLongLength ($dimension: number) : bigint
                public GetValue ($index: bigint) : any
                public GetValue ($index1: bigint, $index2: bigint) : any
                public GetValue ($index1: bigint, $index2: bigint, $index3: bigint) : any
                public GetValue (...indices: bigint[]) : any
                public static BinarySearch ($array: System.Array, $index: number, $length: number, $value: any) : number
                public static BinarySearch ($array: System.Array, $value: any, $comparer: System.Collections.IComparer) : number
                public static BinarySearch ($array: System.Array, $index: number, $length: number, $value: any, $comparer: System.Collections.IComparer) : number
                public static IndexOf ($array: System.Array, $value: any) : number
                public static IndexOf ($array: System.Array, $value: any, $startIndex: number) : number
                public static IndexOf ($array: System.Array, $value: any, $startIndex: number, $count: number) : number
                public static LastIndexOf ($array: System.Array, $value: any) : number
                public static LastIndexOf ($array: System.Array, $value: any, $startIndex: number) : number
                public static LastIndexOf ($array: System.Array, $value: any, $startIndex: number, $count: number) : number
                public static Reverse ($array: System.Array) : void
                public static Reverse ($array: System.Array, $index: number, $length: number) : void
                public SetValue ($value: any, $index: bigint) : void
                public SetValue ($value: any, $index1: bigint, $index2: bigint) : void
                public SetValue ($value: any, $index1: bigint, $index2: bigint, $index3: bigint) : void
                public SetValue ($value: any, ...indices: bigint[]) : void
                public static Sort ($array: System.Array) : void
                public static Sort ($array: System.Array, $index: number, $length: number) : void
                public static Sort ($array: System.Array, $comparer: System.Collections.IComparer) : void
                public static Sort ($array: System.Array, $index: number, $length: number, $comparer: System.Collections.IComparer) : void
                public static Sort ($keys: System.Array, $items: System.Array) : void
                public static Sort ($keys: System.Array, $items: System.Array, $comparer: System.Collections.IComparer) : void
                public static Sort ($keys: System.Array, $items: System.Array, $index: number, $length: number) : void
                public static Sort ($keys: System.Array, $items: System.Array, $index: number, $length: number, $comparer: System.Collections.IComparer) : void
                public GetEnumerator () : System.Collections.IEnumerator
                public GetLength ($dimension: number) : number
                public GetLowerBound ($dimension: number) : number
                public GetValue (...indices: number[]) : any
                public SetValue ($value: any, ...indices: number[]) : void
                public GetUpperBound ($dimension: number) : number
                public GetValue ($index: number) : any
                public GetValue ($index1: number, $index2: number) : any
                public GetValue ($index1: number, $index2: number, $index3: number) : any
                public SetValue ($value: any, $index: number) : void
                public SetValue ($value: any, $index1: number, $index2: number) : void
                public SetValue ($value: any, $index1: number, $index2: number, $index3: number) : void
                public static CreateInstance ($elementType: System.Type, $length: number) : System.Array
                public static CreateInstance ($elementType: System.Type, $length1: number, $length2: number) : System.Array
                public static CreateInstance ($elementType: System.Type, $length1: number, $length2: number, $length3: number) : System.Array
                public static CreateInstance ($elementType: System.Type, ...lengths: number[]) : System.Array
                public static CreateInstance ($elementType: System.Type, $lengths: System.Array$1<number>, $lowerBounds: System.Array$1<number>) : System.Array
                public static Clear ($array: System.Array, $index: number, $length: number) : void
                public static Copy ($sourceArray: System.Array, $destinationArray: System.Array, $length: number) : void
                public static Copy ($sourceArray: System.Array, $sourceIndex: number, $destinationArray: System.Array, $destinationIndex: number, $length: number) : void
                public static ConstrainedCopy ($sourceArray: System.Array, $sourceIndex: number, $destinationArray: System.Array, $destinationIndex: number, $length: number) : void
                public Initialize () : void
            }
            class MarshalByRefObject extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            interface IAsyncDisposable
            {
            }
            class Decimal extends System.ValueType implements System.IEquatable$1<System.Decimal>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.Runtime.Serialization.IDeserializationCallback, System.IComparable$1<System.Decimal>, System.IConvertible
            {
                protected [__keep_incompatibility]: never;
            }
            class UInt64 extends System.ValueType implements System.IEquatable$1<bigint>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<bigint>, System.IConvertible
            {
                protected [__keep_incompatibility]: never;
            }
            interface IFormatProvider
            {
            }
            class Byte extends System.ValueType implements System.IEquatable$1<number>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible
            {
                protected [__keep_incompatibility]: never;
            }
            class DateTime extends System.ValueType implements System.IEquatable$1<Date>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<Date>, System.IConvertible, System.Runtime.Serialization.ISerializable
            {
                protected [__keep_incompatibility]: never;
                public static MinValue : Date
                public static MaxValue : Date
                public static UnixEpoch : Date
                public get Date(): Date;
                public get Day(): number;
                public get DayOfWeek(): System.DayOfWeek;
                public get DayOfYear(): number;
                public get Hour(): number;
                public get Kind(): System.DateTimeKind;
                public get Millisecond(): number;
                public get Minute(): number;
                public get Month(): number;
                public static get Now(): Date;
                public get Second(): number;
                public get Ticks(): bigint;
                public get TimeOfDay(): System.TimeSpan;
                public static get Today(): Date;
                public get Year(): number;
                public static get UtcNow(): Date;
                public Add ($value: System.TimeSpan) : Date
                public AddDays ($value: number) : Date
                public AddHours ($value: number) : Date
                public AddMilliseconds ($value: number) : Date
                public AddMinutes ($value: number) : Date
                public AddMonths ($months: number) : Date
                public AddSeconds ($value: number) : Date
                public AddTicks ($value: bigint) : Date
                public AddYears ($value: number) : Date
                public static Compare ($t1: Date, $t2: Date) : number
                public CompareTo ($value: any) : number
                public CompareTo ($value: Date) : number
                public static DaysInMonth ($year: number, $month: number) : number
                public Equals ($value: any) : boolean
                public Equals ($value: Date) : boolean
                public static Equals ($t1: Date, $t2: Date) : boolean
                public static FromBinary ($dateData: bigint) : Date
                public static FromFileTime ($fileTime: bigint) : Date
                public static FromFileTimeUtc ($fileTime: bigint) : Date
                public static FromOADate ($d: number) : Date
                public IsDaylightSavingTime () : boolean
                public static SpecifyKind ($value: Date, $kind: System.DateTimeKind) : Date
                public ToBinary () : bigint
                public static IsLeapYear ($year: number) : boolean
                public static Parse ($s: string) : Date
                public static Parse ($s: string, $provider: System.IFormatProvider) : Date
                public static Parse ($s: string, $provider: System.IFormatProvider, $styles: System.Globalization.DateTimeStyles) : Date
                public static ParseExact ($s: string, $format: string, $provider: System.IFormatProvider) : Date
                public static ParseExact ($s: string, $format: string, $provider: System.IFormatProvider, $style: System.Globalization.DateTimeStyles) : Date
                public static ParseExact ($s: string, $formats: System.Array$1<string>, $provider: System.IFormatProvider, $style: System.Globalization.DateTimeStyles) : Date
                public Subtract ($value: Date) : System.TimeSpan
                public Subtract ($value: System.TimeSpan) : Date
                public ToOADate () : number
                public ToFileTime () : bigint
                public ToFileTimeUtc () : bigint
                public ToLocalTime () : Date
                public ToLongDateString () : string
                public ToLongTimeString () : string
                public ToShortDateString () : string
                public ToShortTimeString () : string
                public ToString () : string
                public ToString ($format: string) : string
                public ToString ($provider: System.IFormatProvider) : string
                public ToString ($format: string, $provider: System.IFormatProvider) : string
                public ToUniversalTime () : Date
                public static TryParse ($s: string, $result: $Ref<Date>) : boolean
                public static TryParse ($s: string, $provider: System.IFormatProvider, $styles: System.Globalization.DateTimeStyles, $result: $Ref<Date>) : boolean
                public static TryParseExact ($s: string, $format: string, $provider: System.IFormatProvider, $style: System.Globalization.DateTimeStyles, $result: $Ref<Date>) : boolean
                public static TryParseExact ($s: string, $formats: System.Array$1<string>, $provider: System.IFormatProvider, $style: System.Globalization.DateTimeStyles, $result: $Ref<Date>) : boolean
                public static op_Addition ($d: Date, $t: System.TimeSpan) : Date
                public static op_Subtraction ($d: Date, $t: System.TimeSpan) : Date
                public static op_Subtraction ($d1: Date, $d2: Date) : System.TimeSpan
                public static op_Equality ($d1: Date, $d2: Date) : boolean
                public static op_Inequality ($d1: Date, $d2: Date) : boolean
                public static op_LessThan ($t1: Date, $t2: Date) : boolean
                public static op_LessThanOrEqual ($t1: Date, $t2: Date) : boolean
                public static op_GreaterThan ($t1: Date, $t2: Date) : boolean
                public static op_GreaterThanOrEqual ($t1: Date, $t2: Date) : boolean
                public GetDateTimeFormats () : System.Array$1<string>
                public GetDateTimeFormats ($provider: System.IFormatProvider) : System.Array$1<string>
                public GetDateTimeFormats ($format: number) : System.Array$1<string>
                public GetDateTimeFormats ($format: number, $provider: System.IFormatProvider) : System.Array$1<string>
                public GetTypeCode () : System.TypeCode
                public constructor ($ticks: bigint)
                public constructor ($ticks: bigint, $kind: System.DateTimeKind)
                public constructor ($year: number, $month: number, $day: number)
                public constructor ($year: number, $month: number, $day: number, $calendar: System.Globalization.Calendar)
                public constructor ($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number)
                public constructor ($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number, $kind: System.DateTimeKind)
                public constructor ($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number, $calendar: System.Globalization.Calendar)
                public constructor ($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number, $millisecond: number)
                public constructor ($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number, $millisecond: number, $kind: System.DateTimeKind)
                public constructor ($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number, $millisecond: number, $calendar: System.Globalization.Calendar)
                public constructor ($year: number, $month: number, $day: number, $hour: number, $minute: number, $second: number, $millisecond: number, $calendar: System.Globalization.Calendar, $kind: System.DateTimeKind)
                public Equals ($obj: any) : boolean
                public static Equals ($objA: any, $objB: any) : boolean
                public constructor ()
            }
            class TimeSpan extends System.ValueType implements System.IEquatable$1<System.TimeSpan>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<System.TimeSpan>
            {
                protected [__keep_incompatibility]: never;
            }
            enum DateTimeKind
            { Unspecified = 0, Utc = 1, Local = 2 }
            enum DayOfWeek
            { Sunday = 0, Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6 }
            class ReadOnlySpan$1<T> extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class Span$1<T> extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            enum TypeCode
            { Empty = 0, Object = 1, DBNull = 2, Boolean = 3, Char = 4, SByte = 5, Byte = 6, Int16 = 7, UInt16 = 8, Int32 = 9, UInt32 = 10, Int64 = 11, UInt64 = 12, Single = 13, Double = 14, Decimal = 15, DateTime = 16, String = 18 }
            interface Action$1<T>
            { 
            (obj: T) : void; 
            Invoke?: (obj: T) => void;
            }
            interface Func$3<T1, T2, TResult>
            { 
            (arg1: T1, arg2: T2) : TResult; 
            Invoke?: (arg1: T1, arg2: T2) => TResult;
            }
            class UInt16 extends System.ValueType implements System.IEquatable$1<number>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible
            {
                protected [__keep_incompatibility]: never;
            }
            class UInt32 extends System.ValueType implements System.IEquatable$1<number>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible
            {
                protected [__keep_incompatibility]: never;
            }
            interface Converter$2<TInput, TOutput>
            { 
            (input: TInput) : TOutput; 
            Invoke?: (input: TInput) => TOutput;
            }
            interface Comparison$1<T>
            { 
            (x: T, y: T) : number; 
            Invoke?: (x: T, y: T) => number;
            }
            interface Predicate$1<T>
            { 
            (obj: T) : boolean; 
            Invoke?: (obj: T) => boolean;
            }
            interface Action
            { 
            () : void; 
            Invoke?: () => void;
            }
            var Action: { new (func: () => void): Action; }
            interface Func$1<TResult>
            { 
            () : TResult; 
            Invoke?: () => TResult;
            }
            class Uri extends System.Object implements System.Runtime.Serialization.ISerializable
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace Puerts.Component {
            class PropertyValue extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public valueTypeId : number
                public objValue : UnityEngine.Object
                public primitiveValue : string
                public listValue : System.Collections.Generic.List$1<Puerts.Component.PropertyValue>
                public constructor ()
            }
            class Property extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public name : string
                public value : Puerts.Component.PropertyValue
                public constructor ()
            }
            enum PropertyValueType
            { NONE = 1, OBJECT = 2, LIST = 4 }
            interface ITsPropertyHolder
            {
                Properties : System.Collections.Generic.List$1<Puerts.Component.Property>
            }
            interface ITsPropertyHolder {
                ConvertPropertiesValue () : System.Collections.Generic.List$1<System.Tuple$2<string, any>>;
            }
            class TsPropertyHolderExtension extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static ConvertPropertiesValue ($holder: Puerts.Component.ITsPropertyHolder) : System.Collections.Generic.List$1<System.Tuple$2<string, any>>
            }
            class BoolPropertySerializer extends Puerts.Component.PrimitivePropertySerializer$1<boolean> implements Puerts.Component.IPrimitivePropertySerializer
            {
                protected [__keep_incompatibility]: never;
                public get ValueTypeId(): number;
                public get Type(): System.Type;
                public get Priority(): number;
                public constructor ()
                public InternalValueToString ($value: any) : string
                public InternalStringToValue ($str: string) : any
                public InternalRenderEditorGUIField ($propName: string, $propValue: any) : any
                public OptionsFilter ($propertyOptions: System.Collections.Generic.Dictionary$2<string, any>) : boolean
            }
            class PrimitivePropertySerializer$1<T> extends System.Object implements Puerts.Component.IPrimitivePropertySerializer
            {
                protected [__keep_incompatibility]: never;
                public get Type(): System.Type;
                public get ValueTypeId(): number;
                public get Priority(): number;
                public InternalValueToString ($value: any) : string
                public InternalStringToValue ($str: string) : any
                public InternalRenderEditorGUIField ($propName: string, $propValue: any) : any
                public OptionsFilter ($propertyOptions: System.Collections.Generic.Dictionary$2<string, any>) : boolean
            }
            interface IPrimitivePropertySerializer
            {
                Type : System.Type
                ValueTypeId : number
                Priority : number
                InternalValueToString ($value: any) : string
                InternalStringToValue ($str: string) : any
                InternalRenderEditorGUIField ($propName: string, $propValue: any) : any
                OptionsFilter ($propertyOptions: System.Collections.Generic.Dictionary$2<string, any>) : boolean
            }
            class ColorPropertySerializer extends Puerts.Component.PrimitivePropertySerializer$1<UnityEngine.Color> implements Puerts.Component.IPrimitivePropertySerializer
            {
                protected [__keep_incompatibility]: never;
                public get ValueTypeId(): number;
                public get Type(): System.Type;
                public get Priority(): number;
                public constructor ()
                public InternalValueToString ($value: any) : string
                public InternalStringToValue ($str: string) : any
                public InternalRenderEditorGUIField ($propName: string, $propValue: any) : any
                public OptionsFilter ($propertyOptions: System.Collections.Generic.Dictionary$2<string, any>) : boolean
            }
            class DoublePropertySerializer extends Puerts.Component.PrimitivePropertySerializer$1<number> implements Puerts.Component.IPrimitivePropertySerializer
            {
                protected [__keep_incompatibility]: never;
                public get ValueTypeId(): number;
                public get Type(): System.Type;
                public get Priority(): number;
                public constructor ()
                public InternalValueToString ($value: any) : string
                public InternalStringToValue ($str: string) : any
                public InternalRenderEditorGUIField ($propName: string, $propValue: any) : any
                public OptionsFilter ($propertyOptions: System.Collections.Generic.Dictionary$2<string, any>) : boolean
            }
            class FloatPropertySerializer extends Puerts.Component.PrimitivePropertySerializer$1<number> implements Puerts.Component.IPrimitivePropertySerializer
            {
                protected [__keep_incompatibility]: never;
                public get ValueTypeId(): number;
                public get Type(): System.Type;
                public get Priority(): number;
                public constructor ()
                public InternalValueToString ($value: any) : string
                public InternalStringToValue ($str: string) : any
                public InternalRenderEditorGUIField ($propName: string, $propValue: any) : any
                public OptionsFilter ($propertyOptions: System.Collections.Generic.Dictionary$2<string, any>) : boolean
            }
            class IntPropertySerializer extends Puerts.Component.PrimitivePropertySerializer$1<number> implements Puerts.Component.IPrimitivePropertySerializer
            {
                protected [__keep_incompatibility]: never;
                public get ValueTypeId(): number;
                public get Type(): System.Type;
                public get Priority(): number;
                public constructor ()
                public InternalValueToString ($value: any) : string
                public InternalStringToValue ($str: string) : any
                public InternalRenderEditorGUIField ($propName: string, $propValue: any) : any
                public OptionsFilter ($propertyOptions: System.Collections.Generic.Dictionary$2<string, any>) : boolean
            }
            class LongPropertySerializer extends Puerts.Component.PrimitivePropertySerializer$1<bigint> implements Puerts.Component.IPrimitivePropertySerializer
            {
                protected [__keep_incompatibility]: never;
                public get ValueTypeId(): number;
                public get Type(): System.Type;
                public get Priority(): number;
                public constructor ()
                public InternalValueToString ($value: any) : string
                public InternalStringToValue ($str: string) : any
                public InternalRenderEditorGUIField ($propName: string, $propValue: any) : any
                public OptionsFilter ($propertyOptions: System.Collections.Generic.Dictionary$2<string, any>) : boolean
            }
            class PasswordPropertySerializer extends Puerts.Component.StringPropertySerializer implements Puerts.Component.IPrimitivePropertySerializer
            {
                protected [__keep_incompatibility]: never;
                public get ValueTypeId(): number;
                public get Priority(): number;
                public constructor ()
            }
            class StringPropertySerializer extends Puerts.Component.PrimitivePropertySerializer$1<string> implements Puerts.Component.IPrimitivePropertySerializer
            {
                protected [__keep_incompatibility]: never;
                public get ValueTypeId(): number;
                public get Type(): System.Type;
                public get Priority(): number;
                public constructor ()
                public InternalValueToString ($value: any) : string
                public InternalStringToValue ($str: string) : any
                public InternalRenderEditorGUIField ($propName: string, $propValue: any) : any
                public OptionsFilter ($propertyOptions: System.Collections.Generic.Dictionary$2<string, any>) : boolean
            }
            class PrimitivePropertySerializerCollector extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static get PropertySerializers(): System.Collections.Generic.List$1<Puerts.Component.IPrimitivePropertySerializer>;
                public constructor ()
            }
            class Vector2PropertySerializer extends Puerts.Component.PrimitivePropertySerializer$1<UnityEngine.Vector2> implements Puerts.Component.IPrimitivePropertySerializer
            {
                protected [__keep_incompatibility]: never;
                public get ValueTypeId(): number;
                public get Type(): System.Type;
                public get Priority(): number;
                public constructor ()
                public InternalValueToString ($value: any) : string
                public InternalStringToValue ($str: string) : any
                public InternalRenderEditorGUIField ($propName: string, $propValue: any) : any
                public OptionsFilter ($propertyOptions: System.Collections.Generic.Dictionary$2<string, any>) : boolean
            }
            class Vector3PropertySerializer extends Puerts.Component.PrimitivePropertySerializer$1<UnityEngine.Vector3> implements Puerts.Component.IPrimitivePropertySerializer
            {
                protected [__keep_incompatibility]: never;
                public get ValueTypeId(): number;
                public get Type(): System.Type;
                public get Priority(): number;
                public constructor ()
                public InternalValueToString ($value: any) : string
                public InternalStringToValue ($str: string) : any
                public InternalRenderEditorGUIField ($propName: string, $propValue: any) : any
                public OptionsFilter ($propertyOptions: System.Collections.Generic.Dictionary$2<string, any>) : boolean
            }
            class TsAsset extends UnityEngine.ScriptableObject implements Puerts.Component.ITsTransporterHolder, Puerts.Component.ITsPropertyHolder
            {
                protected [__keep_incompatibility]: never;
                public properties : System.Collections.Generic.List$1<Puerts.Component.Property>
                public tsModulePath : string
                public get Transporter(): Puerts.Component.TsTransporter;
                public get Properties(): System.Collections.Generic.List$1<Puerts.Component.Property>;
                public Init () : void
                public constructor ()
                public ConvertPropertiesValue () : System.Collections.Generic.List$1<System.Tuple$2<string, any>>
            }
            interface ITsTransporterHolder
            {
                Transporter : Puerts.Component.TsTransporter
                Init () : void
            }
            class TsTransporter extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public RegisterHook ($hookName: string, $hook: Puerts.Component.TsTransporter.Hook) : void
                public InvokeHook ($hookName: string, ...args: any[]) : void
                public ContainsHook ($hookName: string) : boolean
                public Clear () : void
                public constructor ($tsModulePath: string, $args: System.Collections.Generic.List$1<System.Tuple$2<string, any>>, $jsEnvIdx?: number)
                public constructor ()
            }
            class TsComponent extends UnityEngine.MonoBehaviour implements Puerts.Component.ITsTransporterHolder, Puerts.Component.ITsPropertyHolder
            {
                protected [__keep_incompatibility]: never;
                public properties : System.Collections.Generic.List$1<Puerts.Component.Property>
                public tsModulePath : string
                public hookNames : System.Collections.Generic.List$1<string>
                public get Transporter(): Puerts.Component.TsTransporter;
                public get Properties(): System.Collections.Generic.List$1<Puerts.Component.Property>;
                public Init ($pTsModulePath: string) : void
                public Init () : void
                public constructor ()
                public ConvertPropertiesValue () : System.Collections.Generic.List$1<System.Tuple$2<string, any>>
            }
        }
        namespace System.Collections.Generic {
            interface IEnumerable$1<T> extends System.Collections.IEnumerable
            {
            }
            class List$1<T> extends System.Object implements System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.ICollection, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.IList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.IList, System.Collections.Generic.ICollection$1<T>
            {
                protected [__keep_incompatibility]: never;
                public get Capacity(): number;
                public set Capacity(value: number);
                public get Count(): number;
                public get_Item ($index: number) : T
                public set_Item ($index: number, $value: T) : void
                public Add ($item: T) : void
                public AddRange ($collection: System.Collections.Generic.IEnumerable$1<T>) : void
                public AsReadOnly () : System.Collections.ObjectModel.ReadOnlyCollection$1<T>
                public BinarySearch ($index: number, $count: number, $item: T, $comparer: System.Collections.Generic.IComparer$1<T>) : number
                public BinarySearch ($item: T) : number
                public BinarySearch ($item: T, $comparer: System.Collections.Generic.IComparer$1<T>) : number
                public Clear () : void
                public Contains ($item: T) : boolean
                public CopyTo ($array: System.Array$1<T>) : void
                public CopyTo ($index: number, $array: System.Array$1<T>, $arrayIndex: number, $count: number) : void
                public CopyTo ($array: System.Array$1<T>, $arrayIndex: number) : void
                public Exists ($match: System.Predicate$1<T>) : boolean
                public Find ($match: System.Predicate$1<T>) : T
                public FindAll ($match: System.Predicate$1<T>) : System.Collections.Generic.List$1<T>
                public FindIndex ($match: System.Predicate$1<T>) : number
                public FindIndex ($startIndex: number, $match: System.Predicate$1<T>) : number
                public FindIndex ($startIndex: number, $count: number, $match: System.Predicate$1<T>) : number
                public FindLast ($match: System.Predicate$1<T>) : T
                public FindLastIndex ($match: System.Predicate$1<T>) : number
                public FindLastIndex ($startIndex: number, $match: System.Predicate$1<T>) : number
                public FindLastIndex ($startIndex: number, $count: number, $match: System.Predicate$1<T>) : number
                public ForEach ($action: System.Action$1<T>) : void
                public GetEnumerator () : System.Collections.Generic.List$1.Enumerator<T>
                public GetRange ($index: number, $count: number) : System.Collections.Generic.List$1<T>
                public IndexOf ($item: T) : number
                public IndexOf ($item: T, $index: number) : number
                public IndexOf ($item: T, $index: number, $count: number) : number
                public Insert ($index: number, $item: T) : void
                public InsertRange ($index: number, $collection: System.Collections.Generic.IEnumerable$1<T>) : void
                public LastIndexOf ($item: T) : number
                public LastIndexOf ($item: T, $index: number) : number
                public LastIndexOf ($item: T, $index: number, $count: number) : number
                public Remove ($item: T) : boolean
                public RemoveAll ($match: System.Predicate$1<T>) : number
                public RemoveAt ($index: number) : void
                public RemoveRange ($index: number, $count: number) : void
                public Reverse () : void
                public Reverse ($index: number, $count: number) : void
                public Sort () : void
                public Sort ($comparer: System.Collections.Generic.IComparer$1<T>) : void
                public Sort ($index: number, $count: number, $comparer: System.Collections.Generic.IComparer$1<T>) : void
                public Sort ($comparison: System.Comparison$1<T>) : void
                public ToArray () : System.Array$1<T>
                public TrimExcess () : void
                public TrueForAll ($match: System.Predicate$1<T>) : boolean
                public constructor ()
                public constructor ($capacity: number)
                public constructor ($collection: System.Collections.Generic.IEnumerable$1<T>)
            }
            interface IReadOnlyList$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<T>
            {
            }
            interface IReadOnlyCollection$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
            {
            }
            interface IList$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.ICollection$1<T>
            {
            }
            interface ICollection$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
            {
            }
            class Dictionary$2<TKey, TValue> extends System.Object implements System.Collections.Generic.IReadOnlyDictionary$2<TKey, TValue>, System.Collections.Generic.IDictionary$2<TKey, TValue>, System.Collections.ICollection, System.Collections.IDictionary, System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Runtime.Serialization.IDeserializationCallback, System.Collections.IEnumerable, System.Runtime.Serialization.ISerializable, System.Collections.Generic.IReadOnlyCollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.Generic.ICollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>
            {
                protected [__keep_incompatibility]: never;
                public get Comparer(): System.Collections.Generic.IEqualityComparer$1<TKey>;
                public get Count(): number;
                public get Keys(): System.Collections.Generic.Dictionary$2.KeyCollection<TKey, TValue>;
                public get Values(): System.Collections.Generic.Dictionary$2.ValueCollection<TKey, TValue>;
                public get_Item ($key: TKey) : TValue
                public set_Item ($key: TKey, $value: TValue) : void
                public Add ($key: TKey, $value: TValue) : void
                public Clear () : void
                public ContainsKey ($key: TKey) : boolean
                public ContainsValue ($value: TValue) : boolean
                public GetEnumerator () : System.Collections.Generic.Dictionary$2.Enumerator<TKey, TValue>
                public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
                public OnDeserialization ($sender: any) : void
                public Remove ($key: TKey) : boolean
                public TryGetValue ($key: TKey, $value: $Ref<TValue>) : boolean
                public EnsureCapacity ($capacity: number) : number
                public TrimExcess () : void
                public TrimExcess ($capacity: number) : void
                public constructor ()
                public constructor ($capacity: number)
                public constructor ($comparer: System.Collections.Generic.IEqualityComparer$1<TKey>)
                public constructor ($capacity: number, $comparer: System.Collections.Generic.IEqualityComparer$1<TKey>)
                public constructor ($dictionary: System.Collections.Generic.IDictionary$2<TKey, TValue>)
                public constructor ($dictionary: System.Collections.Generic.IDictionary$2<TKey, TValue>, $comparer: System.Collections.Generic.IEqualityComparer$1<TKey>)
                public constructor ($collection: System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>)
                public constructor ($collection: System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, $comparer: System.Collections.Generic.IEqualityComparer$1<TKey>)
            }
            interface IReadOnlyDictionary$2<TKey, TValue> extends System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>
            {
            }
            class KeyValuePair$2<TKey, TValue> extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            interface IDictionary$2<TKey, TValue> extends System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.IEnumerable, System.Collections.Generic.ICollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>
            {
            }
            interface IComparer$1<T>
            {
            }
            interface IEnumerator$1<T> extends System.Collections.IEnumerator, System.IDisposable
            {
            }
            interface IEqualityComparer$1<T>
            {
            }
        }
        namespace System.Collections {
            interface IEnumerable
            {
            }
            interface ICollection extends System.Collections.IEnumerable
            {
            }
            interface IList extends System.Collections.ICollection, System.Collections.IEnumerable
            {
            }
            interface IStructuralComparable
            {
            }
            interface IStructuralEquatable
            {
            }
            interface IDictionary extends System.Collections.ICollection, System.Collections.IEnumerable
            {
            }
            interface IDictionaryEnumerator extends System.Collections.IEnumerator
            {
            }
            interface IEnumerator
            {
            }
            class Hashtable extends System.Object implements System.Collections.ICollection, System.ICloneable, System.Collections.IDictionary, System.Runtime.Serialization.IDeserializationCallback, System.Collections.IEnumerable, System.Runtime.Serialization.ISerializable
            {
                protected [__keep_incompatibility]: never;
                public get IsReadOnly(): boolean;
                public get IsFixedSize(): boolean;
                public get IsSynchronized(): boolean;
                public get Keys(): System.Collections.ICollection;
                public get Values(): System.Collections.ICollection;
                public get SyncRoot(): any;
                public get Count(): number;
                public Add ($key: any, $value: any) : void
                public Clear () : void
                public Clone () : any
                public Contains ($key: any) : boolean
                public ContainsKey ($key: any) : boolean
                public ContainsValue ($value: any) : boolean
                public CopyTo ($array: System.Array, $arrayIndex: number) : void
                public get_Item ($key: any) : any
                public set_Item ($key: any, $value: any) : void
                public GetEnumerator () : System.Collections.IDictionaryEnumerator
                public Remove ($key: any) : void
                public static Synchronized ($table: System.Collections.Hashtable) : System.Collections.Hashtable
                public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
                public OnDeserialization ($sender: any) : void
                public constructor ()
                public constructor ($capacity: number)
                public constructor ($capacity: number, $loadFactor: number)
                public constructor ($capacity: number, $loadFactor: number, $equalityComparer: System.Collections.IEqualityComparer)
                public constructor ($equalityComparer: System.Collections.IEqualityComparer)
                public constructor ($capacity: number, $equalityComparer: System.Collections.IEqualityComparer)
                public constructor ($d: System.Collections.IDictionary)
                public constructor ($d: System.Collections.IDictionary, $loadFactor: number)
                public constructor ($d: System.Collections.IDictionary, $equalityComparer: System.Collections.IEqualityComparer)
                public constructor ($d: System.Collections.IDictionary, $loadFactor: number, $equalityComparer: System.Collections.IEqualityComparer)
            }
            interface IEqualityComparer
            {
            }
            interface IHashCodeProvider
            {
            }
            interface IComparer
            {
            }
        }
        namespace System.Runtime.CompilerServices {
            interface ITuple
            {
            }
        }
        namespace System.Runtime.Serialization {
            interface IDeserializationCallback
            {
            }
            interface ISerializable
            {
            }
            class SerializationInfo extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class StreamingContext extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace System.Reflection {
            class MemberInfo extends System.Object implements System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo
            {
                protected [__keep_incompatibility]: never;
            }
            interface ICustomAttributeProvider
            {
            }
            interface IReflect
            {
            }
            class PropertyInfo extends System.Reflection.MemberInfo implements System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo
            {
                protected [__keep_incompatibility]: never;
            }
            class MethodInfo extends System.Reflection.MethodBase implements System.Runtime.InteropServices._MethodInfo, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo, System.Runtime.InteropServices._MethodBase
            {
                protected [__keep_incompatibility]: never;
            }
            class MethodBase extends System.Reflection.MemberInfo implements System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo, System.Runtime.InteropServices._MethodBase
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace System.Runtime.InteropServices {
            interface _MemberInfo
            {
            }
            interface _Type
            {
            }
            interface _Exception
            {
            }
            interface _MethodBase
            {
            }
            interface _MethodInfo
            {
            }
        }
        namespace Puerts.Component.TsTransporter {
            interface Hook
            { 
            (args: System.Array$1<any>) : any; 
            Invoke?: (args: System.Array$1<any>) => any;
            }
            var Hook: { new (func: (args: System.Array$1<any>) => any): Hook; }
        }
        namespace PuertsStaticWrap {
            class AutoStaticCodeRegister extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static Register ($jsEnv: Puerts.JsEnv) : void
            }
            class Puerts_Component_TsComponent_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class Puerts_Component_TsTransporter_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class System_Array_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class System_Collections_Generic_Dictionary_2_System_String_System_String__Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class System_Collections_Generic_List_1_System_String__Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class System_Delegate_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class System_Object_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_AnimatorStateInfo_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_Animator_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_Application_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_Behaviour_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_BoxCollider_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_Canvas_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_Collider_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_Component_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_Debug_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_EventSystems_UIBehaviour_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_Events_UnityEvent_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_GameObject_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_MonoBehaviour_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_Networking_DownloadHandlerBuffer_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_Networking_DownloadHandlerTexture_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_Networking_DownloadHandler_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_Networking_UnityWebRequestAsyncOperation_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_Networking_UnityWebRequestTexture_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_Networking_UnityWebRequest_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_Networking_UploadHandlerRaw_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_Object_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_ParticleSystem_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_PlayerPrefs_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_Quaternion_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
                public static InitBlittableCopy ($jsEnv: Puerts.JsEnv) : void
            }
            class UnityEngine_RectTransform_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_Resources_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_SpriteRenderer_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_Time_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_Transform_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_UI_Button_ButtonClickedEvent_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_UI_Button_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_UI_Image_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_UI_InputField_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_UI_Selectable_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_UI_Text_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_UI_Toggle_ToggleEvent_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_UI_Toggle_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
            class UnityEngine_Vector2_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
                public static InitBlittableCopy ($jsEnv: Puerts.JsEnv) : void
            }
            class UnityEngine_Vector3_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
                public static InitBlittableCopy ($jsEnv: Puerts.JsEnv) : void
            }
            class UnityEngine_WWWForm_Wrap extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetRegisterInfo () : Puerts.TypeRegisterInfo
            }
        }
        namespace Puerts {
            class JsEnv extends System.Object implements System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
            class TypeRegisterInfo extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace LitJson {
            enum JsonType
            { None = 0, Object = 1, Array = 2, String = 3, Int = 4, Long = 5, Double = 6, Boolean = 7 }
            interface IOrderedDictionary extends System.Collections.ICollection, System.Collections.IDictionary, System.Collections.IEnumerable
            {
                GetEnumerator () : System.Collections.IDictionaryEnumerator
                Insert ($index: number, $key: any, $value: any) : void
                RemoveAt ($index: number) : void
                get_Item ($index: number) : any
                set_Item ($index: number, $value: any) : void
            }
            interface IJsonWrapper extends System.Collections.ICollection, System.Collections.IDictionary, LitJson.IOrderedDictionary, System.Collections.IEnumerable, System.Collections.IList
            {
                IsArray : boolean
                IsBoolean : boolean
                IsDouble : boolean
                IsInt : boolean
                IsLong : boolean
                IsObject : boolean
                IsString : boolean
                GetBoolean () : boolean
                GetDouble () : number
                GetInt () : number
                GetJsonType () : LitJson.JsonType
                GetLong () : bigint
                GetString () : string
                SetBoolean ($val: boolean) : void
                SetDouble ($val: number) : void
                SetInt ($val: number) : void
                SetJsonType ($type: LitJson.JsonType) : void
                SetLong ($val: bigint) : void
                SetString ($val: string) : void
                ToJson () : string
                ToJson ($writer: LitJson.JsonWriter) : void
                GetEnumerator () : System.Collections.IDictionaryEnumerator
                Insert ($index: number, $key: any, $value: any) : void
                RemoveAt ($index: number) : void
                get_Item ($index: number) : any
                set_Item ($index: number, $value: any) : void
            }
            class JsonWriter extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public get IndentValue(): number;
                public set IndentValue(value: number);
                public get PrettyPrint(): boolean;
                public set PrettyPrint(value: boolean);
                public get TextWriter(): System.IO.TextWriter;
                public get Validate(): boolean;
                public set Validate(value: boolean);
                public get LowerCaseProperties(): boolean;
                public set LowerCaseProperties(value: boolean);
                public Reset () : void
                public Write ($boolean: boolean) : void
                public Write ($number: System.Decimal) : void
                public Write ($number: number) : void
                public Write ($number: bigint) : void
                public Write ($str: string) : void
                public WriteArrayEnd () : void
                public WriteArrayStart () : void
                public WriteObjectEnd () : void
                public WriteObjectStart () : void
                public WritePropertyName ($property_name: string) : void
                public constructor ()
                public constructor ($sb: System.Text.StringBuilder)
                public constructor ($writer: System.IO.TextWriter)
            }
            class JsonData extends System.Object implements System.IEquatable$1<LitJson.JsonData>, System.Collections.ICollection, System.Collections.IDictionary, LitJson.IOrderedDictionary, System.Collections.IEnumerable, LitJson.IJsonWrapper, System.Collections.IList
            {
                protected [__keep_incompatibility]: never;
                public get Count(): number;
                public get IsArray(): boolean;
                public get IsBoolean(): boolean;
                public get IsDouble(): boolean;
                public get IsInt(): boolean;
                public get IsLong(): boolean;
                public get IsObject(): boolean;
                public get IsString(): boolean;
                public get Keys(): System.Collections.Generic.ICollection$1<string>;
                public ContainsKey ($key: string) : boolean
                public get_Item ($prop_name: string) : LitJson.JsonData
                public set_Item ($prop_name: string, $value: LitJson.JsonData) : void
                public get_Item ($index: number) : LitJson.JsonData
                public set_Item ($index: number, $value: LitJson.JsonData) : void
                public static op_Implicit ($data: boolean) : LitJson.JsonData
                public static op_Implicit ($data: number) : LitJson.JsonData
                public static op_Implicit ($data: bigint) : LitJson.JsonData
                public static op_Implicit ($data: string) : LitJson.JsonData
                public static op_Explicit ($data: LitJson.JsonData) : boolean
                public static op_Explicit ($data: LitJson.JsonData) : number
                public static op_Explicit ($data: LitJson.JsonData) : bigint
                public static op_Explicit ($data: LitJson.JsonData) : string
                public Add ($value: any) : number
                public Remove ($obj: any) : boolean
                public Clear () : void
                public Equals ($x: LitJson.JsonData) : boolean
                public GetJsonType () : LitJson.JsonType
                public SetJsonType ($type: LitJson.JsonType) : void
                public ToJson () : string
                public ToJson ($writer: LitJson.JsonWriter) : void
                public constructor ()
                public constructor ($boolean: boolean)
                public constructor ($number: number)
                public constructor ($number: bigint)
                public constructor ($obj: any)
                public constructor ($str: string)
                public GetEnumerator () : System.Collections.IDictionaryEnumerator
                public Insert ($index: number, $key: any, $value: any) : void
                public RemoveAt ($index: number) : void
                public get_Item ($index: number) : any
                public set_Item ($index: number, $value: any) : void
                public GetBoolean () : boolean
                public GetDouble () : number
                public GetInt () : number
                public GetLong () : bigint
                public GetString () : string
                public SetBoolean ($val: boolean) : void
                public SetDouble ($val: number) : void
                public SetInt ($val: number) : void
                public SetLong ($val: bigint) : void
                public SetString ($val: string) : void
                public Equals ($obj: any) : boolean
                public static Equals ($objA: any, $objB: any) : boolean
            }
            class JsonException extends System.Exception implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
                public constructor ($message: string)
                public constructor ($message: string, $inner_exception: System.Exception)
            }
            interface WrapperFactory
            { 
            () : LitJson.IJsonWrapper; 
            Invoke?: () => LitJson.IJsonWrapper;
            }
            var WrapperFactory: { new (func: () => LitJson.IJsonWrapper): WrapperFactory; }
            class JsonMapper extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetPublicInstanceProperties ($type: System.Type) : System.Array$1<System.Reflection.PropertyInfo>
                public static ToJson ($obj: any) : string
                public static ToJson ($obj: any, $writer: LitJson.JsonWriter) : void
                public static ToObject ($reader: LitJson.JsonReader) : LitJson.JsonData
                public static ToObject ($reader: System.IO.TextReader) : LitJson.JsonData
                public static ToObject ($json: string) : LitJson.JsonData
                public static ToObject ($toType: System.Type, $json: string) : any
                public static ToWrapper ($factory: LitJson.WrapperFactory, $reader: LitJson.JsonReader) : LitJson.IJsonWrapper
                public static ToWrapper ($factory: LitJson.WrapperFactory, $json: string) : LitJson.IJsonWrapper
                public static UnregisterExporters () : void
                public static UnregisterImporters () : void
                public constructor ()
            }
            class JsonReader extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public get AllowComments(): boolean;
                public set AllowComments(value: boolean);
                public get AllowSingleQuotedStrings(): boolean;
                public set AllowSingleQuotedStrings(value: boolean);
                public get SkipNonMembers(): boolean;
                public set SkipNonMembers(value: boolean);
                public get EndOfInput(): boolean;
                public get EndOfJson(): boolean;
                public get Token(): LitJson.JsonToken;
                public get Value(): any;
                public Close () : void
                public Read () : boolean
                public constructor ($json_text: string)
                public constructor ($reader: System.IO.TextReader)
                public constructor ()
            }
            interface ExporterFunc$1<T>
            { 
            (obj: T, writer: LitJson.JsonWriter) : void; 
            Invoke?: (obj: T, writer: LitJson.JsonWriter) => void;
            }
            interface ImporterFunc$2<TJson, TValue>
            { 
            (input: TJson) : TValue; 
            Invoke?: (input: TJson) => TValue;
            }
            class JsonMockWrapper extends System.Object implements System.Collections.ICollection, System.Collections.IDictionary, LitJson.IOrderedDictionary, System.Collections.IEnumerable, LitJson.IJsonWrapper, System.Collections.IList
            {
                protected [__keep_incompatibility]: never;
                public get IsArray(): boolean;
                public get IsBoolean(): boolean;
                public get IsDouble(): boolean;
                public get IsInt(): boolean;
                public get IsLong(): boolean;
                public get IsObject(): boolean;
                public get IsString(): boolean;
                public GetBoolean () : boolean
                public GetDouble () : number
                public GetInt () : number
                public GetJsonType () : LitJson.JsonType
                public GetLong () : bigint
                public GetString () : string
                public SetBoolean ($val: boolean) : void
                public SetDouble ($val: number) : void
                public SetInt ($val: number) : void
                public SetJsonType ($type: LitJson.JsonType) : void
                public SetLong ($val: bigint) : void
                public SetString ($val: string) : void
                public ToJson () : string
                public ToJson ($writer: LitJson.JsonWriter) : void
                public constructor ()
                public GetEnumerator () : System.Collections.IDictionaryEnumerator
                public Insert ($index: number, $key: any, $value: any) : void
                public RemoveAt ($index: number) : void
                public get_Item ($index: number) : any
                public set_Item ($index: number, $value: any) : void
            }
            enum JsonToken
            { None = 0, ObjectStart = 1, PropertyName = 2, ObjectEnd = 3, ArrayStart = 4, ArrayEnd = 5, Int = 6, Long = 7, Double = 8, String = 9, Boolean = 10, Null = 11 }
        }
        namespace System.IO {
            class TextReader extends System.MarshalByRefObject implements System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
            class TextWriter extends System.MarshalByRefObject implements System.IAsyncDisposable, System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace System.Text {
            class StringBuilder extends System.Object implements System.Runtime.Serialization.ISerializable
            {
                protected [__keep_incompatibility]: never;
            }
            class UTF8Encoding extends System.Text.Encoding implements System.ICloneable
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
                public constructor ($encoderShouldEmitUTF8Identifier: boolean)
                public constructor ($encoderShouldEmitUTF8Identifier: boolean, $throwOnInvalidBytes: boolean)
            }
            class Encoding extends System.Object implements System.ICloneable
            {
                protected [__keep_incompatibility]: never;
                public get BodyName(): string;
                public get EncodingName(): string;
                public get HeaderName(): string;
                public get WebName(): string;
                public get WindowsCodePage(): number;
                public get IsBrowserDisplay(): boolean;
                public get IsBrowserSave(): boolean;
                public get IsMailNewsDisplay(): boolean;
                public get IsMailNewsSave(): boolean;
                public get IsSingleByte(): boolean;
                public get EncoderFallback(): System.Text.EncoderFallback;
                public set EncoderFallback(value: System.Text.EncoderFallback);
                public get DecoderFallback(): System.Text.DecoderFallback;
                public set DecoderFallback(value: System.Text.DecoderFallback);
                public get IsReadOnly(): boolean;
                public static get ASCII(): System.Text.Encoding;
                public get CodePage(): number;
                public static get Default(): System.Text.Encoding;
                public static get Unicode(): System.Text.Encoding;
                public static get BigEndianUnicode(): System.Text.Encoding;
                public static get UTF7(): System.Text.Encoding;
                public static get UTF8(): System.Text.Encoding;
                public static get UTF32(): System.Text.Encoding;
                public static Convert ($srcEncoding: System.Text.Encoding, $dstEncoding: System.Text.Encoding, $bytes: System.Array$1<number>) : System.Array$1<number>
                public static Convert ($srcEncoding: System.Text.Encoding, $dstEncoding: System.Text.Encoding, $bytes: System.Array$1<number>, $index: number, $count: number) : System.Array$1<number>
                public static RegisterProvider ($provider: System.Text.EncodingProvider) : void
                public static GetEncoding ($codepage: number) : System.Text.Encoding
                public static GetEncoding ($codepage: number, $encoderFallback: System.Text.EncoderFallback, $decoderFallback: System.Text.DecoderFallback) : System.Text.Encoding
                public static GetEncoding ($name: string) : System.Text.Encoding
                public static GetEncoding ($name: string, $encoderFallback: System.Text.EncoderFallback, $decoderFallback: System.Text.DecoderFallback) : System.Text.Encoding
                public static GetEncodings () : System.Array$1<System.Text.EncodingInfo>
                public GetPreamble () : System.Array$1<number>
                public Clone () : any
                public GetByteCount ($chars: System.Array$1<number>) : number
                public GetByteCount ($s: string) : number
                public GetByteCount ($chars: System.Array$1<number>, $index: number, $count: number) : number
                public GetByteCount ($str: string, $index: number, $count: number) : number
                public GetBytes ($chars: System.Array$1<number>) : System.Array$1<number>
                public GetBytes ($chars: System.Array$1<number>, $index: number, $count: number) : System.Array$1<number>
                public GetBytes ($chars: System.Array$1<number>, $charIndex: number, $charCount: number, $bytes: System.Array$1<number>, $byteIndex: number) : number
                public GetBytes ($s: string) : System.Array$1<number>
                public GetBytes ($s: string, $charIndex: number, $charCount: number, $bytes: System.Array$1<number>, $byteIndex: number) : number
                public GetCharCount ($bytes: System.Array$1<number>) : number
                public GetCharCount ($bytes: System.Array$1<number>, $index: number, $count: number) : number
                public GetChars ($bytes: System.Array$1<number>) : System.Array$1<number>
                public GetChars ($bytes: System.Array$1<number>, $index: number, $count: number) : System.Array$1<number>
                public GetChars ($bytes: System.Array$1<number>, $byteIndex: number, $byteCount: number, $chars: System.Array$1<number>, $charIndex: number) : number
                public IsAlwaysNormalized () : boolean
                public IsAlwaysNormalized ($form: System.Text.NormalizationForm) : boolean
                public GetDecoder () : System.Text.Decoder
                public GetEncoder () : System.Text.Encoder
                public GetMaxByteCount ($charCount: number) : number
                public GetMaxCharCount ($byteCount: number) : number
                public GetString ($bytes: System.Array$1<number>) : string
                public GetString ($bytes: System.Array$1<number>, $index: number, $count: number) : string
                public GetBytes ($s: string, $index: number, $count: number) : System.Array$1<number>
            }
            class Decoder extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class Encoder extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class EncodingProvider extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class EncoderFallback extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class DecoderFallback extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class EncodingInfo extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            enum NormalizationForm
            { FormC = 1, FormD = 2, FormKC = 5, FormKD = 6 }
        }
        namespace UnityEngine.Camera {
            interface CameraCallback
            { 
            (cam: UnityEngine.Camera) : void; 
            Invoke?: (cam: UnityEngine.Camera) => void;
            }
            var CameraCallback: { new (func: (cam: UnityEngine.Camera) => void): CameraCallback; }
            enum GateFitMode
            { Vertical = 1, Horizontal = 2, Fill = 3, Overscan = 4, None = 0 }
            enum MonoOrStereoscopicEye
            { Left = 0, Right = 1, Mono = 2 }
            class GateFitParameters extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            enum StereoscopicEye
            { Left = 0, Right = 1 }
            enum SceneViewFilterMode
            { Off = 0, ShowFiltered = 1 }
            class RenderRequest extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace UnityEngine.Rendering {
            /** Opaque object sorting mode of a Camera. */
            enum OpaqueSortMode
            { Default = 0, FrontToBack = 1, NoDistanceSort = 2 }
            /** Defines a place in camera's rendering to attach Rendering.CommandBuffer objects to. */
            enum CameraEvent
            { BeforeDepthTexture = 0, AfterDepthTexture = 1, BeforeDepthNormalsTexture = 2, AfterDepthNormalsTexture = 3, BeforeGBuffer = 4, AfterGBuffer = 5, BeforeLighting = 6, AfterLighting = 7, BeforeFinalPass = 8, AfterFinalPass = 9, BeforeForwardOpaque = 10, AfterForwardOpaque = 11, BeforeImageEffectsOpaque = 12, AfterImageEffectsOpaque = 13, BeforeSkybox = 14, AfterSkybox = 15, BeforeForwardAlpha = 16, AfterForwardAlpha = 17, BeforeImageEffects = 18, AfterImageEffects = 19, AfterEverything = 20, BeforeReflections = 21, AfterReflections = 22, BeforeHaloAndLensFlares = 23, AfterHaloAndLensFlares = 24 }
            /** List of graphics commands to execute. */
            class CommandBuffer extends System.Object implements System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
            /** Describes the desired characteristics with respect to prioritisation and load balancing of the queue that a command buffer being submitted via Graphics.ExecuteCommandBufferAsync or [[ScriptableRenderContext.ExecuteCommandBufferAsync] should be sent to. */
            enum ComputeQueueType
            { Default = 0, Background = 1, Urgent = 2 }
            /** Parameters that configure a culling operation in the Scriptable Render Pipeline. */
            class ScriptableCullingParameters extends System.ValueType implements System.IEquatable$1<UnityEngine.Rendering.ScriptableCullingParameters>
            {
                protected [__keep_incompatibility]: never;
            }
            /** Texture "dimension" (type). */
            enum TextureDimension
            { Unknown = -1, None = 0, Any = 1, Tex2D = 2, Tex3D = 3, Cube = 4, Tex2DArray = 5, CubeArray = 6 }
            /** Graphics device API type. */
            enum GraphicsDeviceType
            { OpenGL2 = 0, Direct3D9 = 1, Direct3D11 = 2, PlayStation3 = 3, Null = 4, Xbox360 = 6, OpenGLES2 = 8, OpenGLES3 = 11, PlayStationVita = 12, PlayStation4 = 13, XboxOne = 14, PlayStationMobile = 15, Metal = 16, OpenGLCore = 17, Direct3D12 = 18, N3DS = 19, Vulkan = 21, Switch = 22, XboxOneD3D12 = 23, GameCoreXboxOne = 24, GameCoreScarlett = -1, GameCoreXboxSeries = 25, PlayStation5 = 26, PlayStation5NGGC = 27 }
            /** Options for the application's actual rendering threading mode. */
            enum RenderingThreadingMode
            { Direct = 0, SingleThreaded = 1, MultiThreaded = 2, LegacyJobified = 3, NativeGraphicsJobs = 4, NativeGraphicsJobsWithoutRenderThread = 5 }
            /** Support for various Graphics.CopyTexture cases. */
            enum CopyTextureSupport
            { None = 0, Basic = 1, Copy3D = 2, DifferentTypes = 4, TextureToRT = 8, RTToTexture = 16 }
            /** Data type of a VertexAttribute. */
            enum VertexAttributeFormat
            { Float32 = 0, Float16 = 1, UNorm8 = 2, SNorm8 = 3, UNorm16 = 4, SNorm16 = 5, UInt8 = 6, SInt8 = 7, UInt16 = 8, SInt16 = 9, UInt32 = 10, SInt32 = 11 }
            /** Represents a global shader keyword. */
            class GlobalKeyword extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            /** Represents the local keyword space of a Shader or ComputeShader. */
            class LocalKeywordSpace extends System.ValueType implements System.IEquatable$1<UnityEngine.Rendering.LocalKeywordSpace>
            {
                protected [__keep_incompatibility]: never;
            }
            /** Shader tag ids are used to refer to various names in shaders. */
            class ShaderTagId extends System.ValueType implements System.IEquatable$1<UnityEngine.Rendering.ShaderTagId>
            {
                protected [__keep_incompatibility]: never;
            }
            /** Types of data that you can encapsulate within a render texture. */
            enum RenderTextureSubElement
            { Color = 0, Depth = 1, Stencil = 2, Default = 3 }
            /** Type of a given shader property. */
            enum ShaderPropertyType
            { Color = 0, Vector = 1, Float = 2, Range = 3, Texture = 4, Int = 5 }
            /** Flags that control how a shader property behaves. */
            enum ShaderPropertyFlags
            { None = 0, HideInInspector = 1, PerRendererData = 2, NoScaleOffset = 4, Normal = 8, HDR = 16, Gamma = 32, NonModifiableTextureData = 64, MainTexture = 128, MainColor = 256 }
            enum ShaderHardwareTier
            { Tier1 = 0, Tier2 = 1, Tier3 = 2 }
            /** Represents a shader keyword declared in a shader source file. */
            class LocalKeyword extends System.ValueType implements System.IEquatable$1<UnityEngine.Rendering.LocalKeyword>
            {
                protected [__keep_incompatibility]: never;
            }
            /** How shadows are cast from this object. */
            enum ShadowCastingMode
            { Off = 0, On = 1, TwoSided = 2, ShadowsOnly = 3 }
            /** Light probe interpolation type. */
            enum LightProbeUsage
            { Off = 0, BlendProbes = 1, UseProxyVolume = 2, CustomProvided = 4 }
            /** Reflection Probe usage. */
            enum ReflectionProbeUsage
            { Off = 0, BlendProbes = 1, BlendProbesAndSkybox = 2, Simple = 3 }
            /** ReflectionProbeBlendInfo contains information required for blending probes. */
            class ReflectionProbeBlendInfo extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace UnityEngine.SceneManagement {
            /** Run-time data structure for *.unity file. */
            class Scene extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace UnityEngine.UI {
            class HorizontalLayoutGroup extends UnityEngine.UI.HorizontalOrVerticalLayoutGroup implements UnityEngine.UI.ILayoutGroup, UnityEngine.UI.ILayoutElement, UnityEngine.UI.ILayoutController
            {
                protected [__keep_incompatibility]: never;
            }
            class HorizontalOrVerticalLayoutGroup extends UnityEngine.UI.LayoutGroup implements UnityEngine.UI.ILayoutGroup, UnityEngine.UI.ILayoutElement, UnityEngine.UI.ILayoutController
            {
                protected [__keep_incompatibility]: never;
            }
            class LayoutGroup extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.UI.ILayoutGroup, UnityEngine.UI.ILayoutElement, UnityEngine.UI.ILayoutController
            {
                protected [__keep_incompatibility]: never;
            }
            interface ILayoutGroup extends UnityEngine.UI.ILayoutController
            {
            }
            interface ILayoutController
            {
            }
            interface ILayoutElement
            {
            }
            class Graphic extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.UI.ICanvasElement
            {
                protected [__keep_incompatibility]: never;
                public static get defaultGraphicMaterial(): UnityEngine.Material;
                public get color(): UnityEngine.Color;
                public set color(value: UnityEngine.Color);
                public get raycastTarget(): boolean;
                public set raycastTarget(value: boolean);
                public get raycastPadding(): UnityEngine.Vector4;
                public set raycastPadding(value: UnityEngine.Vector4);
                public get depth(): number;
                public get rectTransform(): UnityEngine.RectTransform;
                public get canvas(): UnityEngine.Canvas;
                public get canvasRenderer(): UnityEngine.CanvasRenderer;
                public get defaultMaterial(): UnityEngine.Material;
                public get material(): UnityEngine.Material;
                public set material(value: UnityEngine.Material);
                public get materialForRendering(): UnityEngine.Material;
                public get mainTexture(): UnityEngine.Texture;
                public SetAllDirty () : void
                public SetLayoutDirty () : void
                public SetVerticesDirty () : void
                public SetMaterialDirty () : void
                public OnCullingChanged () : void
                public Rebuild ($update: UnityEngine.UI.CanvasUpdate) : void
                public LayoutComplete () : void
                public GraphicUpdateComplete () : void
                public OnRebuildRequested () : void
                public SetNativeSize () : void
                public Raycast ($sp: UnityEngine.Vector2, $eventCamera: UnityEngine.Camera) : boolean
                public PixelAdjustPoint ($point: UnityEngine.Vector2) : UnityEngine.Vector2
                public GetPixelAdjustedRect () : UnityEngine.Rect
                public CrossFadeColor ($targetColor: UnityEngine.Color, $duration: number, $ignoreTimeScale: boolean, $useAlpha: boolean) : void
                public CrossFadeColor ($targetColor: UnityEngine.Color, $duration: number, $ignoreTimeScale: boolean, $useAlpha: boolean, $useRGB: boolean) : void
                public CrossFadeAlpha ($alpha: number, $duration: number, $ignoreTimeScale: boolean) : void
                public RegisterDirtyLayoutCallback ($action: UnityEngine.Events.UnityAction) : void
                public UnregisterDirtyLayoutCallback ($action: UnityEngine.Events.UnityAction) : void
                public RegisterDirtyVerticesCallback ($action: UnityEngine.Events.UnityAction) : void
                public UnregisterDirtyVerticesCallback ($action: UnityEngine.Events.UnityAction) : void
                public RegisterDirtyMaterialCallback ($action: UnityEngine.Events.UnityAction) : void
                public UnregisterDirtyMaterialCallback ($action: UnityEngine.Events.UnityAction) : void
            }
            interface ICanvasElement
            {
            }
            enum CanvasUpdate
            { Prelayout = 0, Layout = 1, PostLayout = 2, PreRender = 3, LatePreRender = 4, MaxUpdateValue = 5 }
            class MaskableGraphic extends UnityEngine.UI.Graphic implements UnityEngine.UI.IMaterialModifier, UnityEngine.UI.IMaskable, UnityEngine.UI.ICanvasElement, UnityEngine.UI.IClippable
            {
                protected [__keep_incompatibility]: never;
                public get onCullStateChanged(): UnityEngine.UI.MaskableGraphic.CullStateChangedEvent;
                public set onCullStateChanged(value: UnityEngine.UI.MaskableGraphic.CullStateChangedEvent);
                public get maskable(): boolean;
                public set maskable(value: boolean);
                public get isMaskingGraphic(): boolean;
                public set isMaskingGraphic(value: boolean);
                public GetModifiedMaterial ($baseMaterial: UnityEngine.Material) : UnityEngine.Material
                public Cull ($clipRect: UnityEngine.Rect, $validRect: boolean) : void
                public SetClipRect ($clipRect: UnityEngine.Rect, $validRect: boolean) : void
                public SetClipSoftness ($clipSoftness: UnityEngine.Vector2) : void
                public RecalculateClipping () : void
                public RecalculateMasking () : void
            }
            interface IMaterialModifier
            {
            }
            interface IMaskable
            {
            }
            interface IClippable
            {
            }
            class Image extends UnityEngine.UI.MaskableGraphic implements UnityEngine.UI.IMaterialModifier, UnityEngine.UI.IMaskable, UnityEngine.UI.ICanvasElement, UnityEngine.UI.ILayoutElement, UnityEngine.UI.IClippable, UnityEngine.ICanvasRaycastFilter, UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
                public get sprite(): UnityEngine.Sprite;
                public set sprite(value: UnityEngine.Sprite);
                public get overrideSprite(): UnityEngine.Sprite;
                public set overrideSprite(value: UnityEngine.Sprite);
                public get type(): UnityEngine.UI.Image.Type;
                public set type(value: UnityEngine.UI.Image.Type);
                public get preserveAspect(): boolean;
                public set preserveAspect(value: boolean);
                public get fillCenter(): boolean;
                public set fillCenter(value: boolean);
                public get fillMethod(): UnityEngine.UI.Image.FillMethod;
                public set fillMethod(value: UnityEngine.UI.Image.FillMethod);
                public get fillAmount(): number;
                public set fillAmount(value: number);
                public get fillClockwise(): boolean;
                public set fillClockwise(value: boolean);
                public get fillOrigin(): number;
                public set fillOrigin(value: number);
                public get alphaHitTestMinimumThreshold(): number;
                public set alphaHitTestMinimumThreshold(value: number);
                public get useSpriteMesh(): boolean;
                public set useSpriteMesh(value: boolean);
                public static get defaultETC1GraphicMaterial(): UnityEngine.Material;
                public get mainTexture(): UnityEngine.Texture;
                public get hasBorder(): boolean;
                public get pixelsPerUnitMultiplier(): number;
                public set pixelsPerUnitMultiplier(value: number);
                public get pixelsPerUnit(): number;
                public get material(): UnityEngine.Material;
                public set material(value: UnityEngine.Material);
                public get minWidth(): number;
                public get preferredWidth(): number;
                public get flexibleWidth(): number;
                public get minHeight(): number;
                public get preferredHeight(): number;
                public get flexibleHeight(): number;
                public get layoutPriority(): number;
                public DisableSpriteOptimizations () : void
                public OnBeforeSerialize () : void
                public OnAfterDeserialize () : void
                public CalculateLayoutInputHorizontal () : void
                public CalculateLayoutInputVertical () : void
                public IsRaycastLocationValid ($screenPoint: UnityEngine.Vector2, $eventCamera: UnityEngine.Camera) : boolean
            }
            class LayoutRebuilder extends System.Object implements UnityEngine.UI.ICanvasElement
            {
                protected [__keep_incompatibility]: never;
                public get transform(): UnityEngine.Transform;
                public IsDestroyed () : boolean
                public static ForceRebuildLayoutImmediate ($layoutRoot: UnityEngine.RectTransform) : void
                public Rebuild ($executing: UnityEngine.UI.CanvasUpdate) : void
                public static MarkLayoutForRebuild ($rect: UnityEngine.RectTransform) : void
                public LayoutComplete () : void
                public GraphicUpdateComplete () : void
                public constructor ()
            }
            class Selectable extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IMoveHandler
            {
                protected [__keep_incompatibility]: never;
                public static get allSelectablesArray(): System.Array$1<UnityEngine.UI.Selectable>;
                public static get allSelectableCount(): number;
                public get navigation(): UnityEngine.UI.Navigation;
                public set navigation(value: UnityEngine.UI.Navigation);
                public get transition(): UnityEngine.UI.Selectable.Transition;
                public set transition(value: UnityEngine.UI.Selectable.Transition);
                public get colors(): UnityEngine.UI.ColorBlock;
                public set colors(value: UnityEngine.UI.ColorBlock);
                public get spriteState(): UnityEngine.UI.SpriteState;
                public set spriteState(value: UnityEngine.UI.SpriteState);
                public get animationTriggers(): UnityEngine.UI.AnimationTriggers;
                public set animationTriggers(value: UnityEngine.UI.AnimationTriggers);
                public get targetGraphic(): UnityEngine.UI.Graphic;
                public set targetGraphic(value: UnityEngine.UI.Graphic);
                public get interactable(): boolean;
                public set interactable(value: boolean);
                public get image(): UnityEngine.UI.Image;
                public set image(value: UnityEngine.UI.Image);
                public get animator(): UnityEngine.Animator;
                public static AllSelectablesNoAlloc ($selectables: System.Array$1<UnityEngine.UI.Selectable>) : number
                public IsInteractable () : boolean
                public FindSelectable ($dir: UnityEngine.Vector3) : UnityEngine.UI.Selectable
                public FindSelectableOnLeft () : UnityEngine.UI.Selectable
                public FindSelectableOnRight () : UnityEngine.UI.Selectable
                public FindSelectableOnUp () : UnityEngine.UI.Selectable
                public FindSelectableOnDown () : UnityEngine.UI.Selectable
                public OnMove ($eventData: UnityEngine.EventSystems.AxisEventData) : void
                public OnPointerDown ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnPointerUp ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnPointerEnter ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnPointerExit ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnSelect ($eventData: UnityEngine.EventSystems.BaseEventData) : void
                public OnDeselect ($eventData: UnityEngine.EventSystems.BaseEventData) : void
                public Select () : void
            }
            class Navigation extends System.ValueType implements System.IEquatable$1<UnityEngine.UI.Navigation>
            {
                protected [__keep_incompatibility]: never;
            }
            class ColorBlock extends System.ValueType implements System.IEquatable$1<UnityEngine.UI.ColorBlock>
            {
                protected [__keep_incompatibility]: never;
            }
            class SpriteState extends System.ValueType implements System.IEquatable$1<UnityEngine.UI.SpriteState>
            {
                protected [__keep_incompatibility]: never;
            }
            class AnimationTriggers extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class Button extends UnityEngine.UI.Selectable implements UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IMoveHandler, UnityEngine.EventSystems.ISubmitHandler, UnityEngine.EventSystems.IPointerClickHandler
            {
                protected [__keep_incompatibility]: never;
                public get onClick(): UnityEngine.UI.Button.ButtonClickedEvent;
                public set onClick(value: UnityEngine.UI.Button.ButtonClickedEvent);
                public OnPointerClick ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnSubmit ($eventData: UnityEngine.EventSystems.BaseEventData) : void
            }
            class InputField extends UnityEngine.UI.Selectable implements UnityEngine.EventSystems.IBeginDragHandler, UnityEngine.EventSystems.IDragHandler, UnityEngine.EventSystems.IEndDragHandler, UnityEngine.UI.ICanvasElement, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.IUpdateSelectedHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IMoveHandler, UnityEngine.UI.ILayoutElement, UnityEngine.EventSystems.ISubmitHandler, UnityEngine.EventSystems.IPointerClickHandler
            {
                protected [__keep_incompatibility]: never;
                public get shouldHideMobileInput(): boolean;
                public set shouldHideMobileInput(value: boolean);
                public get shouldActivateOnSelect(): boolean;
                public set shouldActivateOnSelect(value: boolean);
                public get text(): string;
                public set text(value: string);
                public get isFocused(): boolean;
                public get caretBlinkRate(): number;
                public set caretBlinkRate(value: number);
                public get caretWidth(): number;
                public set caretWidth(value: number);
                public get textComponent(): UnityEngine.UI.Text;
                public set textComponent(value: UnityEngine.UI.Text);
                public get placeholder(): UnityEngine.UI.Graphic;
                public set placeholder(value: UnityEngine.UI.Graphic);
                public get caretColor(): UnityEngine.Color;
                public set caretColor(value: UnityEngine.Color);
                public get customCaretColor(): boolean;
                public set customCaretColor(value: boolean);
                public get selectionColor(): UnityEngine.Color;
                public set selectionColor(value: UnityEngine.Color);
                public get onEndEdit(): UnityEngine.UI.InputField.EndEditEvent;
                public set onEndEdit(value: UnityEngine.UI.InputField.EndEditEvent);
                public get onSubmit(): UnityEngine.UI.InputField.SubmitEvent;
                public set onSubmit(value: UnityEngine.UI.InputField.SubmitEvent);
                public get onValueChanged(): UnityEngine.UI.InputField.OnChangeEvent;
                public set onValueChanged(value: UnityEngine.UI.InputField.OnChangeEvent);
                public get onValidateInput(): UnityEngine.UI.InputField.OnValidateInput;
                public set onValidateInput(value: UnityEngine.UI.InputField.OnValidateInput);
                public get characterLimit(): number;
                public set characterLimit(value: number);
                public get contentType(): UnityEngine.UI.InputField.ContentType;
                public set contentType(value: UnityEngine.UI.InputField.ContentType);
                public get lineType(): UnityEngine.UI.InputField.LineType;
                public set lineType(value: UnityEngine.UI.InputField.LineType);
                public get inputType(): UnityEngine.UI.InputField.InputType;
                public set inputType(value: UnityEngine.UI.InputField.InputType);
                public get touchScreenKeyboard(): UnityEngine.TouchScreenKeyboard;
                public get keyboardType(): UnityEngine.TouchScreenKeyboardType;
                public set keyboardType(value: UnityEngine.TouchScreenKeyboardType);
                public get characterValidation(): UnityEngine.UI.InputField.CharacterValidation;
                public set characterValidation(value: UnityEngine.UI.InputField.CharacterValidation);
                public get readOnly(): boolean;
                public set readOnly(value: boolean);
                public get multiLine(): boolean;
                public get asteriskChar(): number;
                public set asteriskChar(value: number);
                public get wasCanceled(): boolean;
                public get caretPosition(): number;
                public set caretPosition(value: number);
                public get selectionAnchorPosition(): number;
                public set selectionAnchorPosition(value: number);
                public get selectionFocusPosition(): number;
                public set selectionFocusPosition(value: number);
                public get minWidth(): number;
                public get preferredWidth(): number;
                public get flexibleWidth(): number;
                public get minHeight(): number;
                public get preferredHeight(): number;
                public get flexibleHeight(): number;
                public get layoutPriority(): number;
                public SetTextWithoutNotify ($input: string) : void
                public MoveTextEnd ($shift: boolean) : void
                public MoveTextStart ($shift: boolean) : void
                public OnBeginDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnEndDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public ProcessEvent ($e: UnityEngine.Event) : void
                public OnUpdateSelected ($eventData: UnityEngine.EventSystems.BaseEventData) : void
                public ForceLabelUpdate () : void
                public Rebuild ($update: UnityEngine.UI.CanvasUpdate) : void
                public LayoutComplete () : void
                public GraphicUpdateComplete () : void
                public ActivateInputField () : void
                public OnPointerClick ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public DeactivateInputField () : void
                public OnSubmit ($eventData: UnityEngine.EventSystems.BaseEventData) : void
                public CalculateLayoutInputHorizontal () : void
                public CalculateLayoutInputVertical () : void
            }
            class Text extends UnityEngine.UI.MaskableGraphic implements UnityEngine.UI.IMaterialModifier, UnityEngine.UI.IMaskable, UnityEngine.UI.ICanvasElement, UnityEngine.UI.ILayoutElement, UnityEngine.UI.IClippable
            {
                protected [__keep_incompatibility]: never;
                public get cachedTextGenerator(): UnityEngine.TextGenerator;
                public get cachedTextGeneratorForLayout(): UnityEngine.TextGenerator;
                public get mainTexture(): UnityEngine.Texture;
                public get font(): UnityEngine.Font;
                public set font(value: UnityEngine.Font);
                public get text(): string;
                public set text(value: string);
                public get supportRichText(): boolean;
                public set supportRichText(value: boolean);
                public get resizeTextForBestFit(): boolean;
                public set resizeTextForBestFit(value: boolean);
                public get resizeTextMinSize(): number;
                public set resizeTextMinSize(value: number);
                public get resizeTextMaxSize(): number;
                public set resizeTextMaxSize(value: number);
                public get alignment(): UnityEngine.TextAnchor;
                public set alignment(value: UnityEngine.TextAnchor);
                public get alignByGeometry(): boolean;
                public set alignByGeometry(value: boolean);
                public get fontSize(): number;
                public set fontSize(value: number);
                public get horizontalOverflow(): UnityEngine.HorizontalWrapMode;
                public set horizontalOverflow(value: UnityEngine.HorizontalWrapMode);
                public get verticalOverflow(): UnityEngine.VerticalWrapMode;
                public set verticalOverflow(value: UnityEngine.VerticalWrapMode);
                public get lineSpacing(): number;
                public set lineSpacing(value: number);
                public get fontStyle(): UnityEngine.FontStyle;
                public set fontStyle(value: UnityEngine.FontStyle);
                public get pixelsPerUnit(): number;
                public get minWidth(): number;
                public get preferredWidth(): number;
                public get flexibleWidth(): number;
                public get minHeight(): number;
                public get preferredHeight(): number;
                public get flexibleHeight(): number;
                public get layoutPriority(): number;
                public FontTextureChanged () : void
                public GetGenerationSettings ($extents: UnityEngine.Vector2) : UnityEngine.TextGenerationSettings
                public static GetTextAnchorPivot ($anchor: UnityEngine.TextAnchor) : UnityEngine.Vector2
                public CalculateLayoutInputHorizontal () : void
                public CalculateLayoutInputVertical () : void
            }
            class Toggle extends UnityEngine.UI.Selectable implements UnityEngine.UI.ICanvasElement, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IMoveHandler, UnityEngine.EventSystems.ISubmitHandler, UnityEngine.EventSystems.IPointerClickHandler
            {
                protected [__keep_incompatibility]: never;
                public toggleTransition : UnityEngine.UI.Toggle.ToggleTransition
                public graphic : UnityEngine.UI.Graphic
                public onValueChanged : UnityEngine.UI.Toggle.ToggleEvent
                public get group(): UnityEngine.UI.ToggleGroup;
                public set group(value: UnityEngine.UI.ToggleGroup);
                public get isOn(): boolean;
                public set isOn(value: boolean);
                public Rebuild ($executing: UnityEngine.UI.CanvasUpdate) : void
                public LayoutComplete () : void
                public GraphicUpdateComplete () : void
                public SetIsOnWithoutNotify ($value: boolean) : void
                public OnPointerClick ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnSubmit ($eventData: UnityEngine.EventSystems.BaseEventData) : void
            }
            class ToggleGroup extends UnityEngine.EventSystems.UIBehaviour
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace UnityEngine.EventSystems {
            class UIBehaviour extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
                public IsActive () : boolean
                public IsDestroyed () : boolean
            }
            class EventSystem extends UnityEngine.EventSystems.UIBehaviour
            {
                protected [__keep_incompatibility]: never;
                public static get current(): UnityEngine.EventSystems.EventSystem;
                public static set current(value: UnityEngine.EventSystems.EventSystem);
                public get sendNavigationEvents(): boolean;
                public set sendNavigationEvents(value: boolean);
                public get pixelDragThreshold(): number;
                public set pixelDragThreshold(value: number);
                public get currentInputModule(): UnityEngine.EventSystems.BaseInputModule;
                public get firstSelectedGameObject(): UnityEngine.GameObject;
                public set firstSelectedGameObject(value: UnityEngine.GameObject);
                public get currentSelectedGameObject(): UnityEngine.GameObject;
                public get isFocused(): boolean;
                public get alreadySelecting(): boolean;
                public UpdateModules () : void
                public SetSelectedGameObject ($selected: UnityEngine.GameObject, $pointer: UnityEngine.EventSystems.BaseEventData) : void
                public SetSelectedGameObject ($selected: UnityEngine.GameObject) : void
                public RaycastAll ($eventData: UnityEngine.EventSystems.PointerEventData, $raycastResults: System.Collections.Generic.List$1<UnityEngine.EventSystems.RaycastResult>) : void
                public IsPointerOverGameObject () : boolean
                public IsPointerOverGameObject ($pointerId: number) : boolean
                public static SetUITookitEventSystemOverride ($activeEventSystem: UnityEngine.EventSystems.EventSystem, $sendEvents?: boolean, $createPanelGameObjectsOnStart?: boolean) : void
            }
            class BaseInputModule extends UnityEngine.EventSystems.UIBehaviour
            {
                protected [__keep_incompatibility]: never;
            }
            class BaseEventData extends UnityEngine.EventSystems.AbstractEventData
            {
                protected [__keep_incompatibility]: never;
            }
            class AbstractEventData extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class PointerEventData extends UnityEngine.EventSystems.BaseEventData
            {
                protected [__keep_incompatibility]: never;
            }
            class RaycastResult extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            interface IEventSystemHandler
            {
            }
            interface IPointerEnterHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface ISelectHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IPointerExitHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IDeselectHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IPointerDownHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IPointerUpHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IMoveHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            class AxisEventData extends UnityEngine.EventSystems.BaseEventData
            {
                protected [__keep_incompatibility]: never;
            }
            interface ISubmitHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IPointerClickHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IBeginDragHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IDragHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IEndDragHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IUpdateSelectedHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
        }
        namespace UnityEngine.Events {
            /** Zero argument delegate used by UnityEvents. */
            interface UnityAction
            { 
            () : void; 
            Invoke?: () => void;
            }
            var UnityAction: { new (func: () => void): UnityAction; }
            class UnityEvent$1<T0> extends UnityEngine.Events.UnityEventBase implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
                public AddListener ($call: UnityEngine.Events.UnityAction$1<T0>) : void
                public RemoveListener ($call: UnityEngine.Events.UnityAction$1<T0>) : void
                public Invoke ($arg0: T0) : void
                public constructor ()
            }
            /** Abstract base class for UnityEvents. */
            class UnityEventBase extends System.Object implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
            }
            interface UnityAction$1<T0>
            { 
            (arg0: T0) : void; 
            Invoke?: (arg0: T0) => void;
            }
            /** A zero argument persistent callback that can be saved with the Scene. */
            class UnityEvent extends UnityEngine.Events.UnityEventBase implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
                /** Add a non persistent listener to the UnityEvent. * @param call Callback function.
                */
                public AddListener ($call: UnityEngine.Events.UnityAction) : void
                /** Remove a non persistent listener from the UnityEvent. If you have added the same listener multiple times, this method will remove all occurrences of it. * @param call Callback function.
                */
                public RemoveListener ($call: UnityEngine.Events.UnityAction) : void
                public Invoke () : void
                public constructor ()
            }
        }
        namespace UnityEngine.UI.MaskableGraphic {
            class CullStateChangedEvent extends UnityEngine.Events.UnityEvent$1<boolean> implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace UnityEngine.UI.Image {
            enum Type
            { Simple = 0, Sliced = 1, Tiled = 2, Filled = 3 }
            enum FillMethod
            { Horizontal = 0, Vertical = 1, Radial90 = 2, Radial180 = 3, Radial360 = 4 }
        }
        namespace System.Threading.Tasks {
            class TaskCompletionSource$1<TResult> extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public get Task(): System.Threading.Tasks.Task$1<TResult>;
                public TrySetException ($exception: System.Exception) : boolean
                public TrySetException ($exceptions: System.Collections.Generic.IEnumerable$1<System.Exception>) : boolean
                public SetException ($exception: System.Exception) : void
                public SetException ($exceptions: System.Collections.Generic.IEnumerable$1<System.Exception>) : void
                public TrySetResult ($result: TResult) : boolean
                public SetResult ($result: TResult) : void
                public TrySetCanceled () : boolean
                public TrySetCanceled ($cancellationToken: System.Threading.CancellationToken) : boolean
                public SetCanceled () : void
                public constructor ()
                public constructor ($creationOptions: System.Threading.Tasks.TaskCreationOptions)
                public constructor ($state: any)
                public constructor ($state: any, $creationOptions: System.Threading.Tasks.TaskCreationOptions)
            }
            class Task$1<TResult> extends System.Threading.Tasks.Task implements System.IAsyncResult, System.Threading.IThreadPoolWorkItem, System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
            class Task extends System.Object implements System.IAsyncResult, System.Threading.IThreadPoolWorkItem, System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
            enum TaskCreationOptions
            { None = 0, PreferFairness = 1, LongRunning = 2, AttachedToParent = 4, DenyChildAttach = 8, HideScheduler = 16, RunContinuationsAsynchronously = 64 }
        }
        namespace System.Threading {
            interface IThreadPoolWorkItem
            {
            }
            class CancellationToken extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace UnityEngine.Random {
            class State extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace Unity.Collections {
            class NativeArray$1<T> extends System.ValueType implements System.IEquatable$1<Unity.Collections.NativeArray$1<T>>, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace System.Globalization {
            enum DateTimeStyles
            { None = 0, AllowLeadingWhite = 1, AllowTrailingWhite = 2, AllowInnerWhite = 4, AllowWhiteSpaces = 7, NoCurrentDateDefault = 8, AdjustToUniversal = 16, AssumeLocal = 32, AssumeUniversal = 64, RoundtripKind = 128 }
            class Calendar extends System.Object implements System.ICloneable
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace TMPro {
            class TextMeshPro extends TMPro.TMP_Text implements UnityEngine.UI.IMaterialModifier, UnityEngine.UI.IMaskable, UnityEngine.UI.ICanvasElement, UnityEngine.UI.ILayoutElement, UnityEngine.UI.IClippable
            {
                protected [__keep_incompatibility]: never;
                public get sortingLayerID(): number;
                public set sortingLayerID(value: number);
                public get sortingOrder(): number;
                public set sortingOrder(value: number);
                public get autoSizeTextContainer(): boolean;
                public set autoSizeTextContainer(value: boolean);
                public get transform(): UnityEngine.Transform;
                public get renderer(): UnityEngine.Renderer;
                public get mesh(): UnityEngine.Mesh;
                public get meshFilter(): UnityEngine.MeshFilter;
                public get maskType(): TMPro.MaskingTypes;
                public set maskType(value: TMPro.MaskingTypes);
                public SetMask ($type: TMPro.MaskingTypes, $maskCoords: UnityEngine.Vector4) : void
                public SetMask ($type: TMPro.MaskingTypes, $maskCoords: UnityEngine.Vector4, $softnessX: number, $softnessY: number) : void
                public UpdateFontAsset () : void
                public CalculateLayoutInputHorizontal () : void
                public CalculateLayoutInputVertical () : void
                public constructor ()
            }
            class TMP_Text extends UnityEngine.UI.MaskableGraphic implements UnityEngine.UI.IMaterialModifier, UnityEngine.UI.IMaskable, UnityEngine.UI.ICanvasElement, UnityEngine.UI.IClippable
            {
                protected [__keep_incompatibility]: never;
                public get text(): string;
                public set text(value: string);
                public get textPreprocessor(): TMPro.ITextPreprocessor;
                public set textPreprocessor(value: TMPro.ITextPreprocessor);
                public get isRightToLeftText(): boolean;
                public set isRightToLeftText(value: boolean);
                public get font(): TMPro.TMP_FontAsset;
                public set font(value: TMPro.TMP_FontAsset);
                public get fontSharedMaterial(): UnityEngine.Material;
                public set fontSharedMaterial(value: UnityEngine.Material);
                public get fontSharedMaterials(): System.Array$1<UnityEngine.Material>;
                public set fontSharedMaterials(value: System.Array$1<UnityEngine.Material>);
                public get fontMaterial(): UnityEngine.Material;
                public set fontMaterial(value: UnityEngine.Material);
                public get fontMaterials(): System.Array$1<UnityEngine.Material>;
                public set fontMaterials(value: System.Array$1<UnityEngine.Material>);
                public get color(): UnityEngine.Color;
                public set color(value: UnityEngine.Color);
                public get alpha(): number;
                public set alpha(value: number);
                public get enableVertexGradient(): boolean;
                public set enableVertexGradient(value: boolean);
                public get colorGradient(): TMPro.VertexGradient;
                public set colorGradient(value: TMPro.VertexGradient);
                public get colorGradientPreset(): TMPro.TMP_ColorGradient;
                public set colorGradientPreset(value: TMPro.TMP_ColorGradient);
                public get spriteAsset(): TMPro.TMP_SpriteAsset;
                public set spriteAsset(value: TMPro.TMP_SpriteAsset);
                public get tintAllSprites(): boolean;
                public set tintAllSprites(value: boolean);
                public get styleSheet(): TMPro.TMP_StyleSheet;
                public set styleSheet(value: TMPro.TMP_StyleSheet);
                public get textStyle(): TMPro.TMP_Style;
                public set textStyle(value: TMPro.TMP_Style);
                public get overrideColorTags(): boolean;
                public set overrideColorTags(value: boolean);
                public get faceColor(): UnityEngine.Color32;
                public set faceColor(value: UnityEngine.Color32);
                public get outlineColor(): UnityEngine.Color32;
                public set outlineColor(value: UnityEngine.Color32);
                public get outlineWidth(): number;
                public set outlineWidth(value: number);
                public get fontSize(): number;
                public set fontSize(value: number);
                public get fontWeight(): TMPro.FontWeight;
                public set fontWeight(value: TMPro.FontWeight);
                public get pixelsPerUnit(): number;
                public get enableAutoSizing(): boolean;
                public set enableAutoSizing(value: boolean);
                public get fontSizeMin(): number;
                public set fontSizeMin(value: number);
                public get fontSizeMax(): number;
                public set fontSizeMax(value: number);
                public get fontStyle(): TMPro.FontStyles;
                public set fontStyle(value: TMPro.FontStyles);
                public get isUsingBold(): boolean;
                public get horizontalAlignment(): TMPro.HorizontalAlignmentOptions;
                public set horizontalAlignment(value: TMPro.HorizontalAlignmentOptions);
                public get verticalAlignment(): TMPro.VerticalAlignmentOptions;
                public set verticalAlignment(value: TMPro.VerticalAlignmentOptions);
                public get alignment(): TMPro.TextAlignmentOptions;
                public set alignment(value: TMPro.TextAlignmentOptions);
                public get characterSpacing(): number;
                public set characterSpacing(value: number);
                public get wordSpacing(): number;
                public set wordSpacing(value: number);
                public get lineSpacing(): number;
                public set lineSpacing(value: number);
                public get lineSpacingAdjustment(): number;
                public set lineSpacingAdjustment(value: number);
                public get paragraphSpacing(): number;
                public set paragraphSpacing(value: number);
                public get characterWidthAdjustment(): number;
                public set characterWidthAdjustment(value: number);
                public get enableWordWrapping(): boolean;
                public set enableWordWrapping(value: boolean);
                public get wordWrappingRatios(): number;
                public set wordWrappingRatios(value: number);
                public get overflowMode(): TMPro.TextOverflowModes;
                public set overflowMode(value: TMPro.TextOverflowModes);
                public get isTextOverflowing(): boolean;
                public get firstOverflowCharacterIndex(): number;
                public get linkedTextComponent(): TMPro.TMP_Text;
                public set linkedTextComponent(value: TMPro.TMP_Text);
                public get isTextTruncated(): boolean;
                public get enableKerning(): boolean;
                public set enableKerning(value: boolean);
                public get extraPadding(): boolean;
                public set extraPadding(value: boolean);
                public get richText(): boolean;
                public set richText(value: boolean);
                public get parseCtrlCharacters(): boolean;
                public set parseCtrlCharacters(value: boolean);
                public get isOverlay(): boolean;
                public set isOverlay(value: boolean);
                public get isOrthographic(): boolean;
                public set isOrthographic(value: boolean);
                public get enableCulling(): boolean;
                public set enableCulling(value: boolean);
                public get ignoreVisibility(): boolean;
                public set ignoreVisibility(value: boolean);
                public get horizontalMapping(): TMPro.TextureMappingOptions;
                public set horizontalMapping(value: TMPro.TextureMappingOptions);
                public get verticalMapping(): TMPro.TextureMappingOptions;
                public set verticalMapping(value: TMPro.TextureMappingOptions);
                public get mappingUvLineOffset(): number;
                public set mappingUvLineOffset(value: number);
                public get renderMode(): TMPro.TextRenderFlags;
                public set renderMode(value: TMPro.TextRenderFlags);
                public get geometrySortingOrder(): TMPro.VertexSortingOrder;
                public set geometrySortingOrder(value: TMPro.VertexSortingOrder);
                public get isTextObjectScaleStatic(): boolean;
                public set isTextObjectScaleStatic(value: boolean);
                public get vertexBufferAutoSizeReduction(): boolean;
                public set vertexBufferAutoSizeReduction(value: boolean);
                public get firstVisibleCharacter(): number;
                public set firstVisibleCharacter(value: number);
                public get maxVisibleCharacters(): number;
                public set maxVisibleCharacters(value: number);
                public get maxVisibleWords(): number;
                public set maxVisibleWords(value: number);
                public get maxVisibleLines(): number;
                public set maxVisibleLines(value: number);
                public get useMaxVisibleDescender(): boolean;
                public set useMaxVisibleDescender(value: boolean);
                public get pageToDisplay(): number;
                public set pageToDisplay(value: number);
                public get margin(): UnityEngine.Vector4;
                public set margin(value: UnityEngine.Vector4);
                public get textInfo(): TMPro.TMP_TextInfo;
                public get havePropertiesChanged(): boolean;
                public set havePropertiesChanged(value: boolean);
                public get isUsingLegacyAnimationComponent(): boolean;
                public set isUsingLegacyAnimationComponent(value: boolean);
                public get transform(): UnityEngine.Transform;
                public get rectTransform(): UnityEngine.RectTransform;
                public get autoSizeTextContainer(): boolean;
                public set autoSizeTextContainer(value: boolean);
                public get mesh(): UnityEngine.Mesh;
                public get isVolumetricText(): boolean;
                public set isVolumetricText(value: boolean);
                public get bounds(): UnityEngine.Bounds;
                public get textBounds(): UnityEngine.Bounds;
                public get flexibleHeight(): number;
                public get flexibleWidth(): number;
                public get minWidth(): number;
                public get minHeight(): number;
                public get maxWidth(): number;
                public get maxHeight(): number;
                public get preferredWidth(): number;
                public get preferredHeight(): number;
                public get renderedWidth(): number;
                public get renderedHeight(): number;
                public get layoutPriority(): number;
                public static add_OnFontAssetRequest ($value: System.Func$3<number, string, TMPro.TMP_FontAsset>) : void
                public static remove_OnFontAssetRequest ($value: System.Func$3<number, string, TMPro.TMP_FontAsset>) : void
                public static add_OnSpriteAssetRequest ($value: System.Func$3<number, string, TMPro.TMP_SpriteAsset>) : void
                public static remove_OnSpriteAssetRequest ($value: System.Func$3<number, string, TMPro.TMP_SpriteAsset>) : void
                public add_OnPreRenderText ($value: System.Action$1<TMPro.TMP_TextInfo>) : void
                public remove_OnPreRenderText ($value: System.Action$1<TMPro.TMP_TextInfo>) : void
                public ForceMeshUpdate ($ignoreActiveState?: boolean, $forceTextReparsing?: boolean) : void
                public UpdateGeometry ($mesh: UnityEngine.Mesh, $index: number) : void
                public UpdateVertexData ($flags: TMPro.TMP_VertexDataUpdateFlags) : void
                public UpdateVertexData () : void
                public SetVertices ($vertices: System.Array$1<UnityEngine.Vector3>) : void
                public UpdateMeshPadding () : void
                public SetText ($sourceText: string, $syncTextInputBox?: boolean) : void
                public SetText ($sourceText: string, $arg0: number) : void
                public SetText ($sourceText: string, $arg0: number, $arg1: number) : void
                public SetText ($sourceText: string, $arg0: number, $arg1: number, $arg2: number) : void
                public SetText ($sourceText: string, $arg0: number, $arg1: number, $arg2: number, $arg3: number) : void
                public SetText ($sourceText: string, $arg0: number, $arg1: number, $arg2: number, $arg3: number, $arg4: number) : void
                public SetText ($sourceText: string, $arg0: number, $arg1: number, $arg2: number, $arg3: number, $arg4: number, $arg5: number) : void
                public SetText ($sourceText: string, $arg0: number, $arg1: number, $arg2: number, $arg3: number, $arg4: number, $arg5: number, $arg6: number) : void
                public SetText ($sourceText: string, $arg0: number, $arg1: number, $arg2: number, $arg3: number, $arg4: number, $arg5: number, $arg6: number, $arg7: number) : void
                public SetText ($sourceText: System.Text.StringBuilder) : void
                public SetText ($sourceText: System.Array$1<number>) : void
                public SetText ($sourceText: System.Array$1<number>, $start: number, $length: number) : void
                public SetCharArray ($sourceText: System.Array$1<number>) : void
                public SetCharArray ($sourceText: System.Array$1<number>, $start: number, $length: number) : void
                public GetPreferredValues () : UnityEngine.Vector2
                public GetPreferredValues ($width: number, $height: number) : UnityEngine.Vector2
                public GetPreferredValues ($text: string) : UnityEngine.Vector2
                public GetPreferredValues ($text: string, $width: number, $height: number) : UnityEngine.Vector2
                public GetRenderedValues () : UnityEngine.Vector2
                public GetRenderedValues ($onlyVisibleCharacters: boolean) : UnityEngine.Vector2
                public GetTextInfo ($text: string) : TMPro.TMP_TextInfo
                public ComputeMarginSize () : void
                public ClearMesh () : void
                public ClearMesh ($uploadGeometry: boolean) : void
                public GetParsedText () : string
            }
            class TextContainer extends UnityEngine.EventSystems.UIBehaviour
            {
                protected [__keep_incompatibility]: never;
            }
            enum MaskingTypes
            { MaskOff = 0, MaskHard = 1, MaskSoft = 2 }
            class TMP_TextInfo extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            enum TMP_VertexDataUpdateFlags
            { None = 0, Vertices = 1, Uv0 = 2, Uv2 = 4, Uv4 = 8, Colors32 = 16, All = 255 }
            class TextMeshProUGUI extends TMPro.TMP_Text implements UnityEngine.UI.IMaterialModifier, UnityEngine.UI.IMaskable, UnityEngine.UI.ICanvasElement, UnityEngine.UI.ILayoutElement, UnityEngine.UI.IClippable
            {
                protected [__keep_incompatibility]: never;
                public get materialForRendering(): UnityEngine.Material;
                public get autoSizeTextContainer(): boolean;
                public set autoSizeTextContainer(value: boolean);
                public get mesh(): UnityEngine.Mesh;
                public get canvasRenderer(): UnityEngine.CanvasRenderer;
                public get maskOffset(): UnityEngine.Vector4;
                public set maskOffset(value: UnityEngine.Vector4);
                public CalculateLayoutInputHorizontal () : void
                public CalculateLayoutInputVertical () : void
                public UpdateFontAsset () : void
                public constructor ()
            }
            interface ITextPreprocessor
            {
            }
            class TMP_FontAsset extends TMPro.TMP_Asset
            {
                protected [__keep_incompatibility]: never;
            }
            class TMP_Asset extends UnityEngine.ScriptableObject
            {
                protected [__keep_incompatibility]: never;
            }
            class VertexGradient extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class TMP_ColorGradient extends UnityEngine.ScriptableObject
            {
                protected [__keep_incompatibility]: never;
            }
            class TMP_SpriteAsset extends TMPro.TMP_Asset
            {
                protected [__keep_incompatibility]: never;
            }
            class TMP_StyleSheet extends UnityEngine.ScriptableObject
            {
                protected [__keep_incompatibility]: never;
            }
            class TMP_Style extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            enum FontWeight
            { Thin = 100, ExtraLight = 200, Light = 300, Regular = 400, Medium = 500, SemiBold = 600, Bold = 700, Heavy = 800, Black = 900 }
            enum FontStyles
            { Normal = 0, Bold = 1, Italic = 2, Underline = 4, LowerCase = 8, UpperCase = 16, SmallCaps = 32, Strikethrough = 64, Superscript = 128, Subscript = 256, Highlight = 512 }
            enum HorizontalAlignmentOptions
            { Left = 1, Center = 2, Right = 4, Justified = 8, Flush = 16, Geometry = 32 }
            enum VerticalAlignmentOptions
            { Top = 256, Middle = 512, Bottom = 1024, Baseline = 2048, Geometry = 4096, Capline = 8192 }
            enum TextAlignmentOptions
            { TopLeft = 257, Top = 258, TopRight = 260, TopJustified = 264, TopFlush = 272, TopGeoAligned = 288, Left = 513, Center = 514, Right = 516, Justified = 520, Flush = 528, CenterGeoAligned = 544, BottomLeft = 1025, Bottom = 1026, BottomRight = 1028, BottomJustified = 1032, BottomFlush = 1040, BottomGeoAligned = 1056, BaselineLeft = 2049, Baseline = 2050, BaselineRight = 2052, BaselineJustified = 2056, BaselineFlush = 2064, BaselineGeoAligned = 2080, MidlineLeft = 4097, Midline = 4098, MidlineRight = 4100, MidlineJustified = 4104, MidlineFlush = 4112, MidlineGeoAligned = 4128, CaplineLeft = 8193, Capline = 8194, CaplineRight = 8196, CaplineJustified = 8200, CaplineFlush = 8208, CaplineGeoAligned = 8224, Converted = 65535 }
            enum TextOverflowModes
            { Overflow = 0, Ellipsis = 1, Masking = 2, Truncate = 3, ScrollRect = 4, Page = 5, Linked = 6 }
            enum TextureMappingOptions
            { Character = 0, Line = 1, Paragraph = 2, MatchAspect = 3 }
            enum TextRenderFlags
            { DontRender = 0, Render = 255 }
            enum VertexSortingOrder
            { Normal = 0, Reverse = 1 }
        }
        namespace UnityEngine.Experimental.Rendering {
            /** Use this format to create either Textures or RenderTextures from scripts. */
            enum GraphicsFormat
            { None = 0, R8_SRGB = 1, R8G8_SRGB = 2, R8G8B8_SRGB = 3, R8G8B8A8_SRGB = 4, R8_UNorm = 5, R8G8_UNorm = 6, R8G8B8_UNorm = 7, R8G8B8A8_UNorm = 8, R8_SNorm = 9, R8G8_SNorm = 10, R8G8B8_SNorm = 11, R8G8B8A8_SNorm = 12, R8_UInt = 13, R8G8_UInt = 14, R8G8B8_UInt = 15, R8G8B8A8_UInt = 16, R8_SInt = 17, R8G8_SInt = 18, R8G8B8_SInt = 19, R8G8B8A8_SInt = 20, R16_UNorm = 21, R16G16_UNorm = 22, R16G16B16_UNorm = 23, R16G16B16A16_UNorm = 24, R16_SNorm = 25, R16G16_SNorm = 26, R16G16B16_SNorm = 27, R16G16B16A16_SNorm = 28, R16_UInt = 29, R16G16_UInt = 30, R16G16B16_UInt = 31, R16G16B16A16_UInt = 32, R16_SInt = 33, R16G16_SInt = 34, R16G16B16_SInt = 35, R16G16B16A16_SInt = 36, R32_UInt = 37, R32G32_UInt = 38, R32G32B32_UInt = 39, R32G32B32A32_UInt = 40, R32_SInt = 41, R32G32_SInt = 42, R32G32B32_SInt = 43, R32G32B32A32_SInt = 44, R16_SFloat = 45, R16G16_SFloat = 46, R16G16B16_SFloat = 47, R16G16B16A16_SFloat = 48, R32_SFloat = 49, R32G32_SFloat = 50, R32G32B32_SFloat = 51, R32G32B32A32_SFloat = 52, B8G8R8_SRGB = 56, B8G8R8A8_SRGB = 57, B8G8R8_UNorm = 58, B8G8R8A8_UNorm = 59, B8G8R8_SNorm = 60, B8G8R8A8_SNorm = 61, B8G8R8_UInt = 62, B8G8R8A8_UInt = 63, B8G8R8_SInt = 64, B8G8R8A8_SInt = 65, R4G4B4A4_UNormPack16 = 66, B4G4R4A4_UNormPack16 = 67, R5G6B5_UNormPack16 = 68, B5G6R5_UNormPack16 = 69, R5G5B5A1_UNormPack16 = 70, B5G5R5A1_UNormPack16 = 71, A1R5G5B5_UNormPack16 = 72, E5B9G9R9_UFloatPack32 = 73, B10G11R11_UFloatPack32 = 74, A2B10G10R10_UNormPack32 = 75, A2B10G10R10_UIntPack32 = 76, A2B10G10R10_SIntPack32 = 77, A2R10G10B10_UNormPack32 = 78, A2R10G10B10_UIntPack32 = 79, A2R10G10B10_SIntPack32 = 80, A2R10G10B10_XRSRGBPack32 = 81, A2R10G10B10_XRUNormPack32 = 82, R10G10B10_XRSRGBPack32 = 83, R10G10B10_XRUNormPack32 = 84, A10R10G10B10_XRSRGBPack32 = 85, A10R10G10B10_XRUNormPack32 = 86, D16_UNorm = 90, D24_UNorm = 91, D24_UNorm_S8_UInt = 92, D32_SFloat = 93, D32_SFloat_S8_UInt = 94, S8_UInt = 95, RGB_DXT1_SRGB = 96, RGBA_DXT1_SRGB = 96, RGB_DXT1_UNorm = 97, RGBA_DXT1_UNorm = 97, RGBA_DXT3_SRGB = 98, RGBA_DXT3_UNorm = 99, RGBA_DXT5_SRGB = 100, RGBA_DXT5_UNorm = 101, R_BC4_UNorm = 102, R_BC4_SNorm = 103, RG_BC5_UNorm = 104, RG_BC5_SNorm = 105, RGB_BC6H_UFloat = 106, RGB_BC6H_SFloat = 107, RGBA_BC7_SRGB = 108, RGBA_BC7_UNorm = 109, RGB_PVRTC_2Bpp_SRGB = 110, RGB_PVRTC_2Bpp_UNorm = 111, RGB_PVRTC_4Bpp_SRGB = 112, RGB_PVRTC_4Bpp_UNorm = 113, RGBA_PVRTC_2Bpp_SRGB = 114, RGBA_PVRTC_2Bpp_UNorm = 115, RGBA_PVRTC_4Bpp_SRGB = 116, RGBA_PVRTC_4Bpp_UNorm = 117, RGB_ETC_UNorm = 118, RGB_ETC2_SRGB = 119, RGB_ETC2_UNorm = 120, RGB_A1_ETC2_SRGB = 121, RGB_A1_ETC2_UNorm = 122, RGBA_ETC2_SRGB = 123, RGBA_ETC2_UNorm = 124, R_EAC_UNorm = 125, R_EAC_SNorm = 126, RG_EAC_UNorm = 127, RG_EAC_SNorm = 128, RGBA_ASTC4X4_SRGB = 129, RGBA_ASTC4X4_UNorm = 130, RGBA_ASTC5X5_SRGB = 131, RGBA_ASTC5X5_UNorm = 132, RGBA_ASTC6X6_SRGB = 133, RGBA_ASTC6X6_UNorm = 134, RGBA_ASTC8X8_SRGB = 135, RGBA_ASTC8X8_UNorm = 136, RGBA_ASTC10X10_SRGB = 137, RGBA_ASTC10X10_UNorm = 138, RGBA_ASTC12X12_SRGB = 139, RGBA_ASTC12X12_UNorm = 140, YUV2 = 141, DepthAuto = 142, ShadowAuto = 143, VideoAuto = 144, RGBA_ASTC4X4_UFloat = 145, RGBA_ASTC5X5_UFloat = 146, RGBA_ASTC6X6_UFloat = 147, RGBA_ASTC8X8_UFloat = 148, RGBA_ASTC10X10_UFloat = 149, RGBA_ASTC12X12_UFloat = 150 }
            /** 
            Use a default format to create either Textures or RenderTextures from scripts based on platform specific capability.
            */
            enum DefaultFormat
            { LDR = 0, HDR = 1, DepthStencil = 2, Shadow = 3, Video = 4 }
            enum TextureCreationFlags
            { None = 0, MipChain = 1, Crunch = 64 }
            /** Use this format usages to figure out the capabilities of specific GraphicsFormat */
            enum FormatUsage
            { Sample = 0, Linear = 1, Sparse = 2, Render = 4, Blend = 5, GetPixels = 6, SetPixels = 7, SetPixels32 = 8, ReadPixels = 9, LoadStore = 10, MSAA2x = 11, MSAA4x = 12, MSAA8x = 13, StencilSampling = 16 }
            /** Indicates how a Renderer is updated. */
            enum RayTracingMode
            { Off = 0, Static = 1, DynamicTransform = 2, DynamicGeometry = 3 }
        }
        namespace UnityEngine.Texture2D {
            enum EXRFlags
            { None = 0, OutputAsFloat = 1, CompressZIP = 2, CompressRLE = 4, CompressPIZ = 8 }
        }
        namespace UnityEngine.Audio {
            /** Object representing a group in the mixer. */
            class AudioMixerGroup extends UnityEngine.Object implements UnityEngine.Internal.ISubAssetNotDuplicatable
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace UnityEngine.Internal {
            interface ISubAssetNotDuplicatable
            {
            }
        }
        namespace System.Collections.ObjectModel {
            class ReadOnlyCollection$1<T> extends System.Object implements System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.ICollection, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.IList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.IList, System.Collections.Generic.ICollection$1<T>
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace UnityEngine.ParticleSystem {
            class Particle extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class PlaybackState extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class Trails extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class EmitParams extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class MainModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class EmissionModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class ShapeModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class VelocityOverLifetimeModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class LimitVelocityOverLifetimeModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class InheritVelocityModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class LifetimeByEmitterSpeedModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class ForceOverLifetimeModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class ColorOverLifetimeModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class ColorBySpeedModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class SizeOverLifetimeModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class SizeBySpeedModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class RotationOverLifetimeModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class RotationBySpeedModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class ExternalForcesModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class NoiseModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class CollisionModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class TriggerModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class SubEmittersModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class TextureSheetAnimationModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class LightsModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class TrailModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class CustomDataModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace UnityEngine.Canvas {
            interface WillRenderCanvases
            { 
            () : void; 
            Invoke?: () => void;
            }
            var WillRenderCanvases: { new (func: () => void): WillRenderCanvases; }
        }
        namespace UnityEngine.Application {
            interface AdvertisingIdentifierCallback
            { 
            (advertisingId: string, trackingEnabled: boolean, errorMsg: string) : void; 
            Invoke?: (advertisingId: string, trackingEnabled: boolean, errorMsg: string) => void;
            }
            var AdvertisingIdentifierCallback: { new (func: (advertisingId: string, trackingEnabled: boolean, errorMsg: string) => void): AdvertisingIdentifierCallback; }
            interface LowMemoryCallback
            { 
            () : void; 
            Invoke?: () => void;
            }
            var LowMemoryCallback: { new (func: () => void): LowMemoryCallback; }
            interface LogCallback
            { 
            (condition: string, stackTrace: string, type: UnityEngine.LogType) : void; 
            Invoke?: (condition: string, stackTrace: string, type: UnityEngine.LogType) => void;
            }
            var LogCallback: { new (func: (condition: string, stackTrace: string, type: UnityEngine.LogType) => void): LogCallback; }
        }
        namespace UnityEngine.UI.Selectable {
            enum Transition
            { None = 0, ColorTint = 1, SpriteSwap = 2, Animation = 3 }
        }
        namespace UnityEngine.UI.Button {
            class ButtonClickedEvent extends UnityEngine.Events.UnityEvent implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
        }
        namespace UnityEngine.UI.InputField {
            class EndEditEvent extends UnityEngine.Events.UnityEvent$1<string> implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
            }
            class SubmitEvent extends UnityEngine.Events.UnityEvent$1<string> implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
            }
            class OnChangeEvent extends UnityEngine.Events.UnityEvent$1<string> implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
            }
            interface OnValidateInput
            { 
            (text: string, charIndex: number, addedChar: number) : number; 
            Invoke?: (text: string, charIndex: number, addedChar: number) => number;
            }
            var OnValidateInput: { new (func: (text: string, charIndex: number, addedChar: number) => number): OnValidateInput; }
            enum ContentType
            { Standard = 0, Autocorrected = 1, IntegerNumber = 2, DecimalNumber = 3, Alphanumeric = 4, Name = 5, EmailAddress = 6, Password = 7, Pin = 8, Custom = 9 }
            enum LineType
            { SingleLine = 0, MultiLineSubmit = 1, MultiLineNewline = 2 }
            enum InputType
            { Standard = 0, AutoCorrect = 1, Password = 2 }
            enum CharacterValidation
            { None = 0, Integer = 1, Decimal = 2, Alphanumeric = 3, Name = 4, EmailAddress = 5 }
        }
        namespace UnityEngine.UI.Toggle {
            enum ToggleTransition
            { None = 0, Fade = 1 }
            class ToggleEvent extends UnityEngine.Events.UnityEvent$1<boolean> implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
        }
        namespace UnityEngine.RectTransform {
            interface ReapplyDrivenProperties
            { 
            (driven: UnityEngine.RectTransform) : void; 
            Invoke?: (driven: UnityEngine.RectTransform) => void;
            }
            var ReapplyDrivenProperties: { new (func: (driven: UnityEngine.RectTransform) => void): ReapplyDrivenProperties; }
            enum Edge
            { Left = 0, Right = 1, Top = 2, Bottom = 3 }
            enum Axis
            { Horizontal = 0, Vertical = 1 }
        }
        namespace UnityEngine.Networking {
            /** Asynchronous operation object returned from UnityWebRequest.SendWebRequest().
            You can yield until it continues, register an event handler with AsyncOperation.completed, or manually check whether it's done (AsyncOperation.isDone) or progress (AsyncOperation.progress). */
            class UnityWebRequestAsyncOperation extends UnityEngine.AsyncOperation
            {
                protected [__keep_incompatibility]: never;
                /** Returns the associated UnityWebRequest that created the operation. */
                public get webRequest(): UnityEngine.Networking.UnityWebRequest;
                public constructor ()
            }
            /** Provides methods to communicate with web servers. */
            class UnityWebRequest extends System.Object implements System.IDisposable
            {
                protected [__keep_incompatibility]: never;
                /** The string "GET", commonly used as the verb for an HTTP GET request. */
                public static kHttpVerbGET : string/** The string "HEAD", commonly used as the verb for an HTTP HEAD request. */
                public static kHttpVerbHEAD : string/** The string "POST", commonly used as the verb for an HTTP POST request. */
                public static kHttpVerbPOST : string/** The string "PUT", commonly used as the verb for an HTTP PUT request. */
                public static kHttpVerbPUT : string/** The string "CREATE", commonly used as the verb for an HTTP CREATE request. */
                public static kHttpVerbCREATE : string/** The string "DELETE", commonly used as the verb for an HTTP DELETE request. */
                public static kHttpVerbDELETE : string/** If true, any CertificateHandler attached to this UnityWebRequest will have CertificateHandler.Dispose called automatically when UnityWebRequest.Dispose is called. */
                public get disposeCertificateHandlerOnDispose(): boolean;
                public set disposeCertificateHandlerOnDispose(value: boolean);
                /** If true, any DownloadHandler attached to this UnityWebRequest will have DownloadHandler.Dispose called automatically when UnityWebRequest.Dispose is called. */
                public get disposeDownloadHandlerOnDispose(): boolean;
                public set disposeDownloadHandlerOnDispose(value: boolean);
                /** If true, any UploadHandler attached to this UnityWebRequest will have UploadHandler.Dispose called automatically when UnityWebRequest.Dispose is called. */
                public get disposeUploadHandlerOnDispose(): boolean;
                public set disposeUploadHandlerOnDispose(value: boolean);
                /** Defines the HTTP verb used by this UnityWebRequest, such as GET or POST. */
                public get method(): string;
                public set method(value: string);
                /** A human-readable string describing any system errors encountered by this UnityWebRequest object while handling HTTP requests or responses. (Read Only) */
                public get error(): string;
                /** Determines whether this UnityWebRequest will include Expect: 100-Continue in its outgoing request headers. (Default: true). */
                public get useHttpContinue(): boolean;
                public set useHttpContinue(value: boolean);
                /** Defines the target URL for the UnityWebRequest to communicate with. */
                public get url(): string;
                public set url(value: string);
                /** Defines the target URI for the UnityWebRequest to communicate with. */
                public get uri(): System.Uri;
                public set uri(value: System.Uri);
                /** The numeric HTTP response code returned by the server, such as 200, 404 or 500. (Read Only) */
                public get responseCode(): bigint;
                /** Returns a floating-point value between 0.0 and 1.0, indicating the progress of uploading body data to the server. */
                public get uploadProgress(): number;
                /** Returns true while a UnityWebRequest’s configuration properties can be altered. (Read Only) */
                public get isModifiable(): boolean;
                /** Returns true after the UnityWebRequest has finished communicating with the remote server. (Read Only) */
                public get isDone(): boolean;
                /** The result of this UnityWebRequest. */
                public get result(): UnityEngine.Networking.UnityWebRequest.Result;
                /** Returns a floating-point value between 0.0 and 1.0, indicating the progress of downloading body data from the server. (Read Only) */
                public get downloadProgress(): number;
                /** Returns the number of bytes of body data the system has uploaded to the remote server. (Read Only) */
                public get uploadedBytes(): bigint;
                /** Returns the number of bytes of body data the system has downloaded from the remote server. (Read Only) */
                public get downloadedBytes(): bigint;
                /** Indicates the number of redirects which this UnityWebRequest will follow before halting with a “Redirect Limit Exceeded” system error. */
                public get redirectLimit(): number;
                public set redirectLimit(value: number);
                /** Holds a reference to the UploadHandler object which manages body data to be uploaded to the remote server. */
                public get uploadHandler(): UnityEngine.Networking.UploadHandler;
                public set uploadHandler(value: UnityEngine.Networking.UploadHandler);
                /** Holds a reference to a DownloadHandler object, which manages body data received from the remote server by this UnityWebRequest. */
                public get downloadHandler(): UnityEngine.Networking.DownloadHandler;
                public set downloadHandler(value: UnityEngine.Networking.DownloadHandler);
                /** Holds a reference to a CertificateHandler object, which manages certificate validation for this UnityWebRequest. */
                public get certificateHandler(): UnityEngine.Networking.CertificateHandler;
                public set certificateHandler(value: UnityEngine.Networking.CertificateHandler);
                /** Sets UnityWebRequest to attempt to abort after the number of seconds in timeout have passed. */
                public get timeout(): number;
                public set timeout(value: number);
                /** Create a UnityWebRequest for HTTP GET.
                * @param uri The URI of the resource to retrieve via HTTP GET.
                * @returns An object that retrieves data from the uri. 
                */
                public static Get ($uri: string) : UnityEngine.Networking.UnityWebRequest
                /** Create a UnityWebRequest for HTTP GET.
                * @param uri The URI of the resource to retrieve via HTTP GET.
                * @returns An object that retrieves data from the uri. 
                */
                public static Get ($uri: System.Uri) : UnityEngine.Networking.UnityWebRequest
                /** Creates a UnityWebRequest configured for HTTP DELETE.
                * @param uri The URI to which a DELETE request should be sent.
                * @returns A UnityWebRequest configured to send an HTTP DELETE request. 
                */
                public static Delete ($uri: string) : UnityEngine.Networking.UnityWebRequest
                public static Delete ($uri: System.Uri) : UnityEngine.Networking.UnityWebRequest
                /** Creates a UnityWebRequest configured to send a HTTP HEAD request.
                * @param uri The URI to which to send a HTTP HEAD request.
                * @returns A UnityWebRequest configured to transmit a HTTP HEAD request. 
                */
                public static Head ($uri: string) : UnityEngine.Networking.UnityWebRequest
                public static Head ($uri: System.Uri) : UnityEngine.Networking.UnityWebRequest
                /** Creates a UnityWebRequest configured to upload raw data to a remote server via HTTP PUT.
                * @param uri The URI to which the data will be sent.
                * @param bodyData The data to transmit to the remote server.
                If a string, the string will be converted to raw bytes via <a href="https:msdn.microsoft.comen-uslibrarysystem.text.encoding.utf8">System.Text.Encoding.UTF8<a>.
                * @returns A UnityWebRequest configured to transmit bodyData to uri via HTTP PUT. 
                */
                public static Put ($uri: string, $bodyData: System.Array$1<number>) : UnityEngine.Networking.UnityWebRequest
                public static Put ($uri: System.Uri, $bodyData: System.Array$1<number>) : UnityEngine.Networking.UnityWebRequest
                /** Creates a UnityWebRequest configured to upload raw data to a remote server via HTTP PUT.
                * @param uri The URI to which the data will be sent.
                * @param bodyData The data to transmit to the remote server.
                If a string, the string will be converted to raw bytes via <a href="https:msdn.microsoft.comen-uslibrarysystem.text.encoding.utf8">System.Text.Encoding.UTF8<a>.
                * @returns A UnityWebRequest configured to transmit bodyData to uri via HTTP PUT. 
                */
                public static Put ($uri: string, $bodyData: string) : UnityEngine.Networking.UnityWebRequest
                public static Put ($uri: System.Uri, $bodyData: string) : UnityEngine.Networking.UnityWebRequest
                /** Creates a UnityWebRequest configured to send form data to a server via HTTP POST.
                * @param uri The target URI to which form data will be transmitted.
                * @param postData Form body data. Will be URLEncoded prior to transmission.
                * @returns A UnityWebRequest configured to send form data to uri via POST. 
                */
                public static Post ($uri: string, $postData: string) : UnityEngine.Networking.UnityWebRequest
                public static Post ($uri: System.Uri, $postData: string) : UnityEngine.Networking.UnityWebRequest
                /** Create a UnityWebRequest configured to send form data to a server via HTTP POST.
                * @param uri The target URI to which form data will be transmitted.
                * @param formData Form fields or files encapsulated in a WWWForm object, for formatting and transmission to the remote server.
                * @returns A UnityWebRequest configured to send form data to uri via POST. 
                */
                public static Post ($uri: string, $formData: UnityEngine.WWWForm) : UnityEngine.Networking.UnityWebRequest
                public static Post ($uri: System.Uri, $formData: UnityEngine.WWWForm) : UnityEngine.Networking.UnityWebRequest
                public static Post ($uri: string, $multipartFormSections: System.Collections.Generic.List$1<UnityEngine.Networking.IMultipartFormSection>) : UnityEngine.Networking.UnityWebRequest
                public static Post ($uri: System.Uri, $multipartFormSections: System.Collections.Generic.List$1<UnityEngine.Networking.IMultipartFormSection>) : UnityEngine.Networking.UnityWebRequest
                public static Post ($uri: string, $multipartFormSections: System.Collections.Generic.List$1<UnityEngine.Networking.IMultipartFormSection>, $boundary: System.Array$1<number>) : UnityEngine.Networking.UnityWebRequest
                public static Post ($uri: System.Uri, $multipartFormSections: System.Collections.Generic.List$1<UnityEngine.Networking.IMultipartFormSection>, $boundary: System.Array$1<number>) : UnityEngine.Networking.UnityWebRequest
                public static Post ($uri: string, $formFields: System.Collections.Generic.Dictionary$2<string, string>) : UnityEngine.Networking.UnityWebRequest
                public static Post ($uri: System.Uri, $formFields: System.Collections.Generic.Dictionary$2<string, string>) : UnityEngine.Networking.UnityWebRequest
                /** Escapes characters in a string to ensure they are URL-friendly. * @param s A string with characters to be escaped.
                * @param e The text encoding to use.
                */
                public static EscapeURL ($s: string) : string
                /** Escapes characters in a string to ensure they are URL-friendly. * @param s A string with characters to be escaped.
                * @param e The text encoding to use.
                */
                public static EscapeURL ($s: string, $e: System.Text.Encoding) : string
                /** Converts URL-friendly escape sequences back to normal text. * @param s A string containing escaped characters.
                * @param e The text encoding to use.
                */
                public static UnEscapeURL ($s: string) : string
                /** Converts URL-friendly escape sequences back to normal text. * @param s A string containing escaped characters.
                * @param e The text encoding to use.
                */
                public static UnEscapeURL ($s: string, $e: System.Text.Encoding) : string
                public static SerializeFormSections ($multipartFormSections: System.Collections.Generic.List$1<UnityEngine.Networking.IMultipartFormSection>, $boundary: System.Array$1<number>) : System.Array$1<number>
                public static GenerateBoundary () : System.Array$1<number>
                public static SerializeSimpleForm ($formFields: System.Collections.Generic.Dictionary$2<string, string>) : System.Array$1<number>
                public static ClearCookieCache () : void
                public static ClearCookieCache ($uri: System.Uri) : void
                public Dispose () : void
                public SendWebRequest () : UnityEngine.Networking.UnityWebRequestAsyncOperation
                public Abort () : void
                /** Retrieves the value of a custom request header.
                * @param name Name of the custom request header. Case-insensitive.
                * @returns The value of the custom request header. If no custom header with a matching name has been set, returns an empty string. 
                */
                public GetRequestHeader ($name: string) : string
                /** Set a HTTP request header to a custom value. * @param name The key of the header to be set. Case-sensitive.
                * @param value The header's intended value.
                */
                public SetRequestHeader ($name: string, $value: string) : void
                /** Retrieves the value of a response header from the latest HTTP response received.
                * @param name The name of the HTTP header to retrieve. Case-insensitive.
                * @returns The value of the HTTP header from the latest HTTP response. If no header with a matching name has been received, or no responses have been received, returns null. 
                */
                public GetResponseHeader ($name: string) : string
                public GetResponseHeaders () : System.Collections.Generic.Dictionary$2<string, string>
                public constructor ()
                public constructor ($url: string)
                public constructor ($uri: System.Uri)
                public constructor ($url: string, $method: string)
                public constructor ($uri: System.Uri, $method: string)
                public constructor ($url: string, $method: string, $downloadHandler: UnityEngine.Networking.DownloadHandler, $uploadHandler: UnityEngine.Networking.UploadHandler)
                public constructor ($uri: System.Uri, $method: string, $downloadHandler: UnityEngine.Networking.DownloadHandler, $uploadHandler: UnityEngine.Networking.UploadHandler)
            }
            /** Helpers for downloading image files into Textures using UnityWebRequest. */
            class UnityWebRequestTexture extends System.Object
            {
                protected [__keep_incompatibility]: never;
                /** Create a UnityWebRequest intended to download an image via HTTP GET and create a Texture based on the retrieved data.
                * @param uri The URI of the image to download.
                * @param nonReadable If true, the texture's raw data will not be accessible to script. This can conserve memory. Default: false.
                * @returns A UnityWebRequest properly configured to download an image and convert it to a Texture. 
                */
                public static GetTexture ($uri: string) : UnityEngine.Networking.UnityWebRequest
                public static GetTexture ($uri: System.Uri) : UnityEngine.Networking.UnityWebRequest
                /** Create a UnityWebRequest intended to download an image via HTTP GET and create a Texture based on the retrieved data.
                * @param uri The URI of the image to download.
                * @param nonReadable If true, the texture's raw data will not be accessible to script. This can conserve memory. Default: false.
                * @returns A UnityWebRequest properly configured to download an image and convert it to a Texture. 
                */
                public static GetTexture ($uri: string, $nonReadable: boolean) : UnityEngine.Networking.UnityWebRequest
                public static GetTexture ($uri: System.Uri, $nonReadable: boolean) : UnityEngine.Networking.UnityWebRequest
            }
            interface IMultipartFormSection
            {
            }
            /** Helper object for UnityWebRequests. Manages the buffering and transmission of body data during HTTP requests. */
            class UploadHandler extends System.Object implements System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
            /** Manage and process HTTP response body data received from a remote server. */
            class DownloadHandler extends System.Object implements System.IDisposable
            {
                protected [__keep_incompatibility]: never;
                /** Returns true if this DownloadHandler has been informed by its parent UnityWebRequest that all data has been received, and this DownloadHandler has completed any necessary post-download processing. (Read Only) */
                public get isDone(): boolean;
                /** Error message describing a failure that occurred inside the download handler. */
                public get error(): string;
                /** Provides direct access to downloaded data. */
                public get nativeData(): Unity.Collections.NativeArray$1.ReadOnly<number>;
                /** Returns the raw bytes downloaded from the remote server, or null. (Read Only) */
                public get data(): System.Array$1<number>;
                /** Convenience property. Returns the bytes from data interpreted as a UTF8 string. (Read Only) */
                public get text(): string;
                public Dispose () : void
            }
            /** Responsible for rejecting or accepting certificates received on https requests. */
            class CertificateHandler extends System.Object implements System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
            /** A DownloadHandler subclass specialized for downloading images for use as Texture objects. */
            class DownloadHandlerTexture extends UnityEngine.Networking.DownloadHandler implements System.IDisposable
            {
                protected [__keep_incompatibility]: never;
                /** Returns the downloaded Texture, or null. (Read Only) */
                public get texture(): UnityEngine.Texture2D;
                /** Returns the downloaded Texture, or null.
                * @param www A finished UnityWebRequest object with DownloadHandlerTexture attached.
                * @returns The same as DownloadHandlerTexture.texture 
                */
                public static GetContent ($www: UnityEngine.Networking.UnityWebRequest) : UnityEngine.Texture2D
                public constructor ()
                public constructor ($readable: boolean)
            }
            /** A general-purpose UploadHandler subclass, using a native-code memory buffer. */
            class UploadHandlerRaw extends UnityEngine.Networking.UploadHandler implements System.IDisposable
            {
                protected [__keep_incompatibility]: never;
                public constructor ($data: System.Array$1<number>)
                public constructor ($data: Unity.Collections.NativeArray$1<number>, $transferOwnership: boolean)
                public constructor ($data: Unity.Collections.NativeArray$1.ReadOnly<number>)
                public constructor ()
            }
            /** A general-purpose DownloadHandler implementation which stores received data in a native byte buffer. */
            class DownloadHandlerBuffer extends UnityEngine.Networking.DownloadHandler implements System.IDisposable
            {
                protected [__keep_incompatibility]: never;
                /** Returns a copy of the native-memory buffer interpreted as a UTF8 string.
                * @param www A finished UnityWebRequest object with DownloadHandlerBuffer attached.
                * @returns The same as DownloadHandlerBuffer.text 
                */
                public static GetContent ($www: UnityEngine.Networking.UnityWebRequest) : string
                public constructor ()
            }
        }
        namespace System.Collections.Generic.List$1 {
            class Enumerator<T> extends System.ValueType implements System.Collections.Generic.IEnumerator$1<T>, System.Collections.IEnumerator, System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace System.Collections.Generic.Dictionary$2 {
            class KeyCollection<TKey, TValue> extends System.Object implements System.Collections.ICollection, System.Collections.Generic.IEnumerable$1<TKey>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<TKey>, System.Collections.Generic.ICollection$1<TKey>
            {
                protected [__keep_incompatibility]: never;
            }
            class ValueCollection<TKey, TValue> extends System.Object implements System.Collections.ICollection, System.Collections.Generic.IEnumerable$1<TValue>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<TValue>, System.Collections.Generic.ICollection$1<TValue>
            {
                protected [__keep_incompatibility]: never;
            }
            class Enumerator<TKey, TValue> extends System.ValueType implements System.Collections.IDictionaryEnumerator, System.Collections.Generic.IEnumerator$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.IEnumerator, System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace UnityEngine.Networking.UnityWebRequest {
            enum Result
            { InProgress = 0, Success = 1, ConnectionError = 2, ProtocolError = 3, DataProcessingError = 4 }
        }
        namespace Unity.Collections.NativeArray$1 {
            class ReadOnly<T> extends System.ValueType implements System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace UnityEngine.Playables {
            /** Use the PlayableGraph to manage Playable creations and destructions. */
            class PlayableGraph extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
        }
    }
    export = CSharp;
}
