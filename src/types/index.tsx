
export type UserPropsTypes = {
    id?: number,
    name?: string,
    nickname?: string,
    rating?: string,
    total_ratings?: string,
    image_profile?: string,
    image_cover?: string,
    post_image?: string | boolean,
    // notDisplay?: boolean,
    // postDate?: string
}

export type GroupPropsTypes = {
    id: number,
    name: string,
    image_group: string,
    group_type: string,
    image_cover: string,
    isPrivate: boolean
}

export type CommentsTypes = {
    userImg: string,
    postDate: string,
    userName: string,
    textComment: string
}

export type CounterViewsTypes = {
    counterNumber: string,
    counterCategory: string
}

export type MainBannerProps = {
    titlePage: string,
    pageDescription: string,
    children: any
}

export type NewFriendNoticeProps = {
    imgProfile: string,
    userName: string,
    imgUserCover: string,
    altTitle?: string,
    friend: string,
    postDate: string,
    imgFriendsProfile: string
}

export type UserPostTypes = {
    imgProfile: string,
    userName: string,
    groupName: string,
    postDate: string,
    textPost: string,
    coverPost: string,
    imgLikedUser1: string,
    imgLikedUser2: string,
    imgLikedUser3: string,
    commentsNumber: string,
    comment?: JSX.Element,
    comment2?: JSX.Element,
}

export type MembersInfoTypes = {
    name: string,
    image_profile: string,
    notDisplay?: boolean,
    postDate: string
}
