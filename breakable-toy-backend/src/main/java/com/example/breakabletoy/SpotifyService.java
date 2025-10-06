package com.example.breakabletoy;

import java.io.IOException;
import java.security.SecureRandom;
import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class SpotifyService {
    @Autowired
    private SpotifyRepository spotifyRepository;
    private String redirectUri = "http://127.0.0.1:8080/loggedin";

    public String prepareAuth(){
        var state = generateRandomString(16);
        String scope = "user-read-private user-read-email user-read-playback-state user-top-read";    
        return spotifyRepository.getTokens(state, scope, redirectUri).getUrl();
    }

    private String generateRandomString(int length) {
        SecureRandom secureRandom = new SecureRandom();
        byte[] bytes = new byte[length];
        secureRandom.nextBytes(bytes);
        return Base64.getUrlEncoder().withoutPadding().encodeToString(bytes).substring(0, length);
    }

    public void fetchSpotifyCode(String code){
        spotifyRepository.setSpotifyCode(code,redirectUri);
    }

    public String askForTopArtists() throws IOException, InterruptedException{
        return spotifyRepository.fetchTopArtist();
    }

    public String askForArtist(String artist) throws IOException, InterruptedException{
        return spotifyRepository.fetchArtist(artist);
    }

    public String askForAlbum(String album) throws IOException, InterruptedException{
        return spotifyRepository.fetchAlbum(album);
    }

    public String askforSomething(String something) throws IOException, InterruptedException{
        return spotifyRepository.searchSomething(something);
    }
}
