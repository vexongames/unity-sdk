using System.Runtime.InteropServices;
using UnityEngine;

namespace VexonSDK
{
    public static class Instance
    {
        [DllImport("__Internal")]
        private static extern void GameReady();

        public static void Ready()
        {
#if UNITY_WEBGL && !UNITY_EDITOR
            GameReady();
#else
            Debug.Log("VexonSDK: GameReady");
#endif
        }
    }
}