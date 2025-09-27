import img1 from './assets/images/avatar-mark-webber.webp'
import img2 from './assets/images/avatar-angela-gray.webp'
import img3 from './assets/images/avatar-jacob-thompson.webp'
import img4 from './assets/images/avatar-rizky-hasanuddin.webp'
import img5 from './assets/images/avatar-kimberly-smith.webp'
import img6 from './assets/images/avatar-nathan-peterson.webp'
import img7 from './assets/images/avatar-anna-kim.webp'
import avatarMessage from './assets/images/image-chess.webp'

export const notificationData = [
  {
    id: 1,
    user: 'Mark Webber',
    action: 'reacted to your recent post',
    postTitle: 'My first tournament today!',
    TimeRanges: '1m ago',
    avatar: img1,
    type: 'react',
    isNew: true
  },
  {
    id: 2,
    user: 'Jane Smith',
    action: 'followed you',
    TimeRanges: '5m ago',
    avatar: img2,
    type: 'follow',
    isNew: true
  },
  {
    id: 3,
    user: 'jacob Thompson',
    action: 'has joined your group',
    groupName: 'Chess Club',
    TimeRanges: '1 day ago',
    avatar: img3,
    type: 'group-join',
    isNew: true
  },
  {
    id: 4,
    user: 'Rizky Hasanuddin',
    action: 'sent you a private message',
    message: 'Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and I\'m already having lots of fun and improving my game.',
    TimeRanges: '5 days ago',
    avatar: img4,
    type: 'message',
    isNew: false
  },
  {
    id: 5,
    user: 'Kimberly Smith',
    action: 'comment on your picture',
    TimeRanges: '1 week ago',
    avatar: img5,
    avatarMessage: avatarMessage,
    type: 'comment',
    isNew: false
  },
  {
    id: 6,
    user: 'Nathan Peterson',
    action: 'reacted to your recent post',
    postTitle: '5 end-game strategies to increase your win rate',
    TimeRanges: '2 weeks ago',
    avatar: img6,
    type: 'react',
    isNew: false
  },
  {
    id: 7,
    user: 'Anna Kim',
    action: 'left the group',
    TimeRanges: '2 weeks ago',
    avatar: img7,
    isNew: false
  }
]