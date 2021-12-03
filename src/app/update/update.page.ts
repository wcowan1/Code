import { Award } from './../shared/award';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../database.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit, OnDestroy {
  public award: Award;
  updateAwardForm: FormGroup;
  formIsEdited: boolean = false;

  sub1: Subscription;
  sub2: Subscription;

  @ViewChild('updateForm') updateForm: FormGroupDirective;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.sub1 = this.dataService.getAwardById(id)
    .subscribe(award => {
      // if the contact doesn't exists, return to home page
      if (!award) {
        this.router.navigate(['/home']);
      } else {
        this.award = award;

        this.updateAwardForm = new FormGroup({
          'Award_Number': new FormControl(this.award.Award_Number, Validators.required),
          'Award_Name': new FormControl(this.award.Award_Name, Validators.required),
          'Award_PI': new FormControl(this.award.Award_PI, Validators.required),
          'Award_Sponsor': new FormControl(this.award.Award_Sponsor, Validators.required),
          'Dept_Number': new FormControl(this.award.Dept_Number),
          'Start_Date': new FormControl(this.award.Start_Date, Validators.required),
          'End_Date': new FormControl(this.award.End_Date, Validators.required),
          'Reporting_Period': new FormControl(this.award.Reporting_Period, Validators.required),
          'Special_Report': new FormControl(this.award.Special_Report, Validators.required),
          'Report_Status': new FormControl(this.award.Report_Status, Validators.required)
        });

        this.sub2 = this.updateAwardForm.valueChanges.subscribe(values => {
          this.formIsEdited = true;
        })
      }
    });
  }

  submitForm() {
    this.updateForm.onSubmit(undefined);
  }

  updateAward(values: any) {
    // copy all the form values into the contact to be updated
    let updatedAward: Award = { id: this.award.Award_Number, ...values };

    this.dataService.updateAward(updatedAward)
   .then(
      res => this.router.navigate(['/home'])
    );
  }

  deleteAward(Award_Number: string) {
    this.dataService.deleteAward(Award_Number)
    .then(
      res => this.router.navigate(['/home'])
    );
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }
}