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
    const userId = ref<string | null>(null)
    function checkUserId() {
        const res = !!localStorage.getItem('user_id')
        isAuth.value = res
        return res
    }

    async function authorize() {
        if (checkUserId()) {
            userId.value = localStorage.getItem('user_id')
            return true
        }

        await getUserId()    
            .then(res => {
                setUserId(res.data)
                userId.value = localStorage.getItem('user_id')
                checkUserId()
            })
            .catch(err => {
                console.error(err)
            })

        console.log(localStorage.getItem('user_id'))

        return true
    }


    return { authorize, isAuth, userId, }
})