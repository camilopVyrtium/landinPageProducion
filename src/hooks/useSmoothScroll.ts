import { useEffect } from 'react';

export const useSmoothScroll = (tag: string | null, serviceIds: string[]) => {
    useEffect(() => {
        if (tag !== null) {
            const index = parseInt(tag);
            if (index >= 0 && index < serviceIds.length) {
                const element = document.getElementById(serviceIds[index]);
                if (element) {
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - 40;
                    
                    const duration = 1000;
                    const start = window.scrollY;
                    const distance = offsetPosition - start;
                    const startTime = performance.now();
                    
                    function scrollAnimation(currentTime: number) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        
                        const easeInOutCubic = (t: number): number => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1;
                        
                        window.scrollTo(0, start + (distance * easeInOutCubic(progress)));
                        
                        if (progress < 1) {
                            requestAnimationFrame(scrollAnimation);
                        }
                    }
                    
                    requestAnimationFrame(scrollAnimation);
                }
            }
        }
    }, [tag, serviceIds]);
}; 