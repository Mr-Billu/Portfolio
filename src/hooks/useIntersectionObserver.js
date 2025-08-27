import { useState, useEffect } from 'react'

export const useIntersectionObserver = (id, threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold }
    )

    const element = document.getElementById(id)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [id, threshold])

  return isVisible
}
