import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  detailForm: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.detailForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      detail: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.detailForm.valid) {
      const {firstName, lastName, detail} = this.detailForm.value;
      this.dataService.getUser(firstName, lastName)
        .subscribe(response => {
          this.router.navigate(['/result'], {queryParams: {detail}});
        });
    }
  }

}
