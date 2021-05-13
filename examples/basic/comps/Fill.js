import { useState } from "react"
import Rating, { getStyling } from 'react-single-element-rating'
import { getBG } from 'react-single-element-rating/dist/util'

let styling = {
  ...getStyling({}),
  baseBG: getBG({ totalWidth: 200, fill: 'yellow' }),
  selectedBG: val => getBG({ totalWidth: val * 40, fill: 'blue', stroke: 'red' })
}

const Fill = () => {
  let [rating, setRating] = useState(0)
  return (<div>
    <p>fill blue</p>
    <Rating value={rating} onChange={setRating}
      styling={styling}
    />
    <pre>
      {`let styling = {
  ...getStyling(),
  baseBG: getBG({ totalWidth: 200, fill: 'yellow' }),
  selectedBG: val => getBG({ totalWidth: val * 40, fill: 'blue' })
}

<Rating value={rating} onChange={setRating} styling={styling} />`}
    </pre>
  </div>)
}

export default Fill