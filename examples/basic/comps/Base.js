import { useState } from "react"
import Rating from 'react-single-element-rating'

const Base = () => {
  let [rating, setRating] = useState(0)
  return (<div>
    <p>basic</p>
    <Rating value={rating} onChange={setRating} />
    <pre>
      {`<Rating value={rating} onChange={setRating} />`}
    </pre>
  </div>)
}

export default Base