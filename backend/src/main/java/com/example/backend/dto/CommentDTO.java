package com.example.backend.dto;

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

    public CommentDTO(final CommentDTO dto){
        this.id = dto.getId();
        this.userId = dto.getUserId();
        this.boardId = dto.getBoardId();
        this.content = dto.getContent();
    }

    public static CommentDTO toEntity(final CommentDTO dto){
        return CommentDTO.builder()
                .id(dto.getId())
                .userId(dto.getUserId())
                .boardId(dto.getBoardId())
                .content(dto.getContent())
                .build();
    }
}
