import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

import { DashboardComponent, DashboardService, DashboardRoutingModule } from './index';

import { SharedService } from '../core/services/shared.service';
import { SortPipe } from '../core/pipes/sort.pipe';

@NgModule({
  imports: [BrowserModule, CoreModule, SharedModule, DashboardRoutingModule],
  declarations: [DashboardComponent, SortPipe],
  providers: [DashboardService, SharedService]
})

export class DashboardModule { }