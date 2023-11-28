package com.example.backend.controller;

import com.example.backend.dto.BoardDTO;
import com.example.backend.dto.ResponseDTO;
import com.example.backend.model.BoardEntity;
import com.example.backend.model.CommentEntity;
import com.example.backend.service.BoardService;
import java.util.Collections;

import com.example.backend.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("board")
public class BoardController {

    @Autowired
    private BoardService boardService;
    @Autowired
    private CommentService commentService;

    Date currentTime = new Date();

    @PostMapping
    public ResponseEntity<?> createBoard(@RequestBody BoardDTO dto) {
        try {
            String temporaryUserId = "temporary-user"; // temporary user id

            // (1) BoardEntity로 변환한다.
            BoardEntity entity = BoardDTO.toEntity(dto);

            // (2) id를 null로 초기화한다. 생성 시에는 id가 없어야 하기 때문이다.
            entity.setId(null);

            // 현재시간을 저장해 만든 날짜와 업데이트 날짜를 저장
            entity.setCreatedAt(currentTime);
            entity.setUpdatedAt(currentTime);

            // (3) 임시 유저 아이디를 설정한다.
            entity.setUserId(temporaryUserId);

            // (4) 서비스를 이용해 Board 엔티티를 생성하고, 결과를 받는다.
            BoardEntity createdEntity = boardService.creat(entity);

            // (5) 생성된 엔티티를 BoardDTO로 변환한다.
            BoardDTO createdDto = new BoardDTO(createdEntity);

            // (6) 변환된 BoardDTO를 이용해 ResponseDTO를 초기화한다.
            ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder().data(Collections.singletonList(createdDto)).build();

            // (7) ResponseDTO를 리턴한다.
            return ResponseEntity.ok().body(response);
        } catch (Exception e) {
            // (8) 예외가 발생하는 경우, dto 대신 error에 메시지를 넣어 리턴한다.
            String error = e.getMessage();
            ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder().error(error).build();
            return ResponseEntity.badRequest().body(response);
        }
    }


    @GetMapping
    public ResponseEntity<?> retrieveBoardList() {
        // (1) 서비스 메서드의 retrieve 메서드를 사용해 Board 리스트를 가져온다
        List<BoardEntity> entities = boardService.retrieveAll();

        // (2) 자바 스트림을 이용해 리턴된 엔티티 리스트를 BoardDTO 리스트로 변환한다.
        List<BoardDTO> dtos = entities.stream().map(BoardDTO::new).collect(Collectors.toList());

        // (6) 변환된 BoardDTO 리스트를 이용해 ResponseDTO를 초기화한다.
        ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder().data(dtos).build();

        // (7) ReponseDTO를 리턴한다.
        return ResponseEntity.ok().body(response);
    }

    @PutMapping
    public ResponseEntity<?> updateBoard(@RequestBody BoardDTO dto) {
        String temporaryUserId = "temporary-user"; // temporary user id

        // (1) dto를 entity로 변환한다.
        BoardEntity entity = BoardDTO.toEntity(dto);

        // (2) id를 temporaryUserId로 초기화한다. 여기는 4장 인증과 인가에서 수정할 예정이다.
        entity.setUserId(temporaryUserId);

        // (3) 서비스를 이용해 entity를 업데이트한다.
        BoardEntity updatedEntity = boardService.update(entity);

        // (4) 업데이트된 엔티티를 BoardDTO로 변환한다.
        BoardDTO updatedDto = new BoardDTO(updatedEntity);

        // (5) 변환된 BoardDTO를 이용해 ResponseDTO를 초기화한다.
        ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder().data(Collections.singletonList(updatedDto)).build();

        // (6) ResponseDTO를 리턴한다.
        return ResponseEntity.ok().body(response);
    }

    @DeleteMapping
    public ResponseEntity<?> deleteBoard(@RequestBody BoardDTO dto) {
        try {
            String temporaryUserId = "temporary-user"; // temporary user id.

            // (1) dto를 entity로 변환한다.
            BoardEntity entity = BoardDTO.toEntity(dto);

            // (2) id를 temporaryUserId로 초기화한다. 여기는 4장 인증과 인가에서 수정할 예정이다.
            entity.setUserId(temporaryUserId);

            // (3) 서비스를 이용해 entity를 삭제한다.
            List<BoardEntity> entities = boardService.delete(entity);

            // (4) 자바 스트림을 이용해 리턴된 엔티티 리스트를 BoardDTO 리스트로 변환한다.
            List<BoardDTO> dtos = entities.stream().map(BoardDTO::new).collect(Collectors.toList());

            // (5) 변환된 BoardDTO 리스트를 이용해 ResposneDTO를 초기화한다.
            ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder().data(dtos).build();

            // (6) ResposneDTO를 리턴한다.
            return ResponseEntity.ok().body(response);
        } catch (Exception e) {
            // (8) 혹시 예외가 나는 경우 dto 대신 error에 메세지를 넣어 리턴한다.
            String error = e.getMessage();
            ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder().error(error).build();
            return ResponseEntity.badRequest().body(response);
        }
    }

    @GetMapping("/{boardId}")
    public ResponseEntity<?> getBoardDetail(@PathVariable String boardId) {
        try {
            BoardEntity entity = boardService.getBoardById(boardId);
            BoardDTO dto = new BoardDTO(entity);
            List<CommentEntity> commentEntities = commentService.retrieveByBoardId(boardId);
            dto.setComments(commentEntities); // BoardDTO 객체에 CommentEntity 리스트를 저장한다.

            // BoardDTO 객체를 리스트에 담는다.

            ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder()
                    .data((List<BoardDTO>) dto) // BoardDTO 리스트를 data 메서드에 전달
                    .build();
            return ResponseEntity.ok().body(response);
        } catch (Exception e) {
            String error = e.getMessage();
            ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder().error(error).build();
            return ResponseEntity.badRequest().body(response);
        }
    }
}
