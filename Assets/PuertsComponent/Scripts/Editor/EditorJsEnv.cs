


namespace Puerts.Component {
    public class EditorJsEnv {
        private static int _jsEnvIdx = -1;
        public static JsEnv JsEnv {
            get {
                if (_jsEnvIdx == -1){
                    var jsEnv = new JsEnv();
                    _jsEnvIdx = jsEnv.Index;
                    return jsEnv;
                }
                return JsEnv.jsEnvs[_jsEnvIdx];
            }
        }

        public static void ReloadJsEnv(){
            if (_jsEnvIdx == -1){
                return;
            }
            JsEnv.Dispose();
            _jsEnvIdx = -1;
        }
    }
}