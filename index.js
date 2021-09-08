const { Plugin } = require('powercord/entities')

var running = false

module.exports = class NSFWBypass extends Plugin {
    startPlugin() {
        running = true

        const forever = () => {
            if (running) {
                var currentUser = Object.values(webpackJsonp.push([[],{"":(e,t,r)=>{t.cache=r.c}},[[""]]]).cache).find(e=>e.exports&&e.exports.default&&void 0!==e.exports.default.getCurrentUser).exports.default.getCurrentUser()
                currentUser["nsfwAllowed"] = true
            }
            setTimeout(() => {forever()}, 1000)
        }
        setTimeout(() => {forever()}, 1000)
    }

    pluginWillUnload() {
        running = false
    }
}