package com.example.backend.controller;

import com.example.backend.dto.BoardDTO;
import com.example.backend.dto.ResponseDTO;
import com.example.backend.model.BoardEntity;
import com.example.backend.service.BoardService;
import java.util.Collections;
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
    private BoardService service;

    Date currentTime = new Date();

    @PostMapping
    public ResponseEntity<?> createBoard(@RequestBody BoardDTO dto){
        try{
            String temporaryUserId = "temporary-user"; // temporary user id

            // (1) BoardEntity로 변환한다.
            BoardEntity entity = BoardDTO.toEntity(dto);

            // (2) id를 null로 초기화한다. 생성 다시에는 id가 없어야 하기 때문이다.
            entity.setId(null);

            // 현제시간을 저장해 만든날짜와 업데이트날짜를 저장
            entity.setCreatedAt(currentTime);
            entity.setUpdatedAt(currentTime);

            // (3) 임시 유저 아이디를 설정해준다. 이 부분은 4장 인증과 인가에서 수정할 정정이다. 지금은 인증과 인가 기능이 없으므로 한 유저(temporary-user)만 로그인 없이 사용 가능한 애플리케이션인 셈이다.
            entity.setUserId(temporaryUserId);

            // (4) 서비스를 이용해 Board 엔티티를 생성한다.
            List<BoardEntity> entities = service.creat(entity);

            // (5) 자바 스트림을 이용해 리턴된 엔티티 리스트를 BoardDTO 리스트로 변환한다.
            List<BoardDTO> dtos = entities.stream().map(BoardDTO::new).collect(Collectors.toList());

            // (6) 변환된 TodoDTO 리스트를 이용해 ResponseDTO를 초기화한다.
            ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder().data(dtos).build();

            // (7) ResposneDTO를 리턴한다.
            return ResponseEntity.ok().body(response);
        } catch (Exception e){
            // (8) 혹시 예외가 나는 경우 dto 대신 error에 메세지를 넣어 리턴한다.

            String error = e.getMessage();
            ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder().error(error).build();
            return ResponseEntity.badRequest().body(response);

        }
    }

    @GetMapping
    public ResponseEntity<?> retrieveBoardList() {
        // (1) 서비스 메서드의 retrieve 메서드를 사용해 Board 리스트를 가져온다
        List<BoardEntity> entities = service.retrieveAll();

        // (2) 자바 스트림을 이용해 리턴된 엔티티 리스트를 BoardDTO 리스트로 변환한다.
        List<BoardDTO> dtos = entities.stream().map(BoardDTO::new).collect(Collectors.toList());

        // (6) 변환된 BoardDTO 리스트를 이용해 ResponseDTO를 초기화한다.
        ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder().data(dtos).build();

        // (7) ReponseDTO를 리턴한다.
        return ResponseEntity.ok().body(response);
    }

    @PutMapping
    public ResponseEntity<?> updateBoard(@RequestBody BoardDTO dto){
        String tmporaryUserId = "temporary-user"; // temporary user id

        // (1) dto를 entity로 변환한다.
        BoardEntity entity = BoardDTO.toEntity(dto);

        // (2) id를 temporaryUserId로 초기화한다. 여기는 4장 인증과 인가에서 수정할 예정이다.
        entity.setUserId(tmporaryUserId);

        // (3) 서비스를 이용해 entity를 업데이트한다.
        List<BoardEntity> entities = service.update(entity);

        // (4) 자바 스트림을 이용해 리턴된 엔티티 리스트를 BoardDTO 리스트로 변환한다.
        List<BoardDTO> dtos = entities.stream().map(BoardDTO::new).collect(Collectors.toList());

        // (5) 변환된 BoardDTO 리스트를 이용해 ResposneDTO를 초기화한다.
        ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder().data(dtos).build();

        // (6) ResposneDTO를 리턴한다.
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
            List<BoardEntity> entities = service.delete(entity);

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

    @GetMapping("/{id}")
    public ResponseEntity<?> getBoardDetail(@PathVariable String id) {
        try {
            BoardEntity entity = service.getBoardById(id);
            BoardDTO dto = new BoardDTO(entity);

            // BoardDTO 객체를 리스트에 담는다.
            List<BoardDTO> dtoList = Collections.singletonList(dto);

            ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder()
                    .data(dtoList) // BoardDTO 리스트를 data 메서드에 전달
                    .build();
            return ResponseEntity.ok().body(response);
        } catch (Exception e) {
            String error = e.getMessage();
            ResponseDTO<BoardDTO> response = ResponseDTO.<BoardDTO>builder().error(error).build();
            return ResponseEntity.badRequest().body(response);
        }
    }
}
