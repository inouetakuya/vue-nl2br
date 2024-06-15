import type { FunctionalComponent, VNode } from 'vue';
import { h } from 'vue';

type RootEl = Parameters<typeof h>[0];

const Nl2br: FunctionalComponent<{ tag: RootEl, text?: string, className?: string }> =
  (props, ctx) =>
    h(props.tag, { ...ctx.attrs, class: className }, (props.text ?? '')
      .split('\n')
      .reduce((acc: Array<VNode | string>, string: string) => {
        if (acc.length === 0)
          return [string];

        return [...acc, h('br'), string];
       }, []));
Nl2br.props = {
  tag: { type: [Object, String], required: true },
  text: { type: String, required: false },
  className: { type: String, required: false }
};
export default Nl2br;
