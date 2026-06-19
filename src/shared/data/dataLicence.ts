export type LicenceQuestion = {
  id: number;
  question: string;
  answer: string;
};

export const dataLicence: LicenceQuestion[] = [
  {
    id: 1,
    question: "W jaki sposób rozwijało się prawo autorskie na ziemiach polskich po zakończeniu I wojny światowej przed ujednoliceniem przepisów?",
    answer: "Obowiązywały ustawy państw zaborczych:\n• Zabór niemiecki: ustawy z 19 czerwca 1901 r. (do utworów literackich i muzycznych) oraz z 9 stycznia 1907 r. (plastycznych i fotograficznych).\n• Zabór austriacki: ustawa z 26 grudnia 1895 r. o prawie autorskim do utworów literatury, sztuki i fotografii.\n• Zabór rosyjski: ustawa z 20 marca 1911 r. o prawie autorskim.\n• Tereny Spiszu i Orawy: węgierska ustawa z 26 kwietnia 1884 r. o prawie autorskim."
  },
  {
    id: 2,
    question: "Jakie były główne założenia pierwszej polskiej ustawy o prawie autorskim z 29 marca 1926 r.?",
    answer: "• Przedmiot: Każdy przejaw działalności duchowej noszący piętno osobiste (bardzo szerokie ujęcie).\n• Model: Dualistyczny (chroniono osobno majątkowe i osobiste prawa do utworu).\n• Czas trwania: Prawa majątkowe wygasały po 50 latach od śmierci twórcy."
  },
  {
    id: 3,
    question: "Jakie były główne cechy i ograniczenia ustawy o prawie autorskim z 10 czerwca 1952 r.?",
    answer: "• Charakteryzowała się fragmentarycznością uregulowań.\n• Ograniczała prawa podmiotowe twórców poprzez czynnik administracyjny.\n• Uprzywilejowywała sektor uspołeczniony.\n• Kolejne nowelizacje (1975, 1989) wymusił postęp techniczny i nowe środki masowej komunikacji."
  },
  {
    id: 4,
    question: "Czym są prawa autorskie oraz prawa pokrewne?",
    answer: "Należą do praw na dobrach niematerialnych. Chronią monopol (wyłączność) na korzystanie i ekonomiczną eksploatację dóbr o charakterze intelektualnym."
  },
  {
    id: 5,
    question: "Co oznaczają terytorialność i czasowość ochrony praw autorskich?",
    answer: "• Terytorialność: Monopol na eksploatację obowiązuje tylko na obszarze państwa, które go ustanowiło. Ochrona za granicą zależy od umów międzynarodowych i zasady wzajemnego respektowania praw.\n• Czasowość: Autorskie prawa majątkowe trwają przez ściśle określony czas (obecnie co do zasady 70 lat), po którym wygasają, równoważąc interes twórcy z potrzebami społeczeństwa."
  },
  {
    id: 6,
    question: "Co jest konsekwencją wygaśnięcia autorskich praw majątkowych?",
    answer: "Utwory stają się częścią domeny publicznej. Mogą być wówczas dowolnie eksploatowane (wydawane, reprodukowane, nagrywane, sprzedawane, aranżowane, adaptowane) bez zgody twórcy i ponoszenia opłat. Obowiązuje jednak nadal poszanowanie autorskich praw osobistych (np. autorstwa)."
  },
  {
    id: 7,
    question: "Co oznacza, że ochrona praw autorskich ma charakter erga omnes?",
    answer: "Oznacza to skuteczność wobec wszystkich – wszyscy są zobowiązani do przestrzegania praw twórcy, a ingerencja w nie jest możliwa wyłącznie w przypadkach określonych w ustawach."
  },
  {
    id: 8,
    question: "Na czym polega dualistyczny charakter prawa autorskiego?",
    answer: "Dzieli się ono na:\n• Autorskie prawa osobiste: Chroniące wieczną i niezbywalną więź twórcy z utworem.\n• Autorskie prawa majątkowe: Chroniące interes ekonomiczny (prawa te można zbyć, przenieść, a ich czas trwania jest ograniczony)."
  },
  {
    id: 9,
    question: "Co stanowi przedmiot prawa autorskiego według Art. 1 ust. 1 ustawy?",
    answer: "Przedmiotem prawa autorskiego jest każdy przejaw działalności twórczej o indywidualnym charakterze, ustalony w jakiejkolwiek postaci, niezależnie od wartości, przeznaczenia i sposobu wyrażenia (utwór)."
  },
  {
    id: 10,
    question: "Co NIE podlega ochronie prawa autorskiego w myśl Art. 1 ust. 2^1 ustawy?",
    answer: "Ochroną objęty może być wyłącznie sposób wyrażenia. Nie są objęte ochroną odkrycia, idee, procedury, metody i zasady działania oraz koncepcje matematyczne. Pomysł na utwór nie jest chroniony – chronione jest dopiero jego uformowanie."
  },
  {
    id: 11,
    question: "Od kiedy utwór podlega ochronie i czy wymaga to jakichkolwiek formalności?",
    answer: "Utwór podlega ochronie od chwili ustalenia, chociażby miał postać nieukończoną. Ochrona przysługuje twórcy niezależnie od spełnienia jakichkolwiek formalności (np. nie ma potrzeby rejestracji ani zgłaszania utworu w urzędzie)."
  },
  {
    id: 12,
    question: "Czym różni się ustalenie utworu od jego utrwalenia?",
    answer: "• Ustalenie: To uzewnętrznienie utworu i zakomunikowanie go w postaci trwałej lub nietrwałej (np. wygłoszenie wykładu, pokaz, wystawa, koncert, sesja muzyczna) grupie odbiorców w sposób umożliwiający jego odczytanie przez osoby trzecie. Od tego momentu przysługuje ochrona.\n• Utrwalenie: Wymaga zapisania (zmaterializowania) utworu na nośniku fizycznym (np. nagranie audio, zapisanie w pliku komputerowym, wydruk)."
  },
  {
    id: 13,
    question: "Na jakich warunkach ochronie podlegają zbiory, antologie, wybory i bazy danych (Art. 3 ustawy)?",
    answer: "Podlegają ochronie, o ile przyjęty w nich dobór, układ lub zestawienie ma twórczy charakter (nawet jeśli zawierają niechronione materiały). Zbiory schematyczne i kompletne bez swobody twórczej (np. ułożone wyłącznie alfabetycznie) są wyłączone spod tej ochrony."
  },
  {
    id: 14,
    question: "Co wyłączone jest spod ochrony prawa autorskiego według Art. 4 ustawy?",
    answer: "1. Akty normatywne lub ich urzędowe projekty.\n2. Urzędowe dokumenty, materiały, znaki i symbole.\n3. Opublikowane opisy patentowe lub ochronne.\n4. Proste informacje prasowe."
  },
  {
    id: 15,
    question: "Czym różni się utwór inspirowany od utworu zależnego (opracowania)?",
    answer: "• Utwór inspirowany: Cudze dzieło jest jedynie bodźcem/impulsem. Nie dochodzi do przejęcia chronionych elementów twórczych dzieła pierwotnego. Jest samodzielnym utworem i nie wymaga zgody autora oryginału.\n• Utwór zależny (opracowanie): Następuje ingerencja w istniejące dzieło (np. tłumaczenie, adaptacja, przeróbka), w którego strukturze wciąż są rozpoznawalne elementy twórcze utworu pierwotnego. Korzystanie z niego i jego rozpowszechnianie wymaga zgody autora oryginału."
  },
  {
    id: 16,
    question: "Kiedy korzystanie z utworu zależnego (opracowania) nie wymaga zgody autora oryginału?",
    answer: "Wymaga zgody (licencji), chyba że autorskie prawa majątkowe do utworu pierwotnego wygasły (np. minęło 70 lat od śmierci twórcy oryginału). Wtedy opracowanie można rozpowszechniać bez zezwolenia."
  },
  {
    id: 17,
    question: "W jakiej sytuacji autor utworu pierwotnego może cofnąć udzielone zezwolenie na korzystanie z opracowania?",
    answer: "Może je cofnąć, jeżeli w ciągu pięciu lat od jego udzielenia opracowanie nie zostało rozpowszechnione. Wypłacone twórcy wynagrodzenie nie podlega wtedy zwrotowi."
  },
  {
    id: 18,
    question: "Czym jest dozwolony cytat?",
    answer: "To inkorporacja fragmentów innego dzieła (lub drobnych utworów w całości) bez zgody autora oryginału i bez opłat. Musi nastąpić w utworze stanowiącym samoistną całość i być uzasadniona celami takimi jak wyjaśnianie, polemika, analiza krytyczna lub naukowa, nauczanie lub prawami gatunku twórczości. Cytat ma znaczenie podrzędne i nie może zastępować własnej twórczości."
  },
  {
    id: 19,
    question: "Czym różnią się utwory z zapożyczeniami od cytatu?",
    answer: "W utworach z zapożyczeniami zacytowany fragment jest znacznie obszerniejszy niż własna twórczość (np. całe rozdziały, strony). Na ich rozpowszechnianie niezbędna jest zgoda autora oryginału (wykraczają poza dopuszczalne ramy cytatu)."
  },
  {
    id: 20,
    question: "Kto może być uznany za twórcę utworu?",
    answer: "Twórcą może być wyłącznie osoba fizyczna. Nakład pracy, kompetencje, wiek czy poczytalność nie mają znaczenia dla przyznania autorstwa."
  },
  {
    id: 21,
    question: "Na czym polega zasada twórczości pracowniczej (Art. 12 ustawy)?",
    answer: "Jeżeli ustawa lub umowa o pracę nie stanowią inaczej, pracodawca nabywa autorskie prawa majątkowe z chwilą przyjęcia utworu, który pracownik stworzył w ramach wykonywania obowiązków ze stosunku pracy. Twórca must być zatrudniony na umowę o pracę. Umowy cywilnoprawne (np. o dzieło) nie dają pracodawcy automatycznych praw (chyba że umowa to określa)."
  },
  {
    id: 22,
    question: "Co się dzieje, gdy pracodawca nie rozpowszechni utworu pracowniczego w ciągu 2 lat?",
    answer: "Twórca może wyznaczyć pracodawcy na piśmie termin na rozpowszechnienie. Po jego bezskutecznym upływie autorskie prawa majątkowe i własność nośnika powracają do twórcy, chyba że umowa stanowi inaczej."
  },
  {
    id: 23,
    question: "Jakie są zasady wykonywania praw autorskich w przypadku współtwórczości (Art. 9 ustawy)?",
    answer: "• Prawo autorskie przysługuje współtwórcom wspólnie (domniemywa się równe udziały).\n• Każdy może żądać określenia udziałów przez sąd na podstawie wkładu pracy.\n• Każdy może wykonywać prawo do swojej samodzielnej części utworu.\n• Do wykonywania prawa do całości potrzebna jest zgoda wszystkich (w braku zgody decyduje sąd).\n• Każdy może dochodzić roszczeń z tytułu naruszenia prawa do całości (świadczenie przypada wszystkim wg udziałów)."
  },
  {
    id: 24,
    question: "Czym są autorskie prawa osobiste i jakie są ich kluczowe cechy (Art. 16 ustawy)?",
    answer: "Chronią więź twórcy z utworem. Są nieograniczone w czasie (nie wygasają po śmierci, chronią je spadkobiercy) oraz nie podlegają zrzeczeniu się lub zbyciu. W szczególności obejmują prawo do:\n1. Autorstwa utworu.\n2. Oznaczenia utworu nazwiskiem/pseudonimem lub udostępniania anonimowo.\n3. Nienaruszalności treści i formy (integralności) oraz rzetelnego wykorzystania.\n4. Decydowania o pierwszym udostępnieniu publiczności.\n5. Nadzoru nad sposobem korzystania."
  },
  {
    id: 25,
    question: "Na czym polega naruszenie prawa do autorstwa?",
    answer: "Polega na zanegowaniu lub przeinaczeniu faktu bycia autorem, w tym:\n• Przywłaszczeniu autorstwa (plagiat jawny lub ukryty).\n• Niewskazaniu współtwórcy.\n• Określeniu jako autora osoby, która nim nie jest."
  },
  {
    id: 26,
    question: "Czym różni się plagiat jawny od ukrytego?",
    answer: "• Plagiat jawny: Bezpośrednie przypisanie sobie autorstwa cudzego utworu w całości lub fragmentach (np. wklejenie tekstu bez cudzysłowu i źródła).\n• Plagiat ukryty: Przejęcie cudzego utworu i dokonanie zmian (np. stylistycznych, synonimów) mających zamaskować fakt przejęcia."
  },
  {
    id: 27,
    question: "Czym jest autoplagiat i czy stanowi naruszenie prawa autorskiego?",
    answer: "To powtórne opublikowanie przez autora fragmentów lub całości swojej własnej, wcześniej wydanej pracy i przedstawienie jej jako nowego dzieła bez podania informacji o tym fakcie. Nie narusza to prawa autorskiego (o ile autor nie zbył praw majątkowych), ale narusza normy etyczne (zwłaszcza w nauce)."
  },
  {
    id: 28,
    question: "Czy prawo do integralności utworu oznacza jego absolutną nienaruszalność?",
    answer: "Nie. Zmiany nie naruszające więzi twórcy z utworem (np. poprawienie błędów ortograficznych, interpunkcyjnych, zmiany formatu reprodukcji) są dopuszczalne. Następca prawny może wprowadzać zmiany spowodowane oczywistą koniecznością, którym twórca nie miałby słusznej podstawy się sprzeciwić (Art. 49 ust. 2)."
  },
  {
    id: 29,
    question: "Na czym polega prawo do rzetelnego wykorzystania utworu?",
    answer: "Zakazuje prezentowania utworu w kontekście, tle wypowiedzi lub z komentarzem, który stoi w sprzeczności z zamierzeniem artystycznym twórcy, wywołując u odbiorcy mylny lub częściowo fałszywy obraz dzieła. Parodia nie jest naruszeniem tego prawa (jest dozwolonym użytkiem)."
  },
  {
    id: 30,
    question: "W jaki sposób realizowane jest prawo nadzoru nad sposobem korzystania z utworu?",
    answer: "Poprzez przeprowadzanie korekty autorskiej lub nadzoru autorskiego (Art. 60) oraz możliwość wypowiedzenia lub odstąpienia od umowy z uwagi na istotne interesy twórcze (Art. 56 i 58)."
  },
  {
    id: 31,
    question: "Czym są autorskie prawa majątkowe (Art. 17 ustawy)?",
    answer: "To wyłączne prawo do korzystania z utworu i rozporządzania nim na wszystkich polach eksploatacji oraz do wynagrodzenia za korzystanie z utworu. Są one zbywalne, dziedziczne i ograniczone w czasie (do 70 lat po śmierci twórcy)."
  },
  {
    id: 32,
    question: "Jak oblicza się 70-letni termin wygaśnięcia autorskich praw majątkowych (Art. 39 ustawy)?",
    answer: "Czas ten liczy się w latach pełnych po roku, w którym nastąpiło zdarzenie (śmierć twórcy). Jeśli autor zmarł 16.09.1939 r., bieg terminu rozpoczyna się 1 stycznia 1940 r., a prawa wygasają z końcem 2010 r."
  },
  {
    id: 33,
    question: "Czy przeniesienie własności fizycznego egzemplarza (nośnika) przenosi autorskie prawa majątkowe (Art. 52 ustawy)?",
    answer: "Nie. Przeniesienie własności egzemplarza nie powoduje przejścia autorskich praw majątkowych i na odwrót, chyba że strony umówiły się inaczej."
  },
  {
    id: 34,
    question: "Co to są pola eksploatacji utworu i jak są klasyfikowane w Art. 50 ustawy?",
    answer: "Są to sposoby korzystania z utworu. Klasyfikowane są w trzech zakresach:\n1. Utrwalanie i zwielokrotnianie utworu (wytwarzanie egzemplarzy techniką drukarską, cyfrową, zapisu magnetycznego itp.).\n2. Obrót oryginałem lub egzemplarzami (wprowadzanie do obrotu, użyczenie lub najem).\n3. Rozpowszechnianie w inny sposób (publiczne wykonanie, wystawienie, wyświetlenie, odtworzenie, nadawanie, reemitowanie oraz udostępnianie w Internecie w wybranym miejscu i czasie)."
  },
  {
    id: 35,
    question: "Czym jest instytucja dozwolonego użytku utworów?",
    answer: "To ograniczenie monopolu prawnego twórcy, pozwalające na nieodpłatne korzystanie z już rozpowszechnionego utworu bez zgody autora i opłat licencyjnych. Dzieli się na użytek prywatny i publiczny. Nie może naruszać normalnego korzystania z utworu ani słusznych interesów twórcy i wymaga poszanowania praw osobistych (oznaczenia autora i źródła)."
  },
  {
    id: 36,
    question: "Jakie uprawnienia w ramach dozwolonego użytku posiadają szkoły i uczelnie (Art. 27 ustawy)?",
    answer: "Mogą na potrzeby zilustrowania treści przekazywanych w celach dydaktycznych lub naukowych korzystać z rozpowszechnionych utworów w oryginale i tłumaczeniu, w tym zwielokrotniać drobne utwory lub fragmenty do 25% objętości, pod warunkiem braku charakteru zarobkowego. Może to odbywać się na terenie instytucji lub w bezpiecznym, uwierzytelnionym środowisku elektronicznym (np. szkolny intranet/Moodle) dostępnym tylko dla uczniów i nauczycieli."
  },
  {
    id: 37,
    question: "Na jakich warunkach wolno korzystać z utworów podczas imprez szkolnych i akademickich (Art. 31 ust. 2 ustawy)?",
    answer: "Wolno nieodpłatnie publicznie wykonywać lub odtwarzać rozpowszechnione utwory, jeżeli:\n• Impreza nie łączy się z osiąganiem korzyści majątkowych (bezpośrednio np. bilety lub pośrednio np. sponsorzy).\n• Artyści wykonawcy i osoby odtwarzające nie otrzymują wynagrodzenia.\n• Wyjątkiem są imprezy reklamowe, promocyjne i wyborcze."
  },
  {
    id: 38,
    question: "Czy dyskoteki i kluby muzyczne podlegają pod te same wyłączenia co imprezy szkolne?",
    answer: "Nie. Kluby i dyskoteki mają cel zarobkowy i muszą uiszczać opłaty (tantiemy) organizacjom zbiorowego zarządzania (np. ZAIKS, STOART, SAWP, ZPAV)."
  },
  {
    id: 39,
    question: "Jakie prawo przysługuje właścicielowi egzemplarza utworu plastycznego (Art. 32 ust. 1 ustawy)?",
    answer: "Właściciel egzemplarza utworu plastycznego może go wystawiać publicznie, jeżeli nie łączy się z tym osiąganie korzyści majątkowych. Ustawa nie upoważnia go jednak do powielania ani sprzedaży prawnej."
  },
  {
    id: 40,
    question: "Kto jest właścicielem fizycznej pracy plastycznej wykonanej przez ucznia w szkole?",
    answer: "• Jeśli uczeń wykonał pracę z własnych materiałów – właścicielem jest uczeń.\n• Jeśli pracę wykonano z materiałów szkoły – szkoła jest właścicielem tylko wtedy, gdy wartość materiałów przewyższa wartość nakładu pracy (Art. 192 KC). W przeciwnym razie właścicielem jest uczeń."
  },
  {
    id: 41,
    question: "Do czego uprawnione są biblioteki szkolne, archiwa i muzea w ramach dozwolonego użytku?",
    answer: "Mogą bez celu zarobkowego:\n1. Użyczać egzemplarze utworów rozpowszechnionych w zakresie zadań statutowych.\n2. Powielać utwory z własnych zbiorów w celu ich uzupełnienia, zachowania lub ochrony.\n3. Udostępniać zbiory na terenie jednostki za pośrednictwem terminali informatycznych znajdujących się na ich terenie."
  },
  {
    id: 42,
    question: "Które biblioteki muszą uiszczać opłaty za użyczanie egzemplarzy (Public Lending Right)?",
    answer: "Tylko biblioteki publiczne (Biblioteka Narodowa oraz biblioteki samorządowe). Biblioteki szkolne i naukowe są zwolnione z tego obowiązku."
  },
  {
    id: 43,
    question: "Jakie są warunki legalnego skorzystania z prawa cytatu (Art. 29 ustawy)?",
    answer: "- Cytowany utwór musi być wcześniej rozpowszechniony.\n- Dzieło cytujące musi stanowić samoistną całość.\n- Rozmiar cytatu musi być w proporcji podrzędnej do własnej twórczości.\n- Cytat musi być odpowiednio oznaczony (cudzysłów, inna czcionka, przypis).\n- Należy podać autora i źródło (w tym spadkobierców/współtwórców).\n- Cel musi być zgodny z ustawą (wyjaśnianie, polemika, analiza, nauczanie)."
  },
  {
    id: 44,
    question: "Na jakich warunkach wolno korzystać z utworów na potrzeby parodii, pastiszu lub karykatury (Art. 29^1 ustawy)?",
    answer: "Wolno korzystać w zakresie uzasadnionym prawami tych gatunków. Parodia musi nawiązywać do oryginału, wykazując uchwytne różnice (by nie sugerować, że pochodzi od oryginalnego autora), i mieć charakter humorystyczny/żartobliwy. Wymagane jest podanie źródła dla uniknięcia plagiatu."
  },
  {
    id: 45,
    question: "Czy zamieszczanie utworów w podręcznikach jest darmowe (Art. 27^1 ustawy)?",
    answer: "Nie. Wolno zamieszczać drobne utwory lub fragmenty większych utworów w podręcznikach, antologiach i wypisach ze względu na całościową koncepcję pedagogiczną, ale wiąże się to z koniecznością zapłaty wynagrodzenia twórcy."
  },
  {
    id: 46,
    question: "Czym jest tzw. \"wolność panoramy\" (Art. 33 pkt 1 ustawy)?",
    answer: "To zezwolenie na rozpowszechnianie (np. na zdjęciach, filmach, rysunkach) utworów wystawionych na stałe na ogólnie dostępnych drogach, ulicach, placach lub w ogrodach. Dopuszczalne jest też ich odpłatne rozpowszechnianie, pod warunkiem, że nie następuje to do tego samego użytku (np. nie budujemy kopii pomnika)."
  },
  {
    id: 47,
    question: "Na czym polega dozwolony użytek osobisty (Art. 23 ustawy) i jakie są jego ograniczenia?",
    answer: "Pozwala bez zezwolenia i opłat korzystać z rozpowszeznionego utworu w zakresie własnego użytku osobistego w kręgu osób pozostających w związku osobistym (rodzina, przyjaciele, bliscy znajomi).\n**Ograniczenia:**\n• Nie wolno budować według cudzego utworu architektonicznego/urbanistycznego.\n• Nie wolno korzystać z elektronicznych baz danych (chyba że do celów naukowych niezarobkowych).\n• Nie dotyczy programów komputerowych i gier."
  }
];
