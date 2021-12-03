import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../database.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Award } from '../shared/award';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-award-detail',
  templateUrl: './award-detail.page.html',
  styleUrls: ['./award-detail.page.scss'],
})
export class AwardDetailPage implements OnInit, OnDestroy {

  public award: Award;

  sub1: Subscription;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.sub1 = this.dataService.getAwardById(id)
    .subscribe(award => {
      // if the award doesn't exists, return to home page
      if (!award) {
        this.router.navigate(['/home']);
      } else {
        this.award = award;
      }
    });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }
}

