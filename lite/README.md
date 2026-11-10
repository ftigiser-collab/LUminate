# LUminate Lite — die einfache Fassung

Adresse: https://ftigiser-collab.github.io/LUminate/lite/

Vereinfachtes Spin-off von LUminate (Verbrennung ab 20 % VKOF, Aufnahme bis Tag 5). Gleiche Inhalte, deutlich einfachere Oberfläche, passend für Smartphone und Desktop. Arbeitshilfe, keine Patientenakte — Aliasnamen verwenden.

## Was gleich ist

Die klinischen Inhalte sind unverändert aus LUminate 1.3.0 übernommen:

- Checkliste Aufnahme · h 0–8 · h 8–24 · h 24–48 · Tag 3 · Tag 4 · Tag 5 mit Fristen ab Unfallzeit
- Daueranweisungen („Gilt jetzt“), Inhalations-Intoxikation (CO/Cyanid), „Nicht tun“
- Kontext (Pathophysiologie, Studien, SOP) nur hinter dem i-Knopf; bei Widerspruch gilt die SOP der V1
- Volumentherapie: Rule of 10, Reevaluation mit fünf Zielen (alle erfüllt −10 %, eines nicht +20 %), Defizit/Übertherapie aus Präklinik und Schockraum, Albumin, Natrium, Ivy-Index, IAP
- Klickbarer Algorithmus Volumenmanagement (SOP, Abb. 1) bis h 72, jederzeit umgehbar; Reevaluation stündlich fällig, nach 2 h überfällig

## Was einfacher ist

- **Drei Reiter:** *Jetzt* (die eine Anweisung, was fällig ist, was gilt) · *Volumen* (eintragen, Ziele, Bilanz, Verlauf) · *Checkliste*
- **Ein Eintragsformular** mit einer Uhrzeit und einem Speichern-Knopf statt Stundentabelle — nachtragen geht über die Uhrzeit
- **Ein Verlauf** statt Stundentabelle und Protokoll; jeder Eintrag einzeln löschbar
- **Ein Patientenformular** statt Stammdaten-Fenster mit Einzelfeldern
- **Eigenständig:** eigener Speicher (`lulite_v1`), keine Kopplung mit BurnICU oder LUminate; mehrere Patienten über die Auswahl oben

## Neu in 1.1.0

- **Leiste, immer sichtbar:** Zeit seit Unfall, seit Aufnahme V1 (neues Feld beim Patienten) und seit der letzten Reevaluation. Die Reevaluation blinkt gelb ab 1 h (fällig) und rot ab 2 h (überfällig); Antippen öffnet den Algorithmus. Daneben der Status **CO · Cyanid · IHT** (offen / kein Hinweis / Verdacht).
- **Abfrage Inhalation in der Aufnahme:** 11 Ja/Nein-Fragen (Exposition, Atemweg, CO, Cyanid) plus COHb und Laktat. Öffnet sich nach dem Anlegen eines Patienten von selbst, steht als erster Punkt in „Aufnahme · sofort“ und ist über die Leiste erreichbar. Bei Verdacht erscheinen die Schritte in der Aufnahme und unter „Jetzt fällig“. Neu gegenüber LUminate: die Fragen „Stridor, Heiserkeit oder Atemnot“ und „Versengte Nasen- oder Gesichtsbehaarung, Verbrennung in Mund oder Rachen“ (Warnzeichen nach AWMF S2k 044-001).
- **Abschnitte farblich getrennt:** jede Karte mit eigener Farbe (Kopfband und Randstreifen), jede Phase der Checkliste mit eigener Farbe.
- **Korrekturdurchgang (32 Stellen), u. a.:** „Tubus nicht kürzen“ → „Fixierung und Tubustiefe engmaschig prüfen und dem Ödem anpassen — akzidentelle Extubation vermeiden“ · „VKOF nachmessen“ → „neu bestimmen“ · „Brandhaut“ → „verbrannte Haut“ · „Devices“ → „Katheter und Zugänge“ · „Kompartimente“ → „Muskellogen“ · „forcieren“ → „abführen“ · „Opioid retard und akut“ → „retardiert und bei Bedarf“ · „anstoßen“ → „einleiten“ · „Heparin p.i.“ → „Heparin inhalativ“ · „SpO2 normal trotz Klinik“ → „trotz Hypoxiezeichen“ · „Flüssigkeitschallenge“ → „Fluid Challenge“ · Aufnahmelabor: BGA arteriell und zentralvenös getrennt · Fußnote Fluid Challenge: Anstieg des Schlagvolumens (vorher „SVV“) im Passive Leg Raise — **bitte gegen die SOP prüfen**.

## Technik

Eine Datei (`index.html`), kein Build, keine externen Abhängigkeiten. Offline über `sw.js` (Cache-Präfix `lulite-`). Update: `APP_VERSION` in `index.html` und `VERSION` in `sw.js` hochzählen.

## Abkürzungen

In der App unter Menü → Abkürzungen und auf jedem Ausdruck. ABSI Abbreviated Burn Severity Index · IAP intraabdomineller Druck · IHT Inhalationstrauma · SOP Standardvorgehen · V1 Verbrennungs-Intensivstation · VKOF verbrannte Körperoberfläche
