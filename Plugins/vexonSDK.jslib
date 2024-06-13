mergeInto(LibraryManager.library, {
  GameReady: function () {
    VexonSDK.GameReady();
  },
  Ad: function (type, beforeAd, callback) {
    VexonSDK.AdBreak(type, beforeAd()).then(() => callback());
  },
});
