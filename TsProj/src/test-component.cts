import {Transporter} from "./puerts-component/transporter.deco.cjs";
import {Component} from "./puerts-component/component.cjs";
import { ListProperty, Property } from "./puerts-component/property.deco.cjs";
import { System, UnityEngine } from "csharp";

@Transporter()
export default class TestComponent extends Component {

    @Property(UnityEngine.Transform)
    test1Prop: UnityEngine.Transform;

    @Property(UnityEngine.Transform)
    test2Prop: UnityEngine.Transform;

    @ListProperty(UnityEngine.GameObject)
    test3Prop: UnityEngine.GameObject[]

    @Property(System.Boolean)
    test4Prop: boolean;

    @Property(UnityEngine.Vector3)
    test5Prop: UnityEngine.Vector3;

    @ListProperty(UnityEngine.Vector3, 2)
    test6Prop: UnityEngine.Vector3[][];

    Start(){
        console.log("TestComponent Start");
        console.log(this.gameObject);
        console.log(this.transform);
        console.log(this.test1Prop);
        console.log(this.test2Prop);
        console.log(this.test3Prop);
        console.log(this.test4Prop);
        console.log(this.test5Prop);
        console.log(this.test6Prop);
    }
}