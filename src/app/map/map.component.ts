import { AfterViewInit, Component, OnInit} from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit , AfterViewInit{

  maps!: mapboxgl.Map;

  constructor() { }

  ngOnInit(){   
    //var temp = mapboxgl.accessToken
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoibXVuZG95ZSIsImEiOiJja2lvaXBjbmoxY29nMnFxajl5dmhxcHB2In0.IWebBHEVRin0hwvVhBbpTg'
 
  }
  ngAfterViewInit(){
    
      //mapboxgl.accessToken = 'pk.eyJ1IjoibXVuZG95ZSIsImEiOiJja2lvaXBjbmoxY29nMnFxajl5dmhxcHB2In0.IWebBHEVRin0hwvVhBbpTg'
    this.maps = new mapboxgl.Map({
        container : 'map',
        style : 'mapbox://styles/mundoye/ckiytda3c281m19t70bg55bey',
        center : [-14.568, 14.480],
        zoom : 6.5

      })
  }

}
