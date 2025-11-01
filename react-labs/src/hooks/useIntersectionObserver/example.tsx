import { useRef } from 'react'
import { useIntersectionObserver } from '.'

const ScrollExample = () => {
    const divRef = useRef(null)

    const isVisible = useIntersectionObserver(divRef, { threshold: 1 })
    return (
        <>
            <div style={{ height: '100vh' }}>Scroll Down</div>
            <div ref={divRef}>
                {isVisible ? 'Element Visible' : 'Still scrolling'}
            </div>
        </>
    )
}

export default ScrollExample
