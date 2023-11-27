package com.example.backend.service;

import com.example.backend.model.CommentEntity;
import com.example.backend.persistence.CommentRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class CommentService {

    @Autowired
    private CommentRepository repository;

    public List<CommentEntity> create(final CommentEntity entity) {
        // Validations
        validate(entity);

        // 댓글 저장
        repository.save(entity);

        log.info("Entity Id : {} is saved.", entity.getId());

        // 해당 게시판에 있는 모든 댓글을 반환
        return repository.findByBoardId(entity.getBoardId());
    }
    public List<CommentEntity> update(final CommentEntity entity){
        // (1) 저장할 엔티티가 유효한지 확인한다. 이 메서드는 2.3.1 Create Todo에서 구현했다.
        validate(entity);

        // (2) 넘겨받은 엔티티 id를 이용해 CommentEntity를 가져온다. 존재하지 않는 엔티티는 업데이트 할 수 없기 때문이다.
        final Optional<CommentEntity> original = repository.findById(entity.getId());

        if(original.isPresent()) {
            // (3) 반환된 CommentEntity가 존재하면 값을 새 entity의 값으로 덮어 씌운다.
            final CommentEntity comment = original.get();
            comment.setContent(entity.getContent());

            // (4) 데이터베이스에 새 값을 저장한다.
            repository.save(comment);
        }

        // 2.3.2 Retrieve Comment에서 만든 메서드를 이용해 유저의 모든 Comment 리스트를 리턴한다.
        return  repository.findByBoardId(entity.getBoardId());
    }

    public List<CommentEntity> delete(final CommentEntity entity) {
        // (1) 저장할 엔티티가 유효한지 확인하다. 이 메서드는 2.3.1 Create Todo에서 구현했다.
        validate(entity);

        try {
            // (2) 엔티티를 삭제한다.
            repository.delete(entity);
        }catch (Exception e) {
            // (3) exception 발생 시 id 와 exception을 로깅한다.
            log.error("error deleting entity ", entity.getId(),e);
        }

        // 2.3.2 Retrieve Comment에서 만든 메서드를 이용해 유저의 모든 Comment 리스트를 리턴한다.
        return  repository.findByBoardId(entity.getBoardId());
    }

    private void validate(final CommentEntity entity) {
        // (1) title이 null이거나 비어있으면 exception을 발생시킨다.
        if(entity.getContent() == null || entity.getContent().isEmpty()) {
            throw new RuntimeException("Comment content cannot be null or empty");
        }

        if(entity.getUserId() == null || entity.getUserId().isEmpty()) {
            throw new RuntimeException("Comment userId cannot be null or empty");
        }
    }

    public List<CommentEntity> retrieve(final String userId) {
        return repository.findByUserId(userId);
    }
}
