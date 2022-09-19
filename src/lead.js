import { LightningElement, api } from "lwc";

export default class Child extends LightningElement {
    @api id;
    @api firstname;
    @api lastname;
    @api status;
}