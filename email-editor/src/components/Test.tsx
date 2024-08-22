import React from 'react'
import { useRef } from 'react';

export default function test() {
    const h1 = useRef(null);
    const onClick = () => {
        if (!h1.current) return
        console.log(h1.current)
    }
  return (
    <div><h1 onClick={onClick} ref={h1}>hello</h1></div>
  )
}
