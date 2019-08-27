import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  public openLayout() {
    this.navCtrl.navigateForward('layout-header-footer');
  }

  public openLayoutTabs() {
    this.navCtrl.navigateForward('layout-tabs');
  }

  public openLayoutMenu() {
    this.navCtrl.navigateForward('layout-menu');
  }

  public openLayoutSplit() {
    this.navCtrl.navigateForward('layout-split-panel');
  }

}
