import { System, UnityEngine } from "csharp";
import { Property } from "puerts-component/property.deco.cjs";
import { Transporter } from "puerts-component/transporter.deco.cjs";


@Transporter()
export default class TestAsset {
    @Property(System.Int32)
    testProp1: number;
}