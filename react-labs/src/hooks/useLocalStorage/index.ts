import { useEffect, useState } from 'react'

export const useLocalStorage = (key: string, defaultValue: unknown) => {
    //lazyInitialization to avoid unwanted computation on every render
    const [value, setValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : defaultValue
        } catch (err) {
            return defaultValue
        }
    })

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (err) {
            console.log(err)
        }
    }, [key, value])

    return [value, setValue]
}

//Expose setter, getter and clearItem for localStorage
//Usefull if explicit handlers are required
export const useLocalStorageWithSetGet = (
    key: string,
    defaultValue: unknown
) => {
    const [value, setValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : defaultValue
        } catch (err) {
            return defaultValue
        }
    })

    const setItem = (newValue: unknown) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(newValue))
            setValue(newValue)
        } catch (error) {
            console.log(error)
        }
    }

    const getItem = () => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : defaultValue
        } catch (error) {
            return defaultValue
        }
    }

    return { value, setItem, getItem }
}
