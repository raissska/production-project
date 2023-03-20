import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticlesIcon from 'shared/assets/icons/articles.svg';
import ArticleDetailsIcon from 'shared/assets/icons/articleDetails.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'about',

    },
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'main',

    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'profile',
        authOnly: true,

    },
    {
        path: RoutePath.articles,
        Icon: ArticlesIcon,
        text: 'articles',
        authOnly: true,

    },
];
