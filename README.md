# inline-pseudo

## Table of contents

* [What is inline-pseudo](#inline-pseudo)
* [Why use inline-pseudo?](#why-use-inline-pseudo)
* [Comparison to tailwind](#comparison-to-tailwind)
* [Roadmap](#roadmap)

# What is inline-pseudo?

inline-pseudo allows you to write pseudo styles directly into your html. Here's an example.

https://github.com/spencerchubb/inline-pseudo/assets/58525483/609a23d9-442c-42a8-ac91-68b8cab648a9

And here's the code for the above example. Just add a `hover` or `focus` attribute to an html element, and you're good to go!

```html
<button
    style="background: #00ffb4; padding: 8px; border-radius: 32px; font-weight: bold; transition: ease-in-out 0.3s; border: none;  outline: none;"
    hover="background: #00b4ff; color: white; cursor: pointer;">
    Hover me
</button>
<input
    type="text"
    placeholder="Focus me"
    style="border: 1px solid #888; outline: none; padding: 8px; border-radius: 2px; transition: ease-in-out 0.3s;"
    focus="border: 1px solid black; box-shadow: 0 0 12px -2px #3944d4; background: #eee;"
/>
```

# Why use inline-pseudo?

1. Easy to use. Just add a `hover` or `focus` attribute to an html element
2. Lightweight
    - The code is currently ~25 LOC. However, that could change if we add more features as described in the roadmap.

# Comparison to tailwind

inline-pseudo is inspired by the tailwind philosophy of writing styles directly in html.

That leads some people to wonder, "Why not just use inline styles?" It's because inline CSS does not support pseudo classes like `:hover` and `:focus`. inline-pseudo solves that issue by allowing you to write CSS for `:hover` and `:focus` directly in html.

Tailwind generates a CSS file with all of the pseudo-classes you need. For example, if you use a class called `hover:bg-sky-700`, tailwind will add a corresponding `:hover` class to your CSS file. This works great, but it requires a compilation step.

inline-pseudo solves the problem in a different way. We use javascript and call `getAttribute` directly on the html element to apply the style. This means you don't need to compile anything.

# Roadmap

This is just the Minimum Viable Library, so here are potential ideas for the future. Contributions are welcome!

- More pseudo classes like `:active`, `:checked`, `:disabled`, etc.
- Media queries
- Support for `@keyframes` and `animation` (maybe)
- Host the library on a CDN
- Other ideas?
