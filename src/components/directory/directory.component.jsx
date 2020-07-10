import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/reducer/directory/directory.selector.js';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({ sections }) =>(
      <div className='directory-menu'>
        {
          sections.map(({ title, imageUrl, id, size, linkURL}) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkURL={linkURL}/>
        ))
        }
      </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
