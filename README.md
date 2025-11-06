# Site Web Jean-Plume

## Description
Site vitrine pour le duo musical Jean-Plume, proposant trois offres thématiques distinctes : Chanson Française, Swing et Latin.

## Structure du projet

```
jean-plume/
├── index.html              # Landing page (page d'atterrissage)
├── accueil.html           # Page d'accueil principale
├── offre1.html            # Offre Chanson Française (Art Déco)
├── offre2.html            # Offre Swing (Jazz années 1940)
├── offre3.html            # Offre Latin (Chaleur festive)
├── videos.html            # Galerie de vidéos YouTube
├── concerts.html          # Liste des concerts (à venir et passés)
├── apropos.html           # Biographies des artistes
├── contact.html           # Formulaire et coordonnées
├── favicon.ico            # Icône du site
├── css/
│   ├── main.css          # Styles neutres (bleu ciel/blanc)
│   ├── offre1.css        # Styles Chanson Française
│   ├── offre2.css        # Styles Swing
│   └── offre3.css        # Styles Latin
├── js/
│   ├── main.js           # Fonctionnalités communes
│   ├── player.js         # Player audio permanent
│   └── animations.js     # Animations (landing, à propos)
├── images/               # VOUS DEVEZ AJOUTER VOS IMAGES ICI
│   ├── logo.png
│   ├── back1.jpg
│   ├── Image2.png
│   ├── Image3.png
│   ├── Image4.png
│   ├── Image5.png
│   ├── gwen.png
│   └── noemie.png
└── musics/               # VOUS DEVEZ AJOUTER VOS FICHIERS AUDIO ICI
    ├── Avec_les_anges.mp3
    ├── Busy_line.mp3
    ├── Ca_tourne_pas_rond.mp3
    ├── Le_danger_de_la_valse.mp3
    ├── Parle-moi_d_autre_chose.mp3
    ├── Tu_verras.mp3
    └── Under_a_blanket_of_blue.mp3
```

## Fonctionnalités principales

### 1. Landing Page (index.html)
- Photo plein écran noir & blanc avec overlay
- Animation de notes de musique qui suivent la souris
- Toute la page est cliquable pour accéder à l'accueil
- Transition fluide vers la page d'accueil

### 2. Page d'Accueil (accueil.html)
- **Hero section** : Grande photo avec titre "Jean-Plume"
- **Section "Nos Offres"** : 3 boutons élégants pour accéder aux offres thématiques
- **Bienvenue** : Description du duo
- **Actualités** : Prochain concert (15/11/2025)
- **Carrousel** : 4 photos avec navigation

### 3. Pages Offres (offre1/2/3.html)
Chaque offre a son **esthétique unique** :

#### Offre 1 - Chanson Française
- Style Art Déco années 1920
- Palette : Noir, Or, Bordeaux, Crème
- Typographie : Playfair Display, Cormorant Garamond
- 4 chansons dans la playlist

#### Offre 2 - Swing
- Style Jazz années 1940
- Palette : Bleu nuit, Orange vif, Blanc cassé, Noir
- Typographie : Bebas Neue, Roboto Slab
- 2 chansons dans la playlist

#### Offre 3 - Latin
- Style Latin festif
- Palette : Rouge terre, Turquoise, Jaune soleil, Corail
- Typographie : Righteous, Open Sans
- 2 chansons dans la playlist

### 4. Player Audio Permanent
- Présent sur toutes les pages (sauf landing)
- Contrôles : Lecture/Pause, Suivant, Précédent, Volume
- Égaliseur animé
- Playlist adaptée à chaque page
- Design gradient violet/violet foncé

### 5. Page Vidéos (videos.html)
- 3 sections : Chanson Française, Swing, Latin
- Vidéos YouTube intégrées
- Grille responsive
- Effet overlay au survol

### 6. Page Concerts (concerts.html)
- Section "Concert à venir" mise en avant
- Timeline interactive pour les concerts passés
- Affichage repliable des concerts passés
- Cartes avec animations au scroll

### 7. Page À Propos (apropos.html)
- Animation de fond : notes de musique reliées par des fils
- Biographies de Gwen Ollivier et Noémie Nael
- Photos circulaires des artistes
- Design en cartes élégantes

### 8. Page Contact (contact.html)
- Coordonnées des artistes (téléphone, email)
- Formulaire de contact fonctionnel
- Liens vers SoundCloud et YouTube
- Design en deux colonnes (desktop)

## Responsive Design
- **Desktop** : > 1024px
- **Tablette** : 768px - 1024px
- **Mobile** : < 768px
- Menu burger sur mobile
- Layout adapté pour chaque résolution

## Technologies utilisées
- HTML5 sémantique
- CSS3 (Flexbox, Grid, Animations)
- JavaScript Vanilla
- Google Fonts (Montserrat, Open Sans, Playfair Display, etc.)
- Pas de dépendances externes

## Installation et utilisation

### Prérequis
Vous devez ajouter les fichiers suivants :

1. **Images** (dossier `/images/`) :
   - logo.png
   - back1.jpg (photo noir & blanc pour landing)
   - Image2.png à Image5.png (carrousel)
   - gwen.png (photo de Gwen)
   - noemie.png (photo de Noémie)

2. **Fichiers audio** (dossier `/musics/`) :
   - Avec_les_anges.mp3
   - Busy_line.mp3
   - Ca_tourne_pas_rond.mp3
   - Le_danger_de_la_valse.mp3
   - Parle-moi_d_autre_chose.mp3
   - Tu_verras.mp3
   - Under_a_blanket_of_blue.mp3

3. **Favicon** :
   - favicon.ico (à la racine)

### Déploiement
1. Placez tous les fichiers sur votre serveur web
2. Assurez-vous que tous les chemins sont corrects
3. Le site est prêt à être consulté !

### Développement local
Pour tester en local :
```bash
# Option 1 : Serveur Python
python -m http.server 8000

# Option 2 : Serveur Node.js
npx http-server

# Option 3 : Extension VS Code "Live Server"
```

Puis ouvrez : `http://localhost:8000/index.html`

## Liens importants
- **SoundCloud** : https://soundcloud.com/user-547697242-761378935/sets/jean-plume-gwenael-ollivier-et/s-EE6bNDvnyXI
- **YouTube** : https://youtube.com/@jeanplume3174
- **Email** : jeanplume.musique@gmail.com

## Personnalisation
Pour personnaliser le site :

### Couleurs
Modifiez les variables CSS dans `/css/main.css` :
```css
:root {
    --color-primary: #87CEEB;
    --color-accent: #FF8C42;
    /* etc. */
}
```

### Contenu
- Textes : Modifiez directement dans les fichiers HTML
- Images : Remplacez les fichiers dans `/images/`
- Chansons : Remplacez les fichiers dans `/musics/` et mettez à jour les playlists dans `/js/player.js`

## Compatibilité navigateurs
- Chrome (recommandé)
- Firefox
- Safari
- Edge
- Navigateurs mobiles (iOS Safari, Chrome mobile)

## Performance
- Images optimisées recommandées (WebP si possible)
- Fichiers audio en MP3 (128-256 kbps)
- CSS et JS minifiés pour la production

## Support
Pour toute question : jeanplume.musique@gmail.com

## Crédits
Développé par Javed - 2025
Pour Jean-Plume : Duo musical Gwen Ollivier & Noémie Nael

---

**Note** : Ce site est entièrement responsive et fonctionne sans framework externe pour une performance optimale.
