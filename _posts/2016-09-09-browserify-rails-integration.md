---
title: Browserify, ES6 and Rails integration notes
layout: post
categories: [projects]
tags: [work, rails, browserify, es6, javascript, react]
published: True
author: "Sher Minn C"
---

Some notes on integrating Browserify in our Rails app via the [browserify-rails](https://github.com/browserify-rails/browserify-rails) gem and getting it to play nice with ES6 and `react-rails`.

Here are some notes that may be useful if you're also working on it. I picked up a lot of tips from various articles. If you're starting out, I recommend reading the following guides:

* [Rails, React,Browserify - Packaging your React components](https://medium.com/technically-speaking/rails-react-browserify-e315001d5974#.h5o9rs90c)
* [Using ES6 with browserify-rails](http://mnishiguchi.com/2016/05/20/using-es6-with-browserify-rails/)
* [Rails + Browserify + React + es7](https://gist.github.com/oelmekki/c78cfc8ed1bba0da8cee)

Disclaimer: this is more of tips and random learnings than an actual how-to.

## Motivation
We have been using mostly sprockets-style `//= require` to include Javascript dependencies. The problem with sprockets require is that whenever a JavaScript file gets included, it is included globally.

So for example, if I have a `DropdownMenu` component which depends on a `DropdownMenuItem` component, my code will look like this:

__DropdownMenuItem.js.jsx__

```javascript
 class DropdownMenuItem extends React.Component {
   render(){
    ...
   }
 }
```
__DropdownMenu.js.jsx__

```javascript
//= require './DropdownMenuItem'

 class DropdownMenu extends React.Component {
   render(){
    ...
   }
 }
```

There are several issues with this:

* Sprockets require just concatenates files together, so the class declarations have to be global. This means that `DropdownMenuItem` will be accessible globally via other components that don't need it.
* Hard to track dependencies of each component, which makes it harder to refactor. 
* Mistakes happen more often. I came across a couple of mistakes involving using a wrong variable, but didn't crash because the variable existed in the global scope in some non-related component. 
* Related to the above: you also have to worry more about namespacing.
* Hard to break down our JavaScript files into smaller chunks. Everything is still compiled into a giant `application.js` file. With Browserify-style require, it will be easier for us to manage dependencies when we separate our JS files according to views. 
* And the worst: no access to npm modules! With Browserify, we'll finally be able to use modules from npm.

## About browserify-rails
the [browserify-rails](https://github.com/browserify-rails/browserify-rails) gem allows you to use `module.exports` and `require('component')`, CommonJS modules in your app. It also plays nice with Sprockets-style require. Check out the [README](https://github.com/browserify-rails/browserify-rails).

---

## Porting strategies
When converting your JavaScript classes and variables to modules, it can be a lot of work and messy. Here are a couple of tips. By converting to modules I'm referring to the following:

__before__

```js
class DropdownMenu extends React.Component {
 ...
}

// or in ES5
var DropdownMenu = {
 ...
}

```

__after__

```js
export default class DropdownMenu extends React.Component {
 ...
}

// in ES5
var DropdownMenu = {
 ...
}

module.exports = DropdownMenu
```

### fix tests first
I cannot emphasize how important it is to have your tests. When converting your files into modules, add the export statements, run tests (which will break, because they were probably requiring files Sprocket-style). Fix tests, then run again to make sure nothing else broke.

### start from lowest level components 
Start by first converting components that do not have other requires. This will naturally cascade the changes upwards and will make it less likely for you to forget components.

### if you're on Docker
If you're running a Rails app on Docker, you'll need to also install npm in your ecosystem. 

__Dockerfile__

```
...
RUN apt-get -qq update && apt-get install nodejs nodejs-legacy npm -y
```

And don't forget to run `npm install` in your run script somewhere.

---

## Issues encountered

### module cannot be found
If everything is correctly named, but the module cannot be found on require/import, your file may have an unknown extension. Browserify only recognizes a few extensions by default. If you have `.js.jsx` extensions, you will need to explicitly declare that in the command line options. E.g.

__application.rb__

```rb
 # recognize .jsx and .js.jsx extensions as files to browserify
 config.browserify_rails.commandline_options = "-t [ babelify --presets [ es2015 react ] ] --extension='.jsx' --extension='.js.jsx'"
```

### export default doesn't work
With the gem as is, requiring a default export still requires an explicit reference the the default object. e.g. `require('./thing').default`.

__Solution:__ I used [babel-plugin-add-module-exports](https://github.com/59naga/babel-plugin-add-module-exports) so default exports don't require the explicit `.default` reference. 

### multiple React instances when running tests with `jasminerice`
When running tests, I encountered this [error](https://facebook.github.io/react/warnings/refs-must-have-owner.html):


```
Invariant Violation: addComponentAsRefTo(...): Only a ReactOwner can have refs. You might be adding a ref to a component that was not created inside a component's `render` method, or you have multiple copies of React loadedInvariant Violation: addComponentAsRefTo(...): Only a ReactOwner can have refs. You might be adding a ref to a component that was not created inside a component's `render` method, or you have multiple copies of React loaded
```

Turns out `react-rails` was appending another react to spec files (due to import of TestUtils from 'react-addons-test-utils'). I have not figured out why React gets included twice and how to prevent it.

__Solution:__ Not quite a solution, but a compromise for now. Instead of importing React, module style, we reverted back to using the `react-rails` react required by sprockets (i.e. `//= require 'react'`).

---

## Drawbacks

### react-ujs requires globally accessible components.

So if you ever use `react_component`, you will need to expose the component to the global scope. But to minimize polluting the global space, you can assign the components to a 'holder' object. Example as follows:

__dropdown_app.js__

```javascript
global.dropdownApp = {
 DropdownMenu: require('components/DropdownMenu')
}
```

__show.html.erb__

```erb
...

 <%= react_component('dropdownApp.DropdownMenu', { resource_id: resource.id }) %>

...

```

For the record, our commandline options look like this:

```rb
 # babelify transform with es2015 and react presets
 # ignore files in template directories (legacy code)
 # using add-module-exports plugin. see above for reason
 # recognize .js and .js.jsx extensions
 config.browserify_rails.commandline_options = "-t [ babelify --ignore [ */templates/* ] --presets [ es2015 react ] --plugins [ add-module-exports ] ] --extension='.jsx' --extension='.js.jsx'"
```

And that's it! 
