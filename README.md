unity-git
=========

A CLI for working with Unity and Git.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/unity-git.svg)](https://npmjs.org/package/unity-git)
[![Downloads/week](https://img.shields.io/npm/dw/unity-git.svg)](https://npmjs.org/package/unity-git)
[![License](https://img.shields.io/npm/l/unity-git.svg)](https://github.com/FreshlyBrewedCode/unity-git-cli/blob/master/package.json)

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
unity-git/0.0.0 win32-x64 node-v15.10.0
$ unity-git --help [COMMAND]
USAGE
  $ unity-git COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`unity-git hello [FILE]`](#unity-git-hello-file)
* [`unity-git help [COMMAND]`](#unity-git-help-command)

## `unity-git hello [FILE]`

describe the command here

```
USAGE
  $ unity-git hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ unity-git hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/FreshlyBrewedCode/unity-git-cli/blob/v0.0.0/src/commands/hello.ts)_

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
<!-- commandsstop -->
