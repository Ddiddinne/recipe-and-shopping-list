import { Component, EventEmitter, Output, ViewChild, ElementRef, HostListener, HostBinding } from "@angular/core";


@Component({
    selector:'app-header',
    templateUrl: './header.component.html',
    styles:[`
    .show > .dropdown-menu{display: block;}
    `]
})
export class HeaderComponent{
    
    isOpen = false;
    @ViewChild('menu') menu: ElementRef;
    @ViewChild('btnMenu') btnMenu: ElementRef;

    @HostListener('document:click', ['$event'])
    handleOutsideClick(event) {
      if(!this.menu.nativeElement.contains(event.target) && !this.btnMenu.nativeElement.contains(event.target)){
        this.isOpen = false;
      }
    }

    toggleOpen(){
        this.isOpen = !this.isOpen;
    }

}