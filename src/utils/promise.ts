const promise = (timeout: number = 5000) => {
    return new Promise(resolve => {
        setTimeout(() => resolve('done'), timeout)
    })
}

export default promise