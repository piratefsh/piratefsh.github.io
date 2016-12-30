---
title: How To Delete Code
layout: post
categories: [how-to]
tags: [work, rails, es6, javascript, react, code, maintainence]
published: True
author: "Sher Minn C"
---

Most of the time we talk about how to write code, but rarely do we ever talk about __deleting code__. Every now and then, a feature gets decommissioned and an engineer is tasked with removing it. Sometimes I'm that engineer. 

This seems like a trivial thing to write about, but I was pleasantly surprised by how non-straightforward it can be. There're lots of learning points, especially on how code organization really matters when it comes to maintainability. 

Decommissioning a feature is more than just turning it off. It also means hunting down all the parts of code that is no longer needed. And that can be pretty tricky.

It goes without saying that this is by no means the only way to go about doing it. It also really depends on how your codebase is organized. Hopefully this will give you some idea on where to start and things to look out for when you're doing code cleanup.

For some context, our web client at Viki is on the following stack: 
- Frameworks/Libraries: Ruby on Rails (with I18n), React
- Styles: SCSS, Compass
- Scripts: JavaScript, ES6, some legacy Coffeescript
- Tests: RSpec for RoR and Jasmine for all JavaScript

## Step 0: Before you start
So let's say I have a feature to remove. It's a little widget that pops up to ask our users a little survey. Based on a series of experiements turning it off on different views, we've come to realize that it is no longer performing. 

Let's call it a `popover`. This is the name used in the codebase to prefix CSS classes and JavaScript modules. Let's go!

### Run all your tests
This seems kind of unnecessary, but trust me on this. When you get about to removing code and your tests are failing, you're gonna want to know if it's because you did it, and not because it was already broken.

If you don't have tests, it's a little tricker. You may do your sanity check to make sure things are generally working. Tests are a great tool when it comes to maintaining code, so do consider writing some in the future.

### Branch off
I like doing this because it makes it easy to diff the changes on Github after I'm done. Having pull request reviews gives you an extra bit of peace of mind. I usually name my cleanup branches something like `refactor/remove-popover`. 

### Identify where the relevant code lives
Is it a client-side only feature? Is there code in your backend that is supporting the feature? Look out for potential places where supporting code will be. If your code is prefixed with a unique name, this is when full codebase search comes in handy.

If you're on Rails, be sure to check in your views, controllers, routes and assets (images, stylesheets, scripts).

## Step 1: Styles
I like starting with the front-end components because it's easier to trace the code used starting there. 

Styles are a good place to start because stylesheets don't have any other dependencies or references. If you start by removing HTML, you will also be removing references to scripts and styles, which will make it a bit more difficult to go back later. If you start with scripts, you may be removing endpoint usage, which you need to know when cleaning up the backend. There's always git logs, but I find starting bottom up works well.

1. Start by looking for CSS classes in your HTML files (views, partials/templates) and React or other JavaScript JSX components.
2. Now you have a bunch of classes. If they're prefixed with the feature, e.g. `popover-menu`, then it's likely that they're not used elsewhere. If they're not prefixed, check for other usages.
2. If you are using a preprocessor like SCSS, check for variables or mixins used by those classes.  If they're not used elsewhere, remove them.
3. Check for references to images in those `url()`s. If they're not used elsewhere, remove them.
3. Finally, you can remove those classes.

Be aware that scripts can add dynamically generated classes too, so a quick search in your codebase might not be enough. I have yet to find an elegant solution to this problem. There are tools out there that can help you find unused CSS, but they may not cover the JavaScript scenario.

__Bonus: write maintainable CSS.__ It's always better to put CSS variables where you use them unless they're global (e.g. brand colors). It was a common pattern (ala Bootstrap) to put all variables in a giant `variables.scss` file. However I find that it makes CSS harder to manage since I'll have to variable-hunt. At least prefix variables according to the component it is used for (e.g. `$popover-menu`, `$popover-title`) and group them in the same place.

## Step 2: Scripts
Alrighty, now that those styles are gone, we can move on to removing scripts. Look in your HTML templates and layouts to find out which scripts and modules are being used.

1. Check if the dependencies in those files are used elsewhere. If not, you can remove them from your build.
2. Take note of any endpoints being called, we'll need to check if these are used anywhere else.
3. Also take note of any I18n strings that are being used.
3. Once you have cleared all the dependencies unique to the feature, go ahead and delete those scripts.
4. Now, run your tests if you have them. 

Tests are usually grouped by feature, so keep an eye out for a bunch of failing tests. If they're still passing, it means something is forgotten. Yay for failing tests! (for once). And of course, make sure other tests are passing.

## Step 3: Localization strings
I _always_ forget to do this. Gahhh.

If you are using an I18n library, make sure to check your locale files and remove the strings that are not used in your templates and layouts.

__Bonus: group your localization files by feature.__ Our localization strings are organized by feature, so they're usually prefixed or in their own subtree. This makes it a whole lot easier for deletion, especially since you can search for their usage by the prefix or subtree name. If I have a `popover` subtree to strings, usage looks like this: `I18n.t('popover.title')`, and I can easily search for its usage throughout the codebase.

If they end up being used elsewhere later, do try to group them under a general use subtree so you know it's multi-use. Trimming down your I18n files, especially for front-end use can by very satisfying.

## Step 4: Templates and Layouts
And now you can remove HTML templates and layouts! This is the final bit for the front-end stuff. 

## Step 5: Backend and APIs
Now we move on to the backend components, if there was one. If not, skip to the next step.

This is more relevant to Ruby on Rails, but might be applicable to other MVC frameworks.

1. Look up all the endpoints used in your list of routes (`routes.rb` if you're on RoR). Check which controllers and actions that they point to.
2. As usual, check for dependencies in those controllers and remove them if they are not used elsewhere.
3. Go ahead and delete the controllers! Also remember to remove helper functions that may live in other places like `ApplicationController`.
4. Run tests to make sure the relevant ones fail. As usual, make sure everything else passes.

## Step 6: Tests
Now you can go ahead and remove all the tests and specs for the feature. Don't forget to remove the fixtures/fixture generators and test-related dependencies. 

## Step 7: Documentation
If your documentation was already in the deleted files, great! You can skip this step. If not, go ahead and remove them from your docs.

__And that's it!__

## Conclusion

This definitely feels like a process that can be automated, especially if it's tailored to your codebase. There are tools to alert you of unused code which can be useful. They may have limitations. For example, our `I18n-tasks` [Rails gem](https://github.com/glebm/i18n-tasks) that searches for unused I18n strings does not catch usage of JS runtime generated strings. It may not be a dealbreaker, but it's something to keep in mind.

Code cleanup is more art than science, so your mileage may vary depending on how well your codebase is organized. When I do code cleanups, I tend to forget things, so this how-to also serves as a checklist. Deleting unused code is part of the lifecycle of a healthy codebase, so hopefully this helps!


Now go forth and delete some code!


---

Special shoutout to my engineering manager at Viki, [Chin Yong](https://twitter.com/chinyong) for helping me figure out all the above, and for the countless code reviews on my deletion branches.

