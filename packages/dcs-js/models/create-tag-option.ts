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
/**
 * CreateTagOption options when creating a tag
 * @export
 * @interface CreateTagOption
 */
export interface CreateTagOption {
    /**
     * 
     * @type {string}
     * @memberof CreateTagOption
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateTagOption
     */
    tagName: string;
    /**
     * 
     * @type {string}
     * @memberof CreateTagOption
     */
    target?: string;
}
