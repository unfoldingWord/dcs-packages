[dcs-js](../README.md) / [Exports](../modules.md) / TimelineComment

# Interface: TimelineComment

TimelineComment represents a timeline comment (comment of any type) on a commit or issue

**`export`**

**`interface`** TimelineComment

## Table of contents

### Properties

- [assignee](TimelineComment.md#assignee)
- [assigneeTeam](TimelineComment.md#assigneeteam)
- [body](TimelineComment.md#body)
- [createdAt](TimelineComment.md#createdat)
- [dependentIssue](TimelineComment.md#dependentissue)
- [htmlUrl](TimelineComment.md#htmlurl)
- [id](TimelineComment.md#id)
- [issueUrl](TimelineComment.md#issueurl)
- [label](TimelineComment.md#label)
- [milestone](TimelineComment.md#milestone)
- [newRef](TimelineComment.md#newref)
- [newTitle](TimelineComment.md#newtitle)
- [oldMilestone](TimelineComment.md#oldmilestone)
- [oldProjectId](TimelineComment.md#oldprojectid)
- [oldRef](TimelineComment.md#oldref)
- [oldTitle](TimelineComment.md#oldtitle)
- [projectId](TimelineComment.md#projectid)
- [pullRequestUrl](TimelineComment.md#pullrequesturl)
- [refAction](TimelineComment.md#refaction)
- [refComment](TimelineComment.md#refcomment)
- [refCommitSha](TimelineComment.md#refcommitsha)
- [refIssue](TimelineComment.md#refissue)
- [removedAssignee](TimelineComment.md#removedassignee)
- [resolveDoer](TimelineComment.md#resolvedoer)
- [reviewId](TimelineComment.md#reviewid)
- [trackedTime](TimelineComment.md#trackedtime)
- [type](TimelineComment.md#type)
- [updatedAt](TimelineComment.md#updatedat)
- [user](TimelineComment.md#user)

## Properties

### <a id="assignee" name="assignee"></a> assignee

• `Optional` **assignee**: [`User`](User.md)

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:32](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/timeline-comment.ts#L32)

___

### <a id="assigneeteam" name="assigneeteam"></a> assigneeTeam

• `Optional` **assigneeTeam**: [`Team`](Team.md)

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:38](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/timeline-comment.ts#L38)

___

### <a id="body" name="body"></a> body

• `Optional` **body**: `string`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:44](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/timeline-comment.ts#L44)

___

### <a id="createdat" name="createdat"></a> createdAt

• `Optional` **createdAt**: `Date`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:50](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/timeline-comment.ts#L50)

___

### <a id="dependentissue" name="dependentissue"></a> dependentIssue

• `Optional` **dependentIssue**: [`Issue`](Issue.md)

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:56](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/timeline-comment.ts#L56)

___

### <a id="htmlurl" name="htmlurl"></a> htmlUrl

• `Optional` **htmlUrl**: `string`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:62](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/timeline-comment.ts#L62)

___

### <a id="id" name="id"></a> id

• `Optional` **id**: `number`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:68](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/timeline-comment.ts#L68)

___

### <a id="issueurl" name="issueurl"></a> issueUrl

• `Optional` **issueUrl**: `string`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:74](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/timeline-comment.ts#L74)

___

### <a id="label" name="label"></a> label

• `Optional` **label**: [`Label`](Label.md)

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:80](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/timeline-comment.ts#L80)

___

### <a id="milestone" name="milestone"></a> milestone

• `Optional` **milestone**: [`Milestone`](Milestone.md)

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:86](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/timeline-comment.ts#L86)

___

### <a id="newref" name="newref"></a> newRef

• `Optional` **newRef**: `string`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:92](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/timeline-comment.ts#L92)

___

### <a id="newtitle" name="newtitle"></a> newTitle

• `Optional` **newTitle**: `string`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:98](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/timeline-comment.ts#L98)

___

### <a id="oldmilestone" name="oldmilestone"></a> oldMilestone

• `Optional` **oldMilestone**: [`Milestone`](Milestone.md)

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:104](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/timeline-comment.ts#L104)

___

### <a id="oldprojectid" name="oldprojectid"></a> oldProjectId

• `Optional` **oldProjectId**: `number`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:110](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/timeline-comment.ts#L110)

___

### <a id="oldref" name="oldref"></a> oldRef

• `Optional` **oldRef**: `string`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:116](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/timeline-comment.ts#L116)

___

### <a id="oldtitle" name="oldtitle"></a> oldTitle

• `Optional` **oldTitle**: `string`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:122](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/timeline-comment.ts#L122)

___

### <a id="projectid" name="projectid"></a> projectId

• `Optional` **projectId**: `number`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:128](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/timeline-comment.ts#L128)

___

### <a id="pullrequesturl" name="pullrequesturl"></a> pullRequestUrl

• `Optional` **pullRequestUrl**: `string`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:134](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/timeline-comment.ts#L134)

___

### <a id="refaction" name="refaction"></a> refAction

• `Optional` **refAction**: `string`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:140](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/timeline-comment.ts#L140)

___

### <a id="refcomment" name="refcomment"></a> refComment

• `Optional` **refComment**: [`Comment`](Comment.md)

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:146](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/timeline-comment.ts#L146)

___

### <a id="refcommitsha" name="refcommitsha"></a> refCommitSha

• `Optional` **refCommitSha**: `string`

commit SHA where issue/PR was referenced

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:152](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/timeline-comment.ts#L152)

___

### <a id="refissue" name="refissue"></a> refIssue

• `Optional` **refIssue**: [`Issue`](Issue.md)

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:158](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/timeline-comment.ts#L158)

___

### <a id="removedassignee" name="removedassignee"></a> removedAssignee

• `Optional` **removedAssignee**: `boolean`

whether the assignees were removed or added

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:164](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/timeline-comment.ts#L164)

___

### <a id="resolvedoer" name="resolvedoer"></a> resolveDoer

• `Optional` **resolveDoer**: [`User`](User.md)

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:170](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/timeline-comment.ts#L170)

___

### <a id="reviewid" name="reviewid"></a> reviewId

• `Optional` **reviewId**: `number`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:176](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/timeline-comment.ts#L176)

___

### <a id="trackedtime" name="trackedtime"></a> trackedTime

• `Optional` **trackedTime**: [`TrackedTime`](TrackedTime.md)

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:182](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/timeline-comment.ts#L182)

___

### <a id="type" name="type"></a> type

• `Optional` **type**: `string`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:188](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/timeline-comment.ts#L188)

___

### <a id="updatedat" name="updatedat"></a> updatedAt

• `Optional` **updatedAt**: `Date`

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:194](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/timeline-comment.ts#L194)

___

### <a id="user" name="user"></a> user

• `Optional` **user**: [`User`](User.md)

**`memberof`** TimelineComment

#### Defined in

[models/timeline-comment.ts:200](https://github.com/unfoldingWord/dcs-js/blob/c677a54/models/timeline-comment.ts#L200)
