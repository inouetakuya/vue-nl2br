# vue-nl2br

A vue component that turns new lines into line breaks.

## Requirement

* [Vue.js](https://github.com/vuejs/vue) `^2.0.0`

## Installation

```sh
npm install --save vue-nl2br
```

## Usage

```html
<nl2br tag="p" :content="`myLine1\nmyLine2`" />
```

is rendered to

```html
<p>myLine1<br>myLine2</p>
```

### (1) To register a global component

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
  <nl2br tag="p" :content="`myLine1\nmyLine2`" />
</template>

<script>
import Nl2br from 'vue-nl2br'

export default {
  name: 'my-component',
  components: {
    Nl2br,
  },
  // ...
}
</script>
```

## Props

* `tag`: HTML tag name which is passed to [createElement function](https://vuejs.org/v2/guide/render-function.html#createElement-Arguments)
  * Type: `String`
  * Required: true
* `content`: Content in the tag.
  * Type: `String`
  * Required: true

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2017, INOUE Takuya
