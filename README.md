# ⚡ FAST COMPARE ⚡

Enables fast way of comparing two files via Context Menu Action on Text Editor Title.

## Installation from a GitHub release

Each GitHub release includes a versioned `.vsix` file. Download it from the
release assets and install it with **Extensions: Install from VSIX...** in VS Code,
or run:

```sh
code --install-extension fastcompare-<version>.vsix
```

To create the same package locally, run `npm ci` followed by
`npm run package:vsix -- --out fastcompare-<version>.vsix`.

## Development requirements

The extension remains compatible with VS Code 1.70 and later. Building,
testing, or packaging it from source requires a more recent development
environment:

- Node.js 22.13 or later.
- npm, included with the standard Node.js installation.
- Network access when running `npm ci`, packaging the extension for the first
  time, or running the integration tests. The test runner downloads a compatible
  VS Code Electron build into `.vscode-test/`.

Install the dependencies and run the complete validation suite with:

```sh
npm ci
npm test
```

The test command compiles the TypeScript sources, runs ESLint, launches the VS
Code integration-test environment, and executes the extension tests. To create
a local release package after validation, run:

```sh
npm run package:vsix -- --out fastcompare-<version>.vsix
```

*************************************

![Exhibition](src/img/Animation.gif)

## Release Notes

### 1.3.0

- GitHub releases now include a ready-to-install `.vsix` package, allowing
  **Fast Compare** to be installed directly from the release assets.
- Added automated linting, compilation, testing, VSIX packaging, and GitHub
  Release creation when a version tag is pushed.
- Modernized the development toolchain to TypeScript 6, ESLint 10, and
  TypeScript-ESLint 8, including migration to ESLint flat configuration.
- Updated the VS Code integration-test stack to Mocha 11, Glob 13, and VS Code
  Test Electron 3, with test discovery migrated to the promise-based Glob API.
- Updated and consolidated development dependencies, removing all known high
  severity findings from the npm audit report.

### 1.2.1

Removed ability to swap compared files since this feature was added to VSCode in version 1.86. 
https://stackoverflow.com/a/77638341

### 1.2.0

Added ability to Compare with active file in Explorer's folder view.

![Explorer Exhibition](src/img/NewFeature.gif)

### 1.1.1

Restricted mode compatibility added! Now you can use the extension while in restricted mode.

### 1.1.0

Swap feature added! You can now easily swap the files you are comparing. Command is assignable to a key shortcut.

### 1.0.4

Fixed a bug with some files not being found.

### 1.0.3

Minor fixes.

### 1.0.2

Extension now has an icon!

### 1.0.1

Extension now supports in-memory files (not saved).

### 1.0.0

Initial release of Fast Compare.
