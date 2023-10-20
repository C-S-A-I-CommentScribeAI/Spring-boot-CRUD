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

    public List<BoardEntity> creat(final BoardEntity entity){
        // Validations
        validate(entity);

        repository.save(entity);

        log.info("Entity Id : {} is saved.", entity.getId());

        return repository.findByUserId(entity.getUserId());
    }

    public List<BoardEntity> update(final BoardEntity entity) {
        // (1) 저장할 엔티티가 유효한지 확인한다. 이 메서드는 2.3.1 Create Todo에서 구현했다.
        validate(entity);

        // (2) 넘겨받은 엔티티 id를 이용해 BoardEntity를 가져온다. 존재하지 않는 엔티티는 업데이트 할 수 없기 때문이다.
        final Optional<BoardEntity> original = repository.findById(entity.getId());

        if(original.isPresent()) {
            // (3) 반환된 BoardEntity가 존재하면 값을 새 entity의 값으로 덮어 씌운다.
            final BoardEntity board = original.get();
            board.setTitle(entity.getTitle());
            board.setContent(entity.getContent());

            // (4) 데이터베이스에 새 값을 저장한다.
            repository.save(board);
        }

        // 2.3.2 Retrieve Board에서 만든 메서드를 이용해 유저의 모든 Board 리스트를 리턴한다.
        return  retrieve(entity.getUserId());
    }

    private  void validate(final BoardEntity entity){
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
}
