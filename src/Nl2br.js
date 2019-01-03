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
  render(createElement, context) {
    return createElement(context.props.tag, {
      'class': context.props.className
    }, context.props.text.split('\n').reduce((accumulator, string) => {
      if (!Array.isArray(accumulator)) {
        return [accumulator, createElement('br'), string]
      }
      return accumulator.concat([createElement('br'), string])
    }))
  },
}
