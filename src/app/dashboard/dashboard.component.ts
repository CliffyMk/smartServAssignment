import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Constants } from '../core/constants/constant';
import { DashboardService } from './dashboard.service';
import './dashboard.scss';
@Component({
  selector: 'dw-dashboard',
  templateUrl: 'dashboard.component.html',
  providers: [DashboardService]
})

export class DashboardComponent implements OnInit {
  news: any[];
  constructor(private route: ActivatedRoute,
    private router: Router, private dashboardService: DashboardService, private cdRef: ChangeDetectorRef) {
    this.news = new Array();
  }
  isDesc: boolean = false;
  column: string = 'CategoryName';
  ngOnInit(): void {
    this.getNews();
  }
  direction: number;
  sort(property: string) {
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }
  getNews() {
    const self = this;
    this.dashboardService.getNews().then((data) => {
      debugger;
      self.news = data.articles;
    });
  }
}

