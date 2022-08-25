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
import { StateType } from './state-type';
/**
 * Milestone milestone is a collection of issues on one repository
 * @export
 * @interface Milestone
 */
export interface Milestone {
    /**
     * 
     * @type {Date}
     * @memberof Milestone
     */
    closedAt?: Date;
    /**
     * 
     * @type {number}
     * @memberof Milestone
     */
    closedIssues?: number;
    /**
     * 
     * @type {Date}
     * @memberof Milestone
     */
    createdAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof Milestone
     */
    description?: string;
    /**
     * 
     * @type {Date}
     * @memberof Milestone
     */
    dueOn?: Date;
    /**
     * 
     * @type {number}
     * @memberof Milestone
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof Milestone
     */
    openIssues?: number;
    /**
     * 
     * @type {StateType}
     * @memberof Milestone
     */
    state?: StateType;
    /**
     * 
     * @type {string}
     * @memberof Milestone
     */
    title?: string;
    /**
     * 
     * @type {Date}
     * @memberof Milestone
     */
    updatedAt?: Date;
}
