



using System;
using System.Collections.Generic;
using UnityEngine;

namespace Puerts.Component {

    public interface ITsTransporterHolder {
        TsTransporter Transporter {
            get;
        }
        void Init();
    }

    public class TsTransporter
    {
        private delegate void TransporterInit(string moduleName, TsTransporter transporter, List<Tuple<string, object>> args);
        private delegate void TransporterClear(string moduleName, TsTransporter transporter);
        public delegate object Hook(params object[] args);
        private string _tsModulePath;
        private int _jsEnvIdx = -1;
        private Dictionary<string, Hook> _hooks = new Dictionary<string, Hook>();
        
        public TsTransporter(string tsModulePath, List<Tuple<string, object>> args, int jsEnvIdx = 0){
            if (string.IsNullOrEmpty(tsModulePath)){
                throw new Exception("Transporter tsModulePath is empty");
            }
            if (jsEnvIdx >= JsEnv.jsEnvs.Count){
                throw new Exception("jsEnv " + jsEnvIdx + " Not Exist");
            }
            var jsEnv = JsEnv.jsEnvs[jsEnvIdx];
            if (jsEnv == null){
                throw new Exception("jsEnv " + jsEnvIdx + " Disposed");
            }
            _jsEnvIdx = jsEnvIdx;
            _tsModulePath = tsModulePath;
            var hookHandlerInit = jsEnv.ExecuteModule<TransporterInit>("puerts-component/transporter-init", "default");
            hookHandlerInit(_tsModulePath, this, args);
        }

        public void RegisterHook(string hookName, Hook hook){
            _hooks.Add(hookName, hook);
        }

        public T InvokeHook<T>(string hookName, params object[] args){
            var jsEnv = JsEnv.jsEnvs[_jsEnvIdx];
            if (jsEnv == null){
                Debug.LogWarning("jsEnv " + _jsEnvIdx + " Disposed");
                return default(T);
            }
            if (!_hooks.ContainsKey(hookName)){
                Debug.LogWarning("hookName not exist: " + hookName);
                return default(T);
            }
            return (T)_hooks[hookName](args);
        }

        public void InvokeHook(string hookName, params object[] args){
            var jsEnv = JsEnv.jsEnvs[_jsEnvIdx];
            if (jsEnv == null){
                Debug.LogWarning("jsEnv " + _jsEnvIdx + " Disposed");
                return;
            }
            if (!_hooks.ContainsKey(hookName)){
                Debug.LogWarning("hookName not exist: " + hookName);
                return;
            }
            _hooks[hookName](args);
        }

        public bool ContainsHook(string hookName){
            return _hooks.ContainsKey(hookName);
        }

        public void Clear(){
            var jsEnv = JsEnv.jsEnvs[_jsEnvIdx];
            if (jsEnv == null){
                Debug.LogWarning("jsEnv " + _jsEnvIdx + " Disposed");
                return;
            }
            var hookHandlerClear = jsEnv.ExecuteModule<TransporterClear>("puerts-component/transporter-clear", "default");
            hookHandlerClear(_tsModulePath, this);
        }
    }
}