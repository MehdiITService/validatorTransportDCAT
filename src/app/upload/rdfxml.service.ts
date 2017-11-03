import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RdfxmlService {
  result: any;
  constructor(private _http: Http) { }
  getRdfXml() {
    return this._http.get('/api/rdfxml')
      .map(result => this.result = result.json().data);
  }
}
