import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.route.params.subscribe(({date}) => {
      this.date = date
      this.currentDate = moment(date, 'DD-MM-YYYY').toDate();
    });
    this.searchForm = this.fb.group({
      currentDate: [this.currentDate, Validators.required]
    })
  }
  searchForm!: FormGroup;
  date!: string;
  currentDate!: Date;
}
