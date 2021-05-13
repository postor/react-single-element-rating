import { useState } from "react"
import Rating from 'react-single-element-rating'

const Base = () => {
  let [rating, setRating] = useState(0)
  return <Rating value={rating} onChange={setRating} />
}

let arr = new Array(10000).fill(0)

const Index = () => {
  if(typeof window=='undefined') return null
  return <>{arr.map((x,i) => <Base key={i} />)}</>
}

export default Index