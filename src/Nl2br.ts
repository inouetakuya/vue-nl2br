import type { CreateElement, RenderContext, VNode } from 'vue'

type Props = {
  tag: string
  text: string
  className?: string
}

export default {
  functional: true,
  props: {
    tag: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      required: false,
    },
  },
  render(createElement: CreateElement, context: RenderContext<Props>): VNode {
    const { tag, text, className } = context.props

    return createElement(
      tag,
      {
        class: className,
      },
      text
        .split('\n')
        .reduce((accumulator: (VNode | string)[], string: string) => {
          if (accumulator.length === 0) {
            return new Array(string)
          }
          return accumulator.concat([createElement('br'), string])
        }, [])
    )
  },
}
