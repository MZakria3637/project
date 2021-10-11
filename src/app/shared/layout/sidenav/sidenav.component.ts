import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import SideNavItems from './sidenav.routes';

@Component({
  selector: 'lw-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.url.subscribe((urls) => {
      this.active = urls.join('/')
      })
  }

  menuItems!: any[];
  active!: string;
  ngOnInit(): void {
    this.menuItems = SideNavItems
  }

  checkActive(url: string) {
    console.log(this.active)
    return this.active == url
  }
}
