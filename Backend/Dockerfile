FROM openjdk:17
WORKDIR /app
COPY target/democrud-0.0.1-SNAPSHOT.jar ./democrud.jar
EXPOSE 8082
ENTRYPOINT ["java", "-jar", "democrud.jar"]
