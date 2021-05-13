import { useState } from "react"
import Rating, { getStyling } from 'react-single-element-rating'
import { getBG } from 'react-single-element-rating/dist/util'

let styling = {
  ...getStyling({}),
  baseBG: getBG({
    totalWidth: 200,
    fontSize: 24,
    text: '😢'
  }),
  selectedBG: val => getBG({
    totalWidth: val * 40,
    fontSize: 24,
    text: '😎'
  })
}

const Icon2 = () => {
  let [rating, setRating] = useState(0)
  return (<div>
    <p>two icons (<span style={{ color: 'red' }}>only work when `step` is int)</span></p>
    <Rating value={rating} onChange={setRating}
      styling={styling}
    />
    <pre>
      {`let styling = {
  ...getStyling({}),
  baseBG: getBG({
    totalWidth: 200,
    fontSize: 24,
    text: '😢'
  }),
  selectedBG: val => getBG({
    totalWidth: val * 40,
    fontSize: 24,
    text: '😎'
  })
}

<Rating value={rating} onChange={setRating} styling={styling} />`}
    </pre>
  </div>)
}

export default Icon2