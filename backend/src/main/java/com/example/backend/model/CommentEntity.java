package com.example.backend.model;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name="Comment")
public class CommentEntity {
    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private String id;
    private String userId;
    private String content;

    @ManyToOne
    @JoinColumn(name = "boardId")
    private BoardEntity board;

    public String getBoardId() {
        return board != null ? board.getId() : null;
    }
}
