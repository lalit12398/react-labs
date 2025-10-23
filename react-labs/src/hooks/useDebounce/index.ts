import { useEffect, useState } from 'react'

export const useDebounce = (value: string, delay: number) => {
    const [debounceVal, setDebounceVal] = useState(value)

    useEffect(() => {
        const handleDelay = setTimeout(() => {
            setDebounceVal(value)
        }, delay)

        return () => {
            clearTimeout(handleDelay)
        }
    }, [value, delay])
    return debounceVal
}
