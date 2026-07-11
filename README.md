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

*************************************

![Exhibition](src/img/Animation.gif)

## Release Notes

### 1.3.0

GitHub releases now include a ready-to-install `.vsix` package, making it
possible to install Fast Compare directly from the release assets without
using the Visual Studio Marketplace.

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
