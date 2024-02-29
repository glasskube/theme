# Glasskube Theme

This is the official theme used by Glasskube products.
It is consists of a customized build of [`bootstrap`](https://github.com/twbs/bootstrap), as well as some additional components and utilities (see below).

Used by the [Glasskube package manager](https://github.com/glasskube/glasskube/).

## Features

* **All features of bootstrap**

* **Modularized build approach**<br>
  Choose only the parts you need.

* **Fonts, icons included**<br>
  We use bootstrap icons and the beautiful Inter an Poppins fonts.

* **Beautiful light and dark mode**<br>
  See [bootstrap documentation](https://getbootstrap.com/docs/5.3/customize/color-modes/).

* **Sensible theme colors**<br>
  We selected a small number of theme colors that are used consistently throughout the theme.

* **Streamlined typography for long-form text**<br>
  Use the `.prose-content`, `.text-justified` and `.text-hyphens` CSS classes for your texts.

## Installation

The Glasskube theme is published as an NPM package via GitHub package registry. 
To add it to you your project:

1. Add the GitHub package registry to your projects `.npmrc` file (for more details, please consult the [official documentation](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package))
2. Install `@glasskube/theme` using your preferred node package manager
3. Import the theme into your project (see [Usage](#usage))

## Usage

The Glasskube theme is distributed in two variants: Source and prebuilt. 
The source files can be imported into an SCSS file, while the prebuilt CSS variant can be used as-is.

## Contributing

Contributions are welcome! 
Please open a new issue before you start working, so we can discuss the planned changes. 
If you make any changes, please make sure that they are viewable in the examples file at `examples/index.html`.
Before committing your changes, run `npm run build` and `npm run prettier:check`,
in order to ensure that your changes conform with our code style standards.
