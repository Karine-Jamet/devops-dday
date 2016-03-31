Mode d'emploi du site Devops DDay



1 - Rendre visible les sponsors

La section sponsor commence à la ligne 115 .

Par la balise :

<section class="sponsorSec" style="display:none;" >

style="display:none;" est la commande qui rend la section invisible.
Il suffit de la supprimé pour la rendre visible.

<section class="sponsorSec">


2 - Ajouter un sponsor

Ajouter le logo dans le dossier images/sponsor. Attention a ne pas mettre d'espace dans le nom du fichier.
Pas besoin de redimensionner l'image.

Il y a deux espaces dans la pages ou ajouter un logo.
Celui pour les sponsor et celui pour les partenaires media.
Il sont indiquer par des commentaires.

Pour Ajouter une logo il faut copier coller ces lignes :

<a href="Liens vers site" target="_blank">
      <img class="logoSponso" src='images/sponsor/nom_de_l_image' alt="Description de l'image"/>
</a>

Tout en modifiant "Liens vers site", nom_de_l_image et la description de l'image pour le référencement c'est mieux.


3 - Rendre visible les intervenants

Tout comme les sponsor il faut ajouter ou supprimer la commande style="display:none;"

Invisible :
  <section class="speaker" style="display:none;" >

Visible :
  <section class="speaker" >


4 - Ajouter un intervenant

La photo de l'intervenant doit être placer dans le dossier images/speaker.
Pas besoin de redimensionner l'image.

Puis il faut copier et coller le bloque html suivant dans la zone indiquée par les commentaires.

<div class="speakerProfile">
  <div class="speakerPhoto" style="background-image:url('images/speaker/NOM_IMAGE')"></div>
  <div class="speakerDesc">
    <h3>NOM DU SPEAKER</h3>
    <p>PRESENTATION</p>
    <p>PRESENTATION</p>
    <p>PRESENTATION</p>
    <p>@ SOCIETE</p>
  </div>
</div>

Il faut modifier ce qu'il y a à la 2em ligne afin d'ajouter la photo de l'intervenant.

style="background-image:url('images/speaker/NOM_IMAGE')"

Puis il suffit de remplir chaque ligne.
Il ne peu pas y avoir plus que 3 lignes de présentation, au risque de casser le style.
Si il y a besoin de moins de 3 lignes il suffit de supprimer la ligne. Le style s'adapte.

5 - Modifier le planning

Le planning est découper en 2 images rectangulaires.
Il y a 2 solutions pour modifier le planning,
soit modifier directement les images planning1.png ou planning2.png (En les remplaçant et gardant le même nom par exemple. Pas besoin de redimensionner il faut juste qu'elles soit rectangulaire.)

Soit en ajoutant 2 nouvelle photo dans images et en changeant le nom des images dans les balises img de la section agenda.

AVANT
<img class="firstImg" src="images/planning1.png"><img src="images/planning2.png">

Après
<img class="firstImg" src="images/nom_de_la_nouvelle_image1"><img src="images/nom_de_la_nouvelle_image2">




6 - SAV

Pour tout autre type de modifications vous pouvez contacter le service après-vente :

karine.jamet203@gmail.com
0677766967


Bon courage ! ;)
