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


export const Aside = () => {

    const { user } = useContext(UserContext);
    const { group } = useContext(GroupContext);

    //Constantes for users data
    const userName = user.map(user => user.name);
    const userImageProfile = user.map(user => user.image_profile);
    //End Constantes user data

    //Constantes for group data
    const groupName = group.map(group => group.name);
    const groupImage = group.map(group => group.image_group);
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
                  <WidgetTitle><PeopleAltIcon /><Link to="/membros"><span>Membros</span></Link></WidgetTitle>
                  <WidgetUserInfo>
                    <div class="user-status-container">
                      <UserStatus userStatusColor="#ff5e3a">
                        <span>novo</span>
                      </UserStatus>
                      <UserStatus userStatusColor="#38a9ff">
                        <span>ativo</span>
                      </UserStatus>
                      <UserStatus userStatusColor="#7c5ac2">
                        <span>popular</span>
                      </UserStatus>
                    </div>
                    <MembersInfo 
                      imgProfile={userImageProfile[0]}
                      userName={userName[0]} 
                      postYear="2 meses atrás"
                    />
                     <MembersInfo 
                      imgProfile={userImageProfile[1]}
                      userName={userName[1]} 
                      postYear="3 meses atrás"
                    />     
                    <MembersInfo 
                      imgProfile={userImageProfile[2]}
                      userName={userName[2]}
                      postYear="3 meses atrás"
                    />     
                    <MembersInfo 
                      imgProfile={userImageProfile[3]}
                      userName={userName[3]} 
                      postYear="1 mês atrás"
                    />    
                     <MembersInfo 
                      imgProfile={userImageProfile[4]}
                      userName={userName[4]} 
                      postYear="1 mês atrás"
                    />
                  </WidgetUserInfo>
                  <AsideButton onClick={handleUserButton}>Ver todos os membros</AsideButton>
                </Sidebar>
                <Sidebar>
                  <WidgetTitle><GroupsIcon /> <a href="/"><span>Grupos</span></a></WidgetTitle>
                  <WidgetUserInfo>
                      <div class="user-status-container">
                        <UserStatus userStatusColor="#ff5e3a">
                          <span>novo</span>
                        </UserStatus>
                        <UserStatus userStatusColor="#38a9ff">
                          <span>ativo</span>
                        </UserStatus>
                        <UserStatus userStatusColor="#7c5ac2">
                          <span>popular</span>
                        </UserStatus>
                        <UserStatus userStatusColor="#08ddc1">
                          <span>alfabético</span>
                        </UserStatus>
                      </div>
                      <MembersInfo 
                      imgProfile={groupImage[0]}
                      userName={groupName[0]} 
                      postYear="Ativo 2 meses atrás" 
                      notdisplay
                      />
                       <MembersInfo 
                      imgProfile={groupImage[2]}
                      userName={groupName[2]} 
                      postYear="Ativo 3 meses atrás" 
                      notdisplay
                      />
                       <MembersInfo 
                      imgProfile={groupImage[5]}
                      userName={groupName[5]} 
                      postYear="Ativo 1 mês atrás" 
                      notdisplay
                      />
                  </WidgetUserInfo>
                  <AsideButton onClick={handleGroupButton}>Ver todos os grupos</AsideButton>
                </Sidebar>
                <Sidebar>
                  <WidgetTitle><PeopleAltIcon /> <a href="/membros"><span>Quem está online</span></a></WidgetTitle>
                  <div style={{padding:'2rem 2rem 0', fontSize: "1.6rem",}}>Não há usuários online agora</div>
                </Sidebar>
                <Sidebar>
                  <WidgetTitle><GroupsIcon /> <a href="/membros"><span>Membros Ativos Recentemente</span></a></WidgetTitle>
                  <AvatarMembers />
                </Sidebar>
            </aside>
        </Container>
    );
}