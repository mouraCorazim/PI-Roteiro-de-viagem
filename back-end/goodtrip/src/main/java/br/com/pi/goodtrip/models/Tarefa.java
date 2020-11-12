package br.com.pi.goodtrip.models;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tarefas")
public class Tarefa{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name ="titulo")
	private String titulo;
	
	@Column(name = "descricao")
	private String descricao;
	
	@Column(name = "data")
	//@Temporal(TemporalType.DATE)
	private String data;
	
	@Column(name = "horario")
	//@Temporal(TemporalType.TIME)
	private String horario;
	
	@Column(name = "custo")
	private float custo;
	
	@Column(name = "moeda")
	private int moeda;
	
	@Column(name = "transporte")
	private int transporte;
	
	@Column(name = "finalizada")
	private Boolean finalizada;
	
	@Column(name = "pessoal")
	private Boolean pessoal;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "fk_id_viagem")
	@JsonIgnoreProperties({"tarefas", "itens", "usuario", "embarques"})
	private Viagem viagem;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "fk_id_usuario")
	@JsonIgnoreProperties({"tarefas", "itens", "viagens", "embarques"})
	private Usuario usuario;
	
	public Tarefa() {}
	
	public Tarefa(Tarefa body, Usuario usuario, Viagem viagem) {
		
		this.setTitulo(body.getTitulo());
		this.setData(body.getData());
		this.setHorario(body.getHorario());
		this.setDescricao(body.getDescricao());
		this.setCusto(body.getCusto());
		this.setMoeda(body.getMoeda());
		this.setTransporte(body.getTransporte());
		this.setPessoal(body.getPessoal());
		this.setFinalizada(body.getFinalizada());
		
		this.setUsuario(usuario);
		this.setViagem(viagem);
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public String getHorario() {
		return horario;
	}

	public void setHorario(String horario) {
		this.horario = horario;
	}

	public float getCusto() {
		return custo;
	}

	public void setCusto(float custo) {
		this.custo = custo;
	}

	public int getMoeda() {
		return moeda;
	}

	public void setMoeda(int moeda) {
		this.moeda = moeda;
	}

	public int getTransporte() {
		return transporte;
	}

	public void setTransporte(int transporte) {
		this.transporte = transporte;
	}

	public Boolean getFinalizada() {
		return finalizada;
	}

	public void setFinalizada(Boolean finalizada) {
		this.finalizada = finalizada;
	}

	public Boolean getPessoal() {
		return pessoal;
	}

	public void setPessoal(Boolean pessoal) {
		this.pessoal = pessoal;
	}

	public Viagem getViagem() {
		return viagem;
	}

	public void setViagem(Viagem viagem) {
		this.viagem = viagem;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
}