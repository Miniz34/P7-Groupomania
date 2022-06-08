# P7-Groupomania

# Project

Projet 7 du parcours Web d'Openclassrooms
Par Karim Farhi (Miniz34)


### Package nécessaires

```Node.js```
```Mysql```
```Vue.js```


### Installation du Backend

1. Accéder au Backend
``` bash 
cd backend
```


2. Install NPM
``` bash
npm install
```

3. Installer une base de donnée (2 options possibles)

Option 1 : base de donnée vide :
``` bash
Créer une nouvelle database nommée "groupomania_dev". Le lancement du serveur créera les tables
 ```
Option 2 : importer le fichier database.sql


``` bash
mysql -u root -p < chemin\vers\database.sql
 ```
 le fichier database.sql va créer la base de donnée, les 3 tables, 2 utilisateurs dont 1 admin, 2 post et 2 commentaires


4. Renommer `.env_copy` en `.env` et le modifier si besoin



5. Lancer le serveur
``` bash
nodemon server
```
ou

``` bash
node server.js
```


### Installation du Frontend

1. Accéder au Frontend
``` bash
cd frontend
```

2. Install NPM
``` bash
npm install
```


3. Lancer le Frontend
``` bash
npm run serve
```

### Accéder au site

lancer l'url : http://localhost:8080/


### Auteur


* **Karim Farhi** -  - [github](https://github.com/Miniz34)



