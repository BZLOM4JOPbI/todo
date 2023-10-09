import { defineStore, } from 'pinia'
import instance from '@/utils/request'
import { ref, } from 'vue'


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

    const isAuth = ref(false)
    function checkUserId() {
        const res = !!localStorage.getItem('user_id')
        isAuth.value = res
        return res
    }

    async function authorize() {
        if (checkUserId()) return true

        await getUserId()    
            .then(res => {
                setUserId(res.data)
                console.log(checkUserId())
            })
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



    return { getTask, authorize, isAuth, }
})