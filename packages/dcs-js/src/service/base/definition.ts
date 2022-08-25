/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
export type GetNotificationsItems = "issue" | "pull" | "commit" | "repository";
export type GetReposOwnerRepoCommitsRefStatusesSort =
  | "oldest"
  | "recentupdate"
  | "leastupdate"
  | "leastindex"
  | "highestindex";
export type GetReposOwnerRepoCommitsRefStatusesState =
  | "pending"
  | "success"
  | "error"
  | "failure"
  | "warning";
export type GetReposOwnerRepoGitCommitsShaDiffTypeDiffType = "diff" | "patch";
export type GetReposOwnerRepoIssuesState = "closed" | "open" | "all";
export type GetReposOwnerRepoIssuesType = "issues" | "pulls";
export type GetReposOwnerRepoNotificationsItems = GetNotificationsItems;
export type GetReposOwnerRepoPullsState = GetReposOwnerRepoIssuesState;
export type GetReposOwnerRepoPullsSort =
  | "oldest"
  | "recentupdate"
  | "leastupdate"
  | "mostcomment"
  | "leastcomment"
  | "priority";
export type GetReposOwnerRepoPullsIndexDiffTypeDiffType =
  GetReposOwnerRepoGitCommitsShaDiffTypeDiffType;
export type PostReposOwnerRepoPullsIndexUpdateStyle = "merge" | "rebase";
export type GetReposOwnerRepoStatusesShaSort =
  GetReposOwnerRepoCommitsRefStatusesSort;
export type GetReposOwnerRepoStatusesShaState =
  GetReposOwnerRepoCommitsRefStatusesState;
export type CreateHookOptionType =
  | "dingtalk"
  | "discord"
  | "gitea"
  | "gogs"
  | "msteams"
  | "slack"
  | "telegram"
  | "feishu"
  | "wechatwork";
export type CreateMilestoneOptionState = "open" | "closed";
export type CreateOrgOptionVisibility = "public" | "limited" | "private";
export type CreateRepoOptionTrustModel =
  | "default"
  | "collaborator"
  | "committer"
  | "collaboratorcommitter";
export type CreateTeamOptionPermission = "read" | "write" | "admin";
export type EditOrgOptionVisibility = CreateOrgOptionVisibility;
export type EditTeamOptionPermission = CreateTeamOptionPermission;
export type MergePullRequestOptionDo =
  | "merge"
  | "rebase"
  | "rebase-merge"
  | "squash"
  | "manually-merged";
export type MigrateRepoOptionsService = "git" | "github" | "gitea" | "gitlab";
export type TeamPermission = "none" | "read" | "write" | "admin" | "owner";
/**
 * @description
 *   APIError is an api error with a message
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface APIError {
  message?: string;
  url?: string;
}

export interface AccessToken {
  /**
   * @format int64
   * @x-go-name "ID"
   */
  id?: number;
  name?: string;
  sha1?: string;
  token_last_eight?: string;
}

/**
 * @description
 *   AddCollaboratorOption options when adding a user as a collaborator of a repository
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface AddCollaboratorOption {
  permission?: string;
}

/**
 * @description
 *   AddTimeOption options for adding time to an issue
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface AddTimeOption {
  /**
   * @format date-time
   * @x-go-name "Created"
   */
  created?: string;
  /**
   * @description
   *   time in seconds
   * @format int64
   * @x-go-name "Time"
   */
  time: number;
  /**
   * @description
   *   User who spent the time (optional)
   * @x-go-name "User"
   */
  user_name?: string;
}

/**
 * @description
 *   AnnotatedTag represents an annotated tag
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface AnnotatedTag {
  message?: string;
  object?: AnnotatedTagObject;
  sha?: string;
  tag?: string;
  tagger?: CommitUser;
  url?: string;
  verification?: PayloadCommitVerification;
}

/**
 * @description
 *   AnnotatedTagObject contains meta information of the tag object
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface AnnotatedTagObject {
  sha?: string;
  type?: string;
  url?: string;
}

/**
 * @description
 *   Attachment a generic attachment
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface Attachment {
  browser_download_url?: string;
  /**
   * @format date-time
   * @x-go-name "Created"
   */
  created_at?: string;
  /**
   * @format int64
   * @x-go-name "DownloadCount"
   */
  download_count?: number;
  /**
   * @format int64
   * @x-go-name "ID"
   */
  id?: number;
  name?: string;
  /**
   * @format int64
   * @x-go-name "Size"
   */
  size?: number;
  uuid?: string;
}

/**
 * @description
 *   Branch represents a repository branch
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface Branch {
  commit?: PayloadCommit;
  effective_branch_protection_name?: string;
  enable_status_check?: boolean;
  name?: string;
  protected?: boolean;
  /**
   * @format int64
   * @x-go-name "RequiredApprovals"
   */
  required_approvals?: number;
  status_check_contexts?: Array<string>;
  user_can_merge?: boolean;
  user_can_push?: boolean;
}

/**
 * @description
 *   BranchProtection represents a branch protection for a repository
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface BranchProtection {
  approvals_whitelist_teams?: Array<string>;
  approvals_whitelist_username?: Array<string>;
  block_on_official_review_requests?: boolean;
  block_on_outdated_branch?: boolean;
  block_on_rejected_reviews?: boolean;
  branch_name?: string;
  /**
   * @format date-time
   * @x-go-name "Created"
   */
  created_at?: string;
  dismiss_stale_approvals?: boolean;
  enable_approvals_whitelist?: boolean;
  enable_merge_whitelist?: boolean;
  enable_push?: boolean;
  enable_push_whitelist?: boolean;
  enable_status_check?: boolean;
  merge_whitelist_teams?: Array<string>;
  merge_whitelist_usernames?: Array<string>;
  protected_file_patterns?: string;
  push_whitelist_deploy_keys?: boolean;
  push_whitelist_teams?: Array<string>;
  push_whitelist_usernames?: Array<string>;
  require_signed_commits?: boolean;
  /**
   * @format int64
   * @x-go-name "RequiredApprovals"
   */
  required_approvals?: number;
  status_check_contexts?: Array<string>;
  unprotected_file_patterns?: string;
  /**
   * @format date-time
   * @x-go-name "Updated"
   */
  updated_at?: string;
}

/**
 * @description
 *   CatalogStage a repo's catalog stage metadata
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CatalogStage {
  branch_or_tag_name?: string;
  contents_url?: string;
  git_trees_url?: string;
  release_url?: string;
  /**
   * @format date-time
   * @x-go-name "Released"
   */
  released?: string;
  tarball_url?: string;
  zipball_url?: string;
}

/**
 * @description
 *   CatalogStages a repo's catalog stages
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CatalogStages {
  draft?: CatalogStage;
  latest?: CatalogStage;
  preprod?: CatalogStage;
  prod?: CatalogStage;
}

/**
 * @description
 *   CombinedStatus holds the combined state of several statuses for a single commit
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CombinedStatus {
  commit_url?: string;
  repository?: Repository;
  sha?: string;
  state?: CommitStatusState;
  statuses?: Array<CommitStatus>;
  /**
   * @format int64
   * @x-go-name "TotalCount"
   */
  total_count?: number;
  url?: string;
}

/**
 * @description
 *   Comment represents a comment on a commit or issue
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface Comment {
  body?: string;
  /**
   * @format date-time
   * @x-go-name "Created"
   */
  created_at?: string;
  html_url?: string;
  /**
   * @format int64
   * @x-go-name "ID"
   */
  id?: number;
  issue_url?: string;
  original_author?: string;
  /**
   * @format int64
   * @x-go-name "OriginalAuthorID"
   */
  original_author_id?: number;
  pull_request_url?: string;
  /**
   * @format date-time
   * @x-go-name "Updated"
   */
  updated_at?: string;
  user?: User;
}

export interface Commit {
  author?: User;
  commit?: RepoCommit;
  committer?: User;
  /**
   * @format date-time
   * @x-go-name "Created"
   */
  created?: string;
  files?: Array<CommitAffectedFiles>;
  html_url?: string;
  parents?: Array<CommitMeta>;
  sha?: string;
  url?: string;
}

/**
 * @description
 *   CommitAffectedFiles store information about files affected by the commit
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CommitAffectedFiles {
  filename?: string;
}

/**
 * @description
 *   CommitDateOptions store dates for GIT_AUTHOR_DATE and GIT_COMMITTER_DATE
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CommitDateOptions {
  /**
   * @format date-time
   * @x-go-name "Author"
   */
  author?: string;
  /**
   * @format date-time
   * @x-go-name "Committer"
   */
  committer?: string;
}

export interface CommitMeta {
  /**
   * @format date-time
   * @x-go-name "Created"
   */
  created?: string;
  sha?: string;
  url?: string;
}

/**
 * @description
 *   CommitStatus holds a single status of a single Commit
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CommitStatus {
  context?: string;
  /**
   * @format date-time
   * @x-go-name "Created"
   */
  created_at?: string;
  creator?: User;
  description?: string;
  /**
   * @format int64
   * @x-go-name "ID"
   */
  id?: number;
  status?: CommitStatusState;
  target_url?: string;
  /**
   * @format date-time
   * @x-go-name "Updated"
   */
  updated_at?: string;
  url?: string;
}

/**
 * @description
 *   CommitStatusState holds the state of a CommitStatus
 * It can be "pending", "success", "error", "failure", and "warning"
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export type CommitStatusState = string;

export interface CommitUser {
  date?: string;
  /**
   * @format email
   * @x-go-name "Email"
   */
  email?: string;
  name?: string;
}

/**
 * @description
 *   ContentsResponse contains information about a repo's entry's (dir, file, symlink, submodule) metadata and content
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface ContentsResponse {
  _links?: FileLinksResponse;
  /**
   * @description
   *   `content` is populated when `type` is `file`, otherwise null
   * @x-go-name "Content"
   */
  content?: string;
  download_url?: string;
  /**
   * @description
   *   `encoding` is populated when `type` is `file`, otherwise null
   * @x-go-name "Encoding"
   */
  encoding?: string;
  git_url?: string;
  html_url?: string;
  name?: string;
  path?: string;
  sha?: string;
  /**
   * @format int64
   * @x-go-name "Size"
   */
  size?: number;
  /**
   * @description
   *   `submodule_git_url` is populated when `type` is `submodule`, otherwise null
   * @x-go-name "SubmoduleGitURL"
   */
  submodule_git_url?: string;
  /**
   * @description
   *   `target` is populated when `type` is `symlink`, otherwise null
   * @x-go-name "Target"
   */
  target?: string;
  /**
   * @description
   *   `type` will be `file`, `dir`, `symlink`, or `submodule`
   * @x-go-name "Type"
   */
  type?: string;
  url?: string;
}

/**
 * @description
 *   CreateAccessTokenOption options when create access token
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CreateAccessTokenOption {
  name?: string;
}

/**
 * @description
 *   CreateBranchProtectionOption options for creating a branch protection
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CreateBranchProtectionOption {
  approvals_whitelist_teams?: Array<string>;
  approvals_whitelist_username?: Array<string>;
  block_on_official_review_requests?: boolean;
  block_on_outdated_branch?: boolean;
  block_on_rejected_reviews?: boolean;
  branch_name?: string;
  dismiss_stale_approvals?: boolean;
  enable_approvals_whitelist?: boolean;
  enable_merge_whitelist?: boolean;
  enable_push?: boolean;
  enable_push_whitelist?: boolean;
  enable_status_check?: boolean;
  merge_whitelist_teams?: Array<string>;
  merge_whitelist_usernames?: Array<string>;
  protected_file_patterns?: string;
  push_whitelist_deploy_keys?: boolean;
  push_whitelist_teams?: Array<string>;
  push_whitelist_usernames?: Array<string>;
  require_signed_commits?: boolean;
  /**
   * @format int64
   * @x-go-name "RequiredApprovals"
   */
  required_approvals?: number;
  status_check_contexts?: Array<string>;
  unprotected_file_patterns?: string;
}

/**
 * @description
 *   CreateBranchRepoOption options when creating a branch in a repository
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CreateBranchRepoOption {
  /**
   * @description
   *   Name of the branch to create
   * @x-go-name "BranchName"
   */
  new_branch_name: string;
  /**
   * @description
   *   Name of the old branch to create from
   * @x-go-name "OldBranchName"
   */
  old_branch_name?: string;
}

/**
 * @description
 *   CreateEmailOption options when creating email addresses
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CreateEmailOption {
  /**
   * @description
   *   email addresses to add
   * @x-go-name "Emails"
   */
  emails?: Array<string>;
}

/**
 * @description
 *   CreateFileOptions options for creating files
 * Note: `author` and `committer` are optional (if only one is given, it will be used for the other, otherwise the authenticated user will be used)
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CreateFileOptions {
  author?: Identity;
  /**
   * @description
   *   branch (optional) to base this file from. if not given, the default branch is used
   * @x-go-name "BranchName"
   */
  branch?: string;
  committer?: Identity;
  /**
   * @description
   *   content must be base64 encoded
   * @x-go-name "Content"
   */
  content: string;
  dates?: CommitDateOptions;
  /**
   * @description
   *   message (optional) for the commit of this file. if not supplied, a default message will be used
   * @x-go-name "Message"
   */
  message?: string;
  /**
   * @description
   *   new_branch (optional) will make a new branch from `branch` before creating the file
   * @x-go-name "NewBranchName"
   */
  new_branch?: string;
  /**
   * @description
   *   Add a Signed-off-by trailer by the committer at the end of the commit log message.
   * @x-go-name "Signoff"
   */
  signoff?: boolean;
}

/**
 * @description
 *   CreateForkOption options for creating a fork
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CreateForkOption {
  /**
   * @description
   *   name of the forked repository
   * @x-go-name "Name"
   */
  name?: string;
  /**
   * @description
   *   organization name, if forking into an organization
   * @x-go-name "Organization"
   */
  organization?: string;
}

/**
 * @description
 *   CreateGPGKeyOption options create user GPG key
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CreateGPGKeyOption {
  /**
   * @description
   *   An armored GPG key to add
   * @x-go-name "ArmoredKey"
   */
  armored_public_key: string;
  armored_signature?: string;
}

/**
 * @description
 *   CreateHookOption options when create a hook
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CreateHookOption {
  /**
   * @default false
   * @x-go-name "Active"
   */
  active?: boolean;
  branch_filter?: string;
  config: CreateHookOptionConfig;
  events?: Array<string>;
  type: CreateHookOptionType;
}

export interface CreateHookOptionConfig {
  [key: string]: string;
}

/**
 * @description
 *   CreateIssueCommentOption options for creating a comment on an issue
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CreateIssueCommentOption {
  body: string;
}

/**
 * @description
 *   CreateIssueOption options to create one issue
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CreateIssueOption {
  /**
   * @description
   *   deprecated
   * @x-go-name "Assignee"
   */
  assignee?: string;
  assignees?: Array<string>;
  body?: string;
  closed?: boolean;
  /**
   * @format date-time
   * @x-go-name "Deadline"
   */
  due_date?: string;
  /**
   * @description
   *   list of label ids
   * @x-go-name "Labels"
   */
  labels?: Array<number>;
  /**
   * @description
   *   milestone id
   * @format int64
   * @x-go-name "Milestone"
   */
  milestone?: number;
  ref?: string;
  title: string;
}

/**
 * @description
 *   CreateKeyOption options when creating a key
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CreateKeyOption {
  /**
   * @description
   *   An armored SSH key to add
   * @x-go-name "Key"
   */
  key: string;
  /**
   * @description
   *   Describe if the key has only read access or read/write
   * @x-go-name "ReadOnly"
   */
  read_only?: boolean;
  /**
   * @description
   *   Title of the key to add
   * @x-go-name "Title"
   */
  title: string;
}

/**
 * @description
 *   CreateLabelOption options for creating a label
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CreateLabelOption {
  /**
   * @example
   *   #00aabb
   * @x-go-name "Color"
   */
  color: string;
  description?: string;
  name: string;
}

/**
 * @description
 *   CreateMilestoneOption options for creating a milestone
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CreateMilestoneOption {
  description?: string;
  /**
   * @format date-time
   * @x-go-name "Deadline"
   */
  due_on?: string;
  state?: CreateMilestoneOptionState;
  title?: string;
}

/**
 * @description
 *   CreateOrgOption options for creating an organization
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CreateOrgOption {
  description?: string;
  full_name?: string;
  location?: string;
  repo_admin_change_team_access?: boolean;
  username: string;
  /**
   * @description
   *   possible values are `public` (default), `limited` or `private`
   * @x-go-name "Visibility"
   */
  visibility?: CreateOrgOptionVisibility;
  website?: string;
}

/**
 * @description
 *   CreatePullRequestOption options when creating a pull request
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CreatePullRequestOption {
  assignee?: string;
  assignees?: Array<string>;
  base?: string;
  body?: string;
  /**
   * @format date-time
   * @x-go-name "Deadline"
   */
  due_date?: string;
  head?: string;
  labels?: Array<number>;
  /**
   * @format int64
   * @x-go-name "Milestone"
   */
  milestone?: number;
  title?: string;
}

/**
 * @description
 *   CreatePullReviewComment represent a review comment for creation api
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CreatePullReviewComment {
  body?: string;
  /**
   * @description
   *   if comment to new file line or 0
   * @format int64
   * @x-go-name "NewLineNum"
   */
  new_position?: number;
  /**
   * @description
   *   if comment to old file line or 0
   * @format int64
   * @x-go-name "OldLineNum"
   */
  old_position?: number;
  /**
   * @description
   *   the tree path
   * @x-go-name "Path"
   */
  path?: string;
}

/**
 * @description
 *   CreatePullReviewOptions are options to create a pull review
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CreatePullReviewOptions {
  body?: string;
  comments?: Array<CreatePullReviewComment>;
  commit_id?: string;
  event?: ReviewStateType;
}

/**
 * @description
 *   CreateReleaseOption options when creating a release
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CreateReleaseOption {
  body?: string;
  draft?: boolean;
  name?: string;
  prerelease?: boolean;
  tag_name: string;
  target_commitish?: string;
}

/**
 * @description
 *   CreateRepoOption options when creating repository
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CreateRepoOption {
  /**
   * @description
   *   Whether the repository should be auto-initialized?
   * @x-go-name "AutoInit"
   */
  auto_init?: boolean;
  /**
   * @description
   *   DefaultBranch of the repository (used when initializes and in template)
   * @x-go-name "DefaultBranch"
   */
  default_branch?: string;
  /**
   * @description
   *   Description of the repository to create
   * @x-go-name "Description"
   */
  description?: string;
  /**
   * @description
   *   Gitignores to use
   * @x-go-name "Gitignores"
   */
  gitignores?: string;
  /**
   * @description
   *   Label-Set to use
   * @x-go-name "IssueLabels"
   */
  issue_labels?: string;
  /**
   * @description
   *   License to use
   * @x-go-name "License"
   */
  license?: string;
  /**
   * @description
   *   Name of the repository to create
   * @x-go-name "Name"
   */
  name: string;
  /**
   * @description
   *   Whether the repository is private
   * @x-go-name "Private"
   */
  private?: boolean;
  /**
   * @description
   *   Readme of the repository to create
   * @x-go-name "Readme"
   */
  readme?: string;
  /**
   * @description
   *   Whether the repository is template
   * @x-go-name "Template"
   */
  template?: boolean;
  /**
   * @description
   *   TrustModel of the repository
   * @x-go-name "TrustModel"
   */
  trust_model?: CreateRepoOptionTrustModel;
}

/**
 * @description
 *   CreateStatusOption holds the information needed to create a new CommitStatus for a Commit
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CreateStatusOption {
  context?: string;
  description?: string;
  state?: CommitStatusState;
  target_url?: string;
}

/**
 * @description
 *   CreateTagOption options when creating a tag
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CreateTagOption {
  message?: string;
  tag_name: string;
  target?: string;
}

/**
 * @description
 *   CreateTeamOption options for creating a team
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CreateTeamOption {
  can_create_org_repo?: boolean;
  description?: string;
  includes_all_repositories?: boolean;
  name: string;
  permission?: CreateTeamOptionPermission;
  /**
   * @example
   *   repo.code,repo.issues,repo.ext_issues,repo.wiki,repo.pulls,repo.releases,repo.projects,repo.ext_wiki
   * @x-go-name "Units"
   */
  units?: Array<string>;
  /**
   * @example
   *   {"repo.code":"read","repo.issues":"write","repo.ext_issues":"none","repo.wiki":"admin","repo.pulls":"owner","repo.releases":"none","repo.projects":"none","repo.ext_wiki":"none"]
   * @x-go-name "UnitsMap"
   */
  units_map?: {
    /**
        @example
          {"repo.code":"read","repo.issues":"write","repo.ext_issues":"none","repo.wiki":"admin","repo.pulls":"owner","repo.releases":"none","repo.projects":"none","repo.ext_wiki":"none"]
        @x-go-name "UnitsMap" */
    [propertyName: string]: string;
  };
}

/**
 * @description
 *   CreateUserOption create user options
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CreateUserOption {
  /**
   * @format email
   * @x-go-name "Email"
   */
  email: string;
  full_name?: string;
  login_name?: string;
  must_change_password?: boolean;
  password: string;
  restricted?: boolean;
  send_notify?: boolean;
  /**
   * @format int64
   * @x-go-name "SourceID"
   */
  source_id?: number;
  username: string;
  visibility?: string;
}

/**
 * @description
 *   CreateWikiPageOptions form for creating wiki
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CreateWikiPageOptions {
  /**
   * @description
   *   content must be base64 encoded
   * @x-go-name "ContentBase64"
   */
  content_base64?: string;
  /**
   * @description
   *   optional commit message summarizing the change
   * @x-go-name "Message"
   */
  message?: string;
  /**
   * @description
   *   page title. leave empty to keep unchanged
   * @x-go-name "Title"
   */
  title?: string;
}

/**
 * @description
 *   Cron represents a Cron task
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface Cron {
  /**
   * @format int64
   * @x-go-name "ExecTimes"
   */
  exec_times?: number;
  name?: string;
  /**
   * @format date-time
   * @x-go-name "Next"
   */
  next?: string;
  /**
   * @format date-time
   * @x-go-name "Prev"
   */
  prev?: string;
  schedule?: string;
}

/**
 * @description
 *   DeleteEmailOption options when deleting email addresses
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface DeleteEmailOption {
  /**
   * @description
   *   email addresses to delete
   * @x-go-name "Emails"
   */
  emails?: Array<string>;
}

/**
 * @description
 *   DeleteFileOptions options for deleting files (used for other File structs below)
 * Note: `author` and `committer` are optional (if only one is given, it will be used for the other, otherwise the authenticated user will be used)
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface DeleteFileOptions {
  author?: Identity;
  /**
   * @description
   *   branch (optional) to base this file from. if not given, the default branch is used
   * @x-go-name "BranchName"
   */
  branch?: string;
  committer?: Identity;
  dates?: CommitDateOptions;
  /**
   * @description
   *   message (optional) for the commit of this file. if not supplied, a default message will be used
   * @x-go-name "Message"
   */
  message?: string;
  /**
   * @description
   *   new_branch (optional) will make a new branch from `branch` before creating the file
   * @x-go-name "NewBranchName"
   */
  new_branch?: string;
  /**
   * @description
   *   sha is the SHA for the file that already exists
   * @x-go-name "SHA"
   */
  sha: string;
  /**
   * @description
   *   Add a Signed-off-by trailer by the committer at the end of the commit log message.
   * @x-go-name "Signoff"
   */
  signoff?: boolean;
}

/**
 * @description
 *   DeployKey a deploy key
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface DeployKey {
  /**
   * @format date-time
   * @x-go-name "Created"
   */
  created_at?: string;
  fingerprint?: string;
  /**
   * @format int64
   * @x-go-name "ID"
   */
  id?: number;
  key?: string;
  /**
   * @format int64
   * @x-go-name "KeyID"
   */
  key_id?: number;
  read_only?: boolean;
  repository?: Repository;
  title?: string;
  url?: string;
}

/**
 * @description
 *   DismissPullReviewOptions are options to dismiss a pull review
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface DismissPullReviewOptions {
  message?: string;
}

/**
 * @description
 *   EditAttachmentOptions options for editing attachments
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface EditAttachmentOptions {
  name?: string;
}

/**
 * @description
 *   EditBranchProtectionOption options for editing a branch protection
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface EditBranchProtectionOption {
  approvals_whitelist_teams?: Array<string>;
  approvals_whitelist_username?: Array<string>;
  block_on_official_review_requests?: boolean;
  block_on_outdated_branch?: boolean;
  block_on_rejected_reviews?: boolean;
  dismiss_stale_approvals?: boolean;
  enable_approvals_whitelist?: boolean;
  enable_merge_whitelist?: boolean;
  enable_push?: boolean;
  enable_push_whitelist?: boolean;
  enable_status_check?: boolean;
  merge_whitelist_teams?: Array<string>;
  merge_whitelist_usernames?: Array<string>;
  protected_file_patterns?: string;
  push_whitelist_deploy_keys?: boolean;
  push_whitelist_teams?: Array<string>;
  push_whitelist_usernames?: Array<string>;
  require_signed_commits?: boolean;
  /**
   * @format int64
   * @x-go-name "RequiredApprovals"
   */
  required_approvals?: number;
  status_check_contexts?: Array<string>;
  unprotected_file_patterns?: string;
}

/**
 * @description
 *   EditDeadlineOption options for creating a deadline
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface EditDeadlineOption {
  /**
   * @format date-time
   * @x-go-name "Deadline"
   */
  due_date: string;
}

/**
 * @description
 *   EditGitHookOption options when modifying one Git hook
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface EditGitHookOption {
  content?: string;
}

/**
 * @description
 *   EditHookOption options when modify one hook
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface EditHookOption {
  active?: boolean;
  branch_filter?: string;
  config?: {
    [propertyName: string]: string;
  };
  events?: Array<string>;
}

/**
 * @description
 *   EditIssueCommentOption options for editing a comment
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface EditIssueCommentOption {
  body: string;
}

/**
 * @description
 *   EditIssueOption options for editing an issue
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface EditIssueOption {
  /**
   * @description
   *   deprecated
   * @x-go-name "Assignee"
   */
  assignee?: string;
  assignees?: Array<string>;
  body?: string;
  /**
   * @format date-time
   * @x-go-name "Deadline"
   */
  due_date?: string;
  /**
   * @format int64
   * @x-go-name "Milestone"
   */
  milestone?: number;
  ref?: string;
  state?: string;
  title?: string;
  unset_due_date?: boolean;
}

/**
 * @description
 *   EditLabelOption options for editing a label
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface EditLabelOption {
  color?: string;
  description?: string;
  name?: string;
}

/**
 * @description
 *   EditMilestoneOption options for editing a milestone
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface EditMilestoneOption {
  description?: string;
  /**
   * @format date-time
   * @x-go-name "Deadline"
   */
  due_on?: string;
  state?: string;
  title?: string;
}

/**
 * @description
 *   EditOrgOption options for editing an organization
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface EditOrgOption {
  description?: string;
  full_name?: string;
  location?: string;
  repo_admin_change_team_access?: boolean;
  /**
   * @description
   *   possible values are `public`, `limited` or `private`
   * @x-go-name "Visibility"
   */
  visibility?: EditOrgOptionVisibility;
  website?: string;
}

/**
 * @description
 *   EditPullRequestOption options when modify pull request
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface EditPullRequestOption {
  assignee?: string;
  assignees?: Array<string>;
  base?: string;
  body?: string;
  /**
   * @format date-time
   * @x-go-name "Deadline"
   */
  due_date?: string;
  labels?: Array<number>;
  /**
   * @format int64
   * @x-go-name "Milestone"
   */
  milestone?: number;
  state?: string;
  title?: string;
  unset_due_date?: boolean;
}

/**
 * @description
 *   EditReactionOption contain the reaction type
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface EditReactionOption {
  content?: string;
}

/**
 * @description
 *   EditReleaseOption options when editing a release
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface EditReleaseOption {
  body?: string;
  draft?: boolean;
  name?: string;
  prerelease?: boolean;
  tag_name?: string;
  target_commitish?: string;
}

/**
 * @description
 *   EditRepoOption options when editing a repository's properties
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface EditRepoOption {
  /**
   * @description
   *   either `true` to allow mark pr as merged manually, or `false` to prevent it. `has_pull_requests` must be `true`.
   * @x-go-name "AllowManualMerge"
   */
  allow_manual_merge?: boolean;
  /**
   * @description
   *   either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits. `has_pull_requests` must be `true`.
   * @x-go-name "AllowMerge"
   */
  allow_merge_commits?: boolean;
  /**
   * @description
   *   either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging. `has_pull_requests` must be `true`.
   * @x-go-name "AllowRebase"
   */
  allow_rebase?: boolean;
  /**
   * @description
   *   either `true` to allow rebase with explicit merge commits (--no-ff), or `false` to prevent rebase with explicit merge commits. `has_pull_requests` must be `true`.
   * @x-go-name "AllowRebaseMerge"
   */
  allow_rebase_explicit?: boolean;
  /**
   * @description
   *   either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging. `has_pull_requests` must be `true`.
   * @x-go-name "AllowSquash"
   */
  allow_squash_merge?: boolean;
  /**
   * @description
   *   set to `true` to archive this repository.
   * @x-go-name "Archived"
   */
  archived?: boolean;
  /**
   * @description
   *   either `true` to enable AutodetectManualMerge, or `false` to prevent it. `has_pull_requests` must be `true`, Note: In some special cases, misjudgments can occur.
   * @x-go-name "AutodetectManualMerge"
   */
  autodetect_manual_merge?: boolean;
  /**
   * @description
   *   sets the default branch for this repository.
   * @x-go-name "DefaultBranch"
   */
  default_branch?: string;
  /**
   * @description
   *   set to `true` to delete pr branch after merge by default
   * @x-go-name "DefaultDeleteBranchAfterMerge"
   */
  default_delete_branch_after_merge?: boolean;
  /**
   * @description
   *   set to a merge style to be used by this repository: "merge", "rebase", "rebase-merge", or "squash". `has_pull_requests` must be `true`.
   * @x-go-name "DefaultMergeStyle"
   */
  default_merge_style?: string;
  /**
   * @description
   *   a short description of the repository.
   * @x-go-name "Description"
   */
  description?: string;
  /**
   * @description
   *   enable prune - remove obsolete remote-tracking references
   * @x-go-name "EnablePrune"
   */
  enable_prune?: boolean;
  external_tracker?: ExternalTracker;
  external_wiki?: ExternalWiki;
  /**
   * @description
   *   either `true` to enable issues for this repository or `false` to disable them.
   * @x-go-name "HasIssues"
   */
  has_issues?: boolean;
  /**
   * @description
   *   either `true` to enable project unit, or `false` to disable them.
   * @x-go-name "HasProjects"
   */
  has_projects?: boolean;
  /**
   * @description
   *   either `true` to allow pull requests, or `false` to prevent pull request.
   * @x-go-name "HasPullRequests"
   */
  has_pull_requests?: boolean;
  /**
   * @description
   *   either `true` to enable the wiki for this repository or `false` to disable it.
   * @x-go-name "HasWiki"
   */
  has_wiki?: boolean;
  /**
   * @description
   *   either `true` to ignore whitespace for conflicts, or `false` to not ignore whitespace. `has_pull_requests` must be `true`.
   * @x-go-name "IgnoreWhitespaceConflicts"
   */
  ignore_whitespace_conflicts?: boolean;
  internal_tracker?: InternalTracker;
  /**
   * @description
   *   set to a string like `8h30m0s` to set the mirror interval time
   * @x-go-name "MirrorInterval"
   */
  mirror_interval?: string;
  /**
   * @description
   *   name of the repository
   * @x-go-name "Name"
   */
  name?: string;
  /**
   * @description
   *   either `true` to make the repository private or `false` to make it public.
   * Note: you will get a 422 error if the organization restricts changing repository visibility to organization
   * owners and a non-owner tries to change the value of private.
   * @x-go-name "Private"
   */
  private?: boolean;
  /**
   * @description
   *   either `true` to make this repository a template or `false` to make it a normal repository
   * @x-go-name "Template"
   */
  template?: boolean;
  /**
   * @description
   *   a URL with more information about the repository.
   * @x-go-name "Website"
   */
  website?: string;
}

/**
 * @description
 *   EditTeamOption options for editing a team
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface EditTeamOption {
  can_create_org_repo?: boolean;
  description?: string;
  includes_all_repositories?: boolean;
  name: string;
  permission?: EditTeamOptionPermission;
  /**
   * @example
   *   repo.code,repo.issues,repo.ext_issues,repo.wiki,repo.pulls,repo.releases,repo.projects,repo.ext_wiki
   * @x-go-name "Units"
   */
  units?: Array<string>;
  /**
   * @example
   *   {"repo.code":"read","repo.issues":"write","repo.ext_issues":"none","repo.wiki":"admin","repo.pulls":"owner","repo.releases":"none","repo.projects":"none","repo.ext_wiki":"none"]
   * @x-go-name "UnitsMap"
   */
  units_map?: {
    /**
        @example
          {"repo.code":"read","repo.issues":"write","repo.ext_issues":"none","repo.wiki":"admin","repo.pulls":"owner","repo.releases":"none","repo.projects":"none","repo.ext_wiki":"none"]
        @x-go-name "UnitsMap" */
    [propertyName: string]: string;
  };
}

/**
 * @description
 *   EditUserOption edit user options
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface EditUserOption {
  active?: boolean;
  admin?: boolean;
  allow_create_organization?: boolean;
  allow_git_hook?: boolean;
  allow_import_local?: boolean;
  description?: string;
  /**
   * @format email
   * @x-go-name "Email"
   */
  email?: string;
  full_name?: string;
  location?: string;
  login_name: string;
  /**
   * @format int64
   * @x-go-name "MaxRepoCreation"
   */
  max_repo_creation?: number;
  must_change_password?: boolean;
  password?: string;
  prohibit_login?: boolean;
  restricted?: boolean;
  /**
   * @format int64
   * @x-go-name "SourceID"
   */
  source_id: number;
  visibility?: string;
  website?: string;
}

/**
 * @description
 *   Email an email address belonging to a user
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface Email {
  /**
   * @format email
   * @x-go-name "Email"
   */
  email?: string;
  primary?: boolean;
  verified?: boolean;
}

/**
 * @description
 *   ExternalTracker represents settings for external tracker
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface ExternalTracker {
  /**
   * @description
   *   External Issue Tracker URL Format. Use the placeholders {user}, {repo} and {index} for the username, repository name and issue index.
   * @x-go-name "ExternalTrackerFormat"
   */
  external_tracker_format?: string;
  /**
   * @description
   *   External Issue Tracker Number Format, either `numeric` or `alphanumeric`
   * @x-go-name "ExternalTrackerStyle"
   */
  external_tracker_style?: string;
  /**
   * @description
   *   URL of external issue tracker.
   * @x-go-name "ExternalTrackerURL"
   */
  external_tracker_url?: string;
}

/**
 * @description
 *   ExternalWiki represents setting for external wiki
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface ExternalWiki {
  /**
   * @description
   *   URL of external wiki.
   * @x-go-name "ExternalWikiURL"
   */
  external_wiki_url?: string;
}

export interface FileCommitResponse {
  author?: CommitUser;
  committer?: CommitUser;
  /**
   * @format date-time
   * @x-go-name "Created"
   */
  created?: string;
  html_url?: string;
  message?: string;
  parents?: Array<CommitMeta>;
  sha?: string;
  tree?: CommitMeta;
  url?: string;
}

/**
 * @description
 *   FileDeleteResponse contains information about a repo's file that was deleted
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface FileDeleteResponse {
  commit?: FileCommitResponse;
  content?: any;
  verification?: PayloadCommitVerification;
}

/**
 * @description
 *   FileLinksResponse contains the links for a repo's file
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface FileLinksResponse {
  git?: string;
  html?: string;
  self?: string;
}

/**
 * @description
 *   FileResponse contains information about a repo's file
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface FileResponse {
  commit?: FileCommitResponse;
  content?: ContentsResponse;
  verification?: PayloadCommitVerification;
}

/**
 * @description
 *   GPGKey a user GPG key to sign commit and tag in repository
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface GPGKey {
  can_certify?: boolean;
  can_encrypt_comms?: boolean;
  can_encrypt_storage?: boolean;
  can_sign?: boolean;
  /**
   * @format date-time
   * @x-go-name "Created"
   */
  created_at?: string;
  emails?: Array<GPGKeyEmail>;
  /**
   * @format date-time
   * @x-go-name "Expires"
   */
  expires_at?: string;
  /**
   * @format int64
   * @x-go-name "ID"
   */
  id?: number;
  key_id?: string;
  primary_key_id?: string;
  public_key?: string;
  subkeys?: Array<GPGKey>;
  verified?: boolean;
}

/**
 * @description
 *   GPGKeyEmail an email attached to a GPGKey
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface GPGKeyEmail {
  email?: string;
  verified?: boolean;
}

/**
 * @description
 *   GeneralAPISettings contains global api settings exposed by it
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface GeneralAPISettings {
  /**
   * @format int64
   * @x-go-name "DefaultGitTreesPerPage"
   */
  default_git_trees_per_page?: number;
  /**
   * @format int64
   * @x-go-name "DefaultMaxBlobSize"
   */
  default_max_blob_size?: number;
  /**
   * @format int64
   * @x-go-name "DefaultPagingNum"
   */
  default_paging_num?: number;
  /**
   * @format int64
   * @x-go-name "MaxResponseItems"
   */
  max_response_items?: number;
}

/**
 * @description
 *   GeneralAttachmentSettings contains global Attachment settings exposed by API
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface GeneralAttachmentSettings {
  allowed_types?: string;
  enabled?: boolean;
  /**
   * @format int64
   * @x-go-name "MaxFiles"
   */
  max_files?: number;
  /**
   * @format int64
   * @x-go-name "MaxSize"
   */
  max_size?: number;
}

/**
 * @description
 *   GeneralRepoSettings contains global repository settings exposed by API
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface GeneralRepoSettings {
  http_git_disabled?: boolean;
  lfs_disabled?: boolean;
  migrations_disabled?: boolean;
  mirrors_disabled?: boolean;
  stars_disabled?: boolean;
  time_tracking_disabled?: boolean;
}

/**
 * @description
 *   GeneralUISettings contains global ui settings exposed by API
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface GeneralUISettings {
  allowed_reactions?: Array<string>;
  custom_emojis?: Array<string>;
  default_theme?: string;
}

/**
 * @description
 *   GenerateRepoOption options when creating repository using a template
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface GenerateRepoOption {
  /**
   * @description
   *   include avatar of the template repo
   * @x-go-name "Avatar"
   */
  avatar?: boolean;
  /**
   * @description
   *   Description of the repository to create
   * @x-go-name "Description"
   */
  description?: string;
  /**
   * @description
   *   include git content of default branch in template repo
   * @x-go-name "GitContent"
   */
  git_content?: boolean;
  /**
   * @description
   *   include git hooks in template repo
   * @x-go-name "GitHooks"
   */
  git_hooks?: boolean;
  /**
   * @description
   *   include labels in template repo
   * @x-go-name "Labels"
   */
  labels?: boolean;
  /**
   * @description
   *   Name of the repository to create
   * @x-go-name "Name"
   */
  name: string;
  /**
   * @description
   *   The organization or person who will own the new repository
   * @x-go-name "Owner"
   */
  owner: string;
  /**
   * @description
   *   Whether the repository is private
   * @x-go-name "Private"
   */
  private?: boolean;
  /**
   * @description
   *   include topics in template repo
   * @x-go-name "Topics"
   */
  topics?: boolean;
  /**
   * @description
   *   include webhooks in template repo
   * @x-go-name "Webhooks"
   */
  webhooks?: boolean;
}

/**
 * @description
 *   GitBlobResponse represents a git blob
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface GitBlobResponse {
  content?: string;
  encoding?: string;
  sha?: string;
  /**
   * @format int64
   * @x-go-name "Size"
   */
  size?: number;
  url?: string;
}

/**
 * @description
 *   GitEntry represents a git tree
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface GitEntry {
  mode?: string;
  path?: string;
  sha?: string;
  /**
   * @format int64
   * @x-go-name "Size"
   */
  size?: number;
  type?: string;
  url?: string;
}

/**
 * @description
 *   GitHook represents a Git repository hook
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface GitHook {
  content?: string;
  is_active?: boolean;
  name?: string;
}

export interface GitObject {
  sha?: string;
  type?: string;
  url?: string;
}

/**
 * @description
 *   GitServiceType represents a git service
 * @format int64
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export type GitServiceType = number;

/**
 * @description
 *   GitTreeResponse returns a git tree
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface GitTreeResponse {
  /**
   * @format int64
   * @x-go-name "Page"
   */
  page?: number;
  sha?: string;
  /**
   * @format int64
   * @x-go-name "TotalCount"
   */
  total_count?: number;
  tree?: Array<GitEntry>;
  truncated?: boolean;
  url?: string;
}

/**
 * @description
 *   Hook a hook is a web hook when one repository changed
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface Hook {
  active?: boolean;
  config?: {
    [propertyName: string]: string;
  };
  /**
   * @format date-time
   * @x-go-name "Created"
   */
  created_at?: string;
  events?: Array<string>;
  /**
   * @format int64
   * @x-go-name "ID"
   */
  id?: number;
  type?: string;
  /**
   * @format date-time
   * @x-go-name "Updated"
   */
  updated_at?: string;
}

/**
 * @description
 *   Identity for a person's identity like an author or committer
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface Identity {
  /**
   * @format email
   * @x-go-name "Email"
   */
  email?: string;
  name?: string;
}

/**
 * @description
 *   InternalTracker represents settings for internal tracker
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface InternalTracker {
  /**
   * @description
   *   Let only contributors track time (Built-in issue tracker)
   * @x-go-name "AllowOnlyContributorsToTrackTime"
   */
  allow_only_contributors_to_track_time?: boolean;
  /**
   * @description
   *   Enable dependencies for issues and pull requests (Built-in issue tracker)
   * @x-go-name "EnableIssueDependencies"
   */
  enable_issue_dependencies?: boolean;
  /**
   * @description
   *   Enable time tracking (Built-in issue tracker)
   * @x-go-name "EnableTimeTracker"
   */
  enable_time_tracker?: boolean;
}

/**
 * @description
 *   Issue represents an issue in a repository
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface Issue {
  assignee?: User;
  assignees?: Array<User>;
  body?: string;
  /**
   * @format date-time
   * @x-go-name "Closed"
   */
  closed_at?: string;
  /**
   * @format int64
   * @x-go-name "Comments"
   */
  comments?: number;
  /**
   * @format date-time
   * @x-go-name "Created"
   */
  created_at?: string;
  /**
   * @format date-time
   * @x-go-name "Deadline"
   */
  due_date?: string;
  html_url?: string;
  /**
   * @format int64
   * @x-go-name "ID"
   */
  id?: number;
  is_locked?: boolean;
  labels?: Array<Label>;
  milestone?: Milestone;
  /**
   * @format int64
   * @x-go-name "Index"
   */
  number?: number;
  original_author?: string;
  /**
   * @format int64
   * @x-go-name "OriginalAuthorID"
   */
  original_author_id?: number;
  pull_request?: PullRequestMeta;
  ref?: string;
  repository?: RepositoryMeta;
  state?: StateType;
  title?: string;
  /**
   * @format date-time
   * @x-go-name "Updated"
   */
  updated_at?: string;
  url?: string;
  user?: User;
}

/**
 * @description
 *   IssueDeadline represents an issue deadline
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface IssueDeadline {
  /**
   * @format date-time
   * @x-go-name "Deadline"
   */
  due_date?: string;
}

/**
 * @description
 *   IssueLabelsOption a collection of labels
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface IssueLabelsOption {
  /**
   * @description
   *   list of label IDs
   * @x-go-name "Labels"
   */
  labels?: Array<number>;
}

/**
 * @description
 *   IssueTemplate represents an issue template for a repository
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface IssueTemplate {
  about?: string;
  content?: string;
  file_name?: string;
  labels?: Array<string>;
  name?: string;
  ref?: string;
  title?: string;
}

/**
 * @description
 *   Label a label to an issue or a pr
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface Label {
  /**
   * @example
   *   00aabb
   * @x-go-name "Color"
   */
  color?: string;
  description?: string;
  /**
   * @format int64
   * @x-go-name "ID"
   */
  id?: number;
  name?: string;
  url?: string;
}

/**
 * @description
 *   MarkdownOption markdown options
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface MarkdownOption {
  /**
   * @description
   *   Context to render
   *
   * in: body
   */
  Context?: string;
  /**
   * @description
   *   Mode to render
   *
   * in: body
   */
  Mode?: string;
  /**
   * @description
   *   Text markdown to render
   *
   * in: body
   */
  Text?: string;
  /**
   * @description
   *   Is it a wiki page ?
   *
   * in: body
   */
  Wiki?: boolean;
}

/**
 * @description
 *   MergePullRequestForm form for merging Pull Request
 * @x-go-name "MergePullRequestForm"
 * @x-go-package "code.gitea.io/gitea/services/forms"
 */
export interface MergePullRequestOption {
  Do: MergePullRequestOptionDo;
  MergeCommitID?: string;
  MergeMessageField?: string;
  MergeTitleField?: string;
  delete_branch_after_merge?: boolean;
  force_merge?: boolean;
  head_commit_id?: string;
}

/**
 * @description
 *   MigrateRepoForm form for migrating repository
 * this is used to interact with web ui
 * @x-go-package "code.gitea.io/gitea/services/forms"
 */
export interface MigrateRepoForm {
  auth_password?: string;
  auth_token?: string;
  auth_username?: string;
  clone_addr: string;
  description?: string;
  issues?: boolean;
  labels?: boolean;
  lfs?: boolean;
  lfs_endpoint?: string;
  milestones?: boolean;
  mirror?: boolean;
  mirror_interval?: string;
  private?: boolean;
  pull_requests?: boolean;
  releases?: boolean;
  repo_name: string;
  service?: GitServiceType;
  /**
   * @format int64
   * @x-go-name "UID"
   */
  uid: number;
  wiki?: boolean;
}

/**
 * @description
 *   MigrateRepoOptions options for migrating repository's
 * this is used to interact with api v1
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface MigrateRepoOptions {
  auth_password?: string;
  auth_token?: string;
  auth_username?: string;
  clone_addr: string;
  description?: string;
  issues?: boolean;
  labels?: boolean;
  lfs?: boolean;
  lfs_endpoint?: string;
  milestones?: boolean;
  mirror?: boolean;
  mirror_interval?: string;
  private?: boolean;
  pull_requests?: boolean;
  releases?: boolean;
  repo_name: string;
  /**
   * @description
   *   Name of User or Organisation who will own Repo after migration
   * @x-go-name "RepoOwner"
   */
  repo_owner?: string;
  service?: MigrateRepoOptionsService;
  /**
   * @description
   *   deprecated (only for backwards compatibility)
   * @format int64
   * @x-go-name "RepoOwnerID"
   */
  uid?: number;
  wiki?: boolean;
}

/**
 * @description
 *   Milestone milestone is a collection of issues on one repository
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface Milestone {
  /**
   * @format date-time
   * @x-go-name "Closed"
   */
  closed_at?: string;
  /**
   * @format int64
   * @x-go-name "ClosedIssues"
   */
  closed_issues?: number;
  /**
   * @format date-time
   * @x-go-name "Created"
   */
  created_at?: string;
  description?: string;
  /**
   * @format date-time
   * @x-go-name "Deadline"
   */
  due_on?: string;
  /**
   * @format int64
   * @x-go-name "ID"
   */
  id?: number;
  /**
   * @format int64
   * @x-go-name "OpenIssues"
   */
  open_issues?: number;
  state?: StateType;
  title?: string;
  /**
   * @format date-time
   * @x-go-name "Updated"
   */
  updated_at?: string;
}

/**
 * @description
 *   NodeInfo contains standardized way of exposing metadata about a server running one of the distributed social networks
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface NodeInfo {
  metadata?: any;
  openRegistrations?: boolean;
  protocols?: Array<string>;
  services?: NodeInfoServices;
  software?: NodeInfoSoftware;
  usage?: NodeInfoUsage;
  version?: string;
}

/**
 * @description
 *   NodeInfoServices contains the third party sites this server can connect to via their application API
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface NodeInfoServices {
  inbound?: Array<string>;
  outbound?: Array<string>;
}

/**
 * @description
 *   NodeInfoSoftware contains Metadata about server software in use
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface NodeInfoSoftware {
  homepage?: string;
  name?: string;
  repository?: string;
  version?: string;
}

/**
 * @description
 *   NodeInfoUsage contains usage statistics for this server
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface NodeInfoUsage {
  /**
   * @format int64
   * @x-go-name "LocalComments"
   */
  localComments?: number;
  /**
   * @format int64
   * @x-go-name "LocalPosts"
   */
  localPosts?: number;
  users?: NodeInfoUsageUsers;
}

/**
 * @description
 *   NodeInfoUsageUsers contains statistics about the users of this server
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface NodeInfoUsageUsers {
  /**
   * @format int64
   * @x-go-name "ActiveHalfyear"
   */
  activeHalfyear?: number;
  /**
   * @format int64
   * @x-go-name "ActiveMonth"
   */
  activeMonth?: number;
  /**
   * @format int64
   * @x-go-name "Total"
   */
  total?: number;
}

/**
 * @description
 *   Note contains information related to a git note
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface Note {
  commit?: Commit;
  message?: string;
}

/**
 * @description
 *   NotificationCount number of unread notifications
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface NotificationCount {
  /**
   * @format int64
   * @x-go-name "New"
   */
  new?: number;
}

/**
 * @description
 *   NotificationSubject contains the notification subject (Issue/Pull/Commit)
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface NotificationSubject {
  html_url?: string;
  latest_comment_html_url?: string;
  latest_comment_url?: string;
  state?: StateType;
  title?: string;
  type?: NotifySubjectType;
  url?: string;
}

/**
 * @description
 *   NotificationThread expose Notification on API
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface NotificationThread {
  /**
   * @format int64
   * @x-go-name "ID"
   */
  id?: number;
  pinned?: boolean;
  repository?: Repository;
  subject?: NotificationSubject;
  unread?: boolean;
  /**
   * @format date-time
   * @x-go-name "UpdatedAt"
   */
  updated_at?: string;
  url?: string;
}

/**
 * @description
 *   NotifySubjectType represent type of notification subject
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export type NotifySubjectType = string;

/**
 * @description
 *   Organization represents an organization
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface Organization {
  avatar_url?: string;
  description?: string;
  full_name?: string;
  /**
   * @format int64
   * @x-go-name "ID"
   */
  id?: number;
  location?: string;
  repo_admin_change_team_access?: boolean;
  /**
   * @description
   *   DCS Customizations ***
   * @x-go-name "RepoLanguages"
   */
  repo_languages?: Array<string>;
  repo_subjects?: Array<string>;
  username?: string;
  visibility?: string;
  website?: string;
}

/**
 * @description
 *   OrganizationPermissions list different users permissions on an organization
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface OrganizationPermissions {
  can_create_repository?: boolean;
  can_read?: boolean;
  can_write?: boolean;
  is_admin?: boolean;
  is_owner?: boolean;
}

/**
 * @description
 *   PRBranchInfo information about a branch
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface PRBranchInfo {
  label?: string;
  ref?: string;
  repo?: Repository;
  /**
   * @format int64
   * @x-go-name "RepoID"
   */
  repo_id?: number;
  sha?: string;
}

/**
 * @description
 *   PayloadCommit represents a commit
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface PayloadCommit {
  added?: Array<string>;
  author?: PayloadUser;
  committer?: PayloadUser;
  /**
   * @description
   *   sha1 hash of the commit
   * @x-go-name "ID"
   */
  id?: string;
  message?: string;
  modified?: Array<string>;
  removed?: Array<string>;
  /**
   * @format date-time
   * @x-go-name "Timestamp"
   */
  timestamp?: string;
  url?: string;
  verification?: PayloadCommitVerification;
}

/**
 * @description
 *   PayloadCommitVerification represents the GPG verification of a commit
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface PayloadCommitVerification {
  payload?: string;
  reason?: string;
  signature?: string;
  signer?: PayloadUser;
  verified?: boolean;
}

/**
 * @description
 *   PayloadUser represents the author or committer of a commit
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface PayloadUser {
  /**
   * @format email
   * @x-go-name "Email"
   */
  email?: string;
  /**
   * @description
   *   Full name of the commit author
   * @x-go-name "Name"
   */
  name?: string;
  username?: string;
}

/**
 * @description
 *   Permission represents a set of permissions
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface Permission {
  admin?: boolean;
  pull?: boolean;
  push?: boolean;
}

/**
 * @description
 *   PublicKey publickey is a user key to push code to repository
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface PublicKey {
  /**
   * @format date-time
   * @x-go-name "Created"
   */
  created_at?: string;
  fingerprint?: string;
  /**
   * @format int64
   * @x-go-name "ID"
   */
  id?: number;
  key?: string;
  key_type?: string;
  read_only?: boolean;
  title?: string;
  url?: string;
  user?: User;
}

/**
 * @description
 *   PullRequest represents a pull request
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface PullRequest {
  assignee?: User;
  assignees?: Array<User>;
  base?: PRBranchInfo;
  body?: string;
  /**
   * @format date-time
   * @x-go-name "Closed"
   */
  closed_at?: string;
  /**
   * @format int64
   * @x-go-name "Comments"
   */
  comments?: number;
  /**
   * @format date-time
   * @x-go-name "Created"
   */
  created_at?: string;
  diff_url?: string;
  /**
   * @format date-time
   * @x-go-name "Deadline"
   */
  due_date?: string;
  head?: PRBranchInfo;
  html_url?: string;
  /**
   * @format int64
   * @x-go-name "ID"
   */
  id?: number;
  is_locked?: boolean;
  labels?: Array<Label>;
  merge_base?: string;
  merge_commit_sha?: string;
  mergeable?: boolean;
  merged?: boolean;
  /**
   * @format date-time
   * @x-go-name "Merged"
   */
  merged_at?: string;
  merged_by?: User;
  milestone?: Milestone;
  /**
   * @format int64
   * @x-go-name "Index"
   */
  number?: number;
  patch_url?: string;
  state?: StateType;
  title?: string;
  /**
   * @format date-time
   * @x-go-name "Updated"
   */
  updated_at?: string;
  url?: string;
  user?: User;
}

/**
 * @description
 *   PullRequestMeta PR info if an issue is a PR
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface PullRequestMeta {
  merged?: boolean;
  /**
   * @format date-time
   * @x-go-name "Merged"
   */
  merged_at?: string;
}

/**
 * @description
 *   PullReview represents a pull request review
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface PullReview {
  body?: string;
  /**
   * @format int64
   * @x-go-name "CodeCommentsCount"
   */
  comments_count?: number;
  commit_id?: string;
  dismissed?: boolean;
  html_url?: string;
  /**
   * @format int64
   * @x-go-name "ID"
   */
  id?: number;
  official?: boolean;
  pull_request_url?: string;
  stale?: boolean;
  state?: ReviewStateType;
  /**
   * @format date-time
   * @x-go-name "Submitted"
   */
  submitted_at?: string;
  team?: Team;
  user?: User;
}

/**
 * @description
 *   PullReviewComment represents a comment on a pull request review
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface PullReviewComment {
  body?: string;
  commit_id?: string;
  /**
   * @format date-time
   * @x-go-name "Created"
   */
  created_at?: string;
  diff_hunk?: string;
  html_url?: string;
  /**
   * @format int64
   * @x-go-name "ID"
   */
  id?: number;
  original_commit_id?: string;
  /**
   * @format uint64
   * @x-go-name "OldLineNum"
   */
  original_position?: number;
  path?: string;
  /**
   * @format uint64
   * @x-go-name "LineNum"
   */
  position?: number;
  /**
   * @format int64
   * @x-go-name "ReviewID"
   */
  pull_request_review_id?: number;
  pull_request_url?: string;
  resolver?: User;
  /**
   * @format date-time
   * @x-go-name "Updated"
   */
  updated_at?: string;
  user?: User;
}

/**
 * @description
 *   PullReviewRequestOptions are options to add or remove pull review requests
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface PullReviewRequestOptions {
  reviewers?: Array<string>;
  team_reviewers?: Array<string>;
}

/**
 * @description
 *   Reaction contain one reaction
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface Reaction {
  content?: string;
  /**
   * @format date-time
   * @x-go-name "Created"
   */
  created_at?: string;
  user?: User;
}

export interface Reference {
  object?: GitObject;
  ref?: string;
  url?: string;
}

/**
 * @description
 *   Release represents a repository release
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface Release {
  assets?: Array<Attachment>;
  author?: User;
  body?: string;
  /**
   * @format date-time
   * @x-go-name "CreatedAt"
   */
  created_at?: string;
  draft?: boolean;
  html_url?: string;
  /**
   * @format int64
   * @x-go-name "ID"
   */
  id?: number;
  name?: string;
  prerelease?: boolean;
  /**
   * @format date-time
   * @x-go-name "PublishedAt"
   */
  published_at?: string;
  tag_name?: string;
  tarball_url?: string;
  target_commitish?: string;
  url?: string;
  zipball_url?: string;
}

export interface RepoCommit {
  author?: CommitUser;
  committer?: CommitUser;
  message?: string;
  tree?: CommitMeta;
  url?: string;
}

/**
 * @description
 *   RepoTopicOptions a collection of repo topic names
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface RepoTopicOptions {
  /**
   * @description
   *   list of topic names
   * @x-go-name "Topics"
   */
  topics?: Array<string>;
}

/**
 * @description
 *   RepoTransfer represents a pending repo transfer
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface RepoTransfer {
  doer?: User;
  recipient?: User;
  teams?: Array<Team>;
}

/**
 * @description
 *   Repository represents a repository
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface Repository {
  alignment_counts?: {
    [propertyName: string]: any;
  };
  allow_merge_commits?: boolean;
  allow_rebase?: boolean;
  allow_rebase_explicit?: boolean;
  allow_squash_merge?: boolean;
  archived?: boolean;
  avatar_url?: string;
  books?: Array<string>;
  catalog?: CatalogStages;
  checking_level?: string;
  clone_url?: string;
  /**
   * @format date-time
   * @x-go-name "Created"
   */
  created_at?: string;
  default_branch?: string;
  default_merge_style?: string;
  description?: string;
  empty?: boolean;
  external_tracker?: ExternalTracker;
  external_wiki?: ExternalWiki;
  fork?: boolean;
  /**
   * @format int64
   * @x-go-name "Forks"
   */
  forks_count?: number;
  full_name?: string;
  has_issues?: boolean;
  has_projects?: boolean;
  has_pull_requests?: boolean;
  has_wiki?: boolean;
  html_url?: string;
  /**
   * @format int64
   * @x-go-name "ID"
   */
  id?: number;
  ignore_whitespace_conflicts?: boolean;
  internal?: boolean;
  internal_tracker?: InternalTracker;
  /**
   * @description
   *   DCS Customizations ***
   * @x-go-name "Language"
   */
  language?: string;
  language_direction?: string;
  language_is_gl?: boolean;
  language_title?: string;
  mirror?: boolean;
  mirror_interval?: string;
  /**
   * @format date-time
   * @x-go-name "MirrorUpdated"
   */
  mirror_updated?: string;
  name?: string;
  /**
   * @format int64
   * @x-go-name "OpenIssues"
   */
  open_issues_count?: number;
  /**
   * @format int64
   * @x-go-name "OpenPulls"
   */
  open_pr_counter?: number;
  original_url?: string;
  owner?: User;
  parent?: Repository;
  permissions?: Permission;
  private?: boolean;
  /**
   * @format int64
   * @x-go-name "Releases"
   */
  release_counter?: number;
  repo_transfer?: RepoTransfer;
  /**
   * @format int64
   * @x-go-name "Size"
   */
  size?: number;
  ssh_url?: string;
  /**
   * @format int64
   * @x-go-name "Stars"
   */
  stars_count?: number;
  subject?: string;
  template?: boolean;
  title?: string;
  /**
   * @format date-time
   * @x-go-name "Updated"
   */
  updated_at?: string;
  /**
   * @format int64
   * @x-go-name "Watchers"
   */
  watchers_count?: number;
  website?: string;
}

/**
 * @description
 *   RepositoryMeta basic repository information
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface RepositoryMeta {
  full_name?: string;
  /**
   * @format int64
   * @x-go-name "ID"
   */
  id?: number;
  name?: string;
  owner?: string;
}

/**
 * @description
 *   ReviewStateType review state type
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export type ReviewStateType = string;

/**
 * @description
 *   SearchResults results of a successful search
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface SearchResults {
  data?: Array<Repository>;
  ok?: boolean;
}

/**
 * @description
 *   ServerVersion wraps the version of the server
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface ServerVersion {
  version?: string;
}

/**
 * @description
 *   StateType issue state type
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export type StateType = string;

/**
 * @description
 *   StopWatch represent a running stopwatch
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface StopWatch {
  /**
   * @format date-time
   * @x-go-name "Created"
   */
  created?: string;
  duration?: string;
  /**
   * @format int64
   * @x-go-name "IssueIndex"
   */
  issue_index?: number;
  issue_title?: string;
  repo_name?: string;
  repo_owner_name?: string;
  /**
   * @format int64
   * @x-go-name "Seconds"
   */
  seconds?: number;
}

/**
 * @description
 *   SubmitPullReviewOptions are options to submit a pending pull review
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface SubmitPullReviewOptions {
  body?: string;
  event?: ReviewStateType;
}

/**
 * @description
 *   Tag represents a repository tag
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface Tag {
  commit?: CommitMeta;
  id?: string;
  message?: string;
  name?: string;
  tarball_url?: string;
  zipball_url?: string;
}

/**
 * @description
 *   Team represents a team in an organization
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface Team {
  can_create_org_repo?: boolean;
  description?: string;
  /**
   * @format int64
   * @x-go-name "ID"
   */
  id?: number;
  includes_all_repositories?: boolean;
  name?: string;
  organization?: Organization;
  permission?: TeamPermission;
  /**
   * @example
   *   repo.code,repo.issues,repo.ext_issues,repo.wiki,repo.pulls,repo.releases,repo.projects,repo.ext_wiki
   * @x-go-name "Units"
   */
  units?: Array<string>;
  /**
   * @example
   *   {"repo.code":"read","repo.issues":"write","repo.ext_issues":"none","repo.wiki":"admin","repo.pulls":"owner","repo.releases":"none","repo.projects":"none","repo.ext_wiki":"none"]
   * @x-go-name "UnitsMap"
   */
  units_map?: {
    /**
        @example
          {"repo.code":"read","repo.issues":"write","repo.ext_issues":"none","repo.wiki":"admin","repo.pulls":"owner","repo.releases":"none","repo.projects":"none","repo.ext_wiki":"none"]
        @x-go-name "UnitsMap" */
    [propertyName: string]: string;
  };
}

/**
 * @description
 *   TimeStamp defines a timestamp
 * @format int64
 * @x-go-package "code.gitea.io/gitea/modules/timeutil"
 */
export type TimeStamp = number;

/**
 * @description
 *   TimelineComment represents a timeline comment (comment of any type) on a commit or issue
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface TimelineComment {
  assignee?: User;
  assignee_team?: Team;
  body?: string;
  /**
   * @format date-time
   * @x-go-name "Created"
   */
  created_at?: string;
  dependent_issue?: Issue;
  html_url?: string;
  /**
   * @format int64
   * @x-go-name "ID"
   */
  id?: number;
  issue_url?: string;
  label?: Label;
  milestone?: Milestone;
  new_ref?: string;
  new_title?: string;
  old_milestone?: Milestone;
  /**
   * @format int64
   * @x-go-name "OldProjectID"
   */
  old_project_id?: number;
  old_ref?: string;
  old_title?: string;
  /**
   * @format int64
   * @x-go-name "ProjectID"
   */
  project_id?: number;
  pull_request_url?: string;
  ref_action?: string;
  ref_comment?: Comment;
  /**
   * @description
   *   commit SHA where issue/PR was referenced
   * @x-go-name "RefCommitSHA"
   */
  ref_commit_sha?: string;
  ref_issue?: Issue;
  /**
   * @description
   *   whether the assignees were removed or added
   * @x-go-name "RemovedAssignee"
   */
  removed_assignee?: boolean;
  resolve_doer?: User;
  /**
   * @format int64
   * @x-go-name "ReviewID"
   */
  review_id?: number;
  tracked_time?: TrackedTime;
  type?: string;
  /**
   * @format date-time
   * @x-go-name "Updated"
   */
  updated_at?: string;
  user?: User;
}

/**
 * @description
 *   TopicName a list of repo topic names
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface TopicName {
  topics?: Array<string>;
}

/**
 * @description
 *   TopicResponse for returning topics
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface TopicResponse {
  /**
   * @format date-time
   * @x-go-name "Created"
   */
  created?: string;
  /**
   * @format int64
   * @x-go-name "ID"
   */
  id?: number;
  /**
   * @format int64
   * @x-go-name "RepoCount"
   */
  repo_count?: number;
  topic_name?: string;
  /**
   * @format date-time
   * @x-go-name "Updated"
   */
  updated?: string;
}

/**
 * @description
 *   TrackedTime worked time for an issue / pr
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface TrackedTime {
  /**
   * @format date-time
   * @x-go-name "Created"
   */
  created?: string;
  /**
   * @format int64
   * @x-go-name "ID"
   */
  id?: number;
  issue?: Issue;
  /**
   * @description
   *   deprecated (only for backwards compatibility)
   * @format int64
   * @x-go-name "IssueID"
   */
  issue_id?: number;
  /**
   * @description
   *   Time in seconds
   * @format int64
   * @x-go-name "Time"
   */
  time?: number;
  /**
   * @description
   *   deprecated (only for backwards compatibility)
   * @format int64
   * @x-go-name "UserID"
   */
  user_id?: number;
  user_name?: string;
}

/**
 * @description
 *   TransferRepoOption options when transfer a repository's ownership
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface TransferRepoOption {
  new_owner: string;
  /**
   * @description
   *   ID of the team or teams to add to the repository. Teams can only be added to organization-owned repositories.
   * @x-go-name "TeamIDs"
   */
  team_ids?: Array<number>;
}

/**
 * @description
 *   UpdateFileOptions options for updating files
 * Note: `author` and `committer` are optional (if only one is given, it will be used for the other, otherwise the authenticated user will be used)
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface UpdateFileOptions {
  author?: Identity;
  /**
   * @description
   *   branch (optional) to base this file from. if not given, the default branch is used
   * @x-go-name "BranchName"
   */
  branch?: string;
  committer?: Identity;
  /**
   * @description
   *   content must be base64 encoded
   * @x-go-name "Content"
   */
  content: string;
  dates?: CommitDateOptions;
  /**
   * @description
   *   from_path (optional) is the path of the original file which will be moved/renamed to the path in the URL
   * @x-go-name "FromPath"
   */
  from_path?: string;
  /**
   * @description
   *   message (optional) for the commit of this file. if not supplied, a default message will be used
   * @x-go-name "Message"
   */
  message?: string;
  /**
   * @description
   *   new_branch (optional) will make a new branch from `branch` before creating the file
   * @x-go-name "NewBranchName"
   */
  new_branch?: string;
  /**
   * @description
   *   sha is the SHA for the file that already exists
   * @x-go-name "SHA"
   */
  sha: string;
  /**
   * @description
   *   Add a Signed-off-by trailer by the committer at the end of the commit log message.
   * @x-go-name "Signoff"
   */
  signoff?: boolean;
}

/**
 * @description
 *   User represents a user
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface User {
  /**
   * @description
   *   Is user active
   * @x-go-name "IsActive"
   */
  active?: boolean;
  /**
   * @description
   *   URL to the user's avatar
   * @x-go-name "AvatarURL"
   */
  avatar_url?: string;
  /**
   * @format date-time
   * @x-go-name "Created"
   */
  created?: string;
  /**
   * @description
   *   the user's description
   * @x-go-name "Description"
   */
  description?: string;
  /**
   * @format email
   * @x-go-name "Email"
   */
  email?: string;
  /**
   * @description
   *   user counts
   * @format int64
   * @x-go-name "Followers"
   */
  followers_count?: number;
  /**
   * @format int64
   * @x-go-name "Following"
   */
  following_count?: number;
  /**
   * @description
   *   the user's full name
   * @x-go-name "FullName"
   */
  full_name?: string;
  /**
   * @description
   *   the user's id
   * @format int64
   * @x-go-name "ID"
   */
  id?: number;
  /**
   * @description
   *   Is the user an administrator
   * @x-go-name "IsAdmin"
   */
  is_admin?: boolean;
  /**
   * @description
   *   User locale
   * @x-go-name "Language"
   */
  language?: string;
  /**
   * @format date-time
   * @x-go-name "LastLogin"
   */
  last_login?: string;
  /**
   * @description
   *   the user's location
   * @x-go-name "Location"
   */
  location?: string;
  /**
   * @description
   *   the user's username
   * @x-go-name "UserName"
   */
  login?: string;
  /**
   * @description
   *   Is user login prohibited
   * @x-go-name "ProhibitLogin"
   */
  prohibit_login?: boolean;
  /**
   * @description
   *   DCS Customizations ***
   * Repo languages
   * @x-go-name "RepoLanguages"
   */
  repo_languages?: Array<string>;
  /**
   * @description
   *   Repo subjects
   * @x-go-name "RepoSubjects"
   */
  repo_subjects?: Array<string>;
  /**
   * @description
   *   END DCS Customizations ***
   * Is user restricted
   * @x-go-name "Restricted"
   */
  restricted?: boolean;
  /**
   * @format int64
   * @x-go-name "StarredRepos"
   */
  starred_repos_count?: number;
  /**
   * @description
   *   User visibility level option: public, limited, private
   * @x-go-name "Visibility"
   */
  visibility?: string;
  /**
   * @description
   *   the user's website
   * @x-go-name "Website"
   */
  website?: string;
}

/**
 * @description
 *   UserHeatmapData represents the data needed to create a heatmap
 * @x-go-package "code.gitea.io/gitea/models"
 */
export interface UserHeatmapData {
  /**
   * @format int64
   * @x-go-name "Contributions"
   */
  contributions?: number;
  timestamp?: TimeStamp;
}

/**
 * @description
 *   UserSettings represents user settings
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface UserSettings {
  description?: string;
  diff_view_style?: string;
  full_name?: string;
  hide_activity?: boolean;
  /**
   * @description
   *   Privacy
   * @x-go-name "HideEmail"
   */
  hide_email?: boolean;
  language?: string;
  location?: string;
  theme?: string;
  website?: string;
}

/**
 * @description
 *   UserSettingsOptions represents options to change user settings
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface UserSettingsOptions {
  description?: string;
  diff_view_style?: string;
  full_name?: string;
  hide_activity?: boolean;
  /**
   * @description
   *   Privacy
   * @x-go-name "HideEmail"
   */
  hide_email?: boolean;
  language?: string;
  location?: string;
  theme?: string;
  website?: string;
}

/**
 * @description
 *   WatchInfo represents an API watch status of one repository
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface WatchInfo {
  /**
   * @format date-time
   * @x-go-name "CreatedAt"
   */
  created_at?: string;
  ignored?: boolean;
  reason?: any;
  repository_url?: string;
  subscribed?: boolean;
  url?: string;
}

/**
 * @description
 *   WikiCommit page commit/revision
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface WikiCommit {
  author?: CommitUser;
  commiter?: CommitUser;
  message?: string;
  sha?: string;
}

/**
 * @description
 *   WikiCommitList commit/revision list
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface WikiCommitList {
  commits?: Array<WikiCommit>;
  /**
   * @format int64
   * @x-go-name "Count"
   */
  count?: number;
}

/**
 * @description
 *   WikiPage a wiki page
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface WikiPage {
  /**
   * @format int64
   * @x-go-name "CommitCount"
   */
  commit_count?: number;
  /**
   * @description
   *   Page content, base64 encoded
   * @x-go-name "ContentBase64"
   */
  content_base64?: string;
  footer?: string;
  html_url?: string;
  last_commit?: WikiCommit;
  sidebar?: string;
  sub_url?: string;
  title?: string;
}

/**
 * @description
 *   WikiPageMetaData wiki page meta information
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface WikiPageMetaData {
  html_url?: string;
  last_commit?: WikiCommit;
  sub_url?: string;
  title?: string;
}

/**
 * @description
 *   CreateOAuth2ApplicationOptions holds options to create an oauth2 application
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CreateOAuthApplicationOptions {
  name?: string;
  redirect_uris?: Array<string>;
}

export interface OAuthApplication {
  client_id?: string;
  client_secret?: string;
  /**
   * @format date-time
   * @x-go-name "Created"
   */
  created?: string;
  /**
   * @format int64
   * @x-go-name "ID"
   */
  id?: number;
  name?: string;
  redirect_uris?: Array<string>;
}

export type CronList = any;
export type Forbidden = any;
export type Empty = any;
export type NotFound = any;
export type OrganizationList = any;
export type StringSlice = any;
export type UserList = any;
export type TsgError = any;
export type ValidationError = any;
export type MarkdownRender = any;
export type NotificationThreadList = any;
export type HookList = any;
export type LabelList = any;
export type RepositoryList = any;
export type TeamList = any;
export type IssueList = any;
export type BranchProtectionList = any;
export type BranchList = any;
export type CommitList = any;
export type EmptyRepository = any;
export type CommitStatusList = any;
export type ContentsListResponse = any;
export type TsgString = any;
export type ReferenceList = any;
export type GitHookList = any;
export type IssueTemplates = any;
export type CommentList = any;
export type ReactionList = any;
export type TimelineList = any;
export type TrackedTimeList = any;
export type DeployKeyList = any;
export type LanguageStatistics = any;
export type MilestoneList = any;
export type PullRequestList = any;
export type PullReviewList = any;
export type PullReviewCommentList = any;
export type ReleaseList = any;
export type AttachmentList = any;
export type TagList = any;
export type Conflict = any;
export type TopicNames = any;
export type InvalidTopicsError = any;
export type WikiPageList = any;
export type TopicListResponse = any;
export type OAuthApplicationList = any;
export type EmailList = any;
export type GPGKeyList = any;
export type PublicKeyList = any;
export type StopWatchList = any;
export type AccessTokenList = any;
