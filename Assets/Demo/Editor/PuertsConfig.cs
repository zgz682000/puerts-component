using System.Collections;

using System;
using System.Collections.Generic;
using System.Reflection;
using Puerts;
using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.UI;

[Configure]
public class PuertsConfig
{

    [CodeOutputDirectory]
    static string OutputDirectory
    {
        get
        {
            return Application.dataPath + "/Puerts/Generated/";
        }
    }

    [Binding]
    static IEnumerable<Type> Bindings
    {
        get
        {
            return new List<Type>{
                typeof(Debug),
                typeof(Vector3),
                typeof(Vector2),
                typeof(Quaternion),
                typeof(Time),
                typeof(Transform),
                typeof(Component),
                typeof(GameObject),
                typeof(UnityEngine.Object),
                typeof(Delegate),
                typeof(System.Object),
                typeof(System.Array),
                typeof(System.Action),
                typeof(ParticleSystem),
                typeof(Canvas),
                typeof(RenderMode),
                typeof(Behaviour),
                typeof(MonoBehaviour),
                typeof(Resources),

                typeof(Application),
                typeof(UnityEngine.EventSystems.UIBehaviour),
                typeof(UnityEngine.UI.Selectable),
                typeof(UnityEngine.UI.Button),
                typeof(UnityEngine.UI.Button.ButtonClickedEvent),
                typeof(UnityEngine.Events.UnityEvent),
                typeof(UnityEngine.UI.InputField),
                typeof(UnityEngine.UI.Toggle),
                typeof(UnityEngine.UI.Toggle.ToggleEvent),
                typeof(UnityEngine.UI.Image),
                typeof(UnityEngine.UI.Text),
                typeof(UnityEngine.RectTransform),
                typeof(UnityEngine.SpriteRenderer),
                typeof(UnityWebRequestAsyncOperation),
                typeof(List<string>),
                typeof(Dictionary<string,string>),
                typeof(PlayerPrefs),
                typeof(UnityWebRequestTexture),
                typeof(UnityWebRequest),
                typeof(DownloadHandlerTexture),
                typeof(DownloadHandler),
                typeof(UploadHandlerRaw),
                typeof(WWWForm),
                typeof(DownloadHandlerBuffer),
                typeof(Animator),
                typeof(BoxCollider),
                typeof(Collider),
                typeof(AnimatorStateInfo),
            };
        }
    }

    [Typing]
    static IEnumerable<Type> Typings
    {
        get
        {
            var types = new List<Type>();
            types.AddRange(Assembly.Load("Assembly-CSharp").GetExportedTypes());
            types.AddRange(new List<Type>(){
                typeof(Camera),
                typeof(Touch),
                typeof(HorizontalLayoutGroup),
                typeof(UnityEngine.UI.Graphic),
                typeof(UnityEngine.UI.MaskableGraphic),
                typeof(UnityEngine.UI.Image),
                typeof(Tuple<string,string>),
                typeof(Color),
                typeof(Event),
                typeof(System.Threading.Tasks.TaskCompletionSource<string>),
                typeof(UnityEngine.EventSystems.EventSystem),
                typeof(UnityEngine.Input),
                typeof(UnityEngine.Random),
                typeof(UnityEngine.TextAsset),
                typeof(System.DateTime),
                typeof(TMPro.TextMeshPro),
                typeof(TMPro.TextMeshProUGUI),
                typeof(TMPro.TMP_Text),
                typeof(UnityEngine.Events.UnityEvent<bool>),
                typeof(Sprite),
                typeof(Rect),
                typeof(Texture2D),
                typeof(Texture),
                typeof(Screen),
                typeof(UnityEngine.UI.LayoutRebuilder),
                typeof(ImageConversion),
                typeof(UnityEngine.SystemInfo),
                typeof(System.Text.UTF8Encoding),
                typeof(System.Text.Encoding),
                typeof(Hashtable),
                typeof(UnityEngine.Shader),
                typeof(Material),
                typeof(MeshRenderer),
                typeof(Renderer),
                typeof(AudioSource),
                typeof(AudioListener)
            });
            return types;
        }
    }

    [BlittableCopy]
    static IEnumerable<Type> Blittables
    {
        get
        {
            return new List<Type>()
            {
                typeof(Vector3),
                typeof(Vector2),
                typeof(Quaternion),
            };
        }
    }

    [Filter]
    static bool FilterMethods(System.Reflection.MemberInfo mb)
    {
        // 排除 MonoBehaviour.runInEditMode, 在 Editor 环境下可用发布后不存在
        if (mb.DeclaringType == typeof(MonoBehaviour) && mb.Name == "runInEditMode")
        {
            return true;
        }
        else if (mb.DeclaringType == typeof(UnityEngine.UI.Text) && mb.Name == "OnRebuildRequested")
        {
            return true;
        }

        return false;
    }
}