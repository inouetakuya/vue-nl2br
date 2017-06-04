export default {
  functional: true,
  props: {
    tag: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  render (createElement, context) {
    return createElement(context.props.tag,
      context.props.content.split('\n').reduce((accumulator, string) => {
        if (!Array.isArray(accumulator)) {
          return [accumulator, createElement('br'), string]
        }
        return accumulator.concat([createElement('br'), string])
      }))
  },
}
