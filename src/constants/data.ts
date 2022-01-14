import {
  PostDataType,
  ReelDataType,
  StoryDataType,
  UserDataType,
} from '../models';

export const PostData: PostDataType[] = [
  {
    id: 0,
    name: 'Robert',
    images: ['https://picsum.photos/400/400'],
    likes: 42,
    description: 'Hello',
    comments: [
      {
        id: 1,
        name: 'Courtney',
        likes: 116,
        comment: 'consectetur',
      },
    ],
  },
  {
    id: 1,
    name: 'Macias',
    description: 'Hello',
    images: ['https://picsum.photos/400/400', 'https://picsum.photos/400/400'],
    likes: 37,
    comments: [
      {
        id: 1,
        name: 'Gonzales',
        likes: 153,
        comment: 'do',
      },
      {
        id: 2,
        name: 'Elsa',
        likes: 15,
        comment: 'voluptate',
      },
      {
        id: 3,
        name: 'Brennan',
        likes: 79,
        comment: 'amet',
      },
    ],
  },
  {
    id: 2,
    name: 'Winnie',
    description: 'Hello',
    images: ['https://picsum.photos/400/400'],
    likes: 29,
    comments: [],
  },
  {
    id: 3,
    name: 'Marsha',
    description: 'Hello',
    images: ['https://picsum.photos/400/400'],
    likes: 35,
    comments: [
      {
        id: 1,
        name: 'Bernadette',
        likes: 54,
        comment: 'velit',
      },
      {
        id: 2,
        name: 'Gomez',
        likes: 138,
        comment: 'duis',
      },
      {
        id: 3,
        name: 'Perry',
        likes: 71,
        comment: 'quis',
      },
    ],
  },
  {
    id: 4,
    name: 'Elaine',
    description: 'Hello',
    images: ['https://picsum.photos/400/400'],
    likes: 34,
    comments: [
      {
        id: 1,
        name: 'Sonia',
        likes: 181,
        comment: 'labore',
      },
      {
        id: 2,
        name: 'Ortiz',
        likes: 148,
        comment: 'fugiat',
      },
      {
        id: 3,
        name: 'Janell',
        likes: 63,
        comment: 'irure',
      },
    ],
  },
  {
    id: 5,
    name: 'Cohen',
    description: 'Hello',
    images: ['https://picsum.photos/400/400'],
    likes: 21,
    comments: [
      {
        id: 1,
        name: 'Leonor',
        likes: 154,
        comment: 'ad',
      },
      {
        id: 2,
        name: 'Alisha',
        likes: 76,
        comment: 'excepteur',
      },
      {
        id: 3,
        name: 'Vickie',
        likes: 100,
        comment: 'cupidatat',
      },
    ],
  },
  {
    id: 6,
    name: 'Ila',
    description: 'Hello',
    images: ['https://picsum.photos/400/400'],
    likes: 37,
    comments: [],
  },
  {
    id: 7,
    name: 'Misty',
    description: 'Hello',
    images: ['https://picsum.photos/400/400'],
    likes: 38,
    comments: [
      {
        id: 1,
        name: 'Janie',
        likes: 43,
        comment: 'aliquip',
      },
    ],
  },
  {
    id: 8,
    name: 'Adams',
    description: 'Hello',
    images: ['https://picsum.photos/400/400'],
    likes: 25,
    comments: [],
  },
  {
    id: 9,
    name: 'Janette',
    description: 'Hello',
    images: ['https://picsum.photos/400/400'],
    likes: 25,
    comments: [
      {
        id: 1,
        name: 'Rose',
        likes: 36,
        comment: 'sit',
      },
      {
        id: 2,
        name: 'Martinez',
        likes: 101,
        comment: 'minim',
      },
    ],
  },
];

export const StoryData: StoryDataType[] = [
  {
    name: 'Will',
    id: 1,
  },
  {
    name: 'Harry',
    id: 2,
  },
  {
    name: 'Luke',
    id: 3,
  },
  {
    name: 'Maya',
    id: 4,
  },
  {
    name: 'Jeff',
    id: 5,
  },
  {
    name: 'Chris',
    id: 6,
  },
  {
    name: 'Mark',
    id: 7,
  },
  {
    name: 'Killua',
    id: 8,
  },
];

export const ReelsData: ReelDataType[] = [
  {
    id: 0,
    name: 'Rhea',
    description: 'Couldn’t be happier 🙂',
    video:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    likes: 246,
    commentsCount: 80,
  },
  {
    id: 1,
    name: 'Merrill',
    description:
      'In 2021, I want to be as Insta famous as an egg and as ageless as Paul Rudd',

    video:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    likes: 213,
    commentsCount: 53,
  },
  {
    id: 2,
    name: 'Rollins',
    description: 'Having a 🐳 of a time',
    video:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    likes: 341,
    commentsCount: 64,
  },
  {
    id: 3,
    name: 'Mann',
    description: 'He ordered his regular breakfast. Two eggs sunnyside up',
    video:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
    likes: 277,
    commentsCount: 137,
  },
  {
    id: 4,
    name: 'Hilda',
    description: '🙃🙃 -Turn that frown upside down',
    video:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"',
    likes: 307,
    commentsCount: 115,
  },
  {
    id: 5,
    name: 'Aurelia',
    description: '☀️❤️- Summer loving',
    video:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    likes: 226,
    commentsCount: 78,
  },
  {
    id: 6,
    name: 'Conway',
    description: 'He ordered his regular breakfast. Two eggs sunnyside up',
    video:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    likes: 278,
    commentsCount: 142,
  },
  {
    id: 7,
    name: 'Garrison',
    description: 'He ordered his regular breakfast. Two eggs sunnyside up',
    video:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    likes: 289,
    commentsCount: 63,
  },
  {
    id: 8,
    name: 'Ingrid',
    description: 'He ordered his regular breakfast. Two eggs sunnyside up',
    video:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    likes: 267,
    commentsCount: 88,
  },
  {
    id: 9,
    name: 'Phoebe',
    description: 'He ordered his regular breakfast. Two eggs sunnyside up',
    video:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    likes: 321,
    commentsCount: 113,
  },
];

export const UsersData: UserDataType[] = [
  {
    id: 1,
    userName: 'Yogesh',
    fullName: 'Yogeshwaran R',
    mobileNoOrEmail: '8973991312',
    password: '123',
  },
];
