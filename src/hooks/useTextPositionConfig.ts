import { useState, useEffect } from "react"
import useWindowDimensions from "./useWindowDimension"


export default function useTextPositionConfig() {

  const [textPosition, setTextPosition] = useState('')
  const { width } = useWindowDimensions()

  useEffect(() => {
    width <= 768 ? setTextPosition('text-center') : setTextPosition('')
  }, [width])

  return textPosition;
}