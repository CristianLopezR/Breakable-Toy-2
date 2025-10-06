package com.example.breakabletoy;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;
import org.springframework.web.bind.annotation.GetMapping;


@SpringBootApplication
@RestController
@CrossOrigin(origins = "http://127.0.0.1:5173")
public class SpotifyController {
	@Autowired
	private SpotifyService spotifyService;

	public static void main(String[] args) {
		SpringApplication.run(SpotifyController.class, args);
	}

	@PostMapping("/auth/spotify")
	public String fetchAnUserLogged(){
		return spotifyService.prepareAuth();
	}

	@GetMapping("/loggedin")
	public RedirectView recieveSpotifyCode(@RequestParam String code, @RequestParam String state) {
		spotifyService.fetchSpotifyCode(code);

		return new RedirectView("http://127.0.0.1:5173/Home");
	}

	@GetMapping("/me/top/artists")
	public String sendTopArtist() throws IOException, InterruptedException{
		return spotifyService.askForTopArtists();
	}

	@GetMapping("/artist")
	public String sendArtist(@RequestParam String name) throws IOException, InterruptedException{
		return spotifyService.askForArtist(name);
	}
	
	@GetMapping("/album")
	public String sendAlbum(@RequestParam String name) throws IOException, InterruptedException{
		return spotifyService.askForAlbum(name);
	}

	@GetMapping("/search")
	public String sendSerchRequest(@RequestParam String q) throws IOException, InterruptedException{
		System.out.println(q);
		return spotifyService.askforSomething(q);
	}
	

}
