import { CreateElement, RenderContext, VNode } from 'vue'

type Props = { tag: string; text: string; className: string }

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
  render (createElement: CreateElement, context: RenderContext<Props>) {
    const {
      tag,
      text,
      className
    } = context.props

    return createElement(tag, {
      'class': className
    }, text.split('\n').reduce((accumulator: (string | VNode)[], string: string) => {
      return accumulator.length === 0 ?
        [string] :
        accumulator.concat([createElement('br'),
          string])
    }, []))
  },
}
