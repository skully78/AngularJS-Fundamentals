/**
 *
 * Install:
 *      npm install browser-sync
 *
 * Run:
 *      node <server.js>
 *
 * This example will create a server using https using the default information & use the `app` directory as the root
 *
 */

"use strict";

var browserSync = require("browser-sync").create();

browserSync.init({
    server: "./app",
    watch: true
});