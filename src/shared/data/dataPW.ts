export type PWQuestion = {
  id: number;
  question: string;
  answer: string;
};

export const dataPW: PWQuestion[] = [
  {
    id: 1,
    question: "Na czym polega współbieżność (ang. concurrency) i jakie są jej zastosowania?",
    answer: "Współbieżność to logiczna jednoczesność. Wiele zadań robi postępy w nakładających się przedziałach czasu, ale niekoniecznie w tej samej chwili (np. szybkie przełączanie na jednym rdzeniu). To iluzja równoległości.\n\nZastosowania:\n• Responsywność interfejsu (GUI nie zamarza, gdy program liczy coś w tle).\n• Obsługa wielu klientów naraz w serwerach.\n• Lepsze wykorzystanie czasu procesora, gdy zadania czekają na I/O."
  },
  {
    id: 2,
    question: "Na czym polega zrównoleglenie (ang. parallelism) i jakie są jego zastosowania?",
    answer: "Zrównoleglenie to fizyczna jednoczesność. Zadania wykonują się w dokładnie tym samym momencie na różnych jednostkach sprzętowych (wielordzeniowe CPU, GPU). Wymaga sprzętowego wsparcia.\n\nZastosowania:\n• Obliczenia naukowe i symulacje.\n• Przetwarzanie grafiki i wideo.\n• Big Data i uczenie maszynowe.\n• Przyspieszenie zadań obliczeniowo intensywnych."
  },
  {
    id: 3,
    question: "Wyjaśnij pojęcia: zadanie, wątek, proces.",
    answer: "• Proces: Uruchomiony program. Posiada własną, izolowaną przestrzeń adresową i zasoby. Ciężki w tworzeniu i przełączaniu. Awaria procesu nie zabija innych.\n\n• Wątek (Thread): Jednostka wykonawcza wewnątrz procesu. Wątki współdzielą pamięć i zasoby procesu. Lekkie, szybkie przełączanie, ale błąd jednego może wysadzić cały proces.\n\n• Zadanie (Task): Abstrakcyjna jednostka pracy do wykonania. Często krótsza niż życie wątku, zarządzana przez pulę wątków (thread pool). Oddziela \"co ma być zrobione\" od \"kto to zrobi\"."
  },
  {
    id: 4,
    question: "W jaki sposób jądro systemu operacyjnego przydziela procesory do zadań?",
    answer: "Jądro używa planisty (schedulera). Dzieli czas procesora na małe kawałki (kwanty). Działa brutalnie:\n\n1. Przerywa aktualnie działający wątek (wywłaszczanie).\n2. Zapisuje jego stan (rejestry, stos) – to tzw. context switch.\n3. Wybiera kolejny wątek z kolejki \"Ready\" (według priorytetu lub sprawiedliwości).\n4. Ładuje jego stan i puszcza procesor.\n\nDzięki temu masz wrażenie, że wszystko działa naraz."
  },
  {
    id: 5,
    question: "Co to jest race condition(s)?",
    answer: "Wyścig. Sytuacja krytyczna, w której wynik działania programu zależy od niekontrolowanej kolejności wykonania wątków (kto pierwszy, ten lepszy/gorszy). Występuje, gdy wątki dobierają się do wspólnych danych bez synchronizacji. Skutki: korupcja danych, trudne do powtórzenia błędy (heisenbugi), niespójny stan systemu."
  },
  {
    id: 6,
    question: "Co to jest sekcja krytyczna?",
    answer: "Fragment kodu, w którym wątek operuje na zasobie współdzielonym (np. zmienia wartość globalnej zmiennej, pisze do pliku). W sekcji krytycznej może przebywać tylko jeden wątek naraz. Jeśli wpuścisz tam tłum, doprowadzisz do wyścigu (race condition) i zniszczysz dane. Musi być krótka i szybka."
  },
  {
    id: 7,
    question: "Opisz działanie sprawiedliwego i niesprawiedliwego binarnego semafora.",
    answer: "• Sprawiedliwy (Fair): Działa jak uczciwa kolejka w sklepie (FIFO). Wątek, który zażądał dostępu pierwszy, dostaje go pierwszy. Zaleta: brak zagłodzenia (starvation). Wada: wolniejszy przez narzut na zarządzanie kolejką.\n\n• Niesprawiedliwy (Unfair): Nowy wątek może \"wepchnąć się\" i przejąć semafor, zanim obudzi się ten czekający. Zaleta: wyższa przepustowość (throughput). Wada: ryzyko zagłodzenia czekających wątków."
  },
  {
    id: 8,
    question: "Jakie znasz mechanizmy pozwalające na tworzenie sekcji krytycznych?",
    answer: "• Mutexy (Mutual Exclusion): Podstawowa blokada \"tylko dla jednego\".\n• Semafory: Kontrolują dostęp dla N wątków (binarny semafor to de facto mutex).\n• Monitory: Wysokopoziomowe obiekty z wbudowaną synchronizacją.\n• Spinlocki: Aktywne czekanie w pętli (dobre tylko na bardzo krótkie chwile).\n• ReadWriteLock: Osobne zasady dla czytających i piszących.\n• Zmienne atomowe (Atomics): Operacje niepodzielne wspierane sprzętowo (np. CAS)."
  },
  {
    id: 9,
    question: "Jakie jest działanie bloku synchronized w języku Java lub C#?",
    answer: "Służy do uzyskania wyłączności na monitorze obiektu.\n\n1. Wątek próbuje wejść w blok kodu.\n2. Jeśli inny wątek jest w środku – czekasz (blokada).\n3. Tylko jeden wątek wykonuje kod wewnątrz.\n4. Przy wyjściu zwalnia blokadę i zapewnia memory visibility (wszystkie zmiany w pamięci są widoczne dla kolejnych wątków).\n\nProste, ale blokujące rozwiązanie."
  },
  {
    id: 10,
    question: "Co to są monitory i do czego służą?",
    answer: "Monitor to wysokopoziomowa struktura synchronizacyjna. Łączy dane z procedurami, które mają do nich wyłączny dostęp.\n\n• Gwarantuje, że tylko jeden wątek naraz wykonuje metodę monitora (mutex).\n• Posiada mechanizm wait/notify (zmienne warunkowe) do usypiania i budzenia wątków, gdy warunki do pracy nie są spełnione.\n\nSłużą do bezpiecznego programowania wielowątkowego bez ręcznego żonglowania mutexami."
  },
  {
    id: 11,
    question: "Co to znaczy, że monitor jest re-entrant w odróżnieniu od semafora, który tej właściwości nie posiada?",
    answer: "Re-entrant (wchodzący ponownie) oznacza, że jeśli wątek już trzyma klucz (blokadę), może wejść przez kolejne drzwi zamknięte tym samym kluczem bez zablokowania samego siebie. Monitor po prostu zwiększa licznik wejść.\n\nZwykły semafor nie wie, kto go trzyma. Jeśli ten sam wątek spróbuje wziąć semafor drugi raz, zatrzaśnie się na amen (deadlock)."
  },
  {
    id: 12,
    question: "Opisz problem czytelników i pisarzy i przedstaw w formie opisowej propozycję jego rozwiązania.",
    answer: "Problem: Mamy zasób (baza danych). Czytać może wielu naraz (to bezpieczne). Pisać może tylko jeden i nikt inny nie może wtedy czytać ani pisać.\n\nRozwiązanie: Użycie blokady ReadWriteLock.\n• Zezwalaj na wejście wielu czytelnikom, dopóki nie ma pisarza.\n• Gdy przychodzi pisarz, zablokuj nowych czytelników. Czekaj, aż obecni wyjdą.\n• Wpuść pisarza na wyłączność.\n• Trzeba uważać na zagłodzenie (np. priorytet dla pisarzy, żeby nie czekali w nieskończoność na koniec czytania)."
  },
  {
    id: 13,
    question: "Opisz problem 5 filozofów i przedstaw w formie opisowej propozycję jego rozwiązania.",
    answer: "Problem: 5 filozofów przy stole, 5 widelców między nimi. Do jedzenia trzeba dwóch widelców. Jeśli wszyscy chwycą naraz lewy widelec, czekają na prawy w nieskończoność. Martwy ciąg (deadlock) – wszyscy umierają z głodu.\n\nRozwiązanie (Hierarchia zasobów):\nPonumeruj widelce od 1 do 5. Wprowadź zasadę: Zawsze podnoś najpierw widelec o niższym numerze, potem o wyższym. To łamie cykl zależności – ostatni filozof nie podniesie \"pierwszego\" widelca, co pozwala innemu zjeść."
  },
  {
    id: 14,
    question: "Na czym polega synchroniczne i asynchroniczne wywoływanie procedur?",
    answer: "• Synchroniczne: Dzwonisz do pizzerii i wisisz na słuchawce, aż pizza będzie gotowa. Blokujesz swój czas. Kod czeka na zakończenie operacji przed przejściem dalej.\n\n• Asynchroniczne: Zamawiasz pizzę, dostajesz numerek i robisz swoje. Jak pizza będzie gotowa, dostaniesz powiadomienie (callback). Nie blokujesz wątku wywołującego, operacja dzieje się w tle."
  },
  {
    id: 15,
    question: "Jaki znasz metody implementacji asynchronicznego wywoływania procedur w wybranym języku programowania?",
    answer: "W C# lub Java:\n\n1. Pule wątków: ThreadPool / ExecutorService – wrzucasz zadanie, ono leci w tle.\n2. Task / Future: Obiekty reprezentujące wynik, który \"będzie kiedyś\" (Task<T>, CompletableFuture).\n3. Słowa kluczowe async/await (C#): Kompilator zamienia kod w maszynę stanów, pozwalając pisać kod asynchroniczny, który wygląda jak liniowy.\n4. Callbacki: Przekazanie funkcji, która odpali się po zakończeniu zadania."
  }
];
