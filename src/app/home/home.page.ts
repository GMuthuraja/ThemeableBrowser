import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  safeUrl: any;
  CheckinURL: string = "https://checkin.si.amadeus.net/static/PRD/SV/#/identification";
  StaffURL: string = "https://svbooking.saudiairlines.com:11011/apps/corp/TravelPortalM/StaffBookingM.aspx";
  OtherBookingURL: string = "https://svbooking.saudiairlines.com:11011/apps/corp/TravelPortalM/OAB.aspx";
  options: ThemeableBrowserOptions;
  browser: ThemeableBrowserObject;

  constructor(
    private sanitizer: DomSanitizer,
    private iab: InAppBrowser,
    private themeableBrowser: ThemeableBrowser) {

    this.options = {
      toolbar: {
        height: 44,
        color: '#3880ff'
      },
      title: {
        color: '#ffffff',
        showPageTitle: true,
        staticText: 'Themeable Browser'
      },
      backButton: {
        image: '../../assets/icon/favicon.png',
        align: 'left',
        event: 'closePressed'
      },
      closeButton: {
        image: '../../assets/icon/close.svg',
        align: 'right',
        event: 'closePressed'
      }
    }
  }

  openCheckinURL() {
    //this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.CheckinURL);
    this.iab.create(this.CheckinURL, '_blank');
  }

  openStaffURL() {
    //this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.StaffURL);
    this.iab.create(this.StaffURL, '_blank');
  }

  openOtherURL() {
    //this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.OtherBookingURL);
    this.iab.create(this.OtherBookingURL, '_blank');
  }

  openTBCheckinURL() {
    this.browser = this.themeableBrowser.create(this.CheckinURL, '_blank', this.options);

    // this.browser.on('closePressed').subscribe(data => {
    //   this.browser.close();
    // });
  }

  openTBStaffURL() {
    this.browser = this.themeableBrowser.create(this.StaffURL, '_blank', this.options);
    // this.browser.on('closePressed').subscribe(data => {
    //   this.browser.close();
    // });
  }

  openTBOtherURL() {
    this.browser = this.themeableBrowser.create(this.OtherBookingURL, '_blank', this.options);
    // this.browser.on('closePressed').subscribe(data => {
    //   this.browser.close();
    // });
  }
}
