'use client'

import { useEffect } from 'react'

const GTM_ID = 'GTM-ML5CHCLJ'
const META_PIXEL_ID = '1409744298031274'

// Loads GTM (which carries the GA4 tag) and the Meta Pixel after the first user
// interaction, or after a short idle delay, so third-party JS doesn't block the
// initial render and interactivity on mobile.
export default function DeferredAnalytics() {
  useEffect(() => {
    let loaded = false
    const events = ['scroll', 'pointerdown', 'keydown', 'touchstart', 'mousemove']

    const load = () => {
      if (loaded) return
      loaded = true
      events.forEach((e) => window.removeEventListener(e, load))
      clearTimeout(timer)

      // Google Tag Manager
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
      const gtm = document.createElement('script')
      gtm.async = true
      gtm.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
      document.head.appendChild(gtm)

      // Meta Pixel
      if (!window.fbq) {
        const n = (window.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        })
        if (!window._fbq) window._fbq = n
        n.push = n
        n.loaded = true
        n.version = '2.0'
        n.queue = []
        const fb = document.createElement('script')
        fb.async = true
        fb.src = 'https://connect.facebook.net/en_US/fbevents.js'
        document.head.appendChild(fb)
        window.fbq('init', META_PIXEL_ID)
        window.fbq('track', 'PageView')
      }
    }

    events.forEach((e) => window.addEventListener(e, load, { once: true, passive: true }))
    const timer = setTimeout(load, 5000)

    return () => {
      events.forEach((e) => window.removeEventListener(e, load))
      clearTimeout(timer)
    }
  }, [])

  return null
}
