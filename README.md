# vue-nl2br

> **DEPRECATED — No longer maintained**
>
> This package is no longer maintained. [Vue 2 reached End of Life on December 31, 2023](https://v2.vuejs.org/lts/), and modern CSS makes this component unnecessary in virtually all cases.
>
> **Use CSS `white-space: pre-wrap;` instead.** See the [Migration](#migration) section below.

![main workflow](https://github.com/inouetakuya/vue-nl2br/actions/workflows/main.yml/badge.svg)

A vue component which turns new lines into line breaks.

## Migration

In modern browsers, `vue-nl2br` can be replaced with a single CSS property: `white-space: pre-wrap;`.

### Before

```html
<nl2br tag="p" :text="`myLine1\nmyLine2`" class-name="foo bar" />
```

### After

```html
<p class="foo bar" style="white-space: pre-wrap;">{{ `myLine1\nmyLine2` }}</p>
```

Or with a CSS class (assuming `text` contains `\n` characters):

```css
.nl2br {
  white-space: pre-wrap;
}
```

```html
<p class="nl2br">{{ text }}</p>
```

### Why `pre-wrap` instead of `pre`?

Historically, `white-space: pre;` was sometimes considered insufficient because it disables line wrapping (see [Issue #7](https://github.com/inouetakuya/vue-nl2br/issues/7)). `white-space: pre-wrap;` solves this by preserving line breaks while still allowing automatic wrapping for long lines.

### Notes on subtle behavior differences

`white-space: pre-wrap;` is not a strictly bit-for-bit replacement for `vue-nl2br`. Two minor differences are worth knowing:

- **Whitespace preservation**: `pre-wrap` also preserves consecutive spaces and tabs in the source text. `vue-nl2br` only converts `\n` into `<br>` and lets the browser collapse other whitespace as usual.
- **Copy/paste behavior**: text rendered with `<br>` and text rendered with `pre-wrap` may behave slightly differently when users copy the content out of the page.

For the vast majority of use cases — displaying user-generated text with line breaks — these differences are negligible.

---

The sections below document the legacy API of `vue-nl2br` for existing users.

## Requirement

- [Vue.js](https://github.com/vuejs/vue) `^2.0.0`

## Installation

```shell
npm install --save vue-nl2br
```

## Usage

```html
<nl2br tag="p" :text="`myLine1\nmyLine2`" class-name="foo bar" />
```

is rendered to

```html
<p class="foo bar">myLine1<br>myLine2</p>
```

### (1) Global registration

https://vuejs.org/v2/guide/components.html#Registration

```js
import Vue from 'vue'
import Nl2br from 'vue-nl2br'

Vue.component('nl2br', Nl2br)
```

### (2) Local registration

https://vuejs.org/v2/guide/components.html#Local-Registration

```vue
// MyComponent.vue

<template>
  <nl2br tag="p" :text="`myLine1\nmyLine2`" />
</template>

<script>
import Nl2br from 'vue-nl2br'

export default {
  name: 'MyComponent',
  components: {
    Nl2br,
  },
  // ...
}
</script>
```

## Props

- `tag`: HTML tag name which is passed to [createElement function](https://vuejs.org/v2/guide/render-function.html#createElement-Arguments)
  - Type: `String`
  - Required: true
- `text`: Text in the tag.
  - Type: `String`
  - Default: null
- `className`: HTML class name(s) 
  - Type: `String`
  - Required: false

Note: when `text` property is empty or null, it renders an empty tag. ex) `<p></p>`.

If you prefer to render nothing at all, use `v-if` directive:

```html
<nl2br v-if="myText" tag="p" :text="myText" />
``` 

## License

[MIT](https://opensource.org/licenses/MIT)
