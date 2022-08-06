import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'
import Drawers from './Drawer/Drawer'
import { Link } from 'react-router-dom'

export default function Ham() {
    return (
        <div>
            <Menu>
                <MenuButton >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" /></svg>
                </MenuButton>
                <MenuList>
                    <MenuGroup title='Profile'>
                      <div className='ml-1'>  <Drawers /></div>
                        <MenuItem><Link to='/login'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="20" className=''><path fill="none" d="M0 0h24v24H0z" /><path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" /></svg></Link> </MenuItem>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuGroup title=''>
                        <MenuItem><Link to='/'>Home</Link></MenuItem>
                        <MenuItem><Link to='/foods'>Foods </Link></MenuItem>
                        <MenuItem><Link to='/cart'>Cart </Link></MenuItem>
                        <MenuItem><Link to='/contact'>Contact </Link></MenuItem>
                        
                        
                    </MenuGroup>
                </MenuList>
            </Menu>
        </div>
    )
}
