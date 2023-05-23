import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Twitter = (props: SvgProps) => (
  <Svg

    width={26}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      fill="#2F2F2F"
      d="M8.18 21.562c9.808 0 15.175-8.128 15.175-15.175 0-.229-.005-.462-.015-.69A10.833 10.833 0 0 0 26 2.934c-.972.432-2.005.715-3.062.838a5.363 5.363 0 0 0 2.346-2.95 10.723 10.723 0 0 1-3.386 1.294 5.341 5.341 0 0 0-9.093 4.864 15.15 15.15 0 0 1-10.993-5.57 5.34 5.34 0 0 0 1.65 7.119 5.34 5.34 0 0 1-2.416-.665v.066a5.332 5.332 0 0 0 4.28 5.23 5.303 5.303 0 0 1-2.407.091A5.345 5.345 0 0 0 7.9 16.96 10.698 10.698 0 0 1 0 19.166a15.133 15.133 0 0 0 8.18 2.396Z"
    />
  </Svg>
)
export default Twitter