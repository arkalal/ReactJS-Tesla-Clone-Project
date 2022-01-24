import React from 'react';
import './Menu.css'
import MenuItem from './MenuItem';

const Menu = () => {
    return <div className='menu'>
        <MenuItem title='existing inventory'></MenuItem>
        <MenuItem title='used inventory'></MenuItem>
        <MenuItem title='trade-in'></MenuItem>
        <MenuItem title='cybertruck'></MenuItem>
        <MenuItem title='roadster'></MenuItem>
        <MenuItem title='semi'></MenuItem>
        <MenuItem title='charging'></MenuItem>
        <MenuItem title='powerwall'></MenuItem>
        <MenuItem title='commercial solar'></MenuItem>
        <MenuItem title='test drive'></MenuItem>
        <MenuItem title='find us'></MenuItem>
        <MenuItem title='support'></MenuItem>
        <MenuItem title='united states'></MenuItem>
    </div>;
};

export default Menu;
