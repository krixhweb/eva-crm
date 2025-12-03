
import { Variants } from 'framer-motion';

// --- Transition Settings ---
export const transition = {
  spring: {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
  },
  subtle: {
    type: "spring" as const,
    stiffness: 200,
    damping: 25,
  },
  wobble: {
    type: "spring" as const,
    stiffness: 500,
    damping: 15,
    mass: 1.2,
  }
};

// --- Variants ---

// Container for staggering children
<<<<<<< HEAD:src/lib/motion.ts
export const staggerContainer: Variants = {
=======
export const staggerContainer: any = {
>>>>>>> fdb300de90f2e745681c47e92fa73a0758628c5a:lib/motion.ts
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.01
    }
  }
};

// Standard Fade In
<<<<<<< HEAD:src/lib/motion.ts
export const fadeIn: Variants = {
=======
export const fadeIn: any = {
>>>>>>> fdb300de90f2e745681c47e92fa73a0758628c5a:lib/motion.ts
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3 } }
};

// Slide Up with Fade (Cards, List Items)
<<<<<<< HEAD:src/lib/motion.ts
export const slideUp: Variants = {
=======
export const slideUp: any = {
>>>>>>> fdb300de90f2e745681c47e92fa73a0758628c5a:lib/motion.ts
  hidden: { opacity: 0, y: 15 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: transition.subtle
  }
};

// Scale In (Modals, Badges)
<<<<<<< HEAD:src/lib/motion.ts
export const scaleIn: Variants = {
=======
export const scaleIn: any = {
>>>>>>> fdb300de90f2e745681c47e92fa73a0758628c5a:lib/motion.ts
  hidden: { opacity: 0, scale: 0.95 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: transition.subtle
  }
};

// Hover Effects
export const hoverScale = {
  scale: 1.01,
  y: -2,
  transition: { duration: 0.2 }
};

// Wobble Effect for Kanban Drops or Attention
<<<<<<< HEAD:src/lib/motion.ts
export const wobbleEffect: Variants = {
=======
export const wobbleEffect: any = {
>>>>>>> fdb300de90f2e745681c47e92fa73a0758628c5a:lib/motion.ts
  initial: { scale: 1, rotate: 0 },
  animate: {
    scale: [1, 1.02, 0.98, 1],
    rotate: [0, 1, -1, 0],
    transition: transition.wobble
  }
<<<<<<< HEAD:src/lib/motion.ts
};
=======
};
>>>>>>> fdb300de90f2e745681c47e92fa73a0758628c5a:lib/motion.ts
