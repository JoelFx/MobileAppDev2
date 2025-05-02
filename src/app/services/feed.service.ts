import { Injectable } from '@angular/core';

export interface Post {
  id: string;
  author: string;
  time: string;
  title: string;
  distance: number;
  elevation: number;
  duration: string;
  achievements: number;
  kudos: number;
  placeholderImage: string;
}

@Injectable({ providedIn: 'root' })
export class FeedService {
  // for now this can stay empty or return your stub data
}
