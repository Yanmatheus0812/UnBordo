import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const CloseIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#1A1A2D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 6 6 18M6 6l12 12"
    />
  </Svg>
)
export default CloseIcon
