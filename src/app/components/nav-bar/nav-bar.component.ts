import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
    expanded;
    isActive;

    constructor() {
    }

    ngOnInit() {
    }

    click() {
        this.expanded = !this.expanded;
        console.log(this.expanded)
    }

    toggleHighlight(newValue: number) {
        if (this.isActive === newValue) {
            this.isActive = 0;
        }
        else {
            this.isActive = newValue;
        }
    }

}
