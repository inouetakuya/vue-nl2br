import { mount, Wrapper } from '@vue/test-utils'
import Vue from 'vue'
import Nl2br from '../src/Nl2br'

// https://github.com/vuejs/vue-test-utils/issues/255#issuecomment-628628682
type ExtendedWrapper<T = Record<string, any>> = Wrapper<
  Vue & { [key: string]: any } & T
>

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
