import { useState } from "react"
import Rating, { getStyling } from 'react-single-element-rating'
import { getBG } from 'react-single-element-rating/dist/util'

let styling = {
  ...getStyling({}),
  baseBG: getBG({
    totalWidth: 200,
    text: '🖒',
    fill: 'gray',
  }),
  selectedBG: val => getBG({
    totalWidth: val * 40,
    text: '🖒',
    fill: 'yellow',
  })
}

const Icon1 = () => {
  let [rating, setRating] = useState(0)
  return (<div>
    <p>change icon</p>
    <Rating value={rating} onChange={setRating}
      styling={styling}
    />
    <pre>
      {`let styling = {
  ...getStyling({}),
  baseBG: getBG({
    totalWidth: 200,
    text: '🖒',
    fill: 'gray',
  }),
  selectedBG: val => getBG({
    totalWidth: val * 40,
    text: '🖒',
    fill: 'yellow',
  })
}


<Rating value={rating} onChange={setRating} styling={styling} />`}
    </pre>
  </div>)
}

export default Icon1