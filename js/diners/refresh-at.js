/* FILES: refresh-at.js
 * --------------------
 * Takes in a javascript Date Object and refreshes
 * the page when that date and time is reached.
 * For the page to be in sync with the server and 
 * for the refresh to occur simultaneously around
 * the world, a UTC date object should be given.
 *
 * USAGE:
 * ------
 * Date object format:
 * new Date(year, month, day, hours, minutes, seconds, milliseconds)
 * 
 * SITE USAGE:
 * -----------
 * Used on the special sales page to refresh the page
 * when the sale starts.
 *
 */

function refreshAt(date) {
	var DAY_MS = 86400000;
	var now = new Date();
	var timeout = date.getTime() - now.getTime();
	

	// Set the refresh if it's less than a day away
	if (timeout > 0 && timeout < DAY_MS) {

		// Delay the timeout by 0.5s to account for bug where refresh happens too early
		timeout += 500;

		// Set the timeout for the refresh
		window.setTimeout(refreshWindow, timeout);
	}
}

// Refresh window function
function refreshWindow() {
	window.location.reload(true);
}