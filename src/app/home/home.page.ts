import { Component, OnInit } from '@angular/core';
import { DataService } from '../database.service';
import { Award } from './../shared/award';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { CreatePage } from '../create/create.page';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public awards: Observable<Award[]>;

  constructor(
    private dataService: DataService,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) {
    this.awards = this.dataService.getAwards();
  }

  async openNewAwardModal() {
    const modal = await this.modalController.create({
      component: CreatePage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });

    return await modal.present();
  }
}
