package com.project.democrud.UserRepo;

import com.project.democrud.entity.UserCon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRep extends JpaRepository<UserCon, Long> {

    @Query("SELECT u FROM UserCon u WHERE u.login = ?1 AND u.passwd = ?2")
    Optional<UserCon> findUserByLoginAndPasswd(String login, String passwd) ;

    @Query("SELECT u FROM UserCon u WHERE u.login = ?1 AND u.passwd = ?2")
    UserCon getUserByLoginAndPasswd(String login, String passwd);

    @Query("SELECT u FROM UserCon u WHERE u.login = ?1")
    UserCon findUserByLogin(String login);

}
