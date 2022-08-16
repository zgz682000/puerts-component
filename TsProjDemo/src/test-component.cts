import {Transporter} from "puerts-component/transporter.deco.cjs";
import {Component} from "puerts-component/component.cjs";
import { ListProperty, Property } from "puerts-component/property.deco.cjs";
import { Puerts, System, UnityEngine } from "csharp";
import TestComponent2 from "./test-component2.cjs";
import TestAsset from "./test-asset.cjs";

@Transporter()
export default class TestComponent extends Component {

    @Property(UnityEngine.Transform)
    test1Prop: UnityEngine.Transform;

    /**
     * 定义一个数组属性
     */
    @ListProperty(UnityEngine.GameObject)
    test3Prop: UnityEngine.GameObject[]

    @Property(System.Boolean)
    test4Prop: boolean;

    @Property(UnityEngine.Vector3)
    test5Prop: UnityEngine.Vector3;
    
    /**
     * 定义一个二维数组属性
     */
    @ListProperty(UnityEngine.Vector3, 2)
    test6Prop: UnityEngine.Vector3[][];

    /**
     * 定义一个其他ts组件类型的属性
     */
    @Property(Puerts.Component.TsComponent)
    test7Prop: TestComponent2;

    /**
     * 定义一个ts资源类型的属性
     */
    @Property(Puerts.Component.TsAsset)
    test8Prop: TestAsset;


    Start(){
        console.log("TestComponent Start");
        console.log(this.gameObject);
        console.log(this.transform);
        console.log(this.test1Prop);
        console.log(this.test3Prop);
        console.log(this.test6Prop);
        console.log(this.test7Prop.testNumber);
        console.log(this.test7Prop.testPassword);
        console.log(this.test8Prop.testProp1);
    }
}