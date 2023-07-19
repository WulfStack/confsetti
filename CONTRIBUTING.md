# Contributing to Confsetti

First off, thank you for considering contributing to Confsetti! It's people like you that make Confsetti such a great tool.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

## Code of Conduct

We value the participation of each member of our community and want to ensure an enjoyable and enriching experience for everyone. Please take a moment to familiarize yourself with our [Contributor Code of Conduct](CODE_OF_CONDUCT.md) document, which outlines our expectations for all those who participate in our project, as well as the consequences for unacceptable behavior.

## How Can I Contribute?

### Reporting Bugs, Suggesting Enhancements, Asking Questions, and Documentation Issues

This section guides you through submitting an issue for Confsetti. This could be a bug report, a suggestion for a new feature, a question about how to use the library, or an issue with the documentation. Following these guidelines helps maintainers and the community understand your issue, reproduce the behavior (if it's a bug), and find related issues.

- Before creating an issue, please check [this list](https://github.com/WulfStack/Confsetti/issues) as you might find out that you don't need to create one. When you are creating an issue, please [include as many details as possible](#how-do-i-submit-a-good-issue).

- Note: If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### How Do I Submit A (Good) Issue?

Issues are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which repository](https://github.com/WulfStack/) your issue is related to, create an issue on that repository and provide the following information:

- Use a clear and descriptive title for the issue to identify the problem.
- Describe the exact steps which reproduce the problem in as many details as possible. For bugs, be sure to include any error messages that are displayed.
- Provide specific examples to demonstrate the steps. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://github.github.com/gfm/#fenced-code-blocks).
- Describe the behavior you observed after following the steps and point out what exactly is the problem with that behavior.
- Explain which behavior you expected to see instead and why.
- Include screenshots and animated GIFs which show you following the described steps and clearly demonstrate the problem.
- For feature requests, explain the use case and why you believe it would be a useful addition to the library.
- For questions, provide as much context as possible so that the community can give you an accurate answer.
- For documentation issues, provide links to the problematic documentation and suggest improvements if possible.

### Your First Code Contribution

Unsure where to begin contributing to Confsetti? You can start by looking through these `beginner` and `help-wanted` issues:

- [Beginner issues](https://github.com/WulfStack/Confsetti/labels/beginner) - issues which should only require a few lines of code, and a test or two.
- [Help wanted issues](https://github.com/WulfStack/Confsetti/labels/help%20wanted) - issues which should be a bit more involved than `beginner` issues.

### Pull Requests

- Fill in [the required template](https://github.com/WulfStack/Confsetti/blob/master/.github/PULL_REQUEST_TEMPLATE.md)
- Do not include issue numbers in the PR title
- Include screenshots and animated GIFs in your pull request whenever possible.
- Follow the JavaScript styleguide.
- Document new code based on the [Documentation Styleguide](#documentation-style

guide)
- End all files with a newline
- Place requires in the following order:
  - Built in Node Modules (such as path)
  - Local Modules (using relative paths)
- Avoid platform-dependent code:
  - Use `path.join()` to concatenate filenames.
  - Use `os.tmpdir()` rather than `/tmp` when you need to reference the system temporary directory.
- Using a consistent coding style is important. We are following [Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript).

## Styleguides

### Git Commit Messages

- Git commit messages are linted by commitlint, following the conventional commit format.
- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

#### Conventional Commits Cheat Sheet
| Type Keyword | Purpose                                                                         |
|--------------|---------------------------------------------------------------------------------|
| feat         | Adding a new feature                                                            |
| fix          | Fixing a bug                                                                    |
| docs         | Adding or making a change to documentation                                      |
| style        | Changes that do not affect code execution. Formatting, missing semi colons, etc |
| refactor     | A code change that neither fixes a bug nor adds a feature                       |
| perf         | A code change that improves performance                                         |
| test         | Adding missing tests or correcting existing tests                               |
| build        | Changes that affect the build system or external dependencies                   |
| ci           | Changes to CI configuration files and scripts                                   |
| chore        | Other changes that don't modify source or test files                            |
| revert       | Reverts a previous commit                                                       |

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```
> A commit that has the text BREAKING CHANGE: at the beginning of its optional body or footer section introduces a breaking API change


For more information, see [conventionalcommits.org](https://www.conventionalcommits.org/en/v1.0.0/).

### Documentation Styleguide

- Use [Markdown](https://daringfireball.net/projects/markdown).
- Reference methods and variables in backticks.
- If a method returns a Promise, make sure to note it in the method description.

## Security Issues

If you discover a security issue in Confsetti, please see [SECURITY.md](https://github.com/WulfStack/Confsetti/blob/master/SECURITY.md) for information on how to responsibly report it.

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests.

- `bug` - Issues that are bugs.
- `duplicate` - Issues that are duplicates of other issues.
- `enhancement` - Issues that are feature requests.
- `help-wanted` - Issues that need help from the community.
- `invalid` - Issues that are not valid (e.g., user errors).
- `question` - Issues that are questions.
- `wontfix` - Issues that we will not fix.

Thank you for reading the contributing guide. We are looking forward to your contributions!
