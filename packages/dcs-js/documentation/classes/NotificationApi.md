[dcs-js](../README.md) / [Exports](../modules.md) / NotificationApi

# Class: NotificationApi

NotificationApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`NotificationApi`**

## Table of contents

### Constructors

- [constructor](NotificationApi.md#constructor)

### Properties

- [axios](NotificationApi.md#axios)
- [basePath](NotificationApi.md#basepath)
- [configuration](NotificationApi.md#configuration)

### Methods

- [notifyGetList](NotificationApi.md#notifygetlist)
- [notifyGetRepoList](NotificationApi.md#notifygetrepolist)
- [notifyGetThread](NotificationApi.md#notifygetthread)
- [notifyNewAvailable](NotificationApi.md#notifynewavailable)
- [notifyReadList](NotificationApi.md#notifyreadlist)
- [notifyReadRepoList](NotificationApi.md#notifyreadrepolist)
- [notifyReadThread](NotificationApi.md#notifyreadthread)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new NotificationApi**(`configuration?`, `basePath?`, `axios?`)

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

### <a id="notifygetlist" name="notifygetlist"></a> notifyGetList

▸ **notifyGetList**(`all?`, `statusTypes?`, `subjectType?`, `since?`, `before?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`NotificationThread`](../interfaces/NotificationThread.md)[]\>\>

**`summary`** List users's notification threads

**`throws`** {RequiredError}

**`memberof`** NotificationApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `all?` | `boolean` |
| `statusTypes?` | `string`[] |
| `subjectType?` | `string`[] |
| `since?` | `Date` |
| `before?` | `Date` |
| `page?` | `number` |
| `limit?` | `number` |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`NotificationThread`](../interfaces/NotificationThread.md)[]\>\>

#### Defined in

[apis/notification-api.ts:1053](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/notification-api.ts#L1053)

___

### <a id="notifygetrepolist" name="notifygetrepolist"></a> notifyGetRepoList

▸ **notifyGetRepoList**(`owner`, `repo`, `all?`, `statusTypes?`, `subjectType?`, `since?`, `before?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`NotificationThread`](../interfaces/NotificationThread.md)[]\>\>

**`summary`** List users's notification threads on a specific repo

**`throws`** {RequiredError}

**`memberof`** NotificationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `all?` | `boolean` | - |
| `statusTypes?` | `string`[] | - |
| `subjectType?` | `string`[] | - |
| `since?` | `Date` | - |
| `before?` | `Date` | - |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`NotificationThread`](../interfaces/NotificationThread.md)[]\>\>

#### Defined in

[apis/notification-api.ts:1072](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/notification-api.ts#L1072)

___

### <a id="notifygetthread" name="notifygetthread"></a> notifyGetThread

▸ **notifyGetThread**(`id`, `options?`): `Promise`<`AxiosResponse`<[`NotificationThread`](../interfaces/NotificationThread.md)\>\>

**`summary`** Get notification thread by ID

**`throws`** {RequiredError}

**`memberof`** NotificationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | id of notification thread |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`NotificationThread`](../interfaces/NotificationThread.md)\>\>

#### Defined in

[apis/notification-api.ts:1083](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/notification-api.ts#L1083)

___

### <a id="notifynewavailable" name="notifynewavailable"></a> notifyNewAvailable

▸ **notifyNewAvailable**(`options?`): `Promise`<`AxiosResponse`<[`NotificationCount`](../interfaces/NotificationCount.md)\>\>

**`summary`** Check if unread notifications exist

**`throws`** {RequiredError}

**`memberof`** NotificationApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`NotificationCount`](../interfaces/NotificationCount.md)\>\>

#### Defined in

[apis/notification-api.ts:1093](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/notification-api.ts#L1093)

___

### <a id="notifyreadlist" name="notifyreadlist"></a> notifyReadList

▸ **notifyReadList**(`lastReadAt?`, `all?`, `statusTypes?`, `toStatus?`, `options?`): `Promise`<`AxiosResponse`<[`NotificationThread`](../interfaces/NotificationThread.md)[]\>\>

**`summary`** Mark notification threads as read, pinned or unread

**`throws`** {RequiredError}

**`memberof`** NotificationApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `lastReadAt?` | `Date` |
| `all?` | `string` |
| `statusTypes?` | `string`[] |
| `toStatus?` | `string` |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`NotificationThread`](../interfaces/NotificationThread.md)[]\>\>

#### Defined in

[apis/notification-api.ts:1107](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/notification-api.ts#L1107)

___

### <a id="notifyreadrepolist" name="notifyreadrepolist"></a> notifyReadRepoList

▸ **notifyReadRepoList**(`owner`, `repo`, `all?`, `statusTypes?`, `toStatus?`, `lastReadAt?`, `options?`): `Promise`<`AxiosResponse`<[`NotificationThread`](../interfaces/NotificationThread.md)[]\>\>

**`summary`** Mark notification threads as read, pinned or unread on a specific repo

**`throws`** {RequiredError}

**`memberof`** NotificationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `all?` | `string` | - |
| `statusTypes?` | `string`[] | - |
| `toStatus?` | `string` | - |
| `lastReadAt?` | `Date` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`NotificationThread`](../interfaces/NotificationThread.md)[]\>\>

#### Defined in

[apis/notification-api.ts:1123](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/notification-api.ts#L1123)

___

### <a id="notifyreadthread" name="notifyreadthread"></a> notifyReadThread

▸ **notifyReadThread**(`id`, `toStatus?`, `options?`): `Promise`<`AxiosResponse`<[`NotificationThread`](../interfaces/NotificationThread.md)\>\>

**`summary`** Mark notification thread as read by ID

**`throws`** {RequiredError}

**`memberof`** NotificationApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | id of notification thread |
| `toStatus?` | `string` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`NotificationThread`](../interfaces/NotificationThread.md)\>\>

#### Defined in

[apis/notification-api.ts:1135](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/notification-api.ts#L1135)
