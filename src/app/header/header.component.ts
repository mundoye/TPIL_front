import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'Tableau de Prévision Réseaux & PFS';

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.title = 'Prévision Réseaux et Plateforme de Service'
  }

}
