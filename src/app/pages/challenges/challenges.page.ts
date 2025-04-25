// src/app/pages/challenges/challenges.page.ts

import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

export interface Challenge {
  id: string;
  title: string;
  description: string;
  start: string;
  end: string;
}

@Component({
  selector: 'app-challenges',
  standalone: true,
  imports: [IonicModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './challenges.page.html',
  styleUrls: ['./challenges.page.scss'],
})
export class ChallengesPage implements OnInit {
  challenges: Challenge[] = [];

  ngOnInit() {
    this.loadChallenges();
  }

  loadChallenges() {
    this.challenges = [
      {
        id: '1',
        title: 'Monthly Cycling Distance Challenge',
        description: 'Ride a total of 1,250 km',
        start: 'Jan 1, 2022',
        end: 'Jan 31, 2022'
      },
      {
        id: '2',
        title: 'Weekly Running Goal',
        description: 'Run 20 miles in a week',
        start: 'Apr 20, 2025',
        end: 'Apr 26, 2025'
      }
    ];
  }

  onCreate() {
    console.log('Create a new group challenge');
  }

  onJoin(ch: Challenge) {
    console.log('Join challenge', ch);
  }
}
