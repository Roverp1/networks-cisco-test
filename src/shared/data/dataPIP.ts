export type PIPQuestion = {
  id: number;
  question: string;
  answer: string;
};

export const dataPIP: PIPQuestion[] = [
  {
    id: 1,
    question: "Co to jest wzorzec projektowy?",
    answer: "To uniwersalne, sprawdzone w boju rozwiązanie często powtarzającego się problemu projektowego. Nie jest to gotowy kod, który można skopiować, lecz szablon postępowania, który adaptujesz do konkretnej sytuacji. Wzorce ułatwiają komunikację w zespole (mówisz nazwę wzorca i każdy wie, o jaką strukturę chodzi) oraz promują dobre praktyki (SOLID, luźne powiązania). Dzielimy je na kreacyjne, strukturalne i behawioralne."
  },
  {
    id: 2,
    question: "Opisz wzorzec Singleton.",
    answer: "Wzorzec kreacyjny gwarantujący, że dana klasa będzie miała tylko jedną instancję w obrębie całego programu i zapewniający do niej globalny punkt dostępu.\n\nKluczowe cechy:\n• Prywatny konstruktor (blokada tworzenia new z zewnątrz).\n• Statyczne pole przechowujące instancję.\n• Statyczna metoda publiczna (np. getInstance()) zwracająca tę instancję.\n\nCzęsto nadużywany (antywzorzec), utrudnia testowanie (ukryte zależności) i zrównoleglanie kodu."
  },
  {
    id: 3,
    question: "Jak można zrealizować odroczenie ewaluacji jakiegoś wyrażenia, np. tworzenia obiektu singletona?",
    answer: "Stosując Leniwą Inicjalizację (Lazy Initialization). Obiekt nie jest tworzony w momencie startu aplikacji (co zżera pamięć i czas startu), ale dopiero w momencie pierwszego wywołania metody pobierającej (np. getInstance).\n\nWewnątrz metody sprawdzasz: \"czy instancja jest null?\". Jeśli tak – tworzysz ją. Jeśli nie – zwracasz gotową. W środowisku wielowątkowym wymaga to synchronizacji (np. Double-Checked Locking), aby dwa wątki nie utworzyły dwóch obiektów naraz."
  },
  {
    id: 4,
    question: "Opisz wzorzec Abstract Factory.",
    answer: "To \"fabryka fabryk\". Interfejs służący do tworzenia rodzin powiązanych ze sobą lub zależnych od siebie obiektów bez precyzowania ich konkretnych klas.\n\nKlient używa abstrakcyjnego interfejsu (np. GUIFactory), żeby stworzyć przycisk czy okno, nie wiedząc, czy pod spodem powstaje wersja dla Windows, czy macOS. Pozwala to wymieniać całe zestawy produktów jedną zmianą konfiguracji, zachowując spójność (nie pomieszasz przycisku Windows z oknem Maca)."
  },
  {
    id: 5,
    question: "Opisz wzorzec Factory Method.",
    answer: "Wzorzec definiujący interfejs do tworzenia obiektu, ale pozwalający klasom podrzędnym zdecydować, jakiej klasy instancję utworzyć.\n\nZamiast wywoływać konstruktor bezpośrednio (new Dog()), wywołujesz metodę (np. createAnimal()), a podklasa decyduje, co z niej wypadnie. Pozwala to na rozszerzanie kodu o nowe typy obiektów bez modyfikacji kodu klienta (Open/Closed Principle). Kluczowe słowo: delegacja tworzenia do podklas."
  },
  {
    id: 6,
    question: "Opisz zasady COTS.",
    answer: "Commercial Off-The-Shelf (komercyjne produkty z półki). Strategia polegająca na kupowaniu i używaniu gotowych rozwiązań (bibliotek, frameworków, całych systemów) zamiast pisania ich od zera.\n\n• Zalety: Szybsze wdrożenie, niższy koszt początkowy, wsparcie producenta, sprawdzona jakość.\n• Wady: Uzależnienie od dostawcy (vendor lock-in), brak wpływu na rozwój produktu, trudności w integracji, możliwe ukryte błędy, za które nie odpowiadasz, ale przez które cierpisz."
  },
  {
    id: 7,
    question: "Opisz wzorzec Builder. Do czego on służy?",
    answer: "Służy do oddzielenia procesu konstrukcji złożonego obiektu od jego reprezentacji. Pozwala tworzyć skomplikowane obiekty krok po kroku.\n\nIdealny, gdy obiekt ma wiele pól, z których część jest opcjonalna (eliminuje problem tzw. teleskopowych konstruktorów z dziesięcioma parametrami, gdzie łatwo o pomyłkę). Używasz go, pisząc np. new Builder().SetA().SetB().Build(). Daje czytelny, płynny interfejs (fluent interface)."
  },
  {
    id: 8,
    question: "Kim był i co wniósł do inżynierii oprogramowania Christopher Alexander?",
    answer: "To architekt budowlany (nie informatyk), który w latach 70. stworzył koncepcję Języka Wzorców (Pattern Language) w architekturze miast i budynków. Zauważył, że pewne problemy konstrukcyjne powtarzają się i mają sprawdzone rozwiązania.\n\nJego praca zainspirowała \"Bandę Czworga\" (Gang of Four) do przeniesienia tej idei na grunt inżynierii oprogramowania. Jest \"duchowym ojcem\" wzorców projektowych w IT."
  },
  {
    id: 9,
    question: "Czy w programach współbieżnych można korzystać ze wzorców rozwiązujących problemy wielowątkowości?",
    answer: "Tak, jest to wręcz konieczne. Istnieje cała kategoria Wzorców Współbieżności (Concurrency Patterns).\n\nPrzykłady:\n• Monitor Object: Synchronizacja dostępu do metody.\n• Active Object: Oddzielenie wywołania metody od jej wykonania (wątek w tle).\n• Producer-Consumer: Buforowanie danych między wątkami.\n• Thread Pool: Zarządzanie pulą robotników zamiast ciągłego tworzenia wątków.\n\nUżywanie ich zapobiega typowym błędom jak deadlocki czy race conditions, dając sprawdzone struktury synchronizacji."
  },
  {
    id: 10,
    question: "Czy wzorce projektowe są wystarczające do tego, aby oprogramowanie miało wysoką jakość? Odpowiedź uzasadnij.",
    answer: "Nie. Wzorce to tylko narzędzie, a nie lek na całe zło.\n\nUzasadnienie:\n1. Over-engineering: Wciskanie wzorców na siłę tam, gdzie wystarczy prosta funkcja, zaciemnia kod i utrudnia utrzymanie.\n2. Kontekst: Wzorzec użyty w złym kontekście staje się antywzorcem.\n3. Jakość wymaga też testów (Unit/Integration), przestrzegania zasad SOLID, zrozumienia domeny biznesowej i czystego kodu. Wzorce budują szkielet, ale nie gwarantują, że mięso (logika) nie jest zepsute."
  }
];
