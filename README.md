# Anima

Anima is an addon for Godot that allows you to easily create powerful UI animations

## Introduction

![Example of animation created with anima](https://anima.ceceppa.me/anima.gif)

Creating UI animations in Godot using Tween can be a bit tedious, and Anima allows you doing that with few lines of code and a simple syntax.
It has built-in about 89 animations and 33 easings, with the ability to easily add your own.
You can also add your own with a CSS inspired syntax.

### Table of Contents

- Installation
- Documentation & Demo
- Differences between Anima and Godot Tween
- Stay in Touch
- Contribution
- License

## Installation

This is a regular editor plugin. Copy the contents of addons/Anima into the same folder in your project, and activate it in your project settings.

## Godot4

The development happens on the godot-4 branch of the this repository. So, any issue or pull request needs to be open there.
The ready to install version is available [here](https://github.com/ceceppa/anima-godot-4)

## Documentation & Demo

Check out [documentation](https://anima.ceceppa.me/docs/), [demo code](https://github.com/ceceppa/anima-demos) and [live examples](https://anima.ceceppa.me/demo).


## Differences between Anima and Godot Tween

|                                                | Anima                                                      | Tween         |
| ---------------------------------------------- | ---------------------------------------------------------- | ------------- |
| Chaining                                       | support for sequential, parallel and concurrent animations | Only Godot 4  |
| Easing                                         | 33 built-in, more can be added programmatically            | limited       |
| Use Curve as easing                            | yes                                                        | no            |
| Set Pivot point                                | yes (2D Only)                                              | no            |
| Create and reuse custom animations             | 89 built-in, more can be added programmatically            | No            |
| Animate elements in group or grids             | yes                                                        | No            |
| Multiple distance formulas for Grid animations | yes                                                        | no            |
| Loop                                           | Infinite, Times, and delayed loops                         | Infinite only |
| Animate relative values                        | yes                                                        | Only Godot 4  |
| Play/Loop backwards                            | yes                                                        | no            |
| Dynamic values                                 | yes                                                        | no            |
| CSS-Like animations                            | yes                                                        | no            |

## The Visual Animation Builder

## Built-in animations

Original source: https://github.com/animate-css/animate.css

## Stay in Touch

- [Twitter](https://twitter.com/ceceppa)
- [Discord](https://discord.gg/zgtF3us5yN)

## Contribution

Contributions are welcome and are accepted via pull requests.

## License

MIT

Copyright (c) 2021-present, Alessandro Senese (ceceppa)
