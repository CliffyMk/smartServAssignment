import { Component, OnInit } from '@angular/core';
import "../assets/sass/app.scss";
import './app.component.scss';
import { AlertService } from './shared/alert/alert.service';

@Component({
  selector: 'smartServ-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public message: any;
  constructor(private alertService: AlertService) {

  }
  ngOnInit() {
    this.subscribeAlertService()
  }
  private subscribeAlertService(): void {
    this.alertService.getMessage().subscribe((alert) => {
      setTimeout(() => { this.message = alert; }, 1);
      if (alert === null) {
        return;
      }
    },
      (error) => { console.log("Error in alert subscription!"); },
      () => {
        console.log("Completed!");
        this.message = null;
      }
    );
  }
}
