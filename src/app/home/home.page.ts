import { Component, OnInit } from '@angular/core';
import { AwardService } from './../shared/award.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  Award: any = [];

  constructor(
    private awardService: AwardService
  ) {
  }

  ngOnInit() { }

  ionViewDidEnter() {
    this.awardService.getAwardList().subscribe((res) => {
      console.log(res)
      this.Award = res;
    })
  }

  deleteAward(award, i) {
    if (window.confirm('Do you want to delete award?')) {
      this.awardService.deleteAward(award._id)
        .subscribe(() => {
          this.Award.splice(i, 1);
          console.log('Award deleted!')
        }
        )
    }
  }
}
