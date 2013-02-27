chrome.idle.setDetectionInterval(15);

chrome.idle.onStateChanged.addListener(function(state) {
    console.log(state);
    paths = {
        'active': 'online.png',
        'idle': 'away.png',
        'locked': 'offline.png'
    };
    chrome.browserAction.setIcon({'path': paths[state]});
});
