[dcs-js](../README.md) / [Exports](../modules.md) / OrganizationApi

# Class: OrganizationApi

OrganizationApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`OrganizationApi`**

## Table of contents

### Constructors

- [constructor](OrganizationApi.md#constructor)

### Properties

- [axios](OrganizationApi.md#axios)
- [basePath](OrganizationApi.md#basepath)
- [configuration](OrganizationApi.md#configuration)

### Methods

- [createOrgRepo](OrganizationApi.md#createorgrepo)
- [createOrgRepoDeprecated](OrganizationApi.md#createorgrepodeprecated)
- [orgAddTeamMember](OrganizationApi.md#orgaddteammember)
- [orgAddTeamRepository](OrganizationApi.md#orgaddteamrepository)
- [orgConcealMember](OrganizationApi.md#orgconcealmember)
- [orgCreate](OrganizationApi.md#orgcreate)
- [orgCreateHook](OrganizationApi.md#orgcreatehook)
- [orgCreateLabel](OrganizationApi.md#orgcreatelabel)
- [orgCreateTeam](OrganizationApi.md#orgcreateteam)
- [orgDelete](OrganizationApi.md#orgdelete)
- [orgDeleteHook](OrganizationApi.md#orgdeletehook)
- [orgDeleteLabel](OrganizationApi.md#orgdeletelabel)
- [orgDeleteMember](OrganizationApi.md#orgdeletemember)
- [orgDeleteTeam](OrganizationApi.md#orgdeleteteam)
- [orgEdit](OrganizationApi.md#orgedit)
- [orgEditHook](OrganizationApi.md#orgedithook)
- [orgEditLabel](OrganizationApi.md#orgeditlabel)
- [orgEditTeam](OrganizationApi.md#orgeditteam)
- [orgGet](OrganizationApi.md#orgget)
- [orgGetAll](OrganizationApi.md#orggetall)
- [orgGetHook](OrganizationApi.md#orggethook)
- [orgGetLabel](OrganizationApi.md#orggetlabel)
- [orgGetTeam](OrganizationApi.md#orggetteam)
- [orgGetUserPermissions](OrganizationApi.md#orggetuserpermissions)
- [orgIsMember](OrganizationApi.md#orgismember)
- [orgIsPublicMember](OrganizationApi.md#orgispublicmember)
- [orgListCurrentUserOrgs](OrganizationApi.md#orglistcurrentuserorgs)
- [orgListHooks](OrganizationApi.md#orglisthooks)
- [orgListLabels](OrganizationApi.md#orglistlabels)
- [orgListMembers](OrganizationApi.md#orglistmembers)
- [orgListPublicMembers](OrganizationApi.md#orglistpublicmembers)
- [orgListRepos](OrganizationApi.md#orglistrepos)
- [orgListTeamMember](OrganizationApi.md#orglistteammember)
- [orgListTeamMembers](OrganizationApi.md#orglistteammembers)
- [orgListTeamRepos](OrganizationApi.md#orglistteamrepos)
- [orgListTeams](OrganizationApi.md#orglistteams)
- [orgListUserOrgs](OrganizationApi.md#orglistuserorgs)
- [orgPublicizeMember](OrganizationApi.md#orgpublicizemember)
- [orgRemoveTeamMember](OrganizationApi.md#orgremoveteammember)
- [orgRemoveTeamRepository](OrganizationApi.md#orgremoveteamrepository)
- [teamSearch](OrganizationApi.md#teamsearch)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new OrganizationApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:50](https://github.com/unfoldingWord/dcs-js/blob/c677a54/base.ts#L50)

## Properties

### <a id="axios" name="axios"></a> axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

___

### <a id="basepath" name="basepath"></a> basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

___

### <a id="configuration" name="configuration"></a> configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:48](https://github.com/unfoldingWord/dcs-js/blob/c677a54/base.ts#L48)

## Methods

### <a id="createorgrepo" name="createorgrepo"></a> createOrgRepo

▸ **createOrgRepo**(`org`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Create a repository in an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of organization |
| `body?` | [`CreateRepoOption`](../interfaces/CreateRepoOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/organization-api.ts:5275](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5275)

___

### <a id="createorgrepodeprecated" name="createorgrepodeprecated"></a> createOrgRepoDeprecated

▸ **createOrgRepoDeprecated**(`org`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Create a repository in an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of organization |
| `body?` | [`CreateRepoOption`](../interfaces/CreateRepoOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/organization-api.ts:5287](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5287)

___

### <a id="orgaddteammember" name="orgaddteammember"></a> orgAddTeamMember

▸ **orgAddTeamMember**(`id`, `username`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Add a team member

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of the team |
| `username` | `string` | username of the user to add |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:5299](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5299)

___

### <a id="orgaddteamrepository" name="orgaddteamrepository"></a> orgAddTeamRepository

▸ **orgAddTeamRepository**(`id`, `org`, `repo`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Add a repository to a team

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of the team |
| `org` | `string` | organization that owns the repo to add |
| `repo` | `string` | name of the repo to add |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:5312](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5312)

___

### <a id="orgconcealmember" name="orgconcealmember"></a> orgConcealMember

▸ **orgConcealMember**(`org`, `username`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Conceal a user's membership

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `username` | `string` | username of the user |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:5324](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5324)

___

### <a id="orgcreate" name="orgcreate"></a> orgCreate

▸ **orgCreate**(`body`, `options?`): `Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)\>\>

**`summary`** Create an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`CreateOrgOption`](../interfaces/CreateOrgOption.md) |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)\>\>

#### Defined in

[apis/organization-api.ts:5335](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5335)

___

### <a id="orgcreatehook" name="orgcreatehook"></a> orgCreateHook

▸ **orgCreateHook**(`body`, `org`, `options?`): `Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

**`summary`** Create a hook

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`CreateHookOption`](../interfaces/CreateHookOption.md) |  |
| `org` | `string` | name of the organization |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

#### Defined in

[apis/organization-api.ts:5347](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5347)

___

### <a id="orgcreatelabel" name="orgcreatelabel"></a> orgCreateLabel

▸ **orgCreateLabel**(`org`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)\>\>

**`summary`** Create a label for an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `body?` | [`CreateLabelOption`](../interfaces/CreateLabelOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)\>\>

#### Defined in

[apis/organization-api.ts:5359](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5359)

___

### <a id="orgcreateteam" name="orgcreateteam"></a> orgCreateTeam

▸ **orgCreateTeam**(`org`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)\>\>

**`summary`** Create a team

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `body?` | [`CreateTeamOption`](../interfaces/CreateTeamOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)\>\>

#### Defined in

[apis/organization-api.ts:5371](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5371)

___

### <a id="orgdelete" name="orgdelete"></a> orgDelete

▸ **orgDelete**(`org`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | organization that is to be deleted |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:5382](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5382)

___

### <a id="orgdeletehook" name="orgdeletehook"></a> orgDeleteHook

▸ **orgDeleteHook**(`org`, `id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a hook

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `id` | `number` | id of the hook to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:5394](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5394)

___

### <a id="orgdeletelabel" name="orgdeletelabel"></a> orgDeleteLabel

▸ **orgDeleteLabel**(`org`, `id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a label

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `id` | `number` | id of the label to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:5406](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5406)

___

### <a id="orgdeletemember" name="orgdeletemember"></a> orgDeleteMember

▸ **orgDeleteMember**(`org`, `username`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Remove a member from an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `username` | `string` | username of the user |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:5418](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5418)

___

### <a id="orgdeleteteam" name="orgdeleteteam"></a> orgDeleteTeam

▸ **orgDeleteTeam**(`id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a team

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of the team to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:5429](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5429)

___

### <a id="orgedit" name="orgedit"></a> orgEdit

▸ **orgEdit**(`body`, `org`, `options?`): `Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)\>\>

**`summary`** Edit an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`EditOrgOption`](../interfaces/EditOrgOption.md) |  |
| `org` | `string` | name of the organization to edit |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)\>\>

#### Defined in

[apis/organization-api.ts:5441](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5441)

___

### <a id="orgedithook" name="orgedithook"></a> orgEditHook

▸ **orgEditHook**(`org`, `id`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

**`summary`** Update a hook

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `id` | `number` | id of the hook to update |
| `body?` | [`EditHookOption`](../interfaces/EditHookOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

#### Defined in

[apis/organization-api.ts:5454](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5454)

___

### <a id="orgeditlabel" name="orgeditlabel"></a> orgEditLabel

▸ **orgEditLabel**(`org`, `id`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)\>\>

**`summary`** Update a label

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `id` | `number` | id of the label to edit |
| `body?` | [`EditLabelOption`](../interfaces/EditLabelOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)\>\>

#### Defined in

[apis/organization-api.ts:5467](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5467)

___

### <a id="orgeditteam" name="orgeditteam"></a> orgEditTeam

▸ **orgEditTeam**(`id`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)\>\>

**`summary`** Edit a team

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of the team to edit |
| `body?` | [`EditTeamOption`](../interfaces/EditTeamOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)\>\>

#### Defined in

[apis/organization-api.ts:5479](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5479)

___

### <a id="orgget" name="orgget"></a> orgGet

▸ **orgGet**(`org`, `options?`): `Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)\>\>

**`summary`** Get an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)\>\>

#### Defined in

[apis/organization-api.ts:5490](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5490)

___

### <a id="orggetall" name="orggetall"></a> orgGetAll

▸ **orgGetAll**(`lang?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)[]\>\>

**`summary`** Get list of organizations

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `lang?` | `string` |
| `page?` | `number` |
| `limit?` | `number` |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)[]\>\>

#### Defined in

[apis/organization-api.ts:5503](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5503)

___

### <a id="orggethook" name="orggethook"></a> orgGetHook

▸ **orgGetHook**(`org`, `id`, `options?`): `Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

**`summary`** Get a hook

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `id` | `number` | id of the hook to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

#### Defined in

[apis/organization-api.ts:5515](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5515)

___

### <a id="orggetlabel" name="orggetlabel"></a> orgGetLabel

▸ **orgGetLabel**(`org`, `id`, `options?`): `Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)\>\>

**`summary`** Get a single label

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `id` | `number` | id of the label to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)\>\>

#### Defined in

[apis/organization-api.ts:5527](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5527)

___

### <a id="orggetteam" name="orggetteam"></a> orgGetTeam

▸ **orgGetTeam**(`id`, `options?`): `Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)\>\>

**`summary`** Get a team

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of the team to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)\>\>

#### Defined in

[apis/organization-api.ts:5538](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5538)

___

### <a id="orggetuserpermissions" name="orggetuserpermissions"></a> orgGetUserPermissions

▸ **orgGetUserPermissions**(`username`, `org`, `options?`): `Promise`<`AxiosResponse`<[`OrganizationPermissions`](../interfaces/OrganizationPermissions.md)\>\>

**`summary`** Get user permissions in organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | username of user |
| `org` | `string` | name of the organization |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`OrganizationPermissions`](../interfaces/OrganizationPermissions.md)\>\>

#### Defined in

[apis/organization-api.ts:5550](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5550)

___

### <a id="orgismember" name="orgismember"></a> orgIsMember

▸ **orgIsMember**(`org`, `username`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Check if a user is a member of an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `username` | `string` | username of the user |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:5562](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5562)

___

### <a id="orgispublicmember" name="orgispublicmember"></a> orgIsPublicMember

▸ **orgIsPublicMember**(`org`, `username`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Check if a user is a public member of an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `username` | `string` | username of the user |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:5574](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5574)

___

### <a id="orglistcurrentuserorgs" name="orglistcurrentuserorgs"></a> orgListCurrentUserOrgs

▸ **orgListCurrentUserOrgs**(`page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)[]\>\>

**`summary`** List the current user's organizations

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `page?` | `number` |
| `limit?` | `number` |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)[]\>\>

#### Defined in

[apis/organization-api.ts:5586](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5586)

___

### <a id="orglisthooks" name="orglisthooks"></a> orgListHooks

▸ **orgListHooks**(`org`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)[]\>\>

**`summary`** List an organization's webhooks

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)[]\>\>

#### Defined in

[apis/organization-api.ts:5599](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5599)

___

### <a id="orglistlabels" name="orglistlabels"></a> orgListLabels

▸ **orgListLabels**(`org`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)[]\>\>

**`summary`** List an organization's labels

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Label`](../interfaces/Label.md)[]\>\>

#### Defined in

[apis/organization-api.ts:5612](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5612)

___

### <a id="orglistmembers" name="orglistmembers"></a> orgListMembers

▸ **orgListMembers**(`org`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** List an organization's members

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/organization-api.ts:5625](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5625)

___

### <a id="orglistpublicmembers" name="orglistpublicmembers"></a> orgListPublicMembers

▸ **orgListPublicMembers**(`org`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** List an organization's public members

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/organization-api.ts:5638](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5638)

___

### <a id="orglistrepos" name="orglistrepos"></a> orgListRepos

▸ **orgListRepos**(`org`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

**`summary`** List an organization's repos

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

#### Defined in

[apis/organization-api.ts:5651](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5651)

___

### <a id="orglistteammember" name="orglistteammember"></a> orgListTeamMember

▸ **orgListTeamMember**(`id`, `username`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)\>\>

**`summary`** List a particular member of team

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of the team |
| `username` | `string` | username of the member to list |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)\>\>

#### Defined in

[apis/organization-api.ts:5663](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5663)

___

### <a id="orglistteammembers" name="orglistteammembers"></a> orgListTeamMembers

▸ **orgListTeamMembers**(`id`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** List a team's members

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of the team |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/organization-api.ts:5676](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5676)

___

### <a id="orglistteamrepos" name="orglistteamrepos"></a> orgListTeamRepos

▸ **orgListTeamRepos**(`id`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

**`summary`** List a team's repos

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of the team |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

#### Defined in

[apis/organization-api.ts:5689](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5689)

___

### <a id="orglistteams" name="orglistteams"></a> orgListTeams

▸ **orgListTeams**(`org`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)[]\>\>

**`summary`** List an organization's teams

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)[]\>\>

#### Defined in

[apis/organization-api.ts:5702](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5702)

___

### <a id="orglistuserorgs" name="orglistuserorgs"></a> orgListUserOrgs

▸ **orgListUserOrgs**(`username`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)[]\>\>

**`summary`** List a user's organizations

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | username of user |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)[]\>\>

#### Defined in

[apis/organization-api.ts:5715](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5715)

___

### <a id="orgpublicizemember" name="orgpublicizemember"></a> orgPublicizeMember

▸ **orgPublicizeMember**(`org`, `username`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Publicize a user's membership

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `username` | `string` | username of the user |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:5727](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5727)

___

### <a id="orgremoveteammember" name="orgremoveteammember"></a> orgRemoveTeamMember

▸ **orgRemoveTeamMember**(`id`, `username`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Remove a team member

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of the team |
| `username` | `string` | username of the user to remove |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:5739](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5739)

___

### <a id="orgremoveteamrepository" name="orgremoveteamrepository"></a> orgRemoveTeamRepository

▸ **orgRemoveTeamRepository**(`id`, `org`, `repo`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

This does not delete the repository, it only removes the repository from the team.

**`summary`** Remove a repository from a team

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of the team |
| `org` | `string` | organization that owns the repo to remove |
| `repo` | `string` | name of the repo to remove |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/organization-api.ts:5752](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5752)

___

### <a id="teamsearch" name="teamsearch"></a> teamSearch

▸ **teamSearch**(`org`, `q?`, `includeDesc?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`InlineResponse200`](../interfaces/InlineResponse200.md)\>\>

**`summary`** Search for teams within an organization

**`throws`** {RequiredError}

**`memberof`** OrganizationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `org` | `string` | name of the organization |
| `q?` | `string` | - |
| `includeDesc?` | `boolean` | - |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`InlineResponse200`](../interfaces/InlineResponse200.md)\>\>

#### Defined in

[apis/organization-api.ts:5767](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/organization-api.ts#L5767)
