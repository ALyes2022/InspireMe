export const categories = [

  {
    name: 'horror',
    image: 'https://hips.hearstapps.com/hmg-prod/images/christmas-horror-movies-red-snow-1664485521.jpeg',
  },
  {
    name: 'drama',
    image: 'https://goodmovieslist.com/best-movies/movie-posters/tt0111161.jpg',
  },
  {
    name: 'action',
    image: 'https://www.syfy.com/sites/syfy/files/2019/05/john-wick-2017-image-3840x2400.jpg',
  },
  {
    name: 'comedy',
    image: 'https://hips.hearstapps.com/hmg-prod/images/comedy-movies-on-netflix-day-shift-1666969531.jpeg',
  },
  {
    name: 'romantic',
    image: 'https://www.scrolldroll.com/wp-content/uploads/2023/02/october-best-bollywood-romantic-movies.jpg',
  },
  {
    name: 'documentary',
    image: 'https://m.media-amazon.com/images/M/MV5BMTM1NDc5MDYxMl5BMl5BanBnXkFtZTcwMjMzNDAzMQ@@._V1_.jpg',
  },
  {
    name: 'true Stories',
    image: 'https://play-lh.googleusercontent.com/hIZwJEdf6KkfIvdcsRA8bVL0q7BFakWO_VYEV7mMdCmVrsbgPs7xOnYZx2CP2CnFze7d',
  },
  {
    name: 'art',
    image: 'https://i.pinimg.com/736x/f4/e5/ba/f4e5ba22311039662dd253be33bf5f0e.jpg',
  }, {
    name: 'adventure',
    image: 'https://www.boredpanda.com/blog/wp-content/uploads/2022/05/adventure_movies_10-6273871bdbc6a__700.jpg',
  },
  {
    name: 'tv shows',
    image: 'https://qph.cf2.quoracdn.net/main-qimg-65b6c2d32351d952e1cdaf55a215fb03-lq',
  }, {

    name: 'Sience-fiction',
    image: 'https://hips.hearstapps.com/hmg-prod/images/mv5bmtexmzu0odcxndheqtjeqwpwz15bbwu4mde1oti4mzay-v1-1589813214.jpg',
  }, {

    name: 'Kids',
    image: 'https://hips.hearstapps.com/hmg-prod/images/despicable-me-1533222068.jpg?resize=480:*',
  },
  {
    name: 'others',
    image: 'https://i.pinimg.com/236x/2e/63/c8/2e63c82dfd49aca8dccf9de3f57e8588.jpg',
  },
];




export const userQuery = (userId) => {

  const query = `*[_type == "user" && _id == '${userId}']`

  return query;

  // dokumentacja Sanity https://www.sanity.io/docs/query-cheat-sheet
}

export const searchQuery = (searchTerm) => {
  const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*'] {
    image {
      asset -> {
        url
      }
    },
    _id,
    destination,
    postedBy -> {
      _id,
      userName,
      image
    },
    save[] {
      _key,
      postedBy -> {
        _id,
        userName,
        image
      },
    },
  }`

  return query
}

export const feedQuery =
  `*[_type == 'pin'] | order(_createdAt desc) {
  image {
    asset -> {
      url
    }
  },
  _id,
  destination,
  postedBy -> {
    _id,
    userName,
    image
  },
  save[] {
    _key,
    postedBy -> {
      _id,
      userName,
      image
    }
  }
}`;

export const pinDetailQuery = (pinId) => {
  const query = `*[_type == "pin" && _id == '${pinId}']{
    image{
      asset->{
        url
      }
    },
    _id,
    title, 
    about,
    category,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
   save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
    comments[]{
      comment,
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    }
  }`;
  return query;
};
export const pinDetailMorePinQuery = (pin) => {
  const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const userCreatedPinsQuery = (userId) => {
  const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const userSavedPinsQuery = (userId) => {
  const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};



