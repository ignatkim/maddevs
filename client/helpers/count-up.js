import { CountUp } from 'countup.js'

export default function countUp(entry, observer) {
  const { id } = entry.target
  const { endValue } = entry.target.dataset
  const animation = new CountUp(id, endValue)

  animation.start()
  observer.unobserve(entry.target)
}
