[dcs-js](../README.md) / [Exports](../modules.md) / CreateRepoOption

# Interface: CreateRepoOption

CreateRepoOption options when creating repository

**`export`**

**`interface`** CreateRepoOption

## Table of contents

### Properties

- [\_private](CreateRepoOption.md#_private)
- [autoInit](CreateRepoOption.md#autoinit)
- [defaultBranch](CreateRepoOption.md#defaultbranch)
- [description](CreateRepoOption.md#description)
- [gitignores](CreateRepoOption.md#gitignores)
- [issueLabels](CreateRepoOption.md#issuelabels)
- [license](CreateRepoOption.md#license)
- [name](CreateRepoOption.md#name)
- [readme](CreateRepoOption.md#readme)
- [template](CreateRepoOption.md#template)
- [trustModel](CreateRepoOption.md#trustmodel)

## Properties

### <a id="_private" name="_private"></a> \_private

• `Optional` **\_private**: `boolean`

Whether the repository is private

**`memberof`** CreateRepoOption

#### Defined in

[models/create-repo-option.ts:67](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/create-repo-option.ts#L67)

___

### <a id="autoinit" name="autoinit"></a> autoInit

• `Optional` **autoInit**: `boolean`

Whether the repository should be auto-initialized?

**`memberof`** CreateRepoOption

#### Defined in

[models/create-repo-option.ts:25](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/create-repo-option.ts#L25)

___

### <a id="defaultbranch" name="defaultbranch"></a> defaultBranch

• `Optional` **defaultBranch**: `string`

DefaultBranch of the repository (used when initializes and in template)

**`memberof`** CreateRepoOption

#### Defined in

[models/create-repo-option.ts:31](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/create-repo-option.ts#L31)

___

### <a id="description" name="description"></a> description

• `Optional` **description**: `string`

Description of the repository to create

**`memberof`** CreateRepoOption

#### Defined in

[models/create-repo-option.ts:37](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/create-repo-option.ts#L37)

___

### <a id="gitignores" name="gitignores"></a> gitignores

• `Optional` **gitignores**: `string`

Gitignores to use

**`memberof`** CreateRepoOption

#### Defined in

[models/create-repo-option.ts:43](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/create-repo-option.ts#L43)

___

### <a id="issuelabels" name="issuelabels"></a> issueLabels

• `Optional` **issueLabels**: `string`

Label-Set to use

**`memberof`** CreateRepoOption

#### Defined in

[models/create-repo-option.ts:49](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/create-repo-option.ts#L49)

___

### <a id="license" name="license"></a> license

• `Optional` **license**: `string`

License to use

**`memberof`** CreateRepoOption

#### Defined in

[models/create-repo-option.ts:55](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/create-repo-option.ts#L55)

___

### <a id="name" name="name"></a> name

• **name**: `string`

Name of the repository to create

**`memberof`** CreateRepoOption

#### Defined in

[models/create-repo-option.ts:61](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/create-repo-option.ts#L61)

___

### <a id="readme" name="readme"></a> readme

• `Optional` **readme**: `string`

Readme of the repository to create

**`memberof`** CreateRepoOption

#### Defined in

[models/create-repo-option.ts:73](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/create-repo-option.ts#L73)

___

### <a id="template" name="template"></a> template

• `Optional` **template**: `boolean`

Whether the repository is template

**`memberof`** CreateRepoOption

#### Defined in

[models/create-repo-option.ts:79](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/create-repo-option.ts#L79)

___

### <a id="trustmodel" name="trustmodel"></a> trustModel

• `Optional` **trustModel**: [`CreateRepoOptionTrustModelEnum`](../enums/CreateRepoOptionTrustModelEnum.md)

TrustModel of the repository

**`memberof`** CreateRepoOption

#### Defined in

[models/create-repo-option.ts:85](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/create-repo-option.ts#L85)
