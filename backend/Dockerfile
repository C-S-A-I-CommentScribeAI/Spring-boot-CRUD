FROM adoptopenjdk:11-jre-hotspot

WORKDIR /backend
COPY build/libs/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
