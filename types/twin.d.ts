
import 'twin.macro'
import { css as cssImport } from '@emotion/react'
import styledImport from '@emotion/styled'
import { CSSInterpolation } from '@emotion/serialize'

declare module 'twin.macro' {
    // The styled and css imports
    const styled: typeof styledImport
    const css: typeof cssImport
}

declare module 'react' {
    // The tw and css prop
    interface DOMAttributes<T> {
        tw?: string
        css?: CSSInterpolation
    }

    interface HTMLAttributes<T> extends DOMAttributes<T> {
        css?: CSSInterpolation
    }
    // The inline svg css prop
    interface SVGProps<T> extends SVGProps<SVGSVGElement> {
        css?: CSSInterpolation
    }
}