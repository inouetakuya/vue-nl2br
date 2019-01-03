# vue-nl2br

A vue component which turns new lines into line breaks.

## Why not just use CSS?

See [Why not just use CSS `white-space: pre;`? · Issue #7](https://github.com/inouetakuya/vue-nl2br/issues/7)

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
  - Required: true
- `className`: HTML class name(s) 
  - Type: `String`
  - Required: false

## License

[MIT](https://opensource.org/licenses/MIT)
