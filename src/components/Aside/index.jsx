import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import { Sidebar, WidgetTitle } from "../Sidebar";
import { WidgetUserInfo, UserStatus } from "../WidgetUserInfo";
import { MembersInfo } from "../MembersInfo";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import ImgUser1  from '../_assets/img/user-1.jpg';
import ImgUser2 from '../_assets/img/user-2.jpg';
import ImgUser3 from '../_assets/img/user-3.jpg';
import ImgUser6 from '../_assets/img/user-6.jpg';
import ImgUser7 from '../_assets/img/user-7.jpg';
import imgGroup1 from "../_assets/img/destinos-turisticos.jpg";
import imgGroup2 from "../_assets/img/rotas-de-trilhas.jpg";
import imgGroup3 from "../_assets/img/series.jpg";
import { AvatarMembers } from "../AvatarMembers";



export const Aside = () => {
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
                      imgProfile={ImgUser1}
                      userName="Carlos" 
                      postYear="2 meses atrás"
                    />
                     <MembersInfo 
                      imgProfile={ImgUser7}
                      userName="Daniel" 
                      postYear="3 meses atrás"
                    />     
                    <MembersInfo 
                      imgProfile={ImgUser3}
                      userName="Michelle" 
                      postYear="3 meses atrás"
                    />     
                    <MembersInfo 
                      imgProfile={ImgUser2}
                      userName="Thalles" 
                      postYear="1 mês atrás"
                    />    
                     <MembersInfo 
                      imgProfile={ImgUser6}
                      userName="Cíntia" 
                      postYear="1 mês atrás"
                    />                          
                  </WidgetUserInfo>
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
                      imgProfile={imgGroup1}
                      userName="Destinos Turísticos" 
                      postYear="Ativo 2 meses atrás" 
                      notdisplay
                      />
                       <MembersInfo 
                      imgProfile={imgGroup2}
                      userName="Rotas de Trilhas" 
                      postYear="Ativo 3 meses atrás" 
                      notdisplay
                      />
                       <MembersInfo 
                      imgProfile={imgGroup3}
                      userName="Melhores Séries" 
                      postYear="Ativo 1 mês atrás" 
                      notdisplay
                      />
                  </WidgetUserInfo>
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