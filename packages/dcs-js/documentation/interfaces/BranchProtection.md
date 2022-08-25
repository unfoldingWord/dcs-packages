[dcs-js](../README.md) / [Exports](../modules.md) / BranchProtection

# Interface: BranchProtection

BranchProtection represents a branch protection for a repository

**`export`**

**`interface`** BranchProtection

## Table of contents

### Properties

- [approvalsWhitelistTeams](BranchProtection.md#approvalswhitelistteams)
- [approvalsWhitelistUsername](BranchProtection.md#approvalswhitelistusername)
- [blockOnOfficialReviewRequests](BranchProtection.md#blockonofficialreviewrequests)
- [blockOnOutdatedBranch](BranchProtection.md#blockonoutdatedbranch)
- [blockOnRejectedReviews](BranchProtection.md#blockonrejectedreviews)
- [branchName](BranchProtection.md#branchname)
- [createdAt](BranchProtection.md#createdat)
- [dismissStaleApprovals](BranchProtection.md#dismissstaleapprovals)
- [enableApprovalsWhitelist](BranchProtection.md#enableapprovalswhitelist)
- [enableMergeWhitelist](BranchProtection.md#enablemergewhitelist)
- [enablePush](BranchProtection.md#enablepush)
- [enablePushWhitelist](BranchProtection.md#enablepushwhitelist)
- [enableStatusCheck](BranchProtection.md#enablestatuscheck)
- [mergeWhitelistTeams](BranchProtection.md#mergewhitelistteams)
- [mergeWhitelistUsernames](BranchProtection.md#mergewhitelistusernames)
- [protectedFilePatterns](BranchProtection.md#protectedfilepatterns)
- [pushWhitelistDeployKeys](BranchProtection.md#pushwhitelistdeploykeys)
- [pushWhitelistTeams](BranchProtection.md#pushwhitelistteams)
- [pushWhitelistUsernames](BranchProtection.md#pushwhitelistusernames)
- [requireSignedCommits](BranchProtection.md#requiresignedcommits)
- [requiredApprovals](BranchProtection.md#requiredapprovals)
- [statusCheckContexts](BranchProtection.md#statuscheckcontexts)
- [unprotectedFilePatterns](BranchProtection.md#unprotectedfilepatterns)
- [updatedAt](BranchProtection.md#updatedat)

## Properties

### <a id="approvalswhitelistteams" name="approvalswhitelistteams"></a> approvalsWhitelistTeams

• `Optional` **approvalsWhitelistTeams**: `string`[]

**`memberof`** BranchProtection

#### Defined in

[models/branch-protection.ts:25](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/branch-protection.ts#L25)

___

### <a id="approvalswhitelistusername" name="approvalswhitelistusername"></a> approvalsWhitelistUsername

• `Optional` **approvalsWhitelistUsername**: `string`[]

**`memberof`** BranchProtection

#### Defined in

[models/branch-protection.ts:31](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/branch-protection.ts#L31)

___

### <a id="blockonofficialreviewrequests" name="blockonofficialreviewrequests"></a> blockOnOfficialReviewRequests

• `Optional` **blockOnOfficialReviewRequests**: `boolean`

**`memberof`** BranchProtection

#### Defined in

[models/branch-protection.ts:37](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/branch-protection.ts#L37)

___

### <a id="blockonoutdatedbranch" name="blockonoutdatedbranch"></a> blockOnOutdatedBranch

• `Optional` **blockOnOutdatedBranch**: `boolean`

**`memberof`** BranchProtection

#### Defined in

[models/branch-protection.ts:43](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/branch-protection.ts#L43)

___

### <a id="blockonrejectedreviews" name="blockonrejectedreviews"></a> blockOnRejectedReviews

• `Optional` **blockOnRejectedReviews**: `boolean`

**`memberof`** BranchProtection

#### Defined in

[models/branch-protection.ts:49](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/branch-protection.ts#L49)

___

### <a id="branchname" name="branchname"></a> branchName

• `Optional` **branchName**: `string`

**`memberof`** BranchProtection

#### Defined in

[models/branch-protection.ts:55](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/branch-protection.ts#L55)

___

### <a id="createdat" name="createdat"></a> createdAt

• `Optional` **createdAt**: `Date`

**`memberof`** BranchProtection

#### Defined in

[models/branch-protection.ts:61](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/branch-protection.ts#L61)

___

### <a id="dismissstaleapprovals" name="dismissstaleapprovals"></a> dismissStaleApprovals

• `Optional` **dismissStaleApprovals**: `boolean`

**`memberof`** BranchProtection

#### Defined in

[models/branch-protection.ts:67](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/branch-protection.ts#L67)

___

### <a id="enableapprovalswhitelist" name="enableapprovalswhitelist"></a> enableApprovalsWhitelist

• `Optional` **enableApprovalsWhitelist**: `boolean`

**`memberof`** BranchProtection

#### Defined in

[models/branch-protection.ts:73](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/branch-protection.ts#L73)

___

### <a id="enablemergewhitelist" name="enablemergewhitelist"></a> enableMergeWhitelist

• `Optional` **enableMergeWhitelist**: `boolean`

**`memberof`** BranchProtection

#### Defined in

[models/branch-protection.ts:79](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/branch-protection.ts#L79)

___

### <a id="enablepush" name="enablepush"></a> enablePush

• `Optional` **enablePush**: `boolean`

**`memberof`** BranchProtection

#### Defined in

[models/branch-protection.ts:85](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/branch-protection.ts#L85)

___

### <a id="enablepushwhitelist" name="enablepushwhitelist"></a> enablePushWhitelist

• `Optional` **enablePushWhitelist**: `boolean`

**`memberof`** BranchProtection

#### Defined in

[models/branch-protection.ts:91](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/branch-protection.ts#L91)

___

### <a id="enablestatuscheck" name="enablestatuscheck"></a> enableStatusCheck

• `Optional` **enableStatusCheck**: `boolean`

**`memberof`** BranchProtection

#### Defined in

[models/branch-protection.ts:97](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/branch-protection.ts#L97)

___

### <a id="mergewhitelistteams" name="mergewhitelistteams"></a> mergeWhitelistTeams

• `Optional` **mergeWhitelistTeams**: `string`[]

**`memberof`** BranchProtection

#### Defined in

[models/branch-protection.ts:103](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/branch-protection.ts#L103)

___

### <a id="mergewhitelistusernames" name="mergewhitelistusernames"></a> mergeWhitelistUsernames

• `Optional` **mergeWhitelistUsernames**: `string`[]

**`memberof`** BranchProtection

#### Defined in

[models/branch-protection.ts:109](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/branch-protection.ts#L109)

___

### <a id="protectedfilepatterns" name="protectedfilepatterns"></a> protectedFilePatterns

• `Optional` **protectedFilePatterns**: `string`

**`memberof`** BranchProtection

#### Defined in

[models/branch-protection.ts:115](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/branch-protection.ts#L115)

___

### <a id="pushwhitelistdeploykeys" name="pushwhitelistdeploykeys"></a> pushWhitelistDeployKeys

• `Optional` **pushWhitelistDeployKeys**: `boolean`

**`memberof`** BranchProtection

#### Defined in

[models/branch-protection.ts:121](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/branch-protection.ts#L121)

___

### <a id="pushwhitelistteams" name="pushwhitelistteams"></a> pushWhitelistTeams

• `Optional` **pushWhitelistTeams**: `string`[]

**`memberof`** BranchProtection

#### Defined in

[models/branch-protection.ts:127](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/branch-protection.ts#L127)

___

### <a id="pushwhitelistusernames" name="pushwhitelistusernames"></a> pushWhitelistUsernames

• `Optional` **pushWhitelistUsernames**: `string`[]

**`memberof`** BranchProtection

#### Defined in

[models/branch-protection.ts:133](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/branch-protection.ts#L133)

___

### <a id="requiresignedcommits" name="requiresignedcommits"></a> requireSignedCommits

• `Optional` **requireSignedCommits**: `boolean`

**`memberof`** BranchProtection

#### Defined in

[models/branch-protection.ts:139](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/branch-protection.ts#L139)

___

### <a id="requiredapprovals" name="requiredapprovals"></a> requiredApprovals

• `Optional` **requiredApprovals**: `number`

**`memberof`** BranchProtection

#### Defined in

[models/branch-protection.ts:145](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/branch-protection.ts#L145)

___

### <a id="statuscheckcontexts" name="statuscheckcontexts"></a> statusCheckContexts

• `Optional` **statusCheckContexts**: `string`[]

**`memberof`** BranchProtection

#### Defined in

[models/branch-protection.ts:151](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/branch-protection.ts#L151)

___

### <a id="unprotectedfilepatterns" name="unprotectedfilepatterns"></a> unprotectedFilePatterns

• `Optional` **unprotectedFilePatterns**: `string`

**`memberof`** BranchProtection

#### Defined in

[models/branch-protection.ts:157](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/branch-protection.ts#L157)

___

### <a id="updatedat" name="updatedat"></a> updatedAt

• `Optional` **updatedAt**: `Date`

**`memberof`** BranchProtection

#### Defined in

[models/branch-protection.ts:163](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/branch-protection.ts#L163)
