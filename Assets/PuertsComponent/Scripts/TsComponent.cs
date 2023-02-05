

using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

namespace Puerts.Component {
    
    

    public class TsComponent : MonoBehaviour, ITsTransporterHolder, ITsPropertyHolder {

        

        public List<Property> properties;

        public string tsModulePath;

        private TsTransporter _transporter;

        public TsTransporter Transporter {
            get {
                Init();
                return _transporter;
            }
        }

        protected virtual List<Tuple<string, object>> InternalProperties {
            get {
                return new List<Tuple<string, object>>(){
                    new Tuple<string, object>("_gameObject", this.gameObject),
                    new Tuple<string, object>("_transform", this.transform)
                };
            }
        }

        public List<Property> Properties => properties;

        public void Init(string pTsModulePath){
            tsModulePath = pTsModulePath;
            Init();
        }

        public void Init() {
            if (_transporter != null){
                return;
            }
            var convertedProperties = this.ConvertPropertiesValue();
            convertedProperties.AddRange(InternalProperties);
            _transporter = new TsTransporter(tsModulePath, convertedProperties);
        }

        private void Awake() {
            if (string.IsNullOrEmpty(tsModulePath)){
                return;
            }
            Init();
            if (_transporter.ContainsHook("Awake")){
                _transporter.InvokeHook("Awake");
            }
        }

        private void OnEnable() {
            if (_transporter.ContainsHook("OnEnable")){
                _transporter.InvokeHook("OnEnable");
            }
        }

        private void OnDisable() {
            if (_transporter.ContainsHook("OnDisable")){
                _transporter.InvokeHook("OnDisable");
            }
        }

        private void Start()
        {
            if (_transporter.ContainsHook("Start")){
                _transporter.InvokeHook("Start");
            }
        }

        private void OnDestroy()
        {
            if (_transporter.ContainsHook("OnDestroy")){
                _transporter.InvokeHook("OnDestroy");
            }
            _transporter.Clear();
            _transporter = null;
        }
    }
}