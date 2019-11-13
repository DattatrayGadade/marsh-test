import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../data.service';
import { User } from '../user.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  user: User;
  detail: string;

  constructor(private dataService: DataService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.dataService.currentUserValue;
    this.route.queryParams
      .subscribe(queryParams => {
        this.detail = queryParams.detail;
      });
  }

}
