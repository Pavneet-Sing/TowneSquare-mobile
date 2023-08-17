import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const BarCodeIcon = (props: SvgProps) => (
  <Svg
   
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <G fill="#B882FF" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path d="M5.604 5.605v4.243h4.243V5.605H5.604Zm-2.122-.266c0-1.025.832-1.856 1.857-1.856h4.774c1.025 0 1.856.831 1.856 1.856v4.774a1.857 1.857 0 0 1-1.856 1.857H5.339a1.856 1.856 0 0 1-1.857-1.857V5.34ZM5.604 15.152v4.243h4.243v-4.243H5.604Zm-2.122-.265c0-1.026.832-1.857 1.857-1.857h4.774c1.025 0 1.856.831 1.856 1.857v4.773a1.857 1.857 0 0 1-1.856 1.857H5.339a1.856 1.856 0 0 1-1.857-1.857v-4.773ZM15.152 5.605v4.243h4.243V5.605h-4.243Zm-2.122-.266c0-1.025.831-1.856 1.857-1.856h4.773c1.026 0 1.857.831 1.857 1.856v4.774a1.857 1.857 0 0 1-1.857 1.857h-4.773a1.856 1.856 0 0 1-1.857-1.857V5.34ZM14.091 13.03c.586 0 1.06.475 1.06 1.061v3.183a1.06 1.06 0 1 1-2.12 0V14.09c0-.586.474-1.06 1.06-1.06Z" />
      <Path d="M17.274 13.03c.585 0 1.06.475 1.06 1.061v6.365a1.06 1.06 0 0 1-1.06 1.061H14.09a1.06 1.06 0 0 1 0-2.122h2.122v-5.304c0-.586.475-1.06 1.06-1.06Z" />
      <Path d="M16.213 15.682c0-.585.475-1.06 1.06-1.06h3.183a1.06 1.06 0 1 1 0 2.121h-3.182a1.06 1.06 0 0 1-1.061-1.06ZM20.456 17.804c.586 0 1.061.475 1.061 1.061v1.591a1.06 1.06 0 0 1-2.122 0v-1.591c0-.586.476-1.06 1.061-1.06Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5.5h24v24H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default BarCodeIcon