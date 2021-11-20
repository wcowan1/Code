import { Component, OnInit, NgZone } from '@angular/core';
import { AwardService } from './../shared/award.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})

export class CreatePage implements OnInit {
  AwardForm: FormGroup;

  constructor(
    private awardAPI: AwardService,
    private router: Router,
    public fb: FormBuilder,
    private zone: NgZone
  ) {
    this.AwardForm = this.fb.group({
      Award_Number: [''],
      Award_Name: [''],
      Award_PI: [''],
      Award_Sponsor: [''],
      Dept_Number: [''],
      Start_Date: [''],
      End_Date: [''],
      Reporting_Period: [''],
      Special_Report: [''],
      Report_Status: ['']   
  })

  }
  ngOnInit() { }

  onFormSubmit() {
    if (!this.AwardForm.valid) {
      return false;
    } else {
      this.awardAPI.addAward(this.AwardForm.value)
        .subscribe((res) => {
          this.zone.run(() => {
            console.log(res)
            this.AwardForm.reset();
            this.router.navigate(['/home']);
          })
        });
    }
  }
}