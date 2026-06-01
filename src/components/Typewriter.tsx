import { useEffect, useState } from 'react'

/** Cycles through phrases with a type/delete effect. */
export default function Typewriter({ words }: { words: string[] }) {
  const [text, setText] = useState('')
  const [wi, setWi] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wi % words.length]
    let delay = deleting ? 36 : 70

    if (!deleting && text === current) {
      delay = 1500
      const t = setTimeout(() => setDeleting(true), delay)
      return () => clearTimeout(t)
    }
    if (deleting && text === '') {
      setDeleting(false)
      setWi((i) => (i + 1) % words.length)
      return
    }

    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
      )
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, wi, words])

  return (
    <span className="typewriter">
      {text}
      <span className="caret">_</span>
    </span>
  )
}
