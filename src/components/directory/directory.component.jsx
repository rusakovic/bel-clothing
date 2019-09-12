import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';


class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					title: 't-shirts',
					imageUrl: 'https://i.ibb.co/Jq0XFHd/t-shirt.jpg',
					id: 1,
					linkUrl: 't-shirts'
				},
				{
					title: 'hats',
					imageUrl: 'https://i.ibb.co/3cYHjV2/hats.jpg',
					id: 2,
					linkUrl: 'hats'
				},
				{
					title: 'hoodies',
					imageUrl: 'https://i.ibb.co/JqYbZj6/hoodies.jpg',
					id: 3,
					linkUrl: 'hoodies'
				},
				{
					title: 'womens',
					imageUrl: 'https://i.ibb.co/KGF2fPg/womens.jpg',
					size: 'large',
					id: 4,
					linkUrl: 'womens'
				},
				{
					title: 'mens',
					imageUrl: 'https://i.ibb.co/YXqhZt3/mens.jpg',
					size: 'large',
					id: 5,
					linkUrl: 'mens'
				}
			]
		};
  }
  
  render() {
    return (
		  <div className="directory-menu">
        {this.state.sections.map(({ id, title, imageUrl, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>

    )
  }
}

export default Directory;