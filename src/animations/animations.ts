import { easeInOut } from 'framer-motion';

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
            duration: 0.3, 
            ease: easeInOut,
        }
    },

    mobileContainer: {
        initial: {
            opacity: 0,
            height: 0,
        },
        animate: {
            opacity: 1,
            height: 'auto',
        },
        exit: {
            opacity: 0,
            height: 0,
        },
        transition: { 
            duration: 0.4, 
            ease: easeInOut,
        },
        smallTransition: { 
            duration: 0.2, 
            ease: easeInOut,
        }
    },

    // Chevron rotation animation
    chevron: {
        rotate: {
            open: 180,
            closed: 0,
        },
        transition: { 
            duration: 0.2, 
            ease: easeInOut 
        }
    }
};

export const opacityAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2, ease: easeInOut } },
    exit: { opacity: 0 },
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

export const inputAnimations = {
    border: {
        variants: {
            initial: {
                background: "linear-gradient(to right, var(--blue-color), var(--blue-color))"
            },
            activeAr: {
                background: "linear-gradient(to right, var(--light-blue-color), var(--dark-blue-color))"
            },
            activeEn: {
                background: "linear-gradient(to left, var(--light-blue-color), var(--dark-blue-color))"
            },
            error: {
                background: "linear-gradient(to right, var(--red-color), var(--red-color))"
            },
        },
        transition: {
            duration: 0.4,
            ease: easeInOut
        }
    }
};

export const loadingCircleVariants = {
    start: {
        y: "0%",
    },
    end: {
        y: "100%",
    },
};

export const loadingCircleTransition = {
    type: "spring",
    stiffness: 700,
    damping: 30,
};
