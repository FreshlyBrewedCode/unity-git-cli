unity-git
=========

A CLI for working with Unity and Git. 

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/unity-git.svg)](https://npmjs.org/package/unity-git)
[![Downloads/week](https://img.shields.io/npm/dw/unity-git.svg)](https://npmjs.org/package/unity-git)
[![License](https://img.shields.io/npm/l/unity-git.svg)](https://github.com/FreshlyBrewedCode/unity-git-cli/blob/master/package.json)

`unity-git` is a simple CLI that simplifies the setup of git and git lfs for Unity projects. The CLI can be used with `npx` or installed globally using `npm install -g`.

To initialize a git repo with git lfs and matching .gitignore and .gitattributes open a terminal and run:
```
cd <your Unity project root directory>
npx unity-git init
```
or install globally first:
```
npm install -g unity-git
unity-git init
```

Depending on your platform and setup you may have to run the command with elevated permissions:
```
sudo npx unity-git init
``` 

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g unity-git
$ unity-git COMMAND
running command...
$ unity-git (-v|--version|version)
unity-git/1.0.0 darwin-x64 node-v14.15.1
$ unity-git --help [COMMAND]
USAGE
  $ unity-git COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`unity-git help [COMMAND]`](#unity-git-help-command)
* [`unity-git init`](#unity-git-init)

## `unity-git help [COMMAND]`

display help for unity-git

```
USAGE
  $ unity-git help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `unity-git init`

init a new git repository for your unity project.

```
USAGE
  $ unity-git init

EXAMPLE
  $ unity-git init
```

_See code: [src/commands/init.ts](https://github.com/FreshlyBrewedCode/unity-git-cli/blob/v1.0.0/src/commands/init.ts)_
<!-- commandsstop -->
