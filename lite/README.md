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

## Neu in 1.4.0

- **Albumin ist optional:** Der Punkt in h 8–24 ist als „optional“ markiert (gestricheltes Kästchen), wird nie fällig oder überfällig und zählt nicht in die Zähler. Bedingungen stehen im Text und im (i): frühestens ab h 6 (nach SOP ab h 8) und Serum-Albumin < 2,2 g/dl oder Kristalloidbedarf > 2 × Rule of 10 bzw. > 6 ml/kg/% VKOF; Dosis 100 ml je 1000 ml Volumen, Ziel 2,2–2,7 g/dl. Der Hinweis im Reiter „Jetzt“ schlägt die Rate nur vor, wenn eine Bedingung erfüllt ist — sonst steht dort „derzeit keine Bedingung erfüllt“.
- **Zeichen an den Punkten:** violett „Maßnahme“ (ärztliche Maßnahme am Patienten, z. B. ZVK/PiCCO, Bronchoskopie, Escharotomie), blau „Medikament“, grün „Labor“ — in Checkliste, „Jetzt fällig“, „Gilt jetzt“, Abfrage Inhalation und im Ausdruck (dort als Text in eckigen Klammern). Erklärung über der Checkliste und unter Menü → Abkürzungen.
- Ohne Zeichen bleiben u. a. Blasenkatheter/Magensonde, enterale Ernährung, VKOF neu bestimmen, OP-Plan, Lagerung und Gespräche.

## Neu in 1.3.1

- **Pfeil an „Laufrate jetzt“:** zeigt die letzte Änderung der Laufrate — orange ↑ für STEP UP, grün ↓ für STEP DOWN, darunter „STEP UP/DOWN von … ml/h“. Kein Pfeil bei der ersten Laufrate oder unveränderter Rate.

## Neu in 1.3.0

- **Aus der Checkliste gestrichen:** Stuhlgang (Aufnahme, Tag 3, Tag 5), Arbeits-/Wegeunfall → BG-Verfahren (Aufnahme), MRE-Screening (Aufnahme). Unverändert: Tag 5 „Sozialdienst, psychologische Betreuung, BG-/Reha-Verfahren einleiten“.
- **Dobutamin klickbar:** Führt der Algorithmus zu Dobutamin (auch als Zusatz bei STEP DOWN oder im Noradrenalin-Zweig), öffnet „Dobutamin: Dosierung“ die Empfehlung — gewichtsadaptiert 2,5 / 5 / 7,5 / 10 µg/kg/min mit ml/h für den Perfusor 250 mg/50 ml (5 mg/ml), Vorgehen, Voraussetzungen und Cave nach Fachinformation. Derselbe Knopf steht an der Jetzt-Anweisung, solange das Ergebnis gilt.

## Neu in 1.2.0

- **Kopfzeile in jedem Reiter:** Stunde seit Unfall · Zieldiurese · Laufrate jetzt.
- **Rule of 10 nur noch als Startwert:** große Anzeige nur, bis eine Laufrate eingetragen ist; danach klein unter „Bilanz“. Intern bleibt sie Vergleichslinie für Defizit/Übertherapie bis zur Übernahme und für die Warnung ab 2 × Rule of 10.
- **Checkliste zweispaltig:** links die Aufnahme mit der Abfrage Inhalation (CO, Cyanid, Inhalationstrauma), rechts die Zeitfenster h 0–8 bis Tag 5. Das aktuelle Zeitfenster ist farbig hinterlegt und mit „jetzt“ markiert; abgelaufene sind grau und eingeklappt, offene Punkte stehen als „n offen“ im Kopf. Die Aufnahme bleibt offen, solange die Abfrage oder Verdachts-Schritte offen sind.
- **(i) an „COHb-Kontrolle“:** FiO2 senken bei COHb < 3 % und Symptomfreiheit (AWMF S2k 040-012, 2021), bei Ausgangs-COHb > 10 % frühestens nach 6 h 100 % O2 (SOP). **(i) an „HBO“:** hyperbare Oxygenierung in der Druckkammer, Indikationen und Zeitfenster (Beginn innerhalb von 6 h).
- (i)-Knöpfe jetzt auch unter „Jetzt fällig“ und im Ergebnis der Abfrage.

## Neu in 1.1.0

- **Leiste, immer sichtbar:** Zeit seit Unfall, seit Aufnahme V1 (neues Feld beim Patienten) und seit der letzten Reevaluation. Die Reevaluation blinkt gelb ab 1 h (fällig) und rot ab 2 h (überfällig); Antippen öffnet den Algorithmus. Daneben der Status **CO · Cyanid · IHT** (offen / kein Hinweis / Verdacht).
- **Abfrage Inhalation in der Aufnahme:** 11 Ja/Nein-Fragen (Exposition, Atemweg, CO, Cyanid) plus COHb und Laktat. Öffnet sich nach dem Anlegen eines Patienten von selbst, steht als erster Punkt in „Aufnahme · sofort“ und ist über die Leiste erreichbar. Bei Verdacht erscheinen die Schritte in der Aufnahme und unter „Jetzt fällig“. Neu gegenüber LUminate: die Fragen „Stridor, Heiserkeit oder Atemnot“ und „Versengte Nasen- oder Gesichtsbehaarung, Verbrennung in Mund oder Rachen“ (Warnzeichen nach AWMF S2k 044-001).
- **Abschnitte farblich getrennt:** jede Karte mit eigener Farbe (Kopfband und Randstreifen), jede Phase der Checkliste mit eigener Farbe.
- **Korrekturdurchgang (33 Stellen), u. a.:** „Tubus nicht kürzen“ → „Fixierung und Tubustiefe engmaschig prüfen und dem Ödem anpassen — akzidentelle Extubation vermeiden“ · „VKOF nachmessen“ → „neu bestimmen“ · „Brandhaut“ → „verbrannte Haut“ · „Devices“ → „Katheter und Zugänge“ · „Kompartimente“ → „Muskellogen“ · „forcieren“ → „abführen“ · „Opioid retard und akut“ → „retardiert und bei Bedarf“ · „anstoßen“ → „einleiten“ · „Heparin p.i.“ → „Heparin inhalativ“ · „SpO2 normal trotz Klinik“ → „trotz Hypoxiezeichen“ · „Flüssigkeitschallenge“ → „Fluid Challenge“ · Aufnahmelabor: BGA arteriell und zentralvenös getrennt · Fußnote Fluid Challenge: Anstieg des Schlagvolumens (vorher „SVV“) im Passive Leg Raise — **bitte gegen die SOP prüfen**.

## Technik

Eine Datei (`index.html`), kein Build, keine externen Abhängigkeiten. Offline über `sw.js` (Cache-Präfix `lulite-`). Update: `APP_VERSION` in `index.html` und `VERSION` in `sw.js` hochzählen.

## Abkürzungen

In der App unter Menü → Abkürzungen und auf jedem Ausdruck. ABSI Abbreviated Burn Severity Index · IAP intraabdomineller Druck · IHT Inhalationstrauma · SOP Standardvorgehen · V1 Verbrennungs-Intensivstation · VKOF verbrannte Körperoberfläche
