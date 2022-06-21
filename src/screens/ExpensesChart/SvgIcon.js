import * as React from 'react';
import Svg, { G, Circle } from 'react-native-svg';

function SvgIcon(props) {
  return (
    <Svg width={72} height={48} viewBox="0 0 72 48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <G fill="none" fillRule="evenodd">
        <Circle fill="#382314" cx={48} cy={24} r={24} />
        <Circle stroke="#FFF" strokeWidth={2} cx={24} cy={24} r={23} />
      </G>
    </Svg>
  );
}

export default SvgIcon;
