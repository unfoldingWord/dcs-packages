[dcs-js](../README.md) / [Exports](../modules.md) / EditRepoOption

# Interface: EditRepoOption

EditRepoOption options when editing a repository's properties

**`export`**

**`interface`** EditRepoOption

## Table of contents

### Properties

- [\_private](EditRepoOption.md#_private)
- [allowManualMerge](EditRepoOption.md#allowmanualmerge)
- [allowMergeCommits](EditRepoOption.md#allowmergecommits)
- [allowRebase](EditRepoOption.md#allowrebase)
- [allowRebaseExplicit](EditRepoOption.md#allowrebaseexplicit)
- [allowSquashMerge](EditRepoOption.md#allowsquashmerge)
- [archived](EditRepoOption.md#archived)
- [autodetectManualMerge](EditRepoOption.md#autodetectmanualmerge)
- [defaultBranch](EditRepoOption.md#defaultbranch)
- [defaultDeleteBranchAfterMerge](EditRepoOption.md#defaultdeletebranchaftermerge)
- [defaultMergeStyle](EditRepoOption.md#defaultmergestyle)
- [description](EditRepoOption.md#description)
- [enablePrune](EditRepoOption.md#enableprune)
- [externalTracker](EditRepoOption.md#externaltracker)
- [externalWiki](EditRepoOption.md#externalwiki)
- [hasIssues](EditRepoOption.md#hasissues)
- [hasProjects](EditRepoOption.md#hasprojects)
- [hasPullRequests](EditRepoOption.md#haspullrequests)
- [hasWiki](EditRepoOption.md#haswiki)
- [ignoreWhitespaceConflicts](EditRepoOption.md#ignorewhitespaceconflicts)
- [internalTracker](EditRepoOption.md#internaltracker)
- [mirrorInterval](EditRepoOption.md#mirrorinterval)
- [name](EditRepoOption.md#name)
- [template](EditRepoOption.md#template)
- [website](EditRepoOption.md#website)

## Properties

### <a id="_private" name="_private"></a> \_private

• `Optional` **\_private**: `boolean`

either `true` to make the repository private or `false` to make it public. Note: you will get a 422 error if the organization restricts changing repository visibility to organization owners and a non-owner tries to change the value of private.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:160](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/edit-repo-option.ts#L160)

___

### <a id="allowmanualmerge" name="allowmanualmerge"></a> allowManualMerge

• `Optional` **allowManualMerge**: `boolean`

either `true` to allow mark pr as merged manually, or `false` to prevent it. `has_pull_requests` must be `true`.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:28](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/edit-repo-option.ts#L28)

___

### <a id="allowmergecommits" name="allowmergecommits"></a> allowMergeCommits

• `Optional` **allowMergeCommits**: `boolean`

either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits. `has_pull_requests` must be `true`.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:34](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/edit-repo-option.ts#L34)

___

### <a id="allowrebase" name="allowrebase"></a> allowRebase

• `Optional` **allowRebase**: `boolean`

either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging. `has_pull_requests` must be `true`.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:40](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/edit-repo-option.ts#L40)

___

### <a id="allowrebaseexplicit" name="allowrebaseexplicit"></a> allowRebaseExplicit

• `Optional` **allowRebaseExplicit**: `boolean`

either `true` to allow rebase with explicit merge commits (--no-ff), or `false` to prevent rebase with explicit merge commits. `has_pull_requests` must be `true`.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:46](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/edit-repo-option.ts#L46)

___

### <a id="allowsquashmerge" name="allowsquashmerge"></a> allowSquashMerge

• `Optional` **allowSquashMerge**: `boolean`

either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging. `has_pull_requests` must be `true`.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:52](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/edit-repo-option.ts#L52)

___

### <a id="archived" name="archived"></a> archived

• `Optional` **archived**: `boolean`

set to `true` to archive this repository.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:58](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/edit-repo-option.ts#L58)

___

### <a id="autodetectmanualmerge" name="autodetectmanualmerge"></a> autodetectManualMerge

• `Optional` **autodetectManualMerge**: `boolean`

either `true` to enable AutodetectManualMerge, or `false` to prevent it. `has_pull_requests` must be `true`, Note: In some special cases, misjudgments can occur.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:64](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/edit-repo-option.ts#L64)

___

### <a id="defaultbranch" name="defaultbranch"></a> defaultBranch

• `Optional` **defaultBranch**: `string`

sets the default branch for this repository.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:70](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/edit-repo-option.ts#L70)

___

### <a id="defaultdeletebranchaftermerge" name="defaultdeletebranchaftermerge"></a> defaultDeleteBranchAfterMerge

• `Optional` **defaultDeleteBranchAfterMerge**: `boolean`

set to `true` to delete pr branch after merge by default

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:76](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/edit-repo-option.ts#L76)

___

### <a id="defaultmergestyle" name="defaultmergestyle"></a> defaultMergeStyle

• `Optional` **defaultMergeStyle**: `string`

set to a merge style to be used by this repository: \"merge\", \"rebase\", \"rebase-merge\", or \"squash\". `has_pull_requests` must be `true`.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:82](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/edit-repo-option.ts#L82)

___

### <a id="description" name="description"></a> description

• `Optional` **description**: `string`

a short description of the repository.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:88](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/edit-repo-option.ts#L88)

___

### <a id="enableprune" name="enableprune"></a> enablePrune

• `Optional` **enablePrune**: `boolean`

enable prune - remove obsolete remote-tracking references

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:94](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/edit-repo-option.ts#L94)

___

### <a id="externaltracker" name="externaltracker"></a> externalTracker

• `Optional` **externalTracker**: [`ExternalTracker`](ExternalTracker.md)

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:100](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/edit-repo-option.ts#L100)

___

### <a id="externalwiki" name="externalwiki"></a> externalWiki

• `Optional` **externalWiki**: [`ExternalWiki`](ExternalWiki.md)

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:106](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/edit-repo-option.ts#L106)

___

### <a id="hasissues" name="hasissues"></a> hasIssues

• `Optional` **hasIssues**: `boolean`

either `true` to enable issues for this repository or `false` to disable them.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:112](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/edit-repo-option.ts#L112)

___

### <a id="hasprojects" name="hasprojects"></a> hasProjects

• `Optional` **hasProjects**: `boolean`

either `true` to enable project unit, or `false` to disable them.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:118](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/edit-repo-option.ts#L118)

___

### <a id="haspullrequests" name="haspullrequests"></a> hasPullRequests

• `Optional` **hasPullRequests**: `boolean`

either `true` to allow pull requests, or `false` to prevent pull request.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:124](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/edit-repo-option.ts#L124)

___

### <a id="haswiki" name="haswiki"></a> hasWiki

• `Optional` **hasWiki**: `boolean`

either `true` to enable the wiki for this repository or `false` to disable it.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:130](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/edit-repo-option.ts#L130)

___

### <a id="ignorewhitespaceconflicts" name="ignorewhitespaceconflicts"></a> ignoreWhitespaceConflicts

• `Optional` **ignoreWhitespaceConflicts**: `boolean`

either `true` to ignore whitespace for conflicts, or `false` to not ignore whitespace. `has_pull_requests` must be `true`.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:136](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/edit-repo-option.ts#L136)

___

### <a id="internaltracker" name="internaltracker"></a> internalTracker

• `Optional` **internalTracker**: [`InternalTracker`](InternalTracker.md)

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:142](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/edit-repo-option.ts#L142)

___

### <a id="mirrorinterval" name="mirrorinterval"></a> mirrorInterval

• `Optional` **mirrorInterval**: `string`

set to a string like `8h30m0s` to set the mirror interval time

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:148](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/edit-repo-option.ts#L148)

___

### <a id="name" name="name"></a> name

• `Optional` **name**: `string`

name of the repository

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:154](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/edit-repo-option.ts#L154)

___

### <a id="template" name="template"></a> template

• `Optional` **template**: `boolean`

either `true` to make this repository a template or `false` to make it a normal repository

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:166](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/edit-repo-option.ts#L166)

___

### <a id="website" name="website"></a> website

• `Optional` **website**: `string`

a URL with more information about the repository.

**`memberof`** EditRepoOption

#### Defined in

[models/edit-repo-option.ts:172](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/edit-repo-option.ts#L172)
