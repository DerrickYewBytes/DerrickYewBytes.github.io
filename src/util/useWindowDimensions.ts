import { useEffect, useState } from "react";

function getWindowDimensions(): 'small' | 'medium' | 'large' {
    const { innerWidth: width, innerHeight: height } = window;

    if (width < 768) {
        return 'small';
    }
    if (width < 1024) {
        return 'medium';
    }
    return 'large';
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    console.log(windowDimensions)
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return windowDimensions;
}