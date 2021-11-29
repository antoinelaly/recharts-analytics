import React from 'react';
import {
    Text, 
  } from 'recharts';

function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
    return (
      <Text
        {...rest}
        verticalAnchor="middle"
        y={y + (y - cy) / 6}
        x={x + (x - cx) / 6}
      >
        {payload.value}
      </Text>
    );
  }

  export default renderPolarAngleAxis;