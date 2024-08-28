import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name WE Cap Inbox
 * @description
 * This plugin provides functionalities to manage notifications in your app.
 *
 * @usage
 * ```typescript
 * import { WECapInbox } from '@awesome-cordova-plugins/we-cap-inbox';
 *
 * constructor(private wECapInbox: WECapInbox) { }
 *
 * ...
 *
 * this.wECapInbox.getNotificationCount()
 *   .then((count: number) => console.log(count))
 *   .catch((error: string) => console.error(error));
 * ```
 */
export declare class WECapInboxOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Resets the notification count.
     * @returns {Promise<void>}
     */
    resetNotificationCount(): Promise<void>;
    /**
     * Retrieves the count of notifications.
     * @param {function} successCallback
     * @param {function} errorCallback
     * @returns {Promise<number>} - The count of notifications.
     */
    getNotificationCount(successCallback: (count: String) => void, errorCallback: (error: string) => void): Promise<any>;
    /**-
     * Sets WebEngage SDK configuration
     * @param {JsonObject | null} offset - Optional offset for notifications
     * @param {function} successCallback
     * @param {function} errorCallback
     * @returns {Promise<any>}
     */
    getNotificationList(offset: JsonObject | null, successCallback: (notifications: NotificationResponse) => void, errorCallback: (error: string) => void): Promise<any>;
    /**
     * Marks a specific notification as read.
     * @param {JsonObject} notificationObject - The notification to mark as read.
     * @returns {Promise<void>}
     */
    markRead(notificationObject: JsonObject): Promise<void>;
    /**
     * Marks a specific notification as unread.
     * @param {JsonObject} notificationObject - The notification to mark as unread.
     * @returns {Promise<void>}
     */
    markUnread(notificationObject: JsonObject): Promise<void>;
    /**
     * Tracks a click event on a notification.
     * @param {JsonObject} notificationObject - The notification that was clicked.
     * @returns {Promise<void>}
     */
    trackClick(notificationObject: JsonObject): Promise<void>;
    /**
     * Tracks the view event of a notification.
     * @param {JsonObject} notificationObject - The notification that was viewed.
     * @returns {Promise<void>}
     */
    trackView(notificationObject: JsonObject): Promise<void>;
    /**
     * Marks a specific notification as deleted.
     * @param {JsonObject} notificationObject - The notification to delete.
     * @returns {Promise<void>}
     */
    markDelete(notificationObject: JsonObject): Promise<void>;
    /**
     * Marks all notifications as read.
     * @param {JsonArray} notificationList - An array of notification identifiers to mark as read.
     * @returns {Promise<void>}
     */
    readAll(notificationList: JsonArray): Promise<void>;
    /**
     * Marks all notifications as unread.
     * @param {JsonArray} notificationList - An array of notification identifiers to mark as unread.
     * @returns {Promise<void>}
     */
    unReadAll(notificationList: JsonArray): Promise<void>;
    /**
     * Deletes all notifications.
     * @param {JsonArray} notificationList - An array of notification identifiers to delete.
     * @returns {Promise<void>}
     */
    deleteAll(notificationList: JsonArray): Promise<void>;
}
export declare type JsonValue = string | number | boolean | null | JsonObject | JsonArray;
export declare type NotificationResponse = {
    hasNext: boolean;
    messageList: JsonArray;
};
export declare type JsonObject = {
    [key: string]: JsonValue;
};
export declare type JsonArray = JsonValue[];

export declare const WECapInbox: WECapInboxOriginal;