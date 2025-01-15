# RacoTube

![image](https://github.com/user-attachments/assets/12c7cb1c-68a9-4e4a-beb8-ab3cf5ff3a0b)

## A Propos

RacoTube est une extension de navigateur qui vous permet de racooner YouTube. Vous aimez les ratons-laveurs? Vous allez
être servis.

## Installation

Clonez le Repository, https://github.com/adatechschool/projet-collectif-nantes-extension-navigateur-peef-team.git en local.
Lancer Google Chrome, copiez l'adresse suivante dans le navaigateur => chrome://extensions.
Puis allez chercher l'extention dans la partie "Charger l'extention non empaquetée". 
Sur la page YouTube 
![Capture d'écran 2025-01-14 163446](https://github.com/user-attachments/assets/4fc2aa79-6e76-4972-a32a-1c6f9952eadf),
cliquez sur l'icone puis sur l'extension et profitez de l'expérience.

## Architecture

  1. Manifest.json
     * backgroud.js => Injecte les autres fichiers JavaScript et contient le code qui modifie le logo.
     * connecting.js => Permet de modifier le texte "Se Connecter" en "Se Racooner".
     * image.js => Appel l'api api.racc.lol afin de remplacer les miniatures et les shorts des vidéos par les
       images de l'api.
     * liens.js => Redirige les liens des vidéos et des shorts vers des vidéos de ratons-laveurs disponible sur l'api.
     * modificationTexte.js => Rajoute le mot "Racoon" devant les textes des vidéos. Ainsi que sur la navbar gauche
       de YouTube.
              
## L'équipe

Pif
Paf
Pouf


