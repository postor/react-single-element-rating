import { useState } from "react"
import Rating, { getStyling } from 'react-single-element-rating'

const Size = () => {
  let [rating, setRating] = useState(0)
  return (<div>
    <p>size small</p>
    <Rating value={rating} onChange={setRating}
      height={20}
      styling={getStyling({
        fontSize: 24,
        height: 20
      })} />
    <pre>
      {`<Rating value={rating} onChange={setRating}
      height={20}
      styling={getStyling({
        fontSize: 24,
        height: 20
      })} />`}
    </pre>
  </div>)
}

export default Size