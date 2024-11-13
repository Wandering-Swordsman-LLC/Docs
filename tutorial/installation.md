# Installation

## Github
* Open this [website](https://github.com/)
* Create a new account
:::warning
Don't provide your personal email unless you are fine with other people seeing it. But it is **recommened** to put your email. You might use this account for future work in actual companies.
:::

## Github CLI
* Install Github CLI [here](https://cli.github.com/)
* Open a new terminal
```bash
gh auth login
```
:::details I don't know what to do!
Press enter to Github.com
```
? Where do you use GitHub?  [Use arrows to move, type to filter]
> GitHub.com
  Other
```
Press HTTPS
```
? What is your preferred protocol for Git operations on this host?  [Use arrows to move, type to filter]
> HTTPS
  SSH
```
Press Login with web broswer
```
? How would you like to authenticate GitHub CLI?  [Use arrows to move, type to filter]
> Login with a web browser
  Paste an authentication token
```
You should now be able to authenticate with Github
:::

## Git
* Install it from [here](https://git-scm.com/)
* When it asks for the default branch, you can change it from *master* to *main*
```bash
git config --global user.name "Your Name"
```
```bash
git config --global user.email "your_email@gmail.com"
```
:::warning
Please keep your **real name** and **real email** unless you don't want to expose it to the public. It is possible for other people to see your name and email, because git uses it as a "footprint" when you commit changes.
:::

## Nodejs / Bun
* Install it from [here](https://nodejs.org/en)
:::info
Bun is faster than Nodejs, however Roblox-TS supports NodeJS by default. There shouldn't be any bugs introduced by bun but its possible.
:::
:::details I want to use bun
Install it from [here](https://bun.sh/). Paste whatever it says in the terminal, then exit the terminal. For future tutorials, we will be using npm and/or bun.
:::

## VSCode
Install it from [here](https://code.visualstudio.com/). 
Install the following extensions:
* [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

:::details Optional extensions
* [rojo](https://marketplace.visualstudio.com/items?itemName=evaera.vscode-rojo)
* [roblox-ts](https://marketplace.visualstudio.com/items?itemName=Roblox-TS.vscode-roblox-ts)
* [flamework](https://marketplace.visualstudio.com/items?itemName=flamework.flamework-vscode)
* [charmed icons](https://marketplace.visualstudio.com/items?itemName=littensy.charmed-icons)
:::

## Rokit
:::details Windows
Download and run rokit.exe from the [latest release](https://github.com/rojo-rbx/rokit/releases/latest) page - this will automatically install Rokit.
* Make sure to run rokit.exe directly, by double-clicking it in the File Explorer, for automatic installation to be triggered.
* If it pops up a blue screen warning you it might be potentially unsafe software. Press `more info` under the big text and you should see a button called run anyway.
* After installing, you should restart your laptop because windows sucks
:::
:::details Mac/Linux
Run the automated installer script in your terminal:
```bash 
curl -sSf https://raw.githubusercontent.com/rojo-rbx/rokit/main/scripts/install.sh | bash
```
:::
