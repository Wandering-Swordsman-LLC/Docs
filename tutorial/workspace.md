# Setting Up the Workspace
For the tutorial here, we will mainly use bash/CLI commands. If you have previous knowledge of git/github and perfers external tools such as [Github Desktop](https://desktop.github.com/download/) or [source control within vscode](https://code.visualstudio.com/docs/sourcecontrol/overview) you are free to do that instead.

## Cloning the repository
```bash
git clone 
https://github.com/Wandering-Swordsman-LLC/Wandering-Swordman.git
```
:::warning
Make sure you are in `Downloads` directory or a place you know you can find it in the file explorer. Do not close your terminal, or you might mess up with the tutorial.
:::

## Installing packages
```bash
cd Wandering-Swordman
```

::: code-group
```bash [npm]
npm i
```
```bash [bun]
bun i
```
```bash [pnpm]
pnpm i
```
:::
:::info
The packages should appear under `node_modules`
:::

## Opening VScode
```bash
code .
```
If that doesn't work then either drag your folder from the file explorer to vscode. Or checkout this [stack overflow post](https://stackoverflow.com/questions/29955500/code-is-not-working-in-on-the-command-line-for-visual-studio-code-on-os-x-ma)

## Installing Tools
At your current directory/sub directory run
```bash
rokit install
```
