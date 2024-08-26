import { useEffect, useState } from "react";

function getWindowDimensions(): 'small' | 'medium' | 'large' {
    const { innerWidth: width } = window;

    if (width < 768) {
        return 'small';
    }
    if (width < 1268) {
        return 'medium';
    }
    return 'large';
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return windowDimensions;
}