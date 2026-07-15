# Proof of routes — investigation log

Evidence of the LinkedIn research: every query executed, its route (URL type), the result,
and what was kept. Read-only navigation only, conservative pace, de-DE UI. `NO_RESULTS` rows
are kept on purpose — they prove the route was tried. Research dates: 2026-07-12.

Route template: `https://www.linkedin.com/search/results/{companies|people|content}/?keywords={q}`

## Summary
- **Total queries executed:** 62 (companies 38 · people 15 · posts/content 9).
- **Queries with results:** 41 · **documented NO_RESULTS:** 21 (company-name search matches names, not activities/phrases).
- **Unique companies collected:** ~85 · **unique people:** ~57 · **distribution/media/cluster accounts:** ~15.

---

## A. Company routes — packaging / EOL / palletizing (Priority 1)
| Query | Result | Kept | Notable finds |
| --- | --- | --- | --- |
| Verpackungsmaschinen | OK | 8 | Gerhard Schubert, HDG, Prewa, Kremers, BBV, Merz, Upmann, Mohrbach |
| Verpackungstechnik | OK | 10 | IWK, LoeschPack, PCA, Hastamat, B&B, Rota, ETT, Weyhmüller, Frielinghaus |
| Verpackungssysteme | OK | 6 | Meurer, FROMM, Schlichter, erka, Willi KOPP, KIRSCH |
| Verpackungsanlagen | OK | 1 | IVECOPACK |
| Verpackungsmaschinenbau | OK | 2 | A&D Verpackungsmaschinenbau, Prewa Verpackungsmaschinenbau (2nd entity) |
| Palettiertechnik | OK | 3 | transnova-RUF, HSK Palettiertechnik, RobotSystems |
| Palettiersysteme | OK | 1 | Nowak Palettiersysteme |
| Umreifungstechnik | OK | 2 | Titan Umreifungstechnik, MAKOPAK |
| Etikettiertechnik | OK | 5 | Renner, bema, RENNER, GuDi, Etibe (labeling — adjacent) |
| Abfülltechnik | OK | 5 | Fola, WAT Wunsch, Klaus-Peter Münch, Olaf Maul, Zootechnika (filling — adjacent) |
| Kartoniertechnik | NO_RESULTS | 0 | — |
| Palettieranlagen | NO_RESULTS | 0 | (reach via builders instead) |
| Palettierung | NO_RESULTS | 0 | — |
| Palettierroboter | NO_RESULTS | 0 | — |
| Endverpackung | NO_RESULTS | 0 | — |
| Endverpackungsmaschinen | NO_RESULTS | 0 | — |
| Schrumpfverpackung | NO_RESULTS | 0 | — |
| Schlauchbeutelmaschinen | NO_RESULTS | 0 | — |
| Verpackungsautomation | NO_RESULTS | 0 | — |
| Maschinenfabrik Verpackung | NO_RESULTS | 0 | — |

## B. Company routes — Sondermaschinenbau / automation / assembly / testing / handling (Priority 2)
| Query | Result | Kept | Notable finds |
| --- | --- | --- | --- |
| Sondermaschinenbau | OK | 10 | Noll, WESOBA, KURTH+HEUSER, fischer Innomation, AUTEC, Dönmez, Desotec, Tank, HAGE |
| Sondermaschinen | OK | 6 | Braun, ERMAFA, Somatec, Schreyer, Oschersleben, Viehoever |
| Fördertechnik | OK | 10 | GEBHARDT, LINDIG, Suffel, Nerak, IEM, Willenbrock, HOSCH, Schöler |
| Handhabungstechnik | OK | 10 | GRIP, STRÖDTER, Zeilhofer, EFS, ims, Winter, IHF-JUNGENTHAL, Friedemann Wagner, Ktc |
| Automatisierungstechnik | OK | 10 | Adiro, Blumenbecker, Woerner, Staudinger, AMT, Mountec, mrm² |
| Anlagenbau | OK | 6 | REKERS, STOPA, VHV, FHR, Cteam, Anlagenbau Günther |
| Prüftechnik | OK | 5 | EP Ehrler, infraTest, PTS, Optimol, (+ Konradin media) |
| Prüfsysteme | OK | 6 | PROMESS Montage- und Prüfsysteme, DYNA-MESS, LAW NDT, inotec/SMARTTESTER, MP GmbH |
| Montagetechnik | OK | 6 | BERNER, Nögel, FMT Flexible Montagetechnik, Repac, Hoyer, (+ match-Institut) |
| Montageautomation | OK | 1 | DFS Montageautomation |
| Zuführtechnik | OK | 6 | PSA, FSA, Braunschweiger, Moeser, MAFU, PULSA |
| Fügetechnik | OK | 6 | VBS, FENOPLAST, Umform-/Fügetechnik Eisenach (+ research institutes ifw/FEF/LWF) |
| Greiftechnik | OK | 1 | Jensen Greiftechnik |
| Systemintegration Automation | OK | 6 | Kieback&Peter, Haosen, Hatch Küttner, Valentum Engineering, HERMOS |
| Robotik Automation | OK | 4 | TETRA, item, YASKAWA, Automation W+R (several foreign dropped) |
| Intralogistik | OK | 6 | LR Intralogistik, MV Fördertechnik (+ Intralogistik-Netzwerk BW/Nord, dhf) |
| Montageanlagen | NO_RESULTS | 0 | — |
| Prüfanlagen | NO_RESULTS | 0 | (as company name) |
| Robotik Systemintegrator | NO_RESULTS | 0 | — |

## C. Company routes — distribution / media / associations / fairs / clusters (Priority 3)
| Query | Result | Kept | Notable finds |
| --- | --- | --- | --- |
| VDMA | OK | 1 | VDMA (association) |
| interpack | OK | 1 | Messe Düsseldorf (organizer) |
| FachPack | OK | 1 | NürnbergMesse Group (organizer) |
| Packaging Valley | OK | 1 | **Packaging Valley Germany e.V.** (BW packaging-machinery cluster) |
| all about automation | OK | 1 | Easyfairs Germany (fair organizer) |
| Fraunhofer IPA | OK | 1 | Fraunhofer IPA (Stuttgart research institute) |
| Industrieanzeiger | OK | 1 | Industrieanzeiger (Konradin media) |
| neue verpackung | OK | 1 | neue verpackung (packaging media) |
| MaschinenMarkt | OK | 1 | MM MaschinenMarkt (Vogel media) |
| Automatica München | NO_RESULTS | 0 | — |
| Verpackungsrundschau | NO_RESULTS | 0 | — |
| VDMA Nahrungsmittel | NO_RESULTS | 0 | (find the division page manually) |

## D. People routes (role × segment)
| Query | Result | Notable finds |
| --- | --- | --- |
| Leiter Technischer Vertrieb Maschinenbau | OK | Erboral (BW), Wolters/RHV, Ritter/Schnaithmann, Dietsche/IAR, Meyer/IRCO |
| Head of Sales Engineering | OK | Haschkamp, Ruoff/Schmid, Simonyi/Schaarschmidt, Gerdelmann, Karataş |
| Head of Application Engineering Maschinenbau | OK | daniel-range (Waiblingen), alexander-bauer (Sondermaschinenbau), andreas-bierer (Freiburg) |
| Leiter Vertriebstechnik | OK | kevin-lorang (Hauptabteilungsleiter Vertriebstechnik), marcel-glanz/ATN Hölzel |
| Leiter Projektierung Maschinenbau | OK | Habicht, Braun, Gläser/MTS, Dangel/Liebherr, Pitzner/Hohner, Näckel-Birkenfeld/Titan |
| Leiter Projektierung Sondermaschinenbau | OK | Habicht, micha-b (Region Stuttgart), florian-welz |
| Projektingenieur Sondermaschinenbau | OK | alexander-mühlstein, Weber, br brückner |
| Vertriebsleiter Sondermaschinenbau | OK | Hobt/FORM+TEST, Kramer/Amtec Kistler, Breu/ASS, Albert/ASYS, Schmidt/VS |
| Geschäftsführer Sondermaschinenbau | OK | Schmidt/VS, Noll, Bau/L.Bau, Haider/HKR, Freigassner/HAGE |
| Inhaber Sondermaschinenbau | OK | axel-prinzing (Horb a.N.), andreas-scherr/Semotec |
| Geschäftsführer Verpackungsmaschinen | OK | lutz-demuss (**GF Mohrbach**), niels-bücker/JW, axel-haas (BW) |
| Vertriebsleiter Verpackungstechnik | OK | johannes-dorn/Paul Müller, patrick-schräder/Baving |
| Konstruktionsleiter Verpackungsmaschinen | OK | mario-weide/Toss, tobias-merte/Merz |
| Produktmanager Verpackungsmaschinen | OK | horvath-stefan/Gerhard Schubert, laura-gildein/**Harro Höfliger** |
| Sales Engineer Verpackungsmaschinen | OK | samuel-l (Waiblingen), mirko-knappmeier |
| Teamleiter Kalkulation Maschinenbau | OK | michael-bernhofer/Schuster, tobias-engenhart/KNOLL, yannick-jundt/HAINBUCH |
| Angebotsleiter Kalkulation Maschinenbau | OK | Bloms, Klenk/Busch (mostly weak — many dropped) |
| Head of Sales Maschinenbau Baden-Württemberg | OK | gerd-maier (Prokurist), stefan-benz (Zizishausen), kevin-mitulla/RAS Reinhardt, oliver-herbrik (Bönnigheim) |

## E. Posts / content routes
| Query | Result | Notable authors/accounts |
| --- | --- | --- |
| Angebotsprozess Maschinenbau | OK | dima, Markus Westermeier, Spanflug, Perspectix, camos |
| technischer Vertrieb Angebot Maschinenbau | OK | mostly consultants (Maier, Klippe, Müller), recruiter (Lubka) — down-prioritized |
| End-of-Line Palettierung Verpackung | OK | EOL - End of Line Packaging Experts |
| Sales Engineering Sondermaschinenbau | OK | HuW Automation, VIETZ (Juri Weimer) |
| Fachkräftemangel Konstruktion Engineering | OK | Frank Schepers (100k+ Konfigurationen), Klaus Weßing |
| Angebotserstellung Maschinenbau | OK | camos, PAMA paper machinery (+ HKA, CTA) |
| Digitalisierung technischer Vertrieb | OK | SensoPart, fruitcore robotics, RobCo (BW automation) |
| RFQ Maschinenbau | OK (weak) | mostly international/generic |
| Lastenheft / Anfragemanagement Vertrieb | OK (weak) | mostly sales consultants (Stempfle, Milz, Truchseß) — excluded |

## Observations from the long run
- **Best single tokens for company discovery:** the ones common in company *names* (Verpackungssysteme, Sondermaschinen, Prüfsysteme, Zuführtechnik, Montagetechnik). Phrase/activity terms (Palettieranlagen, Endverpackung, Verpackungsautomation) return nothing.
- **Distribution layer is now solid:** VDMA, Packaging Valley Germany e.V., Fraunhofer IPA, Messe Düsseldorf, NürnbergMesse, Easyfairs, plus media (Konradin/Industrieanzeiger, MM MaschinenMarkt, neue verpackung, Packaging Europe, dhf Intralogistik).
- **Post topics remain consultant-heavy** (Anfragemanagement, Lastenheft, RFQ) — confirms the earlier risk; the buyers are found by role search, not in these threads.
- New expansion entities are in [01b-company-universe-expansion.csv](01b-company-universe-expansion.csv) and [02b-people-universe-expansion.csv](02b-people-universe-expansion.csv).
