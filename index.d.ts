import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Webengage
 * @description
 * Awesome Cordova Plugins wrapper that wraps Webengage Cordova plugin for Android and iOS
 * @usage
 * ```typescript
 * import { Webengage, WebengageUser, WebengagePush, WebengageNotification, WebengageJwtManager  } from '@awesome-cordova-plugins/webengage/ngx';
 *
 *
 * constructor(private webengage: Webengage, private webengageUser: WebengageUser, private webengagePush: WebengagePush, private webengageNotification: WebengageNotification ) { }
 *
 * ...
 *
 * this.webengage.engage();
 * ```
 */
export declare class WebengageOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Initializes WebEngage SDK
     * @param {any} [config]
     * @returns {Promise<any>}
     */
    engage(config?: any): Promise<any>;
    /**
     * Starts Tracking Google Advertising ID
     * @returns {Promise<any>}
     */
    startGAIDTracking(): Promise<any>;
    /**
     * Sets WebEngage SDK configuration
     * @param {string} key
     * @param {any} value
     * @returns {Promise<any>}
     */
    options(key: string, value: any): Promise<any>;
    /**
     * Tracks event
     * @param {string} eventName
     * @param {any} [attributes]
     * @returns {Promise<any>}
     */
    track(eventName: string, attributes?: any): Promise<any>;
    /**
     * Tracks screen
     * @param {string} eventName
     * @param screenName
     * @param {any} [screenData]
     * @returns {Promise<any>}
     */
    screen(screenName: string, screenData?: any): Promise<any>;
}
/**
 * @hidden
 */
export declare class WebengageUserOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Logs user in
     * @param {string} userId
     * @returns {Promise<any>}
     */
    login(userId: string, jwtToken?: string): Promise<any>;
    /**
     * Logs user in
     * @param {string} userId
     * @returns {Promise<any>}
     */
    setSecureToken(userId: string, jwtToken: string): Promise<any>;
    /**
     * Logs user out
     * @returns {Promise<any>}
     */
    logout(): Promise<any>;
    /**
     * Sets user attribute
     * @param {string} key
     * @param {any} value
     * @returns {Promise<any>}
     */
    setAttribute(key: string, value: any): Promise<any>;
    /**
     * Sets Device optIn
     * @param {boolean} optIn
     * @returns {Promise<any>}
     */
    setDevicePushOptIn(optIn: boolean): Promise<any>;
    /**
     * Sets user attribute
     * @param {string} channel
     * @param {any} optIn
     * @returns {Promise<any>}
     */
    setUserOptIn(channel: string, optIn: any): Promise<any>;
    /**
     * Sets user location
     * @param {number} latitude
     * @param {number} longitude
     * @returns {Promise<any>}
     */
    setLocation(latitude: number, longitude: number): Promise<any>;
}
/**
 * @hidden
 */
export declare class WebengageJwtManagerOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Callback function is invoked when a Jwt token is clicked
     * @param {any} callback
     * @returns {Promise<any>}
     */
    tokenInvalidatedCallback(callback: any): Promise<any>;
}
/**
 * @hidden
 */
export declare class WebengagePushOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Callback function is invoked when a push notification is clicked
     * @param {any} callback
     * @returns {Promise<any>}
     */
    onClick(callback: any): Promise<any>;
    /**
     * Sets push notification configuration
     * @param {string} key
     * @param {any} value
     * @returns {Promise<any>}
     */
    options(key: string, value: any): Promise<any>;
}
/**
 * @hidden
 */
export declare class WebengageNotificationOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Callback function is invoked when a in-app notification is shown
     * @param {any} callback
     * @returns {Promise<any>}
     */
    onShown(callback: any): Promise<any>;
    /**
     * Callback function is invoked before a in-app notification is shown
     * @param {any} callback
     * @returns {Promise<any>}
     */
    onPrepared(callback: any): Promise<any>;
    /**
     * Callback function is invoked when a in-app notification is clicked
     * @param {any} callback
     * @returns {Promise<any>}
     */
    onClick(callback: any): Promise<any>;
    /**
     * Callback function is invoked when a in-app notification is dismissed
     * @param {any} callback
     * @returns {Promise<any>}
     */
    onDismiss(callback: any): Promise<any>;
    /**
     * Sets in-app notification configuration
     * @param {string} key
     * @param {any} value
     * @returns {Promise<any>}
     */
    options(key: string, value: any): Promise<any>;
}

export declare const Webengage: WebengageOriginal;
export declare const WebengageUser: WebengageUserOriginal;
export declare const WebengageJwtManager: WebengageJwtManagerOriginal;
export declare const WebengagePush: WebengagePushOriginal;
export declare const WebengageNotification: WebengageNotificationOriginal;