
using System;
using Puerts;

namespace PuertsStaticWrap
{
    public static class UnityEngine_Quaternion_Wrap
    {

        static UnityEngine.Quaternion HeapValue;
    
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        unsafe private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {

                if (paramLen == 4)
                
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, typeof(float), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, typeof(float), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, typeof(float), false, false) && argHelper3.IsMatch(Puerts.JsValueType.Number, typeof(float), false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetFloat(false);
                    
                        var Arg1 = argHelper1.GetFloat(false);
                    
                        var Arg2 = argHelper2.GetFloat(false);
                    
                        var Arg3 = argHelper3.GetFloat(false);
                    
                        HeapValue = new UnityEngine.Quaternion(Arg0, Arg1, Arg2, Arg3);
                 
                        fixed (UnityEngine.Quaternion* result = &HeapValue)
                        {
                            return new IntPtr(result);
                        }
                    
                    }
                
                }
            
                if (paramLen == 0)
                
                {
            
                    {
                
                        HeapValue = new UnityEngine.Quaternion();
                 
                        fixed (UnityEngine.Quaternion* result = &HeapValue)
                        {
                            return new IntPtr(result);
                        }
                    
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to " + typeof(UnityEngine.Quaternion).GetFriendlyName() + " constructor");
    
    
            } catch (Exception e) {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
            return IntPtr.Zero;
        }
    
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        unsafe private static void M_Set(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Quaternion*)self;
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    {
                
                        var Arg0 = argHelper0.GetFloat(false);
                    
                        var Arg1 = argHelper1.GetFloat(false);
                    
                        var Arg2 = argHelper2.GetFloat(false);
                    
                        var Arg3 = argHelper3.GetFloat(false);
                    
                        (*obj).Set(Arg0, Arg1, Arg2, Arg3);
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_Dot(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Quaternion>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Quaternion>(false);
                    
                        var result = UnityEngine.Quaternion.Dot(Arg0, Arg1);
                
                        Puerts.StaticTranslate<float>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        unsafe private static void M_SetLookRotation(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Quaternion*)self;
        
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        (*obj).SetLookRotation(Arg0);
                
                        
                        
                        return;
                    }
                
                }
            
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        (*obj).SetLookRotation(Arg0, Arg1);
                
                        
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to SetLookRotation");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_Angle(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Quaternion>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Quaternion>(false);
                    
                        var result = UnityEngine.Quaternion.Angle(Arg0, Arg1);
                
                        Puerts.StaticTranslate<float>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_Euler(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 3)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, typeof(float), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, typeof(float), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, typeof(float), false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetFloat(false);
                    
                        var Arg1 = argHelper1.GetFloat(false);
                    
                        var Arg2 = argHelper2.GetFloat(false);
                    
                        var result = UnityEngine.Quaternion.Euler(Arg0, Arg1, Arg2);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var result = UnityEngine.Quaternion.Euler(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to Euler");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        unsafe private static void M_ToAngleAxis(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Quaternion*)self;
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    {
                
                        var Arg0 = argHelper0.GetFloat(true);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(true);
                    
                        (*obj).ToAngleAxis(out Arg0, out Arg1);
                
                        argHelper0.SetByRefValue(Arg0);
                        
                        argHelper1.SetByRefValue(Arg1);
                        
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        unsafe private static void M_SetFromToRotation(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Quaternion*)self;
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        (*obj).SetFromToRotation(Arg0, Arg1);
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_RotateTowards(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Quaternion>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Quaternion>(false);
                    
                        var Arg2 = argHelper2.GetFloat(false);
                    
                        var result = UnityEngine.Quaternion.RotateTowards(Arg0, Arg1, Arg2);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_Normalize(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Quaternion>(false);
                    
                        var result = UnityEngine.Quaternion.Normalize(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        unsafe private static void M_Normalize(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Quaternion*)self;
        
                {
            
                    {
                
                        (*obj).Normalize();
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        unsafe private static void M_GetHashCode(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Quaternion*)self;
        
                if (paramLen == 0)
            
                {
            
                    {
                
                        var result = (*obj).GetHashCode();
                
                        Puerts.StaticTranslate<int>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to GetHashCode");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        unsafe private static void M_Equals(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Quaternion*)self;
        
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Object>(false);
                    
                        var result = (*obj).Equals(Arg0);
                
                        Puerts.StaticTranslate<bool>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Quaternion), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Quaternion>(false);
                    
                        var result = (*obj).Equals(Arg0);
                
                        Puerts.StaticTranslate<bool>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to Equals");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        unsafe private static void M_ToString(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Quaternion*)self;
        
                if (paramLen == 0)
            
                {
            
                    {
                
                        var result = (*obj).ToString();
                
                        Puerts.StaticTranslate<string>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, typeof(string), false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetString(false);
                    
                        var result = (*obj).ToString(Arg0);
                
                        Puerts.StaticTranslate<string>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, typeof(string), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.IFormatProvider), false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetString(false);
                    
                        var Arg1 = argHelper1.Get<System.IFormatProvider>(false);
                    
                        var result = (*obj).ToString(Arg0, Arg1);
                
                        Puerts.StaticTranslate<string>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to ToString");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_FromToRotation(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var result = UnityEngine.Quaternion.FromToRotation(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_Inverse(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Quaternion>(false);
                    
                        var result = UnityEngine.Quaternion.Inverse(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_Slerp(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Quaternion>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Quaternion>(false);
                    
                        var Arg2 = argHelper2.GetFloat(false);
                    
                        var result = UnityEngine.Quaternion.Slerp(Arg0, Arg1, Arg2);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_SlerpUnclamped(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Quaternion>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Quaternion>(false);
                    
                        var Arg2 = argHelper2.GetFloat(false);
                    
                        var result = UnityEngine.Quaternion.SlerpUnclamped(Arg0, Arg1, Arg2);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_Lerp(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Quaternion>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Quaternion>(false);
                    
                        var Arg2 = argHelper2.GetFloat(false);
                    
                        var result = UnityEngine.Quaternion.Lerp(Arg0, Arg1, Arg2);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_LerpUnclamped(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Quaternion>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Quaternion>(false);
                    
                        var Arg2 = argHelper2.GetFloat(false);
                    
                        var result = UnityEngine.Quaternion.LerpUnclamped(Arg0, Arg1, Arg2);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_AngleAxis(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    {
                
                        var Arg0 = argHelper0.GetFloat(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var result = UnityEngine.Quaternion.AngleAxis(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_LookRotation(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var Arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var result = UnityEngine.Quaternion.LookRotation(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<UnityEngine.Vector3>(false);
                    
                        var result = UnityEngine.Quaternion.LookRotation(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to LookRotation");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_identity(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                var result = UnityEngine.Quaternion.identity;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        unsafe private static void G_eulerAngles(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Quaternion*)self;
                var result = (*obj).eulerAngles;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        unsafe private static void S_eulerAngles(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Quaternion*)self;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                (*obj).eulerAngles = argHelper.Get<UnityEngine.Vector3>(false);
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        unsafe private static void G_normalized(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Quaternion*)self;
                var result = (*obj).normalized;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        unsafe private static void G_x(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Quaternion*)self;
                var result = (*obj).x;
                Puerts.StaticTranslate<float>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        unsafe private static void S_x(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Quaternion*)self;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                (*obj).x = argHelper.GetFloat(false);
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        unsafe private static void G_y(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Quaternion*)self;
                var result = (*obj).y;
                Puerts.StaticTranslate<float>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        unsafe private static void S_y(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Quaternion*)self;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                (*obj).y = argHelper.GetFloat(false);
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        unsafe private static void G_z(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Quaternion*)self;
                var result = (*obj).z;
                Puerts.StaticTranslate<float>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        unsafe private static void S_z(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Quaternion*)self;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                (*obj).z = argHelper.GetFloat(false);
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        unsafe private static void G_w(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Quaternion*)self;
                var result = (*obj).w;
                Puerts.StaticTranslate<float>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        unsafe private static void S_w(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Quaternion*)self;
                var argHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                (*obj).w = argHelper.GetFloat(false);
                
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_kEpsilon(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
                var result = UnityEngine.Quaternion.kEpsilon;
                Puerts.StaticTranslate<float>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        unsafe private static void GetItem(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Quaternion*)self;
                var keyHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
        
                if (keyHelper.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false))
                {
                    var key = keyHelper.GetInt32(false);
                    var result = (*obj)[key];
                    Puerts.StaticTranslate<float>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
                    return;
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        unsafe private static void SetItem(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = (UnityEngine.Quaternion*)self;
                var keyHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                var valueHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                if (keyHelper.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false))
                {
                    var key = keyHelper.GetInt32(false);
                    (*obj)[key] = valueHelper.GetFloat(false);
                    return;
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void O_op_Multiply(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
        
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Quaternion), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Quaternion), false, false))
                
                    {
                 
                        var arg0 = argHelper0.Get<UnityEngine.Quaternion>(false);
                     
                        var arg1 = argHelper1.Get<UnityEngine.Quaternion>(false);
                    
                        var result = arg0 * arg1;
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Quaternion), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NativeObject, typeof(UnityEngine.Vector3), false, false))
                
                    {
                 
                        var arg0 = argHelper0.Get<UnityEngine.Quaternion>(false);
                     
                        var arg1 = argHelper1.Get<UnityEngine.Vector3>(false);
                    
                        var result = arg0 * arg1;
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to op_Multiply");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void O_op_Equality(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    {
                 
                        var arg0 = argHelper0.Get<UnityEngine.Quaternion>(false);
                     
                        var arg1 = argHelper1.Get<UnityEngine.Quaternion>(false);
                    
                        var result = arg0 == arg1;
                        Puerts.StaticTranslate<bool>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void O_op_Inequality(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    {
                 
                        var arg0 = argHelper0.Get<UnityEngine.Quaternion>(false);
                     
                        var arg1 = argHelper1.Get<UnityEngine.Quaternion>(false);
                    
                        var result = arg0 != arg1;
                        Puerts.StaticTranslate<bool>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
                        
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
                BlittableCopy = true,
                Constructor = Constructor,
                Methods = new System.Collections.Generic.Dictionary<Puerts.MethodKey, Puerts.V8FunctionCallback>()
                {   
                    { new Puerts.MethodKey { Name = "Set", IsStatic = false}, M_Set },
                    { new Puerts.MethodKey { Name = "Dot", IsStatic = true}, F_Dot },
                    { new Puerts.MethodKey { Name = "SetLookRotation", IsStatic = false}, M_SetLookRotation },
                    { new Puerts.MethodKey { Name = "Angle", IsStatic = true}, F_Angle },
                    { new Puerts.MethodKey { Name = "Euler", IsStatic = true}, F_Euler },
                    { new Puerts.MethodKey { Name = "ToAngleAxis", IsStatic = false}, M_ToAngleAxis },
                    { new Puerts.MethodKey { Name = "SetFromToRotation", IsStatic = false}, M_SetFromToRotation },
                    { new Puerts.MethodKey { Name = "RotateTowards", IsStatic = true}, F_RotateTowards },
                    { new Puerts.MethodKey { Name = "Normalize", IsStatic = true}, F_Normalize },
                    { new Puerts.MethodKey { Name = "Normalize", IsStatic = false}, M_Normalize },
                    { new Puerts.MethodKey { Name = "GetHashCode", IsStatic = false}, M_GetHashCode },
                    { new Puerts.MethodKey { Name = "Equals", IsStatic = false}, M_Equals },
                    { new Puerts.MethodKey { Name = "ToString", IsStatic = false}, M_ToString },
                    { new Puerts.MethodKey { Name = "FromToRotation", IsStatic = true}, F_FromToRotation },
                    { new Puerts.MethodKey { Name = "Inverse", IsStatic = true}, F_Inverse },
                    { new Puerts.MethodKey { Name = "Slerp", IsStatic = true}, F_Slerp },
                    { new Puerts.MethodKey { Name = "SlerpUnclamped", IsStatic = true}, F_SlerpUnclamped },
                    { new Puerts.MethodKey { Name = "Lerp", IsStatic = true}, F_Lerp },
                    { new Puerts.MethodKey { Name = "LerpUnclamped", IsStatic = true}, F_LerpUnclamped },
                    { new Puerts.MethodKey { Name = "AngleAxis", IsStatic = true}, F_AngleAxis },
                    { new Puerts.MethodKey { Name = "LookRotation", IsStatic = true}, F_LookRotation },

                    { new Puerts.MethodKey { Name = "get_Item", IsStatic = false}, GetItem }
,

                    { new Puerts.MethodKey { Name = "set_Item", IsStatic = false}, SetItem }
,

                    { new Puerts.MethodKey { Name = "op_Multiply", IsStatic = true}, O_op_Multiply },

                    { new Puerts.MethodKey { Name = "op_Equality", IsStatic = true}, O_op_Equality },

                    { new Puerts.MethodKey { Name = "op_Inequality", IsStatic = true}, O_op_Inequality }
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    
                    {"identity", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_identity, Setter = null} },

                    {"eulerAngles", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_eulerAngles, Setter = S_eulerAngles} },

                    {"normalized", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_normalized, Setter = null} },

                    {"x", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_x, Setter = S_x} },

                    {"y", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_y, Setter = S_y} },

                    {"z", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_z, Setter = S_z} },

                    {"w", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_w, Setter = S_w} },

                    {"kEpsilon", new Puerts.PropertyRegisterInfo(){ IsStatic = true, Getter = G_kEpsilon, Setter = null} }
                },
                LazyMembers = new System.Collections.Generic.List<Puerts.LazyMemberRegisterInfo>()
                {   
                }
            };
        }
    
        unsafe private static UnityEngine.Quaternion StaticGetter(int jsEnvIdx, IntPtr isolate, Puerts.IGetValueFromJs getValueApi, IntPtr value, bool isByRef)
        {
            UnityEngine.Quaternion* result = (UnityEngine.Quaternion*)getValueApi.GetNativeObject(isolate, value, isByRef);
            return result == null ? default(UnityEngine.Quaternion) : *result;
        }

        unsafe private static void StaticSetter(int jsEnvIdx, IntPtr isolate, Puerts.ISetValueToJs setValueApi, IntPtr value, UnityEngine.Quaternion val)
        {
            HeapValue = val;
            fixed (UnityEngine.Quaternion* result = &HeapValue)
            {
                var typeId = Puerts.JsEnv.jsEnvs[jsEnvIdx].GetTypeId(typeof(UnityEngine.Quaternion));
                setValueApi.SetNativeObject(isolate, value, typeId, new IntPtr(result));
            }
        }
        
        public static void InitBlittableCopy(Puerts.JsEnv jsEnv)
        {
            Puerts.StaticTranslate<UnityEngine.Quaternion>.ReplaceDefault(StaticSetter, StaticGetter);
            int jsEnvIdx = jsEnv.Index;
            jsEnv.RegisterGeneralGetSet(typeof(UnityEngine.Quaternion), (int jsEnvIdx, IntPtr isolate, Puerts.IGetValueFromJs getValueApi, IntPtr value, bool isByRef) =>
            {
                return StaticGetter(jsEnvIdx, isolate, getValueApi, value, isByRef);
            }, (int jsEnvIdx, IntPtr isolate, Puerts.ISetValueToJs setValueApi, IntPtr value, object obj) => 
            {
                StaticSetter(jsEnvIdx, isolate, setValueApi, value, (UnityEngine.Quaternion)obj);
            });
        }
        
    }
}
