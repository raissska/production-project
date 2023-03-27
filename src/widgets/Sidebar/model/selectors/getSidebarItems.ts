import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import AboutIcon from 'shared/assets/icons/about.svg';
import ArticlesIcon from 'shared/assets/icons/articles.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemList: SidebarItemType[] = [
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

        ];
        if (userData) {
            sidebarItemList.push(
                {
                    path: RoutePath.profile + userData.id,
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
            );
        }

        return sidebarItemList;
    },
);
