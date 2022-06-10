import { Wrapper } from '@vue/test-utils'
import Vue from 'vue'

// https://github.com/vuejs/vue-test-utils/issues/255#issuecomment-628628682
export type ExtendedWrapper<T = Record<string, any>> = Wrapper<
  Vue & { [key: string]: any } & T
>
