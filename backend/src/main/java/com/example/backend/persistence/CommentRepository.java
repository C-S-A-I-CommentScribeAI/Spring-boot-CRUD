package com.example.backend.persistence;

import com.example.backend.model.CommentEntity;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<CommentEntity, String> {
    List<CommentEntity> findByUserId(String userId);
}
