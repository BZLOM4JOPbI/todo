import { defineStore, } from 'pinia'
import instance from '@/utils/request'


export const useUserStore = defineStore('user', () => {

    async function getUserId() {
        const result = await instance({
            method: 'POST',
            url: '/user/create-user',
        })
        return result
    }

    function setUserId(userId: { user_id: string }) {
        const userIdArr = Object.entries(userId)[0]
        localStorage.setItem(...userIdArr)
    }

    function checkUserId() {
        return !!localStorage.getItem('user_id')
    }

    async function authorize() {
        if (checkUserId()) return true

        await getUserId()    
            .then(res => setUserId(res.data))
            .catch(err => console.error(err))

        console.log(localStorage.getItem('user_id'))

        return true
    }

    async function getTask() {
        const result = await instance({
            method: 'GET',
            url: '/task/get-tasks',
        })
        return result
    }

    return { getTask, authorize, }
})