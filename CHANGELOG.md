# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Changed

- Updated `@pexip/plugin-api` from 19.3.2 to 22.4.1.
- Updated locked development dependencies.

## [1.0.1]

### Removed

- Unused development dependencies: `eslint`, `eslint-config-love`,
  `eslint-config-prettier` and `prettier`.
- The `lint` script, which depended on the removed ESLint packages.

## [1.0.0]

### Added

- Toolbar button that lets a host participant stop a presentation started by
  another participant.
- Continuous integration workflow for the plugin.
- Sandbox hint for running the plugin in the README.

[Unreleased]: https://github.com/pexip/webapp3-plugin-stop-presenter/compare/1.0.1...HEAD
[1.0.1]: https://github.com/pexip/webapp3-plugin-stop-presenter/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/pexip/webapp3-plugin-stop-presenter/releases/tag/1.0.0
