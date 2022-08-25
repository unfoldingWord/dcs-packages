[dcs-js](../README.md) / [Exports](../modules.md) / RepositoryApi

# Class: RepositoryApi

RepositoryApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`RepositoryApi`**

## Table of contents

### Constructors

- [constructor](RepositoryApi.md#constructor)

### Properties

- [axios](RepositoryApi.md#axios)
- [basePath](RepositoryApi.md#basepath)
- [configuration](RepositoryApi.md#configuration)

### Methods

- [acceptRepoTransfer](RepositoryApi.md#acceptrepotransfer)
- [createCurrentUserRepo](RepositoryApi.md#createcurrentuserrepo)
- [createFork](RepositoryApi.md#createfork)
- [generateRepo](RepositoryApi.md#generaterepo)
- [getAnnotatedTag](RepositoryApi.md#getannotatedtag)
- [getBlob](RepositoryApi.md#getblob)
- [getTree](RepositoryApi.md#gettree)
- [listForks](RepositoryApi.md#listforks)
- [rejectRepoTransfer](RepositoryApi.md#rejectrepotransfer)
- [repoAddCollaborator](RepositoryApi.md#repoaddcollaborator)
- [repoAddTeam](RepositoryApi.md#repoaddteam)
- [repoAddTopic](RepositoryApi.md#repoaddtopic)
- [repoCheckCollaborator](RepositoryApi.md#repocheckcollaborator)
- [repoCheckTeam](RepositoryApi.md#repocheckteam)
- [repoCreateBranch](RepositoryApi.md#repocreatebranch)
- [repoCreateBranchProtection](RepositoryApi.md#repocreatebranchprotection)
- [repoCreateFile](RepositoryApi.md#repocreatefile)
- [repoCreateHook](RepositoryApi.md#repocreatehook)
- [repoCreateKey](RepositoryApi.md#repocreatekey)
- [repoCreatePullRequest](RepositoryApi.md#repocreatepullrequest)
- [repoCreatePullReview](RepositoryApi.md#repocreatepullreview)
- [repoCreatePullReviewRequests](RepositoryApi.md#repocreatepullreviewrequests)
- [repoCreateRelease](RepositoryApi.md#repocreaterelease)
- [repoCreateReleaseAttachmentForm](RepositoryApi.md#repocreatereleaseattachmentform)
- [repoCreateStatus](RepositoryApi.md#repocreatestatus)
- [repoCreateTag](RepositoryApi.md#repocreatetag)
- [repoCreateWikiPage](RepositoryApi.md#repocreatewikipage)
- [repoDelete](RepositoryApi.md#repodelete)
- [repoDeleteBranch](RepositoryApi.md#repodeletebranch)
- [repoDeleteBranchProtection](RepositoryApi.md#repodeletebranchprotection)
- [repoDeleteCollaborator](RepositoryApi.md#repodeletecollaborator)
- [repoDeleteFile](RepositoryApi.md#repodeletefile)
- [repoDeleteGitHook](RepositoryApi.md#repodeletegithook)
- [repoDeleteHook](RepositoryApi.md#repodeletehook)
- [repoDeleteKey](RepositoryApi.md#repodeletekey)
- [repoDeletePullReview](RepositoryApi.md#repodeletepullreview)
- [repoDeletePullReviewRequests](RepositoryApi.md#repodeletepullreviewrequests)
- [repoDeleteRelease](RepositoryApi.md#repodeleterelease)
- [repoDeleteReleaseAttachment](RepositoryApi.md#repodeletereleaseattachment)
- [repoDeleteReleaseByTag](RepositoryApi.md#repodeletereleasebytag)
- [repoDeleteTag](RepositoryApi.md#repodeletetag)
- [repoDeleteTeam](RepositoryApi.md#repodeleteteam)
- [repoDeleteTopic](RepositoryApi.md#repodeletetopic)
- [repoDeleteWikiPage](RepositoryApi.md#repodeletewikipage)
- [repoDismissPullReview](RepositoryApi.md#repodismisspullreview)
- [repoDownloadCommitDiffOrPatch](RepositoryApi.md#repodownloadcommitdifforpatch)
- [repoDownloadPullDiffOrPatch](RepositoryApi.md#repodownloadpulldifforpatch)
- [repoEdit](RepositoryApi.md#repoedit)
- [repoEditBranchProtection](RepositoryApi.md#repoeditbranchprotection)
- [repoEditGitHook](RepositoryApi.md#repoeditgithook)
- [repoEditHook](RepositoryApi.md#repoedithook)
- [repoEditPullRequest](RepositoryApi.md#repoeditpullrequest)
- [repoEditRelease](RepositoryApi.md#repoeditrelease)
- [repoEditReleaseAttachment](RepositoryApi.md#repoeditreleaseattachment)
- [repoEditWikiPage](RepositoryApi.md#repoeditwikipage)
- [repoGet](RepositoryApi.md#repoget)
- [repoGetAllCommits](RepositoryApi.md#repogetallcommits)
- [repoGetArchive](RepositoryApi.md#repogetarchive)
- [repoGetAssignees](RepositoryApi.md#repogetassignees)
- [repoGetBranch](RepositoryApi.md#repogetbranch)
- [repoGetBranchProtection](RepositoryApi.md#repogetbranchprotection)
- [repoGetByID](RepositoryApi.md#repogetbyid)
- [repoGetCombinedStatusByRef](RepositoryApi.md#repogetcombinedstatusbyref)
- [repoGetContents](RepositoryApi.md#repogetcontents)
- [repoGetContentsList](RepositoryApi.md#repogetcontentslist)
- [repoGetEditorConfig](RepositoryApi.md#repogeteditorconfig)
- [repoGetGitHook](RepositoryApi.md#repogetgithook)
- [repoGetHook](RepositoryApi.md#repogethook)
- [repoGetIssueTemplates](RepositoryApi.md#repogetissuetemplates)
- [repoGetKey](RepositoryApi.md#repogetkey)
- [repoGetLanguages](RepositoryApi.md#repogetlanguages)
- [repoGetNote](RepositoryApi.md#repogetnote)
- [repoGetPullRequest](RepositoryApi.md#repogetpullrequest)
- [repoGetPullRequestCommits](RepositoryApi.md#repogetpullrequestcommits)
- [repoGetPullReview](RepositoryApi.md#repogetpullreview)
- [repoGetPullReviewComments](RepositoryApi.md#repogetpullreviewcomments)
- [repoGetRawFile](RepositoryApi.md#repogetrawfile)
- [repoGetRelease](RepositoryApi.md#repogetrelease)
- [repoGetReleaseAttachment](RepositoryApi.md#repogetreleaseattachment)
- [repoGetReleaseByTag](RepositoryApi.md#repogetreleasebytag)
- [repoGetReviewers](RepositoryApi.md#repogetreviewers)
- [repoGetSingleCommit](RepositoryApi.md#repogetsinglecommit)
- [repoGetTag](RepositoryApi.md#repogettag)
- [repoGetWikiPage](RepositoryApi.md#repogetwikipage)
- [repoGetWikiPageRevisions](RepositoryApi.md#repogetwikipagerevisions)
- [repoGetWikiPages](RepositoryApi.md#repogetwikipages)
- [repoListAllGitRefs](RepositoryApi.md#repolistallgitrefs)
- [repoListBranchProtection](RepositoryApi.md#repolistbranchprotection)
- [repoListBranches](RepositoryApi.md#repolistbranches)
- [repoListCollaborators](RepositoryApi.md#repolistcollaborators)
- [repoListGitHooks](RepositoryApi.md#repolistgithooks)
- [repoListGitRefs](RepositoryApi.md#repolistgitrefs)
- [repoListHooks](RepositoryApi.md#repolisthooks)
- [repoListKeys](RepositoryApi.md#repolistkeys)
- [repoListPullRequests](RepositoryApi.md#repolistpullrequests)
- [repoListPullReviews](RepositoryApi.md#repolistpullreviews)
- [repoListReleaseAttachments](RepositoryApi.md#repolistreleaseattachments)
- [repoListReleases](RepositoryApi.md#repolistreleases)
- [repoListStargazers](RepositoryApi.md#repoliststargazers)
- [repoListStatuses](RepositoryApi.md#repoliststatuses)
- [repoListStatusesByRef](RepositoryApi.md#repoliststatusesbyref)
- [repoListSubscribers](RepositoryApi.md#repolistsubscribers)
- [repoListTags](RepositoryApi.md#repolisttags)
- [repoListTeams](RepositoryApi.md#repolistteams)
- [repoListTopics](RepositoryApi.md#repolisttopics)
- [repoMergePullRequest](RepositoryApi.md#repomergepullrequest)
- [repoMigrate](RepositoryApi.md#repomigrate)
- [repoMirrorSync](RepositoryApi.md#repomirrorsync)
- [repoPullRequestIsMerged](RepositoryApi.md#repopullrequestismerged)
- [repoSearch](RepositoryApi.md#reposearch)
- [repoSigningKey](RepositoryApi.md#reposigningkey)
- [repoSubmitPullReview](RepositoryApi.md#reposubmitpullreview)
- [repoTestHook](RepositoryApi.md#repotesthook)
- [repoTrackedTimes](RepositoryApi.md#repotrackedtimes)
- [repoTransfer](RepositoryApi.md#repotransfer)
- [repoUnDismissPullReview](RepositoryApi.md#repoundismisspullreview)
- [repoUpdateFile](RepositoryApi.md#repoupdatefile)
- [repoUpdatePullRequest](RepositoryApi.md#repoupdatepullrequest)
- [repoUpdateTopics](RepositoryApi.md#repoupdatetopics)
- [topicSearch](RepositoryApi.md#topicsearch)
- [userCurrentCheckSubscription](RepositoryApi.md#usercurrentchecksubscription)
- [userCurrentDeleteSubscription](RepositoryApi.md#usercurrentdeletesubscription)
- [userCurrentPutSubscription](RepositoryApi.md#usercurrentputsubscription)
- [userTrackedTimes](RepositoryApi.md#usertrackedtimes)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new RepositoryApi**(`configuration?`, `basePath?`, `axios?`)

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

### <a id="acceptrepotransfer" name="acceptrepotransfer"></a> acceptRepoTransfer

▸ **acceptRepoTransfer**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Accept a repo transfer

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo to transfer |
| `repo` | `string` | name of the repo to transfer |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/repository-api.ts:17170](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17170)

___

### <a id="createcurrentuserrepo" name="createcurrentuserrepo"></a> createCurrentUserRepo

▸ **createCurrentUserRepo**(`body?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Create a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `body?` | [`CreateRepoOption`](../interfaces/CreateRepoOption.md) |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/repository-api.ts:17181](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17181)

___

### <a id="createfork" name="createfork"></a> createFork

▸ **createFork**(`owner`, `repo`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Fork a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo to fork |
| `repo` | `string` | name of the repo to fork |
| `body?` | [`CreateForkOption`](../interfaces/CreateForkOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/repository-api.ts:17194](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17194)

___

### <a id="generaterepo" name="generaterepo"></a> generateRepo

▸ **generateRepo**(`templateOwner`, `templateRepo`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Create a repository using a template

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `templateOwner` | `string` | name of the template repository owner |
| `templateRepo` | `string` | name of the template repository |
| `body?` | [`GenerateRepoOption`](../interfaces/GenerateRepoOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/repository-api.ts:17207](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17207)

___

### <a id="getannotatedtag" name="getannotatedtag"></a> getAnnotatedTag

▸ **getAnnotatedTag**(`owner`, `repo`, `sha`, `options?`): `Promise`<`AxiosResponse`<[`AnnotatedTag`](../interfaces/AnnotatedTag.md)\>\>

**`summary`** Gets the tag object of an annotated tag (not lightweight tags)

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `sha` | `string` | sha of the tag. The Git tags API only supports annotated tag objects, not lightweight tags. |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`AnnotatedTag`](../interfaces/AnnotatedTag.md)\>\>

#### Defined in

[apis/repository-api.ts:17220](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17220)

___

### <a id="getblob" name="getblob"></a> getBlob

▸ **getBlob**(`owner`, `repo`, `sha`, `options?`): `Promise`<`AxiosResponse`<[`GitBlobResponse`](../interfaces/GitBlobResponse.md)\>\>

**`summary`** Gets the blob of a repository.

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `sha` | `string` | sha of the commit |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`GitBlobResponse`](../interfaces/GitBlobResponse.md)\>\>

#### Defined in

[apis/repository-api.ts:17233](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17233)

___

### <a id="gettree" name="gettree"></a> getTree

▸ **getTree**(`owner`, `repo`, `sha`, `recursive?`, `page?`, `perPage?`, `options?`): `Promise`<`AxiosResponse`<[`GitTreeResponse`](../interfaces/GitTreeResponse.md)\>\>

**`summary`** Gets the tree of a repository.

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `sha` | `string` | sha of the commit |
| `recursive?` | `boolean` | - |
| `page?` | `number` | - |
| `perPage?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`GitTreeResponse`](../interfaces/GitTreeResponse.md)\>\>

#### Defined in

[apis/repository-api.ts:17249](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17249)

___

### <a id="listforks" name="listforks"></a> listForks

▸ **listForks**(`owner`, `repo`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

**`summary`** List a repository's forks

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)[]\>\>

#### Defined in

[apis/repository-api.ts:17263](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17263)

___

### <a id="rejectrepotransfer" name="rejectrepotransfer"></a> rejectRepoTransfer

▸ **rejectRepoTransfer**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Reject a repo transfer

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo to transfer |
| `repo` | `string` | name of the repo to transfer |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/repository-api.ts:17275](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17275)

___

### <a id="repoaddcollaborator" name="repoaddcollaborator"></a> repoAddCollaborator

▸ **repoAddCollaborator**(`owner`, `repo`, `collaborator`, `body?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Add a collaborator to a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `collaborator` | `string` | username of the collaborator to add |
| `body?` | [`AddCollaboratorOption`](../interfaces/AddCollaboratorOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17289](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17289)

___

### <a id="repoaddteam" name="repoaddteam"></a> repoAddTeam

▸ **repoAddTeam**(`owner`, `repo`, `team`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Add a team to a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `team` | `string` | team name |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17302](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17302)

___

### <a id="repoaddtopic" name="repoaddtopic"></a> repoAddTopic

▸ **repoAddTopic**(`owner`, `repo`, `topic`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Add a topic to a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `topic` | `string` | name of the topic to add |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17315](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17315)

___

### <a id="repocheckcollaborator" name="repocheckcollaborator"></a> repoCheckCollaborator

▸ **repoCheckCollaborator**(`owner`, `repo`, `collaborator`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Check if a user is a collaborator of a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `collaborator` | `string` | username of the collaborator |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17328](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17328)

___

### <a id="repocheckteam" name="repocheckteam"></a> repoCheckTeam

▸ **repoCheckTeam**(`owner`, `repo`, `team`, `options?`): `Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)\>\>

**`summary`** Check if a team is assigned to a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `team` | `string` | team name |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)\>\>

#### Defined in

[apis/repository-api.ts:17341](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17341)

___

### <a id="repocreatebranch" name="repocreatebranch"></a> repoCreateBranch

▸ **repoCreateBranch**(`owner`, `repo`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Branch`](../interfaces/Branch.md)\>\>

**`summary`** Create a branch

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `body?` | [`CreateBranchRepoOption`](../interfaces/CreateBranchRepoOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Branch`](../interfaces/Branch.md)\>\>

#### Defined in

[apis/repository-api.ts:17354](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17354)

___

### <a id="repocreatebranchprotection" name="repocreatebranchprotection"></a> repoCreateBranchProtection

▸ **repoCreateBranchProtection**(`owner`, `repo`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`BranchProtection`](../interfaces/BranchProtection.md)\>\>

**`summary`** Create a branch protections for a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `body?` | [`CreateBranchProtectionOption`](../interfaces/CreateBranchProtectionOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BranchProtection`](../interfaces/BranchProtection.md)\>\>

#### Defined in

[apis/repository-api.ts:17367](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17367)

___

### <a id="repocreatefile" name="repocreatefile"></a> repoCreateFile

▸ **repoCreateFile**(`body`, `owner`, `repo`, `filepath`, `options?`): `Promise`<`AxiosResponse`<[`FileResponse`](../interfaces/FileResponse.md)\>\>

**`summary`** Create a file in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`CreateFileOptions`](../interfaces/CreateFileOptions.md) |  |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `filepath` | `string` | path of the file to create |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`FileResponse`](../interfaces/FileResponse.md)\>\>

#### Defined in

[apis/repository-api.ts:17381](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17381)

___

### <a id="repocreatehook" name="repocreatehook"></a> repoCreateHook

▸ **repoCreateHook**(`owner`, `repo`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

**`summary`** Create a hook

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `body?` | [`CreateHookOption`](../interfaces/CreateHookOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

#### Defined in

[apis/repository-api.ts:17394](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17394)

___

### <a id="repocreatekey" name="repocreatekey"></a> repoCreateKey

▸ **repoCreateKey**(`owner`, `repo`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`DeployKey`](../interfaces/DeployKey.md)\>\>

**`summary`** Add a key to a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `body?` | [`CreateKeyOption`](../interfaces/CreateKeyOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`DeployKey`](../interfaces/DeployKey.md)\>\>

#### Defined in

[apis/repository-api.ts:17407](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17407)

___

### <a id="repocreatepullrequest" name="repocreatepullrequest"></a> repoCreatePullRequest

▸ **repoCreatePullRequest**(`owner`, `repo`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`PullRequest`](../interfaces/PullRequest.md)\>\>

**`summary`** Create a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `body?` | [`CreatePullRequestOption`](../interfaces/CreatePullRequestOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullRequest`](../interfaces/PullRequest.md)\>\>

#### Defined in

[apis/repository-api.ts:17420](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17420)

___

### <a id="repocreatepullreview" name="repocreatepullreview"></a> repoCreatePullReview

▸ **repoCreatePullReview**(`body`, `owner`, `repo`, `index`, `options?`): `Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)\>\>

**`summary`** Create a review to an pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`CreatePullReviewOptions`](../interfaces/CreatePullReviewOptions.md) |  |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)\>\>

#### Defined in

[apis/repository-api.ts:17434](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17434)

___

### <a id="repocreatepullreviewrequests" name="repocreatepullreviewrequests"></a> repoCreatePullReviewRequests

▸ **repoCreatePullReviewRequests**(`body`, `owner`, `repo`, `index`, `options?`): `Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)[]\>\>

**`summary`** create review requests for a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`PullReviewRequestOptions`](../interfaces/PullReviewRequestOptions.md) |  |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)[]\>\>

#### Defined in

[apis/repository-api.ts:17448](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17448)

___

### <a id="repocreaterelease" name="repocreaterelease"></a> repoCreateRelease

▸ **repoCreateRelease**(`owner`, `repo`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Release`](../interfaces/Release.md)\>\>

**`summary`** Create a release

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `body?` | [`CreateReleaseOption`](../interfaces/CreateReleaseOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Release`](../interfaces/Release.md)\>\>

#### Defined in

[apis/repository-api.ts:17461](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17461)

___

### <a id="repocreatereleaseattachmentform" name="repocreatereleaseattachmentform"></a> repoCreateReleaseAttachmentForm

▸ **repoCreateReleaseAttachmentForm**(`attachment`, `owner`, `repo`, `id`, `name?`, `options?`): `Promise`<`AxiosResponse`<[`Attachment`](../interfaces/Attachment.md)\>\>

**`summary`** Create a release attachment

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attachment` | `Blob` |  |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the release |
| `name?` | `string` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Attachment`](../interfaces/Attachment.md)\>\>

#### Defined in

[apis/repository-api.ts:17476](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17476)

___

### <a id="repocreatestatus" name="repocreatestatus"></a> repoCreateStatus

▸ **repoCreateStatus**(`owner`, `repo`, `sha`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`CommitStatus`](../interfaces/CommitStatus.md)\>\>

**`summary`** Create a commit status

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `sha` | `string` | sha of the commit |
| `body?` | [`CreateStatusOption`](../interfaces/CreateStatusOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`CommitStatus`](../interfaces/CommitStatus.md)\>\>

#### Defined in

[apis/repository-api.ts:17490](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17490)

___

### <a id="repocreatetag" name="repocreatetag"></a> repoCreateTag

▸ **repoCreateTag**(`owner`, `repo`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Tag`](../interfaces/Tag.md)\>\>

**`summary`** Create a new git tag in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `body?` | [`CreateTagOption`](../interfaces/CreateTagOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Tag`](../interfaces/Tag.md)\>\>

#### Defined in

[apis/repository-api.ts:17503](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17503)

___

### <a id="repocreatewikipage" name="repocreatewikipage"></a> repoCreateWikiPage

▸ **repoCreateWikiPage**(`owner`, `repo`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`WikiPage`](../interfaces/WikiPage.md)\>\>

**`summary`** Create a wiki page

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `body?` | [`CreateWikiPageOptions`](../interfaces/CreateWikiPageOptions.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`WikiPage`](../interfaces/WikiPage.md)\>\>

#### Defined in

[apis/repository-api.ts:17516](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17516)

___

### <a id="repodelete" name="repodelete"></a> repoDelete

▸ **repoDelete**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo to delete |
| `repo` | `string` | name of the repo to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17528](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17528)

___

### <a id="repodeletebranch" name="repodeletebranch"></a> repoDeleteBranch

▸ **repoDeleteBranch**(`owner`, `repo`, `branch`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a specific branch from a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `branch` | `string` | branch to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17541](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17541)

___

### <a id="repodeletebranchprotection" name="repodeletebranchprotection"></a> repoDeleteBranchProtection

▸ **repoDeleteBranchProtection**(`owner`, `repo`, `name`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a specific branch protection for the repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `name` | `string` | name of protected branch |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17554](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17554)

___

### <a id="repodeletecollaborator" name="repodeletecollaborator"></a> repoDeleteCollaborator

▸ **repoDeleteCollaborator**(`owner`, `repo`, `collaborator`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a collaborator from a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `collaborator` | `string` | username of the collaborator to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17567](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17567)

___

### <a id="repodeletefile" name="repodeletefile"></a> repoDeleteFile

▸ **repoDeleteFile**(`body`, `owner`, `repo`, `filepath`, `options?`): `Promise`<`AxiosResponse`<[`FileDeleteResponse`](../interfaces/FileDeleteResponse.md)\>\>

**`summary`** Delete a file in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DeleteFileOptions`](../interfaces/DeleteFileOptions.md) |  |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `filepath` | `string` | path of the file to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`FileDeleteResponse`](../interfaces/FileDeleteResponse.md)\>\>

#### Defined in

[apis/repository-api.ts:17581](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17581)

___

### <a id="repodeletegithook" name="repodeletegithook"></a> repoDeleteGitHook

▸ **repoDeleteGitHook**(`owner`, `repo`, `id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a Git hook in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `string` | id of the hook to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17594](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17594)

___

### <a id="repodeletehook" name="repodeletehook"></a> repoDeleteHook

▸ **repoDeleteHook**(`owner`, `repo`, `id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a hook in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the hook to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17607](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17607)

___

### <a id="repodeletekey" name="repodeletekey"></a> repoDeleteKey

▸ **repoDeleteKey**(`owner`, `repo`, `id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a key from a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the key to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17620](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17620)

___

### <a id="repodeletepullreview" name="repodeletepullreview"></a> repoDeletePullReview

▸ **repoDeletePullReview**(`owner`, `repo`, `index`, `id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a specific review from a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request |
| `id` | `number` | id of the review |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17634](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17634)

___

### <a id="repodeletepullreviewrequests" name="repodeletepullreviewrequests"></a> repoDeletePullReviewRequests

▸ **repoDeletePullReviewRequests**(`body`, `owner`, `repo`, `index`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** cancel review requests for a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`PullReviewRequestOptions`](../interfaces/PullReviewRequestOptions.md) |  |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17648](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17648)

___

### <a id="repodeleterelease" name="repodeleterelease"></a> repoDeleteRelease

▸ **repoDeleteRelease**(`owner`, `repo`, `id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a release

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the release to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17661](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17661)

___

### <a id="repodeletereleaseattachment" name="repodeletereleaseattachment"></a> repoDeleteReleaseAttachment

▸ **repoDeleteReleaseAttachment**(`owner`, `repo`, `id`, `attachmentId`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a release attachment

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the release |
| `attachmentId` | `number` | id of the attachment to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17675](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17675)

___

### <a id="repodeletereleasebytag" name="repodeletereleasebytag"></a> repoDeleteReleaseByTag

▸ **repoDeleteReleaseByTag**(`owner`, `repo`, `tag`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a release by tag name

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `tag` | `string` | tag name of the release to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17688](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17688)

___

### <a id="repodeletetag" name="repodeletetag"></a> repoDeleteTag

▸ **repoDeleteTag**(`owner`, `repo`, `tag`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a repository's tag by name

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `tag` | `string` | name of tag to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17701](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17701)

___

### <a id="repodeleteteam" name="repodeleteteam"></a> repoDeleteTeam

▸ **repoDeleteTeam**(`owner`, `repo`, `team`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a team from a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `team` | `string` | team name |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17714](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17714)

___

### <a id="repodeletetopic" name="repodeletetopic"></a> repoDeleteTopic

▸ **repoDeleteTopic**(`owner`, `repo`, `topic`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a topic from a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `topic` | `string` | name of the topic to delete |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17727](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17727)

___

### <a id="repodeletewikipage" name="repodeletewikipage"></a> repoDeleteWikiPage

▸ **repoDeleteWikiPage**(`owner`, `repo`, `pageName`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Delete a wiki page

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `pageName` | `string` | name of the page |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17740](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17740)

___

### <a id="repodismisspullreview" name="repodismisspullreview"></a> repoDismissPullReview

▸ **repoDismissPullReview**(`body`, `owner`, `repo`, `index`, `id`, `options?`): `Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)\>\>

**`summary`** Dismiss a review for a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DismissPullReviewOptions`](../interfaces/DismissPullReviewOptions.md) |  |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request |
| `id` | `number` | id of the review |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)\>\>

#### Defined in

[apis/repository-api.ts:17755](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17755)

___

### <a id="repodownloadcommitdifforpatch" name="repodownloadcommitdifforpatch"></a> repoDownloadCommitDiffOrPatch

▸ **repoDownloadCommitDiffOrPatch**(`owner`, `repo`, `sha`, `diffType`, `options?`): `Promise`<`AxiosResponse`<`string`\>\>

**`summary`** Get a commit's diff or patch

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `sha` | `string` | SHA of the commit to get |
| `diffType` | `string` | whether the output is diff or patch |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`string`\>\>

#### Defined in

[apis/repository-api.ts:17769](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17769)

___

### <a id="repodownloadpulldifforpatch" name="repodownloadpulldifforpatch"></a> repoDownloadPullDiffOrPatch

▸ **repoDownloadPullDiffOrPatch**(`owner`, `repo`, `index`, `diffType`, `binary?`, `options?`): `Promise`<`AxiosResponse`<`string`\>\>

**`summary`** Get a pull request diff or patch

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request to get |
| `diffType` | `string` | whether the output is diff or patch |
| `binary?` | `boolean` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`string`\>\>

#### Defined in

[apis/repository-api.ts:17784](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17784)

___

### <a id="repoedit" name="repoedit"></a> repoEdit

▸ **repoEdit**(`owner`, `repo`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Edit a repository's properties. Only fields that are set will be changed.

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo to edit |
| `repo` | `string` | name of the repo to edit |
| `body?` | [`EditRepoOption`](../interfaces/EditRepoOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/repository-api.ts:17797](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17797)

___

### <a id="repoeditbranchprotection" name="repoeditbranchprotection"></a> repoEditBranchProtection

▸ **repoEditBranchProtection**(`owner`, `repo`, `name`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`BranchProtection`](../interfaces/BranchProtection.md)\>\>

**`summary`** Edit a branch protections for a repository. Only fields that are set will be changed

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `name` | `string` | name of protected branch |
| `body?` | [`EditBranchProtectionOption`](../interfaces/EditBranchProtectionOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BranchProtection`](../interfaces/BranchProtection.md)\>\>

#### Defined in

[apis/repository-api.ts:17811](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17811)

___

### <a id="repoeditgithook" name="repoeditgithook"></a> repoEditGitHook

▸ **repoEditGitHook**(`owner`, `repo`, `id`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`GitHook`](../interfaces/GitHook.md)\>\>

**`summary`** Edit a Git hook in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `string` | id of the hook to get |
| `body?` | [`EditGitHookOption`](../interfaces/EditGitHookOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`GitHook`](../interfaces/GitHook.md)\>\>

#### Defined in

[apis/repository-api.ts:17825](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17825)

___

### <a id="repoedithook" name="repoedithook"></a> repoEditHook

▸ **repoEditHook**(`owner`, `repo`, `id`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

**`summary`** Edit a hook in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | index of the hook |
| `body?` | [`EditHookOption`](../interfaces/EditHookOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

#### Defined in

[apis/repository-api.ts:17839](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17839)

___

### <a id="repoeditpullrequest" name="repoeditpullrequest"></a> repoEditPullRequest

▸ **repoEditPullRequest**(`owner`, `repo`, `index`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`PullRequest`](../interfaces/PullRequest.md)\>\>

**`summary`** Update a pull request. If using deadline only the date will be taken into account, and time of day ignored.

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request to edit |
| `body?` | [`EditPullRequestOption`](../interfaces/EditPullRequestOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullRequest`](../interfaces/PullRequest.md)\>\>

#### Defined in

[apis/repository-api.ts:17853](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17853)

___

### <a id="repoeditrelease" name="repoeditrelease"></a> repoEditRelease

▸ **repoEditRelease**(`owner`, `repo`, `id`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Release`](../interfaces/Release.md)\>\>

**`summary`** Update a release

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the release to edit |
| `body?` | [`EditReleaseOption`](../interfaces/EditReleaseOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Release`](../interfaces/Release.md)\>\>

#### Defined in

[apis/repository-api.ts:17867](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17867)

___

### <a id="repoeditreleaseattachment" name="repoeditreleaseattachment"></a> repoEditReleaseAttachment

▸ **repoEditReleaseAttachment**(`owner`, `repo`, `id`, `attachmentId`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`Attachment`](../interfaces/Attachment.md)\>\>

**`summary`** Edit a release attachment

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the release |
| `attachmentId` | `number` | id of the attachment to edit |
| `body?` | [`EditAttachmentOptions`](../interfaces/EditAttachmentOptions.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Attachment`](../interfaces/Attachment.md)\>\>

#### Defined in

[apis/repository-api.ts:17882](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17882)

___

### <a id="repoeditwikipage" name="repoeditwikipage"></a> repoEditWikiPage

▸ **repoEditWikiPage**(`owner`, `repo`, `pageName`, `body?`, `options?`): `Promise`<`AxiosResponse`<[`WikiPage`](../interfaces/WikiPage.md)\>\>

**`summary`** Edit a wiki page

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `pageName` | `string` | name of the page |
| `body?` | [`CreateWikiPageOptions`](../interfaces/CreateWikiPageOptions.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`WikiPage`](../interfaces/WikiPage.md)\>\>

#### Defined in

[apis/repository-api.ts:17896](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17896)

___

### <a id="repoget" name="repoget"></a> repoGet

▸ **repoGet**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Get a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/repository-api.ts:17908](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17908)

___

### <a id="repogetallcommits" name="repogetallcommits"></a> repoGetAllCommits

▸ **repoGetAllCommits**(`owner`, `repo`, `sha?`, `path?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Commit`](../interfaces/Commit.md)[]\>\>

**`summary`** Get a list of all commits from a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `sha?` | `string` | - |
| `path?` | `string` | - |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Commit`](../interfaces/Commit.md)[]\>\>

#### Defined in

[apis/repository-api.ts:17924](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17924)

___

### <a id="repogetarchive" name="repogetarchive"></a> repoGetArchive

▸ **repoGetArchive**(`owner`, `repo`, `archive`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Get an archive of a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `archive` | `string` | the git reference for download with attached archive format (e.g. master.zip) |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:17937](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17937)

___

### <a id="repogetassignees" name="repogetassignees"></a> repoGetAssignees

▸ **repoGetAssignees**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** Return all users that have write access and can be assigned to issues

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/repository-api.ts:17949](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17949)

___

### <a id="repogetbranch" name="repogetbranch"></a> repoGetBranch

▸ **repoGetBranch**(`owner`, `repo`, `branch`, `options?`): `Promise`<`AxiosResponse`<[`Branch`](../interfaces/Branch.md)\>\>

**`summary`** Retrieve a specific branch from a repository, including its effective branch protection

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `branch` | `string` | branch to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Branch`](../interfaces/Branch.md)\>\>

#### Defined in

[apis/repository-api.ts:17962](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17962)

___

### <a id="repogetbranchprotection" name="repogetbranchprotection"></a> repoGetBranchProtection

▸ **repoGetBranchProtection**(`owner`, `repo`, `name`, `options?`): `Promise`<`AxiosResponse`<[`BranchProtection`](../interfaces/BranchProtection.md)\>\>

**`summary`** Get a specific branch protection for the repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `name` | `string` | name of protected branch |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BranchProtection`](../interfaces/BranchProtection.md)\>\>

#### Defined in

[apis/repository-api.ts:17975](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17975)

___

### <a id="repogetbyid" name="repogetbyid"></a> repoGetByID

▸ **repoGetByID**(`id`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Get a repository by id

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | id of the repo to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/repository-api.ts:17986](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L17986)

___

### <a id="repogetcombinedstatusbyref" name="repogetcombinedstatusbyref"></a> repoGetCombinedStatusByRef

▸ **repoGetCombinedStatusByRef**(`owner`, `repo`, `ref`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`CombinedStatus`](../interfaces/CombinedStatus.md)\>\>

**`summary`** Get a commit's combined status, by branch/tag/commit reference

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `ref` | `string` | name of branch/tag/commit |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`CombinedStatus`](../interfaces/CombinedStatus.md)\>\>

#### Defined in

[apis/repository-api.ts:18001](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18001)

___

### <a id="repogetcontents" name="repogetcontents"></a> repoGetContents

▸ **repoGetContents**(`owner`, `repo`, `filepath`, `ref?`, `options?`): `Promise`<`AxiosResponse`<[`ContentsResponse`](../interfaces/ContentsResponse.md)\>\>

**`summary`** Gets the metadata and contents (if a file) of an entry in a repository, or a list of entries if a dir

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `filepath` | `string` | path of the dir, file, symlink or submodule in the repo |
| `ref?` | `string` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`ContentsResponse`](../interfaces/ContentsResponse.md)\>\>

#### Defined in

[apis/repository-api.ts:18015](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18015)

___

### <a id="repogetcontentslist" name="repogetcontentslist"></a> repoGetContentsList

▸ **repoGetContentsList**(`owner`, `repo`, `ref?`, `options?`): `Promise`<`AxiosResponse`<[`ContentsResponse`](../interfaces/ContentsResponse.md)[]\>\>

**`summary`** Gets the metadata of all the entries of the root dir

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `ref?` | `string` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`ContentsResponse`](../interfaces/ContentsResponse.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18028](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18028)

___

### <a id="repogeteditorconfig" name="repogeteditorconfig"></a> repoGetEditorConfig

▸ **repoGetEditorConfig**(`owner`, `repo`, `filepath`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Get the EditorConfig definitions of a file in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `filepath` | `string` | filepath of file to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:18041](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18041)

___

### <a id="repogetgithook" name="repogetgithook"></a> repoGetGitHook

▸ **repoGetGitHook**(`owner`, `repo`, `id`, `options?`): `Promise`<`AxiosResponse`<[`GitHook`](../interfaces/GitHook.md)\>\>

**`summary`** Get a Git hook

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `string` | id of the hook to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`GitHook`](../interfaces/GitHook.md)\>\>

#### Defined in

[apis/repository-api.ts:18054](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18054)

___

### <a id="repogethook" name="repogethook"></a> repoGetHook

▸ **repoGetHook**(`owner`, `repo`, `id`, `options?`): `Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

**`summary`** Get a hook

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the hook to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)\>\>

#### Defined in

[apis/repository-api.ts:18067](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18067)

___

### <a id="repogetissuetemplates" name="repogetissuetemplates"></a> repoGetIssueTemplates

▸ **repoGetIssueTemplates**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<[`IssueTemplate`](../interfaces/IssueTemplate.md)[]\>\>

**`summary`** Get available issue templates for a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`IssueTemplate`](../interfaces/IssueTemplate.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18079](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18079)

___

### <a id="repogetkey" name="repogetkey"></a> repoGetKey

▸ **repoGetKey**(`owner`, `repo`, `id`, `options?`): `Promise`<`AxiosResponse`<[`DeployKey`](../interfaces/DeployKey.md)\>\>

**`summary`** Get a repository's key by id

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the key to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`DeployKey`](../interfaces/DeployKey.md)\>\>

#### Defined in

[apis/repository-api.ts:18092](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18092)

___

### <a id="repogetlanguages" name="repogetlanguages"></a> repoGetLanguages

▸ **repoGetLanguages**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<{ `[key: string]`: `number`;  }\>\>

**`summary`** Get languages and number of bytes of code written

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<{ `[key: string]`: `number`;  }\>\>

#### Defined in

[apis/repository-api.ts:18104](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18104)

___

### <a id="repogetnote" name="repogetnote"></a> repoGetNote

▸ **repoGetNote**(`owner`, `repo`, `sha`, `options?`): `Promise`<`AxiosResponse`<[`Note`](../interfaces/Note.md)\>\>

**`summary`** Get a note corresponding to a single commit from a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `sha` | `string` | a git ref or commit sha |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Note`](../interfaces/Note.md)\>\>

#### Defined in

[apis/repository-api.ts:18117](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18117)

___

### <a id="repogetpullrequest" name="repogetpullrequest"></a> repoGetPullRequest

▸ **repoGetPullRequest**(`owner`, `repo`, `index`, `options?`): `Promise`<`AxiosResponse`<[`PullRequest`](../interfaces/PullRequest.md)\>\>

**`summary`** Get a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullRequest`](../interfaces/PullRequest.md)\>\>

#### Defined in

[apis/repository-api.ts:18130](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18130)

___

### <a id="repogetpullrequestcommits" name="repogetpullrequestcommits"></a> repoGetPullRequestCommits

▸ **repoGetPullRequestCommits**(`owner`, `repo`, `index`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Commit`](../interfaces/Commit.md)[]\>\>

**`summary`** Get commits for a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request to get |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Commit`](../interfaces/Commit.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18145](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18145)

___

### <a id="repogetpullreview" name="repogetpullreview"></a> repoGetPullReview

▸ **repoGetPullReview**(`owner`, `repo`, `index`, `id`, `options?`): `Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)\>\>

**`summary`** Get a specific review for a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request |
| `id` | `number` | id of the review |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)\>\>

#### Defined in

[apis/repository-api.ts:18159](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18159)

___

### <a id="repogetpullreviewcomments" name="repogetpullreviewcomments"></a> repoGetPullReviewComments

▸ **repoGetPullReviewComments**(`owner`, `repo`, `index`, `id`, `options?`): `Promise`<`AxiosResponse`<[`PullReviewComment`](../interfaces/PullReviewComment.md)[]\>\>

**`summary`** Get a specific review for a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request |
| `id` | `number` | id of the review |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullReviewComment`](../interfaces/PullReviewComment.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18173](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18173)

___

### <a id="repogetrawfile" name="repogetrawfile"></a> repoGetRawFile

▸ **repoGetRawFile**(`owner`, `repo`, `filepath`, `ref?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Get a file from a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `filepath` | `string` | filepath of the file to get |
| `ref?` | `string` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:18187](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18187)

___

### <a id="repogetrelease" name="repogetrelease"></a> repoGetRelease

▸ **repoGetRelease**(`owner`, `repo`, `id`, `options?`): `Promise`<`AxiosResponse`<[`Release`](../interfaces/Release.md)\>\>

**`summary`** Get a release

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the release to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Release`](../interfaces/Release.md)\>\>

#### Defined in

[apis/repository-api.ts:18200](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18200)

___

### <a id="repogetreleaseattachment" name="repogetreleaseattachment"></a> repoGetReleaseAttachment

▸ **repoGetReleaseAttachment**(`owner`, `repo`, `id`, `attachmentId`, `options?`): `Promise`<`AxiosResponse`<[`Attachment`](../interfaces/Attachment.md)\>\>

**`summary`** Get a release attachment

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the release |
| `attachmentId` | `number` | id of the attachment to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Attachment`](../interfaces/Attachment.md)\>\>

#### Defined in

[apis/repository-api.ts:18214](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18214)

___

### <a id="repogetreleasebytag" name="repogetreleasebytag"></a> repoGetReleaseByTag

▸ **repoGetReleaseByTag**(`owner`, `repo`, `tag`, `options?`): `Promise`<`AxiosResponse`<[`Release`](../interfaces/Release.md)\>\>

**`summary`** Get a release by tag name

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `tag` | `string` | tag name of the release to get |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Release`](../interfaces/Release.md)\>\>

#### Defined in

[apis/repository-api.ts:18227](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18227)

___

### <a id="repogetreviewers" name="repogetreviewers"></a> repoGetReviewers

▸ **repoGetReviewers**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** Return all users that can be requested to review in this repo

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18239](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18239)

___

### <a id="repogetsinglecommit" name="repogetsinglecommit"></a> repoGetSingleCommit

▸ **repoGetSingleCommit**(`owner`, `repo`, `sha`, `options?`): `Promise`<`AxiosResponse`<[`Commit`](../interfaces/Commit.md)\>\>

**`summary`** Get a single commit from a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `sha` | `string` | a git ref or commit sha |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Commit`](../interfaces/Commit.md)\>\>

#### Defined in

[apis/repository-api.ts:18252](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18252)

___

### <a id="repogettag" name="repogettag"></a> repoGetTag

▸ **repoGetTag**(`owner`, `repo`, `tag`, `options?`): `Promise`<`AxiosResponse`<[`Tag`](../interfaces/Tag.md)\>\>

**`summary`** Get the tag of a repository by tag name

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `tag` | `string` | name of tag |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Tag`](../interfaces/Tag.md)\>\>

#### Defined in

[apis/repository-api.ts:18265](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18265)

___

### <a id="repogetwikipage" name="repogetwikipage"></a> repoGetWikiPage

▸ **repoGetWikiPage**(`owner`, `repo`, `pageName`, `options?`): `Promise`<`AxiosResponse`<[`WikiPage`](../interfaces/WikiPage.md)\>\>

**`summary`** Get a wiki page

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `pageName` | `string` | name of the page |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`WikiPage`](../interfaces/WikiPage.md)\>\>

#### Defined in

[apis/repository-api.ts:18278](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18278)

___

### <a id="repogetwikipagerevisions" name="repogetwikipagerevisions"></a> repoGetWikiPageRevisions

▸ **repoGetWikiPageRevisions**(`owner`, `repo`, `pageName`, `page?`, `options?`): `Promise`<`AxiosResponse`<[`WikiCommitList`](../interfaces/WikiCommitList.md)\>\>

**`summary`** Get revisions of a wiki page

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `pageName` | `string` | name of the page |
| `page?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`WikiCommitList`](../interfaces/WikiCommitList.md)\>\>

#### Defined in

[apis/repository-api.ts:18292](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18292)

___

### <a id="repogetwikipages" name="repogetwikipages"></a> repoGetWikiPages

▸ **repoGetWikiPages**(`owner`, `repo`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`WikiPageMetaData`](../interfaces/WikiPageMetaData.md)[]\>\>

**`summary`** Get all wiki pages

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`WikiPageMetaData`](../interfaces/WikiPageMetaData.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18306](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18306)

___

### <a id="repolistallgitrefs" name="repolistallgitrefs"></a> repoListAllGitRefs

▸ **repoListAllGitRefs**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<[`Reference`](../interfaces/Reference.md)[]\>\>

**`summary`** Get specified ref or filtered repository's refs

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Reference`](../interfaces/Reference.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18318](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18318)

___

### <a id="repolistbranchprotection" name="repolistbranchprotection"></a> repoListBranchProtection

▸ **repoListBranchProtection**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<[`BranchProtection`](../interfaces/BranchProtection.md)[]\>\>

**`summary`** List branch protections for a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BranchProtection`](../interfaces/BranchProtection.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18330](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18330)

___

### <a id="repolistbranches" name="repolistbranches"></a> repoListBranches

▸ **repoListBranches**(`owner`, `repo`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Branch`](../interfaces/Branch.md)[]\>\>

**`summary`** List a repository's branches

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Branch`](../interfaces/Branch.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18344](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18344)

___

### <a id="repolistcollaborators" name="repolistcollaborators"></a> repoListCollaborators

▸ **repoListCollaborators**(`owner`, `repo`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** List a repository's collaborators

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18358](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18358)

___

### <a id="repolistgithooks" name="repolistgithooks"></a> repoListGitHooks

▸ **repoListGitHooks**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<[`GitHook`](../interfaces/GitHook.md)[]\>\>

**`summary`** List the Git hooks in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`GitHook`](../interfaces/GitHook.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18370](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18370)

___

### <a id="repolistgitrefs" name="repolistgitrefs"></a> repoListGitRefs

▸ **repoListGitRefs**(`owner`, `repo`, `ref`, `options?`): `Promise`<`AxiosResponse`<[`Reference`](../interfaces/Reference.md)[]\>\>

**`summary`** Get specified ref or filtered repository's refs

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `ref` | `string` | part or full name of the ref |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Reference`](../interfaces/Reference.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18383](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18383)

___

### <a id="repolisthooks" name="repolisthooks"></a> repoListHooks

▸ **repoListHooks**(`owner`, `repo`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)[]\>\>

**`summary`** List the hooks in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Hook`](../interfaces/Hook.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18397](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18397)

___

### <a id="repolistkeys" name="repolistkeys"></a> repoListKeys

▸ **repoListKeys**(`owner`, `repo`, `keyId?`, `fingerprint?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`DeployKey`](../interfaces/DeployKey.md)[]\>\>

**`summary`** List a repository's keys

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `keyId?` | `number` | - |
| `fingerprint?` | `string` | - |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`DeployKey`](../interfaces/DeployKey.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18413](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18413)

___

### <a id="repolistpullrequests" name="repolistpullrequests"></a> repoListPullRequests

▸ **repoListPullRequests**(`owner`, `repo`, `state?`, `sort?`, `milestone?`, `labels?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`PullRequest`](../interfaces/PullRequest.md)[]\>\>

**`summary`** List a repo's pull requests

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `state?` | `string` | - |
| `sort?` | `string` | - |
| `milestone?` | `number` | - |
| `labels?` | `number`[] | - |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullRequest`](../interfaces/PullRequest.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18431](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18431)

___

### <a id="repolistpullreviews" name="repolistpullreviews"></a> repoListPullReviews

▸ **repoListPullReviews**(`owner`, `repo`, `index`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)[]\>\>

**`summary`** List all reviews for a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18446](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18446)

___

### <a id="repolistreleaseattachments" name="repolistreleaseattachments"></a> repoListReleaseAttachments

▸ **repoListReleaseAttachments**(`owner`, `repo`, `id`, `options?`): `Promise`<`AxiosResponse`<[`Attachment`](../interfaces/Attachment.md)[]\>\>

**`summary`** List release's attachments

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the release |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Attachment`](../interfaces/Attachment.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18459](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18459)

___

### <a id="repolistreleases" name="repolistreleases"></a> repoListReleases

▸ **repoListReleases**(`owner`, `repo`, `draft?`, `preRelease?`, `perPage?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Release`](../interfaces/Release.md)[]\>\>

**`summary`** List a repo's releases

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `draft?` | `boolean` | - |
| `preRelease?` | `boolean` | - |
| `perPage?` | `number` | - |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Release`](../interfaces/Release.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18476](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18476)

___

### <a id="repoliststargazers" name="repoliststargazers"></a> repoListStargazers

▸ **repoListStargazers**(`owner`, `repo`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** List a repo's stargazers

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18490](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18490)

___

### <a id="repoliststatuses" name="repoliststatuses"></a> repoListStatuses

▸ **repoListStatuses**(`owner`, `repo`, `sha`, `sort?`, `state?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`CommitStatus`](../interfaces/CommitStatus.md)[]\>\>

**`summary`** Get a commit's statuses

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `sha` | `string` | sha of the commit |
| `sort?` | `string` | - |
| `state?` | `string` | - |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`CommitStatus`](../interfaces/CommitStatus.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18507](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18507)

___

### <a id="repoliststatusesbyref" name="repoliststatusesbyref"></a> repoListStatusesByRef

▸ **repoListStatusesByRef**(`owner`, `repo`, `ref`, `sort?`, `state?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`CommitStatus`](../interfaces/CommitStatus.md)[]\>\>

**`summary`** Get a commit's statuses, by branch/tag/commit reference

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `ref` | `string` | name of branch/tag/commit |
| `sort?` | `string` | - |
| `state?` | `string` | - |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`CommitStatus`](../interfaces/CommitStatus.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18524](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18524)

___

### <a id="repolistsubscribers" name="repolistsubscribers"></a> repoListSubscribers

▸ **repoListSubscribers**(`owner`, `repo`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

**`summary`** List a repo's watchers

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`User`](../interfaces/User.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18538](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18538)

___

### <a id="repolisttags" name="repolisttags"></a> repoListTags

▸ **repoListTags**(`owner`, `repo`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`Tag`](../interfaces/Tag.md)[]\>\>

**`summary`** List a repository's tags

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Tag`](../interfaces/Tag.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18552](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18552)

___

### <a id="repolistteams" name="repolistteams"></a> repoListTeams

▸ **repoListTeams**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)[]\>\>

**`summary`** List a repository's teams

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Team`](../interfaces/Team.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18564](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18564)

___

### <a id="repolisttopics" name="repolisttopics"></a> repoListTopics

▸ **repoListTopics**(`owner`, `repo`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`TopicName`](../interfaces/TopicName.md)\>\>

**`summary`** Get list of topics that a repository has

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`TopicName`](../interfaces/TopicName.md)\>\>

#### Defined in

[apis/repository-api.ts:18578](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18578)

___

### <a id="repomergepullrequest" name="repomergepullrequest"></a> repoMergePullRequest

▸ **repoMergePullRequest**(`owner`, `repo`, `index`, `body?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Merge a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request to merge |
| `body?` | [`MergePullRequestOption`](../interfaces/MergePullRequestOption.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:18592](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18592)

___

### <a id="repomigrate" name="repomigrate"></a> repoMigrate

▸ **repoMigrate**(`body?`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Migrate a remote git repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `body?` | [`MigrateRepoOptions`](../interfaces/MigrateRepoOptions.md) |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/repository-api.ts:18603](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18603)

___

### <a id="repomirrorsync" name="repomirrorsync"></a> repoMirrorSync

▸ **repoMirrorSync**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Sync a mirrored repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo to sync |
| `repo` | `string` | name of the repo to sync |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:18615](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18615)

___

### <a id="repopullrequestismerged" name="repopullrequestismerged"></a> repoPullRequestIsMerged

▸ **repoPullRequestIsMerged**(`owner`, `repo`, `index`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Check if a pull request has been merged

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:18628](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18628)

___

### <a id="reposearch" name="reposearch"></a> repoSearch

▸ **repoSearch**(`q?`, `topic?`, `includeDesc?`, `uid?`, `priorityOwnerId?`, `teamId?`, `starredBy?`, `_private?`, `isPrivate?`, `template?`, `archived?`, `mode?`, `exclusive?`, `repo?`, `owner?`, `lang?`, `subject?`, `book?`, `includeMetadata?`, `sort?`, `order?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`SearchResults`](../interfaces/SearchResults.md)\>\>

**`summary`** Search for repositories

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `q?` | `string` |
| `topic?` | `boolean` |
| `includeDesc?` | `boolean` |
| `uid?` | `number` |
| `priorityOwnerId?` | `number` |
| `teamId?` | `number` |
| `starredBy?` | `number` |
| `_private?` | `boolean` |
| `isPrivate?` | `boolean` |
| `template?` | `boolean` |
| `archived?` | `boolean` |
| `mode?` | `string` |
| `exclusive?` | `boolean` |
| `repo?` | `string` |
| `owner?` | `string` |
| `lang?` | `string` |
| `subject?` | `string` |
| `book?` | `string` |
| `includeMetadata?` | `boolean` |
| `sort?` | `string` |
| `order?` | `string` |
| `page?` | `number` |
| `limit?` | `number` |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`SearchResults`](../interfaces/SearchResults.md)\>\>

#### Defined in

[apis/repository-api.ts:18661](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18661)

___

### <a id="reposigningkey" name="reposigningkey"></a> repoSigningKey

▸ **repoSigningKey**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<`string`\>\>

**`summary`** Get signing-key.gpg for given repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`string`\>\>

#### Defined in

[apis/repository-api.ts:18673](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18673)

___

### <a id="reposubmitpullreview" name="reposubmitpullreview"></a> repoSubmitPullReview

▸ **repoSubmitPullReview**(`body`, `owner`, `repo`, `index`, `id`, `options?`): `Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)\>\>

**`summary`** Submit a pending review to an pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SubmitPullReviewOptions`](../interfaces/SubmitPullReviewOptions.md) |  |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request |
| `id` | `number` | id of the review |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)\>\>

#### Defined in

[apis/repository-api.ts:18688](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18688)

___

### <a id="repotesthook" name="repotesthook"></a> repoTestHook

▸ **repoTestHook**(`owner`, `repo`, `id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Test a push webhook

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `id` | `number` | id of the hook to test |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:18701](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18701)

___

### <a id="repotrackedtimes" name="repotrackedtimes"></a> repoTrackedTimes

▸ **repoTrackedTimes**(`owner`, `repo`, `user?`, `since?`, `before?`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`TrackedTime`](../interfaces/TrackedTime.md)[]\>\>

**`summary`** List a repo's tracked times

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `user?` | `string` | - |
| `since?` | `Date` | - |
| `before?` | `Date` | - |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`TrackedTime`](../interfaces/TrackedTime.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18718](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18718)

___

### <a id="repotransfer" name="repotransfer"></a> repoTransfer

▸ **repoTransfer**(`body`, `owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

**`summary`** Transfer a repo ownership

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`TransferRepoOption`](../interfaces/TransferRepoOption.md) | Transfer Options |
| `owner` | `string` | owner of the repo to transfer |
| `repo` | `string` | name of the repo to transfer |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`Repository`](../interfaces/Repository.md)\>\>

#### Defined in

[apis/repository-api.ts:18731](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18731)

___

### <a id="repoundismisspullreview" name="repoundismisspullreview"></a> repoUnDismissPullReview

▸ **repoUnDismissPullReview**(`owner`, `repo`, `index`, `id`, `options?`): `Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)\>\>

**`summary`** Cancel to dismiss a review for a pull request

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request |
| `id` | `number` | id of the review |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`PullReview`](../interfaces/PullReview.md)\>\>

#### Defined in

[apis/repository-api.ts:18745](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18745)

___

### <a id="repoupdatefile" name="repoupdatefile"></a> repoUpdateFile

▸ **repoUpdateFile**(`body`, `owner`, `repo`, `filepath`, `options?`): `Promise`<`AxiosResponse`<[`FileResponse`](../interfaces/FileResponse.md)\>\>

**`summary`** Update a file in a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`UpdateFileOptions`](../interfaces/UpdateFileOptions.md) |  |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `filepath` | `string` | path of the file to update |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`FileResponse`](../interfaces/FileResponse.md)\>\>

#### Defined in

[apis/repository-api.ts:18759](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18759)

___

### <a id="repoupdatepullrequest" name="repoupdatepullrequest"></a> repoUpdatePullRequest

▸ **repoUpdatePullRequest**(`owner`, `repo`, `index`, `style?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Merge PR's baseBranch into headBranch

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `index` | `number` | index of the pull request to get |
| `style?` | `string` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:18773](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18773)

___

### <a id="repoupdatetopics" name="repoupdatetopics"></a> repoUpdateTopics

▸ **repoUpdateTopics**(`owner`, `repo`, `body?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Replace list of topics for a repository

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `body?` | [`RepoTopicOptions`](../interfaces/RepoTopicOptions.md) | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:18786](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18786)

___

### <a id="topicsearch" name="topicsearch"></a> topicSearch

▸ **topicSearch**(`q`, `page?`, `limit?`, `options?`): `Promise`<`AxiosResponse`<[`TopicResponse`](../interfaces/TopicResponse.md)[]\>\>

**`summary`** search topics via keyword

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | `string` | keywords to search |
| `page?` | `number` | - |
| `limit?` | `number` | - |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`TopicResponse`](../interfaces/TopicResponse.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18799](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18799)

___

### <a id="usercurrentchecksubscription" name="usercurrentchecksubscription"></a> userCurrentCheckSubscription

▸ **userCurrentCheckSubscription**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<[`WatchInfo`](../interfaces/WatchInfo.md)\>\>

**`summary`** Check if the current user is watching a repo

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`WatchInfo`](../interfaces/WatchInfo.md)\>\>

#### Defined in

[apis/repository-api.ts:18811](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18811)

___

### <a id="usercurrentdeletesubscription" name="usercurrentdeletesubscription"></a> userCurrentDeleteSubscription

▸ **userCurrentDeleteSubscription**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

**`summary`** Unwatch a repo

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[apis/repository-api.ts:18823](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18823)

___

### <a id="usercurrentputsubscription" name="usercurrentputsubscription"></a> userCurrentPutSubscription

▸ **userCurrentPutSubscription**(`owner`, `repo`, `options?`): `Promise`<`AxiosResponse`<[`WatchInfo`](../interfaces/WatchInfo.md)\>\>

**`summary`** Watch a repo

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`WatchInfo`](../interfaces/WatchInfo.md)\>\>

#### Defined in

[apis/repository-api.ts:18835](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18835)

___

### <a id="usertrackedtimes" name="usertrackedtimes"></a> userTrackedTimes

▸ **userTrackedTimes**(`owner`, `repo`, `user`, `options?`): `Promise`<`AxiosResponse`<[`TrackedTime`](../interfaces/TrackedTime.md)[]\>\>

**`summary`** List a user's tracked times in a repo

**`throws`** {RequiredError}

**`memberof`** RepositoryApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | owner of the repo |
| `repo` | `string` | name of the repo |
| `user` | `string` | username of user |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<[`TrackedTime`](../interfaces/TrackedTime.md)[]\>\>

#### Defined in

[apis/repository-api.ts:18848](https://github.com/unfoldingWord/dcs-js/blob/c677a54/apis/repository-api.ts#L18848)
