# privacy.html — Privacy Policy

> **How to review:** Add your notes as `> [CHANGE: ...]` blockquotes directly below the text you want to edit, then share this file back.

---

# Privacy Policy

*Last updated: March 2026*

Allarise is local-first. Your data stays on your device. No analytics, no crash reports sent to us, no ads, no data sold. The only external communication is with Apple's native services (WeatherKit, App Store) and — if you configure it — your own self-hosted Home Assistant MQTT broker.

---

## 1. Who We Are

**Developer:** Domore Technology
**Contact:** privacy@domoretech.net

---

## 2. Data We Collect & Why

### 2.1 Location (optional)

| Data | Destination | Retention |
|---|---|---|
| GPS coordinates | Apple WeatherKit | Memory only — never stored |
| City / region name | Apple MapKit (reverse geocoding) | Memory only — never stored |
| WiFi network name (SSID) | Stored locally only | Local device — never transmitted |

Location is only accessed when you enable the Morning Weather feature or MQTT network detection. It is never stored on disk by Allarise or transmitted to us.

### 2.2 Alarm & App Settings

| Data | Storage | Notes |
|---|---|---|
| Alarm schedules, labels | UserDefaults (local) | Never transmitted |
| App preferences, theme | UserDefaults (local) | Never transmitted |
| MQTT username & password | iOS Keychain | Hardware-encrypted |
| MQTT broker address & port | UserDefaults (local) | Never transmitted |

### 2.3 Home Assistant / MQTT Integration (optional)

If you configure MQTT, Allarise communicates directly with your self-hosted broker. Data published includes alarm state (ringing / snoozed / dismissed), snooze counts, and availability status. External connections use TLS encryption. Internal (LAN) connections support optional TLS.

### 2.4 In-App Purchases

Purchases are handled entirely by Apple StoreKit. We never see your payment details — only a verification token from Apple to confirm a valid purchase.

### 2.5 Diagnostic Logs

Logs are stored on-device only, capped at approximately 10 MB, and auto-purge after 7 days. They are never transmitted automatically. You can optionally share them from Settings, with auto-redaction available for alarm names, MQTT labels, and notification content.

---

## 3. What We Do NOT Collect

- No analytics or telemetry
- No crash reports sent to us
- No advertising identifiers
- No behavioral profiling
- No cross-app tracking
- No email address required
- No account or sign-in
- No device fingerprinting
- No third-party analytics or advertising SDKs
- No data sold to third parties

---

## 4. Third-Party Services

| Service | Provider | Data Sent | Privacy Policy |
|---|---|---|---|
| WeatherKit | Apple Inc. | GPS coordinates | apple.com/legal/privacy |
| MapKit (reverse geocoding) | Apple Inc. | GPS coordinates (anonymised by Apple) | apple.com/legal/privacy |
| App Store / StoreKit | Apple Inc. | Purchase verification token | apple.com/legal/privacy |
| MQTT Broker | Your self-hosted server | Alarm state events, snooze counts | N/A — user controlled |

---

## 5. iOS Permissions

| Permission | When Requested | Used For | Required? |
|---|---|---|---|
| Location (When In Use) | When enabling weather or MQTT network detection | Weather display; WiFi SSID detection | Optional |
| Notifications | First launch or when scheduling an alarm | Alarm alerts, snooze reminders, refresh warnings | Optional (core feature) |
| Background App Refresh | iOS setting (no prompt) | Keep MQTT connection alive; alarm reliability | Optional (recommended) |
| AlarmKit | When creating your first alarm | System-level alarm scheduling | Optional (core feature) |

---

## 6. Data Retention & Deletion

- **Delete the app** — removes all app data, settings, and alarms from your device
- **Diagnostic logs** — auto-purge after 7 days; can be cleared manually in Settings
- **Purchase records** — managed by Apple App Store; unaffected by deleting the app

---

## 7. Children's Privacy

Allarise is not directed at children under 13. The app requires no account, age verification, or personal information.

---

## 8. Changes to This Policy

Updates will be noted in App Store release notes. Continued use of the app constitutes acceptance of the updated policy.

---

## 9. Your Rights

| Right | How to Exercise |
|---|---|
| Access / Export | All data is on your device; export from Settings |
| Correction | Edit alarms and settings directly in the app |
| Deletion | Delete the app, or use Settings to clear individual items |

---

**Contact**

Domore Technology
privacy@domoretech.net

