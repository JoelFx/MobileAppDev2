import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FeedService, Post } from '../../services/feed.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  posts: Post[] = [];

  constructor(private feed: FeedService) {}

  ngOnInit() {
    this.loadPosts();
  }

  /** Temporary stub until backend is wired */
  async loadPosts(event?: any) {
    this.posts = [
      {
        id: '1',
        author: 'Name of Rider',
        time: new Date(),
        title: 'Zwift - Stage 1: Standard Ride',
        distance: 12.0,
        elevation: 300,
        duration: '30m 2s',
        achievements: 1,
        kudos: 3
      }
      // …add more if you like
    ];
    event?.target?.complete();
  }
}
