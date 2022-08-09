
using System;
using Puerts;

namespace PuertsStaticWrap
{
    public static class UnityEngine_AnimatorStateInfo_Wrap
    {

        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {

                {
            
                    {
                
                        var result = new UnityEngine.AnimatorStateInfo();
                
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(UnityEngine.AnimatorStateInfo), result);
                    
                    }
                
                }
            
    
            } catch (Exception e) {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
            return IntPtr.Zero;
        }
    
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_IsName(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.AnimatorStateInfo)Puerts.Utils.GetSelf((int)data, self);
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    {
                
                        var Arg0 = argHelper0.GetString(false);
                    
                        var result = obj.IsName(Arg0);
                
                        Puerts.StaticTranslate<bool>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_IsTag(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.AnimatorStateInfo)Puerts.Utils.GetSelf((int)data, self);
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    {
                
                        var Arg0 = argHelper0.GetString(false);
                    
                        var result = obj.IsTag(Arg0);
                
                        Puerts.StaticTranslate<bool>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
                        Puerts.Utils.SetSelf((int)data, self, obj);
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_fullPathHash(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.AnimatorStateInfo)Puerts.Utils.GetSelf((int)data, self);
                var result = obj.fullPathHash;
                Puerts.StaticTranslate<int>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_shortNameHash(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.AnimatorStateInfo)Puerts.Utils.GetSelf((int)data, self);
                var result = obj.shortNameHash;
                Puerts.StaticTranslate<int>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_normalizedTime(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.AnimatorStateInfo)Puerts.Utils.GetSelf((int)data, self);
                var result = obj.normalizedTime;
                Puerts.StaticTranslate<float>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_length(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.AnimatorStateInfo)Puerts.Utils.GetSelf((int)data, self);
                var result = obj.length;
                Puerts.StaticTranslate<float>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_speed(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.AnimatorStateInfo)Puerts.Utils.GetSelf((int)data, self);
                var result = obj.speed;
                Puerts.StaticTranslate<float>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_speedMultiplier(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.AnimatorStateInfo)Puerts.Utils.GetSelf((int)data, self);
                var result = obj.speedMultiplier;
                Puerts.StaticTranslate<float>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_tagHash(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.AnimatorStateInfo)Puerts.Utils.GetSelf((int)data, self);
                var result = obj.tagHash;
                Puerts.StaticTranslate<int>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_loop(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.AnimatorStateInfo)Puerts.Utils.GetSelf((int)data, self);
                var result = obj.loop;
                Puerts.StaticTranslate<bool>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
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
                    { new Puerts.MethodKey { Name = "IsName", IsStatic = false}, M_IsName },
                    { new Puerts.MethodKey { Name = "IsTag", IsStatic = false}, M_IsTag }
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    
                    {"fullPathHash", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_fullPathHash, Setter = null} },

                    {"shortNameHash", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_shortNameHash, Setter = null} },

                    {"normalizedTime", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_normalizedTime, Setter = null} },

                    {"length", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_length, Setter = null} },

                    {"speed", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_speed, Setter = null} },

                    {"speedMultiplier", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_speedMultiplier, Setter = null} },

                    {"tagHash", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_tagHash, Setter = null} },

                    {"loop", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_loop, Setter = null} }
                },
                LazyMembers = new System.Collections.Generic.List<Puerts.LazyMemberRegisterInfo>()
                {   
                }
            };
        }
    
    }
}
