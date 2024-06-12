mergeInto(LibraryManager.library, {
  GameReady: function () {
    VexonSDK.GameReady();
  },
  Ad: function (type, callback) {
    VexonSDK.AdBreak(type, callback);
  },
});
