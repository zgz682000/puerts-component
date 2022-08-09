

using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

namespace Puerts.Component {
    
    

    public class TsComponent : MonoBehaviour, ITsTransporterHolder {

        public enum PropertyValueType {
            NONE = 1,
            OBJECT,
            STRING,
            LIST
        }

        [Serializable]
        public class PropertyValue {
            public int valueTypeId;
            public UnityEngine.Object objValue;
            public string primitiveValue;
            public List<PropertyValue> listValue;
        }

        [Serializable]
        public class Property
        {
            public string name;
            public PropertyValue value;
        }

        public List<Property> properties;

        public string tsModulePath;

        private TsTransporter _transporter;

        public TsTransporter Transporter => _transporter;

        public List<string> hookNames;

        protected virtual List<Tuple<string, object>> InternalArgs {
            get {
                return new List<Tuple<string, object>>(){
                    new Tuple<string, object>("gameObject", this.gameObject),
                    new Tuple<string, object>("transform", this.transform)
                };
            }
        }

        protected virtual List<string> InternalHookNames {
            get {
                return new List<string>(){
                    "OnEnable",
                    "OnDisable",
                    "Awake",
                    "Start",
                    "OnDestroy"
                };
            }
        }

        public void Init(string pTsModulePath){
            tsModulePath = pTsModulePath;
            Init();
        }

        private object ConvertValue(PropertyValue value){
            if (value.valueTypeId == (int)PropertyValueType.OBJECT) {
                if (value.objValue is ITsTransporterHolder){
                    (value.objValue as ITsTransporterHolder).Init();
                }
                return value.objValue;
            }
            else if (value.valueTypeId == (int)PropertyValueType.STRING){
                return value.primitiveValue;
            }
            else if (value.valueTypeId == (int)PropertyValueType.LIST){
                return value.listValue.ConvertAll(e=>ConvertValue(e));
            }
            return null;
        }

        public void Init() {
            if (_transporter != null){
                return;
            }
            var convertedProperties = properties.ConvertAll(e=>{
                return new Tuple<string, object>(e.name, ConvertValue(e.value));;
            });
            convertedProperties.AddRange(InternalArgs);
            var tsHookNames = hookNames.Concat(InternalHookNames).ToList();
            _transporter = new TsTransporter(tsModulePath, convertedProperties, tsHookNames);
        }

        private void Awake() {
            if (string.IsNullOrEmpty(tsModulePath)){
                return;
            }
            Init();
            _transporter.InvokeHook("Awake");
        }

        private void OnEnable() {
            _transporter.InvokeHook("OnEnable");
        }

        private void OnDisable() {
            _transporter.InvokeHook("OnDisable");
        }

        private void Start()
        {
            _transporter.InvokeHook("Start");
        }

        private void OnDestroy()
        {
            _transporter.InvokeHook("OnDestroy");
            _transporter.Clear();
            _transporter = null;
        }
    }
}