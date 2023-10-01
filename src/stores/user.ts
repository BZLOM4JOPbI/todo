import { defineStore, } from 'pinia'
import instance from '@/utils/request'


export const useUserStore = defineStore('user', () => {

    // function getApiUrl() {
    //     return import.meta.env.VITE_API_URL
    // }
    async function getUserId() {
        const result = await instance({
            method: 'POST',
            url: '/user/create-user',
            withCredentials: true,
        })
        return result
    }

    return { getUserId, }
})