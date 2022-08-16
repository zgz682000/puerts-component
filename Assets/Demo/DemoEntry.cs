using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Puerts;

public class DemoEntry : MonoBehaviour
{

    private JsEnv _jsEnv;
    
    public GameObject testPrefab;

    // Start is called before the first frame update
    void Start()
    {
        _jsEnv = new JsEnv(new DefaultLoader(), -1);
        _jsEnv.ExecuteModule("index");
    }
}
