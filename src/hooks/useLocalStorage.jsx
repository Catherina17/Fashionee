import { useCallback } from 'react'

export const useLocalStorage = () => {
    const setLocalStorage = useCallback((key, value) => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [])

    const getLocalStorage = useCallback((key) => {
        try {
            return JSON.parse(localStorage.getItem(key))
        } catch (e) {
            throw new Error(e)
        }
    }, [])

    const removeLocalStorage = useCallback((key) => {
        localStorage.removeItem(key)
    }, [])

    return {
        setLocalStorage,
        getLocalStorage,
        removeLocalStorage
    }
}