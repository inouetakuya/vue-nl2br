import { mount } from '@vue/test-utils'
import Nl2br from '../src/Nl2br'

describe('Nl2br', () => {
  const wrapper = mount(Nl2br, {
    context: {
      props: {
        tag: 'p',
        text: 'myLine\nmyLine2',
        className: 'foo bar',
      },
    },
  })

  test('create br elements', () => {
    expect(wrapper.html()).toBe('<p class="foo bar">myLine<br>myLine2</p>')
  })
})
