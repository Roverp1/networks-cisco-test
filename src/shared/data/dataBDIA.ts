export type BDIAQuestion = {
  id: number;
  question: string;
  answer: string;
};

export const dataBDIA: BDIAQuestion[] = [
  {
    id: 1,
    question: "Co to są transakcje w systemach wykorzystujących bazy danych?",
    answer: "Transakcja to niepodzielna jednostka pracy (logical unit of work) na bazie danych. Grupuje zestaw operacji, które muszą wykonać się w całości albo wcale. Jeśli choć jeden krok się nie powiedzie, system wycofuje wszystkie dotychczasowe zmiany (rollback). Dzięki temu baza danych zachowuje spójność (consistency), nawet gdy dojdzie do awarii zasilania lub błędu aplikacji."
  },
  {
    id: 2,
    question: "Jakie jest znaczenie liter w akronimie ACID?",
    answer: "ACID to zestaw właściwości gwarantujących niezawodne przetwarzanie transakcji:\n• A (Atomicity): transakcja wykonuje się w całości albo wcale.\n• C (Consistency): po zakończeniu transakcji stan danych pozostaje spójny z regułami walidacji.\n• I (Isolation): współbieżne transakcje nie wpływają na siebie nawzajem.\n• D (Durability): zatwierdzone (committed) dane są trwale zapisane i nie znikną przy awarii."
  },
  {
    id: 3,
    question: "Jakie znasz poziomy izolacji transakcji?",
    answer: "Standard SQL definiuje cztery poziomy izolacji transakcji. Od najsłabszego do najsilniejszego są to:\n1. Read Uncommitted: transakcja widzi niezatwierdzone (uncommitted) zmiany innych wątków.\n2. Read Committed: odczytywane są wyłącznie dane zatwierdzone (committed).\n3. Repeatable Read: wielokrotny odczyt tych samych rekordów daje identyczny wynik.\n4. Serializable: pełna izolacja, transakcje wykonują się współbieżnie tak, jakby działały sekwencyjnie."
  },
  {
    id: 4,
    question: "Jakie niekorzystne zjawiska występują w systemach transakcyjnych przy poszczególnych poziomach izolacji?",
    answer: "Trzy główne anomalie to Dirty Read, Non-repeatable Read oraz Phantom Read.\n• Read Uncommitted dopuszcza wszystkie trzy anomalie.\n• Read Committed zapobiega Dirty Read, ale dopuszcza Non-repeatable Read i Phantom Read.\n• Repeatable Read dodatkowo eliminuje Non-repeatable Read, lecz pozwala na Phantom Read.\n• Serializable całkowicie zabezpiecza bazę przed każdą z tych trzech anomalii."
  },
  {
    id: 5,
    question: "Co się stanie, kiedy dwie jednoczesne transakcje SERIALIZABLE brudzą ten sam rekord w tabeli?",
    answer: "W bazie z MVCC pierwsza transakcja blokuje rekord. Druga zostaje wstrzymana. Jeśli pierwsza zatwierdzi zmiany (commit), druga natychmiast zakończy się błędem serializacji (serialization failure) i zostanie wycofana. Aplikacja musi wtedy obsłużyć ten wyjątek i ponowić (retry) całą transakcję. Jeśli pierwsza transakcja zrobi rollback, druga pomyślnie dokona modyfikacji."
  },
  {
    id: 6,
    question: "Co się stanie, kiedy dwie jednoczesne transakcje READ COMMITTED brudzą ten sam rekord w tabeli?",
    answer: "Pierwsza transakcja blokuje rekord. Druga czeka. Jeśli pierwsza wykona rollback, druga modyfikuje rekord. Jeśli pierwsza zrobi commit, druga wznawia działanie, pobiera najnowszą zatwierdzoną wersję wiersza i aplikuje swoją zmianę. Nie dochodzi do serialization failure, ale może pojawić się lost update (utracona modyfikacja), jeśli kod aplikacji nie został przed tym zabezpieczony."
  },
  {
    id: 7,
    question: "Co się stanie, kiedy dwie jednoczesne transakcje SERIALIZABLE brudzą dwa różne rekordy w tabeli?",
    answer: "Jeśli modyfikacje są niezależne i nie ma konfliktu odczytu do zapisu, obie transakcje zakończą się sukcesem. Jeśli jednak wystąpi write skew (np. transakcja A zmienia rekord X na podstawie odczytu Y, a transakcja B zmienia Y na podstawie odczytu X), silnik bazy wykryje naruszenie izolacji. Jedna z transakcji zostanie wtedy wycofana z błędem serialization failure."
  },
  {
    id: 8,
    question: "Co to jest optimistic locking?",
    answer: "Optimistic locking to metoda kontroli współbieżności zakładająca, że konflikty występują rzadko. Transakcje nie blokują rekordów podczas odczytu. Weryfikacja następuje przy zapisie za pomocą kolumny version lub timestamp. Jeśli przed zatwierdzeniem wersja w bazie uległa zmianie przez inną transakcję, aktualizacja kończy się wyjątkiem (np. OptimisticLockException), a aplikacja musi ponowić całą operację."
  },
  {
    id: 9,
    question: "Jaką architekturę systemu zaproponować, kiedy elementami logiki biznesowej objętej gwarancjami transakcyjnymi (z możliwością restartów transakcji) są “uderzenia” w zewnętrzne end-pointy?",
    answer: "Połączeń HTTP nie da się cofnąć poprzez rollback. Należy oddzielić transakcję DB od wywołań zewnętrznych. Najlepiej zastosować Outbox Pattern. Logika biznesowa zapisuje intencję wykonania requestu w tabeli outbox w ramach jednej transakcji. Osobny proces (worker) odczytuje te wpisy asynchronicznie, wysyła żądania na zewnętrzne endpointy, dba o retry i zapewnia idempotencyjność po stronie odbiorcy."
  },
  {
    id: 10,
    question: "Jakie kroki należy podjąć w kodzie programu, aby zadać zapytanie (query lub upsert/delete) do bazy danych na poziomie wybranego języka programowania (Java/C#, etc.)?",
    answer: "W TypeScript (np. w bibliotece pg) należy:\n1. Zaimportować i skonfigurować pulę połączeń (connection pool).\n2. Pobrać klienta z puli (`await pool.connect()`).\n3. Rozpocząć transakcję wykonując `BEGIN`.\n4. Wykonać parametryzowane zapytanie (`client.query(sql, params)`) zapobiegające SQL Injection.\n5. Zatwierdzić (`COMMIT`) lub wycofać (`ROLLBACK`) transakcję w bloku `catch`.\n6. Zwolnić zasoby w bloku `finally` (`client.release()`)."
  }
];
