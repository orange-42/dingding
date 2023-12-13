import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home/home.vue'
import HelloWorld from '../components/HelloWorld.vue'
import calendar from '../views/calendar/calendar.vue'
import archiveAccess from '../views/archiveAccess/archiveAccess.vue'
import archiveAccessProject from '../views/archiveAccessProject/archiveAccessProject.vue'
import financialAdvisory from '../views/financialAdvisory/financialAdvisory.vue'
import draftInput from '../views/draftInput/draftInput.vue'
import institutionalDocuments from '../views/institutionalDocuments/institutionalDocuments.vue'
import institutionalDocDetail from '../views/institutionalDocuments/institutionalDocDetail.vue'
import collectInstitutionalDocuments from '../views/institutionalDocuments/collectInstitutionalDocuments.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: home,
    },
    {
        path: '/about',
        name: 'About',
        component: HelloWorld,
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: calendar
    },
    {
        path: '/financialAdvisory',
        name: 'FinancialAdvisory',
        component: financialAdvisory
    },

    {
        path: '/institutionalDocuments',
        name: 'InstitutionalDocuments',
        component: institutionalDocuments
    },
    {
        path: '/institutionalDocDetail',
        name: 'InstitutionalDocDetail',
        component: institutionalDocDetail
    },
    {
        path: '/collectInstitutionalDocuments',
        name: 'CollectInstitutionalDocuments',
        component: collectInstitutionalDocuments
    },
    {
        path: '/archiveAccess',
        name: 'ArchiveAccess',
        component: archiveAccess
    },
    {
        path: '/archiveAccessProject',
        name: 'ArchiveAccessProject',
        component: archiveAccessProject
    },
    {
        path: '/draftInput',
        name: 'DraftInput',
        component: draftInput
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
