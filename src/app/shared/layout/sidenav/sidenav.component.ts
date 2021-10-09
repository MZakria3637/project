import { Component, OnInit } from '@angular/core';
import SideNavItems from './sidenav.routes';

@Component({
  selector: 'lw-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  menuItems!: any[];
  ngOnInit(): void {
    this.menuItems = SideNavItems
  }

}
