import { shallowMount } from '@vue/test-utils';
// import Vue from 'vue';
import Nl2br from '../src/Nl2br';

// // https://github.com/vuejs/vue-test-utils/issues/255#issuecomment-628628682
// export type ExtendedWrapper<T = Record<string, any>> = Wrapper<
//   Vue & { [key: string]: any } & T
//   >;

// global.Vue = Vue as any

// const factoryWrapper = () => {
// }

describe('Nl2br', () => {
  const wrapper = shallowMount(Nl2br, {
    context: {
      props: {
        tag: 'p',
        text: `myLine1\nmyLine2`,
        className: 'foo bar',
      }
    }
  })

  test('mount', () => {
    expect(wrapper.html()).toBe('')
  })
})
