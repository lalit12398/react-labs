import React, { useEffect, useState } from 'react'

const useIntersectionObserver = (
    ref: React.RefObject<HTMLElement | null>,
    options: { threshold: number }
) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting)
        }, options)

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current)
        }
    }, [ref, options])

    return isVisible
}

export { useIntersectionObserver }
