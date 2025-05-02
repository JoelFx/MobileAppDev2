// src/app/pages/home/home.page.ts

import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FeedService, Post } from '../../services/feed.service';
import { addIcons } from 'ionicons';
import * as icons from 'ionicons/icons';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  posts: Post[] = [];

  constructor(private feed: FeedService) {
    addIcons({ ...icons });
  }

  ngOnInit() {
    this.loadPosts();
  }

  /** Temporary stub until backend is wired */
  async loadPosts(event?: any) {
    this.posts = [
      {
        id: '1',
        author: 'Name of Rider',
        time: 'Yesterday at 8:00 PM',
        title: 'Zwift - Stage 1: Standard Ride',
        distance: 12.0,
        elevation: 300,
        duration: '30m 2s',
        achievements: 1,
        kudos: 3,
        placeholderImage: 'assets/placeholder-image.png',
      },
      {
        id: '2',
        author: 'Name of Rider',
        time: 'Yesterday at 8:00 PM',
        title: 'Zwift - Stage 1: Standard Ride',
        distance: 12.0,
        elevation: 300,
        duration: '30m 2s',
        achievements: 1,
        kudos: 3,
        placeholderImage: 'assets/placeholder-image.png',
      },
      {
        id: '2',
        author: 'Name of Rider',
        time: 'Yesterday at 8:00 PM',
        title: 'Zwift - Stage 1: Standard Ride',
        distance: 12.0,
        elevation: 300,
        duration: '30m 2s',
        achievements: 1,
        kudos: 3,
        placeholderImage: 'assets/placeholder-image.png',
      },
      {
        id: '2',
        author: 'Name of Rider',
        time: 'Yesterday at 8:00 PM',
        title: 'Zwift - Stage 1: Standard Ride',
        distance: 12.0,
        elevation: 300,
        duration: '30m 2s',
        achievements: 1,
        kudos: 3,
        placeholderImage: 'assets/placeholder-image.png',
      },
      // …you can add more sample posts here
    ];
    event?.target?.complete();
  }
}
