# Loading Animation System

This document explains how to use the loading animation system implemented across the London College of Advanced Studies website.

## Overview

The loading animation system provides visual feedback to users during page transitions and data fetching operations. It consists of:

1. A global loading spinner that appears over the entire screen
2. A reusable `LoadingSpinner` component for specific UI elements
3. A loading context for programmatic control

## Components

### LoadingSpinner Component

A reusable spinner component that can be used in any part of the application.

**Props:**
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `variant`: 'primary' | 'secondary' | 'white' (default: 'primary')
- `className`: Additional CSS classes

**Usage:**
```jsx
import { LoadingSpinner } from '@/components/LoadingSpinner';

// Basic usage
<LoadingSpinner />

// With custom size and variant
<LoadingSpinner size="lg" variant="white" />

// With additional classes
<LoadingSpinner className="my-4" />
```

### Loading Context

A context that provides programmatic control over the global loading spinner.

**Methods:**
- `showLoading()`: Shows the global loading spinner
- `hideLoading()`: Hides the global loading spinner
- `isLoading`: Boolean indicating if loading spinner is currently visible

**Usage:**
```jsx
'use client';

import { useLoading } from '@/contexts/LoadingContext';

export default function MyComponent() {
  const { showLoading, hideLoading, isLoading } = useLoading();
  
  const fetchData = async () => {
    showLoading();
    try {
      // Perform async operation
      await apiCall();
    } finally {
      hideLoading();
    }
  };
  
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}
```

## Implementation

### Global Loading Provider

The `LoadingProvider` is implemented in the root layout (`app/layout.tsx`) and wraps the entire application, making the loading context available everywhere.

### Page Loading States

Next.js loading states are implemented using `loading.tsx` files in each route directory. These automatically show during page transitions.

### Form Loading Integration

Form components use the loading context to show the global spinner during form submission:

```jsx
const { showLoading, hideLoading } = useLoading();

const handleSubmit = async (e) => {
  e.preventDefault();
  showLoading();
  try {
    // Submit form
    await submitForm();
  } finally {
    hideLoading();
  }
};
```

## Adding Loading to New Pages

1. **For page transitions**: Create a `loading.tsx` file in the page directory
2. **For data fetching**: Use the `useLoading` hook in your client components
3. **For custom loading indicators**: Import and use the `LoadingSpinner` component

## Customization

The loading spinner can be customized by modifying the `LoadingSpinner.tsx` component. The global loading overlay can be customized in the `LoadingContext.tsx` file.