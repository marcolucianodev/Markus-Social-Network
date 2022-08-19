import { 
  UserMenuContainer,
  UserMenu, 
  MenuList,
  List
} from './styles';


const UserMenuList = ({itemList}) => {
  return (
    <UserMenuContainer>
      <UserMenu>
        <MenuList>
          {itemList.map((item => <List>{item}</List>))}
        </MenuList>
      </UserMenu>
    </UserMenuContainer>
  );
}

export default UserMenuList;