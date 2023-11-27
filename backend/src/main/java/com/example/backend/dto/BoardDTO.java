package com.example.backend.dto;

import com.example.backend.model.BoardEntity;
import com.example.backend.model.CommentEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class BoardDTO {
    private String id;
    private String userId;
    private String title;
    private String content;
    private List<CommentEntity> comments; // CommentDTO 객체의 리스트로 변경
    private Date createdAt;
    private Date updatedAt;

    public BoardDTO(final BoardEntity entity){
        this.id = entity.getId();
        this.userId = entity.getUserId();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.comments = entity.getComments();
        this.createdAt = entity.getCreatedAt();
        this.updatedAt = entity.getUpdatedAt();
    }

    public static BoardEntity toEntity(final BoardDTO dto){
        return BoardEntity.builder()
                .id(dto.getId())
                .userId(dto.getUserId())
                .title(dto.getTitle())
                .content(dto.getContent())
                .comments(dto.getComments())
                .build();
    }
}
