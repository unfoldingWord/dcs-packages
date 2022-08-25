/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
export type TeamPermission = "none" | "read" | "write" | "admin" | "owner";
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
 *   CatalogVersionEndpoints Info on the versions of the catalog
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CatalogVersionEndpoints {
  latest?: string;
  versions?: {
    [propertyName: string]: string;
  };
}

/**
 * @description
 *   CatalogVersionEndpointsResponse response with the endpoints for all versions of the catalog
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CatalogVersionEndpointsResponse {
  data?: Array<CatalogVersionEndpoints>;
  ok?: boolean;
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
 *   CatalogSearchResultsPivotedV3 results of a successful search for V3 pivoted
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CatalogSearchResultsPivotedV {
  data?: Array<CatalogVPivoted>;
  /**
   * @format date-time
   * @x-go-name "LastUpdated"
   */
  last_updated?: string;
  ok?: boolean;
}

/**
 * @description
 *   CatalogSearchResultsV5 results of a successful search for V5
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CatalogSearchResultsV {
  data?: Array<CatalogV>;
  /**
   * @format date-time
   * @x-go-name "LastUpdated"
   */
  last_updated?: string;
  ok?: boolean;
}

/**
 * @description
 *   CatalogV5 represents a repository's metadata of a tag or default branch for V5
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CatalogV {
  alignment_counts?: {
    [propertyName: string]: any;
  };
  books?: Array<any>;
  branch_or_tag_name?: string;
  contents_url?: string;
  full_name?: string;
  git_trees_url?: string;
  /**
   * @format int64
   * @x-go-name "ID"
   */
  id?: number;
  ingredients?: Array<any>;
  language?: string;
  language_direction?: string;
  language_is_gl?: boolean;
  language_title?: string;
  metadata_api_contents_url?: string;
  metadata_json_url?: string;
  metadata_url?: string;
  metadata_version?: string;
  name?: string;
  owner?: string;
  release?: Release;
  /**
   * @format date-time
   * @x-go-name "Released"
   */
  released?: string;
  repo?: Repository;
  stage?: string;
  subject?: string;
  tarbar_url?: string;
  title?: string;
  url?: string;
  zipball_url?: string;
}

/**
 * @description
 *   CatalogV3Language represents a language in the catalog v3 languages array
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CatalogVLanguage {
  direction?: string;
  identifier?: string;
  /**
   * @format date-time
   * @x-go-name "LastUpdated"
   */
  last_updated?: string;
  resources?: Array<CatalogVResource>;
  title?: string;
}

/**
 * @description
 *   CatalogV3Pivoted represents the root of the v3 Pivoted Catalog
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CatalogVPivoted {
  catalogs?: Array<{
    [propertyName: string]: string;
  }>;
  /**
   * @format date-time
   * @x-go-name "LastUpdated"
   */
  last_updated?: string;
  subjects?: Array<CatalogVSubject>;
}

/**
 * @description
 *   CatalogV3Resource represents a resource in the catalog v3 resources array
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CatalogVResource {
  checking?: any;
  comment?: string;
  contributor?: any;
  creator?: string;
  description?: string;
  formats?: any;
  identifier?: string;
  /**
   * @format date-time
   * @x-go-name "Issued"
   */
  issued?: string;
  /**
   * @format date-time
   * @x-go-name "Modified"
   */
  modified?: string;
  owner?: string;
  projects?: any;
  publisher?: string;
  relation?: any;
  repo?: string;
  rights?: string;
  source?: Array<any>;
  subject?: string;
  title?: string;
  version?: string;
}

/**
 * @description
 *   CatalogV3Subject represents a subject & language combination in the catalog v3 languages array
 * @x-go-package "code.gitea.io/gitea/modules/structs"
 */
export interface CatalogVSubject {
  direction?: string;
  identifier?: string;
  language?: string;
  /**
   * @format date-time
   * @x-go-name "LastUpdated"
   */
  last_updated?: string;
  resources?: Array<CatalogVResource>;
  subject?: string;
  title?: string;
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

export type ValidationError = any;
export type CatalogEntryV = any;
export type CatalogMetadata = any;
