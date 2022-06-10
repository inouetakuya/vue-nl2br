import { mount } from '@vue/test-utils'
import Nl2br from '../src/Nl2br'
import type { ExtendedWrapper } from './types/wrapper'

const factoryWrapper = (props: {
  tag: string
  text: string
  className?: string
}): ExtendedWrapper => {
  return mount(Nl2br, {
    context: {
      props,
    },
  })
}

describe('Nl2br', () => {
  let wrapper: ExtendedWrapper

  beforeEach(() => {
    wrapper = factoryWrapper({
      tag: 'p',
      text: 'myLine\nmyLine2',
    })
  })

  it('creates br elements', () => {
    expect(wrapper.html()).toBe('<p>myLine<br>myLine2</p>')
  })

  describe('when text is empty', () => {
    beforeEach(() => {
      wrapper = factoryWrapper({ tag: 'p', text: '' })
    })

    it('creates empty p element', () => {
      expect(wrapper.html()).toBe('<p></p>')
    })
  })

  describe('when className is set', () => {
    beforeEach(() => {
      wrapper = factoryWrapper({
        tag: 'p',
        text: 'myLine\nmyLine2',
        className: 'foo bar',
      })
    })

    it('creates p element with class attribute', () => {
      expect(wrapper.html()).toBe('<p class="foo bar">myLine<br>myLine2</p>')
    })
  })
})
