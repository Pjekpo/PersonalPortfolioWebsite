  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  
  Music section (Spotify)
  - To override the default artist, create a `.env` file and set:
    
    VITE_SPOTIFY_ARTIST_URL=https://open.spotify.com/artist/YourArtistId
    
  - The default fallback points to the artist linked in the footer.

  
  Resume download
  - The "Download Resume" button serves `/PraiseEkpoCV.pdf` from the `public/` folder.
  - Add your file at `public/PraiseEkpoCV.pdf` (exact name) so it opens/downloads correctly.