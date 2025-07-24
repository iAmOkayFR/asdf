using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Networking;

public class IPCameraViewer : MonoBehaviour
{
    public RawImage cameraDisplay;
    public string streamURL = "http://192.168.1.5:8080/shot.jpg"; // Use your phone's IP address here
    public float refreshRate = 0.05f; // refresh every 0.05 seconds

    void Start()
    {
        StartCoroutine(RefreshCamera());
    }

    IEnumerator RefreshCamera()
    {
        while (true)
        {
            UnityWebRequest www = UnityWebRequestTexture.GetTexture(streamURL);
            yield return www.SendWebRequest();

            if (www.result == UnityWebRequest.Result.Success)
            {
                Texture2D tex = DownloadHandlerTexture.GetContent(www);
                cameraDisplay.texture = tex;
            }

            yield return new WaitForSeconds(refreshRate);
        }
    }
}
