---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Wandering Swordsman Docs"
  tagline: "Official documentation on how to setup the workspace, stack, workflows. Used internally. "
  actions:
    - theme: brand
      text: Get started
      link: /tutorial/terminal
    - theme: alt
      text: Our Stack
      link: setup/stack
  image:
    src: "/nerd.png"

features:
  - title: Professional Workflows
    details: "Before deploying our game to the official game. We run unit tests, linting
    compile code. This makes code review easier and more predictable patterns."
  - title: Strict Rules
    details: "With ESLint, Prettier we can ensure everyone can produce the coding
    style, no typos, same naming convention. We enforce best practices with frameworks. "
  - title: Safe Game
    details: "With the nature of Roblox-TS and Darklua, our output code will be unreadable
    for people who dex, making it extremely hard for them to read and reproduce our game."
---
