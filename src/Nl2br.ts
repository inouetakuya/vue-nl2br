import type { CreateElement, RenderContext, VNode } from 'vue'

type Props = {
  tag: string
  text: string | null
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
      default: null,
    },
    className: {
      type: String,
      required: false,
    },
  },
  render(createElement: CreateElement, context: RenderContext<Props>): VNode {
    const { tag, className } = context.props
    const text = context.props.text || ''

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
        }, []),
    )
  },
}
