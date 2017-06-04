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
  },
  render (createElement, context) {
    return createElement(context.props.tag,
      context.props.text.split('\n').reduce((accumulator, string) => {
        if (!Array.isArray(accumulator)) {
          return [accumulator, createElement('br'), string]
        }
        return accumulator.concat([createElement('br'), string])
      }))
  },
}
