[dcs-js](../README.md) / [Exports](../modules.md) / DeleteFileOptions

# Interface: DeleteFileOptions

DeleteFileOptions options for deleting files (used for other File structs below) Note: `author` and `committer` are optional (if only one is given, it will be used for the other, otherwise the authenticated user will be used)

**`export`**

**`interface`** DeleteFileOptions

## Table of contents

### Properties

- [author](DeleteFileOptions.md#author)
- [branch](DeleteFileOptions.md#branch)
- [committer](DeleteFileOptions.md#committer)
- [dates](DeleteFileOptions.md#dates)
- [message](DeleteFileOptions.md#message)
- [newBranch](DeleteFileOptions.md#newbranch)
- [sha](DeleteFileOptions.md#sha)
- [signoff](DeleteFileOptions.md#signoff)

## Properties

### <a id="author" name="author"></a> author

• `Optional` **author**: [`Identity`](Identity.md)

**`memberof`** DeleteFileOptions

#### Defined in

[models/delete-file-options.ts:27](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/delete-file-options.ts#L27)

___

### <a id="branch" name="branch"></a> branch

• `Optional` **branch**: `string`

branch (optional) to base this file from. if not given, the default branch is used

**`memberof`** DeleteFileOptions

#### Defined in

[models/delete-file-options.ts:33](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/delete-file-options.ts#L33)

___

### <a id="committer" name="committer"></a> committer

• `Optional` **committer**: [`Identity`](Identity.md)

**`memberof`** DeleteFileOptions

#### Defined in

[models/delete-file-options.ts:39](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/delete-file-options.ts#L39)

___

### <a id="dates" name="dates"></a> dates

• `Optional` **dates**: [`CommitDateOptions`](CommitDateOptions.md)

**`memberof`** DeleteFileOptions

#### Defined in

[models/delete-file-options.ts:45](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/delete-file-options.ts#L45)

___

### <a id="message" name="message"></a> message

• `Optional` **message**: `string`

message (optional) for the commit of this file. if not supplied, a default message will be used

**`memberof`** DeleteFileOptions

#### Defined in

[models/delete-file-options.ts:51](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/delete-file-options.ts#L51)

___

### <a id="newbranch" name="newbranch"></a> newBranch

• `Optional` **newBranch**: `string`

new_branch (optional) will make a new branch from `branch` before creating the file

**`memberof`** DeleteFileOptions

#### Defined in

[models/delete-file-options.ts:57](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/delete-file-options.ts#L57)

___

### <a id="sha" name="sha"></a> sha

• **sha**: `string`

sha is the SHA for the file that already exists

**`memberof`** DeleteFileOptions

#### Defined in

[models/delete-file-options.ts:63](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/delete-file-options.ts#L63)

___

### <a id="signoff" name="signoff"></a> signoff

• `Optional` **signoff**: `boolean`

Add a Signed-off-by trailer by the committer at the end of the commit log message.

**`memberof`** DeleteFileOptions

#### Defined in

[models/delete-file-options.ts:69](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/delete-file-options.ts#L69)
