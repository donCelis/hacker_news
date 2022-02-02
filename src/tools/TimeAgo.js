import { formatDistance } from 'date-fns'

const TimeAgo = (oldDate) => {
  const toDay = new Date()
  const convertCreatedAd = new Date(oldDate)
  const options = {
    addSuffix: true
  }
  const compareDate = formatDistance(convertCreatedAd, toDay, options)

  return compareDate
}

export default TimeAgo
