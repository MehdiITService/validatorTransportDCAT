import { Component, OnInit } from '@angular/core';
import { RdfxmlService} from './rdfxml.service';
import { UploadfileService} from './uploadfile.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  hola: String;
  constructor(private _rdfxmlService: RdfxmlService ) {

    this._rdfxmlService.getRdfXml().subscribe(res => this.hola = res);
  }
  ngOnInit() {
  }


}
