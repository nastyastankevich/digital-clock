import React, { FC } from 'react';
import './Digit.css'

const digitsStructure: {
  [prop: string]: number[],
} = {
  '0': [1, 1, 1, 0, 1, 1, 1],
  '1': [0, 0, 1, 0, 0, 1, 0],
  '2': [1, 0, 1, 1, 1, 0, 1],
  '3': [1, 0, 1, 1, 0, 1, 1],
  '4': [0, 1, 1, 1, 0, 1, 0],
  '5': [1, 1, 0, 1, 0, 1, 1],
  '6': [1, 1, 0, 1, 1, 1, 1],
  '7': [1, 0, 1, 0, 0, 1, 0],
  '8': [1, 1, 1, 1, 1, 1, 1],
  '9': [1, 1, 1, 1, 0, 1, 1],
}

interface Props {
  digit: string,
}

export const Digit: FC<Props> = ({ digit }) => (
  <div className="seven-segment">
    {digitsStructure[digit].map((item, i) => (
      <svg height="10" width="40" className={`seg seg-${i + 1}`} key={i}>
        <polygon
          points="0 5,05 0,035 0, 40 5, 035 10, 5 10, 0 5"
          style={{
            fill: item ? '#f04' : '#47080c',
          }}
        />
      </svg>
    ))}
  </div>
)

export default Digit;
