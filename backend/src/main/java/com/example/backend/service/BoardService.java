package com.example.backend.service;

import com.example.backend.model.BoardEntity;
import com.example.backend.persistence.BoardRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class BoardService {

    @Autowired
    private BoardRepository repository;

    public BoardEntity creat(final BoardEntity entity){
        // Validations
        validate(entity);

        repository.save(entity);

        log.info("Entity Id : {} is saved.", entity.getId());

        return entity;
    }

    public BoardEntity update(final BoardEntity entity) {
        // (1) 저장할 엔티티가 유효한지 확인한다.
        validate(entity);

        // (2) 넘겨받은 엔티티 id를 이용해 BoardEntity를 가져온다.
        final Optional<BoardEntity> original = repository.findById(entity.getId());

        if(original.isPresent()) {
            // (3) 반환된 BoardEntity가 존재하면 값을 새 entity의 값으로 덮어 씌운다.
            final BoardEntity board = original.get();
            board.setTitle(entity.getTitle());
            board.setContent(entity.getContent());

            // (4) 데이터베이스에 새 값을 저장하고 리턴한다.
            return repository.save(board);
        } else {
            // (5) 존재하지 않는 엔티티는 업데이트할 수 없기 때문에 exception을 발생시킨다.
            throw new RuntimeException("Entity with id " + entity.getId() + " does not exist");
        }
    }

    public List<BoardEntity> delete(final BoardEntity entity) {
        // (1) 저장할 엔티티가 유효한지 확인하다. 이 메서드는 2.3.1 Create Todo에서 구현했다.
        validate(entity);

        try {
            // (2) 엔티티를 삭제한다.
            repository.delete(entity);
        }catch (Exception e) {
            // (3) exception 발생 시 id 와 exception을 로깅한다.
            log.error("error deleting entity ", entity.getId(),e);

            // (4) 컴트롤러로 exception을 날린다. 데이터베이스 내부 로직을 캡슐화하기 위해 e를 리천하지 않고 새 exception 오브젝트를 리턴한다.
            throw new RuntimeException("error deleting entity " + entity.getId());
        }
        // (5) 새 Board 리스트를 가져와 리턴한다.
        return retrieveAll();
    }

    private void validate(final BoardEntity entity){
        if(entity == null){
            log.warn("Entity cannot be null.");
            throw new RuntimeException("Entity cannot be null.");
        }

        if(entity.getUserId() == null){
            log.warn("Unknown user.");
            throw new RuntimeException("Unknown user.");
        }
    }

    public List<BoardEntity> retrieve(final String userId) { return repository.findByUserId(userId); }

    public List<BoardEntity> retrieveAll() { return repository.findAll(); }

    public BoardEntity getBoardById(String boardId) {
        return repository.findById(boardId)
                .orElseThrow(() -> new RuntimeException("Board not found"));
    }
}