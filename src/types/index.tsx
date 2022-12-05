
export type UserPropsTypes = {
    id?: number,
    name?: string,
    nickname?: string,
    rating?: string,
    total_ratings?: string,
    image_profile?: string,
    image_cover?: string,
    post_image?: string | boolean,

    images?: any,
    classification?: any
}

export type GroupPropsTypes = {
    id: number,
    name: string,
    imageGroup: string,
    groupType: string,
    imageCover: string,
    isPrivate: boolean
}

export type CommentsTypes = {
    id?: number,
    userImg: string,
    postDate: string,
    userName: string,
    textComment: string,
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
    userId?: number,
    friendId?: number,
    imgProfile: string,
    userName: string,
    imgUserCover: string,
    altTitle?: string,
    friend: string,
    postDate: string,
    imgFriendsProfile: string
}

export type UserPostTypes = {
    userId?: number,
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
    userLiked1?: number,
    userLiked2?: number,
    userLiked3?: number
}

export type MembersInfoTypes = {
    id: number,
    name: string,
    image_profile: string,
    notDisplay?: boolean,
    postDate?: string,
    nickname?: string,
    hasNick?: boolean
}

export type GroupsInfoTypes = {
    image_group: string,
    group_name: string,
    status_group: string,
    key: string
}

export type SliderTypes = {
    imgSlider1: string,
    imgSlider2: string,
    imgSlider3: string
}
