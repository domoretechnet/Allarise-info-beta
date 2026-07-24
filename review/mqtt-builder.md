# mqtt-builder.html — MQTT Payload Builder

> **How to review:** Add your notes as `> [CHANGE: ...]` blockquotes directly below the text you want to edit, then share this file back.

---

# MQTT Payload Builder

Build and test MQTT commands for Allarise — interactive payload generator for your Home Assistant automations.

---

## Navigation Sections

**Alarm Management**
- Create Alarm
- Update Alarm
- Delete Alarm

**Commands**
- Create Command
- Delete Command

**Dashboard**
- Trigger Alert
- Dashboard Actions
- Per-Alarm Actions

**Ambient**
- Sleep Sounds

---

## Global Configuration

| Field | Default |
|---|---|
| Topic Prefix | `allarise` |
| Device Name | `iphone` |

Current topic is displayed live as you type.

---

## Create Alarm

**Required**
- Time (24h or 12h format)

**Basic Settings**
- Alarm Name
- Enabled toggle
- Recurring Days

**Audio**
- Sound ID
- Volume (0–100)
- Vibrate
- Fade-in Duration

**Snooze**
- Duration
- Max Count
- Gesture (Tap / Hold / Home Assistant / Disabled)
- Hold Duration

**Skip**
- Gesture
- Hold Duration

**Mission — Shake**
- Difficulty
- Count
- Duration
- Intensity

**Mission — Math**
- Difficulty
- Problem Count

**Mission — Home Assistant**
- Snooze Mode
- Fallback

**Mission — Alert**
*(no additional fields)*

**Alarm Screen**
- Notes
- Commands
- Swipe Left Command
- Swipe Right Command
- Wallpaper Preset ID
- Morning Weather toggle
- Ephemeral toggle
- MQTT ID

---

## Update Alarm

Two modes:

- **By Index** — target a specific alarm slot number
- **By Alarm Name** — target by the alarm's label

All fields are optional — leave blank to skip that field.

---

## Output

The builder generates:
- Real-time JSON payload preview
- Home Assistant YAML automation action you can paste directly

