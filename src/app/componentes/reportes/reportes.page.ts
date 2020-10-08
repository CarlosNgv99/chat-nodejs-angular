import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }
  reporte1(){
    this._router.navigate(['/reporte1']);

  }
  return(){
    this._router.navigate(['/administrador']);

  }
}
