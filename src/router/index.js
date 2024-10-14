import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import FeedView from '../views/FeedView.vue'
import CommunityView from '../views/CommunityView.vue'
import GroupsView from '../views/GroupsView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/feed', name:'feed',component: FeedView },
  { path: '/groups', name:'group',component: GroupsView },
  {
    path: '/community/:comunity_name',
    name: 'community', 
    component: CommunityView,
    children: [
      {
        path: 'home',
      },
      {
        path: 'posts'
      }
    ]
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;