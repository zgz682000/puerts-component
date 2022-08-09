
using System;
using Puerts;

namespace PuertsStaticWrap
{
    public static class System_Array_Wrap
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
        private static void F_CreateInstance(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen >= 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Type), false, false) && argHelper1.IsMatchParams(Puerts.JsValueType.BigInt, typeof(long), 1, paramLen))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Type>(false);
                    
                        var Arg1 = argHelper1.GetParams<long>(info, 1, paramLen);
                    
                        var result = System.Array.CreateInstance(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Type), false, false) && argHelper1.IsMatchParams(Puerts.JsValueType.Number, typeof(int), 1, paramLen))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Type>(false);
                    
                        var Arg1 = argHelper1.GetParams<int>(info, 1, paramLen);
                    
                        var result = System.Array.CreateInstance(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Type), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Type>(false);
                    
                        var Arg1 = argHelper1.GetInt32(false);
                    
                        var result = System.Array.CreateInstance(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 3)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Type), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Type>(false);
                    
                        var Arg1 = argHelper1.GetInt32(false);
                    
                        var Arg2 = argHelper2.GetInt32(false);
                    
                        var result = System.Array.CreateInstance(Arg0, Arg1, Arg2);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Type), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(int[]), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(int[]), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Type>(false);
                    
                        var Arg1 = argHelper1.Get<int[]>(false);
                    
                        var Arg2 = argHelper2.Get<int[]>(false);
                    
                        var result = System.Array.CreateInstance(Arg0, Arg1, Arg2);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 4)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Type), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false) && argHelper3.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Type>(false);
                    
                        var Arg1 = argHelper1.GetInt32(false);
                    
                        var Arg2 = argHelper2.GetInt32(false);
                    
                        var Arg3 = argHelper3.GetInt32(false);
                    
                        var result = System.Array.CreateInstance(Arg0, Arg1, Arg2, Arg3);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to CreateInstance");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_CopyTo(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Array;
        
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        var Arg1 = argHelper1.GetInt32(false);
                    
                        obj.CopyTo(Arg0, Arg1);
                
                        
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper1.IsMatch(Puerts.JsValueType.BigInt, typeof(long), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        var Arg1 = argHelper1.GetInt64(false);
                    
                        obj.CopyTo(Arg0, Arg1);
                
                        
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to CopyTo");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_Clone(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Array;
        
                {
            
                    {
                
                        var result = obj.Clone();
                
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
        private static void F_BinarySearch(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        var Arg1 = argHelper1.Get<System.Object>(false);
                    
                        var result = System.Array.BinarySearch(Arg0, Arg1);
                
                        Puerts.StaticTranslate<int>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 4)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false) && argHelper3.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        var Arg1 = argHelper1.GetInt32(false);
                    
                        var Arg2 = argHelper2.GetInt32(false);
                    
                        var Arg3 = argHelper3.Get<System.Object>(false);
                    
                        var result = System.Array.BinarySearch(Arg0, Arg1, Arg2, Arg3);
                
                        Puerts.StaticTranslate<int>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 3)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Collections.IComparer), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        var Arg1 = argHelper1.Get<System.Object>(false);
                    
                        var Arg2 = argHelper2.Get<System.Collections.IComparer>(false);
                    
                        var result = System.Array.BinarySearch(Arg0, Arg1, Arg2);
                
                        Puerts.StaticTranslate<int>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 5)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    var argHelper4 = new Puerts.ArgumentHelper((int)data, isolate, info, 4);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false) && argHelper3.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false) && argHelper4.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Collections.IComparer), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        var Arg1 = argHelper1.GetInt32(false);
                    
                        var Arg2 = argHelper2.GetInt32(false);
                    
                        var Arg3 = argHelper3.Get<System.Object>(false);
                    
                        var Arg4 = argHelper4.Get<System.Collections.IComparer>(false);
                    
                        var result = System.Array.BinarySearch(Arg0, Arg1, Arg2, Arg3, Arg4);
                
                        Puerts.StaticTranslate<int>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to BinarySearch");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_Copy(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 3)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper2.IsMatch(Puerts.JsValueType.BigInt, typeof(long), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        var Arg1 = argHelper1.Get<System.Array>(false);
                    
                        var Arg2 = argHelper2.GetInt64(false);
                    
                        System.Array.Copy(Arg0, Arg1, Arg2);
                
                        
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        var Arg1 = argHelper1.Get<System.Array>(false);
                    
                        var Arg2 = argHelper2.GetInt32(false);
                    
                        System.Array.Copy(Arg0, Arg1, Arg2);
                
                        
                        
                        return;
                    }
                
                }
            
                if (paramLen == 5)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    var argHelper4 = new Puerts.ArgumentHelper((int)data, isolate, info, 4);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper1.IsMatch(Puerts.JsValueType.BigInt, typeof(long), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper3.IsMatch(Puerts.JsValueType.BigInt, typeof(long), false, false) && argHelper4.IsMatch(Puerts.JsValueType.BigInt, typeof(long), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        var Arg1 = argHelper1.GetInt64(false);
                    
                        var Arg2 = argHelper2.Get<System.Array>(false);
                    
                        var Arg3 = argHelper3.GetInt64(false);
                    
                        var Arg4 = argHelper4.GetInt64(false);
                    
                        System.Array.Copy(Arg0, Arg1, Arg2, Arg3, Arg4);
                
                        
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper3.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false) && argHelper4.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        var Arg1 = argHelper1.GetInt32(false);
                    
                        var Arg2 = argHelper2.Get<System.Array>(false);
                    
                        var Arg3 = argHelper3.GetInt32(false);
                    
                        var Arg4 = argHelper4.GetInt32(false);
                    
                        System.Array.Copy(Arg0, Arg1, Arg2, Arg3, Arg4);
                
                        
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to Copy");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_GetLongLength(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Array;
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    {
                
                        var Arg0 = argHelper0.GetInt32(false);
                    
                        var result = obj.GetLongLength(Arg0);
                
                        Puerts.StaticTranslate<long>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_GetValue(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Array;
        
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.BigInt, typeof(long), false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetInt64(false);
                    
                        var result = obj.GetValue(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetInt32(false);
                    
                        var result = obj.GetValue(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.BigInt, typeof(long), false, false) && argHelper1.IsMatch(Puerts.JsValueType.BigInt, typeof(long), false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetInt64(false);
                    
                        var Arg1 = argHelper1.GetInt64(false);
                    
                        var result = obj.GetValue(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetInt32(false);
                    
                        var Arg1 = argHelper1.GetInt32(false);
                    
                        var result = obj.GetValue(Arg0, Arg1);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 3)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.BigInt, typeof(long), false, false) && argHelper1.IsMatch(Puerts.JsValueType.BigInt, typeof(long), false, false) && argHelper2.IsMatch(Puerts.JsValueType.BigInt, typeof(long), false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetInt64(false);
                    
                        var Arg1 = argHelper1.GetInt64(false);
                    
                        var Arg2 = argHelper2.GetInt64(false);
                    
                        var result = obj.GetValue(Arg0, Arg1, Arg2);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetInt32(false);
                    
                        var Arg1 = argHelper1.GetInt32(false);
                    
                        var Arg2 = argHelper2.GetInt32(false);
                    
                        var result = obj.GetValue(Arg0, Arg1, Arg2);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen >= 0)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatchParams(Puerts.JsValueType.BigInt, typeof(long), 0, paramLen))
                
                    {
                
                        var Arg0 = argHelper0.GetParams<long>(info, 0, paramLen);
                    
                        var result = obj.GetValue(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                    if (argHelper0.IsMatchParams(Puerts.JsValueType.Number, typeof(int), 0, paramLen))
                
                    {
                
                        var Arg0 = argHelper0.GetParams<int>(info, 0, paramLen);
                    
                        var result = obj.GetValue(Arg0);
                
                        Puerts.ResultHelper.Set((int)data, isolate, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to GetValue");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_IndexOf(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        var Arg1 = argHelper1.Get<System.Object>(false);
                    
                        var result = System.Array.IndexOf(Arg0, Arg1);
                
                        Puerts.StaticTranslate<int>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 3)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        var Arg1 = argHelper1.Get<System.Object>(false);
                    
                        var Arg2 = argHelper2.GetInt32(false);
                    
                        var result = System.Array.IndexOf(Arg0, Arg1, Arg2);
                
                        Puerts.StaticTranslate<int>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 4)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false) && argHelper3.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        var Arg1 = argHelper1.Get<System.Object>(false);
                    
                        var Arg2 = argHelper2.GetInt32(false);
                    
                        var Arg3 = argHelper3.GetInt32(false);
                    
                        var result = System.Array.IndexOf(Arg0, Arg1, Arg2, Arg3);
                
                        Puerts.StaticTranslate<int>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to IndexOf");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_LastIndexOf(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        var Arg1 = argHelper1.Get<System.Object>(false);
                    
                        var result = System.Array.LastIndexOf(Arg0, Arg1);
                
                        Puerts.StaticTranslate<int>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 3)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        var Arg1 = argHelper1.Get<System.Object>(false);
                    
                        var Arg2 = argHelper2.GetInt32(false);
                    
                        var result = System.Array.LastIndexOf(Arg0, Arg1, Arg2);
                
                        Puerts.StaticTranslate<int>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
                        
                        return;
                    }
                
                }
            
                if (paramLen == 4)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false) && argHelper3.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        var Arg1 = argHelper1.Get<System.Object>(false);
                    
                        var Arg2 = argHelper2.GetInt32(false);
                    
                        var Arg3 = argHelper3.GetInt32(false);
                    
                        var result = System.Array.LastIndexOf(Arg0, Arg1, Arg2, Arg3);
                
                        Puerts.StaticTranslate<int>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to LastIndexOf");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_Reverse(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        System.Array.Reverse(Arg0);
                
                        
                        
                        return;
                    }
                
                }
            
                if (paramLen == 3)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        var Arg1 = argHelper1.GetInt32(false);
                    
                        var Arg2 = argHelper2.GetInt32(false);
                    
                        System.Array.Reverse(Arg0, Arg1, Arg2);
                
                        
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to Reverse");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_SetValue(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Array;
        
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false) && argHelper1.IsMatch(Puerts.JsValueType.BigInt, typeof(long), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Object>(false);
                    
                        var Arg1 = argHelper1.GetInt64(false);
                    
                        obj.SetValue(Arg0, Arg1);
                
                        
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Object>(false);
                    
                        var Arg1 = argHelper1.GetInt32(false);
                    
                        obj.SetValue(Arg0, Arg1);
                
                        
                        
                        return;
                    }
                
                }
            
                if (paramLen == 3)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false) && argHelper1.IsMatch(Puerts.JsValueType.BigInt, typeof(long), false, false) && argHelper2.IsMatch(Puerts.JsValueType.BigInt, typeof(long), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Object>(false);
                    
                        var Arg1 = argHelper1.GetInt64(false);
                    
                        var Arg2 = argHelper2.GetInt64(false);
                    
                        obj.SetValue(Arg0, Arg1, Arg2);
                
                        
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Object>(false);
                    
                        var Arg1 = argHelper1.GetInt32(false);
                    
                        var Arg2 = argHelper2.GetInt32(false);
                    
                        obj.SetValue(Arg0, Arg1, Arg2);
                
                        
                        
                        return;
                    }
                
                }
            
                if (paramLen == 4)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false) && argHelper1.IsMatch(Puerts.JsValueType.BigInt, typeof(long), false, false) && argHelper2.IsMatch(Puerts.JsValueType.BigInt, typeof(long), false, false) && argHelper3.IsMatch(Puerts.JsValueType.BigInt, typeof(long), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Object>(false);
                    
                        var Arg1 = argHelper1.GetInt64(false);
                    
                        var Arg2 = argHelper2.GetInt64(false);
                    
                        var Arg3 = argHelper3.GetInt64(false);
                    
                        obj.SetValue(Arg0, Arg1, Arg2, Arg3);
                
                        
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false) && argHelper3.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Object>(false);
                    
                        var Arg1 = argHelper1.GetInt32(false);
                    
                        var Arg2 = argHelper2.GetInt32(false);
                    
                        var Arg3 = argHelper3.GetInt32(false);
                    
                        obj.SetValue(Arg0, Arg1, Arg2, Arg3);
                
                        
                        
                        return;
                    }
                
                }
            
                if (paramLen >= 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false) && argHelper1.IsMatchParams(Puerts.JsValueType.BigInt, typeof(long), 1, paramLen))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Object>(false);
                    
                        var Arg1 = argHelper1.GetParams<long>(info, 1, paramLen);
                    
                        obj.SetValue(Arg0, Arg1);
                
                        
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Any, typeof(System.Object), false, false) && argHelper1.IsMatchParams(Puerts.JsValueType.Number, typeof(int), 1, paramLen))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Object>(false);
                    
                        var Arg1 = argHelper1.GetParams<int>(info, 1, paramLen);
                    
                        obj.SetValue(Arg0, Arg1);
                
                        
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to SetValue");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_Sort(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        System.Array.Sort(Arg0);
                
                        
                        
                        return;
                    }
                
                }
            
                if (paramLen == 3)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        var Arg1 = argHelper1.GetInt32(false);
                    
                        var Arg2 = argHelper2.GetInt32(false);
                    
                        System.Array.Sort(Arg0, Arg1, Arg2);
                
                        
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper2.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Collections.IComparer), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        var Arg1 = argHelper1.Get<System.Array>(false);
                    
                        var Arg2 = argHelper2.Get<System.Collections.IComparer>(false);
                    
                        System.Array.Sort(Arg0, Arg1, Arg2);
                
                        
                        
                        return;
                    }
                
                }
            
                if (paramLen == 2)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Collections.IComparer), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        var Arg1 = argHelper1.Get<System.Collections.IComparer>(false);
                    
                        System.Array.Sort(Arg0, Arg1);
                
                        
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        var Arg1 = argHelper1.Get<System.Array>(false);
                    
                        System.Array.Sort(Arg0, Arg1);
                
                        
                        
                        return;
                    }
                
                }
            
                if (paramLen == 4)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper1.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false) && argHelper3.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Collections.IComparer), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        var Arg1 = argHelper1.GetInt32(false);
                    
                        var Arg2 = argHelper2.GetInt32(false);
                    
                        var Arg3 = argHelper3.Get<System.Collections.IComparer>(false);
                    
                        System.Array.Sort(Arg0, Arg1, Arg2, Arg3);
                
                        
                        
                        return;
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false) && argHelper3.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        var Arg1 = argHelper1.Get<System.Array>(false);
                    
                        var Arg2 = argHelper2.GetInt32(false);
                    
                        var Arg3 = argHelper3.GetInt32(false);
                    
                        System.Array.Sort(Arg0, Arg1, Arg2, Arg3);
                
                        
                        
                        return;
                    }
                
                }
            
                if (paramLen == 5)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    var argHelper4 = new Puerts.ArgumentHelper((int)data, isolate, info, 4);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Array), false, false) && argHelper2.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false) && argHelper3.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false) && argHelper4.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Collections.IComparer), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        var Arg1 = argHelper1.Get<System.Array>(false);
                    
                        var Arg2 = argHelper2.GetInt32(false);
                    
                        var Arg3 = argHelper3.GetInt32(false);
                    
                        var Arg4 = argHelper4.Get<System.Collections.IComparer>(false);
                    
                        System.Array.Sort(Arg0, Arg1, Arg2, Arg3, Arg4);
                
                        
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to Sort");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_GetEnumerator(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Array;
        
                {
            
                    {
                
                        var result = obj.GetEnumerator();
                
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
        private static void M_GetLength(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Array;
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    {
                
                        var Arg0 = argHelper0.GetInt32(false);
                    
                        var result = obj.GetLength(Arg0);
                
                        Puerts.StaticTranslate<int>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_GetLowerBound(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Array;
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    {
                
                        var Arg0 = argHelper0.GetInt32(false);
                    
                        var result = obj.GetLowerBound(Arg0);
                
                        Puerts.StaticTranslate<int>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_GetUpperBound(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Array;
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    {
                
                        var Arg0 = argHelper0.GetInt32(false);
                    
                        var result = obj.GetUpperBound(Arg0);
                
                        Puerts.StaticTranslate<int>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_Clear(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        var Arg1 = argHelper1.GetInt32(false);
                    
                        var Arg2 = argHelper2.GetInt32(false);
                    
                        System.Array.Clear(Arg0, Arg1, Arg2);
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void F_ConstrainedCopy(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    var argHelper2 = new Puerts.ArgumentHelper((int)data, isolate, info, 2);
                
                    var argHelper3 = new Puerts.ArgumentHelper((int)data, isolate, info, 3);
                
                    var argHelper4 = new Puerts.ArgumentHelper((int)data, isolate, info, 4);
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Array>(false);
                    
                        var Arg1 = argHelper1.GetInt32(false);
                    
                        var Arg2 = argHelper2.Get<System.Array>(false);
                    
                        var Arg3 = argHelper3.GetInt32(false);
                    
                        var Arg4 = argHelper4.GetInt32(false);
                    
                        System.Array.ConstrainedCopy(Arg0, Arg1, Arg2, Arg3, Arg4);
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_Initialize(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Array;
        
                {
            
                    {
                
                        obj.Initialize();
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_LongLength(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Array;
                var result = obj.LongLength;
                Puerts.StaticTranslate<long>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_IsFixedSize(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Array;
                var result = obj.IsFixedSize;
                Puerts.StaticTranslate<bool>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_IsReadOnly(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Array;
                var result = obj.IsReadOnly;
                Puerts.StaticTranslate<bool>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_IsSynchronized(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Array;
                var result = obj.IsSynchronized;
                Puerts.StaticTranslate<bool>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_SyncRoot(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Array;
                var result = obj.SyncRoot;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_Length(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Array;
                var result = obj.Length;
                Puerts.StaticTranslate<int>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_Rank(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Array;
                var result = obj.Rank;
                Puerts.StaticTranslate<int>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
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
                    { new Puerts.MethodKey { Name = "CreateInstance", IsStatic = true}, F_CreateInstance },
                    { new Puerts.MethodKey { Name = "CopyTo", IsStatic = false}, M_CopyTo },
                    { new Puerts.MethodKey { Name = "Clone", IsStatic = false}, M_Clone },
                    { new Puerts.MethodKey { Name = "BinarySearch", IsStatic = true}, F_BinarySearch },
                    { new Puerts.MethodKey { Name = "Copy", IsStatic = true}, F_Copy },
                    { new Puerts.MethodKey { Name = "GetLongLength", IsStatic = false}, M_GetLongLength },
                    { new Puerts.MethodKey { Name = "GetValue", IsStatic = false}, M_GetValue },
                    { new Puerts.MethodKey { Name = "IndexOf", IsStatic = true}, F_IndexOf },
                    { new Puerts.MethodKey { Name = "LastIndexOf", IsStatic = true}, F_LastIndexOf },
                    { new Puerts.MethodKey { Name = "Reverse", IsStatic = true}, F_Reverse },
                    { new Puerts.MethodKey { Name = "SetValue", IsStatic = false}, M_SetValue },
                    { new Puerts.MethodKey { Name = "Sort", IsStatic = true}, F_Sort },
                    { new Puerts.MethodKey { Name = "GetEnumerator", IsStatic = false}, M_GetEnumerator },
                    { new Puerts.MethodKey { Name = "GetLength", IsStatic = false}, M_GetLength },
                    { new Puerts.MethodKey { Name = "GetLowerBound", IsStatic = false}, M_GetLowerBound },
                    { new Puerts.MethodKey { Name = "GetUpperBound", IsStatic = false}, M_GetUpperBound },
                    { new Puerts.MethodKey { Name = "Clear", IsStatic = true}, F_Clear },
                    { new Puerts.MethodKey { Name = "ConstrainedCopy", IsStatic = true}, F_ConstrainedCopy },
                    { new Puerts.MethodKey { Name = "Initialize", IsStatic = false}, M_Initialize }
                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    
                    {"LongLength", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_LongLength, Setter = null} },

                    {"IsFixedSize", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_IsFixedSize, Setter = null} },

                    {"IsReadOnly", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_IsReadOnly, Setter = null} },

                    {"IsSynchronized", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_IsSynchronized, Setter = null} },

                    {"SyncRoot", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_SyncRoot, Setter = null} },

                    {"Length", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_Length, Setter = null} },

                    {"Rank", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_Rank, Setter = null} }
                },
                LazyMembers = new System.Collections.Generic.List<Puerts.LazyMemberRegisterInfo>()
                {   
                }
            };
        }
    
    }
}
