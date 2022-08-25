/* tslint:disable */
/* eslint-disable */
/**
 * DCS (Gitea) API.
 * This documentation describes the DCS (Gitea) API.
 *
 * OpenAPI spec version: 1.16.7+dcs
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Issue } from './issue';
/**
 * TrackedTime worked time for an issue / pr
 * @export
 * @interface TrackedTime
 */
export interface TrackedTime {
    /**
     * 
     * @type {Date}
     * @memberof TrackedTime
     */
    created?: Date;
    /**
     * 
     * @type {number}
     * @memberof TrackedTime
     */
    id?: number;
    /**
     * 
     * @type {Issue}
     * @memberof TrackedTime
     */
    issue?: Issue;
    /**
     * deprecated (only for backwards compatibility)
     * @type {number}
     * @memberof TrackedTime
     */
    issueId?: number;
    /**
     * Time in seconds
     * @type {number}
     * @memberof TrackedTime
     */
    time?: number;
    /**
     * deprecated (only for backwards compatibility)
     * @type {number}
     * @memberof TrackedTime
     */
    userId?: number;
    /**
     * 
     * @type {string}
     * @memberof TrackedTime
     */
    userName?: string;
}