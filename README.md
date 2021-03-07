# vue-create-component-instance

This repository  aims to reproduce the error:

```
TypeError: Cannot destructure property 'createComponentInstance' of 'r.ssrUtils' as it is null.
```

# Steps to reproduce:

1. Build the project

```
yarn
yarn start
```

2. Open http://localhost:8080/
3. Look at the browser console.

# More info:

There is also this webpack warning:

```
WARNING in ./node_modules/@vue/server-renderer/dist/server-renderer.cjs.prod.js 96:63-70
Critical dependency: require function is used in a way in which dependencies cannot be statically extracted
 @ ./node_modules/@vue/server-renderer/index.js
 @ ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/HelloWorld.vue?vue&type=template&id=b9167eee&scoped=true
 @ ./src/components/HelloWorld.vue?vue&type=template&id=b9167eee&scoped=true
 @ ./src/components/HelloWorld.vue
 @ ./main.js
 @ ./browser.js
```