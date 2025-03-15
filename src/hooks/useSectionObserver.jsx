import { useEffect } from 'react';

const useSectionObserver = (sections) => {
    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const url = new URL(window.location);
                    if (entry.target.id === 'aboutme' && window.scrollY === 0) {
                        url.pathname = '/';
                    } else {
                        url.pathname = `/${entry.target.id}`;
                    }
                    window.history.pushState(null, '', url.toString());
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5,
        });

        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [sections]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                const url = new URL(window.location);
                url.pathname = '/';
                window.history.pushState(null, '', url.toString());
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
};

export default useSectionObserver;