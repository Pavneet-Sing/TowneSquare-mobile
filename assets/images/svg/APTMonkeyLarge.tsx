// @ts-nocheck
import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from 'react-native-svg';
const APTMonketLarge = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props}>
    <Path
      fill="url(#a)"
      d="M19 .577a2 2 0 0 1 2 0l15.32 8.846a2 2 0 0 1 1 1.732v17.69a2 2 0 0 1-1 1.732L21 39.423a2 2 0 0 1-2 0L3.68 30.577a2 2 0 0 1-1-1.732v-17.69a2 2 0 0 1 1-1.732L19 .577Z"
    />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.0025)" />
      </Pattern>
      <Image
        xlinkHref="data:image/jpeg;base64,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"
        id="b"
        width={400}
        height={400}
      />
    </Defs>
  </Svg>
);
export default APTMonketLarge;