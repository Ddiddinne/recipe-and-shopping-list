import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector:'app-header',
    templateUrl: './header.component.html',
    styles:[`
    .show > .dropdown-menu{display: block;}
    `]
})
export class HeaderComponent{
}