import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, AsideButton } from "./styles";
import { Sidebar, WidgetTitle } from "../Sidebar";
import { WidgetUserInfo, UserStatus } from "../WidgetUserInfo";
import { MembersInfo } from "../MembersInfo";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import { AvatarMembers } from "../AvatarMembers";
import { GroupContext } from '../../contexts/groupContext';
import { UserContext } from '../../contexts/userContext';
import { 
  GroupPropsTypes, 
  UserPropsTypes 
} from "../../types";

export const Aside = () => {

    const { user }: any = useContext(UserContext);
    const { group }: any = useContext(GroupContext);

    //Constantes for users data
    const userId = user.map((user: UserPropsTypes) => user.id)
    const userName = user.map((user: UserPropsTypes) => user.name)    
    const userImageProfile = user.map((user: UserPropsTypes) => (
      user.images.profile
    ))
    //End Constantes user data

    //Constantes for group data
    const groupId = group.map((group: GroupPropsTypes) => group.id)
    const groupName = group.map((group: GroupPropsTypes) => group.name);
    const groupImage = group.map((group: GroupPropsTypes) => group.imageGroup);
    //End Constantes group data

    const navigate = useNavigate();

    const handleUserButton = () => {
      navigate('/membros');
    }

    const handleGroupButton = () => {
      navigate('/grupos');
    }

    return (
        <Container>
            <aside>
                <Sidebar>
                  <WidgetTitle><PeopleAltIcon /><span>Membros</span></WidgetTitle>
                  <WidgetUserInfo>
                    <div className="user-status-container">
                      <UserStatus userStatusColor="var(--main-color)">
                        <span>novo</span>
                      </UserStatus>
                      <UserStatus userStatusColor="var(--main-blue)">
                        <span>ativo</span>
                      </UserStatus>
                      <UserStatus userStatusColor="var(--main-purple)">
                        <span>popular</span>
                      </UserStatus>
                    </div>
                    <MembersInfo 
                      id={userId}
                      image_profile={userImageProfile[0]}
                      name={userName[0]} 
                      postDate="2 meses atrás"
                    />
                     <MembersInfo 
                      id={userId[1]}
                      image_profile={userImageProfile[1]}
                      name={userName[1]} 
                      postDate="3 meses atrás"
                    />     
                    <MembersInfo 
                      id={userId[2]}
                      image_profile={userImageProfile[2]}
                      name={userName[2]}
                      postDate="3 meses atrás"
                    />     
                    <MembersInfo 
                      id={userId[3]}
                      image_profile={userImageProfile[3]}
                      name={userName[3]} 
                      postDate="1 mês atrás"
                    />    
                     <MembersInfo 
                      id={userId[4]}
                      image_profile={userImageProfile[4]}
                      name={userName[4]} 
                      postDate="1 mês atrás"
                    />
                  </WidgetUserInfo>
                  <AsideButton onClick={handleUserButton}>Ver todos os membros</AsideButton>
                </Sidebar>
                <Sidebar>
                  <WidgetTitle><GroupsIcon /><span>Grupos</span></WidgetTitle>
                  <WidgetUserInfo>
                      <div className="user-status-container">
                        <UserStatus userStatusColor="var(--main-color)">
                          <span>novo</span>
                        </UserStatus>
                        <UserStatus userStatusColor="var(--main-blue)">
                          <span>ativo</span>
                        </UserStatus>
                        <UserStatus userStatusColor="var(--main-purple)">
                          <span>popular</span>
                        </UserStatus>
                        <UserStatus userStatusColor="var(--ligth-blue)">
                          <span>alfabético</span>
                        </UserStatus>
                      </div>
                      <MembersInfo 
                        id={groupId[0]}
                        image_profile={groupImage[0]}
                        name={groupName[0]} 
                        postDate="Ativo 2 meses atrás" 
                        notDisplay
                      />
                       <MembersInfo 
                        id={groupId[2]}
                        image_profile={groupImage[2]}
                        name={groupName[2]} 
                        postDate="Ativo 3 meses atrás" 
                        notDisplay
                      />
                       <MembersInfo 
                        id={groupId[5]}
                        image_profile={groupImage[5]}
                        name={groupName[5]} 
                        postDate="Ativo 1 mês atrás" 
                        notDisplay
                      />
                  </WidgetUserInfo>
                  <AsideButton onClick={handleGroupButton}>Ver todos os grupos</AsideButton>
                </Sidebar>
                <Sidebar>
                  <WidgetTitle><PeopleAltIcon /><span>Quem está online</span></WidgetTitle>
                  <div style={{padding:'2rem 2rem 0', fontSize: "1.6rem",}}>Não há usuários online agora</div>
                </Sidebar>
                <Sidebar>
                  <WidgetTitle><GroupsIcon /><span>Membros Ativos Recentemente</span></WidgetTitle>
                  <AvatarMembers />
                </Sidebar>
            </aside>
        </Container>
    );
}