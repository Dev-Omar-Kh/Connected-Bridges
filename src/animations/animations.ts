import { easeInOut, easeOut } from 'framer-motion';

// Dropdown animations
export const dropdownAnimations = {

    container: {
        initial: { 
            opacity: 0, 
            y: -10,
            scale: 0.95,
            visibility: 'hidden',
        },
        animate: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            visibility: 'visible',
        },
        exit: { 
            opacity: 0, 
            y: -10,
            scale: 0.95,
            visibility: 'hidden',
        },
        transition: { 
            duration: 0.2, 
            ease: easeOut,
        }
    },

    // Chevron rotation
    chevron: {
        animate: { rotate: 0 },
        transition: { duration: 0.2, ease: easeInOut }
    }
};

// Helper function to get staggered animation for list items
export const getStaggeredListItemAnimation = (index: number) => ({
    initial: { opacity: 0, x: 10 },
    animate: { opacity: 1, x: 0 },
    transition: { 
        delay: 0.25 + (index * 0.03), 
        duration: 0.2 
    },
    whileHover: { x: 5 }
});

// Helper function to get chevron rotation based on hover state
export const getChevronAnimation = (isHovered: boolean, lang: string) => ({
    animate: { rotate: isHovered ? ( lang === 'ar' ? -90 : 90 ) : 0 },
    transition: { duration: 0.2, ease: easeInOut }
});
