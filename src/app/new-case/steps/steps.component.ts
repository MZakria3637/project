import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(({step}) => {
      this.setNavigation(parseInt(step.replace(/^\D+/g, "")))
    })
  }

  Navigation: number = 1;
  setNavigation(num: number) {
    this.Navigation = num;
  }
}
