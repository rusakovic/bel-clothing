const INITIAL_STATE = {
  sections: [
    {
      title: 'tshirts',
      imageUrl: 'https://i.ibb.co/Jq0XFHd/t-shirt.jpg',
      id: 1,
      linkUrl: 'shop/tshirts'
    },
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/3cYHjV2/hats.jpg',
      id: 2,
      linkUrl: 'shop/hats'
    },
    {
      title: 'hoodies',
      imageUrl: 'https://i.ibb.co/JqYbZj6/hoodies.jpg',
      id: 3,
      linkUrl: 'shop/hoodies'
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/YXqhZt3/mens.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/mens'
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/KGF2fPg/womens.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/womens'
    }
  ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default directoryReducer;