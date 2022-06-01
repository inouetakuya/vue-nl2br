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
  render(createElement: any, context: any) {
    return createElement(context.props.tag, {
      'class': context.props.className
    }, context.props.text.split('\n').reduce((accumulator: any, string: string) => {
      if (!Array.isArray(accumulator)) {
        return [accumulator, createElement('br'), string]
      }
      return accumulator.concat([createElement('br'), string])
    }))
  },
}
