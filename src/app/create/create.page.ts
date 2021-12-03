import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { DataService } from '../database.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, FormGroupDirective } from "@angular/forms";
import { ModalController } from '@ionic/angular';
import { Award } from './../shared/award';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})

export class CreatePage implements OnInit {
  createAwardForm: FormGroup;
  @ViewChild('createForm') createForm: FormGroupDirective;

  constructor(
    private modalController: ModalController,
    private dataService: DataService
  ) { }


  dismissModal() {
    this.modalController.dismiss();
  }
  ngOnInit(): void {
    this.createAwardForm = new FormGroup({
      'Award_Number': new FormControl('', Validators.required),
      'Award_Name': new FormControl('', Validators.required),
      'Award_PI': new FormControl(''),
      'Award_Sponsor': new FormControl('', Validators.required),
      'Dept_Number': new FormControl('', Validators.required),
      'Start_Date': new FormControl('', Validators.required),
      'End_Date': new FormControl('', Validators.required),
      'Reporting_Period': new FormControl('', Validators.required),
      'Special_Report': new FormControl('', Validators.required),
      'Report_Status': new FormControl('', Validators.required),


    });
  }

  submitForm() {
    this.createForm.onSubmit(undefined);
  }

  createAward(values: any) {
    // copy all the form values into the new award
    let newAward: Award = { ...values };
    this.dataService.createAward(newAward);
    this.dismissModal();
  }
}
