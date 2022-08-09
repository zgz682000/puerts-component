
using System;
using Puerts;

namespace PuertsStaticWrap
{
    public static class UnityEngine_Networking_UnityWebRequestTexture_Wrap
    {

        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {

    
            } catch (Exception e) {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
            return IntPtr.Zero;
        }
    
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_GetTexture(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, typeof(string), false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetString(false);
                    
                        var result = UnityEngine.Networking.UnityWebRequestTexture.GetTexture(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Uri), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Uri>(false);
                    
                        var result = UnityEngine.Networking.UnityWebRequestTexture.GetTexture(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, typeof(string), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Boolean, typeof(bool), false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetString(false);
                    
                        var Arg1 = argHelper1.GetBoolean(false);
                    
                        var result = UnityEngine.Networking.UnityWebRequestTexture.GetTexture(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Uri), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Boolean, typeof(bool), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Uri>(false);
                    
                        var Arg1 = argHelper1.GetBoolean(false);
                    
                        var result = UnityEngine.Networking.UnityWebRequestTexture.GetTexture(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to GetTexture");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        public static Puerts.TypeRegisterInfo GetRegisterInfo()
        {
            return new Puerts.TypeRegisterInfo()
            {
                BlittableCopy = false,
                Constructor = Constructor,
                Methods = new System.Collections.Generic.Dictionary<Puerts.MethodKey, Puerts.V8FunctionCallback>()
                {   
                    { new Puerts.MethodKey { Name = "GetTexture", IsStatic = true}, F_GetTexture }
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    
                },
                LazyMembers = new System.Collections.Generic.List<Puerts.LazyMemberRegisterInfo>()
                {   
                }
            };
        }
    
    }
}
