import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { PremierAjaxService } from '../shared/premier-ajax.service';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit {
  
  constructor(private ajaxService:PremierAjaxService) { }

  ngOnInit() {
  }

  getMessage() {
    this.ajaxService.getMessage();
  }

}
