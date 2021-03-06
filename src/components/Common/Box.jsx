import styled from 'styled-components'
import {
  space,
  width,
  fontSize,
  color,
  textAlign,
  // lineHeight,
  // fontWeight,
  // letterSpacing,
  alignItems,
  // alignContent,
  justifyContent,
  flexBasis,
  flexDirection,
  flex,
  flexWrap,
  // justifyItems,
  // gridGap,
  // gridColumnGap,
  // gridRowGap,
  // gridColumn,
  // gridRow,
  // gridAutoFlow,
  // gridAutoColumns,
  // gridAutoRows,
  // gridTemplateColumns,
  // gridTemplateRows,
  // gridTemplateAreas,
  // gridArea,
  // border,
  justifySelf,
  alignSelf,
  // textColor,
  // bgColor,
  // fontFamily,
  // fontStyle,
  height,
  // maxHeight,
  // minHeight,
  // sizeHeight,
  // display,
  // size,
  // verticalAlign
} from 'styled-system'

import { Divider } from '@blueprintjs/core'

export const Box = styled.div`
  ${space}
  ${width}
  ${height}
  ${color}
`

export const DividerBox = styled(Divider)`
  ${space}
  ${width}
  ${height}
  ${color}
`

export const TextBox = styled(Box)`
  ${fontSize}
  ${textAlign}
  ${justifySelf}
  ${alignSelf}
`

export const Flex = styled(Box)`
  display: flex;
  ${alignItems}
  ${justifyContent}
  ${flexWrap}
  ${flexBasis}
  ${flexDirection}
`

export const FlexRow = styled(Box)`
  display: flex;
  flex-direction: row;
  ${alignItems}
  ${justifyContent}
  ${flexWrap}
  ${flexBasis}
`

export const FlexColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  ${alignItems}
  ${justifyContent}
  ${flexWrap}
  ${flexBasis}
`

export const FlexItem = styled.div`
  ${flex}
  ${justifySelf}
  ${alignSelf}
`
