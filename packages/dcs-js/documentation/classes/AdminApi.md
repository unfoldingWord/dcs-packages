[dcs-js](../README.md) / [Exports](../modules.md) / AdminApi

# Class: AdminApi

AdminApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`AdminApi`**

## Table of contents

### Constructors

- [constructor](AdminApi.md#constructor)

### Properties

- [axios](AdminApi.md#axios)
- [basePath](AdminApi.md#basepath)
- [configuration](AdminApi.md#configuration)

### Methods

- [adminAdoptRepository](AdminApi.md#adminadoptrepository)
- [adminCreateOrg](AdminApi.md#admincreateorg)
- [adminCreatePublicKey](AdminApi.md#admincreatepublickey)
- [adminCreateRepo](AdminApi.md#admincreaterepo)
- [adminCreateUser](AdminApi.md#admincreateuser)
- [adminCronList](AdminApi.md#admincronlist)
- [adminCronRun](AdminApi.md#admincronrun)
- [adminDeleteUnadoptedRepository](AdminApi.md#admindeleteunadoptedrepository)
- [adminDeleteUser](AdminApi.md#admindeleteuser)
- [adminDeleteUserPublicKey](AdminApi.md#admindeleteuserpublickey)
- [adminEditUser](AdminApi.md#adminedituser)
- [adminGetAllOrgs](AdminApi.md#admingetallorgs)
- [adminGetAllUsers](AdminApi.md#admingetallusers)
- [adminUnadoptedList](AdminApi.md#adminunadoptedlist)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new AdminApi**(`configuration?`, `basePath?`, `axios?`)

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

### <a id="adminadoptrepository" name="adminadoptrepository"></a> adminAdoptRepository

▸ **adminAdoptRepository**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Adopt unadopted files as a repository

**`throws`** {RequiredError}

**`memberof`** AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/admin-api.ts:1814](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/admin-api.ts#L1814)

___

### <a id="admincreateorg" name="admincreateorg"></a> adminCreateOrg

▸ **adminCreateOrg**(`body`, `username`, `options?`): `Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)\>\>

**`summary`** Create an organization

**`throws`** {RequiredError}

**`memberof`** AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`CreateOrgOption`](../interfaces/CreateOrgOption.md) |  |
| `username` | `string` | username of the user that will own the created organization |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)\>\>

#### Defined in

[apis/admin-api.ts:1826](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/admin-api.ts#L1826)

___

### <a id="admincreatepublickey" name="admincreatepublickey"></a> adminCreatePublicKey

▸ **adminCreatePublicKey**(`username`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`PublicKey`](../interfaces/PublicKey.md)\>\>

**`summary`** Add a public key on behalf of a user

**`throws`** {RequiredError}

**`memberof`** AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | username of the user |
| `body?` | [`CreateKeyOption`](../interfaces/CreateKeyOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PublicKey`](../interfaces/PublicKey.md)\>\>

#### Defined in

[apis/admin-api.ts:1838](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/admin-api.ts#L1838)

___

### <a id="admincreaterepo" name="admincreaterepo"></a> adminCreateRepo

▸ **adminCreateRepo**(`body`, `username`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Create a repository on behalf of a user

**`throws`** {RequiredError}

**`memberof`** AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`CreateRepoOption`](../interfaces/CreateRepoOption.md) |  |
| `username` | `string` | username of the user. This user will own the created repository |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/admin-api.ts:1850](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/admin-api.ts#L1850)

___

### <a id="admincreateuser" name="admincreateuser"></a> adminCreateUser

▸ **adminCreateUser**(`body?`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)\>\>

**`summary`** Create a user

**`throws`** {RequiredError}

**`memberof`** AdminApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `body?` | [`CreateUserOption`](../interfaces/CreateUserOption.md) |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)\>\>

#### Defined in

[apis/admin-api.ts:1861](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/admin-api.ts#L1861)

___

### <a id="admincronlist" name="admincronlist"></a> adminCronList

▸ **adminCronList**(`page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Cron`](../interfaces/Cron.md)[]\>\>

**`summary`** List cron tasks

**`throws`** {RequiredError}

**`memberof`** AdminApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `page?` | `number` |
| `limit?` | `number` |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`Cron`](../interfaces/Cron.md)[]\>\>

#### Defined in

[apis/admin-api.ts:1873](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/admin-api.ts#L1873)

___

### <a id="admincronrun" name="admincronrun"></a> adminCronRun

▸ **adminCronRun**(`task`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Run cron task

**`throws`** {RequiredError}

**`memberof`** AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `task` | `string` | task to run |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/admin-api.ts:1884](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/admin-api.ts#L1884)

___

### <a id="admindeleteunadoptedrepository" name="admindeleteunadoptedrepository"></a> adminDeleteUnadoptedRepository

▸ **adminDeleteUnadoptedRepository**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete unadopted files

**`throws`** {RequiredError}

**`memberof`** AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/admin-api.ts:1896](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/admin-api.ts#L1896)

___

### <a id="admindeleteuser" name="admindeleteuser"></a> adminDeleteUser

▸ **adminDeleteUser**(`username`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a user

**`throws`** {RequiredError}

**`memberof`** AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | username of user to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/admin-api.ts:1907](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/admin-api.ts#L1907)

___

### <a id="admindeleteuserpublickey" name="admindeleteuserpublickey"></a> adminDeleteUserPublicKey

▸ **adminDeleteUserPublicKey**(`username`, `id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a user's public key

**`throws`** {RequiredError}

**`memberof`** AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | username of user |
| `id` | `number` | id of the key to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/admin-api.ts:1919](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/admin-api.ts#L1919)

___

### <a id="adminedituser" name="adminedituser"></a> adminEditUser

▸ **adminEditUser**(`username`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)\>\>

**`summary`** Edit an existing user

**`throws`** {RequiredError}

**`memberof`** AdminApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | username of user to edit |
| `body?` | [`EditUserOption`](../interfaces/EditUserOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)\>\>

#### Defined in

[apis/admin-api.ts:1931](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/admin-api.ts#L1931)

___

### <a id="admingetallorgs" name="admingetallorgs"></a> adminGetAllOrgs

▸ **adminGetAllOrgs**(`lang?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Organization`](../interfaces/Organization.md)[]\>\>

**`summary`** List all organizations

**`throws`** {RequiredError}

**`memberof`** AdminApi

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

[apis/admin-api.ts:1944](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/admin-api.ts#L1944)

___

### <a id="admingetallusers" name="admingetallusers"></a> adminGetAllUsers

▸ **adminGetAllUsers**(`lang?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** List all users

**`throws`** {RequiredError}

**`memberof`** AdminApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `lang?` | `string` |
| `page?` | `number` |
| `limit?` | `number` |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/admin-api.ts:1957](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/admin-api.ts#L1957)

___

### <a id="adminunadoptedlist" name="adminunadoptedlist"></a> adminUnadoptedList

▸ **adminUnadoptedList**(`page?`, `limit?`, `pattern?`, `options?`): `Promise`<`AxiosResponse`<`string`[]\>\>

**`summary`** List unadopted repositories

**`throws`** {RequiredError}

**`memberof`** AdminApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `page?` | `number` |
| `limit?` | `number` |
| `pattern?` | `string` |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<`string`[]\>\>

#### Defined in

[apis/admin-api.ts:1970](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/admin-api.ts#L1970)
