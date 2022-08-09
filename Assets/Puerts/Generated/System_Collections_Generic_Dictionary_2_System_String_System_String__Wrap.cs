﻿
using System;
using Puerts;

namespace PuertsStaticWrap
{
    public static class System_Collections_Generic_Dictionary_2_System_String_System_String__Wrap
    {

        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8ConstructorCallback))]
        private static IntPtr Constructor(IntPtr isolate, IntPtr info, int paramLen, long data)
        {
            try
            {

                if (paramLen == 0)
                
                {
            
                    {
                
                        var result = new System.Collections.Generic.Dictionary<string, string>();
                
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(System.Collections.Generic.Dictionary<string, string>), result);
                    
                    }
                
                }
            
                if (paramLen == 1)
                
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetInt32(false);
                    
                        var result = new System.Collections.Generic.Dictionary<string, string>(Arg0);
                
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(System.Collections.Generic.Dictionary<string, string>), result);
                    
                    }
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Collections.Generic.IEqualityComparer<string>), false, false))
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Collections.Generic.IEqualityComparer<string>>(false);
                    
                        var result = new System.Collections.Generic.Dictionary<string, string>(Arg0);
                
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(System.Collections.Generic.Dictionary<string, string>), result);
                    
                    }
                
                }
            
                if (paramLen == 2)
                
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false) && argHelper1.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.NativeObject, typeof(System.Collections.Generic.IEqualityComparer<string>), false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetInt32(false);
                    
                        var Arg1 = argHelper1.Get<System.Collections.Generic.IEqualityComparer<string>>(false);
                    
                        var result = new System.Collections.Generic.Dictionary<string, string>(Arg0, Arg1);
                
                        return Puerts.Utils.GetObjectPtr((int)data, typeof(System.Collections.Generic.Dictionary<string, string>), result);
                    
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to " + typeof(System.Collections.Generic.Dictionary<string, string>).GetFriendlyName() + " constructor");
    
    
            } catch (Exception e) {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
            return IntPtr.Zero;
        }
    
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_Add(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Collections.Generic.Dictionary<string, string>;
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    {
                
                        var Arg0 = argHelper0.GetString(false);
                    
                        var Arg1 = argHelper1.GetString(false);
                    
                        obj.Add(Arg0, Arg1);
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_Clear(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Collections.Generic.Dictionary<string, string>;
        
                {
            
                    {
                
                        obj.Clear();
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_ContainsKey(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Collections.Generic.Dictionary<string, string>;
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    {
                
                        var Arg0 = argHelper0.GetString(false);
                    
                        var result = obj.ContainsKey(Arg0);
                
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
        private static void M_ContainsValue(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Collections.Generic.Dictionary<string, string>;
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    {
                
                        var Arg0 = argHelper0.GetString(false);
                    
                        var result = obj.ContainsValue(Arg0);
                
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
        private static void M_GetEnumerator(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Collections.Generic.Dictionary<string, string>;
        
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
        private static void M_GetObjectData(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Collections.Generic.Dictionary<string, string>;
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Runtime.Serialization.SerializationInfo>(false);
                    
                        var Arg1 = argHelper1.Get<System.Runtime.Serialization.StreamingContext>(false);
                    
                        obj.GetObjectData(Arg0, Arg1);
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_OnDeserialization(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Collections.Generic.Dictionary<string, string>;
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    {
                
                        var Arg0 = argHelper0.Get<System.Object>(false);
                    
                        obj.OnDeserialization(Arg0);
                
                        
                        
                        
                    }
                
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void M_Remove(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Collections.Generic.Dictionary<string, string>;
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    {
                
                        var Arg0 = argHelper0.GetString(false);
                    
                        var result = obj.Remove(Arg0);
                
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
        private static void M_TryGetValue(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Collections.Generic.Dictionary<string, string>;
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    var argHelper1 = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                
                    {
                
                        var Arg0 = argHelper0.GetString(false);
                    
                        var Arg1 = argHelper1.GetString(true);
                    
                        var result = obj.TryGetValue(Arg0, out Arg1);
                
                        argHelper1.SetByRefValue(Arg1);
                        
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
        private static void M_EnsureCapacity(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Collections.Generic.Dictionary<string, string>;
        
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    {
                
                        var Arg0 = argHelper0.GetInt32(false);
                    
                        var result = obj.EnsureCapacity(Arg0);
                
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
        private static void M_TrimExcess(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Collections.Generic.Dictionary<string, string>;
        
                if (paramLen == 0)
            
                {
            
                    {
                
                        obj.TrimExcess();
                
                        
                        
                        return;
                    }
                
                }
            
                if (paramLen == 1)
            
                {
            
                    var argHelper0 = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                
                    if (argHelper0.IsMatch(Puerts.JsValueType.Number, typeof(int), false, false))
                
                    {
                
                        var Arg0 = argHelper0.GetInt32(false);
                    
                        obj.TrimExcess(Arg0);
                
                        
                        
                        return;
                    }
                
                }
            
                Puerts.PuertsDLL.ThrowException(isolate, "invalid arguments to TrimExcess");
        
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_Comparer(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Collections.Generic.Dictionary<string, string>;
                var result = obj.Comparer;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_Count(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Collections.Generic.Dictionary<string, string>;
                var result = obj.Count;
                Puerts.StaticTranslate<int>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_Keys(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Collections.Generic.Dictionary<string, string>;
                var result = obj.Keys;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void G_Values(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Collections.Generic.Dictionary<string, string>;
                var result = obj.Values;
                Puerts.ResultHelper.Set((int)data, isolate, info, result);
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
            
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void GetItem(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Collections.Generic.Dictionary<string, string>;
                var keyHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
        
                if (keyHelper.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, typeof(string), false, false))
                {
                    var key = keyHelper.GetString(false);
                    var result = obj[key];
                    Puerts.StaticTranslate<string>.Set((int)data, isolate, Puerts.NativeValueApi.SetValueToResult, info, result);
                    return;
                }
            
            }
            catch (Exception e)
            {
                Puerts.PuertsDLL.ThrowException(isolate, "c# exception:" + e.Message + ",stack:" + e.StackTrace);
            }
        }
        
        [Puerts.MonoPInvokeCallback(typeof(Puerts.V8FunctionCallback))]
        private static void SetItem(IntPtr isolate, IntPtr info, IntPtr self, int paramLen, long data)
        {
            try
            {
                var obj = Puerts.Utils.GetSelf((int)data, self) as System.Collections.Generic.Dictionary<string, string>;
                var keyHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 0);
                var valueHelper = new Puerts.ArgumentHelper((int)data, isolate, info, 1);
                if (keyHelper.IsMatch(Puerts.JsValueType.NullOrUndefined | Puerts.JsValueType.String, typeof(string), false, false))
                {
                    var key = keyHelper.GetString(false);
                    obj[key] = valueHelper.GetString(false);
                    return;
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
                    { new Puerts.MethodKey { Name = "Add", IsStatic = false}, M_Add },
                    { new Puerts.MethodKey { Name = "Clear", IsStatic = false}, M_Clear },
                    { new Puerts.MethodKey { Name = "ContainsKey", IsStatic = false}, M_ContainsKey },
                    { new Puerts.MethodKey { Name = "ContainsValue", IsStatic = false}, M_ContainsValue },
                    { new Puerts.MethodKey { Name = "GetEnumerator", IsStatic = false}, M_GetEnumerator },
                    { new Puerts.MethodKey { Name = "GetObjectData", IsStatic = false}, M_GetObjectData },
                    { new Puerts.MethodKey { Name = "OnDeserialization", IsStatic = false}, M_OnDeserialization },
                    { new Puerts.MethodKey { Name = "Remove", IsStatic = false}, M_Remove },
                    { new Puerts.MethodKey { Name = "TryGetValue", IsStatic = false}, M_TryGetValue },
                    { new Puerts.MethodKey { Name = "EnsureCapacity", IsStatic = false}, M_EnsureCapacity },
                    { new Puerts.MethodKey { Name = "TrimExcess", IsStatic = false}, M_TrimExcess },

                    { new Puerts.MethodKey { Name = "get_Item", IsStatic = false}, GetItem }
,

                    { new Puerts.MethodKey { Name = "set_Item", IsStatic = false}, SetItem }

                },
                Properties = new System.Collections.Generic.Dictionary<string, Puerts.PropertyRegisterInfo>()
                {
                    
                    {"Comparer", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_Comparer, Setter = null} },

                    {"Count", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_Count, Setter = null} },

                    {"Keys", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_Keys, Setter = null} },

                    {"Values", new Puerts.PropertyRegisterInfo(){ IsStatic = false, Getter = G_Values, Setter = null} }
                },
                LazyMembers = new System.Collections.Generic.List<Puerts.LazyMemberRegisterInfo>()
                {   
                }
            };
        }
    
    }
}
