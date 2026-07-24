# home-assistant.html — Home Assistant Setup Guide

> **How to review:** Add your notes as `> [CHANGE: ...]` blockquotes directly below the text you want to edit, then share this file back.

---

# Connect Allarise to Home Assistant.

Control and monitor your alarms from Home Assistant — dismiss, snooze, trigger full-screen alerts, and automate your morning routine. All over MQTT.

---

## Step 1 — Install the HACS integration

**Via HACS (recommended)**

1. In Home Assistant, go to HACS → Integrations → ⋮ → Custom repositories
2. Add `https://github.com/domoretechnet/allarise-hacs` and select Integration as the category
3. Find Allarise in the HACS store and click Download
4. Restart Home Assistant

**Manual install**

1. Copy `custom_components/allarise/` into your HA `config/custom_components/` directory
2. Restart Home Assistant

HACS must be installed in your Home Assistant instance. If you haven't set it up yet, visit hacs.xyz for installation instructions.

---

## Step 2 — Set up your MQTT broker

Create a dedicated MQTT user for the Allarise app and restrict it to only the topics it needs. This keeps the app isolated from the rest of your broker.

**Step 2a — Create a dedicated user**

Open Settings → Add-ons → Mosquitto broker → Configuration and add a login under the `logins` key:

```yaml
logins:
  - username: allarise
    password: "your_secure_password"
customize:
  active: true
  folder: mosquitto
```

Save and restart the Mosquitto add-on after making this change.

**Step 2b — Create the ACL files**

With `customize.active: true` set above, Mosquitto loads `.conf` files from `/share/mosquitto/`. You need two files. Create them using the File Editor add-on or SSH:

File 1 (`/share/mosquitto/acl.conf`) — tells Mosquitto where the ACL list lives:

```
acl_file /share/mosquitto/accesscontrollist
```

File 2 (`/share/mosquitto/accesscontrollist`) — the actual access control list. Home Assistant requires the `addons` and `homeassistant` users to have unrestricted access, or the broker will malfunction. Replace `YOUR_MQTT_USER` with the username you created in Step 2a:

```
user addons
topic readwrite #

user homeassistant
topic readwrite #

user YOUR_MQTT_USER
topic readwrite allarise/#
topic read homeassistant/status
```

The `addons` and `homeassistant` entries are required by Home Assistant — omitting them breaks the broker and prevents the dashboard from updating. Replace `YOUR_MQTT_USER` with the exact username you set in the Mosquitto `logins` config and in the Allarise app settings. The username is case-sensitive. **Restart the Mosquitto add-on** to apply the ACL.

The `/share` folder is accessible via SMB or on the host filesystem at `/usr/share/hassio/share`.

| Direction | Topics covered |
|---|---|
| App → Broker (publish) | `allarise/{device}/sensor/…` · `allarise/{device}/alarm/…` · `allarise/{device}/availability` · `allarise/{device}/arm/state` |
| App ← Broker (subscribe) | `allarise/{device}/command/…` · `allarise/{device}/alarm/{n}/command/…` · `allarise/{device}/arm/command` |

**Custom prefix?** If you use a different topic prefix in the app (e.g. `myhome`), replace `allarise/#` with `myhome/#` in the ACL file.

---

## Step 3 — Connect the Allarise app

In the Allarise iOS app, go to Settings → MQTT Settings and enter your broker details:

| Field | Value |
|---|---|
| Host | Your Home Assistant IP address or hostname |
| Port | `1883` (plain) or `8883` (TLS) |
| Username | `allarise` |
| Password | The password you set in Step 2a |
| Topic Prefix | `allarise` (default) |
| Device Name | `iPhone` (default — change to identify multiple phones) |

Use the MQTT Payload Builder to generate and test payloads for any command before wiring up automations.

---

## Step 4 — Add the integration in Home Assistant

1. Go to Settings → Devices & Services → Add Integration
2. Search for Allarise and select it
3. Enter the Device Name and MQTT Topic Prefix — these must exactly match what is set in the Allarise app

**Defaults:** Device Name = `iPhone` · Topic Prefix = `allarise`

You can add multiple devices by adding one integration entry per phone.

---

## Step 5 — What you get

Once connected, the integration creates a main dashboard device and one sub-device per alarm — each packed with entities you can use in automations, dashboards, and scripts.

### Sensors
Alarm state, name, fire time, snooze count, app version, sleep sound volume, and more.

### Buttons
Dismiss, snooze, skip, unskip, kill snoozed — on the dashboard device and per-alarm.

### Switches
Master arm toggle, per-alarm enable/disable, alert vibrate, and alert media loop.

### Media Player
Play audio or TTS directly to the phone via `play_media` and `media_announce`.

### Notify
Send a full-screen alert to the phone from any HA automation using the notify service.

### Per-Alarm Devices
Each alarm gets its own HA device with full control — time, days, sound, snooze, and more.

---

## Reference

### Entities & Devices

**Dashboard sensors**

| Sensor | Description |
|---|---|
| Alarm State | `idle` / `ringing` / `snoozed` / `dismissed` |
| Alarm Name | Name of the currently ringing or next upcoming alarm |
| Alarm Mission | Mission type required to dismiss (`shake`, `math`, `ha`, `none`) |
| Alarm Fire Time | Scheduled fire time of the active or next alarm |
| Alarm Snooze Fire Time | When a snoozed alarm will re-fire |
| Alarm Sound | Sound ID playing for the active alarm |
| Alarm Volume | Volume % for the active alarm |
| Alarm Vibrate | Whether vibration is enabled |
| Alarm Fade In | Whether fade-in is active |
| Alarm Notes | Notes attached to the active alarm |
| Alarm ID | MQTT index of the active alarm |
| Alarm Snooze Count | Number of times the current alarm has been snoozed |
| Snoozes Remaining | Snoozes left before alarm is force-dismissed |
| Alarm Count | Number of active (enabled) alarms |
| App Version | Allarise app version string |
| Broker Connection | MQTT connection state reported by the app |
| Alert Volume | Volume used for HA-triggered alert alarms (%) |
| Alert Sound | Default sound for HA alert alarms |
| Alert Vibrate | Whether HA alert alarms vibrate |
| Alert Loop Media | Whether media audio loops during HA alerts |
| Alert Loop Delay | Seconds between media audio loops |
| Quick Alarm | Active quick alarm state |
| Quick Alarm Fire Time | When the quick alarm fires |
| Quick Alarm Label | Label of the quick alarm |
| Quick Alarm Count | Number of active quick alarms |
| Sleep Sound Volume | Current sleep sounds volume (%) |

**Binary sensor**

| Sensor | Description |
|---|---|
| App Online | `on` when the iOS app is connected to the broker |

**Per-alarm sensors**

For each alarm you create in the app, a dedicated HA device is created containing:

`Name` · `Enabled` · `State` · `Fire Time` · `Snooze Fire Time` · `Days` · `Mission` · `Sound` · `Snoozes` · `Volume` · `Vibrate` · `Fade In` · `Notes` · `Sort Order` · `Commands` · `Swipe Left/Right Commands`

**Buttons**

| Button | Action |
|---|---|
| Dismiss Alarm | Dismiss the ringing or snoozed alarm |
| Snooze Alarm | Snooze the ringing alarm |
| Skip Alarm | Skip the next upcoming fire for the active alarm |
| Unskip Alarm | Remove the skip flag from the next alarm |
| Delete Next Alarm | Delete the next alarm in the queue |
| Kill Snoozed Alarm | Immediately end a snoozed alarm session |
| Sleep Sound Stop / Pause / Resume | Control sleep sounds playback |

Per-alarm buttons: `Dismiss` · `Snooze` · `Skip` · `Unskip` · `Kill Snoozed` · `Delete`

**Switches**

| Switch | Description |
|---|---|
| Arm | Master arm/disarm toggle (HA is source of truth) |
| Alarm N — Enabled | Enable or disable a specific alarm |
| Alert Vibrate | Toggle vibration for HA alert alarms |
| Alert Loop Media | Toggle media looping for HA alert alarms |

**Media Player**

```yaml
service: media_player.play_media
target:
  entity_id: media_player.allarise_iphone
data:
  media_content_id: media-source://tts/cloud?message=Good+morning
  media_content_type: music
```

**Notify**

```yaml
service: notify.allarise_iphone
data:
  title: "Door Alert"
  message: "Front door opened"
  data:
    sound: "Perimeter_Breach"
    volume: 0.8
    media_url: "http://your-ha.local:8123/local/doorbell.mp3"
```

---

### Services

**allarise.update_alarm** — Modify an alarm by index or name. All fields except `device_name` are optional.

```yaml
service: allarise.update_alarm
data:
  device_name: iPhone
  name: "Work Alarm"
  time: "07:30"
  enabled: true
  days: [1, 2, 3, 4, 5]
  sound: "Alarm_Clock"
  volume: 0.8
  snooze_duration: 9
  max_snooze_count: 3
  notes: "Team meeting at 9am"
  morning_weather: true
```

**allarise.trigger_alert** — Show a full-screen alert alarm on the phone.

```yaml
service: allarise.trigger_alert
data:
  device_name: iPhone
  title: "Motion Detected"
  message: "Front camera triggered"
  sound: "Perimeter_Breach"
  volume: 0.9
  media_url: "http://ha.local:8123/local/alert.mp3"
```

**allarise.dismiss** — Dismiss the currently ringing or snoozed alarm.

```yaml
service: allarise.dismiss
data:
  device_name: iPhone
```

**allarise.snooze** — Snooze the currently ringing alarm.

```yaml
service: allarise.snooze
data:
  device_name: iPhone
```

**allarise.skip** — Skip the next fire of the next upcoming alarm.

```yaml
service: allarise.skip
data:
  device_name: iPhone
```

---

### Example Automations

**Re-enable a work alarm on Sunday evening**

```yaml
automation:
  alias: "Re-enable work alarm on Sunday"
  trigger:
    - platform: time
      at: "20:00:00"
  condition:
    - condition: time
      weekday: [sun]
  action:
    - service: allarise.update_alarm
      data:
        name: "Work Alarm"
        enabled: true
```

**Alert phone when front door opens at night**

```yaml
automation:
  alias: "Front door night alert"
  trigger:
    - platform: state
      entity_id: binary_sensor.front_door
      to: "on"
  condition:
    - condition: time
      after: "22:00:00"
      before: "06:00:00"
  action:
    - service: allarise.trigger_alert
      data:
        title: "Front Door"
        message: "Front door opened"
        sound: "Perimeter_Breach"
        volume: 1.0
```

**Auto-snooze when leaving the bedroom**

```yaml
automation:
  alias: "Auto snooze when leaving bedroom"
  trigger:
    - platform: state
      entity_id: sensor.allarise_iphone_alarm_state
      to: "ringing"
  action:
    - delay: "00:00:30"
    - condition: state
      entity_id: binary_sensor.bedroom_presence
      state: "off"
    - service: allarise.snooze
      data:
        device_name: iPhone
```

---

### MQTT Topic Structure

All topics follow the pattern `{prefix}/{device}/…`. With default settings, `prefix` is `allarise` and `device` is `iphone`.

| Direction | Topic pattern | Description |
|---|---|---|
| App → HA | `allarise/iphone/sensor/{key}` | Dashboard sensor values |
| App → HA | `allarise/iphone/alarm/{n}/{key}` | Per-alarm sensor values |
| App → HA | `allarise/iphone/availability` | App online/offline |
| App → HA | `allarise/iphone/arm/state` | Arm state |
| HA → App | `allarise/iphone/command/{cmd}` | Dashboard commands |
| HA → App | `allarise/iphone/alarm/{n}/command/{cmd}` | Per-alarm commands |
| HA → App | `allarise/iphone/arm/command` | Arm command |
