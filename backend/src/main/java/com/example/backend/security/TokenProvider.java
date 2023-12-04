package com.example.backend.security;

import com.example.backend.model.UserEntity;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class TokenProvider {
    private static final String SECRET_KEY = "secret-key";

    public String create(UserEntity userEntity) {
        // 기한 지금으로 부터 1일로 설정
        Date expiryDate = Date.from(
                Instant.now()
                        .plus(1, ChronoUnit.DAYS)
        );

        // SECRET_KEY를 Key 객체로 변환
        Key key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes(StandardCharsets.UTF_8));

        // JWT Token 생성
        return Jwts.builder()
                // header에 들어갈 내용 및 서명을 하기 위한 SECRET_KEY
                .signWith(key, SignatureAlgorithm.HS512)
                // payload에 들어갈 내용
                .setSubject(userEntity.getId()) // sub
                .setIssuer("demo app") //iss
                .setIssuedAt(new Date()) // iat
                .setExpiration(expiryDate) // exp
                .compact();
    }

    public String validateAndGetUserId(String token) {
        // parseClaimsJws 메서드가 Base 64로 디코딩 및 파싱.
        // 즉, 헤더와 페이로드를 setSigningKey로 넘어온 시크릿을 이용해 서명 후, token의 서명과 비교
        // 위조되지 않았다면 페이로드(Claims)를 리턴, 위조라면 예외를 날림
        // 그 중 우리는 userId가 필요하므로 getBody를 부른다
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(SECRET_KEY)
                .build()
                .parseClaimsJws(token)
                .getBody();

        return claims.getSubject();
    }
}
