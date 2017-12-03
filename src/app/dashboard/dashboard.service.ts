import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { BaseHttpService } from '../core/services/index';

import { SharedModule } from '../shared/shared.module';
import { Constants } from '../core/constants/constant';

const FETCH_LATENCY = 500;

@Injectable()
export class DashboardService extends BaseHttpService {
    constructor(private _http: Http) {
        super(_http);
    }
    getNews() {
        this.method = Constants.HTTPGETMETHOD;
        this.serviceUrl = Constants.NEWSURL;
        return super.call(null);
    }
}

