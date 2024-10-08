import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '..views/HomeView.vue'
import FeedView from '..views/FeedView.vue'
import CommunityView from '..views/CommunityView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/feed', component: FeedView },
  {
    path: '/community/:comunity_name',
    name: 'community', 
    component: CommunityView
  },
  
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})