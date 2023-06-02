# Webbshop API

Detta API tillhandahåller data för en webbshop. Nedan beskrivs tillgängliga endpoints och deras funktioner.

## Produkter

### GET /api/products

Returnerar en lista med alla produkter i webbshoppen.

Exempel på svar:
[
  {
    "id": 1,
    "name": "Produkt 1",
    "price": 199
    "image": "http//url",
    "tags": [ "string" "string" ]
  },
  {
    "id": 2,
    "name": "Produkt 2",
    "price": 299,
    "image": "https//url",
    "tags": [ "string" "string" ]

  },
  ...
]

### GET /api/products/:id

Returnerar den produkten med den id som efterfrågas.


### POST /api/products

Tar in och sparar en produkt i api:et.

### PUT /api/products/:id

Tar in ändringar för en produkt.

### Delete /api/products/:id

Tar bort en product.

## Användare

### GET /api/users

Returnerar en lista med all användare i systemet

Exempel på svar: 

[
  {
    "id": 1,
    "name": "Användare 1"
    "password": "admin1"
  },
  {
    "id": 2,
    "name": "Användare 2"
    "password": "user1"
  }
]

### GET /api/products/:id

Returnerar den usern med den id som efterfrågas.


### POST /api/products

Tar in och sparar en user i api:et.

### PUT /api/products/:id

Tar in ändringar för en user.

### Delete /api/products/:id

Tar bort en user.


## Sökning och sortering
### GET /api/search?query=<söksträng>&sort=<sorteringsattribut>


Returnerar en lista med produkter som matchar en söksträng och sortering.

Exempel på användning:

/api/search?query=produkt&sort=price - Returnerar produkter som matchar "produkt" i namnet och sorterar dem efter pris.
Exempel på svar:
[
    {
      "id": 1,
      "name": "Produkt 1",
      "price": 299,
      "image": ,
      "tags": [string]
    },
    {
      "id": 2,
      "name": "Produkt 2",
      "price": 599,
      "image": ,
      "tags": [string]
    }
        ...
]


