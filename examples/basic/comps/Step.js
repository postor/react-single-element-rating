import { useState } from "react"
import Rating from 'react-single-element-rating'

const Step = () => {
  let [rating, setRating] = useState(0)
  return (<div>
    <p>step=0.5 max=10</p>
    <Rating value={rating} onChange={setRating} step={0.5} max={10} />
    <pre>
      {`<Rating value={rating} onChange={setRating} step={0.5} max={10} />`}
    </pre>
  </div>)
}

export default Step