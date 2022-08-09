import {Transporter} from "./puerts-component/transporter.deco.cjs";
import {Component} from "./puerts-component/component.cjs";
import { ListProperty, Property } from "./puerts-component/property.deco.cjs";
import { Puerts, System, UnityEngine } from "csharp";
import TestComponent2 from "./test-component2.cjs";

@Transporter()
export default class TestComponent extends Component {

    @Property(UnityEngine.Transform)
    test1Prop: UnityEngine.Transform;

    @ListProperty(UnityEngine.GameObject)
    test3Prop: UnityEngine.GameObject[]

    @Property(System.Boolean)
    test4Prop: boolean;

    @Property(UnityEngine.Vector3)
    test5Prop: UnityEngine.Vector3;

    @ListProperty(UnityEngine.Vector3, 2)
    test6Prop: UnityEngine.Vector3[][];

    @Property(Puerts.Component.TsComponent)
    test7Prop: TestComponent2;


    Start(){
        console.log("TestComponent Start");
        console.log(this.gameObject);
        console.log(this.transform);
        console.log(this.test1Prop);
        console.log(this.test3Prop);
        console.log(this.test6Prop);
        console.log(this.test7Prop.testNumber);
    }
}