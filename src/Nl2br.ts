import type { CreateElement, RenderContext, VNode } from 'vue'

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
  render(createElement: CreateElement, context: RenderContext): VNode {
    return createElement(
      context.props.tag,
      {
        class: context.props.className,
      },
      context.props.text
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
