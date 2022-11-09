import React from 'react';
import { 
  UserMenuContainer,
  UserMenu, 
  MenuList,
  List
} from './styles';

const UserMenuList = ({itemList}: any) => {
  return (
    <UserMenuContainer>
      <UserMenu>
        <MenuList>
          {itemList.map(((item: any) => <List>{item}</List>))}
        </MenuList>
      </UserMenu>
    </UserMenuContainer>
  );
}

export default UserMenuList;