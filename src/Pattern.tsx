import Point from "./models/Point"
import { Size } from "./Layout"

export type PatternProps = {
  id: string
  link: string
  size?: Size
  imageFactor?: number
}
const defaultSize = new Point(10, 10)

/**
 * Defines an `<defs><pattern><image>` group (will not be rendered) in order to allow defining images.
 * The given id can be used on the `Hexagon` to render the image
 */
export function Pattern({ id, link, size = defaultSize, imageFactor = 2  }: PatternProps) {
  return (
    <defs>
      <pattern
        id={id}
        patternUnits="objectBoundingBox"
        x={0}
        y={0}
        width={size.x}
        height={size.y}
      >
        <image
          xlinkHref={link}
          x={0}
          y={0}
          width={size.x * imageFactor}
          height={size.y * imageFactor}
        />
      </pattern>
    </defs>
  )
}

export default Pattern
