package com.example.backend.dto;

import com.example.backend.model.CommentEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class CommentDTO {
    private String id;
    private String userId;
    private String boardId;
    private String content;

    public CommentDTO(final CommentEntity entity){
        this.id = entity.getId();
        this.userId = entity.getUserId();
        this.boardId = entity.getBoardId();
        this.content = entity.getContent();
    }


    public static CommentEntity toEntity(final CommentDTO dto){
        return CommentEntity.builder()
                .id(dto.getId())
                .userId(dto.getUserId())
                .boardId(dto.getBoardId())
                .content(dto.getContent())
                .build();
    }
}
