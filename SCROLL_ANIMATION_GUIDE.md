# Scroll Animation System Guide

This guide explains how to use the scroll-triggered animation system implemented with Framer Motion.

## Overview

The scroll animation system provides:
- **Direction-aware animations**: Animations change based on scroll direction (up/down)
- **Reusable components**: Easy-to-use wrapper components
- **Multiple animation types**: Fade, slide, scale, and rotate animations
- **Performance optimized**: Uses Framer Motion's `useInView` for efficient detection

## Components

### 1. `useScrollDirection` Hook

Tracks scroll direction globally across the application.

```typescript
import { useScrollDirection } from '../hooks/useScrollDirection';

const MyComponent = () => {
  const scrollDirection = useScrollDirection(); // 'up' | 'down' | null
  // ...
};
```

### 2. `ScrollAnimationWrapper` Component

A reusable wrapper that provides scroll-triggered animations.

```typescript
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

<ScrollAnimationWrapper 
  animationType="slideUp"
  delay={0.2}
  duration={0.6}
  threshold={0.1}
  triggerOnce={false}
>
  <div>Your content here</div>
</ScrollAnimationWrapper>
```

## Animation Types

### Available Animation Types

1. **`fade`** - Simple fade in/out
2. **`slideUp`** - Slides up from bottom when scrolling down
3. **`slideDown`** - Slides down from top when scrolling down  
4. **`slideLeft`** - Slides in from the right
5. **`slideRight`** - Slides in from the left
6. **`scale`** - Scales from 80% to 100%
7. **`rotate`** - Rotates when entering viewport

### Direction-Aware Behavior

All slide animations are direction-aware:
- **Scrolling down**: Elements animate in from their starting position
- **Scrolling up**: Elements animate in from the opposite direction

## Props

### ScrollAnimationWrapper Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | - | Content to animate |
| `className` | string | '' | Additional CSS classes |
| `animationType` | AnimationType | 'fade' | Type of animation |
| `delay` | number | 0 | Animation delay in seconds |
| `duration` | number | 0.6 | Animation duration in seconds |
| `threshold` | number | 0.1 | Intersection threshold (0-1) |
| `triggerOnce` | boolean | false | Whether to animate only once |

## Usage Examples

### Basic Usage

```typescript
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const MySection = () => {
  return (
    <section>
      <ScrollAnimationWrapper animationType="slideUp">
        <h1>Animated Heading</h1>
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper animationType="fade" delay={0.2}>
        <p>This will fade in with a delay</p>
      </ScrollAnimationWrapper>
    </section>
  );
};
```

### Staggered Animations

```typescript
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

const StaggeredList = () => {
  return (
    <div>
      {items.map((item, idx) => (
        <ScrollAnimationWrapper 
          key={item}
          animationType="slideUp"
          delay={0.1 * idx} // Staggered delay
        >
          <div>{item}</div>
        </ScrollAnimationWrapper>
      ))}
    </div>
  );
};
```

### Different Animation Types

```typescript
const AnimationShowcase = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <ScrollAnimationWrapper animationType="slideLeft">
        <div>Slides from right</div>
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper animationType="slideRight">
        <div>Slides from left</div>
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper animationType="scale">
        <div>Scales up</div>
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper animationType="rotate">
        <div>Rotates in</div>
      </ScrollAnimationWrapper>
    </div>
  );
};
```

## Performance Considerations

### Optimizations

1. **Threshold**: Use appropriate threshold values (0.1-0.3) for better performance
2. **Trigger Once**: Set `triggerOnce={true}` for elements that should only animate once
3. **Efficient Detection**: Uses `useInView` with passive scroll listeners

### Best Practices

1. **Avoid Over-animation**: Don't animate every element
2. **Use Delays**: Stagger animations for better visual flow
3. **Consider Mobile**: Test on mobile devices for performance
4. **Reduce Motion**: Respect user's motion preferences

## Customization

### Adding New Animation Types

To add a new animation type, modify the `getAnimationVariants` function in `ScrollAnimationWrapper.tsx`:

```typescript
case 'bounce':
  return {
    hidden: { 
      opacity: 0, 
      y: scrollDirection === 'up' ? -30 : 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.68, -0.55, 0.265, 1.55] // Bounce easing
      }
    }
  };
```

### Custom Easing

You can customize the easing function for smoother animations:

```typescript
// In ScrollAnimationWrapper.tsx
const customEasing = [0.25, 0.46, 0.45, 0.94]; // Custom cubic-bezier

// Use in animation variants
transition: {
  duration,
  delay,
  ease: customEasing
}
```

## Troubleshooting

### Common Issues

1. **Animations not triggering**: Check threshold value and ensure element is visible
2. **Performance issues**: Reduce number of animated elements or use `triggerOnce={true}`
3. **Direction not working**: Ensure `useScrollDirection` hook is properly imported

### Debug Tips

1. Add console logs to check scroll direction:
```typescript
const scrollDirection = useScrollDirection();
console.log('Scroll direction:', scrollDirection);
```

2. Check if elements are in view:
```typescript
const isInView = useInView(ref, { threshold: 0.1 });
console.log('Is in view:', isInView);
```

## Browser Support

- Modern browsers with Intersection Observer API support
- Graceful degradation for older browsers
- Mobile-friendly with touch scroll support

## Dependencies

- `framer-motion`: Animation library
- `react-intersection-observer`: Intersection Observer hook (included with Framer Motion)

## Migration from Old System

If you're migrating from the old animation system:

1. Remove `useState` and `useEffect` for visibility tracking
2. Replace manual CSS transitions with `ScrollAnimationWrapper`
3. Remove `ref` and intersection observer setup
4. Update animation classes to use the wrapper component

Example migration:

```typescript
// Old way
const [isVisible, setIsVisible] = useState(false);
const ref = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(([entry]) => {
    setIsVisible(entry.isIntersecting);
  });
  observer.observe(ref.current);
  return () => observer.disconnect();
}, []);

return (
  <div 
    ref={ref}
    className={`transition-all ${isVisible ? 'opacity-100' : 'opacity-0'}`}
  >
    Content
  </div>
);

// New way
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

return (
  <ScrollAnimationWrapper animationType="fade">
    <div>Content</div>
  </ScrollAnimationWrapper>
);
``` 