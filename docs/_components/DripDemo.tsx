import React from "react"

import { css } from "@resembli/dripcss"

const useDrip = css`
  .drip-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(45deg, #f3ec78, #af4261);
    border-radius: 5px;
    margin: 20px;
  }

  & {
    font-weight: bolder;
    font-size: 2rem;
  }

  @media only screen and (max-width: 720px) {
    & {
      font-size: 1.5rem;
    }
  }
`

export function DripDemo() {
  const clx = useDrip()

  return (
    <div className="drip-container">
      <div className={clx}>Give your components some drip</div>
    </div>
  )
}
