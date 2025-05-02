// src/app/pages/maps/maps.page.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import * as icons from 'ionicons/icons';
export interface Route {
  id: string;
  name: string;
  distance: number; // in miles
  elevation: number; // in feet
  duration: string; // e.g. "40m"
}

@Component({
  selector: 'app-maps',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  routes: Route[] = [];

  ngOnInit() {
    this.loadRoutes();
  }
  selectedIndex: number | null = null;

  items = [
    {
      title: 'Name of Route - Destination 1',
      distance: '4.00 mi',
      elevation: '100 ft',
      duration: '40m',
    },
    {
      title: 'Name of Route - Destination 2',
      distance: '5.50 mi',
      elevation: '150 ft',
      duration: '50m',
    },
    {
      title: 'Name of Route - Destination 3',
      distance: '2.20 mi',
      elevation: '80 ft',
      duration: '25m',
    },
  ];

  selectItem(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
  loadRoutes() {
    this.routes = [
      {
        id: '1',
        name: 'Name of Route – Destination',
        distance: 4.0,
        elevation: 100,
        duration: '40m',
      },
      {
        id: '2',
        name: 'Another Route – Park Loop',
        distance: 3.2,
        elevation: 50,
        duration: '25m',
      },
      // …add more sample routes here
    ];
  }

  onSave(route: Route) {
    console.log('Save', route);
  }
  onDetails(route: Route) {
    console.log('Details', route);
  }
  onDraw() {
    console.log('Draw your own route');
  }
  constructor() {
    addIcons({ ...icons });
  }
}
