# faq.html — Frequently Asked Questions

> **How to review:** Add your notes as `> [CHANGE: ...]` blockquotes directly below the text you want to edit, then share this file back.

---

# Frequently Asked Questions

---

## General

**Do you have an Android app?**

Allarise is currently iOS only. Android may be considered in the future.

---

## Pricing & Pro

**What does Pro include?**

Pro unlocks sleep sounds, the Morning Weather card, wallpaper presets, and Home Assistant / MQTT integration.

**What are the Pro pricing options?**

Pro is available as a $0.99/month subscription with a 7-day free trial, or a $6.99 one-time lifetime purchase — both via the App Store.

**How do I restore a previous purchase?**

Go to Settings → Restore Purchases. You must be signed in with the same Apple ID used to make the original purchase.

---

## Alarms

**Will the alarm fire if my phone is on silent / Do Not Disturb?**

Yes. Allarise plays alarms using the media playback channel, which is independent of the ringer switch — so silent mode won't stop it. Focus modes can suppress notification-based alarms, so you should allow Allarise as a Focus exception if you use them.

**Will the alarm fire if the app is closed or the phone is restarted?**

Yes. Allarise automatically registers a system-level backup alarm through iOS. If the app isn't running, this backup fires at your ringer volume. For custom volume, missions, and MQTT triggers, keep the app running in the background.

**What are missions?**

Missions are tasks you must complete before your alarm dismisses — solving a math problem, a phone shake challenge, or triggering a Home Assistant action. They prevent you from dismissing your alarm while still half-asleep.

---

## Home Assistant & MQTT

**Do I need Home Assistant to use Allarise?**

No. Home Assistant integration is completely optional. Allarise works as a standalone alarm app.

**What MQTT broker does Allarise work with?**

Any standard MQTT broker over TCP or TLS. Most users use the Mosquitto add-on built into Home Assistant.

**Can I control multiple phones from one Home Assistant instance?**

Yes. Give each phone a unique Device Name in the MQTT settings — each phone gets its own set of HA entities.

---

## Sleep Sounds

**Will sleep sounds keep playing with the screen off?**

Yes. Sleep sounds use the iOS media playback channel and continue with the screen locked. You can control playback from the lock screen or Control Center.

**Can I set sleep sounds to turn off automatically?**

Yes. Choose a stop time as a fixed clock time or a countdown duration. Sounds fade out and stop automatically.

---

**Questions?** Contact us at support@domoretech.net

