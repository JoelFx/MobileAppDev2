// src/app/pages/you/you.page.ts

import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

export interface Progress {
  weeklyDistance: number;
  weeklyTime: string;
  elevation: number;
}

export interface Metric {
  label: string;
  value: number;
}

@Component({
  selector: 'app-you',
  standalone: true,
  imports: [IonicModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './you.page.html',
  styleUrls: ['./you.page.scss'],
})
export class YouPage implements OnInit {
  progress!: Progress;
  metrics: Metric[] = [];

  ngOnInit() {
    // stub data
    this.progress = {
      weeklyDistance: 0,
      weeklyTime: '0h 0m',
      elevation: 0
    };
    this.metrics = [
      { label: 'Workout', value: 5 },
      { label: 'Weight Training', value: 2 },
      { label: 'Ride', value: 3 },
      { label: 'Walk', value: 7 },
    ];
  }

  onAddGoal() {
    console.log('Add a new goal');
  }
}
