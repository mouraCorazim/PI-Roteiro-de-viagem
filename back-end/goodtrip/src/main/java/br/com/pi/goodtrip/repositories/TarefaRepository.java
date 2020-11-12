package br.com.pi.goodtrip.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.pi.goodtrip.models.Tarefa;

@Repository
public interface TarefaRepository extends CrudRepository<Tarefa, Integer>{
	
	String selectByTravelId = "SELECT * FROM tarefas WHERE fk_id_viagem = :viagem AND finalizada = :finalizada";
	
	String selectByDateAndTravelId = "SELECT * FROM tarefas WHERE data LIKE %:data% AND fk_id_viagem=:idviagem";
	
	String deleteTaskById = "DELETE FROM tarefas WHERE id=:id";
	
	@Modifying
	@Transactional
	@Query(value = deleteTaskById, nativeQuery = true)
	void apagarTarefa(int id);
	
	@Query(value = selectByTravelId, nativeQuery = true)
	List<Tarefa> encontrarTarefasPorIdViagem(int viagem, Boolean finalizada);
	
	@Query(value = selectByDateAndTravelId, nativeQuery = true)
	List<Tarefa> encontrarTarefas(String data, int idviagem);
	
}