# Test di accesso a Cosmogas SSO

Questo progetto contiene un test automatizzato con Cypress per verificare l'accesso al sistema SSO di Cosmogas e la navigazione al portale My Cosmogas.

## Requisiti

- Node.js
- Cypress

## Installazione

Clonare il repository ed eseguire i seguenti comandi:

```sh
npm install
```

## Esecuzione del test

Per eseguire il test, usare il seguente comando:

```sh
npx cypress open
```

## Descrizione del test

Il test esegue i seguenti passaggi:

1. Imposta la viewport su 1920x1080
2. Visita la pagina di login di Cosmogas SSO
3. Chiude il banner dei cookie
4. Inserisce l'email
5. Clicca sul pulsante "Avanti"
6. Inserisce la password
7. Clicca sul pulsante "Accedi"
8. Clicca sul link per accedere al "Portale My Cosmogas"
9. Attende che l'URL lasci il dominio SSO
10. Passa al nuovo dominio (my.cosmogas.com)
11. Verifica che l'URL di destinazione sia corretto
12. Controlla che il link "Documentale" sia visibile sulla pagina
