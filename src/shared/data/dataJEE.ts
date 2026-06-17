export type JEEQuestion = {
  id: number;
  question: string;
  answer: string;
};

export const dataJEE: JEEQuestion[] = [
  {
    id: 1,
    question: "Dependency inversion i dependency injection w wybranej technologii",
    answer: "Dependency Inversion (DIP) to zasada mówiąca, że moduły wysokopoziomowe nie powinny zależeć od niskopoziomowych, lecz od abstrakcji. Dependency Injection (DI) realizuje DIP poprzez wstrzykiwanie zależności z zewnątrz. W TypeScript (np. w NestJS) klasy oznaczamy dekoratorami `@Injectable()`, a zależności wstrzykujemy przez konstruktor, przekazując klasy bazowe lub tokeny identyfikacyjne, co eliminuje ręczne tworzenie obiektów przez `new`."
  },
  {
    id: 2,
    question: "Co to jest event-driven architecture?",
    answer: "Event-driven architecture (EDA) to wzorzec architektoniczny oparty na asynchronicznej produkcji, wykrywaniu i konsumpcji zdarzeń (events). Zdarzenie oznacza fakt zaistnienia zmiany stanu w systemie. Komponenty są luźno powiązane, ponieważ nadawca (producer) nie wie, kto i kiedy przetworzy wysłaną wiadomość. Komunikacja odbywa się przez systemy pośredniczące, takie jak brokerzy wiadomości (np. Apache Kafka, RabbitMQ)."
  },
  {
    id: 3,
    question: "Co to jest event-sourcing?",
    answer: "Event sourcing to wzorzec projektowy, w którym stan aplikacji nie jest zapisywany jako pojedynczy, aktualny rekord w bazie danych. Zamiast tego zapisuje się całą chronologiczną historię zdarzeń (events) modyfikujących dane jako niezmienny dziennik (append-only log). Bieżący stan obiektu odtwarza się poprzez sekwencyjne zaaplikowanie wszystkich historycznych zdarzeń (event replay) od początku jego istnienia."
  },
  {
    id: 4,
    question: "Co to jest CQRS?",
    answer: "CQRS (Command Query Responsibility Segregation) to wzorzec architektoniczny dzielący aplikację na dwie osobne części. Command odpowiada za operacje zapisu i modyfikację stanu bazy danych, nie zwracając danych biznesowych. Query służy wyłącznie do odczytu danych, bez wprowadzania jakichkolwiek zmian. Podział ten umożliwia niezależne skalowanie odczytów i zapisów oraz stosowanie dla nich różnych modeli danych i baz."
  },
  {
    id: 5,
    question: "Co to są agregaty?",
    answer: "Agregat (aggregate) w projektowaniu Domain-Driven Design (DDD) to grupa powiązanych obiektów domenowych (encji i value objects), którą traktuje się jako spójną całość przy modyfikacji danych. Posiada on jeden główny obiekt nazywany Aggregate Root. Dostęp z zewnątrz i wszelkie zmiany dozwolone są wyłącznie za pośrednictwem Aggregate Root, co gwarantuje zachowanie spójności i niezmiennych reguł biznesowych (invariants)."
  },
  {
    id: 6,
    question: "Dlaczego odddzielanie logiki biznesowej od bibliotek/frameworków jest korzystne?",
    answer: "Oddzielenie logiki biznesowej (domain rules) od frameworków zapewnia niezależność i ułatwia testowanie kodu. Rdzeń aplikacji staje się odporny na zmiany zewnętrzne: wymiana biblioteki bazodanowej, systemu kolejkowego czy frameworka webowego (np. migracja ze Spring Boot na Quarkus) nie wymaga przepisywania logiki biznesowej. Zapobiega to vendor lock-in, ułatwia utrzymanie systemu oraz pisanie szybkich testów jednostkowych (unit tests) bez uruchamiania kontenerów."
  },
  {
    id: 7,
    question: "Co to jest eventual consistency?",
    answer: "Eventual consistency (spójność ostateczna) to model spójności w systemach rozproszonych. Zakłada, że po aktualizacji danych repliki w różnych węzłach mogą chwilowo posiadać nieaktualne informacje. Jeśli nie zostaną wprowadzone nowe modyfikacje, dane we wszystkich węzłach ostatecznie staną się identyczne. Umożliwia to rezygnację z silnej spójności (strong consistency) na rzecz wyższej dostępności (availability) i odporności na podział (partition tolerance)."
  },
  {
    id: 8,
    question: "Jakie elementy wybranej przez Ciebie technologii `enterprise` (JEE, .NET) służą do osiągania wysokiej jakości tworzonego systemu?",
    answer: "W ekosystemie TypeScript (reprezentującym architekturę enterprise np. przez NestJS) wysoką jakość zapewniają:\n• NestJS DI & Modules: wymuszające modularność i ułatwiające testowanie.\n• TypeScript Compiler (strict mode): eliminujący błędy typów na etapie kompilacji.\n• class-validator & class-transformer: deklaratywna walidacja danych (DTO) dekoratorami.\n• NestJS Interceptors & Pipes: czyste rozdzielenie odpowiedzialności i walidacji.\n• Jest / Vitest: automatyzacja testów jednostkowych i e2e."
  }
];
