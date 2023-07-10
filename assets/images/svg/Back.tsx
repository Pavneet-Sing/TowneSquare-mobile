import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const Back = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <G>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.75 12C2.75 11.4477 3.19772 11 3.75 11H20.25C20.8023 11 21.25 11.4477 21.25 12C21.25 12.5523 20.8023 13 20.25 13H3.75C3.19772 13 2.75 12.5523 2.75 12Z"
        fill="white"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.2071 4.54289C11.5976 4.93342 11.5976 5.56658 11.2071 5.95711L5.16421 12L11.2071 18.0429C11.5976 18.4334 11.5976 19.0666 11.2071 19.4571C10.8166 19.8476 10.1834 19.8476 9.79289 19.4571L3.04289 12.7071C2.65237 12.3166 2.65237 11.6834 3.04289 11.2929L9.79289 4.54289C10.1834 4.15237 10.8166 4.15237 11.2071 4.54289Z"
        fill="white"
      />
    </G>
    <Defs />
    <ClipPath id="clip0_2039_2758">
      <Rect width="24" height="24" fill="white" />
    </ClipPath>
    <Defs />
  </Svg>
);

export default Back;