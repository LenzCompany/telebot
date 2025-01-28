/*
 *  Your bot settings here
 */

global.botName = 'LenzyBotz-ID' // Bot Name
global.banner = './src/settings/banner.jpg' // Can use path, can also use link
global.token = '7542078168:AAH-05sY4yiSW2y2eLf2X_fRrnoZ9_70hjA' // Bot Token (Get it from BotFather)
global.ownerUsername = 'ndaa' // Owner Username
global.ownerId = [""] // Owner ID, can add more than 1

global.mess = {
    internalerr: 'Internal server error!',
	owner: 'Owner-only feature!',
	group: 'Use in a group!',
	private: 'Use in a private chat!',
	wait: 'Wait...',
	error: 'Oops, an error occurred',
	done: 'Done!'
}

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
