export type VideoCategory = 'YouTube' | 'Shorts' | 'Ads'

export type PersonDetails = {
  fullName: string
  mobileNumber: string
  emailAddress: string
  role: string
  bio: string
  about: string
  specialties: string[]
  profilePictureUrl: string
}

export type PortfolioVideo = {
  /** Use the YouTube video id as the unique id */
  id: string
  title: string
  youtubeUrl: string
  /** YouTube thumbnail URL (or a placeholder) */
  thumbnailUrl: string
  category: VideoCategory
}

import avatar2 from '../assets/avatar2.png'

export const personDetails: PersonDetails = {
  fullName: 'Bhavuk Garg',
  mobileNumber: '+91 90417-03327',
  emailAddress: 'Bhavukgarg98@gmail.com',
  role: 'Professional Video Editor',
  bio: 'Professional Video Editor specializing in YouTube videos, Reels, and Ads',
  about:
    "Welcome to my cinematic realm, where passion meets precision in every frame. I’m Bhavuk Garg, a professional video editor with an unyielding dedication to storytelling through motion. With a keen eye for detail and a deep understanding of visual narrative, I transform ordinary footage into extraordinary visual experiences that captivate and inspire.",
  specialties: ['Cash Cow Editing', 'Reels Editing', 'Logo Animation', 'Podcast Edit'],
  // Local asset (src/assets/avatar2.jpg)
  profilePictureUrl: avatar2,
}

/**
 * Portfolio videos (10)
 * Note: thumbnailUrl uses the public YouTube image endpoint:
 * https://i.ytimg.com/vi/<VIDEO_ID>/hqdefault.jpg
 */
export const portfolioVideos: PortfolioVideo[] = [
  {
    id: 'M6xrUMIGJUE',
    title:
      'Only Reason : BIG Shankee D Ft. Harleen Khera(Official Song)| New Punjabi Songs 2021 | Single Track',
    youtubeUrl: 'https://www.youtube.com/watch?v=M6xrUMIGJUE',
    thumbnailUrl: 'https://i.ytimg.com/vi/M6xrUMIGJUE/hqdefault.jpg',
    category: 'YouTube',
  },
  {
    id: 'B4asIglcAHs',
    title:
      'THE PUNJABI ROAST SHOW | EP. 4 | @KatapaTV @Canadian_Mirza | PART-1',
    youtubeUrl: 'https://www.youtube.com/watch?v=B4asIglcAHs',
    thumbnailUrl: 'https://i.ytimg.com/vi/B4asIglcAHs/hqdefault.jpg',
    category: 'YouTube',
  },
  {
    id: 'bO3VFGygWyk',
    title:
      'New Punjabi Songs 2022 | Mustang (Official Video) Starkay | Latest Punjabi Songs 2022 | Single Track',
    youtubeUrl: 'https://www.youtube.com/watch?v=bO3VFGygWyk',
    thumbnailUrl: 'https://i.ytimg.com/vi/bO3VFGygWyk/hqdefault.jpg',
    category: 'YouTube',
  },
  {
    id: 'lGWrJ2ReBhc',
    title:
      'Fanah Dil (Official Video) | Balraj | G Guri | Latest Punjabi Songs 2023 | T-Series',
    youtubeUrl: 'https://www.youtube.com/watch?v=lGWrJ2ReBhc',
    thumbnailUrl: 'https://i.ytimg.com/vi/lGWrJ2ReBhc/hqdefault.jpg',
    category: 'YouTube',
  },
  {
    id: 'PDhCZ1HRzMQ',
    title:
      'लड़की ने दिया धोखा फिर जो लड़के ने किया (watch) a love story of ch    heater girlfriend | raj | part -1',
    youtubeUrl: 'https://www.youtube.com/watch?v=PDhCZ1HRzMQ',
    thumbnailUrl: 'https://i.ytimg.com/vi/PDhCZ1HRzMQ/hqdefault.jpg',
    category: 'YouTube',
  },
  {
    id: 'aFg0AyZeiaA',
    title:
      'dill de sahre a ja main  Rovan Sari Raat (Official ) Himanshi  | Joban Hash | Punjabi Songs 2023',
    youtubeUrl: 'https://www.youtube.com/watch?v=aFg0AyZeiaA',
    thumbnailUrl: 'https://i.ytimg.com/vi/aFg0AyZeiaA/hqdefault.jpg',
    category: 'YouTube',
  },
  {
    id: 'ET5ImIqq7B8',
    title:
      'jatta teri badmashi | Badmashi (Official Video) Kaptaan | Anuradha   | Song 2022',
    youtubeUrl: 'https://www.youtube.com/watch?v=ET5ImIqq7B8',
    thumbnailUrl: 'https://i.ytimg.com/vi/ET5ImIqq7B8/hqdefault.jpg',
    category: 'YouTube',
  },
  {
    id: '1KLfr09lJoc',
    title:
      'Kalle Rehan Do (Official video) Akash   | Joban Hash | Latest Punjabi  Song 2022',
    youtubeUrl: 'https://www.youtube.com/watch?v=1KLfr09lJoc',
    thumbnailUrl: 'https://i.ytimg.com/vi/1KLfr09lJoc/hqdefault.jpg',
    category: 'YouTube',
  },
  {
    id: 'XPVX9HrK1ls',
    title:
      'teri meri gall kithey jaye na nikal milan tu ayea kar sham nu | manmohan  | Latest Punjabi Song 2022',
    youtubeUrl: 'https://www.youtube.com/watch?v=XPVX9HrK1ls',
    thumbnailUrl: 'https://i.ytimg.com/vi/XPVX9HrK1ls/hqdefault.jpg',
    category: 'YouTube',
  },
  {
    id: '3kw5HG8mMXU',
    title:
      'vee Mummy Cha Te bulanundi pai a (Official Video) - Ishita  | Latest Punjabi Song 2022',
    youtubeUrl: 'https://www.youtube.com/watch?v=3kw5HG8mMXU',
    thumbnailUrl: 'https://i.ytimg.com/vi/3kw5HG8mMXU/hqdefault.jpg',
    category: 'YouTube',
  },
   {
    id: '3kw5HG8mKLU',
    title:
      'vee Mummy Cha Te bulanundi pai a (Official Video) - Ishita  | Latest Punjabi Song 2022',
    youtubeUrl: 'https://www.youtube.com/shorts/-HH21cOZ1iM',
    thumbnailUrl: 'https://i.ytimg.com/vi/3kw5HG8mMXU/hqdefault.jpg',
    category: 'Shorts',
  },
]


