import { Puerts, System } from "csharp";
import { Component } from "puerts-component/component.cjs";
import { Property } from "puerts-component/property.deco.cjs";
import { Transporter } from "puerts-component/transporter.deco.cjs";


@Transporter()
export default class TestComponent2 extends Component {

    @Property(System.Int32)
    testNumber: number;

    @Property(Puerts.Component.PasswordProperty, {
        toTsValue: (csValue: Puerts.Component.PasswordProperty)=>csValue.value
    })
    testPassword: string;

    @Property(Puerts.Component.JsonProperty, {
        toTsValue: (csValue: Puerts.Component.JsonProperty)=>{
            console.log(csValue.json);
            return JSON.parse(csValue.json)
        }
    })
    testJson: any;
}