import { mount } from '@vue/test-utils';
import Nl2br from '../src/Nl2br';

// // https://github.com/vuejs/vue-test-utils/issues/255#issuecomment-628628682
// export type ExtendedWrapper<T = Record<string, any>> = Wrapper<
//   Vue & { [key: string]: any } & T
//   >;


const factoryWrapper = () => {
  return mount(Nl2br, {
    context: {
      props: {
        tag: 'p',
        text: 'myLine1\nmyLine2',
        className: 'foo bar',
      }
    }
  })
}

describe('Nl2br', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = factoryWrapper();
  })

  test('mount', () => {
    expect(wrapper.is(Nl2br)).toBe(true)
  })
})
