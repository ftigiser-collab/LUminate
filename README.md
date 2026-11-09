# LUminate — Verbrennung ≥ 20 % VKOF, Aufnahme bis Tag 5

Adresse: https://ftigiser-collab.github.io/LUminate/

Eigene App (eigenes Symbol, eigener Offline-Speicher, eigenes Update) für die ersten fünf Tage eines großen Verbrennungspatienten auf der V1. Primär für den PC, druckbar auf A4. Arbeitsdokument, keine Patientenakte — Aliasnamen verwenden.

## Neu in 1.3.0 — Algorithmus-Ergebnis gilt, „Gilt jetzt“, Protokoll, Druck/PDF

- **Algorithmus-Ergebnis wird respektiert:** Nach Dobutamin, Noradrenalin, „keine Volumenindikation“ oder „ohne Änderung“ zeigt die Jetzt-Karte bis zur nächsten Reevaluation genau dieses Ergebnis („Laufrate halten“) — kein +20 %/−10 % und keine Aufholrate mehr dazwischen. Die SOP-Spalte der Stundentabelle und das gedruckte Volumenprotokoll zeigen in der Stunde das Algorithmus-Ergebnis.
- **„Gilt jetzt“ statt To-do:** Ziele und Daueranweisungen (Zieldiurese, Reevaluation stündlich, Temperatur ≥ 36 °C, Lagerung, Tubus nicht kürzen, Atemweg, IAP alle 4 h, Ivy-Index, Ziel-Natrium/-Albumin/-BZ/-Hb, Ernährungsziel des Tages, Rate senken h 24–48, bedarfsorientiert ab h 48, Elektrolyte, Sepsis-Trigger, Extubation/Weaning, Strom/CK) stehen als nicht abhakbare Liste oben in der Checkliste — sichtbar, solange sie gelten. Gemischte Punkte sind getrennt (z. B. „Albumin-Perfusor starten“ als To-do, „Ziel-Albumin 2,2–2,7“ als Daueranweisung). Im Ausdruck eigener Abschnitt mit Zeitfenstern.
- **Protokoll (dritter Reiter):** läuft automatisch mit — Laufraten, Albumin, Zusatzgaben, Reevaluationen mit Pfad und Ergebnis, Diurese, Labor, IAP, PiCCO, Rekap, abgehakte Punkte mit Uhrzeit, Änderungen an Stammdaten, entfernte Häkchen, Korrekturen und Löschungen; eigene Notizen mit Uhrzeit. Filter, druckbar (chronologisch, mit Legende).
- **Druck/PDF repariert:** Druckdialog öffnet direkt im Klick; Strg/Cmd+P druckt passend zum offenen Reiter statt einer leeren Seite; Ausweg „Druckansicht im neuen Tab“. PDF über „Als PDF speichern“ im Druckdialog.

## Neu in 1.2.0 — Algorithmus Volumenmanagement und Reevaluations-Erinnerung

- **Klickbarer Algorithmus** (SOP Volumentherapie, Abbildung 1) als Grundlage bis h 72: Ziele (Diurese, HI, ScvO2, Laktat, Rekap; aus den Werten vorbelegt, änderbar) → MAP < 65–70 → ZVD/VCI → Fluid Responsiveness → Fluid Challenge → Echokardiografie (Dysfunktion → Dobutamin; Volumenüberladung → −10 %) bzw. Noradrenalin/Argipressin im MAP-Pfad. Ergebnis als Vorschlag mit Übernehmen-Knopf; Fußnoten und Quellen hinter (i).
- **Umgehen jederzeit:** in der Jetzt-Karte „direkt … ml/h“, im Algorithmus „abweichend entscheiden“ oder „ohne Änderung abschließen“, Laufrate direkt eintragen, „✓ ohne Änderung“ in der Reevaluationszeile.
- **Reevaluation als eigener Punkt:** stündlich fällig, spätestens nach 2 h überfällig (rot, Titelzeile, Browser-Meldung, überfällig alle 2 h erneut). Jede Laufratenänderung zählt als Reevaluation; Ergebnis und Pfad werden beim Patienten protokolliert. Hinweis in der Jetzt-Karte, wenn Browser-Erinnerungen aus sind.
- Klinikname und Originalabbildung sind nicht eingebettet (öffentliches Repo); der Ablauf ist nachgebaut.

## Neu in 1.1.0 — ruhigeres Layout (Inhalte unverändert)

- Eine Spalte statt zwei, schmaler.
- Oben **Jetzt**: die eine Anweisung mit Übernehmen-Knopf, darunter **Als Nächstes** (max. 6 Zeilen) — Stundendiurese und IAP direkt eintragen, fällige Punkte direkt abhaken.
- **Checkliste:** nur die aktuelle Phase ist offen, die anderen eingeklappt mit Zähler; je Punkt nur Häkchen, Text, Frist und (i). Werte-Eingaben, Zeitfenster und „entfällt“ liegen im (i).
- **Stammdaten & Übergabe Schockraum** als eigenes Fenster (Knopf in der Patientenzeile), dort auch Entlassen/Löschen und „HI/ScvO2 bewerten“.
- **Volumen:** eine Kennzahlenzeile und eine Eingabezeile mit den fünf Zielen (✓/✗ farbig) statt Kachelwand; Stundentabelle mit 8 Spalten, Rest hinter „alle Spalten“; Nachtragen und Tagesbilanz eingeklappt.

## Neu in 1.0.2 (nach Faktencheck gegen die SOPs)

- **Kein stündliches +20 % auf alte Werte mehr:** Ein verfehltes Ziel (HI, ScvO2, Laktat, Rekap) zählt nur, wenn es nach der letzten Laufratenänderung gemessen wurde — sonst „neu messen“.
- **Übertherapie aus Präklinik/SR:** −10 % nur noch, wenn alle Ziele erfüllt sind; bei verfehlten Zielen Hinweis auf IAP, HI, Blutung, Katheterlage statt Senken-Knopf.
- **Defizit aus Präklinik/SR:** Aufholrate nur bei aktueller Diurese unter Ziel, als „Aufholrate“ gekennzeichnet (geht über den SOP-Schritt hinaus); SOP-gerechtes Heruntertitrieren zählt nicht mehr als neues Defizit.
- Diurese-Ziel streng „> 0,3 ml/kg/h“; Myoglobinurie im Korridor 200–300 ml/h nicht mehr als „zu hoch“ markiert; Sammelwert über > 12 h gilt nicht als Stundenwert.
- **Deltajonin BG (1/3)** (Eindrittelelektrolyt, Na 45/K 25) überall eindeutig benannt.
- Hydroxocobalamin nach SOP als Einmalgabe 5 g; 2. Dosis nur ärztliche Einzelfallentscheidung.
- ABSI: Punkt nur für Grad 3 (neues Häkchen „Grad 3 vorhanden“), 12–13 Punkte „≤ 10 %“.
- Studienangaben präzisiert (Navickis 2016, ABA 2024, 6S/CHEST 2012, Baud 1991), Legenden ergänzt.

## Neu in 1.0.1

- Patient **entlassen** (ins BurnICU-Archiv) oder **endgültig löschen** — im Menü und unten in den Stammdaten.
- Menü → **Testpatient anlegen**: Unfall vor ~3 h, 40 % VKOF, Inhalationstrauma, Cyanid-Verdacht.

## Kopplung mit BurnICU

LUminate liegt auf derselben Domain wie BurnICU (ftigiser-collab.github.io, eigenes Repo **LUminate**) und liest und schreibt **denselben Browserspeicher** (`burnicu_v3`). Es gibt keinen Export/Import zwischen den Apps — alles gilt sofort in beiden:

- Patienten, Zimmer, Name, Alter, Geschlecht, Größe, Gewicht, Unfallzeit, VKOF (davon 2b/3), IHT, Strom, Myoglobinurie
- Übergabe Schockraum und alle Häkchen der Checkliste 48 h (gleiche Schlüssel), Inhalations-Intoxikation (CO/Cyanid)
- Diurese, Laufraten, Präklinik + Schockraum, Laborwerte (Laktat, ScvO2, Na, Albumin, COHb, CK, Myoglobin, Anti-Xa), IAP, PiCCO-HI, Rekap, ZVK/Arterie, Transfusionen (FFP/EK)

Sind beide Apps gleichzeitig offen, übernimmt jede die Änderungen der anderen ohne Neuladen (BurnICU ab 3.27.1). Voraussetzung: gleicher Browser auf demselben Gerät. Auf dem iPhone hat eine Home-Bildschirm-App einen eigenen Speicher — dort nur im Browser koppelbar.

Zusätzlich speichert LUminate einen Verlaufsspiegel (`luminate_v1`): BurnICU kürzt Diurese nach 72 h und Labor nach 48 h, LUminate behält die Schockphase bis Tag 5. Albumin-Perfusor, Zusatzgaben, Rekap-Verlauf und Erledigt-Zeiten liegen beim Patienten unter `bs` und sind in der BurnICU-Sicherung enthalten.

## Aufbau

- **Kopf:** Patient, Stunde nach Unfall, Rule of 10, Ziel-Diurese, ABSI ab > 40 % VKOF; darunter die aktuelle Anweisung und was als Nächstes fällig ist.
- **Checkliste:** Stammdaten und Übergabe Schockraum, Inhalations-Intoxikation, Phasen Aufnahme · h 0–8 · h 8–24 · h 24–48 · Tag 3 · Tag 4 · Tag 5. Fälligkeit ab Unfallzeit (gelb fällig, rot überfällig), „–“ = entfällt. Rechts: jetzt fällig, laufende Aufgaben (Stundendiurese, IAP alle 4 h, CK alle 6 h bei Strom, COHb-Kontrolle, PiCCO 1 × pro Schicht), Nicht tun.
- **Kontext nur auf Klick:** Das (i) an jedem Punkt zeigt Warum (Pathophysiologie), Studien und die zugehörige SOP. Bei Widerspruch zwischen Literatur und SOP gilt die SOP der V1.
- **Volumentherapie:** Rule of 10, Laufrate, Albumin, Diurese, Volumen seit Unfall, Grenzen (ml/kg/% VKOF, Ivy-Index). Anweisung nach SOP-Reevaluation (alle Ziele erfüllt −10 %, eines nicht +20 %), Defizit/Übertherapie aus Präklinik und Schockraum, Hinweise zu Albumin, Natrium, IAP, MAP. Nachtragen für Spätankömmlinge (Präklinik/SR, Laufraten ab Uhrzeit, Diurese-Sammelwert, Zusatzgaben). Stundentabelle h 0–48 zum direkten Eintragen (Enter = nächste Zeile) mit SOP-Empfehlung je Stunde, Tagesbilanz ab Tag 2.
- **Ohne ZVK/PiCCO** werden HI und ScvO2 nicht bewertet; die Anweisung stützt sich dann auf Diurese, Laktat und Rekap (umschaltbar: automatisch / ja / nein).
- **Drucken:** Checkliste Tag 0–5 (2 Seiten), Volumenprotokoll h 0–24, h 24–48 oder ab jetzt (1 Seite, vorbefüllt, Rest zum Ausfüllen, Stufentabelle +20 %/−10 %), jeweils mit Abkürzungslegende.
- **Erinnerungen:** im Menü einschalten — solange die App offen ist, meldet der Browser fällige Stundendiurese, IAP und Checklistenpunkte.

## Installieren und offline

Adresse in Chrome/Edge öffnen → Installieren-Symbol in der Adressleiste (bzw. Menü → „App installieren“). Einmal mit Internet öffnen, danach läuft sie offline.

## Updates

`index.html` ändern, in `sw.js` `VERSION` hochzählen (z. B. `luminate-v1.0.1`) und `version.json` sowie `APP_VERSION` in `index.html` anpassen. Der Service Worker räumt nur eigene Caches (Präfix `luminate-`).

## Abkürzungen

ABA American Burn Association · ABSI Abbreviated Burn Severity Index · AIS Abbreviated Injury Score · BG Berufsgenossenschaft · COHb Carboxyhämoglobin · CK Kreatinkinase · EK Erythrozytenkonzentrat · FFP Fresh Frozen Plasma · HI Herzindex · IAP intraabdomineller Druck · IHT Inhalationstrauma · PiCCO Pulse Contour Cardiac Output · PWA Progressive Web App · Rekap Rekapillarisierungszeit · ScvO2 zentralvenöse O2-Sättigung · SOP Standardvorgehen · SR Schockraum · V1 Verbrennungs-Intensivstation · VKOF verbrannte Körperoberfläche · ZVK zentraler Venenkatheter
