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

## Technik

Eine Datei (`index.html`), kein Build, keine externen Abhängigkeiten. Offline über `sw.js` (Cache-Präfix `lulite-`). Update: `APP_VERSION` in `index.html` und `VERSION` in `sw.js` hochzählen.

## Abkürzungen

In der App unter Menü → Abkürzungen und auf jedem Ausdruck. ABSI Abbreviated Burn Severity Index · IAP intraabdomineller Druck · IHT Inhalationstrauma · SOP Standardvorgehen · V1 Verbrennungs-Intensivstation · VKOF verbrannte Körperoberfläche
