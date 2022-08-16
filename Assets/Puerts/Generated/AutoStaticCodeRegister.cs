using System;

namespace PuertsStaticWrap
{
    public static class AutoStaticCodeRegister
    {
        public static void Register(Puerts.JsEnv jsEnv)
        {
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Debug), UnityEngine_Debug_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Vector3), UnityEngine_Vector3_Wrap.GetRegisterInfo);
                
                UnityEngine_Vector3_Wrap.InitBlittableCopy(jsEnv);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Vector2), UnityEngine_Vector2_Wrap.GetRegisterInfo);
                
                UnityEngine_Vector2_Wrap.InitBlittableCopy(jsEnv);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Quaternion), UnityEngine_Quaternion_Wrap.GetRegisterInfo);
                
                UnityEngine_Quaternion_Wrap.InitBlittableCopy(jsEnv);
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Time), UnityEngine_Time_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Transform), UnityEngine_Transform_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Component), UnityEngine_Component_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.GameObject), UnityEngine_GameObject_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Object), UnityEngine_Object_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Delegate), System_Delegate_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Object), System_Object_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Array), System_Array_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.ParticleSystem), UnityEngine_ParticleSystem_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Canvas), UnityEngine_Canvas_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Behaviour), UnityEngine_Behaviour_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.MonoBehaviour), UnityEngine_MonoBehaviour_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Resources), UnityEngine_Resources_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Application), UnityEngine_Application_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.EventSystems.UIBehaviour), UnityEngine_EventSystems_UIBehaviour_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Selectable), UnityEngine_UI_Selectable_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Button), UnityEngine_UI_Button_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Button.ButtonClickedEvent), UnityEngine_UI_Button_ButtonClickedEvent_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Events.UnityEvent), UnityEngine_Events_UnityEvent_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.InputField), UnityEngine_UI_InputField_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Toggle), UnityEngine_UI_Toggle_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Toggle.ToggleEvent), UnityEngine_UI_Toggle_ToggleEvent_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Image), UnityEngine_UI_Image_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.UI.Text), UnityEngine_UI_Text_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.RectTransform), UnityEngine_RectTransform_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.SpriteRenderer), UnityEngine_SpriteRenderer_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Networking.UnityWebRequestAsyncOperation), UnityEngine_Networking_UnityWebRequestAsyncOperation_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Collections.Generic.List<string>), System_Collections_Generic_List_1_System_String__Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(System.Collections.Generic.Dictionary<string, string>), System_Collections_Generic_Dictionary_2_System_String_System_String__Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.PlayerPrefs), UnityEngine_PlayerPrefs_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Networking.UnityWebRequestTexture), UnityEngine_Networking_UnityWebRequestTexture_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Networking.UnityWebRequest), UnityEngine_Networking_UnityWebRequest_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Networking.DownloadHandlerTexture), UnityEngine_Networking_DownloadHandlerTexture_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Networking.DownloadHandler), UnityEngine_Networking_DownloadHandler_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Networking.UploadHandlerRaw), UnityEngine_Networking_UploadHandlerRaw_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.WWWForm), UnityEngine_WWWForm_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Networking.DownloadHandlerBuffer), UnityEngine_Networking_DownloadHandlerBuffer_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Animator), UnityEngine_Animator_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.BoxCollider), UnityEngine_BoxCollider_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.Collider), UnityEngine_Collider_Wrap.GetRegisterInfo);
                
                
            jsEnv.AddLazyStaticWrapLoader(typeof(UnityEngine.AnimatorStateInfo), UnityEngine_AnimatorStateInfo_Wrap.GetRegisterInfo);
                
                
        }
    }
}