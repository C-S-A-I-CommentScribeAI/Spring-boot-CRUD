package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Builder //쉽게 오브젝트를 생성하게 해줌
@NoArgsConstructor //안에 아무것도 없는 생성자를 만들어줌
@AllArgsConstructor //안에 모든 멤버변수를 매개변수로 받는 생성자를 구현해 줌
@Data //getter/setter 메서드를 구현해준다.
@Entity
@Table(name = "Todo")
public class TodoEntity {
    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private String id; // 이 오브젝트의 아이디
    private String userId; // 이 오브젝트를 생성한 유저의 아이디
    private String title; // Todo 타이틀 예) 운동하기
    private boolean done; // true - todo를 완료한 경우(checked)
    private Date creationDate; // 생성 날짜
}
