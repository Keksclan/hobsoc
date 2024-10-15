import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import FeedView from '../views/FeedView.vue'
import CommunityView from '../views/CommunityView.vue'
import GroupsView from '../views/GroupsView.vue'
import NotFound from '../views/notFoundViews/NotFound.vue'
import CommunityHomeView from '../views/ViewChildren/CommunityChilds/CommunityHomeView.vue'
import CommunityPostsView from '../views/ViewChildren/CommunityChilds/CommunityPostsView.vue'
import UserView from '../views/UserView.vue'
import UserGroupsView from '../views/ViewChildren/UserChilds/UserGroupsView.vue'
import UserHomeView from '../views/ViewChildren/UserChilds/UserHomeView.vue'
import UserPostsView from '../views/ViewChildren/UserChilds/UserPostsView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/feed', name:'feed',component: FeedView },
  { path: '/groups', name:'group',component: GroupsView },
  { path: '/home', redirect: '/' },
  {
    path: '/community/:communityName',
    name: 'community', 
    component: CommunityView,
    props: true,
    children: [
      {
        path: '',
        name: 'communityHome',
        component: CommunityHomeView
        
      },
      { path: 'home', redirect: '' },
      {
        path: 'posts',
        name: 'communityPosts',
        component: CommunityPostsView,
      }
    ]
  },
  {
    path: '/user/:userName',
    name: 'profile',
    component: UserView,
    children: [
      { path: '', 
        name: 'userHome',
        component: UserHomeView
      },
      { path: 'home', redirect: '' },
      {
        path: 'posts', 
        name: 'userPosts', 
        component: UserPostsView
      },
      { 
        path: 'groups', 
        name: 'userGroups', 
        component: UserGroupsView
      },
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;