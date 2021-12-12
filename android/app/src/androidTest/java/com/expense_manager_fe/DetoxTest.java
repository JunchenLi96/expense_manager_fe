// Replace "com.your project name" here if the app's package name is changed
package com.expense_manager_fe;

import com.wix.detox.Detox;
import com.wix.detox.config.DetoxConfig;

import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;

import androidx.test.ext.junit.runners.AndroidJUnit4;
import androidx.test.filters.LargeTest;
import androidx.test.rule.ActivityTestRule;

@RunWith(AndroidJUnit4.class)
@LargeTest
public class DetoxTest {
    @Rule
    public ActivityTestRule<MainActivity> mActivityRule = new ActivityTestRule<>(MainActivity.class, false, false);

    @Test
    public void runDetoxTests() {
        // This is optional - in case you've decided to integrate TestButler
        // See https://github.com/wix/Detox/blob/master/docs/Introduction.Android.md#8-test-butler-support-optional
        //TestButlerProbe.assertReadyIfInstalled();

        DetoxConfig detoxConfig = new DetoxConfig();
        detoxConfig.idlePolicyConfig.masterTimeoutSec = 90;
        detoxConfig.idlePolicyConfig.idleResourceTimeoutSec = 60;
        detoxConfig.rnContextLoadTimeoutSec = (com.expense_manager_fe.BuildConfig.DEBUG ? 1800 : 600);

        Detox.runTests(mActivityRule, detoxConfig);
    }
}