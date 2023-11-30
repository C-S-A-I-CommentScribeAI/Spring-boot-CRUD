package com.example.backend.controller;

import com.example.backend.dto.CommentDTO;
import com.example.backend.dto.ResponseDTO;
import com.example.backend.model.BoardEntity;
import com.example.backend.model.CommentEntity;
import com.example.backend.service.BoardService;
import com.example.backend.service.CommentService;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import javax.xml.stream.events.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("comment")
public class CommentController {

    @Autowired
    private CommentService commentService;
    @Autowired
    private BoardService boardService;

    @PostMapping
    public ResponseEntity<?> createComment(@RequestBody CommentDTO dto) {
        try {
            String temporaryUserId = "temporary-user"; // temporary user id

            CommentEntity entity = CommentDTO.toEntity(dto);

            entity.setId(null);

           entity.setUserId(temporaryUserId);

            // 댓글 저장
            List<CommentEntity> entities = commentService.create(entity);

            // 저장된 댓글을 DTO로 변환
            List<CommentDTO> createDto = entities.stream().map(CommentDTO::new).collect(Collectors.toList());

            ResponseDTO<CommentDTO> response = ResponseDTO.<CommentDTO>builder().data(createDto).build();

            return ResponseEntity.ok().body(response);
        } catch (Exception e) {
            // 예외 처리
            String error = e.getMessage();
            ResponseDTO<CommentDTO> response = ResponseDTO.<CommentDTO>builder().error(error).build();
            return ResponseEntity.badRequest().body(response);
        }
    }

    @PutMapping
    public ResponseEntity<?> updateComment(@RequestBody CommentDTO dto){
        String temporaryUserId = "temporary-user"; // temporary user id

        // (1) CommentEntity로 변환한다.
        CommentEntity entity = CommentDTO.toEntity(dto);

        entity.setUserId(temporaryUserId);

        List<CommentEntity> entities = commentService.update(entity);

        List<CommentDTO> dtos = entities.stream().map(CommentDTO::new).collect(Collectors.toList());

        ResponseDTO<CommentDTO> response = ResponseDTO.<CommentDTO>builder().data(dtos).build();

        return ResponseEntity.ok().body(response);
    }

    @DeleteMapping
    public ResponseEntity<?> deleteComment(@RequestBody CommentDTO dto) {
        try{
            String temporaryUserId = "temporary-user"; // temporary user id

            // (1) CommentEntity로 변환한다.
            CommentEntity entity = CommentDTO.toEntity(dto);

            // (2) 임시 유저 아이디를 설정해준다. 이 부분은 4장 인증과 인가에서 수정할 예정이다. 지금은 인증과 인가 기능이 없으므로 한 유저(temporary-user)만 로그인 없이 사용 가능한 애플리케이션인 셈이다.
            entity.setUserId(temporaryUserId);

            // (3) 서비스를 이용해 entity을 삭제한다.
            List<CommentEntity> entities = commentService.delete(entity);

            // (4) 자바 스트림을 이용해 리턴된 엔티티 리스트를 CommentDTO 리스트로 변환한다.
            List<CommentDTO> dtos = entities.stream().map(CommentDTO::new).collect(Collectors.toList());

            // (5) 변환된 CommentDTO 리스트를 이용해 ResposneDTO를 초기화한다.
            ResponseDTO<CommentDTO> response = ResponseDTO.<CommentDTO>builder().data(dtos).build();

            // (6) ResponseDTO를 리턴한다.
            return ResponseEntity.ok().body(response);
        }catch (Exception e){
            // (8) 혹시 예외가 나는 경우 dto 대신 error에 메세지를 넣어 리턴한다.
            String error = e.getMessage();
            ResponseDTO<CommentDTO> response = ResponseDTO.<CommentDTO>builder().error(error).build();
            return ResponseEntity.badRequest().body(response);
        }
    }
}
