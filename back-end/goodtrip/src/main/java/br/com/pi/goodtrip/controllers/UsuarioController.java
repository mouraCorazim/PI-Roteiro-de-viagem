package br.com.pi.goodtrip.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.pi.goodtrip.models.Usuario;
import br.com.pi.goodtrip.repositories.UsuarioRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("usuarios")
public class UsuarioController {
	
	@Autowired
	private UsuarioRepository repository;
	
	@GetMapping("ler/{id}")
	public Optional<Usuario> lerConvite(@PathVariable(value = "id") int id){
		
		return repository.findById(id);
	}
	
	@PostMapping("escrever")
	public void escreverUsuario(@RequestBody Usuario usuario) {
		
		repository.save(usuario);
	}
}