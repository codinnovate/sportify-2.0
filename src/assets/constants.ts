import assets from './index';


export const genres = [
  { title: 'Pop', value: 'POP' },
  { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
  { title: 'Dance', value: 'DANCE' },
  { title: 'Electronic', value: 'ELECTRONIC' },
  { title: 'Soul', value: 'SOUL_RNB' },
  { title: 'Alternative', value: 'ALTERNATIVE' },
  { title: 'Rock', value: 'ROCK' },
  { title: 'Latin', value: 'LATIN' },
  { title: 'Film', value: 'FILM_TV' },
  { title: 'Country', value: 'COUNTRY' },
  { title: 'Worldwide', value: 'WORLDWIDE' },
  { title: 'Reggae', value: 'REGGAE_DANCE_HALL' },
  { title: 'House', value: 'HOUSE' },
  { title: 'K-Pop', value: 'K_POP' },
];

export const links = [
  { name: 'Home', to: '/', icon:assets.homeIcon  },
  { name: 'Discover', to: '/', icon:assets.discoverIcon },
  { name: 'My Library', to: '/around-you', icon:assets.myLibIcon },
  { name: 'Playlists', to: '/top-artists', icon:assets.playlistIcon },
  { name: 'Liked songs', to: '/top-charts', icon:assets.likedIcon },
];
