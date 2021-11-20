import { Component, OnInit } from '@angular/core';
import { AwardService } from './../shared/award.service';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  updateAwardForm: FormGroup;
  id: any;

  constructor(
    private awardAPI: AwardService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getAwardData(this.id);
    this.updateAwardForm = this.fb.group({
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

  getAwardData(id) {
    this.awardAPI.getAward(id).subscribe(res => {
      this.updateAwardForm.setValue({
        Award_Number: ['Award_Number'],
        Award_Name: ['Award_Name'],
        Award_PI: ['Award_PI'],
        Award_Sponsor: ['Award_Sponsor'],
        Dept_Number: ['Dept_Number'],
        Start_Date: ['Start_Date'],
        End_Date: ['End_Date'],
        Reporting_Period: ['Reporting_Period'],
        Special_Report: ['Special_Report'],
        Report_Status: ['Report_Status'] 
      });
    });
  }

  updateForm() {
    if (!this.updateAwardForm.valid) {
      return false;
    } else {
      this.awardAPI.updateAward(this.id, this.updateAwardForm.value)
        .subscribe((res) => {
          console.log(res)
          this.updateAwardForm.reset();
          this.router.navigate(['/home']);
        })
    }
  }

}