[dcs-js](../README.md) / [Exports](../modules.md) / TransferRepoOption

# Interface: TransferRepoOption

TransferRepoOption options when transfer a repository's ownership

**`export`**

**`interface`** TransferRepoOption

## Table of contents

### Properties

- [newOwner](TransferRepoOption.md#newowner)
- [teamIds](TransferRepoOption.md#teamids)

## Properties

### <a id="newowner" name="newowner"></a> newOwner

• **newOwner**: `string`

**`memberof`** TransferRepoOption

#### Defined in

[models/transfer-repo-option.ts:25](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/transfer-repo-option.ts#L25)

___

### <a id="teamids" name="teamids"></a> teamIds

• `Optional` **teamIds**: `number`[]

ID of the team or teams to add to the repository. Teams can only be added to organization-owned repositories.

**`memberof`** TransferRepoOption

#### Defined in

[models/transfer-repo-option.ts:31](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/transfer-repo-option.ts#L31)
