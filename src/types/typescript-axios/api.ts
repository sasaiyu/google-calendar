/* tslint:disable */
/* eslint-disable */
/**
 * Google Calendar API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  BaseAPI,
  RequiredError,
  operationServerMap,
} from './base';

/**
 *
 * @export
 * @interface BusyInner
 */
export interface BusyInner {
  /**
   *
   * @type {string}
   * @memberof BusyInner
   */
  start?: string;
  /**
   *
   * @type {string}
   * @memberof BusyInner
   */
  end?: string;
}
/**
 *
 * @export
 * @interface CalendarList
 */
export interface CalendarList {
  /**
   *
   * @type {string}
   * @memberof CalendarList
   */
  kind?: string;
  /**
   *
   * @type {string}
   * @memberof CalendarList
   */
  id?: string;
  /**
   *
   * @type {boolean}
   * @memberof CalendarList
   */
  primary?: boolean;
}
/**
 *
 * @export
 * @interface ErrorsInner
 */
export interface ErrorsInner {
  /**
   *
   * @type {string}
   * @memberof ErrorsInner
   */
  domain?: string;
  /**
   *
   * @type {string}
   * @memberof ErrorsInner
   */
  reason?: string;
}
/**
 *
 * @export
 * @interface Events
 */
export interface Events {
  /**
   *
   * @type {string}
   * @memberof Events
   */
  kind?: string;
  /**
   *
   * @type {string}
   * @memberof Events
   */
  etag?: string;
  /**
   *
   * @type {string}
   * @memberof Events
   */
  updated?: string;
  /**
   *
   * @type {string}
   * @memberof Events
   */
  summary?: string;
  /**
   *
   * @type {string}
   * @memberof Events
   */
  id?: string;
  /**
   *
   * @type {EventsStart}
   * @memberof Events
   */
  start?: EventsStart;
  /**
   *
   * @type {EventsStart}
   * @memberof Events
   */
  end?: EventsStart;
}
/**
 *
 * @export
 * @interface EventsStart
 */
export interface EventsStart {
  /**
   *
   * @type {string}
   * @memberof EventsStart
   */
  date?: string;
  /**
   *
   * @type {string}
   * @memberof EventsStart
   */
  dateTime?: string;
}
/**
 *
 * @export
 * @interface GetCalendarEvents200Response
 */
export interface GetCalendarEvents200Response {
  /**
   *
   * @type {string}
   * @memberof GetCalendarEvents200Response
   */
  kind?: string;
  /**
   *
   * @type {string}
   * @memberof GetCalendarEvents200Response
   */
  etag?: string;
  /**
   *
   * @type {string}
   * @memberof GetCalendarEvents200Response
   */
  summary?: string;
  /**
   *
   * @type {string}
   * @memberof GetCalendarEvents200Response
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof GetCalendarEvents200Response
   */
  updated?: string;
  /**
   *
   * @type {string}
   * @memberof GetCalendarEvents200Response
   */
  timeZone?: string;
  /**
   *
   * @type {string}
   * @memberof GetCalendarEvents200Response
   */
  nextPageToken?: string;
  /**
   *
   * @type {string}
   * @memberof GetCalendarEvents200Response
   */
  nextSyncToken?: string;
  /**
   *
   * @type {Array<Events>}
   * @memberof GetCalendarEvents200Response
   */
  items?: Array<Events>;
}
/**
 *
 * @export
 * @interface GetCalendarList200Response
 */
export interface GetCalendarList200Response {
  /**
   *
   * @type {string}
   * @memberof GetCalendarList200Response
   */
  kind?: string;
  /**
   *
   * @type {string}
   * @memberof GetCalendarList200Response
   */
  etag?: string;
  /**
   *
   * @type {string}
   * @memberof GetCalendarList200Response
   */
  nextPageToken?: string;
  /**
   *
   * @type {string}
   * @memberof GetCalendarList200Response
   */
  nextSyncToken?: string;
  /**
   *
   * @type {Array<CalendarList>}
   * @memberof GetCalendarList200Response
   */
  items?: Array<CalendarList>;
}
/**
 *
 * @export
 * @interface GetFreeBusy200Response
 */
export interface GetFreeBusy200Response {
  /**
   *
   * @type {string}
   * @memberof GetFreeBusy200Response
   */
  kind?: string;
  /**
   *
   * @type {string}
   * @memberof GetFreeBusy200Response
   */
  timeMin?: string;
  /**
   *
   * @type {string}
   * @memberof GetFreeBusy200Response
   */
  timeMax?: string;
  /**
   *
   * @type {{ [key: string]: Keys; }}
   * @memberof GetFreeBusy200Response
   */
  calendars?: { [key: string]: Keys };
}
/**
 *
 * @export
 * @interface GetFreeBusyRequest
 */
export interface GetFreeBusyRequest {
  /**
   *
   * @type {string}
   * @memberof GetFreeBusyRequest
   */
  timeMin: string;
  /**
   *
   * @type {string}
   * @memberof GetFreeBusyRequest
   */
  timeMax: string;
  /**
   *
   * @type {string}
   * @memberof GetFreeBusyRequest
   */
  timeZone?: string;
  /**
   *
   * @type {Array<GetFreeBusyRequestItemsInner>}
   * @memberof GetFreeBusyRequest
   */
  items?: Array<GetFreeBusyRequestItemsInner>;
}
/**
 *
 * @export
 * @interface GetFreeBusyRequestItemsInner
 */
export interface GetFreeBusyRequestItemsInner {
  /**
   *
   * @type {string}
   * @memberof GetFreeBusyRequestItemsInner
   */
  id?: string;
}
/**
 *
 * @export
 * @interface Keys
 */
export interface Keys {
  /**
   *
   * @type {Array<ErrorsInner>}
   * @memberof Keys
   */
  errors?: Array<ErrorsInner>;
  /**
   *
   * @type {Array<BusyInner>}
   * @memberof Keys
   */
  busy?: Array<BusyInner>;
}
/**
 *
 * @export
 * @interface Userinfo
 */
export interface Userinfo {
  /**
   *
   * @type {string}
   * @memberof Userinfo
   */
  email?: string;
  /**
   *
   * @type {string}
   * @memberof Userinfo
   */
  family_name?: string;
  /**
   *
   * @type {string}
   * @memberof Userinfo
   */
  given_name?: string;
  /**
   *
   * @type {string}
   * @memberof Userinfo
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof Userinfo
   */
  locale?: string;
  /**
   *
   * @type {string}
   * @memberof Userinfo
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof Userinfo
   */
  picture?: string;
  /**
   *
   * @type {boolean}
   * @memberof Userinfo
   */
  verified_email?: boolean;
}

/**
 * CalendarApi - axios parameter creator
 * @export
 */
export const CalendarApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary カレンダーのイベント内容を取得
     * @param {string} calendarId
     * @param {string} [orderBy] パラメータの詳細 - startTime : 開始順 - updated : 更新順
     * @param {string} [timeMin]
     * @param {string} [timeMax]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCalendarEvents: async (
      calendarId: string,
      orderBy?: string,
      timeMin?: string,
      timeMax?: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'calendarId' is not null or undefined
      assertParamExists('getCalendarEvents', 'calendarId', calendarId);
      const localVarPath = `/calendar/v3/calendars/{calendarId}/events`.replace(
        `{${'calendarId'}}`,
        encodeURIComponent(String(calendarId))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication Bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (orderBy !== undefined) {
        localVarQueryParameter['orderBy'] = orderBy;
      }

      if (timeMin !== undefined) {
        localVarQueryParameter['timeMin'] =
          (timeMin as any) instanceof Date
            ? (timeMin as any).toISOString()
            : timeMin;
      }

      if (timeMax !== undefined) {
        localVarQueryParameter['timeMax'] =
          (timeMax as any) instanceof Date
            ? (timeMax as any).toISOString()
            : timeMax;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary ユーザのカレンダーIDを取得
     * @param {string} [minAccessRole]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCalendarList: async (
      minAccessRole?: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/calendar/v3/users/me/calendarList`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication Bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (minAccessRole !== undefined) {
        localVarQueryParameter['minAccessRole'] = minAccessRole;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary カレンダーの空き予定を検索
     * @param {GetFreeBusyRequest} [getFreeBusyRequest] パラメータの詳細 - timeMin : 開始時刻（RFC3339 形式） - timeMax : 終了終了（RFC3339 形式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFreeBusy: async (
      getFreeBusyRequest?: GetFreeBusyRequest,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/calendar/v3/freeBusy`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication Bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        getFreeBusyRequest,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * CalendarApi - functional programming interface
 * @export
 */
export const CalendarApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = CalendarApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @summary カレンダーのイベント内容を取得
     * @param {string} calendarId
     * @param {string} [orderBy] パラメータの詳細 - startTime : 開始順 - updated : 更新順
     * @param {string} [timeMin]
     * @param {string} [timeMax]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCalendarEvents(
      calendarId: string,
      orderBy?: string,
      timeMin?: string,
      timeMax?: string,
      options?: RawAxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<GetCalendarEvents200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getCalendarEvents(
          calendarId,
          orderBy,
          timeMin,
          timeMax,
          options
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['CalendarApi.getCalendarEvents']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary ユーザのカレンダーIDを取得
     * @param {string} [minAccessRole]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCalendarList(
      minAccessRole?: string,
      options?: RawAxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<GetCalendarList200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getCalendarList(
        minAccessRole,
        options
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['CalendarApi.getCalendarList']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary カレンダーの空き予定を検索
     * @param {GetFreeBusyRequest} [getFreeBusyRequest] パラメータの詳細 - timeMin : 開始時刻（RFC3339 形式） - timeMax : 終了終了（RFC3339 形式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getFreeBusy(
      getFreeBusyRequest?: GetFreeBusyRequest,
      options?: RawAxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<GetFreeBusy200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getFreeBusy(
        getFreeBusyRequest,
        options
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['CalendarApi.getFreeBusy']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath);
    },
  };
};

/**
 * CalendarApi - factory interface
 * @export
 */
export const CalendarApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = CalendarApiFp(configuration);
  return {
    /**
     *
     * @summary カレンダーのイベント内容を取得
     * @param {string} calendarId
     * @param {string} [orderBy] パラメータの詳細 - startTime : 開始順 - updated : 更新順
     * @param {string} [timeMin]
     * @param {string} [timeMax]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCalendarEvents(
      calendarId: string,
      orderBy?: string,
      timeMin?: string,
      timeMax?: string,
      options?: any
    ): AxiosPromise<GetCalendarEvents200Response> {
      return localVarFp
        .getCalendarEvents(calendarId, orderBy, timeMin, timeMax, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary ユーザのカレンダーIDを取得
     * @param {string} [minAccessRole]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCalendarList(
      minAccessRole?: string,
      options?: any
    ): AxiosPromise<GetCalendarList200Response> {
      return localVarFp
        .getCalendarList(minAccessRole, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary カレンダーの空き予定を検索
     * @param {GetFreeBusyRequest} [getFreeBusyRequest] パラメータの詳細 - timeMin : 開始時刻（RFC3339 形式） - timeMax : 終了終了（RFC3339 形式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFreeBusy(
      getFreeBusyRequest?: GetFreeBusyRequest,
      options?: any
    ): AxiosPromise<GetFreeBusy200Response> {
      return localVarFp
        .getFreeBusy(getFreeBusyRequest, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * CalendarApi - object-oriented interface
 * @export
 * @class CalendarApi
 * @extends {BaseAPI}
 */
export class CalendarApi extends BaseAPI {
  /**
   *
   * @summary カレンダーのイベント内容を取得
   * @param {string} calendarId
   * @param {string} [orderBy] パラメータの詳細 - startTime : 開始順 - updated : 更新順
   * @param {string} [timeMin]
   * @param {string} [timeMax]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CalendarApi
   */
  public getCalendarEvents(
    calendarId: string,
    orderBy?: string,
    timeMin?: string,
    timeMax?: string,
    options?: RawAxiosRequestConfig
  ) {
    return CalendarApiFp(this.configuration)
      .getCalendarEvents(calendarId, orderBy, timeMin, timeMax, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary ユーザのカレンダーIDを取得
   * @param {string} [minAccessRole]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CalendarApi
   */
  public getCalendarList(
    minAccessRole?: string,
    options?: RawAxiosRequestConfig
  ) {
    return CalendarApiFp(this.configuration)
      .getCalendarList(minAccessRole, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary カレンダーの空き予定を検索
   * @param {GetFreeBusyRequest} [getFreeBusyRequest] パラメータの詳細 - timeMin : 開始時刻（RFC3339 形式） - timeMax : 終了終了（RFC3339 形式）
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CalendarApi
   */
  public getFreeBusy(
    getFreeBusyRequest?: GetFreeBusyRequest,
    options?: RawAxiosRequestConfig
  ) {
    return CalendarApiFp(this.configuration)
      .getFreeBusy(getFreeBusyRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }
}

/**
 * UserinfoApi - axios parameter creator
 * @export
 */
export const UserinfoApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserinfo: async (
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/userinfo/v2/me`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication Bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * UserinfoApi - functional programming interface
 * @export
 */
export const UserinfoApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = UserinfoApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getUserinfo(
      options?: RawAxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Userinfo>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getUserinfo(
        options
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['UserinfoApi.getUserinfo']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath);
    },
  };
};

/**
 * UserinfoApi - factory interface
 * @export
 */
export const UserinfoApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = UserinfoApiFp(configuration);
  return {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserinfo(options?: any): AxiosPromise<Userinfo> {
      return localVarFp
        .getUserinfo(options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * UserinfoApi - object-oriented interface
 * @export
 * @class UserinfoApi
 * @extends {BaseAPI}
 */
export class UserinfoApi extends BaseAPI {
  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserinfoApi
   */
  public getUserinfo(options?: RawAxiosRequestConfig) {
    return UserinfoApiFp(this.configuration)
      .getUserinfo(options)
      .then((request) => request(this.axios, this.basePath));
  }
}
