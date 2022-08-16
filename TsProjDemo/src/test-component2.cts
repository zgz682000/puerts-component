import { System } from "csharp";
import { Component } from "puerts-component/component.cjs";
import { Property } from "puerts-component/property.deco.cjs";
import { Transporter } from "puerts-component/transporter.deco.cjs";


@Transporter()
export default class TestComponent2 extends Component {

    @Property(System.Int32)
    testNumber: number;

    @Property(System.String, {password: true})
    testPassword: string;

}