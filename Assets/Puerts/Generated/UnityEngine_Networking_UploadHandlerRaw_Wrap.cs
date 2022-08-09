
using System;
using Puerts;

namespace PuertsStaticWrap
{
    public static class UnityEngine_Networking_UploadHandlerRaw_Wrap
    {

        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {

                if (paramLen == 1)
                
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(byte[]), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<byte[]>(false);
                    
                        var result = new UnityEngine.Networking.UploadHandlerRaw(Arg0);
                
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(UnityEngine.Networking.UploadHandlerRaw), result);
                    
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(Unity.Collections.NativeArray<byte>.ReadOnly), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<Unity.Collections.NativeArray<byte>.ReadOnly>(false);
                    
                        var result = new UnityEngine.Networking.UploadHandlerRaw(Arg0);
                
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(UnityEngine.Networking.UploadHandlerRaw), result);
                    
                    }
                
                }
            
                if (paramLen == 2)
                
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(Unity.Collections.NativeArray<byte>), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Boolean, typeof(bool), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<Unity.Collections.NativeArray<byte>>(false);
                    
                        var Arg1 = argHelper1.GetBoolean(false);
                    
                        var result = new UnityEngine.Networking.UploadHandlerRaw(Arg0, Arg1);
                
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(UnityEngine.Networking.UploadHandlerRaw), result);
                    
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to " + typeof(UnityEngine.Networking.UploadHandlerRaw).GetFriendlyName() + " constructor");
    
    
            } catch (Exception e) {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
            return IntPtr.Zero;
        }
    
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_Dispose(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as UnityEngine.Networking.UploadHandlerRaw;
        
                {
            
                    {
                
                        obj.Dispose();
                
                        
                        
                        
                    }
                
                }
            
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
                    { new Puerts.MethodKey { Name = "Dispose", IsStatic = false}, M_Dispose }
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
