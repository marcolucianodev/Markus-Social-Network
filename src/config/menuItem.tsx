import React from "react";

import PublicIcon from '@mui/icons-material/Public';
import InfoIcon from '@mui/icons-material/Info';
import GradingIcon from '@mui/icons-material/Grading';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import CommentIcon from '@mui/icons-material/Comment';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import GroupsIcon from '@mui/icons-material/Groups';
import ReviewsIcon from '@mui/icons-material/Reviews';


export const menuItem = [
    {
      id: 1,
      nameItem: 'Visão Geral',
      urlMenu: '/user1',
      iconItem: <PublicIcon />
    },
    {
      id: 2,
      nameItem: 'Sobre',
      urlMenu: '/user2',
      iconItem: <InfoIcon />
    },
    {
      id: 3,
      nameItem: 'Atividade',
      urlMenu: '/user2',
      iconItem: <GradingIcon />
    },
    {
      id: 4,
      nameItem: 'Posts',
      urlMenu: '/user2',
      iconItem: <DynamicFeedIcon />
    },
    {
      id: 5,
      nameItem: 'Comentários',
      urlMenu: '/user2',
      iconItem: <CommentIcon />
    },
    {
      id: 6,
      nameItem: 'Amizades',
      urlMenu: '/user2',
      iconItem: <PeopleOutlineIcon />
    },
    {
      id: 7,
      nameItem: 'Grupos',
      urlMenu: '/user2',
      iconItem: <GroupsIcon />
    },
    {
      id: 8,
      nameItem: 'Avaliações',
      urlMenu: '/user2',
      iconItem: <ReviewsIcon />
    }
  ]