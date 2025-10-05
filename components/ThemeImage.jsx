'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeImage({ src, alt, ...rest }) {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Wait until client-side mount to prevent SSR mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // During SSR, render a neutral fallback (light mode version for example)
    return <Image src="/next.svg" alt={alt} {...rest} />
  }

  const currentTheme = theme === 'system' ? systemTheme : theme
  const finalSrc = currentTheme === 'dark' ? '/vercel.svg' : '/next.svg'

  return <Image src={finalSrc} alt={alt} {...rest} />
}
