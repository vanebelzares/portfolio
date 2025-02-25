'use client'
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect } from 'react'
import PostHogPageView from './PostHogPageView'

import { ReactNode } from 'react';

export function PostHogProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

    if (posthogKey && posthogHost) {
    if (process.env.NODE_ENV === 'production') {
      posthog.init(posthogKey, {
        api_host: posthogHost,
        person_profiles: 'always',
      });
    }
    } else {
      console.error('PostHog key or host is not defined');
    }
  }, [])

  return (
    <PHProvider client={posthog}>
        <PostHogPageView />
      {children}
    </PHProvider>
  )
}