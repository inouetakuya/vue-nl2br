import { mount } from '@vue/test-utils'
import Nl2br from '../src/Nl2br'
import type { ExtendedWrapper } from './types/wrapper'

const factoryWrapper = ({
  tag = 'p',
  text = 'myLine\nmyLine2',
  className = 'foo bar',
}: {
  tag?: string
  text?: string
  className?: string
} = {}): ExtendedWrapper => {
  return mount(Nl2br, {
    context: {
      props: {
        tag,
        text,
        className,
      },
    },
  })
}

describe('Nl2br', () => {
  let wrapper: ExtendedWrapper

  beforeEach(() => {
    wrapper = factoryWrapper()
  })

  it('creates br elements', () => {
    expect(wrapper.html()).toBe('<p class="foo bar">myLine<br>myLine2</p>')
  })

  describe('when text is empty', () => {
    beforeEach(() => {
      wrapper = factoryWrapper({ text: '' })
    })

    it('creates empty p elements', () => {
      expect(wrapper.html()).toBe('<p class="foo bar"></p>')
    })
  })
})
