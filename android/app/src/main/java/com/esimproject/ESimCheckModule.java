package com.nativebridge;

import android.content.Context;
import android.os.Build;
import android.telephony.TelephonyManager;
import android.telephony.euicc.EuiccManager;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
public class ESimCheckModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;
    ESimCheckModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }
    @Override
    public String getName() {
        return "ESimCheckModule";
    }
    @ReactMethod
    public void eSimCheck(Callback callback) {
        EuiccManager mgr = null;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            mgr = (EuiccManager) reactContext.getSystemService(Context.EUICC_SERVICE);
        }
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            if (mgr == null || !mgr.isEnabled()) {
                Log.d("No", "showMessage: false");
                callback.invoke(false);
            } else {
                Log.d("Yes", "True");
                callback.invoke(true);
            }
        }
    }
}
