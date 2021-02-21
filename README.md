<h1 align="center"><b>Angularization</b></h1>
<br>
<p align="center"> 
  <img width="120px" src="a-degrees.png" />
</p>
<h3 align="center">
(Work-in-Progress)
<br>
<br>
<b>Angular 11+</b> development tutorials for intermediate developers who need to start from 0.</h3>
<br>
<hr>
<br>
I decided to start Angularization in order to document the Angular 11+ web-development experience of a fellow developer and I — after having a quasi-knowledge-transferring, quasi-mutually-learning session for getting completely setup with a Node.js version manager (NVM), Visual Studio Code, and Angular 11. 
<br>
<br>

The content in the sub-sections are my own personal insights, so... 

**I highly recommend that anyone serious about Angular 2+ development always turn to [angular.io](https://angular.io) as their primary source of guidance when setting up, getting started, and learning Angular**.

However, I hope that you find this thoroughly documented, living README helpful as content is continually added.

For now, **please give this repo a ⭐ if you think Angularization can be useful for novice Angular developers — based off of what is available below thus far**. 

Thanks.
<p align="right">— @pjnalls</p>
<br>
<br>
<h2 align="center"><b>Sections</b></h2>

### [**"*NVM* not NPM" ❓**](#nvm-not-npm--1)
* [What is an "NVM"?](#what-is-an-nvm)
* [Why an NVM?](#why-an-nvm)
* [How to Install NVM](#how-to-install-nvm)
* [How to Use NVM](#how-to-use-nvm)
* [NVM Alternatives](#nvm-alternatives)
### [**Visual Studio Code 🟦**](#visual-studio-code--1)
* [Integrated Terminal](#integrated-terminal)
* [Add Terminals](#add-terminals)
* [End a Terminal Session](#end-a-terminal-session)
* [Select Default Shell](#select-default-shell)
* [Caveats: IDE-Restarts & Permissions](#caveats-ide-restarts--permissions)
* [Extensions (Optional)](#extensions-optional)
* [Bonus: Zen Mode](#bonus-zen-mode)
### [**Angular 11+, Component-Driven Development 🔥: Markdown Blog Tutorial**](#angular-11-component-driven-development--markdown-blog-tutorial-1)
* [Getting Started: Angular CLI](#getting-started-angular-cli)
* [Storybook.js, Why, & Getting Started](#storybookjs-why--getting-started)
* [Okay, Let's Do This!: Component-Driven, Angular 11 Development 🔥](#okay-lets-do-this-component-driven-angular-11-development-)
* [`app.component`: HTML, SCSS, & TypeScript](#appcomponent-html-scss--typescript)
* [`app.module`](#appmodule)
* [`package.json`](#packagejson)
* [NPM Scripting: Create New Script](#npm-scripting-create-new-script)
* [NPM Scripting: Update `start`](#npm-scripting-update-start)
* [NPM Scripting: CI/CD Power 💪](#npm-scripting-cicd-power-)
* [`npm generate component <component-name>`](#npm-generate-component-component-name)
* [Angular**DRY**: Don't. Repeat. Yourself.](#angulardry-dont-repeat-yourself)
* [`*ng`X: Structural Directives](#ngx-structural-directives)
* [Unidirectional Data Flow: `ParentComponent` <b>→</b> `ChildComponent`](#unidirectional-data-flow-parentcomponent--childcomponent)
<br>
<br>
<br>
<br>

<hr>

## **"*NVM* not NPM" ❓** 
#### [Return to "Sections"](#sections)
<hr>
<br>

### **What is an "NVM"?**
NVM stands for ***N*ode *V*ersion *M*anager**. Essentially, it is a system utility for installing, using, and managing multiple versions of Node.js.

Below is a [NVM-Windows](https://github.com/coreybutler/nvm-windows) example when using a Bash (Git Bash, more specifically) shell:

```

$ nvm list
  
    15.8.0
  * 14.15.5 (Currently using 64-bit executable)

$ node -v
v14.15.5

$ nvm use 15.8.0
Now using node v15.8.0 (64-bit)

$ node -v
v15.8.0

$

```

As you can see above, we're able to switch versions of `node` with a simple `nvm use` command.
<br>
<br>

### **Why an NVM?**
If you work on multiple Node.js projects at any point, simultaneously or sequentially, it would behoove you not to have more than one version of Node.js on your machine — especially if you maintain any number of legacy and modern applications at an enterprise.
<br>
<br>
Let's put this in perspective: at the time of writing this sub-section of Angularization (February 15, 2021), Node.js was initially released 11+ years ago (May 27, 2009) [[1]](https://github.com/nodejs/node-v0.x-archive/tags?after=v0.0.4) — soon to be *12 years ago*. Since that time, there's been ***500+ versions released for Node.js*** [[2]](https://nodejs.org/dist/).
<br>
<br>
Therefore, invest some time into researching and using a reliable type of NVM, since at some point — if not now or in the past — you'll most likely need it as Node.js development progresses. 
<br>
<br>
**I'll be using NVM-Windows, but you can check the ["NVM Alternatives"](#nvm-alternatives) sub-section for other popular NVM projects.** 
<br>
<br>

### **How to Install NVM**
As mentioned in the previous sub-section, I and another developer used NVM-Windows for our Node version manager during our initial Angular 11+ session, and I have been using it since Summer 2016 (if I remember correctly).

Needless to say, I haven't had any troubles with it on a Windows machine. 

Follow the set of instructions in the "**Installation & Upgrades**" sections in the `README` found [here on GitHub](https://github.com/coreybutler/nvm-windows/releases).

**WARNING:** Make sure you read the ***PREREQUISITE*** part for uninstalling existing Node.js & NPM installations. 

Also be sure to read the second paragraph about global module conflicts and backing up any global `npmrc` configurations.

...

Done? Okay... *now* — time to put `nvm` to use.

<br>

### **How to Use NVM**
**NVMs' commands vary** due to different implementations so check your preferred NVM's documentation for details. 

For ***NVM-Windows***, refer to the https://github.com/coreybutler/nvm-windows#usage page and section full description of all the commands.
<br>
<br>

### **NVM Alternatives**
**Disclaimer**: I've only personally and *professionally* used NVM-Windows, so please research these alternatives if you've never used any of the NVMs I mentioned in this documentation. 
* `nvm`: https://github.com/nvm-sh/nvm (**45,000+ ⭐**)
* `n`: https://github.com/tj/n (14,000+ ⭐)
* `choco` https://github.com/chocolatey/choco (7,000+ ⭐)

<br>
<br>
<br>
<br>
<hr>

## **Visual Studio Code 🟦** 
#### [Return to "Sections"](#sections)
<hr>

<br>

[Visual Studio (VS) Code](https://code.visualstudio.com/) is already widely used by many, but I just want to touch briefly on a few of many features that helped us while we went through setting up for the Angular 11+ session.

<br>

### **Integrated Terminal**
During two Angular dev. sessions, we relied heavily on VS Code's integrated terminal — as using the [Angular CLI](https://cli.angular.io/) was crucial for our efficiency. 

*Really*. We were able to use the integrated terminal and Angular CLI to get a broken Angular 8 app migrated to version 11 and fully functional **in less than 2 hours**! (Other than some minor caveats, [update.angular.io](https://update.angular.io/) walked us through the whole migration process.)

So please ensure that you have it in the bottom of your workspace.

<br>

For those new to VS Code, it looks like this:

```
PROBLEMS   OUTPUT   DEBUG CONSOLE   TERMINAL
                                   ¯¯¯¯¯¯¯¯¯¯

$ echo hello world
hello world

$




```
<br>

Ignore the "`$ echo hello world`", etc. if your not using Bash as I'm using for your terminal shell.

If you don't see any of that in your workspace, then simply go to `Terminal` and select `New Terminal` from the top menu:

```
🟦  File   Edit   Selection   View   Go   Run   Terminal   Help
                                                ¯¯¯¯¯¯¯¯¯
```
<br>

### **Add Terminals**
We will be working with multiple terminal sessions at some point during Angular development so search for the large `+` button if you need to add another terminal session.
```
 ____________________
| 1: bash          v |   +   [|]   🗑   ^   ×
 ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
                         ^
                        /_\
                         |
                         |
```
<br>

From here, you can use the terminal dropdown switch between terminals.
```
 ____________________
| 2: bash          v |   +   [|]   🗑   ^   ×
 ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
                   ^
                  /_\
                   |
                   |
```
<br>

### **End a Terminal Session**
You can end a terminal session by clicking the 🗑 (waste-basket-looking) icon.

Click the 🗑 icon.
```
 ____________________
| 2: bash          v |   +   [|]   🗑   ^   ×
 ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
                                   ^
                                  /_\
                                   |
                                   |
```
<br>

And the list of terminals will select the terminal before the one that just ended.
```
 ____________________
| 1: bash          v |   +   [|]   🗑   ^   ×
 ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
  ^
 /_\
  |
  |
```

<br>

### **Select Default Shell**

Select a default shell terminal by clicking the terminal dropdown menu.
```
 ____________________
| 1: bash          v |
 ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
                   ^
                  /_\
                   |
                   |
```
<br>

Once the menu opens, choose the `Select Default Shell` from the dropdown options and choose your preferred shell. Again, I'm using Bash for my shell, which I recommend in order for you to have an easier time following this documentation, but you are free to use others if you must. 


<br>

### **Caveats: IDE-Restarts & Permissions**
1. You may need to close and reopen VS Code to get any system changes to show in VS code. We had some issues with the integrated terminal not recognizing global system commands (`node`, `npm`, etc.), so try to restart VS Code first if you don't see any immediate changes when making any system changes throughout this documentation.
1. You may run into administrative issues where you may not be permitted to run a certain command in your particular terminal session as we did during our setup session. It may be that, but if worst comes to worst, you can just use a different shell (e.g., `poweshell` → `cmd`) like we did.

<br>

### **Extensions (Optional)**
Installing extensions or not is entirely up to you. I'm of the "sugarless" (read my [Unsweet.js README](https://github.com/pjnalls/unsweet.js)), minimalist mindset (mostly) when it comes to relying on multiple, third-party plugins, dependencies, etc. and I recommend you add as little to your development environment early on since you can always add later — but this is completely optional.

<br>

### **Bonus: Zen Mode**
Press `Ctrl` and `K` keys simultaneously, and then immediately tap `Z` to enter... **Zen Mode**.

Double tap `Escape` to exit.

You're welcome 😉.
<br>
<br>
<br>

<hr>

## **Angular 11+, Component-Driven Development 🔥: Markdown Blog Tutorial** 
#### [Return to "Sections"](#sections)
<hr>
<br>

For this tutorial, we're going to create a single-paged blog application which adds, views, edits and deletes blog posts written in markdown. 

TBD: I want to take a component-driven and visually test-driven approach to development with Storybook.js, and I'm still deciding if I want to use Express, Swagger, MongoDB for our middleware, API documentation, and backend technologies as I want to only use Angular "out-of-box" as much as possible. 

<br>

### **Getting Started: Angular CLI**
You can use [cli.angular.io](https://cli.angular.io/) or follow along below.

...

First, globally install Angular CLI with the `npm` command.
```
PROBLEMS   OUTPUT   DEBUG CONSOLE   TERMINAL
                                   ¯¯¯¯¯¯¯¯¯¯

$ npm install -g @angular/cli

...

+ @angular/cli@11.2.1
added 238 packages from 182 contributors in 19.985s

$

```
<br>

Now that the CLI module has been installed, let's jump straight into Angular app development by creating a new app with the `ng new <app-name>` command and `cd` into the new app.

```
$ ng new get-great-at-ng-blog
? Do you want to enforce stricter type checking and stricter bundle budgets in the workspace?
  This setting helps improve maintainability and catch bugs ahead of time.
  For more information, see https://angular.io/strict Yes
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS   [ https://sass-lang.com/documentation/syntax#scss                ]

CREATE get-great-at-ng-blog/angular.json (3817 bytes)
CREATE get-great-at-ng-blog/...
...
Installing packages (npm)...

...
                                      ] 
✓ Packages installed successfully.
...

$ cd get-get-at-ng-blog

$
```


<br>

If you notice placeholder templates in your `src/app/app.component.html` file then run the following command...

```
$ rm -rf src/app/app.component.html && touch src/app/app.component.html
```
<br>

### **Storybook.js, Why, & Getting Started**
"Storybook is an open source tool for developing UI components in isolation for React, Vue, Angular, and more" [[1]](https://storybook.js.org/).

Even if you're not planning on creating a full-blown design system, a tool like Storybook can be used in order for full leverage it's [visual test-driven development (visual TDD)](https://www.chromatic.com/blog/visual-test-driven-development/) and [component-driven development (CDD)](https://www.chromatic.com/blog/component-driven-development/).

It enforce [DRY principles](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) to make your code reusable so that it work anywhere with the correct data. Furthermore, it gives you living documentation of all your UI from the smallest, atomic component to full-blown pages (and I've seen some one put there whole Angular app). All that with hot-module reloading on top 🍒! 

All Storybook asks of you is to write short [stories](https://storybook.js.org/docs/react/get-started/whats-a-story). It's just as simple as `$ touch <ComponentName>.stories.ts` in your terminal and adding less than 30 lines of code at best — once you have Storybook installed and a component generated.

...

So if your on board, you just need to do two things in the root of your Angular 11+ app:

1. Install Storybook.

```
$ npx sb init
```

2. Run Storybook.
```
$ npm run storybook
```

Feel free to detour from this tutorial and go to the official ones at [learnstorybook.com](https://www.learnstorybook.com/intro-to-storybook/react/en/simple-component/).


### **Okay, Let's Do This!: Component-Driven, Angular 11+ Development 🔥**

Once you get comfortable with Storybook, let's use the Angular CLI to generate two [simple component](https://www.learnstorybook.com/intro-to-storybook/angular/en/simple-component/) and then a [composite component](https://www.learnstorybook.com/intro-to-storybook/angular/en/composite-component/).

<br>

First, `ng generate` the `navbar` composite component:
```
$ ng generate component navbar
```
<br>

Next, `ng generate` the `nav-item` and `brand` simple components nested inside the `navbar` composite component:

```
$ ng generate component navbar/nav-item

$ ng generate component navbar/brand
```
<br>

Ultimately, we want to strive for visual TDD and CDD, so let's first write our [stories](https://storybook.js.org/docs/react/get-started/whats-a-story).



### **`app.component`: HTML, SCSS, & TypeScript**
### **`app.module`**
### **`package.json`**
### **NPM Scripting: Create New Script**
### **NPM Scripting: Update `start`**
### **NPM Scripting: CI/CD Power 💪**
### **`npm generate component <component-name>`**
### **Angular*DRY*: Don't. Repeat. Yourself.**
### **`*ng`X: Structural Directives**
### **Unidirectional Data Flow: `ParentComponent` <b>→</b> `ChildComponent`**
<br>
<hr>
<br>
<br>